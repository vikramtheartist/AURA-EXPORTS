/**
 * AURA EXPORTS — Standalone Node.js Microservice
 * Runs an Express server handling /api/enquiry with health check /api/health
 */

import express from 'express';
import { processEnquiry } from './enquiryHandler.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Body parser
app.use(express.json({ limit: '500kb' }));

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Idempotency-Key');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    service: 'Aura Exports Enquiry Service',
    recipient: process.env.ENQUIRY_TO_EMAIL || 'contact@auraexport.co',
    timestamp: new Date().toISOString(),
  });
});

// Enquiry processing endpoint
app.post('/api/enquiry', async (req, res) => {
  const clientIp =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    '127.0.0.1';

  try {
    const result = await processEnquiry(req.body || {}, process.env, clientIp);
    res.status(result.status).json(result.body);
  } catch (err) {
    console.error('[AURA Server Error]', err);
    res.status(500).json({
      success: false,
      error: 'Internal enquiry dispatch failure. Please reach out to contact@auraexport.co directly.',
    });
  }
});

// Start listening if run directly
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`[AURA Service] Enquiry microservice listening on http://localhost:${PORT}`);
    console.log(`[AURA Service] Central recipient: ${process.env.ENQUIRY_TO_EMAIL || 'contact@auraexport.co'}`);
  });
}

export default app;
