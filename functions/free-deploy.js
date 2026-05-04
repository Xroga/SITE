export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // Serve deployed site: GET /site/:subdomain  (or /:subdomain directly)
  if (url.pathname.startsWith('/site/')) {
    const subdomain = url.pathname.split('/site/')[1];
    if (!subdomain) return new Response('Not found', { status: 404 });
    const html = await env.XROGA_SITES.get(`subdomain:${subdomain}`);
    if (!html) return new Response('Site not found', { status: 404 });
    return new Response(html, { headers: { 'Content-Type': 'text/html' } });
  }

  // POST /api/free-deploy
  if (request.method === 'POST') {
    try {
      const { code, subdomain, domain, option } = await request.json();

      // Check if subdomain is already taken
      const existing = await env.XROGA_SITES.get(`subdomain:${subdomain}`);
      if (existing) {
        return Response.json({ success: false, message: 'Subdomain already taken. Please choose another.' }, { status: 409 });
      }

      // Optional: enforce "first 100 users" limit
      const userCount = await checkAndIncrementUserCounter(env);
      if (userCount > 100) {
        return Response.json({ success: false, message: 'Sorry, the 100 free deployments are already claimed.' }, { status: 403 });
      }

      // Store the HTML under the chosen subdomain
      await env.XROGA_SITES.put(`subdomain:${subdomain}`, code, { expirationTtl: 86400 * 30 });

      const baseUrl = `${url.protocol}//${url.hostname}`;
      const liveUrl = `${baseUrl}/site/${subdomain}`;

      // If custom domain, store mapping
      if (option === 'existing' && domain) {
        await env.XROGA_SITES.put(`domain:${domain}`, subdomain);
      }

      return Response.json({
        success: true,
        siteUrl: liveUrl,
        domain: `${subdomain}.xroga.app`
      });
    } catch (err) {
      return Response.json({ success: false, message: err.message }, { status: 500 });
    }
  }

  return new Response('Method not allowed', { status: 405 });
}

async function checkAndIncrementUserCounter(env) {
  const COUNTER_KEY = 'deployment_counter';
  let counter = await env.XROGA_SITES.get(COUNTER_KEY, { type: 'json' });
  if (counter === null) {
    await env.XROGA_SITES.put(COUNTER_KEY, JSON.stringify({ count: 1 }));
    return 1;
  }
  if (counter.count >= 100) return 101;
  const newCount = counter.count + 1;
  await env.XROGA_SITES.put(COUNTER_KEY, JSON.stringify({ count: newCount }));
  return newCount;
}
