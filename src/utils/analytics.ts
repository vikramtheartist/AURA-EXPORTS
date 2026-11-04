/**
 * AURA Global Trade - Enterprise B2B Analytics & Google Analytics 4 (GA4) Integration
 * Strictly privacy-compliant: Zero PII, no unverified fallbacks, exactly one page view per route.
 */

// Global GA4 type augmentation
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * GA4 Measurement ID configuration.
 * Strictly driven by environment variable. No unverified production fallback is used.
 */
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

export type ContactEventName =
  | 'rfq_modal_opened'
  | 'enquiry_form_started'
  | 'enquiry_submitted'
  | 'whatsapp_clicked'
  | 'phone_call_clicked'
  | 'email_clicked'
  | 'sample_requested'
  | 'view_specifications'
  | 'view_product_detail'
  | 'advanced_requirements_expanded';

export interface EventPayload {
  productName?: string;
  category?: string;
  vertical?: 'agro' | 'jewellery' | 'textiles' | string;
  origin?: string;
  referenceId?: string;
  mode?: 'quotation' | 'sample' | 'packaging' | string;
}

/**
 * Initialize Google Analytics 4 tag dynamically if not already injected.
 * If VITE_GA_MEASUREMENT_ID is empty or unverified, tag injection is safely bypassed.
 */
export function initGA4(measurementId: string = GA_MEASUREMENT_ID) {
  if (typeof window === 'undefined') return;

  // Do not load an unverified or empty property ID
  if (!measurementId || typeof measurementId !== 'string' || !measurementId.startsWith('G-')) {
    return;
  }

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
    send_page_view: false, // Ensures tag initialization never fires an automatic duplicate pageview
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure',
  });

  // Inject gtag.js asynchronously
  const script = document.createElement('script');
  script.id = 'aura-ga4-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

/**
 * Send SPA Virtual Page View on React Router navigation.
 * Exactly one page view is recorded per route change.
 */
export function trackPageView(pagePath: string, pageTitle?: string) {
  if (typeof window === 'undefined') return;

  const title = pageTitle || document.title;
  const location = window.location.href;

  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: title,
      page_location: location,
    });
  }

  // Custom DOM event for internal auditing and debugging
  try {
    window.dispatchEvent(
      new CustomEvent('aura_pageview', {
        detail: { pagePath, title, location, timestamp: new Date().toISOString() },
      })
    );
  } catch {
    // Restricted DOM safe
  }
}

/**
 * Track B2B Contact, Enquiry & Lead Conversion Events.
 * Guaranteed zero PII (no personal phone numbers, names, email addresses, or message contents).
 */
export function trackContactEvent(event: ContactEventName, payload: EventPayload = {}) {
  const timestamp = new Date().toISOString();
  const pageUrl = typeof window !== 'undefined' ? window.location.pathname : '';

  // Sanitize: Retain ONLY non-PII operational fields
  const safeProductName = payload.productName ? String(payload.productName).slice(0, 100) : undefined;
  const safeVertical = payload.vertical ? String(payload.vertical).slice(0, 50) : undefined;
  const safeCategory = payload.category ? String(payload.category).slice(0, 50) : undefined;
  const safeOrigin = payload.origin ? String(payload.origin).slice(0, 50) : undefined;
  const safeReferenceId = payload.referenceId ? String(payload.referenceId).slice(0, 50) : undefined;
  const safeMode = payload.mode ? String(payload.mode).slice(0, 30) : undefined;

  const eventData = {
    event,
    productName: safeProductName,
    vertical: safeVertical,
    category: safeCategory,
    origin: safeOrigin,
    referenceId: safeReferenceId,
    mode: safeMode,
    timestamp,
    pageUrl,
  };

  // Dispatch strictly sanitized parameters to GA4
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    switch (event) {
      case 'enquiry_form_started':
        window.gtag('event', 'form_start', {
          event_category: 'Procurement Engagement',
          form_name: 'B2B Enquiry Form',
          product_name: safeProductName,
          vertical: safeVertical,
          page_path: pageUrl,
        });
        break;

      case 'enquiry_submitted':
        // Standard GA4 Lead Generation Event: Only fired upon confirmed valid submission
        window.gtag('event', 'generate_lead', {
          event_category: 'B2B Lead',
          lead_type: safeMode || 'Quotation',
          product_name: safeProductName,
          vertical: safeVertical,
          origin: safeOrigin,
          reference_id: safeReferenceId,
          page_path: pageUrl,
        });
        break;

      case 'whatsapp_clicked':
        window.gtag('event', 'contact', {
          method: 'WhatsApp',
          product_name: safeProductName || 'General Sourcing',
          vertical: safeVertical,
          page_path: pageUrl,
        });
        break;

      case 'phone_call_clicked':
        window.gtag('event', 'contact', {
          method: 'Phone Call',
          product_name: safeProductName || 'Trade Desk',
          vertical: safeVertical,
          page_path: pageUrl,
        });
        break;

      case 'email_clicked':
        window.gtag('event', 'contact', {
          method: 'Email',
          product_name: safeProductName || 'Corporate Mail',
          vertical: safeVertical,
          page_path: pageUrl,
        });
        break;

      case 'sample_requested':
        window.gtag('event', 'select_content', {
          content_type: 'Sample Request',
          item_id: safeProductName,
          vertical: safeVertical,
          page_path: pageUrl,
        });
        break;

      case 'view_specifications':
      case 'view_product_detail':
        window.gtag('event', 'view_item', {
          item_name: safeProductName,
          item_category: safeCategory || safeVertical,
          origin: safeOrigin,
          page_path: pageUrl,
        });
        break;

      case 'rfq_modal_opened':
      case 'advanced_requirements_expanded':
        window.gtag('event', event, {
          product_name: safeProductName,
          vertical: safeVertical,
          page_path: pageUrl,
        });
        break;
    }
  }

  // Internal session audit event for local development and non-GA testing
  if (typeof window !== 'undefined') {
    try {
      window.dispatchEvent(new CustomEvent('aura_analytics', { detail: eventData }));
    } catch {
      // Ignore
    }
  }

  return eventData;
}
