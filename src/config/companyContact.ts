/**
 * AURA Global Trade - Verified Company Contact Configuration
 * Single Source of Truth for Enterprise B2B Communications
 */

export const COMPANY_CONTACT = {
  brandName: 'AURA Global Trade',
  legalEntity: 'AURA ENTERPRISE EXPORTS (OPC) PVT LTD',
  corporateEmail: 'contact@auraexport.co',
  tradeDeskEmail: 'trade@auraexport.co',
  
  // Official Phone & WhatsApp Number
  phoneDisplay: '+91 9361990229',
  phoneTel: '+919361990229',
  whatsappNumber: '919361990229', // International format without +
  
  // Operating Facility & Maritime Hubs
  operatingLocation: 'Chennai, Tamil Nadu, India',
  maritimeCorridors: 'Chennai Port (INMAA) & Tuticorin (INTUT)',
  registeredAddress: 'No 11/1A, VOC Street, Pattukottai Muthu Kumaraswamy Street, Baby Nagar, Velachery, Chennai, Tamil Nadu 600042',
  
  // Desk Hours
  deskHours: '9:00 AM – 6:00 PM IST (UTC +5:30)',
  operatingDays: 'Monday through Saturday',
  
  // Statutory Identifiers
  cin: 'U46411TN2026OPC194827',
  iec: 'ABGCA0520R',
  
  // Helpers to construct contextual deep links
  getWhatsAppUrl: (productName?: string, origin?: string, quantity?: string) => {
    let text = `Hello AURA Global Trade,\nI am interested in sourcing ${productName || 'Agricultural Commodities'}.\n`;
    if (productName) text += `Product: ${productName}\n`;
    if (origin) text += `Origin: ${origin}\n`;
    if (quantity && quantity !== 'Not yet decided') text += `Estimated Quantity: ${quantity}\n`;
    text += `I would like to understand product availability, specifications and export quotation options.\nPlease connect me with your export team.`;
    return `https://wa.me/919361990229?text=${encodeURIComponent(text)}`;
  },

  getMailtoUrl: (productName?: string, origin?: string, quantity?: string) => {
    const subject = `Export Enquiry — ${productName || 'Agricultural Commodity Sourcing'}`;
    let body = `Hello AURA Export Desk,\n\nI would like to request an export quotation and explore product availability.\n\n`;
    if (productName) body += `Product of Interest: ${productName}\n`;
    if (origin) body += `Target Origin: ${origin}\n`;
    if (quantity && quantity !== 'Not yet decided') body += `Estimated Volume: ${quantity}\n`;
    body += `\nPlease connect with me regarding technical specifications, availability, and export arrangements.\n\nRegards,`;
    return `mailto:contact@auraexport.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  },
};
