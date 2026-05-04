// functions/api/free-deploy.js
export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // Serve deployed site from /p/:project
  if (url.pathname.startsWith('/p/')) {
    const project = url.pathname.split('/p/')[1];
    if (!project) return new Response('Not found', { status: 404 });
    const html = await env.KV.get(`project:${project}`);
    if (!html) return new Response('Site not found', { status: 404 });
    return new Response(html, { headers: { 'Content-Type': 'text/html' } });
  }

  // Legacy /site/:project support
  if (url.pathname.startsWith('/site/')) {
    const project = url.pathname.split('/site/')[1];
    if (!project) return new Response('Not found', { status: 404 });
    const html = await env.KV.get(`project:${project}`);
    if (!html) return new Response('Site not found', { status: 404 });
    return new Response(html, { headers: { 'Content-Type': 'text/html' } });
  }

  // POST /api/free-deploy
  if (request.method === 'POST' && url.pathname === '/api/free-deploy') {
    try {
      const { code, subdomain } = await request.json();

      if (!subdomain || !/^[a-z0-9-]{3,30}$/.test(subdomain)) {
        return Response.json({ success: false, message: 'Invalid project name. Use 3-30 lowercase letters, numbers, hyphens.' }, { status: 400 });
      }

      const existing = await env.KV.get(`project:${subdomain}`);
      if (!existing) {
        const userCount = await checkAndIncrementUserCounter(env);
        if (userCount > 100) {
          return Response.json({ success: false, message: 'Sorry, the 100 free gifts are already claimed.' }, { status: 403 });
        }
      }

      // Store (overwrite if exists)
      await env.KV.put(`project:${subdomain}`, code, { expirationTtl: 86400 * 30 });

      const liveUrl = `https://xroga.com/p/${subdomain}`;
      return Response.json({
        success: true,
        siteUrl: liveUrl,
        domain: `xroga.com/p/${subdomain}`,
        isUpdate: !!existing
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
