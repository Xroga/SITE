// functions/seo.js
import seoData from '../data/seo.json' assert { type: 'json' };

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const feature = url.searchParams.get('feature');

  // Let the request go normally first to get the static HTML.
  const response = await next();
  
  // If the response is not HTML or no feature specified (and no default override needed),
  // just return the original response.
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) return response;

  // Get the SEO data for the requested feature, or use default.
  const data = seoData[feature] || seoData['default'];
  if (!data) return response; // safety

  let html = await response.text();

  // Apply replacements (same as before)
  html = html.replace(/<title>.*?<\/title>/, `<title>${data.title}</title>`);
  html = html.replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${data.description}"`);
  html = html.replace(/<meta name="keywords" content=".*?"/, `<meta name="keywords" content="${data.keywords}"`);
  html = html.replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${data.ogTitle}"`);
  html = html.replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${data.ogDesc}"`);
  html = html.replace(/<meta property="og:image" content=".*?"/, `<meta property="og:image" content="${data.ogImage}"`);
  html = html.replace(/<meta name="twitter:title" content=".*?"/, `<meta name="twitter:title" content="${data.twitterTitle}"`);
  html = html.replace(/<meta name="twitter:description" content=".*?"/, `<meta name="twitter:description" content="${data.twitterDesc}"`);
  html = html.replace(/<meta name="twitter:image" content=".*?"/, `<meta name="twitter:image" content="${data.twitterImage}"`);

  // Canonical
  const canonical = feature ? `https://xroga.com/?feature=${feature}` : 'https://xroga.com/';
  html = html.replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="${canonical}"`);

  // JSON-LD
  const defaultJsonLd = seoData['default']?.jsonld || {};
  const newJsonLd = { ...defaultJsonLd, ...(data.jsonld || {}) };
  newJsonLd.url = canonical;
  // Adjust type
  if (feature === 'boycott') newJsonLd["@type"] = "Shopping";
  else if (feature === 'travel') newJsonLd["@type"] = "TravelAction";
  else if (feature === 'islamic') newJsonLd["@type"] = "EducationalOrganization";
  else newJsonLd["@type"] = "WebApplication";

  const jsonLdRegex = /<script type="application\/ld\+json" id="main-jsonld">[\s\S]*?<\/script>/;
  html = html.replace(jsonLdRegex, `<script type="application/ld+json" id="main-jsonld">${JSON.stringify(newJsonLd)}</script>`);

  return new Response(html, {
    headers: { 'content-type': 'text/html' }
  });
}
