/**
 * AURA EXPORTS — Comprehensive Automated Integration Tests
 * Validates enquiry submission, sanitization, validation, idempotency,
 * rate-limiting, honeypots, and email formatting.
 */

import { processEnquiry } from '../server/enquiryHandler.js';
import { generateEmailSubject, generateEmailHtml, generateEmailText } from '../server/emailTemplate.js';
import fs from 'fs';
import path from 'path';

let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`  ✅ PASS: ${testName}`);
    passedTests++;
  } else {
    console.error(`  ❌ FAIL: ${testName} ${details ? '(' + details + ')' : ''}`);
    failedTests++;
  }
}

async function runTests() {
  console.log('\n======================================================');
  console.log('🧪 AURA EXPORTS — ENQUIRY SYSTEM INTEGRATION TEST SUITE');
  console.log('======================================================\n');

  const testEnv = {
    ENQUIRY_TO_EMAIL: 'contact@auraexport.co',
    EMAIL_FROM: 'enquiries@auraexport.co',
    ENABLE_DEV_AUDIT_LOGS: 'true',
  };

  // -------------------------------------------------------------------------
  // TEST 1: Request a Quote (Agro Products)
  // -------------------------------------------------------------------------
  console.log('--- TEST GROUP 1: Primary Enquiry Types ---');
  {
    const payload = {
      enquiry_type: 'quotation',
      source_page: 'https://auraexport.co/request-quote',
      source_component: 'RequestQuoteModal',
      product_category: 'Agro Products',
      product_name: 'Organic Salem Turmeric & Alleppey Green Cardamom',
      customer: {
        full_name: 'Marcus Sterling',
        company_name: 'Sterling Foods B.V.',
        business_email: 'm.sterling@sterlingfoods.nl',
        phone: '+31 20 555 0199',
        country: 'Netherlands',
      },
      requirements: {
        estimated_quantity: '25',
        unit: 'MT',
        destination_country: 'Netherlands',
        destination_port: 'Rotterdam Port',
        grade_or_specification: 'High Curcumin (5.2%+), Phytosanitary Certified',
        packaging: '50kg Kraft Multiwall Sacks',
        incoterm: 'CIF Rotterdam',
        message: 'Looking for prompt sea freight delivery for Q1 distribution.',
      },
    };

    const res = await processEnquiry(payload, testEnv, '192.168.1.1');
    assert(res.status === 200, 'Agro RFQ returns HTTP 200');
    assert(res.body.success === true, 'Agro RFQ body.success is true');
    assert(res.body.enquiry_id && res.body.enquiry_id.startsWith('AURA-RFQ-'), 'Agro RFQ assigns AURA-RFQ reference ID', res.body.enquiry_id);
    assert(res.body.delivered === true, 'Agro RFQ marked delivered');
  }

  // -------------------------------------------------------------------------
  // TEST 2: Product Card "Enquire Now" — Turmeric
  // -------------------------------------------------------------------------
  {
    const payload = {
      enquiry_type: 'product',
      source_page: 'https://auraexport.co/agro-products',
      source_component: 'InstitutionalRFQModal',
      product_category: 'Spices & Agricultural Commodities',
      product_name: 'Salem Turmeric',
      product_variant: 'Finger & Ground',
      customer: {
        full_name: 'David Richardson',
        business_email: 'david@richardson-imports.co.uk',
        phone: '+44 20 7946 0912',
        country: 'United Kingdom',
      },
      requirements: {
        estimated_quantity: '10 MT',
        destination_port: 'Felixstowe Port (FOB)',
        message: 'Requesting COA and current spot FOB quotation.',
      },
    };

    const res = await processEnquiry(payload, testEnv, '192.168.1.2');
    assert(res.status === 200, 'Turmeric Enquire Now returns 200');
    assert(res.body.enquiry_id && res.body.enquiry_id.startsWith('AURA-ENQ-'), 'Turmeric assigns AURA-ENQ reference', res.body.enquiry_id);
  }

  // -------------------------------------------------------------------------
  // TEST 3: Product Card "Enquire Now" — Cardamom
  // -------------------------------------------------------------------------
  {
    const payload = {
      enquiry_type: 'product',
      source_page: 'https://auraexport.co/agro-products',
      source_component: 'AgroProductDetail',
      product_category: 'Spices & Botanicals',
      product_name: 'Alleppey Green Cardamom',
      product_variant: 'Extra Bold 8mm+',
      customer: {
        full_name: 'Tariq Al-Mansoor',
        business_email: 'tariq@gulfspicestrading.ae',
        phone: '+971 4 391 0000',
        country: 'United Arab Emirates',
      },
      requirements: {
        estimated_quantity: '5 MT',
        destination_port: 'Jebel Ali, Dubai (CIF)',
        message: 'Urgent demand for 8mm deep green pods for Ramadan.',
      },
    };

    const res = await processEnquiry(payload, testEnv, '192.168.1.3');
    assert(res.status === 200, 'Cardamom Enquire Now returns 200');
    assert(res.body.enquiry_id && res.body.enquiry_id.startsWith('AURA-ENQ-'), 'Cardamom assigns AURA-ENQ reference');
  }

  // -------------------------------------------------------------------------
  // TEST 4: Fashion & Lifestyle Product Enquiry
  // -------------------------------------------------------------------------
  {
    const payload = {
      enquiry_type: 'product',
      source_page: 'https://auraexport.co/fashion-lifestyle',
      source_component: 'FashionLifestylePage',
      product_category: 'Fashion & Lifestyle',
      product_name: 'Temple Jewellery & Antique Bridal Sets',
      customer: {
        full_name: 'Claire Bennett',
        business_email: 'claire@bennettluxury.com',
        phone: '+1 415 555 2671',
        country: 'United States',
      },
      requirements: {
        estimated_quantity: '500 Pieces',
        message: 'Looking for lead-free 22k gold plated handcrafted necklaces with presentation boxes.',
      },
    };

    const res = await processEnquiry(payload, testEnv, '192.168.1.4');
    assert(res.status === 200, 'Fashion & Lifestyle enquiry returns 200');
    assert(res.body.success === true, 'Fashion & Lifestyle enquiry successful');
  }

  // -------------------------------------------------------------------------
  // TEST 5: Apparel & Textiles Enquiry
  // -------------------------------------------------------------------------
  {
    const payload = {
      enquiry_type: 'quotation',
      source_page: 'https://auraexport.co/apparel-textiles',
      source_component: 'ApparelTextilesPage',
      product_category: 'Apparel & Textiles',
      product_name: 'Kanchipuram Pure Mulberry Silk Sarees (Zari Border)',
      customer: {
        full_name: 'Ananya Sharma',
        company_name: 'Heritage Loom Boutique',
        business_email: 'ananya@heritageloom.sg',
        phone: '+65 6789 0123',
        country: 'Singapore',
      },
      requirements: {
        estimated_quantity: '200 Pieces',
        message: 'Silk Mark certified pure handloom weaves required.',
      },
    };

    const res = await processEnquiry(payload, testEnv, '192.168.1.5');
    assert(res.status === 200, 'Textiles enquiry returns 200');
    assert(res.body.success === true, 'Textiles enquiry successful');
  }

  // -------------------------------------------------------------------------
  // TEST 6: General Contact Form Submission
  // -------------------------------------------------------------------------
  {
    const payload = {
      enquiry_type: 'contact',
      source_page: 'https://auraexport.co/contact',
      source_component: 'ContactPage',
      customer: {
        full_name: 'Eleanor Vance',
        company_name: 'Vance Trading Collective',
        business_email: 'eleanor.vance@vancetrade.com',
        country: 'United Kingdom',
      },
      requirements: {
        grade_or_specification: 'Bilateral Trade Partnership',
        message: 'We are seeking an institutional procurement partner in Tamil Nadu for agricultural imports.',
      },
    };

    const res = await processEnquiry(payload, testEnv, '192.168.1.6');
    assert(res.status === 200, 'Contact Form enquiry returns 200');
    assert(res.body.enquiry_id && res.body.enquiry_id.startsWith('AURA-CONT-'), 'Contact Form assigns AURA-CONT reference', res.body.enquiry_id);
  }

  // -------------------------------------------------------------------------
  // TEST 7: Sample Request
  // -------------------------------------------------------------------------
  {
    const payload = {
      enquiry_type: 'sample',
      source_page: 'https://auraexport.co/agro-products',
      source_component: 'SampleRequestModal',
      product_category: 'Agro Products',
      product_name: 'Moringa Leaf Powder (Organic Grade)',
      customer: {
        full_name: 'Dr. Klaus Becker',
        business_email: 'klaus.becker@bioceuticals.de',
        phone: '+49 30 123456',
        country: 'Germany',
      },
      requirements: {
        estimated_quantity: '500g',
        unit: 'KG',
        message: 'Pre-shipment sample needed for lab microbiology analysis before 10MT container order.',
      },
    };

    const res = await processEnquiry(payload, testEnv, '192.168.1.7');
    assert(res.status === 200, 'Sample Request returns 200');
    assert(res.body.enquiry_id && res.body.enquiry_id.startsWith('AURA-SMPL-'), 'Sample Request assigns AURA-SMPL reference', res.body.enquiry_id);
  }

  // -------------------------------------------------------------------------
  // TEST 8: Callback / Quick Consultation Request
  // -------------------------------------------------------------------------
  {
    const payload = {
      enquiry_type: 'callback',
      source_page: 'https://auraexport.co',
      source_component: 'CtaFooter',
      customer: {
        full_name: 'Corporate Executive',
        business_email: 'director@nordicimport.se',
      },
      requirements: {
        message: 'Client requested trade consultation callback via footer.',
      },
    };

    const res = await processEnquiry(payload, testEnv, '192.168.1.8');
    assert(res.status === 200, 'Callback Request returns 200');
    assert(res.body.enquiry_id && res.body.enquiry_id.startsWith('AURA-CALL-'), 'Callback assigns AURA-CALL reference', res.body.enquiry_id);
  }

  console.log('\n--- TEST GROUP 2: Validation & Error Handling ---');

  // -------------------------------------------------------------------------
  // TEST 9: Missing Required Name
  // -------------------------------------------------------------------------
  {
    const payload = {
      customer: {
        full_name: '',
        business_email: 'valid@example.com',
      },
    };
    const res = await processEnquiry(payload, testEnv, '192.168.2.1');
    assert(res.status === 400, 'Missing name returns HTTP 400');
    assert(res.body.success === false, 'Missing name success is false');
    assert(res.body.error.includes('full name'), 'Missing name error mentions full name');
  }

  // -------------------------------------------------------------------------
  // TEST 10: Missing Both Email and Phone
  // -------------------------------------------------------------------------
  {
    const payload = {
      customer: {
        full_name: 'John Doe',
        business_email: '',
        phone: '',
      },
    };
    const res = await processEnquiry(payload, testEnv, '192.168.2.2');
    assert(res.status === 400, 'Missing email & phone returns HTTP 400');
    assert(res.body.success === false, 'Missing email & phone success is false');
  }

  // -------------------------------------------------------------------------
  // TEST 11: Invalid Email Format
  // -------------------------------------------------------------------------
  {
    const payload = {
      customer: {
        full_name: 'John Doe',
        business_email: 'not-an-email',
        phone: '12', // too short
      },
    };
    const res = await processEnquiry(payload, testEnv, '192.168.2.3');
    assert(res.status === 400, 'Invalid email and short phone returns 400');
  }

  console.log('\n--- TEST GROUP 3: Security & Spam Protections ---');

  // -------------------------------------------------------------------------
  // TEST 12: Honeypot Protection (Silently drops bot without email dispatch)
  // -------------------------------------------------------------------------
  {
    const payload = {
      customer: {
        full_name: 'Spam Bot',
        business_email: 'bot@spamnetwork.ru',
      },
      honeypot: 'http://viagra-seo-spam.com',
    };
    const res = await processEnquiry(payload, testEnv, '192.168.3.1');
    assert(res.status === 200, 'Honeypot returns 200 to trick bot');
    assert(res.body.enquiry_id && res.body.enquiry_id.startsWith('AURA-BOT-'), 'Honeypot marked AURA-BOT-');
    assert(res.body.delivered === false, 'Honeypot email delivery bypassed');
  }

  // -------------------------------------------------------------------------
  // TEST 13: Duplicate Submission Protection (Idempotency Key)
  // -------------------------------------------------------------------------
  {
    const idempotencyKey = `test_idemp_${Date.now()}`;
    const payload = {
      idempotency_key: idempotencyKey,
      customer: {
        full_name: 'Idempotency Tester',
        business_email: 'test@idemp.com',
      },
      requirements: { message: 'First attempt' },
    };

    const firstRes = await processEnquiry(payload, testEnv, '192.168.4.1');
    const secondRes = await processEnquiry(payload, testEnv, '192.168.4.1');

    assert(firstRes.status === 200 && secondRes.status === 200, 'Both idempotent requests succeed');
    assert(firstRes.body.enquiry_id === secondRes.body.enquiry_id, 'Second request returns identical cached enquiry_id', secondRes.body.enquiry_id);
  }

  // -------------------------------------------------------------------------
  // TEST 14: Rate Limiting (Max 10 requests / min per IP)
  // -------------------------------------------------------------------------
  {
    const testIp = '10.99.88.77';
    let rateLimited = false;
    for (let i = 0; i < 15; i++) {
      const res = await processEnquiry(
        {
          customer: { full_name: `Stress ${i}`, business_email: `stress${i}@test.com` },
        },
        testEnv,
        testIp
      );
      if (res.status === 429) {
        rateLimited = true;
        break;
      }
    }
    assert(rateLimited, 'Rate limiter blocks rapid requests with HTTP 429');
  }

  console.log('\n--- TEST GROUP 4: Email Formatting & Content Architecture ---');

  // -------------------------------------------------------------------------
  // TEST 15: Email Subject Line Formatting
  // -------------------------------------------------------------------------
  {
    const mockEnquiry = {
      enquiry_id: 'AURA-RFQ-TEST-1',
      enquiry_type: 'quotation',
      product_name: 'Salem Turmeric',
      product_category: 'Agro Products',
      customer: {
        full_name: 'Alexander Vance',
        company_name: 'Vance Commodities',
        business_email: 'a.vance@vance.com',
      },
    };

    const subject = generateEmailSubject(mockEnquiry);
    assert(
      subject === '[AURA EXPORTS] QUOTATION REQUEST — SALEM TURMERIC — VANCE COMMODITIES',
      'Subject matches specified pattern',
      subject
    );
  }

  // -------------------------------------------------------------------------
  // TEST 16: Email HTML & Plain Text Structure (Sections 1-5)
  // -------------------------------------------------------------------------
  {
    const mockEnquiry = {
      enquiry_id: 'AURA-RFQ-MOCK',
      submitted_at: '2026-11-04T12:00:00Z',
      enquiry_type: 'quotation',
      source_page: 'https://auraexport.co/request-quote',
      source_component: 'Request a Quote Modal',
      product_category: 'Agro Products',
      product_name: 'Alleppey Green Cardamom',
      product_variant: '8mm Bold',
      product_origin: 'Kerala / Tamil Nadu, India',
      customer: {
        full_name: 'Robert Hastings',
        company_name: 'Hastings Spice Importers Ltd',
        business_email: 'robert@hastingsspice.co.uk',
        phone: '+44 20 7123 4567',
        country: 'United Kingdom',
      },
      requirements: {
        estimated_quantity: '10',
        unit: 'MT',
        destination_country: 'United Kingdom',
        destination_port: 'Felixstowe Port',
        grade_or_specification: 'High volatile oil 7.5%+',
        packaging: '25kg Vacuum Sealed Cartons',
        incoterm: 'CIF Felixstowe',
        message: 'Please send current spot rates and Phytosanitary certification.',
      },
    };

    const html = generateEmailHtml(mockEnquiry);
    const text = generateEmailText(mockEnquiry);

    assert(html.includes('AURA EXPORTS'), 'HTML contains company branding header');
    assert(html.includes('SECTION 1 — CUSTOMER INFORMATION'), 'HTML contains SECTION 1');
    assert(html.includes('SECTION 2 — PRODUCT INFORMATION'), 'HTML contains SECTION 2');
    assert(html.includes('SECTION 3 — PROCUREMENT REQUIREMENTS'), 'HTML contains SECTION 3');
    assert(html.includes('SECTION 4 — CUSTOMER MESSAGE'), 'HTML contains SECTION 4');
    assert(html.includes('SECTION 5 — ENQUIRY MANAGEMENT'), 'HTML contains SECTION 5');
    assert(html.includes('AURA-RFQ-MOCK'), 'HTML embeds Enquiry Reference ID');
    assert(html.includes('contact@auraexport.co'), 'HTML references destination contact@auraexport.co');

    assert(text.includes('SECTION 1 — CUSTOMER INFORMATION'), 'Plain text contains SECTION 1');
    assert(text.includes('Robert Hastings'), 'Plain text contains customer name');
    assert(text.includes('Alleppey Green Cardamom'), 'Plain text contains product name');
  }

  // -------------------------------------------------------------------------
  // TEST 17: Local Audit Trail Verification
  // -------------------------------------------------------------------------
  {
    const auditFilePath = path.resolve(process.cwd(), '.audit-logs', 'enquiries.jsonl');
    assert(fs.existsSync(auditFilePath), 'Audit log file created at .audit-logs/enquiries.jsonl');
    const logContent = fs.readFileSync(auditFilePath, 'utf8');
    assert(logContent.includes('contact@auraexport.co'), 'Audit log records destination contact@auraexport.co');
  }

  console.log('\n======================================================');
  console.log(`📊 TEST RESULTS: ${passedTests} PASSED, ${failedTests} FAILED`);
  console.log('======================================================\n');

  if (failedTests > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
