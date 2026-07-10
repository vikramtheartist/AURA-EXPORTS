import { motion } from 'motion/react';
import { ArrowUpRight, ChevronRight, Download, Eye, Shield, HelpCircle, ArrowLeft, Truck, Box, Calendar, Leaf, Coffee, Sparkles, Smile, ShieldAlert, MapPin, Lock, Snowflake } from 'lucide-react';
import craftsmanImg from '../assets/images/turmeric_craftsman_1780417424874.png';
import bannerImg from '../assets/images/turmeric_roots_banner_1780417444579.png';
import foodProcessingImg from '../assets/images/turmeric_food_processing_1_png_1780418493678.png';
import personalCareImg from '../assets/images/turmeric_personal_care_1_png_1780418510348.png';
import beveragesImg from '../assets/images/turmeric_beverages_1_png_1780418526725.png';
import nutraceuticalsImg from '../assets/images/turmeric_nutraceuticals_1_png_1780418540074.png';

interface TurmericDetailProps {
  onNavigate: (sectionId: string) => void;
}

export default function TurmericDetail({ onNavigate }: TurmericDetailProps) {
  // Specs data according to institutional table in screenshot
  const specifications = [
    { parameter: 'Curcumin Content', premium: 'Min 4.5% - 5.2%', standard: 'Min 3.0%', method: 'HPLC (ISO 5562)' },
    { parameter: 'Moisture Content', premium: 'Max 8%', standard: 'Max 12%', method: 'Vacuum Oven' },
    { parameter: 'Total Ash', premium: 'Max 6.5%', standard: 'Max 9.0%', method: 'Dry Ashing' },
    { parameter: 'Aflatoxin (B1, B2, G1, G2)', premium: 'Not Detected', standard: '< 5 ppb', method: 'LC-MS/MS' },
    { parameter: 'Volatile Oil', premium: 'Min 3.5%', standard: 'Min 2.0%', method: 'Distillation' },
  ];

  return (
    <div className="w-full bg-[#0d0d0c] text-[#fbfbeb] py-24" id="turmeric-root-container">
      {/* Back button and breadcrumb wrapped in aligned padding */}
      <div className="px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto mb-12 flex items-center justify-between" id="turmeric-breadcrumbs-bar">
          <button
            onClick={() => onNavigate('home')}
            className="group flex items-center gap-2 text-[#dfd1b9]/70 hover:text-white transition-colors font-body text-sm font-semibold cursor-pointer"
            id="turmeric-back-home"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Global Trade Home
          </button>
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#ab8558]/80 font-bold" id="turmeric-breadcrumb">
            <span>PRODUCTS</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">TURMERIC</span>
          </div>
        </div>
      </div>

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
            <source src="https://docs.google.com/uc?export=download&id=1yPreTAyn82jUWRJTjAJ8ts4Uaswc6eku" type="video/mp4" />
          </video>
          {/* Subtle overlay gradients that guarantee perfect readability while showcasing the video movement */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0c] via-[#0d0d0c]/60 to-transparent z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0c] via-[#0d0d0c]/20 to-transparent z-[1]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-[35vh] md:pt-[42vh] pb-16 md:pb-24 flex flex-col items-start text-left relative">
          <div className="absolute top-8 left-6 md:left-12 lg:left-24 w-12 h-12 border-t border-l border-[#dcb782]/20 pointer-events-none" />
          <div className="absolute bottom-8 left-6 md:left-12 lg:left-24 w-12 h-12 border-b border-l border-[#dcb782]/20 pointer-events-none" />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium tracking-tight leading-[0.95] mb-6 flex flex-col text-white"
          >
            Premium
            <span className="italic text-[#dcb782] font-normal mt-2">Turmeric</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#D5C8B7]/95 font-body text-base md:text-lg lg:text-[19px] font-light leading-relaxed max-w-2xl mb-12 drop-shadow-md"
          >
            Sourced from the historic confluence of the Cauvery and Bhavani rivers, our Erode-grown turmeric represents the zenith of South Indian agricultural pedigree.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black hover:from-[#fbf3db] hover:to-[#dcb782] font-body font-bold rounded-xl px-8 py-4.5 text-sm transition-all duration-300 shadow-xl cursor-pointer transform hover:scale-[1.03] flex items-center gap-2"
            >
              Request Custom Quote
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <a
              href="#institutional-data"
              className="border border-[#dfd1b9]/30 text-[#dfd1b9] hover:bg-white/5 hover:text-white font-body font-bold rounded-xl px-8 py-4.5 text-sm transition-all cursor-pointer backdrop-blur-md flex items-center gap-2 hover:border-[#dcb782]/40"
            >
              <Eye className="h-4 w-4" />
              View Lab Reports
            </a>
          </motion.div>
        </div>
      </section>

      {/* The remaining body sections wrapped in aligned padding to match the breadcrumbs */}
      <div className="px-4 md:px-12 lg:px-24">
        {/* Origin & Narrative Section */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-32" id="turmeric-origin">
        {/* Left column */}
        <div className="lg:col-span-6 flex flex-col text-left gap-6" id="turmeric-narrative-left">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono tracking-[0.25em] text-[#dcb782] uppercase font-bold">
              CONFLUENCE & VALUE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white font-semibold leading-tight">
              Origin & Narrative
            </h2>
          </div>

          <div className="w-16 h-[2px] bg-gradient-to-r from-[#dcb782] to-transparent mb-2" />

          <p className="text-[#D5C8B7] font-body text-base md:text-lg leading-relaxed font-light">
            Erode, the "Yellow City" of India, holds a unique microclimate that fosters a high curcumin concentration and a distinctively deep ochre hue. Our turmeric is harvested exclusively from GI-tagged farms that have practiced regenerative agriculture for generations.
          </p>

          <p className="text-[#D5C8B7]/80 font-body text-sm md:text-base leading-relaxed font-light">
            The process begins with traditional sun-drying on polished stone platforms, followed by state-of-the-art steam sterilization to ensure 100% purity without compromising the volatile oil integrity.
          </p>

          {/* Local Soil & Cycle Details */}
          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 mt-4" id="turmeric-metrics">
            <div className="flex flex-col gap-1.5" id="metric-soil">
              <span className="text-[10px] font-mono font-extrabold tracking-[0.2em] text-[#ab8558] uppercase">
                SOIL PROFILE
              </span>
              <span className="font-heading italic text-2xl text-white font-medium">
                Red Redosol Earth
              </span>
            </div>
            <div className="flex flex-col gap-1.5" id="metric-harvest">
              <span className="text-[10px] font-mono font-extrabold tracking-[0.2em] text-[#ab8558] uppercase">
                HARVEST CYCLE
              </span>
              <span className="font-heading italic text-2xl text-white font-medium">
                9-Month Maturity
              </span>
            </div>
          </div>
        </div>

        {/* Right column: Beautifully overlayed mockup */}
        <div className="lg:col-span-6 flex justify-center relative group" id="turmeric-narrative-right">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#dcb782]/10 to-transparent rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
          <div className="relative w-full max-w-md lg:max-w-none">
            <img
              src={craftsmanImg}
              alt="Quality Testing Turmeric"
              className="w-full h-auto aspect-[4/5] object-cover rounded-3xl border border-white/10 shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />
            {/* 99.8% purity accreditation pill mapped precisely from screenshot */}
            <div
              className="absolute -bottom-6 -left-4 z-20 liquid-glass rounded-2xl p-5 border border-[#dcb782]/30 shadow-2xl max-w-[180px] text-left"
              id="accreditation-pill"
            >
              <span className="block text-4xl font-heading font-bold text-[#dcb782] tracking-tight leading-none">
                99.8%
              </span>
              <span className="block text-[8px] font-mono font-extrabold tracking-widest text-[#dfd1b9] uppercase mt-2.5 leading-tight">
                PURITY RATING ACCREDITED
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Applications & Key Product Offerings */}
      <section className="max-w-7xl mx-auto mb-32 scrolls-margin-top" id="product-offerings">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-mono tracking-[0.3em] text-[#dcb782] uppercase font-bold" id="products-subtitle">
            PRODUCT CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white font-semibold tracking-tight" id="products-title">
            Industrial Applications & Key Product Offerings
          </h2>
          <div className="w-12 h-[2px] bg-[#dcb782] mx-auto mt-2" />
          <p className="text-[#D5C8B7]/80 font-body text-sm mt-4 font-light leading-relaxed">
            We supply premium Erode Turmeric extracts, powders, and customized formulations engineered to meet precise purity and curcumin specification limits across global industrial supply chains.
          </p>
        </div>

        {/* Sector Quicklinks */}
        <div className="flex flex-wrap justify-center gap-3 mb-16" id="sector-quick-links">
          {[
            { label: 'Food Processing', id: 'sector-food-processing' },
            { label: 'Personal Care', id: 'sector-personal-care' },
            { label: 'Beverages', id: 'sector-beverages' },
            { label: 'Nutraceuticals', id: 'sector-nutraceuticals' },
          ].map((sect) => (
            <a
              key={sect.id}
              href={`#${sect.id}`}
              className="px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase border border-white/10 hover:border-[#dcb782]/40 bg-black/40 hover:bg-[#dcb782]/10 transition-all text-[#D5C8B7] hover:text-white"
            >
              {sect.label}
            </a>
          ))}
        </div>

        {/* Detailed Verticals Showcase */}
        <div className="flex flex-col gap-24" id="verticals-wrapper">
          
          {/* Sector 1: Food Processing */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scrolls-margin-top" id="sector-food-processing">
            <div className="lg:col-span-6 flex flex-col text-left justify-center">
              <div className="border-l-2 border-[#dcb782] pl-4 mb-6">
                <h3 className="text-3xl md:text-4xl font-heading text-[#fbfbeb] font-semibold tracking-tight">
                  Food Processing
                </h3>
              </div>
              <p className="text-[#D5C8B7] font-body text-sm md:text-base leading-relaxed font-light mb-8">
                As the globally dominant sector by transaction volume, the international food processing industry is rapidly replacing synthetic dyes with clean-label plant derivatives. High-integrity Erode Turmeric provides industrial food corporations with thermal stability, uniform coloring power, and consistent flavor profiling essential for global manufacturing standards.
              </p>
              
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="font-heading text-lg text-white font-medium mb-3">1. Curry Blends & Spice Milling</h4>
                  <ul className="flex flex-col gap-2.5 pl-1">
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782] mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#D5C8B7]/90 leading-relaxed font-light">
                        <strong className="text-white font-semibold">Polished Fingers & Bulbs:</strong> Raw materials for bulk milling.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782] mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#D5C8B7]/90 leading-relaxed font-light">
                        <strong className="text-white font-semibold">Turmeric Powder:</strong> High/low curcumin processing bases.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading text-lg text-white font-medium mb-3">2. Natural Food Colorants</h4>
                  <ul className="flex flex-col gap-2.5 pl-1">
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782] mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#D5C8B7]/80 leading-relaxed font-light">
                        <strong className="text-[#dcb782] font-semibold">Turmeric Paste</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782] mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#D5C8B7]/80 leading-relaxed font-light">
                        <strong className="text-[#dcb782] font-semibold">Turmeric Oil</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782] mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#D5C8B7]/80 leading-relaxed font-light">
                        <strong className="text-[#fbfbeb] font-semibold">High-Purity Curcumin Powder</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#dcb782]/10 to-transparent rounded-2xl blur-xl opacity-40 group-hover:opacity-75 transition-opacity" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src={foodProcessingImg}
                  alt="AURA Food Processing Turmeric Range"
                  className="w-full h-auto aspect-[4/3] md:aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/90 backdrop-blur-md px-5 py-1.5 rounded-full border border-[#dcb782]/20 flex items-center justify-center gap-2 w-max">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782]" />
                  <span className="text-[9px] font-mono tracking-[0.2em] text-[#dcb782] uppercase font-bold text-center">
                    AURA: Purity in Processing
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782]" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-white/5 my-4" />

          {/* Sector 2: Personal Care */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scrolls-margin-top" id="sector-personal-care">
            <div className="lg:col-span-6 lg:order-2 flex flex-col text-left justify-center text-left">
              <div className="border-l-2 border-[#dcb782] pl-4 mb-6">
                <h3 className="text-3xl md:text-4xl font-heading text-[#fbfbeb] font-semibold tracking-tight">
                  Personal Care
                </h3>
              </div>
              <p className="text-[#D5C8B7] font-body text-sm md:text-base leading-relaxed font-light mb-8">
                Driven by the global "Clean Label" movement and Western demand for Ayurvedic bio-actives, high-assay Curcumin serves as a potent antioxidant, anti-inflammatory, and antimicrobial active—offering a verified, plant-based alternative to synthetic chemicals for skin brightening, barrier repair, and anti-aging.
              </p>
              
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="font-heading text-lg text-white font-medium mb-3 text-left">1. Cleansers & Wash Formats</h4>
                  <ul className="flex flex-col gap-2.5 pl-1">
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782] mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#D5C8B7]/85 leading-relaxed font-light">
                        <strong className="text-white font-semibold">Foaming Face Washes</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782] mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#D5C8B7]/85 leading-relaxed font-light">
                        <strong className="text-white font-semibold">Gel Cleansers:</strong> Deep-pore urban pollution defense
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782] mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#D5C8B7]/85 leading-relaxed font-light">
                        <strong className="text-white font-semibold">Bathing soaps</strong>
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading text-lg text-white font-medium mb-3 text-left">2. Leave-On Active Care & Treatments</h4>
                  <ul className="flex flex-col gap-2.5 pl-1">
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782] mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#D5C8B7]/80 leading-relaxed font-light">
                        <strong className="text-white font-semibold">Face & body Oils</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782] mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#D5C8B7]/80 leading-relaxed font-light">
                        <strong className="text-[#dcb782] font-semibold">Brightening Serums:</strong> High-assay Curcumin + Vitamin C.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782] mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#D5C8B7]/80 leading-relaxed font-light">
                        <strong className="text-white font-semibold">Root Scrubs</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782] mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#D5C8B7]/80 leading-relaxed font-light">
                        <strong className="text-white font-semibold">Clay Masks</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#dcb782]/10 to-transparent rounded-2xl blur-xl opacity-40 group-hover:opacity-75 transition-opacity" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src={personalCareImg}
                  alt="AURA Personal Care Skincare Turcumin Range"
                  className="w-full h-auto aspect-[4/3] md:aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/90 backdrop-blur-md px-5 py-1.5 rounded-full border border-[#dcb782]/20 flex items-center justify-center gap-2 w-max animate-none">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782]" />
                  <span className="text-[9px] font-mono tracking-[0.2em] text-[#dcb782] uppercase font-bold text-center">
                    AURA: Purity in Personal Care
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782]" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-white/5 my-4" />

          {/* Sector 3: Beverages */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scrolls-margin-top" id="sector-beverages">
            <div className="lg:col-span-6 flex flex-col text-left justify-center text-left">
              <div className="border-l-2 border-[#dcb782] pl-4 mb-6">
                <h3 className="text-3xl md:text-4xl font-heading text-[#fbfbeb] font-semibold tracking-tight text-left">
                  Beverages
                </h3>
              </div>
              <p className="text-[#D5C8B7] font-body text-sm md:text-base leading-relaxed font-light mb-8">
                Driven by the rapid expansion of premium wellness retail, functional beverages are a high-margin growth engine for global brands. High-assay Erode Turmeric and its soluble derivatives provide the exact flavor uniformity, stable liquid suspension, and high bio-availability required for premium manufacturing standards.
              </p>
              
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="font-heading text-lg text-white font-medium mb-3 text-left">1. Premium Herbal Teas & Infusions</h4>
                  <ul className="flex flex-col gap-2.5 pl-1">
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782] mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#D5C8B7]/85 leading-relaxed font-light">
                        Ready-to-Steep <strong className="text-white font-semibold">Tea Bags</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782] mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#D5C8B7]/85 leading-relaxed font-light">
                        Soluble Golden <strong className="text-[#dcb782] font-semibold">Milk Powders & Instant Latte</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782] mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#D5C8B7]/85 leading-relaxed font-light">
                        <strong className="text-white font-semibold">Water-soluble blends</strong>
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading text-lg text-white font-medium mb-3 text-left">2. Health Shots & Functional Drinks</h4>
                  <ul className="flex flex-col gap-2.5 pl-1">
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782] mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#D5C8B7]/80 leading-relaxed font-light">
                        <strong className="text-white font-semibold font-semibold">Cold-Press Juicing</strong> Bulbs & energy drink
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782] mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#D5C8B7]/80 leading-relaxed font-light">
                        <strong className="text-[#dcb782] font-semibold">Immunity Shot</strong> Concentrate Bases
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#dcb782]/10 to-transparent rounded-2xl blur-xl opacity-40 group-hover:opacity-75 transition-opacity" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src={beveragesImg}
                  alt="AURA Wellness Beverages Range"
                  className="w-full h-auto aspect-[4/3] md:aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/90 backdrop-blur-md px-5 py-1.5 rounded-full border border-[#dcb782]/20 flex items-center justify-center gap-2 w-max">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782]" />
                  <span className="text-[9px] font-mono tracking-[0.2em] text-[#dcb782] uppercase font-bold text-center">
                    AURA: Purity in Beverages
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782]" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-white/5 my-4" />

          {/* Sector 4: Nutraceuticals */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scrolls-margin-top" id="sector-nutraceuticals">
            <div className="lg:col-span-6 lg:order-2 flex flex-col text-left justify-center text-left">
              <div className="border-l-2 border-[#dcb782] pl-4 mb-6">
                <h3 className="text-3xl md:text-4xl font-heading text-[#fbfbeb] font-semibold tracking-tight text-left">
                  Nutraceuticals
                </h3>
              </div>
              <p className="text-[#D5C8B7] font-body text-sm md:text-base leading-relaxed font-light mb-8">
                As global demand for preventative health accelerates, high-assay Erode Curcumin serves as the clinical standard for immunity and anti-inflammatory manufacturing, providing the standardized purity and solubility required for sophisticated pharmaceutical formulations.
              </p>
              
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="font-heading text-lg text-white font-medium mb-3 text-left">1. Standardized Curcuminoids & Solubles</h4>
                  <ul className="flex flex-col gap-2.5 pl-1">
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782] mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#D5C8B7]/85 leading-relaxed font-light">
                        Premium <strong className="text-[#dcb782] font-semibold">capsules</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782] mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#D5C8B7]/85 leading-relaxed font-light">
                        <strong className="text-white font-semibold">Gummies</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#dcb782]/10 to-transparent rounded-2xl blur-xl opacity-40 group-hover:opacity-75 transition-opacity" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src={nutraceuticalsImg}
                  alt="AURA Nutraceuticals Supplements Range"
                  className="w-full h-auto aspect-[4/3] md:aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/90 backdrop-blur-md px-5 py-1.5 rounded-full border border-[#dcb782]/20 flex items-center justify-center gap-2 w-max">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782]" />
                  <span className="text-[9px] font-mono tracking-[0.2em] text-[#dcb782] uppercase font-bold text-center">
                    AURA: Precision in Nutraceuticals
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#dcb782]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Premium Quality Standard Cards Section (Mapped from Mockup image) */}
      <section className="max-w-7xl mx-auto mb-32 relative px-4 md:px-0" id="turmeric-quality-pillars">
        {/* Background ambient lighting representing green, blue, and gold */}
        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[350px] h-[350px] bg-emerald-950/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-950/25 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[350px] h-[350px] bg-amber-950/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3 relative z-10">
          <div className="mx-auto bg-white/5 backdrop-blur-md rounded-full px-4 py-1.5 border border-[#dcb782]/20 shadow-sm w-max mb-1">
            <span className="text-[#dcb782] font-mono text-[10px] tracking-widest uppercase font-bold">
              PRESERVED INTEGRITY SYSTEM
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white font-semibold tracking-tight">
            Superior Quality Preservation
          </h2>
          <div className="w-12 h-[2px] bg-[#dcb782] mx-auto mt-2" />
        </div>

        {/* 3-Column Luxury Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10" id="quality-pillars-grid">
          
          {/* Pillar 1: Finest Sources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="flex flex-col rounded-3xl border border-white/10 bg-[#121211]/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden group/pillar h-full"
            id="pillar-finest-sources"
          >
            {/* Upper Zone - Emerald Tinted Header */}
            <div className="px-8 py-10 bg-gradient-to-b from-[#1b2f15]/50 to-[#121211]/30 border-b border-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center">
              {/* Abstract decorative graphic */}
              <div className="absolute inset-0 bg-radial-gradient from-emerald-500/10 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between opacity-15 pointer-events-none">
                <div className="w-3 h-3 border-t-2 border-l-2 border-[#dcb782]" />
                <div className="w-3 h-3 border-t-2 border-r-2 border-[#dcb782]" />
              </div>

              <h3 className="text-[#ffffff] font-mono text-xs tracking-[0.25em] font-extrabold uppercase mb-2">
                ORIGINAL LINEAGE
              </h3>
              <span className="text-2xl font-heading font-medium tracking-tight text-[#dcb782] italic leading-tight">
                Finest Sources
              </span>
            </div>

            {/* Overlapping floating concentric Gold Circular Badge */}
            <div className="relative flex justify-center -mt-7 z-20">
              <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-[#ab8558] via-[#dcb782] to-[#ab8558] p-[1.5px] shadow-[0_8px_30px_rgba(220,183,130,0.3)] group-hover/pillar:scale-110 transition-transform duration-500">
                <div className="h-full w-full rounded-full bg-[#121211] flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-[#dcb782] group-hover/pillar:rotate-12 transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* Bottom Zone - Description */}
            <div className="p-8 pt-10 flex flex-col justify-between flex-1 text-center items-center">
              <p className="text-sm md:text-[14.5px] leading-relaxed text-[#D5C8B7]/90 font-body font-light max-w-xs">
                Choicest herbs sourced from the best origin farms across the world.
              </p>
              
              {/* Luxury Detail Border Footer */}
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#dcb782]/40 to-transparent mt-8" />
            </div>
          </motion.div>

          {/* Pillar 2: Aroma-Lock Packaging */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="flex flex-col rounded-3xl border border-white/10 bg-[#121211]/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden group/pillar h-full"
            id="pillar-aroma-lock"
          >
            {/* Upper Zone - Sapphire/Teal Tinted Header */}
            <div className="px-8 py-10 bg-gradient-to-b from-[#142932]/50 to-[#121211]/30 border-b border-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center">
              <div className="absolute inset-0 bg-radial-gradient from-blue-500/10 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between opacity-15 pointer-events-none">
                <div className="w-3 h-3 border-t-2 border-l-2 border-[#dcb782]" />
                <div className="w-3 h-3 border-t-2 border-r-2 border-[#dcb782]" />
              </div>

              <h3 className="text-[#ffffff] font-mono text-xs tracking-[0.25em] font-extrabold uppercase mb-2">
                OPTIMIZED KEEPING
              </h3>
              <span className="text-2xl font-heading font-medium tracking-tight text-[#dcb782] italic leading-tight">
                Aroma-Lock Packaging
              </span>
            </div>

            {/* Overlapping floating concentric Gold Circular Badge */}
            <div className="relative flex justify-center -mt-7 z-20">
              <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-[#ab8558] via-[#dcb782] to-[#ab8558] p-[1.5px] shadow-[0_8px_30px_rgba(220,183,130,0.3)] group-hover/pillar:scale-110 transition-transform duration-500">
                <div className="h-full w-full rounded-full bg-[#121211] flex items-center justify-center">
                  <Lock className="h-5 w-5 text-[#dcb782] group-hover/pillar:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* Bottom Zone - Description */}
            <div className="p-8 pt-10 flex flex-col justify-between flex-1 text-center items-center">
              <p className="text-sm md:text-[14.5px] leading-relaxed text-[#D5C8B7]/90 font-body font-light max-w-xs">
                Flip cap for sprinkling or scooping herbs as needed.
              </p>
              
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#dcb782]/40 to-transparent mt-8" />
            </div>
          </motion.div>

          {/* Pillar 3: Innovative Processing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8 }}
            className="flex flex-col rounded-3xl border border-white/10 bg-[#121211]/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden group/pillar h-full"
            id="pillar-innovative-processing"
          >
            {/* Upper Zone - Amber Tinted Header */}
            <div className="px-8 py-10 bg-gradient-to-b from-[#2e2311]/40 to-[#121211]/30 border-b border-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center">
              <div className="absolute inset-0 bg-radial-gradient from-amber-550/10 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between opacity-15 pointer-events-none">
                <div className="w-3 h-3 border-t-2 border-l-2 border-[#dcb782]" />
                <div className="w-3 h-3 border-t-2 border-r-2 border-[#dcb782]" />
              </div>

              <h3 className="text-[#ffffff] font-mono text-xs tracking-[0.25em] font-extrabold uppercase mb-2">
                ADVANCED BIO-RETAIN
              </h3>
              <span className="text-2xl font-heading font-medium tracking-tight text-[#dcb782] italic leading-tight">
                Innovative Processing
              </span>
            </div>

            {/* Overlapping floating concentric Gold Circular Badge */}
            <div className="relative flex justify-center -mt-7 z-20">
              <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-[#ab8558] via-[#dcb782] to-[#ab8558] p-[1.5px] shadow-[0_8px_30px_rgba(220,183,130,0.3)] group-hover/pillar:scale-110 transition-transform duration-500">
                <div className="h-full w-full rounded-full bg-[#121211] flex items-center justify-center">
                  <Snowflake className="h-5.5 w-5.5 text-[#dcb782] group-hover/pillar:rotate-[45deg] transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* Bottom Zone - Description */}
            <div className="p-8 pt-10 flex flex-col justify-between flex-1 text-center items-center">
              <p className="text-sm md:text-[14.5px] leading-relaxed text-[#D5C8B7]/90 font-body font-light max-w-xs">
                Freeze dried spices to preserve the natural essential oils & locks in the aroma and flavour.
              </p>
              
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#dcb782]/40 to-transparent mt-8" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Specifications & Institutional Quality Data Table */}
      <section className="max-w-7xl mx-auto mb-32 scrolls-margin-top" id="institutional-data">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-mono tracking-[0.3em] text-[#dcb782] uppercase font-bold" id="specs-subtitle">
            TECHNICAL SPECIFICATIONS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white font-semibold tracking-tight" id="specs-title">
            Institutional Quality Data
          </h2>
          <div className="w-12 h-[2px] bg-[#dcb782] mx-auto mt-2" />
        </div>

        {/* Custom Data Grid Table matching screenshot aesthetics */}
        <div className="rounded-2xl border border-white/5 bg-[#181817]/60 overflow-hidden shadow-2xl" id="specs-table-container">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left" id="specs-table">
              <thead>
                <tr className="border-b border-[#dcb782]/15 bg-[#10100f]/80 text-[#ab8558]">
                  <th className="py-6 px-6 md:px-10 text-xs font-mono font-extrabold tracking-widest uppercase">
                    Parameter
                  </th>
                  <th className="py-6 px-6 text-xs font-mono font-extrabold tracking-widest uppercase text-[#dcb782]">
                    Aura Premium Grade
                  </th>
                  <th className="py-6 px-6 text-xs font-mono font-extrabold tracking-widest uppercase opacity-70">
                    Industry Standard
                  </th>
                  <th className="py-6 px-6 md:px-10 text-xs font-mono font-extrabold tracking-widest uppercase opacity-80">
                    Test Method
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {specifications.map((spec, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-5 px-6 md:px-10 font-body text-sm font-extrabold text-white">
                      {spec.parameter}
                    </td>
                    <td className="py-5 px-6 font-body text-sm font-semibold text-[#dcb782]">
                      {spec.premium}
                    </td>
                    <td className="py-5 px-6 font-body text-sm text-[#D5C8B7]/70">
                      {spec.standard}
                    </td>
                    <td className="py-5 px-6 md:px-10 font-mono text-xs text-[#D5C8B7]/50">
                      {spec.method}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quality & Testing Pipeline Grid Section */}
      <section className="max-w-7xl mx-auto mb-32" id="turmeric-pipeline">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Multi-Stage Testing */}
          <div
            className="rounded-2xl bg-[#141413] border border-white/5 p-8 text-left hover:border-[#dcb782]/20 transition-all group flex flex-col justify-between"
            id="pipeline-card-1"
          >
            <div className="flex flex-col gap-4">
              <div className="h-10 w-10 rounded-xl bg-black/40 border border-[#dcb782]/15 flex items-center justify-center">
                <Shield className="h-5 w-5 text-[#dcb782]" />
              </div>
              <h3 className="text-xl font-body font-bold text-white group-hover:text-[#dcb782] transition-colors">
                Multi-Stage Lab Testing Pipeline
              </h3>
              <p className="text-sm font-body font-light text-[#D5C8B7]/80 leading-relaxed">
                Our proprietary testing protocol involves three distinct layers of validation: on-site farm batch testing, pre-shipment third-party audit (SGS/Eurofins), and final arrival certification. Each consignment is issued a unique QR-linked blockchain certificate of authenticity.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-8 pt-5 border-t border-white/5">
              <div className="flex gap-1.5 text-[8.5px] font-mono tracking-widest text-[#dcb782] font-semibold border border-[#dcb782]/20 rounded-md px-1.5 py-0.5">
                <span>ISO</span>
                <span className="opacity-40">|</span>
                <span>FDA</span>
                <span className="opacity-40">|</span>
                <span>GMP</span>
              </div>
              <span className="text-[10px] font-body text-[#D5C8B7]/50 font-bold">
                Global Compliance Standards
              </span>
            </div>
          </div>

          {/* Card 2: Optical Sorting */}
          <div
            className="rounded-2xl bg-[#141413] border border-white/5 p-8 text-left hover:border-[#dcb782]/20 transition-all group flex flex-col justify-between"
            id="pipeline-card-2"
          >
            <div className="flex flex-col gap-4">
              <div className="h-10 w-10 rounded-xl bg-black/40 border border-[#dcb782]/15 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-[#dcb782]"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-body font-bold text-white group-hover:text-[#dcb782] transition-colors">
                Optical Sorting
              </h3>
              <p className="text-sm font-body font-light text-[#D5C8B7]/80 leading-relaxed">
                AI-driven laser sorting removes 99.9% of foreign matter, grade mismatches, and color defects, guaranteeing unmatched consistency across every individual consignment pile.
              </p>
            </div>
            <div className="mt-8 pt-5 border-t border-white/5 text-[10px] font-mono tracking-wider text-[#ab8558]/80 font-bold uppercase">
              REDUCED CONTAMINATION RISK &lt; 0.01%
            </div>
          </div>

          {/* Card 3: Automated Monitoring & Non-GMO Label Combined (2 Cards stacked mock grid from layout) */}
          <div className="flex flex-col gap-6" id="pipeline-right-group">
            {/* Mini section 1 */}
            <div
              className="rounded-2xl bg-[#141413] border border-white/5 p-6 text-left hover:border-[#dcb782]/20 transition-all flex items-start gap-4"
              id="pipeline-card-3a"
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-black/40 border border-[#dcb782]/15 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-[#dcb782]"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] font-mono tracking-widest text-[#ab8558] uppercase font-bold">
                  TRACEABILITY
                </span>
                <h4 className="text-base font-body font-bold text-white">
                  Batch-Level Monitoring & Tech Logging
                </h4>
                <p className="text-xs font-body font-light text-[#D5C8B7]/70 leading-relaxed">
                  Real-time quality parameter logging across our production partners inside Chennai and Erode labs.
                </p>
              </div>
            </div>

            {/* Mini section 2 */}
            <div
              className="rounded-2xl bg-[#141413] border border-white/5 p-6 text-left hover:border-[#dcb782]/20 transition-all flex items-start gap-4"
              id="pipeline-card-3b"
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-black/40 border border-[#dcb782]/15 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-[#dcb782]"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 11 2 2 4-4" />
                </svg>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] font-mono tracking-widest text-[#ab8558] uppercase font-bold">
                  NON-GMO & ORGANIC
                </span>
                <h4 className="text-base font-body font-bold text-white">
                  Zero Fillers, Metanil & Adulterants
                </h4>
                <p className="text-xs font-body font-light text-[#D5C8B7]/70 leading-relaxed">
                  Strict adherence to USDA Organic and EU MRL (Maximum Residue Level) standards. Zero synthetic additives, fillers, or artificial coloring agents.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Logistics, Packaging & Storage Grid Section mapping layout 5 from description */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-16 mb-32" id="turmeric-logistics">
        
        {/* Logistics column */}
        <div className="flex flex-col items-start text-left gap-5" id="logistics-col-1">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[#dcb782]/10 border border-[#dcb782]/20 flex items-center justify-center">
              <Truck className="h-4.5 w-4.5 text-[#dcb782]" />
            </div>
            <h3 className="font-body text-lg font-bold text-white tracking-wide">
              Logistics & MOQ
            </h3>
          </div>
          <div className="w-full flex flex-col gap-3.5 bg-black/30 border border-white/5 rounded-xl p-5" id="logistics-box-1">
            <div className="flex items-center justify-between text-sm py-1 border-b border-white/5 last:border-b-0">
              <span className="font-body text-[#D5C8B7]/65">Minimum Order</span>
              <span className="font-body font-bold text-white">1 Metric Ton</span>
            </div>
            <div className="flex items-center justify-between text-sm py-1 border-b border-white/5 last:border-b-0">
              <span className="font-body text-[#D5C8B7]/65">Loading Port</span>
              <span className="font-body font-bold text-white">Chennai / Mundra</span>
            </div>
            <div className="flex items-center justify-between text-sm py-1 last:border-b-0">
              <span className="font-body text-[#D5C8B7]/65">Incoterms</span>
              <span className="font-body font-bold text-[#dcb782]">FOB, CIF, DAP</span>
            </div>
          </div>
        </div>

        {/* Packaging column */}
        <div className="flex flex-col items-start text-left gap-5" id="logistics-col-2">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[#dcb782]/10 border border-[#dcb782]/20 flex items-center justify-center">
              <Box className="h-4.5 w-4.5 text-[#dcb782]" />
            </div>
            <h3 className="font-body text-lg font-bold text-white tracking-wide">
              Packaging Solutions
            </h3>
          </div>
          <div className="w-full flex flex-col gap-3.5 bg-black/30 border border-white/5 rounded-xl p-5" id="logistics-box-2">
            <div className="flex items-center justify-between text-sm py-1 border-b border-white/5 last:border-b-0">
              <span className="font-body text-[#D5C8B7]/65">Bulk Bags</span>
              <span className="font-body font-bold text-white">25kg / 50kg Jute Bag / PP</span>
            </div>
            <div className="flex items-center justify-between text-sm py-1 border-b border-white/5 last:border-b-0">
              <span className="font-body text-[#D5C8B7]/65">Retail Range</span>
              <span className="font-body font-bold text-white">100g - 1kg Pouch Standup</span>
            </div>
            <div className="flex items-center justify-between text-sm py-1 last:border-b-0">
              <span className="font-body text-[#D5C8B7]/65">White Labeling</span>
              <span className="font-body font-bold text-white text-[#dcb782]">Fully Custom Available</span>
            </div>
          </div>
        </div>

        {/* Storage column */}
        <div className="flex flex-col items-start text-left gap-5" id="logistics-col-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[#dcb782]/10 border border-[#dcb782]/20 flex items-center justify-center">
              <Calendar className="h-4.5 w-4.5 text-[#dcb782]" />
            </div>
            <h3 className="font-body text-lg font-bold text-white tracking-wide">
              Storage & Shelf Life
            </h3>
          </div>
          <div className="w-full flex flex-col gap-3.5 bg-black/30 border border-white/5 rounded-xl p-5" id="logistics-box-3">
            <div className="flex items-center justify-between text-sm py-1 border-b border-white/5 last:border-b-0">
              <span className="font-body text-[#D5C8B7]/65">Average Shelf Life</span>
              <span className="font-body font-bold text-white">24 Months</span>
            </div>
            <div className="flex items-center justify-between text-sm py-1 border-b border-white/5 last:border-b-0">
              <span className="font-body text-[#D5C8B7]/65">Optimum Condition</span>
              <span className="font-body font-bold text-white">Cool, dry & dark store</span>
            </div>
            <div className="flex items-center justify-between text-sm py-1 last:border-b-0">
              <span className="font-body text-[#D5C8B7]/65">Certification</span>
              <span className="font-body font-bold text-[#dcb782]">Phytosanitary Cert.</span>
            </div>
          </div>
        </div>

      </section>

      {/* Banner Bottom CTA matching requested image card look */}
      <section className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-tr from-[#141413] to-[#252320]/60 border border-[#dcb782]/10 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl" id="turmeric-footer-cta">
        <div className="absolute right-[-10%] bottom-[-20%] w-[350px] h-[350px] bg-[#dcb782]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-none font-bold">
            Elevate Your Supply Chain <br /> with Aura Global.
          </h2>
          <p className="text-[#D5C8B7] font-body text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-xl mb-6">
            Connect with our trade experts to discuss volume pricing, custom blending, or specific technical requirements for your target market.
          </p>
          <div className="flex flex-wrap justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black hover:from-[#fbf3db] hover:to-[#dcb782] font-body font-extrabold rounded-xl px-8 py-4.5 text-xs tracking-wider uppercase transition-all shadow-lg cursor-pointer transform hover:scale-[1.03]"
            >
              Enquire For Bulk Quote
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="border border-[#dfd1b9]/20 hover:border-white text-white hover:bg-white/5 font-body font-extrabold rounded-xl px-8 py-4.5 text-xs tracking-wider uppercase transition-all cursor-pointer backdrop-blur-sm"
            >
              Schedule A Discovery Call
            </button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
