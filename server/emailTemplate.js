/**
 * AURA EXPORTS — Institutional Email Template Generator
 * Produces clean, professional, responsive HTML and plain-text emails.
 * Delivered to central enquiry collection: contact@auraexport.co
 */

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Generate standardized subject lines conforming to AURA EXPORTS specifications:
 * [NEW RFQ] Salem Turmeric — Company Name
 * [NEW ENQUIRY] Temple Jewellery — Company Name
 * [NEW CONTACT REQUEST] Website Contact Form
 */
export function generateEmailSubject(enquiry) {
  const c = enquiry.customer || {};
  const company = (c.company_name || '').trim();
  const person = (c.full_name || '').trim();
  const customerLabel = company || person || 'Direct Buyer';
  const target = (enquiry.product_name || enquiry.product_category || 'Commercial Trade').trim();

  switch (enquiry.enquiry_type) {
    case 'quotation':
      return `[NEW RFQ] ${target} — ${customerLabel}`;
    case 'product':
      return `[NEW ENQUIRY] ${target} — ${customerLabel}`;
    case 'contact':
      return `[NEW CONTACT REQUEST] Website Contact Form${company ? ' — ' + company : (person ? ' — ' + person : '')}`;
    case 'sample':
      return `[NEW SAMPLE REQUEST] ${target} — ${customerLabel}`;
    case 'callback':
      return `[NEW CONSULTATION REQUEST] Executive Trade Consultation — ${customerLabel}`;
    default:
      return `[NEW ENQUIRY] ${target} — ${customerLabel}`;
  }
}

/**
 * Format submission timestamp to Indian Standard Time (IST, UTC+5:30)
 */
function formatSubmissionIST(isoString) {
  const dateObj = new Date(isoString || Date.now());
  try {
    return (
      dateObj.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'medium',
      }) + ' (IST)'
    );
  } catch {
    return dateObj.toUTCString() + ' (UTC)';
  }
}

/**
 * Generate structured, institutional HTML email
 */
