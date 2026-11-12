import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Package, 
  Layers, 
  FileText, 
  FlaskConical, 
  AlertCircle, 
  ChevronRight, 
  Sparkles, 
  Boxes 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/procurement/Breadcrumbs';
import AgroEnquiryModal from '../components/agro/AgroEnquiryModal';
import { turmericProductForms } from '../data/agroOriginsData';
import { TurmericFormDetail } from '../types/agro';

import bannerImg from '../assets/images/turmeric_roots_banner_1780417444579.png';
import foodProcessingImg from '../assets/images/turmeric_food_processing_1_png_1780418493678.png';
import personalCareImg from '../assets/images/turmeric_personal_care_1_png_1780418510348.png';
import nutraceuticalsImg from '../assets/images/turmeric_nutraceuticals_1_png_1780418540074.png';
import turmericImg from '../assets/images/product_turmeric_1780423510096.png';

export default function TurmericFlagshipPage() {
  const [selectedFormId, setSelectedFormId] = useState<string>('whole-turmeric');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<{
    product: string;
    form: string;
    inquiryType: 'quotation' | 'sample' | 'specifications' | 'packaging';
  }>({
    product: 'Turmeric (Curcuma Longa)',
    form: 'Whole Turmeric Fingers',
    inquiryType: 'quotation',
  });

  const activeForm = turmericProductForms.find(f => f.id === selectedFormId) || turmericProductForms[0];

  const handleOpenModal = (form: TurmericFormDetail, inquiryType: 'quotation' | 'sample' | 'specifications' | 'packaging' = 'quotation') => {
    setModalConfig({
      product: `Turmeric - ${form.name}`,
      form: form.subtitle,
      inquiryType,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="w-full pt-28 pb-24 bg-[#0a0a09] text-white" id="turmeric-flagship-landing">
      <SEOHead pageKey="turmeric" />

      {/* Semantic Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Agro Products', href: '/products/agro-products' },
          { label: 'Turmeric', href: '/products/agro-products/turmeric' },
        ]}
      />

      {/* SECTION 1 — FLAGSHIP TURMERIC HERO */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1.05] font-normal">
              From Erode & Salem.{' '}
              <span className="text-[#dcb782] italic font-normal block mt-1">
                Turmeric for Global Markets.
              </span>
            </h1>

            <p className="text-[#D5C8B7] font-body text-base md:text-lg leading-relaxed font-light max-w-2xl">
              Explore turmeric sourced from established agricultural regions of Tamil Nadu, including Erode and Salem. Available across different product forms and processing formats, with specifications and packaging tailored to international buyer requirements.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#turmeric-forms-section"
                className="bg-[#dcb782] text-black hover:bg-white transition-all font-body font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-xl shadow-xl flex items-center gap-2.5 cursor-pointer"
              >
                <span>Explore Turmeric Products</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                onClick={() => handleOpenModal(activeForm, 'quotation')}
                className="border border-white/15 hover:border-[#dcb782] text-white hover:bg-white/5 transition-all font-body font-bold text-xs tracking-wider uppercase px-7 py-4 rounded-xl flex items-center gap-2 cursor-pointer"
              >
                <span>Request Turmeric Quotation</span>
                <ArrowUpRight className="h-4 w-4 text-[#dcb782]" />
              </button>
            </div>

            {/* Quick Sourcing Regional Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 mt-2">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#ab8558] uppercase font-bold">Sourcing Cluster</span>
                <span className="text-sm font-semibold text-white mt-0.5">Erode & Salem GI Basin</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#ab8558] uppercase font-bold">Active Curcumin</span>
                <span className="text-sm font-semibold text-white mt-0.5">2.5% to 5.5%+ HPLC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#ab8558] uppercase font-bold">Product Formats</span>
                <span className="text-sm font-semibold text-white mt-0.5">5 Processed Streams</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Column */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#dcb782]/25 via-transparent to-transparent rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none" />
            <div className="relative rounded-[2.2rem] overflow-hidden border border-white/15 shadow-[0_30px_70px_rgba(0,0,0,0.95)] aspect-[4/3] w-full bg-[#121211]">
              <img
                src={bannerImg}
                alt="Aura Exports - Harvested Erode Turmeric Rhizomes and Fingers"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md bg-black/60 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#dcb782] tracking-wider uppercase font-bold block">
                    FLAGSHIP COMMODITY
                  </span>
                  <span className="text-xs text-white font-medium">
                    Curcuma Longa · Bhavani River Basin Sourcing
                  </span>
                </div>
                <ShieldCheck className="h-5 w-5 text-[#dcb782] shrink-0" />
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* SECTION 2 — REGIONAL SOURCING HERITAGE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-24">
        <div className="rounded-3xl border border-white/10 bg-[#121210] p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-widest text-[#dcb782] uppercase font-bold block mb-2">
              WHY ERODE & SALEM ORIGIN MATTERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading text-white font-normal mb-4">
              Centuries of Cultivation, Fertile Alluvial Soils & Regulated Regimes
            </h2>
            <p className="text-sm text-[#D5C8B7] font-light leading-relaxed mb-6">
              Erode, often hailed as the &ldquo;Yellow City&rdquo; of India, operates alongside Salem in the Bhavani and Cauvery river basins. The unique microclimate, combined with traditional boiling in mild steel vats and extensive open-air sun-curing on concrete drying yards, seals in volatile aromatic compounds and ensures high curcuminoid density that international spice processors rely upon.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-white/80">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-[#dcb782] block text-[10px] uppercase font-bold mb-1">Geographical Indicator</span>
                <span>Erode Turmeric (GI Tagged Origin)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-[#dcb782] block text-[10px] uppercase font-bold mb-1">Market Regulation</span>
                <span>Direct Sourcing from Regulated Agricultural Mandis</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-[#dcb782] block text-[10px] uppercase font-bold mb-1">Shipping Ports</span>
                <span>Direct Multimodal Corridors to Chennai & Tuticorin</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — 5 DISTINCT TURMERIC PRODUCT FORMS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-28" id="turmeric-forms-section">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#dcb782] uppercase font-bold">
            PRODUCT PROCESSING FORMATS
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-white font-normal mt-2">
            Five Dedicated Turmeric Product Forms
          </h2>
          <p className="text-sm md:text-base text-[#D5C8B7] font-light leading-relaxed mt-3">
            From whole unpolished rhizomes for spice grinders to cold-milled powders, food service pastes, encapsulated dietary supplements and cosmetic preparations.
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#dcb782]/40 to-transparent mt-4" />
        </div>

        {/* 5 Form Selection Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {turmericProductForms.map((form) => {
            const isSelected = form.id === selectedFormId;
            return (
              <div
                key={form.id}
                onClick={() => setSelectedFormId(form.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#181816] border-[#dcb782] shadow-[0_10px_30px_rgba(220,183,130,0.15)] ring-1 ring-[#dcb782]/50'
                    : 'bg-[#10100f] border-white/10 hover:border-white/25 hover:bg-[#141412]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-[#dcb782] font-bold">
                      FORM {form.formNumber}
                    </span>
                    <span className={`h-2 w-2 rounded-full ${isSelected ? 'bg-[#dcb782]' : 'bg-white/20'}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-[#dcb782] transition-colors">
                    {form.name.replace(/^\d+\.\s*/, '')}
                  </h3>
                  <span className="text-[11px] text-[#dfd1b9]/60 font-light block line-clamp-2">
                    {form.subtitle}
                  </span>
                </div>

                <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between text-[11px] font-mono">
                  <span className={isSelected ? 'text-[#dcb782] font-bold' : 'text-white/40'}>
                    {isSelected ? 'Viewing Specs' : 'Select Form'}
                  </span>
                  <ChevronRight className={`h-3.5 w-3.5 ${isSelected ? 'text-[#dcb782]' : 'text-white/30'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* ACTIVE FORM DEEP-DIVE PRODUCT DETAIL EXPERIENCE */}
        <div className="rounded-3xl border border-white/15 bg-[#121210] p-6 sm:p-10 shadow-2xl relative overflow-hidden" id="active-turmeric-detail-view">
          
          {/* Header of Active Form */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-[#dcb782] uppercase tracking-wider font-bold">
                  FORM {activeForm.formNumber} · {activeForm.name}
                </span>
                <span className="text-[9px] font-mono bg-white/5 text-white/70 border border-white/10 px-2.5 py-0.5 rounded-full">
                  Origin: {activeForm.origin.regions.join(', ')}, {activeForm.origin.state}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading text-white font-medium">
                {activeForm.headline}
              </h3>
              <p className="text-xs sm:text-sm text-[#dfd1b9]/80 font-light max-w-3xl mt-2 leading-relaxed">
                {activeForm.description}
              </p>
            </div>

            {/* Quick CTAs for Active Form */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => handleOpenModal(activeForm, 'sample')}
                className="px-5 py-3 rounded-xl border border-white/15 hover:border-[#dcb782] text-white hover:bg-white/5 text-xs font-mono uppercase tracking-wider transition-all"
              >
                Request Sample
              </button>
              <button
                onClick={() => handleOpenModal(activeForm, 'quotation')}
                className="px-6 py-3 rounded-xl bg-[#dcb782] text-black font-semibold text-xs tracking-wider uppercase hover:bg-white transition-all shadow-lg flex items-center gap-2"
              >
                <span>Request Quotation</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Grid Layout: Visual & Varieties (4 Cols) + Technical Specs Table (8 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
            
            {/* Visual & Varieties Column (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Image Preview */}
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative border border-white/10 bg-black">
                <img
                  src={activeForm.image}
                  alt={`Aura Exports - ${activeForm.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-[11px] font-mono text-[#dcb782]">
                  {activeForm.subtitle}
                </div>
              </div>

              {/* Available Varieties & Grades */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                <span className="text-xs font-mono text-white uppercase tracking-wider block font-bold">
                  Available Varieties
                </span>
                <ul className="space-y-1.5 text-xs text-[#dfd1b9]/85">
                  {activeForm.varieties.map((v, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#dcb782] shrink-0" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-white/5">
                  <span className="text-[10px] font-mono text-white/50 uppercase block font-bold mb-1.5">
                    Grading Spectrum
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeForm.availableGrades.map((g, i) => (
                      <span key={i} className="text-[10px] font-mono bg-white/5 text-white/70 px-2 py-0.5 rounded border border-white/5">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Processing Method */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-[#dfd1b9]/80">
                <span className="text-xs font-mono text-[#dcb782] uppercase tracking-wider block font-bold mb-1">
                  Processing & Curing
                </span>
                <p className="font-light leading-relaxed">
                  {activeForm.processingMethod}
                </p>
              </div>

            </div>

            {/* Technical Specifications Table & Packaging Options (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Technical Specifications Table */}
              <div className="rounded-2xl border border-white/10 bg-[#0e0e0d] p-6 shadow-md">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <FlaskConical className="h-4 w-4 text-[#dcb782]" />
                    <span className="text-xs font-mono text-white uppercase font-bold tracking-wider">
                      Technical & Chemical Specifications (HPLC Verified)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">
                    ISO 17025 Third-Party Tested
                  </span>
                </div>

                <div className="divide-y divide-white/5 text-xs">
                  {Object.entries(activeForm.specifications).map(([key, value]) => (
                    <div key={key} className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="text-white/60 font-mono text-[11px] sm:w-1/2">{key}</span>
                      <span className="text-white font-medium sm:w-1/2 text-left sm:text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Packaging Options */}
              <div className="rounded-2xl border border-white/10 bg-[#0e0e0d] p-6">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-[#dcb782]" />
                    <span className="text-xs font-mono text-white uppercase font-bold tracking-wider">
                      Approved Packaging Options
                    </span>
                  </div>
                  <button
                    onClick={() => handleOpenModal(activeForm, 'packaging')}
                    className="text-[11px] font-mono text-[#dcb782] hover:underline cursor-pointer"
                  >
                    Custom Packaging Enquiry →
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeForm.packagingOptions.map((pkg, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-[#dcb782] uppercase font-bold">
                          {pkg.type.toUpperCase()} FORMAT
                        </span>
                        <span className="text-[10px] font-mono text-white/50">{pkg.sizes.join(', ')}</span>
                      </div>
                      <span className="text-white font-medium block">{pkg.material}</span>
                      <span className="text-[11px] text-white/50 block font-light">{pkg.barrierProps}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commercial Applications & Export Documentation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Applications */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs">
                  <span className="text-xs font-mono text-white uppercase tracking-wider block font-bold mb-2">
                    Primary Applications
                  </span>
                  <ul className="space-y-1 text-white/70">
                    {activeForm.applications.map((app, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-[#dcb782]" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Export Documentation */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs">
                  <span className="text-xs font-mono text-white uppercase tracking-wider block font-bold mb-2">
                    Standard Export Documentation
                  </span>
                  <ul className="space-y-1 text-white/70">
                    {activeForm.exportDocumentation.map((doc, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-[#dcb782]" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

          </div>

          {/* MANDATORY REGULATORY / SAFETY DISCLOSURES FOR VALUE-ADDED FORMS (Capsules & Face Packs) */}
          {activeForm.regulatoryAndSafetyNotes && (
            <div className="mt-6 p-4 rounded-2xl bg-[#dcb782]/10 border border-[#dcb782]/30 flex items-start gap-3 text-xs text-[#dfd1b9]/90">
              <AlertCircle className="h-5 w-5 text-[#dcb782] shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="text-white font-semibold block mb-0.5 font-mono uppercase text-[11px]">
                  Regulatory & Compliance Guidance
                </span>
                {activeForm.regulatoryAndSafetyNotes}
              </div>
            </div>
          )}

          {/* Bottom Action Footer for Selected Form */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-white/60">
              <span>Minimum Order Quantity: </span>
              <strong className="text-white font-medium">{activeForm.minOrderQuantity}</strong>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleOpenModal(activeForm, 'specifications')}
                className="px-5 py-2.5 rounded-xl border border-white/10 hover:border-white/20 text-white/80 text-xs font-mono uppercase"
              >
                Request Custom Specs
              </button>
              <button
                onClick={() => handleOpenModal(activeForm, 'quotation')}
                className="px-6 py-2.5 rounded-xl bg-[#dcb782] text-black font-semibold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md flex items-center gap-2"
              >
                <span>Request Quotation for {activeForm.name.replace(/^\d+\.\s*/, '')}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

        </div>

      </section>

      {/* SECTION 4 — TURMERIC FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 mb-20">
        <div className="text-center mb-10">
          <span className="text-xs font-mono tracking-widest text-[#dcb782] uppercase font-bold">
            PROCUREMENT FAQs
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading text-white font-normal mt-2">
            Frequently Asked Questions for Turmeric Importers
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'What is the curcumin content available in AURA’s turmeric?',
              a: 'AURA provides turmeric calibrated across multiple curcumin brackets: standard culinary finger/powder (2.5% to 3.0%), high-curcumin Erode/Salem lots (3.5% to 4.5%), and extract-grade lots (5.0%+). Every shipment is tested via HPLC at an accredited laboratory, and the Certificate of Analysis is provided prior to container loading.',
            },
            {
              q: 'Can AURA supply both polished and unpolished turmeric fingers?',
              a: 'Yes. We supply unpolished turmeric fingers (natural exterior husk intact, preferred for long-distance bulk storage) as well as machine double-polished fingers (friction rubbed to achieve smooth, bright yellow rhizome skin).',
            },
            {
              q: 'How does AURA prevent curcumin degradation during transit?',
              a: 'Curcumin is sensitive to ultraviolet light and high humidity. For ground powders, we use multi-layer barrier bags with light-proof foils or UV-stabilized liners. For sea freight, desiccants and container liners are used to avoid moisture sweating in transit.',
            },
            {
              q: 'Can AURA provide private label retail packaging for turmeric powder and capsules?',
              a: 'Yes. We support custom-printed stand-up pouches (100g, 250g, 500g, 1kg), bottles with induction seals, and outer cartons featuring buyer branding, barcodes, and multilingual nutrition facts compliant with the buyer’s destination country.',
            },
          ].map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#121210] border border-white/5">
              <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-[#dfd1b9]/80 font-light leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <AgroEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProduct={modalConfig.product}
        initialCategory="Turmeric"
        initialForm={modalConfig.form}
        initialOrigin="Erode & Salem, Tamil Nadu, India"
        initialInquiryType={modalConfig.inquiryType}
      />
    </div>
  );
}
