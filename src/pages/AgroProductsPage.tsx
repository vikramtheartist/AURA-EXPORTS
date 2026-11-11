import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  PackageCheck, 
  Globe, 
  Sparkles,
  MapPin,
  FileText
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/procurement/Breadcrumbs';
import UnifiedProductExplorer from '../components/products/UnifiedProductExplorer';
import TechnicalSpecDrawer from '../components/agro/TechnicalSpecDrawer';
import FeaturedTurmericSection from '../components/agro/FeaturedTurmericSection';
import OriginSourcingSection from '../components/agro/OriginSourcingSection';
import QualityCustomisationSection from '../components/agro/QualityCustomisationSection';
import ExportProcessSteps from '../components/agro/ExportProcessSteps';
import FinalEnquirySection from '../components/agro/FinalEnquirySection';
import AgroEnquiryModal from '../components/agro/AgroEnquiryModal';
import FloatingQuickContact from '../components/agro/FloatingQuickContact';
import { InstitutionalProduct } from '../data/institutionalAgroCatalog';

import heroTurmericBowlImg from '../assets/images/explorer/hero_turmeric_bowl.jpg';

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

  // Technical Drawer State
  const [selectedProductForDrawer, setSelectedProductForDrawer] = useState<InstitutionalProduct | null>(null);

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
    <div className="w-full pt-28 pb-24 bg-[#0A0A0B] text-white" id="agro-products-landing">
      <SEOHead pageKey="agroProducts" />

      {/* Semantic Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Agro Products & Origins', href: '/products/agro-products' },
        ]}
      />

      {/* =========================================================================
          SECTION B — PREMIUM HERO (Editorial Indian Sourcing & Export Enterprise)
          ========================================================================= */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-16" id="agro-hero">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-[#151517] border border-[#D4AF37]/30 rounded-full px-4 py-1.5 w-fit shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="text-[11px] font-mono text-[#D4AF37] tracking-[0.25em] uppercase font-bold">
                INDIA&apos;S FINEST ORIGINS
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#F5F1E8] tracking-tight leading-[1.08] font-normal">
              Pure Gourmet Spice Powders.{' '}
              <span className="text-[#D4AF37] italic font-normal block mt-1">
                Packed for Worldwide Pantry & Retail.
              </span>
            </h1>

            <p className="text-[#A5A19A] font-body text-base md:text-lg leading-relaxed font-light max-w-2xl">
              A curated portfolio of premium spices, agro products and natural ingredients from India&apos;s finest sourcing regions. Sourced with batch traceability, certified testing, and flexible packaging from retail tins to full container loads.
            </p>

            {/* 4 Compact Value Propositions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                  <Sprout className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div className="text-xs font-mono text-white font-medium">
                  Single-Origin Sourcing
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div className="text-xs font-mono text-white font-medium">
                  Export-Grade Quality
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                  <PackageCheck className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div className="text-xs font-mono text-white font-medium">
                  Flexible Packaging
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div className="text-xs font-mono text-white font-medium">
                  Global Compliance
                </div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#unified-product-explorer"
                className="bg-gradient-to-r from-[#D4AF37] to-[#E5C07B] hover:from-[#c5a02e] hover:to-[#d6b068] text-[#0A0A0B] transition-all font-body font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-xl shadow-lg flex items-center gap-2 cursor-pointer hover:scale-[1.01]"
              >
                <span>Explore Products & Origins</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => handleOpenEnquiry('Export Commodity Portfolio', 'India', 'Full Container Load / Retail', 'quotation')}
                className="border border-[#29292D] hover:border-white/30 bg-[#151517] text-white hover:bg-white/5 transition-all font-body font-bold text-xs tracking-wider uppercase px-7 py-4 rounded-xl flex items-center gap-2 cursor-pointer"
              >
                <span>Request Export Quote</span>
                <FileText className="h-4 w-4 text-[#D4AF37]" />
              </button>
            </div>

          </div>

          {/* Right Hero Visual Column */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-transparent rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none" />
            <div className="relative rounded-[2.2rem] overflow-hidden border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.95)] aspect-[4/3] w-full bg-[#111113] group">
              <img
                src={heroTurmericBowlImg}
                alt="Aura Exports - Pure Gourmet Spices & Agricultural Commodities"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md bg-black/65 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.2em] uppercase font-bold block">
                    TRACEABLE BATCH QUALITY
                  </span>
                  <span className="text-xs text-white font-medium">
                    Salem Turmeric · Malabar Pepper · Alleppey Cardamom · Guntur Chilli
                  </span>
                </div>
                <ShieldCheck className="h-5 w-5 text-[#D4AF37] shrink-0" />
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* =========================================================================
          SECTION C–G — UNIFIED AGRICULTURAL COMMODITIES & GOURMET PRODUCTS EXPLORER
          Consolidates Retail Tins & Wholesale Commodities into One Dynamic Discovery System
          ========================================================================= */}
      <UnifiedProductExplorer
        onOpenAgroEnquiry={handleOpenEnquiry}
        onOpenSpecDrawer={(product) => setSelectedProductForDrawer(product)}
      />

      {/* TECHNICAL SPECIFICATION DRAWER */}
      <TechnicalSpecDrawer
        product={selectedProductForDrawer}
        isOpen={!!selectedProductForDrawer}
        onClose={() => setSelectedProductForDrawer(null)}
        onRequestQuotation={(product) => {
          setSelectedProductForDrawer(null);
          handleOpenEnquiry(product.name, product.origin.displayOrigin, product.grade, 'quotation');
        }}
      />

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
