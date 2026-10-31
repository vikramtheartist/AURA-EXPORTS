import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import CtaFooter from './components/CtaFooter';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const AgroProductsPage = lazy(() => import('./pages/AgroProductsPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const SpicesCategoryPage = lazy(() => import('./pages/SpicesCategoryPage'));
const TurmericDetailPage = lazy(() => import('./pages/TurmericDetailPage'));
const JewelryPage = lazy(() => import('./pages/JewelryPage'));
const TextilesPage = lazy(() => import('./pages/TextilesPage'));
const ApparelTextilesPage = lazy(() => import('./pages/ApparelTextilesPage'));
const QualityPage = lazy(() => import('./pages/QualityPage'));
const ExportProcessPage = lazy(() => import('./pages/ExportProcessPage'));
const FaqsPage = lazy(() => import('./pages/FaqsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const RequestQuotePage = lazy(() => import('./pages/RequestQuotePage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const TermsOfTradePage = lazy(() => import('./pages/TermsOfTradePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

/**
 * Minimalist luxury route loading state
 */
function RouteLoadingFallback() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-black text-[#dcb782]">
      <div className="w-16 h-[1px] bg-[#dcb782]/20 relative overflow-hidden rounded-full mb-3">
        <div className="absolute top-0 bottom-0 left-0 bg-[#dcb782] w-1/2 animate-pulse" />
      </div>
      <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#dfd1b9]/40">
        Aura Global Trade
      </span>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden" id="app-root-container">
      {/* Background spatial aesthetic */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-30" />
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-neutral-900/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[60%] right-[-10%] w-[50vw] h-[50vw] bg-neutral-900/30 rounded-full blur-[160px] pointer-events-none" />

      {/* Core layout */}
      <div className="relative z-10 flex flex-col w-full">
        <ScrollToTop />
        <Navbar />

        <div className="w-full flex-grow">
          <Suspense fallback={<RouteLoadingFallback />}>
            <Routes>
              {/* Primary Canonical Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/agro-products" element={<AgroProductsPage />} />
              <Route path="/products/agro-products/:productSlug" element={<ProductDetailPage />} />
              <Route path="/products/apparel-textiles" element={<ApparelTextilesPage />} />
              <Route path="/products/apparel-textiles/:productSlug" element={<ProductDetailPage />} />
              <Route path="/products/:categorySlug/:productSlug" element={<ProductDetailPage />} />
              <Route path="/products/spices" element={<Navigate to="/products/agro-products" replace />} />
              <Route path="/products/spices/turmeric" element={<TurmericDetailPage />} />
              <Route path="/products/jewelry" element={<JewelryPage />} />
              <Route path="/products/textiles" element={<Navigate to="/products/apparel-textiles" replace />} />
              <Route path="/quality-compliance" element={<QualityPage />} />
              <Route path="/export-process" element={<ExportProcessPage />} />
              <Route path="/faqs" element={<FaqsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/request-quote" element={<RequestQuotePage />} />

              {/* Legal & Governance Routes */}
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/terms-of-trade" element={<TermsOfTradePage />} />

              {/* Canonical Redirects / Aliases */}
              <Route path="/agro-products" element={<Navigate to="/products/agro-products" replace />} />
              <Route path="/spices" element={<Navigate to="/products/agro-products" replace />} />
              <Route path="/products/turmeric" element={<Navigate to="/products/agro-products/turmeric" replace />} />
              <Route path="/turmeric" element={<Navigate to="/products/agro-products/turmeric" replace />} />
              <Route path="/jewelry" element={<Navigate to="/products/jewelry" replace />} />
              <Route path="/textiles" element={<Navigate to="/products/apparel-textiles" replace />} />
              <Route path="/apparel-textiles" element={<Navigate to="/products/apparel-textiles" replace />} />
              <Route path="/quality" element={<Navigate to="/quality-compliance" replace />} />

              {/* 404 Fallback */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>

        <CtaFooter />
      </div>
    </div>
  );
}
