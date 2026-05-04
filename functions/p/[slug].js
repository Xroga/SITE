// functions/p/[slug].js
export async function onRequest(context) {
  const { request, env, params } = context;
  const { slug } = params; // this is the :project name

  const html = await env.KV.get(`project:${slug}`);
  if (!html) {
    return new Response('Site not found', { status: 404 });
  }
  return new Response(html, {
    headers: { 'Content-Type': 'text/html' }
  });
}
