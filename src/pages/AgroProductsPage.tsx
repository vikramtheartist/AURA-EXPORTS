import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Search, 
  Sparkles,
  MapPin,
  HelpCircle,
  ShoppingBag
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/procurement/Breadcrumbs';
import FeaturedTurmericSection from '../components/agro/FeaturedTurmericSection';
import OriginSourcingSection from '../components/agro/OriginSourcingSection';
import QualityCustomisationSection from '../components/agro/QualityCustomisationSection';
import ExportProcessSteps from '../components/agro/ExportProcessSteps';
import FinalEnquirySection from '../components/agro/FinalEnquirySection';
import AgroEnquiryModal from '../components/agro/AgroEnquiryModal';
import FloatingQuickContact from '../components/agro/FloatingQuickContact';

import InstitutionalAgroCatalogueSection from '../components/agro/InstitutionalAgroCatalogueSection';
import agroHeroImg from '../assets/images/agro_products_hero.jpg';

export default function AgroProductsPage() {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<{
    product: string;
    origin: string;
    form: string;
    inquiryType: 'quotation' | 'sample' | 'specifications' | 'packaging';
  }>({
    product: 'Indian Agro Commodities',
    origin: 'South India',
    form: 'Standard Export Grade',
    inquiryType: 'quotation',
  });

  const handleOpenEnquiry = (
    productName: string = 'Agricultural Sourcing',
    origin: string = 'India',
    form: string = 'Bulk Export Lot',
    inquiryType: 'quotation' | 'sample' | 'specifications' | 'packaging' = 'quotation'
  ) => {
    setModalConfig({
      product: productName,
      origin,
      form,
      inquiryType,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="w-full pt-28 pb-24 bg-[#0a0a09] text-white" id="agro-products-landing">
      <SEOHead pageKey="agroProducts" />

      {/* Semantic Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Agro Products', href: '/products/agro-products' },
        ]}
      />

      {/* =========================================================================
          SECTION 01 — HERO
          ========================================================================= */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20" id="agro-hero">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1.06] font-normal">
              India&apos;s Finest Origins.{' '}
              <span className="text-[#dcb782] italic font-normal block mt-1">
                Sourced for the World.
              </span>
            </h1>

            <p className="text-[#D5C8B7] font-body text-base md:text-lg leading-relaxed font-light max-w-2xl">
              Discover quality agricultural products sourced from India&apos;s established growing regions, with flexible product forms, buyer-specific specifications and customised export solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#explore-agricultural-products"
                className="bg-[#E2BC86] hover:bg-[#d4a86a] text-[#0A0A0B] transition-all font-body font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-xl shadow-sm flex items-center gap-2.5 cursor-pointer hover:shadow-[0_8px_20px_rgba(226,188,134,0.25)]"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => handleOpenEnquiry('General Agro Sourcing', 'India', 'Export Grade', 'quotation')}
                className="border border-[#252527] hover:border-white/30 text-white hover:bg-white/5 transition-all font-body font-bold text-xs tracking-wider uppercase px-7 py-4 rounded-xl flex items-center gap-2 cursor-pointer"
              >
                <span>Request a Quotation</span>
                <ArrowUpRight className="h-4 w-4 text-[#E2BC86]" />
              </button>
            </div>

            {/* Quick Sourcing Credentials */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 mt-2">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#ab8558] uppercase font-bold">Sourcing Origin</span>
                <span className="text-sm font-semibold text-white mt-0.5">South India & Pan-India</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#ab8558] uppercase font-bold">Product Formats</span>
                <span className="text-sm font-semibold text-white mt-0.5">Raw, Milled & Pastes</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#ab8558] uppercase font-bold">Export Corridors</span>
                <span className="text-sm font-semibold text-white mt-0.5">Chennai, Tuticorin & Cochin</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Column */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#dcb782]/20 via-transparent to-transparent rounded-[2.5rem] blur-2xl opacity-50 pointer-events-none" />
            <div className="relative rounded-[2.2rem] overflow-hidden border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.9)] aspect-[4/3] w-full bg-[#121211]">
              <img
                src={agroHeroImg}
                alt="Aura Exports - Indian Agricultural Products Export Assortment"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </header>

      {/* Retail D2C Cross-Link Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 -mt-6 mb-12">
        <div className="bg-[#141416] border border-[#dcb782]/25 rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#dcb782]/10 border border-[#dcb782]/20 flex items-center justify-center shrink-0">
              <ShoppingBag className="w-5 h-5 text-[#dcb782]" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#dcb782] uppercase tracking-wider font-bold block">
                CONSUMER TINS & D2C ORDERS AVAILABLE
              </span>
              <p className="text-xs text-neutral-300 font-light">
                Looking to purchase individual airtight consumer tins, pouches, or sample packs?
              </p>
            </div>
          </div>
          <Link
            to="/buy-retail"
            className="shrink-0 inline-flex items-center gap-2 bg-[#dcb782] hover:bg-[#e6c99c] text-black font-body font-bold text-xs uppercase px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm hover:scale-[1.02]"
          >
            <span>Explore Buy Retail Shop</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* =========================================================================
          SECTION 02 — INSTITUTIONAL AGRO COMMODITIES CATALOGUE
          3-tile grid for 6 core commodities with technical drawer & RFQ modal
          ========================================================================= */}
      <InstitutionalAgroCatalogueSection />

      {/* =========================================================================
          SECTION 03 — FEATURED PRODUCT: TURMERIC FROM TAMIL NADU
          Dedicated editorial feature with 5 compact forms
          ========================================================================= */}
      <FeaturedTurmericSection
        onOpenEnquiry={() => handleOpenEnquiry('Turmeric (Curcuma Longa)', 'Erode & Salem, Tamil Nadu', 'Whole / Powder / Value-Added', 'quotation')}
      />

      {/* =========================================================================
          SECTION 04 — ORIGIN-LED SOURCING
          Consolidated regional sourcing map & verified clusters
          ========================================================================= */}
      <OriginSourcingSection
        onOpenEnquiry={(product, origin, form) => handleOpenEnquiry(product, origin, form, 'quotation')}
      />

      {/* =========================================================================
          SECTION 05 — PRODUCT QUALITY & CUSTOMISATION
          Consolidates Specs, Testing, Packaging & Export into 4 clean blocks
          ========================================================================= */}
      <QualityCustomisationSection
        onOpenEnquiry={(type) => handleOpenEnquiry('Specifications & Packaging', 'India', 'Target Grade / Pack', type)}
      />

      {/* =========================================================================
          SECTION 06 — HOW EXPORT SOURCING WORKS
          Streamlined 3-step buyer journey
          ========================================================================= */}
      <ExportProcessSteps
        onOpenEnquiry={() => handleOpenEnquiry('New Export Partnership', 'India', 'Initial Sourcing Evaluation', 'quotation')}
      />

      {/* =========================================================================
          SECTION 07 — ONE STRONG FINAL ENQUIRY SECTION
          Unified final section replacing all redundant CTA banners
          ========================================================================= */}
      <FinalEnquirySection
        onOpenModal={(type) => handleOpenEnquiry('Commercial Export Order', 'India', 'Export Grade', type)}
      />

      {/* B2B ENQUIRY MODAL */}
      <AgroEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProduct={modalConfig.product}
        initialOrigin={modalConfig.origin}
        initialForm={modalConfig.form}
        initialInquiryType={modalConfig.inquiryType}
      />

      {/* FLOATING & STICKY MULTI-CHANNEL QUICK CONTACT */}
      <FloatingQuickContact
        onOpenRFQ={() => handleOpenEnquiry('Agro Sourcing Enquiry', 'India', 'Standard Export Grade', 'quotation')}
        productContext={{
          name: modalConfig.product,
          origin: modalConfig.origin,
        }}
        isModalOpen={isModalOpen}
      />
    </div>
  );
}
