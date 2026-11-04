/**
 * AURA EXPORTS — Institutional Email Template Generator
 * Produces clean, responsive HTML email and plain-text fallback
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

export function generateEmailSubject(enquiry) {
  const typeMap = {
    quotation: 'QUOTATION REQUEST',
    product: 'PRODUCT ENQUIRY',
    contact: 'GENERAL CONTACT',
    sample: 'SAMPLE REQUEST',
    callback: 'CONSULTATION REQUEST',
  };

  const typeStr = typeMap[enquiry.enquiry_type] || 'BUSINESS ENQUIRY';

  // Product or Category
  const subjectTarget = enquiry.product_name || enquiry.product_category || 'INTERNATIONAL TRADE';

  // Customer or Company
  const customerTarget = enquiry.customer?.company_name || enquiry.customer?.full_name || 'BUYER INQUIRY';

  return `[AURA EXPORTS] ${typeStr.toUpperCase()} — ${subjectTarget.toUpperCase()} — ${customerTarget.toUpperCase()}`;
}

export function generateEmailHtml(enquiry) {
  const c = enquiry.customer || {};
  const r = enquiry.requirements || {};
  const dateFormatted = new Date(enquiry.submitted_at || Date.now()).toUTCString();

  const hasProduct = Boolean(enquiry.product_name || enquiry.product_category || enquiry.product_variant);
  const hasRequirements = Boolean(
    r.estimated_quantity ||
    r.destination_country ||
    r.destination_port ||
    r.grade_or_specification ||
    r.packaging ||
    r.incoterm ||
    r.target_timeline
  );
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
      max-width: 640px;
      margin: 20px auto;
      background: #0d0d0c;
      border: 1px solid #29241c;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(0,0,0,0.8);
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
      padding: 4px 10px;
      border-radius: 6px;
      margin-top: 10px;
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
      width: 35%;
      color: #a0988a;
      font-size: 12px;
      vertical-align: top;
      padding: 4px 0;
    }
    .data-value {
      width: 65%;
      color: #ffffff;
      font-size: 13px;
      vertical-align: top;
      padding: 4px 0;
      word-break: break-word;
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
      <div class="brand-eyebrow">AURA EXPORTS · INSTITUTIONAL INTAKE</div>
      <h1 class="header-title">New Business Enquiry</h1>
      <div style="color: #a0988a; font-size: 12px;">Submitted: ${escapeHtml(dateFormatted)}</div>
      <div class="ref-badge">REFERENCE: ${escapeHtml(enquiry.enquiry_id)}</div>
    </div>

    <!-- Section 1: Customer Information -->
    <div class="section">
      <div class="section-title">SECTION 1 — CUSTOMER INFORMATION</div>
      <table>
        <tr class="data-row">
          <td class="data-label">Full Name:</td>
          <td class="data-value"><strong>${escapeHtml(c.full_name || 'Not provided')}</strong></td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Company Name:</td>
          <td class="data-value">${escapeHtml(c.company_name || 'Individual / Retail Buyer')}</td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Business Email:</td>
          <td class="data-value">
            ${c.business_email ? `<a href="mailto:${escapeHtml(c.business_email)}" style="color: #dcb782; text-decoration: underline;">${escapeHtml(c.business_email)}</a>` : '<span style="color:#6d665a">Not provided</span>'}
          </td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Phone Number:</td>
          <td class="data-value">
            ${c.phone ? `<a href="tel:${escapeHtml(c.phone)}" style="color: #dcb782;">${escapeHtml(c.phone)}</a>` : '<span style="color:#6d665a">Not provided</span>'}
          </td>
        </tr>
        <tr class="data-row">
          <td class="data-label">WhatsApp Number:</td>
          <td class="data-value">
            ${c.whatsapp || c.phone ? `<a href="https://wa.me/${encodeURIComponent(String(c.whatsapp || c.phone).replace(/\\D/g, ''))}" style="color: #25D366; text-decoration: underline;">Direct WhatsApp Chat</a>` : '<span style="color:#6d665a">Not provided</span>'}
          </td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Country:</td>
          <td class="data-value">${escapeHtml(c.country || r.destination_country || 'International / Global')}</td>
        </tr>
      </table>
    </div>

    ${hasProduct ? `
    <!-- Section 2: Product Information -->
    <div class="section">
      <div class="section-title">SECTION 2 — PRODUCT INFORMATION</div>
      <table>
        ${enquiry.product_category ? `
        <tr class="data-row">
          <td class="data-label">Product Category:</td>
          <td class="data-value">${escapeHtml(enquiry.product_category)}</td>
        </tr>` : ''}
        ${enquiry.product_name ? `
        <tr class="data-row">
          <td class="data-label">Product Name:</td>
          <td class="data-value"><strong>${escapeHtml(enquiry.product_name)}</strong></td>
        </tr>` : ''}
        ${enquiry.product_variant ? `
        <tr class="data-row">
          <td class="data-label">Product Variant:</td>
          <td class="data-value">${escapeHtml(enquiry.product_variant)}</td>
        </tr>` : ''}
        ${enquiry.product_origin ? `
        <tr class="data-row">
          <td class="data-label">Product Origin:</td>
          <td class="data-value">${escapeHtml(enquiry.product_origin)}</td>
        </tr>` : ''}
        <tr class="data-row">
          <td class="data-label">Source Page:</td>
          <td class="data-value"><a href="${escapeHtml(enquiry.source_page || 'https://auraexport.co')}" style="color: #dcb782;">${escapeHtml(enquiry.source_page || 'auraexport.co')}</a></td>
        </tr>
      </table>
    </div>` : ''}

    ${hasRequirements ? `
    <!-- Section 3: Procurement Requirements -->
    <div class="section">
      <div class="section-title">SECTION 3 — PROCUREMENT REQUIREMENTS</div>
      <table>
        ${r.estimated_quantity ? `
        <tr class="data-row">
          <td class="data-label">Estimated Quantity:</td>
          <td class="data-value"><strong>${escapeHtml(r.estimated_quantity)} ${escapeHtml(r.unit || '')}</strong></td>
        </tr>` : ''}
        ${r.destination_country ? `
        <tr class="data-row">
          <td class="data-label">Destination Country:</td>
          <td class="data-value">${escapeHtml(r.destination_country)}</td>
        </tr>` : ''}
        ${r.destination_port ? `
        <tr class="data-row">
          <td class="data-label">Destination Port:</td>
          <td class="data-value">${escapeHtml(r.destination_port)}</td>
        </tr>` : ''}
        ${r.grade_or_specification ? `
        <tr class="data-row">
          <td class="data-label">Requested Specification:</td>
          <td class="data-value">${escapeHtml(r.grade_or_specification)}</td>
        </tr>` : ''}
        ${r.packaging ? `
        <tr class="data-row">
          <td class="data-label">Packaging Requirements:</td>
          <td class="data-value">${escapeHtml(r.packaging)}</td>
        </tr>` : ''}
        ${r.incoterm ? `
        <tr class="data-row">
          <td class="data-label">Requested Incoterm:</td>
          <td class="data-value">${escapeHtml(r.incoterm)}</td>
        </tr>` : ''}
        ${r.target_timeline ? `
        <tr class="data-row">
          <td class="data-label">Target Timeline:</td>
          <td class="data-value">${escapeHtml(r.target_timeline)}</td>
        </tr>` : ''}
      </table>
    </div>` : ''}

    ${hasMessage ? `
    <!-- Section 4: Customer Message -->
    <div class="section">
      <div class="section-title">SECTION 4 — CUSTOMER MESSAGE</div>
      <div class="message-box">${escapeHtml(r.message)}</div>
    </div>` : ''}

    <!-- Section 5: Enquiry Management -->
    <div class="section">
      <div class="section-title">SECTION 5 — ENQUIRY MANAGEMENT</div>
      <table>
        <tr class="data-row">
          <td class="data-label">Enquiry Reference:</td>
          <td class="data-value"><span style="font-family: monospace; color: #dcb782;">${escapeHtml(enquiry.enquiry_id)}</span></td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Source Component:</td>
          <td class="data-value">${escapeHtml(enquiry.source_component || 'Website Form')}</td>
        </tr>
        <tr class="data-row">
          <td class="data-label">Enquiry Status:</td>
          <td class="data-value"><span style="color: #34d399; font-weight: 700;">NEW</span></td>
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
      <div>Aura Exports (AURA ENTERPRISE EXPORTS (OPC) PVT LTD) · Chennai, Tamil Nadu, India</div>
      <div style="margin-top: 4px;">Automated Institutional Commercial Dispatch · Delivered to contact@auraexport.co</div>
    </div>
  </div>
</body>
</html>`;
}

export function generateEmailText(enquiry) {
  const c = enquiry.customer || {};
  const r = enquiry.requirements || {};
  const dateFormatted = new Date(enquiry.submitted_at || Date.now()).toUTCString();

  let text = `=================================================================\n`;
  text += `AURA EXPORTS — NEW BUSINESS ENQUIRY\n`;
  text += `=================================================================\n`;
  text += `Enquiry Reference: ${enquiry.enquiry_id}\n`;
  text += `Date & Time:       ${dateFormatted}\n`;
  text += `Enquiry Type:      ${(enquiry.enquiry_type || 'quotation').toUpperCase()}\n\n`;

  text += `-----------------------------------------------------------------\n`;
  text += `SECTION 1 — CUSTOMER INFORMATION\n`;
  text += `-----------------------------------------------------------------\n`;
  text += `Full Name:         ${c.full_name || 'Not provided'}\n`;
  text += `Company Name:      ${c.company_name || 'Individual / Retail Buyer'}\n`;
  text += `Business Email:    ${c.business_email || 'Not provided'}\n`;
  text += `Phone Number:      ${c.phone || 'Not provided'}\n`;
  text += `WhatsApp Number:   ${c.whatsapp || c.phone || 'Not provided'}\n`;
  text += `Country:           ${c.country || r.destination_country || 'International / Global'}\n\n`;

  if (enquiry.product_name || enquiry.product_category || enquiry.product_variant) {
    text += `-----------------------------------------------------------------\n`;
    text += `SECTION 2 — PRODUCT INFORMATION\n`;
    text += `-----------------------------------------------------------------\n`;
    if (enquiry.product_category) text += `Product Category:  ${enquiry.product_category}\n`;
    if (enquiry.product_name)     text += `Product Name:      ${enquiry.product_name}\n`;
    if (enquiry.product_variant)  text += `Product Variant:   ${enquiry.product_variant}\n`;
    if (enquiry.product_origin)   text += `Product Origin:    ${enquiry.product_origin}\n`;
    text += `Source Page:       ${enquiry.source_page || 'auraexport.co'}\n\n`;
  }

  if (
    r.estimated_quantity ||
    r.destination_country ||
    r.destination_port ||
    r.grade_or_specification ||
    r.packaging ||
    r.incoterm ||
    r.target_timeline
  ) {
    text += `-----------------------------------------------------------------\n`;
    text += `SECTION 3 — PROCUREMENT REQUIREMENTS\n`;
    text += `-----------------------------------------------------------------\n`;
    if (r.estimated_quantity)      text += `Estimated Quantity: ${r.estimated_quantity} ${r.unit || ''}\n`;
    if (r.destination_country)     text += `Destination Country:${r.destination_country}\n`;
    if (r.destination_port)        text += `Destination Port:   ${r.destination_port}\n`;
    if (r.grade_or_specification)  text += `Specification:      ${r.grade_or_specification}\n`;
    if (r.packaging)               text += `Packaging:          ${r.packaging}\n`;
    if (r.incoterm)                text += `Incoterm:           ${r.incoterm}\n`;
    if (r.target_timeline)         text += `Target Timeline:    ${r.target_timeline}\n\n`;
  }

  if (r.message && r.message.trim()) {
    text += `-----------------------------------------------------------------\n`;
    text += `SECTION 4 — CUSTOMER MESSAGE\n`;
    text += `-----------------------------------------------------------------\n`;
    text += `${r.message.trim()}\n\n`;
  }

  text += `-----------------------------------------------------------------\n`;
  text += `SECTION 5 — ENQUIRY MANAGEMENT\n`;
  text += `-----------------------------------------------------------------\n`;
  text += `Enquiry Reference: ${enquiry.enquiry_id}\n`;
  text += `Source Component:  ${enquiry.source_component || 'Website'}\n`;
  text += `Enquiry Status:    NEW\n`;
  text += `Reply-To:          ${c.business_email || 'contact@auraexport.co'}\n`;
  text += `=================================================================\n`;

  return text;
}
