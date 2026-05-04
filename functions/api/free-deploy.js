// functions/api/free-deploy.js
export async function onRequest(context) {
  const { request, env } = context;  // env now has env.KV
  const url = new URL(request.url);

  // Serve deployed site: GET /site/:subdomain
  if (url.pathname.startsWith('/site/')) {
    const subdomain = url.pathname.split('/site/')[1];
    if (!subdomain) return new Response('Not found', { status: 404 });
    const html = await env.KV.get(`subdomain:${subdomain}`);   // ← changed
    if (!html) return new Response('Site not found', { status: 404 });
    return new Response(html, { headers: { 'Content-Type': 'text/html' } });
  }

  // POST /api/free-deploy
  if (request.method === 'POST') {
    try {
      const { code, subdomain, domain, option } = await request.json();

      // Check if subdomain already taken
      const existing = await env.KV.get(`subdomain:${subdomain}`);   // ← changed
      if (existing) {
        return Response.json({ success: false, message: 'Subdomain already taken.' }, { status: 409 });
      }

      // Optional: first 100 users limit
      const userCount = await checkAndIncrementUserCounter(env);
      if (userCount > 100) {
        return Response.json({ success: false, message: 'Free limit reached.' }, { status: 403 });
      }

      // Store the HTML
      await env.KV.put(`subdomain:${subdomain}`, code, { expirationTtl: 86400 * 30 });   // ← changed

      const baseUrl = `${url.protocol}//${url.hostname}`;
      const liveUrl = `${baseUrl}/site/${subdomain}`;

      if (option === 'existing' && domain) {
        await env.KV.put(`domain:${domain}`, subdomain);   // ← changed
      }

      return Response.json({
        success: true,
        siteUrl: liveUrl,
        domain: `${subdomain}.xroga.com`
      });
    } catch (err) {
      return Response.json({ success: false, message: err.message }, { status: 500 });
    }
  }

  return new Response('Method not allowed', { status: 405 });
}

async function checkAndIncrementUserCounter(env) {
  const COUNTER_KEY = 'deployment_counter';
  let counter = await env.KV.get(COUNTER_KEY, { type: 'json' });   // ← changed
  if (counter === null) {
    await env.KV.put(COUNTER_KEY, JSON.stringify({ count: 1 }));   // ← changed
    return 1;
  }
  if (counter.count >= 100) return 101;
  const newCount = counter.count + 1;
  await env.KV.put(COUNTER_KEY, JSON.stringify({ count: newCount }));   // ← changed
  return newCount;
}
