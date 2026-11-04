import { processEnquiry } from '../server/enquiryHandler.js';

/**
 * Vercel Serverless Function: POST /api/enquiry
 * Handles enquiry submissions, validation, rate limiting, and transactional email dispatch.
 */
export default async function handler(req: any, res: any) {
  // CORS Configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Idempotency-Key'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Only POST is supported.',
    });
  }

  try {
    const clientIp =
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.socket?.remoteAddress ||
      '127.0.0.1';

    const result = await processEnquiry(req.body || {}, process.env, clientIp);
    return res.status(result.status).json(result.body);
  } catch (error: any) {
    console.error('[AURA API Error]', error);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your enquiry. Please contact contact@auraexport.co directly.',
    });
  }
}
