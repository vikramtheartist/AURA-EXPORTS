/**
 * AURA EXPORTS — Executive Business Card & vCard Utility Engine
 * Generates standards-compliant vCards (.vcf), dynamic QR codes,
 * contact downloads, and high-resolution card exports.
 */

import QRCode from 'qrcode';

export interface BusinessCardData {
  fullName: string;
  title: string;
  organization: string;
  phone: string;
  phoneClean: string;
  email: string;
  website: string;
  websiteUrl: string;
  location: string;
  tagline: string;
}

export const AURA_CARD_DATA: BusinessCardData = {
  fullName: 'Vikram',
  title: 'Managing Director',
  organization: 'AURA Enterprise Exports',
  phone: '+91 93619 90229',
  phoneClean: '+919361990229',
  email: 'contact@auraexport.co',
  website: 'www.auraexport.com',
  websiteUrl: 'https://auraexport.co',
  location: 'Chennai, Tamil Nadu, India',
  tagline: 'Export | Import | Global Sourcing',
};

/**
 * Generate standard RFC 2426 vCard 3.0 string compatible with
 * Apple Contacts (iOS / macOS), Google Contacts (Android), and Outlook.
 */
export function generateVCardString(data: BusinessCardData = AURA_CARD_DATA): string {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:;${data.fullName};;;`,
    `FN:${data.fullName}`,
    `ORG:${data.organization};Aura Global Trade (OPC) Private Limited`,
    `TITLE:${data.title}`,
    `TEL;TYPE=CELL,VOICE,PREF:${data.phoneClean}`,
    `EMAIL;TYPE=WORK,INTERNET,PREF:${data.email}`,
    `URL;TYPE=WORK:${data.websiteUrl}`,
    `ADR;TYPE=WORK:;;Chennai;Tamil Nadu;;India`,
    `NOTE:${data.organization} — ${data.tagline}. Central Executive Trade Desk.`,
    'X-ABShowAs:COMPANY',
    `REV:${new Date().toISOString()}`,
    'END:VCARD',
  ].join('\r\n');
}

/**
 * Trigger immediate browser download of the .vcf contact file.
 * Automatically prompts "Add to Contacts" on iOS and Android devices.
 */
export function downloadVCard(data: BusinessCardData = AURA_CARD_DATA): void {
  const vcard = generateVCardString(data);
  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.setAttribute('download', `${data.fullName}_AURA_Exports.vcf`);
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

/**
 * Generate a high-resolution QR Code Data URL linking to the mobile digital card experience.
 */
export async function generateQrCode(targetUrl: string): Promise<string> {
  try {
    return await QRCode.toDataURL(targetUrl, {
      width: 512,
      margin: 2,
      color: {
        dark: '#14120e',
        light: '#ffffff',
      },
      errorCorrectionLevel: 'H',
    });
  } catch (err) {
    console.error('QR code generation failed:', err);
    return '';
  }
}

/**
 * Get the canonical digital business card URL based on window location.
 */
export function getDigitalCardUrl(): string {
  if (typeof window !== 'undefined') {
    return `${window.location.origin}/card`;
  }
  return 'https://auraexport.co/card';
}

/**
 * Trigger native mobile Web Share API if supported.
 */
export async function shareBusinessCard(data: BusinessCardData = AURA_CARD_DATA): Promise<boolean> {
  const shareUrl = getDigitalCardUrl();
  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share({
        title: `${data.fullName} — ${data.title} | ${data.organization}`,
        text: `Official Trade Contact for ${data.organization} (${data.tagline}). Direct: ${data.phone}`,
        url: shareUrl,
      });
      return true;
    } catch {
      // User cancelled share
      return false;
    }
  }
  return false;
}
