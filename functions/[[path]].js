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
      "@type": ["Brand", "WebApplication"],
      "name": "Xroga AI",
      "slogan": "See Magic",
      "description": "Xroga AI – Build Websites, Create Images, Deep Thinker, Islamic Learning, Travel Deals, & Ethical Shopping with boycott alerts.",
      "url": "https://xroga.com/",
      "logo": "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": 1
      },
      "founder": {
        "@type": "Person",
        "name": "Muhammad Ibrahim",
        "age": 18,
        "jobTitle": "Co‑founder & SEO Specialist",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "PK"
        }
      },
      "sameAs": [
        "https://x.com/Xroga_AI",
        "https://www.instagram.com/xroga_ai/",
        "https://www.facebook.com/profile.php?id=61584249600838",
        "https://www.youtube.com/@XrogaAI"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "hello@xroga.com"
      },
      "applicationCategory": "AI Assistant",
      "operatingSystem": "All",
      "offers": [
        {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free plan – generous access to all core features with fair usage limits."
        },
        {
          "@type": "Offer",
          "description": "Paid plan – unlimited usage across all AI models. Flexible pricing: no fixed fee, pay‑per‑use, monthly plans, one‑time purchase, and annual plans available. Exact cost depends on the model or feature you choose."
        }
      ],
      "knowsAbout": [
        "Artificial Intelligence",
        "Islamic Knowledge",
        "Travel Booking",
        "Ethical Shopping",
        "Web Development"
      ],
      "featureList": [
        "Code Expert Mode – AI-powered website builder",
        "Lightning & Creative Mode – fast, imaginative responses",
        "Deep Thought Mode – in-depth analysis and reasoning",
        "Islamic Learning – Quran, Hadith, daily Islamic topics",
        "Travel Planner – Book flights, hotels, and cars",
        "Ethical Shopping – 2500+ brands with boycott alerts",
        "Voice input and output",
        "Task management",
        "General discussion"
      ]
    }
  },
  ai: {
    title: "AI Modes: Code, fast Creative & Deep Thought, shop/boycot, travel, islam, – Xroga AI",
    description: "Switch Code Expert, Lightning Creative, and Deep Thought modes. AI that builds websites, creates images, and thinks deeply, travel found, shop afforadable check boycot & islamic guidence  – all on Xroga.",
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
    description: "Real-time boycott alerts for 2500+ brands. Shop affordable items online with automatic boycott checks and discover ethical alternatives. Updated daily with Islamic principles.",
    keywords: "boycott alerts, ethical shopping, brand boycott, halal shopping, affordable products, online shopping with boycott check, ethical alternatives, Xroga boycott, Palestine boycott, shop with conscience",
    ogTitle: "Ethical Shopping with Boycott Alerts – Xroga",
    ogDesc: "Know which brands to boycott. Find affordable, ethical alternatives online. Real-time alerts for 2500+ companies.",
    ogImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    twitterTitle: "Boycott Alerts & Ethical Shop",
    twitterDesc: "Shop affordable items online with automatic boycott checks. Discover ethical alternatives instantly.",
    twitterImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    jsonld: {
      name: "Xroga Boycott Alerts & Ethical Shop",
      description: "Shop affordable online items with real-time boycott verification. 2500+ brands monitored and ethical alternatives provided daily. Islamic consumption guide.",
      featureList: [
        "Real-time Boycott Alerts",
        "2500+ Brands Monitored",
        "Ethical Alternatives",
        "Affordable Prices",
        "Shop with Boycott Check",
        "Daily Updates"
      ]
    }
  },
  creative: {
    title: "Lightning & Creative AI – Image Generation, Design, & Social Media | Xroga AI",
    description: "Generate thumbnails, mobile posts, product images, remove backgrounds, upscale, create print‑on‑demand designs for mugs, t‑shirts, trousers, jackets. Auto‑schedule social media image posts. All with Xroga's Lightning & Creative AI.",
    keywords: "image generation, thumbnail maker, mobile posts, auto post scheduler, product image generator, background remover, image upscaler, print on demand designs, custom mugs, t-shirt designs, social media automation, Xroga AI creative mode",
    ogTitle: "Xroga AI – Lightning & Creative: Image Generator & Designer",
    ogDesc: "Create thumbnails, product shots, remove backgrounds, upscale, design merch (mugs, tees), and auto‑post to social media. All in one creative AI.",
    ogImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    twitterTitle: "Xroga AI – Lightning & Creative",
    twitterDesc: "AI for image creation, background removal, upscale, print‑on‑demand designs, and scheduled social posts.",
    twitterImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    jsonld: {
      name: "Xroga AI – Lightning & Creative Mode",
      description: "Creative AI for generating thumbnails, product images, social media posts, background removal, upscaling, and designing print‑on‑demand merchandise (mugs, t‑shirts, trousers, jackets) with automated scheduling.",
      featureList: [
        "AI Image Generation (thumbnails, posts, product shots)",
        "Background Removal",
        "Image Upscaling",
        "Print‑on‑Demand Design (mugs, t‑shirts, trousers, jackets)",
        "Resale Images for Merch",
        "Auto‑Schedule Social Media Image Posts",
        "Fast & Creative Responses"
      ]
    }
  },
  code: {
    title: "Code Expert – Instant AI Website Builder with Custom Domain | Xroga AI",
    description: "Build any website instantly — portfolio, landing page, ecommerce store, restaurant, booking, real estate, plumbing, link sites & more. No technical skills needed. Host with custom domain.",
    keywords: "AI website builder, instant website, custom domain hosting, no‑code website builder, portfolio builder, landing page creator, ecommerce store builder, restaurant website, booking website, real estate site, plumbing site, link sites, Xroga AI",
    ogTitle: "Xroga AI – Code Expert: Instant Website Builder",
    ogDesc: "Create and host websites instantly with custom domains. No technical skills. Portfolio, landing pages, ecommerce, and more.",
    ogImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    twitterTitle: "Code Expert – Xroga AI",
    twitterDesc: "Build websites instantly. No coding. Custom domain. Portfolio, ecommerce, restaurant, and more.",
    twitterImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    jsonld: {
      name: "Xroga AI – Code Expert Website Builder",
      description: "AI-powered website builder that instantly creates and hosts professional websites with custom domains. No technical skills required. Create portfolios, landing pages, ecommerce stores, restaurant sites, booking systems, real estate listings, plumbing sites, link sites, and more.",
      featureList: [
        "Instant Website Generation",
        "Custom Domain Hosting",
        "No Technical Skills Required",
        "Portfolio Sites",
        "Landing Pages",
        "E‑commerce Stores",
        "Restaurant Websites",
        "Booking Systems",
        "Real Estate Listings",
        "Plumbing Sites",
        "Link Sites",
        "And Many More"
      ]
    }
  },
  deepthought: {
    title: "Deep Thought Mode – In-Depth Analysis | Xroga AI",
    description: "Use Deep Thought mode for complex reasoning, research, and detailed analysis.",
    keywords: "deep AI, reasoning AI, research assistant, Xroga AI deep thought",
    ogTitle: "Xroga AI – Deep Thought Mode",
    ogDesc: "In-depth reasoning and analysis with Xroga's Deep Thought mode.",
    ogImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    twitterTitle: "Deep Thought – Xroga AI",
    twitterDesc: "Complex reasoning and research.",
    twitterImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    jsonld: {
      name: "Xroga AI – Deep Thought",
      description: "Advanced AI mode for deep reasoning, research, and complex analysis.",
      featureList: ["Complex Reasoning", "Research", "In-depth Analysis"]
    }
  },
  websearch: {
    title: "AI Web Search – Explore the Web with Xroga AI",
    description: "Use Xroga AI to search the web, get real-time answers, summaries, and explore topics deeply. All-in-one AI assistant with built-in web search capabilities.",
    keywords: "web search AI, online search assistant, real-time web search, AI with internet, explore web, Xroga web search, search engine AI",
    ogTitle: "Xroga AI – Web Search & Explore",
    ogDesc: "Search the web with Xroga AI. Get real-time answers, summaries, and explore any topic.",
    ogImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    twitterTitle: "Xroga AI – Web Search",
    twitterDesc: "Explore the web with Xroga. Real-time AI search and answers.",
    twitterImage: "https://i.postimg.cc/J0Sz6mkX/XROGAAI-1-removebg-preview.png",
    jsonld: {
      name: "Xroga AI – Web Search",
      description: "AI-powered web search and exploration tool. Get real-time answers, summaries, and in-depth topic research.",
      featureList: [
        "Real-time Web Search",
        "Summarization",
        "Topic Exploration",
        "Fact-checking"
      ]
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
