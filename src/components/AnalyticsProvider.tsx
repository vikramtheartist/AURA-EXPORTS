import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA4, trackPageView } from '../utils/analytics';

/**
 * AnalyticsProvider
 * Automatically initializes GA4 and sends virtual pageviews on route transitions in SPA.
 */
export default function AnalyticsProvider() {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA4 tag on app mount
    initGA4();
  }, []);

  useEffect(() => {
    // Send virtual page_view on every route change
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null;
}