export function generateEmailHtml(enquiry) {
  const c = enquiry.customer || {};
  const r = enquiry.requirements || {};
  const dateFormattedIST = formatSubmissionIST(enquiry.submitted_at);

  const typeLabels = {
    quotation: 'Commercial Trade RFQ (Quotation Request)',
    product: 'Product Sourcing Enquiry',
    contact: 'General Contact & Business Correspondence',
    sample: 'Physical Sample Request',
    callback: 'Executive Trade Consultation Request',
  };
  const enquiryTypeDisplay = typeLabels[enquiry.enquiry_type] || (enquiry.enquiry_type || 'Commercial Enquiry').toUpperCase();

  const hasProduct = Boolean(enquiry.product_name || enquiry.product_category || enquiry.product_variant);
  const hasMessage = Boolean(r.message && r.message.trim());

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AURA Exports — New Business Enquiry</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #050505;
      color: #e5ded3;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      font-size: 14px;
      line-height: 1.6;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    .wrapper {
      max-width: 660px;
      margin: 20px auto;
      background: #0d0d0c;
      border: 1px solid #29241c;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(0,0,0,0.85);
    }
    .header {
      background: linear-gradient(135deg, #1c1811 0%, #0d0d0c 100%);
      padding: 36px 32px 28px;
      border-bottom: 1px solid #29241c;
    }
    .brand-eyebrow {
      color: #dcb782;
      font-size: 11px;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      font-family: monospace;
      font-weight: 700;
      margin: 0 0 8px 0;
    }
    .header-title {
      color: #ffffff;
      font-size: 26px;
      font-weight: 400;
      margin: 0 0 6px 0;
      letter-spacing: -0.02em;
    }
    .ref-badge {
      display: inline-block;
      background: #1f1b13;
      border: 1px solid #dcb782;
      color: #dcb782;
      font-family: monospace;
      font-size: 12px;
      font-weight: 700;
      padding: 5px 12px;
      border-radius: 6px;
      margin-top: 12px;
    }
    .section {
      padding: 24px 32px;
      border-bottom: 1px solid #1a1712;
    }
    .section-title {
      color: #dcb782;
      font-size: 11px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      font-family: monospace;
      font-weight: 700;
      margin: 0 0 14px 0;
    }
    .data-row {
      padding: 8px 0;
      border-bottom: 1px solid #14120e;
    }
    .data-label {
      width: 36%;
      color: #a0988a;
      font-size: 12px;
      vertical-align: top;
      padding: 5px 0;
    }
    .data-value {
      width: 64%;
      color: #ffffff;
      font-size: 13px;
      vertical-align: top;
      padding: 5px 0;
      word-break: break-word;
    }
    .not-provided {
      color: #6d665a;
      font-style: italic;
    }
    .message-box {
      background: #14120f;
      border: 1px solid #241f17;
      border-radius: 10px;
      padding: 16px;
      color: #dfd1b9;
      font-size: 13px;
      line-height: 1.6;
      white-space: pre-wrap;
    }
    .btn-action {
      display: inline-block;
      background: linear-gradient(135deg, #dcb782 0%, #ab8558 100%);
      color: #000000 !important;
      text-decoration: none;
      font-weight: 700;
      font-size: 12px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      padding: 12px 24px;
      border-radius: 8px;
      margin-top: 14px;
    }
    .footer {
      background: #080807;
      padding: 24px 32px;
      text-align: center;
      font-size: 11px;
      color: #6d665a;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <!-- Header -->
    <div class="header">
      <div class="brand-eyebrow">AURA EXPORTS · CENTRAL ENQUIRY MANAGEMENT</div>
      <h1 class="header-title">${escapeHtml(enquiryTypeDisplay)}</h1>
      <div style="color: #a0988a; font-size: 12px; margin-top: 4px;">
        Submission Time: <strong>${escapeHtml(dateFormattedIST)}</strong>
      </div>
      <div class="ref-badge">REFERENCE: ${escapeHtml(enquiry.enquiry_id)}</div>
    </div>

    <!-- Section 1: Customer Information -->
    <div class="section">
      <div class="section-title">SECTION 1 — CUSTOMER DETAILS</div>
      <table>
        <tr class="data-row">
          <td class="data-label">Full Name:</td>
          <td class="data-value"><strong>${escapeHtml(c.full_name || 'Not provided')}</strong></td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Company Legal Name:</td>
          <td class="data-value">${c.company_name ? escapeHtml(c.company_name) : '<span class="not-provided">Not provided</span>'}</td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Corporate Email:</td>
          <td class="data-value">
            ${c.business_email ? `<a href="mailto:${escapeHtml(c.business_email)}" style="color: #dcb782; text-decoration: underline;">${escapeHtml(c.business_email)}</a>` : '<span class="not-provided">Not provided</span>'}
          </td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Phone / Mobile:</td>
          <td class="data-value">
            ${c.phone ? `<a href="tel:${escapeHtml(c.phone)}" style="color: #dcb782;">${escapeHtml(c.phone)}</a>` : '<span class="not-provided">Not provided</span>'}
          </td>
        </tr>
        <tr class="data-row">
          <td class="data-label">WhatsApp:</td>
          <td class="data-value">
            ${c.whatsapp || c.phone ? `<a href="https://wa.me/${encodeURIComponent(String(c.whatsapp || c.phone).replace(/\D/g, ''))}" style="color: #25D366; text-decoration: underline;">Direct WhatsApp Chat</a> (${escapeHtml(c.whatsapp || c.phone)})` : '<span class="not-provided">Not provided</span>'}
          </td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Company Website:</td>
          <td class="data-value">
            ${c.website ? `<a href="${escapeHtml(c.website.startsWith('http') ? c.website : 'https://' + c.website)}" target="_blank" style="color: #dcb782;">${escapeHtml(c.website)}</a>` : '<span class="not-provided">Not provided</span>'}
          </td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Buyer Country:</td>
          <td class="data-value">${c.country || r.destination_country ? escapeHtml(c.country || r.destination_country) : '<span class="not-provided">Not provided</span>'}</td>
        </tr>
      </table>
    </div>

    ${hasProduct ? `
    <!-- Section 2: Product Sourcing Information -->
    <div class="section">
      <div class="section-title">SECTION 2 — PRODUCT SOURCING DETAILS</div>
      <table>
        <tr class="data-row">
          <td class="data-label">Product / Category:</td>
          <td class="data-value">${enquiry.product_category ? escapeHtml(enquiry.product_category) : '<span class="not-provided">Not provided</span>'}</td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Selected Product:</td>
          <td class="data-value"><strong>${enquiry.product_name ? escapeHtml(enquiry.product_name) : '<span class="not-provided">Not provided</span>'}</strong></td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Product Variant / Form:</td>
          <td class="data-value">${enquiry.product_variant ? escapeHtml(enquiry.product_variant) : '<span class="not-provided">Not provided</span>'}</td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Product Origin:</td>
          <td class="data-value">${escapeHtml(enquiry.product_origin || 'India')}</td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Website Source Page:</td>
          <td class="data-value"><a href="${escapeHtml(enquiry.source_page || 'https://auraexport.co')}" style="color: #dcb782;">${escapeHtml(enquiry.source_page || 'https://auraexport.co')}</a></td>
        </tr>
      </table>
    </div>` : ''}

    <!-- Section 3: Procurement Parameters -->
    <div class="section">
      <div class="section-title">SECTION 3 — PROCUREMENT PARAMETERS</div>
      <table>
        <tr class="data-row">
          <td class="data-label">Estimated Quantity & Unit:</td>
          <td class="data-value"><strong>${r.estimated_quantity ? `${escapeHtml(r.estimated_quantity)} ${escapeHtml(r.unit || '')}`.trim() : '<span class="not-provided">Not provided</span>'}</strong></td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Destination Country:</td>
          <td class="data-value">${r.destination_country ? escapeHtml(r.destination_country) : '<span class="not-provided">Not provided</span>'}</td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Destination Discharge Port:</td>
          <td class="data-value">${r.destination_port ? escapeHtml(r.destination_port) : '<span class="not-provided">Not provided</span>'}</td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Target Incoterm:</td>
          <td class="data-value">${r.incoterm ? escapeHtml(r.incoterm) : '<span class="not-provided">Not provided</span>'}</td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Packaging Requirements:</td>
          <td class="data-value">${r.packaging ? escapeHtml(r.packaging) : '<span class="not-provided">Not provided</span>'}</td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Quality Specifications / Assays:</td>
          <td class="data-value">${r.grade_or_specification ? escapeHtml(r.grade_or_specification) : '<span class="not-provided">Not provided</span>'}</td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Certifications / Testing Scope:</td>
          <td class="data-value">${r.certifications ? escapeHtml(r.certifications) : '<span class="not-provided">Standard statutory export certification</span>'}</td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Target Procurement Timeline:</td>
          <td class="data-value">${r.target_timeline ? escapeHtml(r.target_timeline) : '<span class="not-provided">Not provided</span>'}</td>
        </tr>
      </table>
    </div>

    ${hasMessage ? `
    <!-- Section 4: Customer Comments -->
    <div class="section">
      <div class="section-title">SECTION 4 — ADDITIONAL COMMENTS & NOTES</div>
      <div class="message-box">${escapeHtml(r.message)}</div>
    </div>` : ''}

    <!-- Section 5: Enquiry Administration -->
    <div class="section">
      <div class="section-title">SECTION 5 — ENQUIRY AUDIT & DISPATCH</div>
      <table>
        <tr class="data-row">
          <td class="data-label">Enquiry Reference ID:</td>
          <td class="data-value"><span style="font-family: monospace; color: #dcb782; font-weight: 700;">${escapeHtml(enquiry.enquiry_id)}</span></td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Source Component:</td>
          <td class="data-value">${escapeHtml(enquiry.source_component || 'Website Form')}</td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Collection Recipient:</td>
          <td class="data-value">contact@auraexport.co</td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Enquiry Status:</td>
          <td class="data-value"><span style="color: #34d399; font-weight: 700;">PENDING REVIEW</span></td>
        </tr>
      </table>

      ${c.business_email ? `
      <div style="margin-top: 20px;">
        <a href="mailto:${escapeHtml(c.business_email)}?subject=Re:%20${encodeURIComponent(generateEmailSubject(enquiry))}&body=Hello%20${encodeURIComponent(c.full_name || 'Sir/Madam')},%0A%0AThank%20you%20for%20contacting%20Aura%20Exports%20regarding%20your%20enquiry%20(${encodeURIComponent(enquiry.enquiry_id)}).%0A%0A" class="btn-action">
          Reply Directly to Customer
        </a>
      </div>` : ''}
    </div>

    <!-- Footer -->
    <div class="footer">
      <div>Aura Exports (Aura Global Trade (OPC) Private Limited) · Chennai, Tamil Nadu, India</div>
      <div style="margin-top: 4px;">Automated Institutional Commercial Dispatch · Inquiries: contact@auraexport.co</div>
    </div>
  </div>
</body>
</html>`;
}

/**
 * Generate structured, scannable plain-text email fallback
 */
export function generateEmailText(enquiry) {
  const c = enquiry.customer || {};
  const r = enquiry.requirements || {};
  const dateFormattedIST = formatSubmissionIST(enquiry.submitted_at);

  let text = `=================================================================\n`;
  text += `AURA EXPORTS — NEW BUSINESS ENQUIRY\n`;
  text += `=================================================================\n`;
  text += `Enquiry Reference: ${enquiry.enquiry_id}\n`;
  text += `Submission (IST):  ${dateFormattedIST}\n`;
  text += `Enquiry Type:      ${(enquiry.enquiry_type || 'quotation').toUpperCase()}\n`;
  text += `Recipient:         contact@auraexport.co\n\n`;

  text += `-----------------------------------------------------------------\n`;
  text += `SECTION 1 — CUSTOMER DETAILS\n`;
  text += `-----------------------------------------------------------------\n`;
  text += `Full Name:         ${c.full_name || 'Not provided'}\n`;
  text += `Company Name:      ${c.company_name || 'Not provided'}\n`;
  text += `Business Email:    ${c.business_email || 'Not provided'}\n`;
  text += `Phone Number:      ${c.phone || 'Not provided'}\n`;
  text += `WhatsApp Number:   ${c.whatsapp || c.phone || 'Not provided'}\n`;
  text += `Company Website:   ${c.website || 'Not provided'}\n`;
  text += `Country:           ${c.country || r.destination_country || 'Not provided'}\n\n`;

  if (enquiry.product_name || enquiry.product_category || enquiry.product_variant) {
    text += `-----------------------------------------------------------------\n`;
    text += `SECTION 2 — PRODUCT SOURCING DETAILS\n`;
    text += `-----------------------------------------------------------------\n`;
    text += `Product Category:  ${enquiry.product_category || 'Not provided'}\n`;
    text += `Product Name:      ${enquiry.product_name || 'Not provided'}\n`;
    text += `Product Variant:   ${enquiry.product_variant || 'Not provided'}\n`;
    text += `Product Origin:    ${enquiry.product_origin || 'India'}\n`;
    text += `Source Page:       ${enquiry.source_page || 'https://auraexport.co'}\n\n`;
  }

  text += `-----------------------------------------------------------------\n`;
  text += `SECTION 3 — PROCUREMENT PARAMETERS\n`;
  text += `-----------------------------------------------------------------\n`;
  text += `Estimated Quantity:${r.estimated_quantity ? `${r.estimated_quantity} ${r.unit || ''}`.trim() : 'Not provided'}\n`;
  text += `Destination Country:${r.destination_country || 'Not provided'}\n`;
  text += `Destination Port:   ${r.destination_port || 'Not provided'}\n`;
  text += `Target Incoterm:    ${r.incoterm || 'Not provided'}\n`;
  text += `Packaging:          ${r.packaging || 'Not provided'}\n`;
  text += `Quality Spec:       ${r.grade_or_specification || 'Not provided'}\n`;
  text += `Certifications:     ${r.certifications || 'Standard statutory export certification'}\n`;
  text += `Target Timeline:    ${r.target_timeline || 'Not provided'}\n\n`;

  if (r.message && r.message.trim()) {
    text += `-----------------------------------------------------------------\n`;
    text += `SECTION 4 — ADDITIONAL COMMENTS & NOTES\n`;
    text += `-----------------------------------------------------------------\n`;
    text += `${r.message.trim()}\n\n`;
  }

  text += `-----------------------------------------------------------------\n`;
  text += `SECTION 5 — ENQUIRY AUDIT & DISPATCH\n`;
  text += `-----------------------------------------------------------------\n`;
  text += `Enquiry Reference: ${enquiry.enquiry_id}\n`;
  text += `Source Component:  ${enquiry.source_component || 'Website Form'}\n`;
  text += `Recipient Email:   contact@auraexport.co\n`;
  text += `Enquiry Status:    PENDING REVIEW\n`;
  text += `Reply-To:          ${c.business_email || 'contact@auraexport.co'}\n`;
  text += `=================================================================\n`;

  return text;
}
