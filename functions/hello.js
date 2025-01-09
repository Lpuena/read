export async function onRequest() {
  return new Response(JSON.stringify({ message: 'Hello from Cloudflare!' }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
