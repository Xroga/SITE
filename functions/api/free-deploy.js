// functions/api/free-deploy.js
export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // --- Serve deployed site from subdomain (e.g., https://myapp.xroga.com) ---
  const host = url.hostname;
  if (host.endsWith('.xroga.com')) {
    const subdomain = host.replace('.xroga.com', '');
    const html = await env.KV.get(`subdomain:${subdomain}`);
    if (html) {
      return new Response(html, { headers: { 'Content-Type': 'text/html' } });
    }
    // If subdomain not found, show 404 (optional: fallback to frontend)
    return new Response('Site not found', { status: 404 });
  }

  // --- Backward compatibility: /site/:subdomain ---
  if (url.pathname.startsWith('/site/')) {
    const subdomain = url.pathname.split('/site/')[1];
    if (!subdomain) return new Response('Not found', { status: 404 });
    const html = await env.KV.get(`subdomain:${subdomain}`);
    if (!html) return new Response('Site not found', { status: 404 });
    return new Response(html, { headers: { 'Content-Type': 'text/html' } });
  }

  // --- Serve frontend at root ---
  if (request.method === 'GET' && (url.pathname === '/' || url.pathname === '')) {
    // You can serve your index.html here (or embed it)
    return new Response(FRONTEND_HTML, { headers: { 'Content-Type': 'text/html' } });
  }

  // --- POST /api/free-deploy ---
  if (request.method === 'POST' && url.pathname === '/api/free-deploy') {
    try {
      const { code, subdomain } = await request.json();

      // Validate subdomain
      if (!subdomain || !/^[a-z0-9-]{3,30}$/.test(subdomain)) {
        return Response.json({ success: false, message: 'Invalid subdomain. Use 3-30 lowercase letters, numbers, hyphens.' }, { status: 400 });
      }

      // Check if subdomain already taken
      const existing = await env.KV.get(`subdomain:${subdomain}`);
      if (existing) {
        return Response.json({ success: false, message: 'Subdomain already taken.' }, { status: 409 });
      }

      // Optional: first 100 users limit
      const userCount = await checkAndIncrementUserCounter(env);
      if (userCount > 100) {
        return Response.json({ success: false, message: 'Sorry, the 100 free deployments are already claimed.' }, { status: 403 });
      }

      // Store the HTML
      await env.KV.put(`subdomain:${subdomain}`, code, { expirationTtl: 86400 * 30 }); // 30 days

      // Clean subdomain URL
      const liveUrl = `https://${subdomain}.xroga.com`;

      return Response.json({
        success: true,
        siteUrl: liveUrl,
        domain: `${subdomain}.xroga.com`
      });
    } catch (err) {
      console.error(err);
      return Response.json({ success: false, message: err.message }, { status: 500 });
    }
  }

  return new Response('Not found', { status: 404 });
}

async function checkAndIncrementUserCounter(env) {
  const COUNTER_KEY = 'deployment_counter';
  let counter = await env.KV.get(COUNTER_KEY, { type: 'json' });
  if (counter === null) {
    await env.KV.put(COUNTER_KEY, JSON.stringify({ count: 1 }));
    return 1;
  }
  if (counter.count >= 100) return 101;
  const newCount = counter.count + 1;
  await env.KV.put(COUNTER_KEY, JSON.stringify({ count: newCount }));
  return newCount;
}

// --- Optional: embed your frontend HTML if not served separately ---
// If you already serve index.html from Pages, you can remove this.
const FRONTEND_HTML = `<!DOCTYPE html>...`; // your index.html content
