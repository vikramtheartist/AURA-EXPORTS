/**
 * AURA Global Trade - Enterprise B2B Analytics & Google Analytics 4 (GA4) Integration
 * Tracks international buyer engagement, product discovery, and commercial conversion actions.
 */

// Global GA4 type augmentation
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GA_MEASUREMENT_ID) ||
  'G-E4B9C8R6T2'; // Default / Configurable Measurement ID

export type ContactEventName =
  | 'rfq_modal_opened'
  | 'enquiry_form_started'
  | 'enquiry_submitted'
  | 'whatsapp_clicked'
  | 'phone_call_clicked'
  | 'email_clicked'
  | 'callback_requested'
  | 'sample_requested'
  | 'view_specifications'
  | 'view_product_detail'
  | 'advanced_requirements_expanded';

export interface EventPayload {
  productName?: string;
  category?: string;
  vertical?: 'agro' | 'jewellery' | 'textiles' | string;
  origin?: string;
  channel?: 'form' | 'whatsapp' | 'phone' | 'email' | 'callback' | string;
  quantity?: string;
  referenceId?: string;
  mode?: 'quotation' | 'sample' | 'packaging' | string;
  [key: string]: any;
}

/**
 * Initialize Google Analytics 4 tag dynamically if not already injected.
 */
export function initGA4(measurementId: string = GA_MEASUREMENT_ID) {
  if (typeof window === 'undefined') return;

  // Avoid duplicate injection
  if (window.gtag || document.getElementById('aura-ga4-script')) {
    return;
  }

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: false, // We handle SPA route changes manually
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure',
  });

  // Inject gtag.js asynchronously
  const script = document.createElement('script');
  script.id = 'aura-ga4-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}

/**
 * Send SPA Virtual Page View on React Router navigation
 */
export function trackPageView(pagePath: string, pageTitle?: string) {
  if (typeof window === 'undefined') return;

  const title = pageTitle || document.title;
  const location = window.location.href;

  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: title,
      page_location: location,
    });
  }

  // Custom DOM event for developer tooling & inspection
  try {
    window.dispatchEvent(
      new CustomEvent('aura_pageview', {
        detail: { pagePath, title, location, timestamp: new Date().toISOString() },
      })
    );
  } catch {
    // Ignore restricted DOM errors
  }
}

/**
 * Track B2B Contact, Enquiry & Lead Conversion Events
 */
export function trackContactEvent(event: ContactEventName, payload: EventPayload = {}) {
  const timestamp = new Date().toISOString();
  const pageUrl = typeof window !== 'undefined' ? window.location.pathname : '';

  const eventData = {
    event,
    ...payload,
    timestamp,
    pageUrl,
  };

  // 1. Dispatch to GA4 with recommended B2B event schemas
  if (typeof window !== 'undefined' && window.gtag) {
    switch (event) {
      case 'enquiry_submitted':
        // Standard GA4 Lead Generation Event
        window.gtag('event', 'generate_lead', {
          event_category: 'B2B Lead',
          event_label: payload.productName || 'Export Enquiry',
          value: payload.quantity ? 1 : 0,
          currency: 'USD',
          lead_type: payload.mode || 'Quotation',
          product_name: payload.productName,
          vertical: payload.vertical,
          origin: payload.origin,
          reference_id: payload.referenceId,
        });
        break;

      case 'whatsapp_clicked':
        window.gtag('event', 'contact', {
          method: 'WhatsApp',
          content_type: payload.productName || 'General Sourcing',
          event_category: 'B2B Instant Contact',
          vertical: payload.vertical,
        });
        break;

      case 'phone_call_clicked':
        window.gtag('event', 'contact', {
          method: 'Phone Call',
          content_type: payload.productName || 'Trade Desk',
          event_category: 'B2B Direct Call',
        });
        break;

      case 'email_clicked':
        window.gtag('event', 'contact', {
          method: 'Email',
          content_type: payload.productName || 'Corporate Mail',
          event_category: 'B2B Corporate Email',
        });
        break;

      case 'sample_requested':
        window.gtag('event', 'select_content', {
          content_type: 'Sample / Swatches',
          item_id: payload.productName,
          vertical: payload.vertical,
        });
        break;

      case 'view_specifications':
      case 'view_product_detail':
        window.gtag('event', 'view_item', {
          item_name: payload.productName,
          item_category: payload.category,
          origin: payload.origin,
        });
        break;

      default:
        window.gtag('event', event, {
          ...payload,
          page_path: pageUrl,
        });
        break;
    }
  }

  // 2. Local Session Log & Custom Event Dispatch
  if (typeof window !== 'undefined') {
    try {
      window.dispatchEvent(new CustomEvent('aura_analytics', { detail: eventData }));

      // Store in localStorage for session conversion metrics
      const stored = JSON.parse(window.localStorage.getItem('aura_lead_events') || '[]');
      stored.unshift(eventData);
      if (stored.length > 50) stored.length = 50;
      window.localStorage.setItem('aura_lead_events', JSON.stringify(stored));
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }

  return eventData;
}
