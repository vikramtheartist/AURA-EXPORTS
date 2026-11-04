/**
 * AURA Global Trade - B2B Contact & Conversion Analytics
 * Lightweight telemetry for procurement engagement & channel preferences
 */

export type ContactEventName =
  | 'rfq_modal_opened'
  | 'enquiry_form_started'
  | 'enquiry_submitted'
  | 'whatsapp_clicked'
  | 'phone_call_clicked'
  | 'email_clicked'
  | 'callback_requested'
  | 'advanced_requirements_expanded';

interface EventPayload {
  productName?: string;
  category?: string;
  origin?: string;
  channel?: 'form' | 'whatsapp' | 'phone' | 'email' | 'callback';
  quantity?: string;
  [key: string]: any;
}

export function trackContactEvent(event: ContactEventName, payload: EventPayload = {}) {
  const timestamp = new Date().toISOString();
  const eventData = {
    event,
    ...payload,
    timestamp,
    pageUrl: typeof window !== 'undefined' ? window.location.pathname : '',
  };

  // Safe developer logging & custom DOM event dispatch
  if (typeof window !== 'undefined') {
    try {
      window.dispatchEvent(new CustomEvent('aura_analytics', { detail: eventData }));
      
      // Store event count in localStorage for session conversion metrics
      const stored = JSON.parse(window.localStorage.getItem('aura_lead_events') || '[]');
      stored.unshift(eventData);
      if (stored.length > 50) stored.length = 50; // Keep last 50 events
      window.localStorage.setItem('aura_lead_events', JSON.stringify(stored));
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }

  return eventData;
}
