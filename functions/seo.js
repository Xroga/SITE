// functions/seo.js
// All SEO data embedded directly (no JSON import)
const seoData = {
  default: {
    title: "Xroga AI · See Magic",
    description: "Website + auto seo deploy, Create Images, Fast & deep AI conversations, Web search Explore. travel deals, Islamic Q&A, affordable shop 2500+ brand - boycott alerts.",
    keywords: "Xroga AI, AI assistant, code expert, creative AI, deep thought, Islamic AI, Quran, Hadith, halal haram, travel booking, cheap flights, hotel deals, car rental, boycott checker, ethical shopping, brand alerts, productivity, trip planner",
    ogTitle: "Xroga AI – See Magic",
    ogDesc: "Website build. done. & deploy, Create, Explore & Learn. travel deals, Islamic Q&A, ethical shopping with boycott alerts, and deep AI conversations – all in one place.",
    ogImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    twitterTitle: "Xroga AI – See Magic",
    twitterDesc: "Code, Create, Explore & Learn. Islamic guidance, travel planning, ethical shopping, and AI chat – all in Xroga AI.",
    twitterImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    jsonld: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Xroga AI",
      "description": "Xroga AI – Build Websites Code Expert, Create Images Fast + Creative daily, Deep Thinker, Islamic Learning, found (flights, hotels, cars), & affordable ethical shopping with 2500+ brand boycott alerts.",
      "applicationCategory": "AI Assistant",
      "operatingSystem": "All",
      "url": "https://xroga.com/",
      "author": { "@type": "Organization", "name": "Xroga AI" },
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "screenshot": "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
      "keywords": "AI chat, code assistant, creative AI, deep thought, Islamic AI, Quran, Hadith, halal haram, travel booking, cheap flights, hotel deals, car rental, boycott checker, ethical shopping, brand alerts, productivity, trip planner",
      "featureList": [
        "Code Expert Mode – AI-powered coding help",
        "Lightning & Creative Mode – fast, imaginative responses",
        "Deep Thought Mode – in-depth analysis and reasoning",
        "Islamic Learning – Quran, Hadith, daily Islamic topics, Halal/Haram guidance",
        "Travel Planner – Book flights, hotels, and cars at affordable prices",
        "Ethical Shopping – Browse 2500+ brands with real-time boycott alerts",
        "Voice input and output", "Task management", "General discussion"
      ]
    }
  },
  ai: {
    title: "AI Modes: Code, Creative & Deep Thought – Xroga AI",
    description: "Switch between Code Expert, Lightning Creative, and Deep Thought modes. AI that builds websites, creates images, and thinks deeply – all on Xroga.",
    keywords: "Xroga AI, AI assistant, code expert, creative AI, deep thought, web search, image creation",
    ogTitle: "Xroga AI – All AI Modes in One Place",
    ogDesc: "Code, create, and reason deeply with Xroga's AI modes. Fast, creative, and intelligent.",
    ogImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    twitterTitle: "Xroga AI Modes",
    twitterDesc: "Experience Code Expert, Creative & Deep Thought AI.",
    twitterImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    jsonld: {
      name: "Xroga AI – AI Modes",
      description: "Multiple AI modes: Code Expert, Lightning Creative, Deep Thought. Build websites, generate images, solve complex problems.",
      featureList: ["Code Expert Mode", "Lightning & Creative Mode", "Deep Thought Mode", "Image Creation", "Web Search"]
    }
  },
  islamic: {
    title: "Islamic Q&A – Quran, Hadith, Halal/Haram Guidance | Xroga AI",
    description: "Ask Islamic questions, get answers from Quran and Hadith. Daily Islamic topics, halal/haram guidance, and prayer reminders.",
    keywords: "Islamic Q&A, Quran, Hadith, halal haram, Islamic AI, Muslim assistant, prayer times",
    ogTitle: "Islamic Learning & Q&A – Xroga AI",
    ogDesc: "Your AI assistant for Islamic knowledge: Quran, Hadith, fatwa-style answers, and daily spiritual reminders.",
    ogImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    twitterTitle: "Islamic Q&A on Xroga AI",
    twitterDesc: "Learn Islam with AI – Quran, Hadith, halal/haram.",
    twitterImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    jsonld: {
      name: "Xroga AI – Islamic Q&A",
      description: "Islamic learning platform with AI: Quranic answers, Hadith explanations, halal/haram checks, and daily Islamic topics.",
      featureList: ["Quran & Hadith Search", "Halal/Haram Guidance", "Daily Islamic Topics", "Prayer Time Reminders"]
    }
  },
  travel: {
    title: "Travel Deals: Cheap Flights, Hotels & Car Rental – Xroga Travel",
    description: "Find affordable flights, hotel deals, and car rentals. AI-powered travel planner with real-time price comparison.",
    keywords: "cheap flights, hotel deals, car rental, travel deals, trip planner, affordable travel, flight comparison",
    ogTitle: "Xroga Travel – Best Deals on Flights, Hotels & Cars",
    ogDesc: "Save money on your next trip. Xroga Travel AI finds cheap flights, hotels, and rental cars instantly.",
    ogImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    twitterTitle: "Xroga Travel Deals",
    twitterDesc: "Affordable flights, hotels & car rentals – AI finds the best prices.",
    twitterImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    jsonld: {
      name: "Xroga Travel",
      description: "Travel booking AI: cheap flights, hotel deals, car rental comparison. Trip planner included.",
      featureList: ["Flight Search", "Hotel Deals", "Car Rental", "Trip Planner", "Price Alerts"]
    }
  },
  boycott: {
    title: "Boycott Alerts & Affordable Ethical Shopping – 2500+ Brands | Xroga",
    description: "Real-time boycott alerts for 2500+ brands. Shop ethical alternatives at affordable prices. Updated daily with Islamic principles.",
    keywords: "boycott alerts, ethical shopping, brand boycott, halal shopping, affordable products, Xroga boycott, Palestine boycott",
    ogTitle: "Ethical Shopping with Boycott Alerts – Xroga",
    ogDesc: "Know which brands to boycott. Find affordable, ethical alternatives. Real-time alerts for 2500+ companies.",
    ogImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    twitterTitle: "Boycott Alerts & Ethical Shop",
    twitterDesc: "Shop with conscience. Real-time boycott alerts and affordable alternatives.",
    twitterImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    jsonld: {
      name: "Xroga Boycott Alerts & Ethical Shop",
      description: "Boycott checker for 2500+ brands. Islamic ethical shopping guide with affordable alternatives.",
      featureList: ["Real-time Boycott Alerts", "2500+ Brands Monitored", "Ethical Alternatives", "Affordable Prices", "Daily Updates"]
    }
  }
};

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const feature = url.searchParams.get('feature');

  const response = await next();
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) return response;

  const data = seoData[feature] || seoData['default'];
  if (!data) return response;

  let html = await response.text();

  // Replace all meta tags
  html = html.replace(/<title>.*?<\/title>/, `<title>${data.title}</title>`);
  html = html.replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${data.description}"`);
  html = html.replace(/<meta name="keywords" content=".*?"/, `<meta name="keywords" content="${data.keywords}"`);
  html = html.replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${data.ogTitle}"`);
  html = html.replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${data.ogDesc}"`);
  html = html.replace(/<meta property="og:image" content=".*?"/, `<meta property="og:image" content="${data.ogImage}"`);
  html = html.replace(/<meta name="twitter:title" content=".*?"/, `<meta name="twitter:title" content="${data.twitterTitle}"`);
  html = html.replace(/<meta name="twitter:description" content=".*?"/, `<meta name="twitter:description" content="${data.twitterDesc}"`);
  html = html.replace(/<meta name="twitter:image" content=".*?"/, `<meta name="twitter:image" content="${data.twitterImage}"`);

  const canonical = feature ? `https://xroga.com/?feature=${feature}` : 'https://xroga.com/';
  html = html.replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="${canonical}"`);

  const defaultJsonLd = seoData['default'].jsonld;
  const newJsonLd = { ...defaultJsonLd, ...(data.jsonld || {}) };
  newJsonLd.url = canonical;
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
