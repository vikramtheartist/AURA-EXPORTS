import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowLeft, Truck, Box, Calendar, Shield, MapPin, Lock, Snowflake, CheckCircle2, ChevronRight } from 'lucide-react';
import { turmericProduct } from '../data/products';
import ProcurementPanel from './procurement/ProcurementPanel';
import SpecificationTable from './procurement/SpecificationTable';
import VerificationPathway from './procurement/VerificationPathway';
import HowToBuyModule from './procurement/HowToBuyModule';
import Breadcrumbs from './procurement/Breadcrumbs';

import bannerImg from '../assets/images/turmeric_roots_banner_1780417444579.png';
import foodProcessingImg from '../assets/images/turmeric_food_processing_1_png_1780418493678.png';
import personalCareImg from '../assets/images/turmeric_personal_care_1_png_1780418510348.png';
import beveragesImg from '../assets/images/turmeric_beverages_1_png_1780418526725.png';
import nutraceuticalsImg from '../assets/images/turmeric_nutraceuticals_1_png_1780418540074.png';

interface TurmericDetailProps {
  onNavigate: (sectionId: string) => void;
}

export default function TurmericDetail({ onNavigate }: TurmericDetailProps) {
  const [selectedFormatId, setSelectedFormatId] = useState<string>('turmeric-fingers');

  return (
    <div className="w-full bg-[#0d0d0c] text-[#fbfbeb] pt-24 pb-20" id="turmeric-root-container">
      {/* Semantic Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Spices & Botanicals', href: '/products/spices' },
          { label: 'Turmeric', href: '/products/spices/turmeric' },
        ]}
      />

      {/* Hero Section Container (Full Widescreen Layout) */}
      <section className="w-full relative mb-24 bg-black/60 overflow-hidden" id="turmeric-hero">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 brightness-75 scale-105 pointer-events-none transition-transform duration-1000"
            id="turmeric-hero-video"
            poster={bannerImg}
          >
            <source src="/turmeric_hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0c] via-[#0d0d0c]/60 to-transparent z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0c] via-[#0d0d0c]/20 to-transparent z-[1]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-[30vh] md:pt-[36vh] pb-16 md:pb-24 flex flex-col items-start text-left">
          <div className="absolute top-8 left-6 md:left-12 lg:left-24 w-12 h-12 border-t border-l border-[#dcb782]/20 pointer-events-none" />
          <div className="absolute bottom-8 left-6 md:left-12 lg:left-24 w-12 h-12 border-b border-l border-[#dcb782]/20 pointer-events-none" />

          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-3.5 py-1 mb-4 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#dcb782]" />
            <span className="text-[10px] font-mono tracking-widest text-[#dcb782] uppercase font-bold">
              REFERENCE SOURCING IMPLEMENTATION
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-medium tracking-tight leading-[0.95] mb-6 flex flex-col text-white"
          >
            Premium Indian
            <span className="italic text-[#dcb782] font-normal mt-2">Turmeric</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#D5C8B7]/95 font-body text-base md:text-lg lg:text-[19px] font-light leading-relaxed max-w-2xl mb-10 drop-shadow-md"
          >
            Sourced from Indian agricultural ecosystems and structured for specification-led international procurement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => onNavigate('request-quote?product=turmeric')}
              className="bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black hover:from-[#fbf3db] hover:to-[#dcb782] font-body font-bold rounded-xl px-8 py-4 text-xs tracking-wider uppercase transition-all duration-300 shadow-xl cursor-pointer transform hover:scale-[1.02] flex items-center gap-2"
            >
              Request a Quote
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <a
              href="#procurement-panel"
              className="border border-[#dfd1b9]/30 text-[#dfd1b9] hover:bg-white/5 hover:text-white font-body font-bold rounded-xl px-8 py-4 text-xs tracking-wider uppercase transition-all cursor-pointer backdrop-blur-md flex items-center gap-2 hover:border-[#dcb782]/40"
            >
              View Specifications
            </a>
          </motion.div>
        </div>
      </section>

      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Section 9: 5 Turmeric Product Types (Buyer-Relevant Formats) */}
        <section className="mb-24" id="turmeric-formats">
          <div className="flex flex-col gap-2 mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono tracking-widest text-[#ab8558] uppercase font-bold">
              BUYER-RELEVANT FORMATS
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-white font-medium">
              Structured Turmeric Product Types
            </h2>
            <p className="text-xs md:text-sm text-[#dfd1b9]/70 font-light">
              Select your required physical form to inspect procurement parameters and commercial suitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {turmericProduct.variants.map((v) => {
              const isSelected = selectedFormatId === v.id;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setSelectedFormatId(v.id)}
                  className={`p-5 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#dcb782] bg-[#dcb782]/10 shadow-[0_0_30px_rgba(220,183,130,0.15)]'
                      : 'border-white/10 bg-[#121211] hover:border-white/20 hover:bg-white/[0.03]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-[#ab8558] uppercase font-bold">
                        {v.availability === 'available' ? 'Standard' : 'Extract / Custom'}
                      </span>
                      {isSelected && <span className="h-2 w-2 rounded-full bg-[#dcb782]" />}
                    </div>
                    <h3 className="text-base font-semibold text-white mb-1.5">{v.name}</h3>
                    <p className="text-xs text-[#dfd1b9]/75 font-light leading-relaxed mb-4">
                      {v.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/5">
                    <span className="text-[10px] font-mono text-[#dcb782] block">APPLICATION</span>
                    <span className="text-[11px] text-white/90 font-medium">{v.primaryApplication}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Section 11: Procurement Specification Panel */}
        <section className="mb-24 scrolls-margin-top" id="procurement-panel">
          <ProcurementPanel
            product={turmericProduct}
            selectedForm={selectedFormatId}
          />
        </section>

        {/* Section 10: Technical Specification System */}
        <section className="mb-24">
          <SpecificationTable
            specifications={turmericProduct.specifications}
            title="Turmeric Technical Specification System"
            subtitle="STRUCTURED PROCUREMENT MATRIX"
          />
        </section>

        {/* Applications Showcase */}
        <section className="mb-24" id="applications-showcase">
          <div className="flex flex-col gap-2 mb-12 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono tracking-widest text-[#ab8558] uppercase font-bold">
              GLOBAL DEMAND VERTICALS
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-white font-medium">
              Primary Industrial Applications
            </h2>
            <p className="text-xs md:text-sm text-[#dfd1b9]/70 font-light">
              How global manufacturers and brands deploy AURA-sourced botanical ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-white/10 bg-[#121211] p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={foodProcessingImg}
                  alt="Food Processing Turmeric"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl font-heading text-white font-medium mb-2">Food Processing</h3>
                <p className="text-xs text-[#dfd1b9]/70 font-light leading-relaxed mb-4">
                  Natural colorant, curry blend grinding base, and clean-label ingredient for global food processors replacing synthetic dyes.
                </p>
                <div className="text-[11px] font-mono text-[#dcb782]">Thermal stability · Clean label</div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#121211] p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={nutraceuticalsImg}
                  alt="Nutraceuticals Supplements"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl font-heading text-white font-medium mb-2">Nutraceuticals & Dietary</h3>
                <p className="text-xs text-[#dfd1b9]/70 font-light leading-relaxed mb-4">
                  Standardized active curcuminoid compounds for capsules, therapeutic blends, and high-potency health supplements.
                </p>
                <div className="text-[11px] font-mono text-[#dcb782]">HPLC verified · Low heavy metal profile</div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#121211] p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={beveragesImg}
                  alt="Beverages & Golden Milk"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl font-heading text-white font-medium mb-2">Beverages & Functional Foods</h3>
                <p className="text-xs text-[#dfd1b9]/70 font-light leading-relaxed mb-4">
                  Golden milk blends, RTD wellness elixirs, and water-dispersible extracts delivering natural vibrant hue and aroma.
                </p>
                <div className="text-[11px] font-mono text-[#dcb782]">Fine mesh granulation · Cold-milled</div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#121211] p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={personalCareImg}
                  alt="Cosmetics & Personal Care"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl font-heading text-white font-medium mb-2">Cosmetics & Personal Care</h3>
                <p className="text-xs text-[#dfd1b9]/70 font-light leading-relaxed mb-4">
                  Ayurvedic skincare active for brightening serums, soaps, and barrier repair lotions with zero synthetic adulterants.
                </p>
                <div className="text-[11px] font-mono text-[#dcb782]">Natural bio-active · Zero fillers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Preservation Framework */}
        <section className="mb-24" id="preservation-pillars">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-mono tracking-widest text-[#dcb782] uppercase font-bold block mb-2">
              PRESERVED INTEGRITY SYSTEM
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-white font-semibold">
              Quality Preservation Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl border border-white/10 bg-[#121211] flex flex-col justify-between text-center items-center">
              <div className="h-12 w-12 rounded-full bg-[#dcb782]/10 border border-[#dcb782]/30 flex items-center justify-center mb-4">
                <MapPin className="h-5 w-5 text-[#dcb782]" />
              </div>
              <h3 className="text-lg font-heading text-white font-medium mb-2">Audited Sourcing Lineage</h3>
              <p className="text-xs text-[#dfd1b9]/75 font-light leading-relaxed">
                Direct partnerships with verified farmer collectives in the Erode river basin with lot-level origin traceability.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-[#121211] flex flex-col justify-between text-center items-center">
              <div className="h-12 w-12 rounded-full bg-[#dcb782]/10 border border-[#dcb782]/30 flex items-center justify-center mb-4">
                <Lock className="h-5 w-5 text-[#dcb782]" />
              </div>
              <h3 className="text-lg font-heading text-white font-medium mb-2">Barrier Moisture Packaging</h3>
              <p className="text-xs text-[#dfd1b9]/75 font-light leading-relaxed">
                Multi-wall kraft bags and food-grade HDPE liners configured to seal volatile essential oils and eliminate ambient humidity uptake.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-[#121211] flex flex-col justify-between text-center items-center">
              <div className="h-12 w-12 rounded-full bg-[#dcb782]/10 border border-[#dcb782]/30 flex items-center justify-center mb-4">
                <Snowflake className="h-5 w-5 text-[#dcb782]" />
              </div>
              <h3 className="text-lg font-heading text-white font-medium mb-2">Cold-Milling Preservation</h3>
              <p className="text-xs text-[#dfd1b9]/75 font-light leading-relaxed">
                Temperature-controlled pulverization preventing thermal degradation of natural curcuminoids and aromatic volatile terpenes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 20-22: Contextual Trade, MOQ & Logistics (Honest B2B Parameters) */}
        <section className="mb-24 rounded-3xl border border-white/10 bg-[#121211] p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-[10px] font-mono tracking-widest text-[#dcb782] uppercase font-bold">
              COMMERCIAL & LOGISTICS SPECIFICATION
            </span>
            <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
              Commercial Trade Parameters
            </h2>
            <p className="text-xs md:text-sm text-[#dfd1b9]/70 font-light">
              Export terms, dispatch ports, and packaging configurations structured for global transit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="h-5 w-5 text-[#dcb782]" />
                <h3 className="text-base font-semibold text-white">Logistics & MOQ</h3>
              </div>
              <div className="flex flex-col gap-2.5 text-xs">
                <div>
                  <span className="text-[#ab8558] font-mono uppercase block text-[10px]">Minimum Order Volume</span>
                  <span className="text-white font-medium">{turmericProduct.trade.moqDescription.value}</span>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <span className="text-[#ab8558] font-mono uppercase block text-[10px]">Loading Seaports & Air Hubs</span>
                  <span className="text-white font-medium">{turmericProduct.trade.exportGateways.value.join(' · ')}</span>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <span className="text-[#ab8558] font-mono uppercase block text-[10px]">Commercial Incoterms</span>
                  <span className="text-[#dcb782] font-semibold">{turmericProduct.trade.supportedIncoterms.value.join(' · ')}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4">
                <Box className="h-5 w-5 text-[#dcb782]" />
                <h3 className="text-base font-semibold text-white">Packaging Solutions</h3>
              </div>
              <div className="flex flex-col gap-2.5 text-xs">
                <div>
                  <span className="text-[#ab8558] font-mono uppercase block text-[10px]">Bulk Export Packaging</span>
                  <span className="text-white font-medium">25kg / 50kg Multi-Wall Paper or PP Woven Bags</span>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <span className="text-[#ab8558] font-mono uppercase block text-[10px]">Containerization</span>
                  <span className="text-white font-medium">Palletized LCL or 20ft/40ft FCL container loads</span>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <span className="text-[#ab8558] font-mono uppercase block text-[10px]">Private Labeling</span>
                  <span className="text-[#dcb782] font-semibold">Available for qualified retail brands</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-5 w-5 text-[#dcb782]" />
                <h3 className="text-base font-semibold text-white">Lead Time & Stability</h3>
              </div>
              <div className="flex flex-col gap-2.5 text-xs">
                <div>
                  <span className="text-[#ab8558] font-mono uppercase block text-[10px]">Quotation Lead Time</span>
                  <span className="text-white font-medium">{turmericProduct.trade.leadTimeDescription.value}</span>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <span className="text-[#ab8558] font-mono uppercase block text-[10px]">Optimum Storage</span>
                  <span className="text-white font-medium">Cool, dry, dark environment below 25°C</span>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <span className="text-[#ab8558] font-mono uppercase block text-[10px]">Export Clearances</span>
                  <span className="text-[#dcb782] font-semibold">Phytosanitary & FSSAI Export Certificate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Pathway */}
        <VerificationPathway
          originText={turmericProduct.trade.origin.value}
          verification={turmericProduct.verification}
          categoryName="Turmeric"
        />

        {/* How to Buy Sourcing Flow */}
        <HowToBuyModule productSlug="turmeric" />

        {/* RFQ Bottom Banner */}
        <section className="rounded-3xl bg-gradient-to-tr from-[#141413] to-[#252320]/60 border border-[#dcb782]/20 p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-5">
            <span className="text-[10px] font-mono tracking-widest text-[#dcb782] uppercase font-bold">
              COMMERCIAL PROCUREMENT
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-white font-bold tracking-tight">
              Ready to Structure Your Turmeric Sourcing?
            </h2>
            <p className="text-sm text-[#D5C8B7] font-light leading-relaxed">
              Connect with the AURA Trade Desk to discuss required curcumin thresholds, milling parameters, packaging formats, and delivery terms.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <button
                type="button"
                onClick={() => onNavigate('request-quote?product=turmeric')}
                className="bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold rounded-xl px-8 py-4 text-xs tracking-wider uppercase transition-all shadow-xl hover:from-white hover:to-[#dcb782] cursor-pointer"
              >
                Request Commercial RFQ
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="border border-white/10 hover:border-white text-white font-body font-bold rounded-xl px-8 py-4 text-xs tracking-wider uppercase transition-all hover:bg-white/5 cursor-pointer"
              >
                General Inquiry
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
