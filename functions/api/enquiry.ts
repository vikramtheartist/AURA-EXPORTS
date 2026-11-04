import { processEnquiry } from '../../server/enquiryHandler.js';

interface PagesContext {
  request: Request;
  env: Record<string, string>;
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-Idempotency-Key',
    },
  });
}

export async function onRequestPost(context: PagesContext) {
  const { request, env } = context;
  const clientIp = request.headers.get('cf-connecting-ip') || '127.0.0.1';

  try {
    const rawBody = await request.json().catch(() => ({}));
    const result = await processEnquiry(rawBody, env, clientIp);

    return new Response(JSON.stringify(result.body), {
      status: result.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'An unexpected processing error occurred.',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}
