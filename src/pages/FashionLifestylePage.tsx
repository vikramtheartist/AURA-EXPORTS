import React, { useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  Search, 
  Crown, 
  Gem, 
  Compass, 
  Sliders, 
  FileText, 
  Truck, 
  Globe, 
  Send,
  MapPin,
  X
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/procurement/Breadcrumbs';
import FashionProductCard from '../components/fashion/FashionProductCard';
import FashionSpecDrawer from '../components/fashion/FashionSpecDrawer';
import InstitutionalRFQModal from '../components/agro/InstitutionalRFQModal';
import FloatingQuickContact from '../components/agro/FloatingQuickContact';
import { institutionalFashionProducts, FashionProductSpec } from '../data/institutionalFashionCatalog';
import heroImg from '../assets/images/fashion_lifestyle_hero.jpg';
import kundanImg from '../assets/images/jewelry_kundan.jpg';
import { submitRFQ } from '../services/rfqService';
import { trackContactEvent } from '../utils/analytics';

export default function FashionLifestylePage() {
  // Drawer & Modal States
  const [selectedProductForDrawer, setSelectedProductForDrawer] = useState<FashionProductSpec | null>(null);
  const [selectedProductForRFQ, setSelectedProductForRFQ] = useState<FashionProductSpec | null>(null);
  const [rfqInitialMode, setRfqInitialMode] = useState<'quotation' | 'sample'>('quotation');

  // Filter & Search States
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected Origin Region for Sourcing Section
  const [selectedOriginId, setSelectedOriginId] = useState<string>('jaipur');

  // Final Enquiry Form State
  const [enquiryMode, setEnquiryMode] = useState<'quotation' | 'sample'>('quotation');
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    country: '',
    productOfInterest: 'South Indian Temple & Heritage Jewellery',
    estimatedQuantity: '',
    preferredPackaging: 'Velvet Presentation Boxes',
    technicalRequirements: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const hasTriggeredFormStart = useRef(false);

  const handleFormInteraction = () => {
    if (!hasTriggeredFormStart.current) {
      hasTriggeredFormStart.current = true;
      trackContactEvent('enquiry_form_started', {
        productName: formData.productOfInterest,
        vertical: 'jewellery',
      });
    }
  };

  const filterTabs = [
    { id: 'all', label: 'All Collections', count: institutionalFashionProducts.length },
    { id: 'temple', label: 'Temple & Traditional', count: 1 },
    { id: 'kundan', label: 'Kundan & Meenakari', count: 1 },
    { id: 'contemporary', label: 'Contemporary CZ', count: 1 },
  ];

  const filteredProducts = useMemo(() => {
    return institutionalFashionProducts.filter((product) => {
      let matchesCategory = true;
      if (selectedCategory === 'temple') matchesCategory = product.category.includes('TEMPLE');
      else if (selectedCategory === 'kundan') matchesCategory = product.category.includes('KUNDAN');
      else if (selectedCategory === 'contemporary') matchesCategory = product.category.includes('CONTEMPORARY');

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        product.cardTitle.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.origin.displayOrigin.toLowerCase().includes(q) ||
        product.cardForms.some((f) => f.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const sourcingRegions = [
    {
      id: 'jaipur',
      region: 'Jaipur Atelier Hub',
      state: 'Rajasthan',
      craft: 'Jadau Foil Setting & Reverse Cloisonné Meenakari Enameling',
      products: 'Royal Jadau Kundan Bridal Suites, Polki Necklaces & Maang Tikka',
    },
    {
      id: 'chennai',
      region: 'Chennai & Coimbatore',
      state: 'Tamil Nadu',
      craft: 'Traditional Temple Architecture Metallurgy, Antique 22K Micro-Gold Plating',
      products: 'South Indian Temple Harams, Kasu Malai, Kemp Jhumkas & Vaddanams',
    },
    {
      id: 'mumbai',
      region: 'Mumbai Design Studios',
      state: 'Maharashtra',
      craft: 'Precision Lost-Wax Investment Casting, Diamond-Cut AAA+ Cubic Zirconia',
      products: 'Minimalist Tennis Bracelets, Stackable Rings & Solitaire Chains',
    },
  ];

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);
    try {
      const payload = {
        productCategory: 'Fashion & Lifestyle Jewellery',
        productRequirement: `[${enquiryMode.toUpperCase()}] Product: ${formData.productOfInterest} | Packaging: ${formData.preferredPackaging} | Specs: ${formData.technicalRequirements || 'Export standard'}`,
        quantity: enquiryMode === 'sample' ? 'Sample Collection' : (formData.estimatedQuantity || '50 Pieces / Sets'),
        destinationCountry: formData.country,
        timeline: '1 Month',
        buyerName: formData.fullName,
        companyName: formData.companyName || 'Jewellery Retailer / Importer',
        businessEmail: formData.businessEmail,
        procurementType: 'International Jewellery Distributor',
        incoterm: 'FOB / Air Freight',
        additionalRequirements: formData.technicalRequirements,
      };

      const result = await submitRFQ(payload);
      if (result && result.success && result.referenceId) {
        setReferenceId(result.referenceId);
        setIsSuccess(true);
        trackContactEvent('enquiry_submitted', {
          productName: formData.productOfInterest,
          vertical: 'jewellery',
          referenceId: result.referenceId,
          mode: enquiryMode,
        });
      } else {
        setErrorMessage(result?.message || "We couldn't submit your enquiry right now. Your information has not been confirmed as received. Please try again or contact us directly at contact@auraexport.co.");
      }
    } catch (err: any) {
      setErrorMessage(
        err.message ||
        "We couldn't submit your enquiry right now. Your information has not been confirmed as received. Please try again or contact us directly at contact@auraexport.co."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full pt-28 pb-24 bg-[#0A0A0B] text-white" id="fashion-lifestyle-landing">
      <SEOHead pageKey="fashionLifestyle" />

      {/* Semantic Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Fashion & Lifestyle', href: '/products/fashion-lifestyle' },
        ]}
      />

      {/* =========================================================================
          SECTION 01 — HERO
          ========================================================================= */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20" id="fashion-hero">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#F5F2EC] tracking-tight leading-[1.06] font-normal">
              India&apos;s Craftsmanship.{' '}
              <span className="text-[#D4AF37] italic font-normal block mt-1">
                Reimagined for Global Markets.
              </span>
            </h1>

            <p className="text-[#A5A19A] font-body text-base md:text-lg leading-relaxed font-light max-w-2xl">
              Explore distinctive Indian jewellery and lifestyle products combining traditional craftsmanship, detailed finishing, and contemporary design for international retail and wholesale markets.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#fashion-catalogue-section"
                className="bg-[#E2BC86] hover:bg-[#d4a86a] text-[#0A0A0B] transition-all font-body font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-xl shadow-sm flex items-center gap-2.5 cursor-pointer hover:shadow-[0_8px_20px_rgba(226,188,134,0.25)]"
              >
                <span>Explore Jewellery Catalogue</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => {
                  setSelectedProductForRFQ(institutionalFashionProducts[0]);
                  setRfqInitialMode('quotation');
                }}
                className="border border-[#252527] hover:border-white/30 text-white hover:bg-white/5 transition-all font-body font-bold text-xs tracking-wider uppercase px-7 py-4 rounded-xl flex items-center gap-2 cursor-pointer"
              >
                <span>Request a Quotation</span>
                <ArrowUpRight className="h-4 w-4 text-[#E2BC86]" />
              </button>
            </div>

            {/* Quick Sourcing Credentials */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1E1E22] mt-2">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase font-bold">Artisan Basins</span>
                <span className="text-sm font-semibold text-white mt-0.5">Jaipur, Chennai & Mumbai</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase font-bold">Craft Traditions</span>
                <span className="text-sm font-semibold text-white mt-0.5">Jadau, Meenakari & Temple</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase font-bold">Export Benchmark</span>
                <span className="text-sm font-semibold text-white mt-0.5">Anti-Tarnish / Lead-Safe</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Column */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-transparent rounded-[2.5rem] blur-2xl opacity-50 pointer-events-none" />
            <div className="relative rounded-[2.2rem] overflow-hidden border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.9)] aspect-[4/3] w-full bg-[#121211]">
              <img
                src={heroImg}
                alt="Aura Exports - Indian Artisanal Craft and Fashion Jewellery Assortment"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md bg-black/60 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#D4AF37] tracking-wider uppercase font-bold block">
                    B2B JEWELLERY EXPORT
                  </span>
                  <span className="text-xs text-white font-medium">
                    Temple Heritage · Jadau Kundan · Modern CZ
                  </span>
                </div>
                <ShieldCheck className="h-5 w-5 text-[#D4AF37] shrink-0" />
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* =========================================================================
          SECTION 02 — PRODUCT DISCOVERY CATALOGUE (Shared 3-Tile Architecture)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-28" id="fashion-catalogue-section">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#141416] border border-[#D4AF37]/25 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Gem className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.2em] uppercase font-bold">
              INSTITUTIONAL JEWELLERY CATALOGUE
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading text-[#F5F2EC] font-normal leading-tight">
            Indian Craft. Contemporary Expression.
          </h2>

          <p className="text-sm md:text-base text-[#A5A19A] font-light leading-relaxed mt-4 max-w-2xl">
            Discover distinctive Indian jewellery and lifestyle products, combining traditional craftsmanship, detailed finishing and contemporary design for international retail and wholesale markets.
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mt-6" />
        </div>

        {/* Filter Tabs & Real-Time Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#1E1E22]">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#E2BC86] text-[#0A0A0B] font-bold shadow-md'
                      : 'bg-[#141416] text-[#A5A19A] hover:text-[#F5F2EC] hover:bg-[#1E1E22] border border-[#1E1E22]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-black/20 text-[#0A0A0B]' : 'bg-white/10 text-white/60'}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#D4AF37]/70 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search jewellery, metal, stone..."
              className="w-full bg-[#141416] border border-[#1E1E22] focus:border-[#D4AF37] rounded-xl pl-9 pr-8 py-2.5 text-xs text-white placeholder-[#77736C] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#77736C] hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 3-Tile Responsive Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <FashionProductCard
              key={product.id}
              product={product}
              onViewSpecifications={(p) => setSelectedProductForDrawer(p)}
              onRequestQuotation={(p) => {
                setSelectedProductForRFQ(p);
                setRfqInitialMode('quotation');
              }}
            />
          ))}
        </div>

        {/* Custom Collection Inquiry Banner */}
        <div className="rounded-3xl border border-[#1E1E22] bg-[#111113] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="h-12 w-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-[#F5F2EC]">
                Looking for private-label fashion jewellery or custom artisan collections?
              </h4>
              <p className="text-xs text-[#A5A19A] font-light mt-1 max-w-2xl leading-relaxed">
                AURA arranges custom CAD lost-wax casting, bespoke plating finishes (22K, 18K, rhodium), branded velvet packaging, and barcode-ready export carton loading.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setSelectedProductForRFQ(institutionalFashionProducts[0]);
              setRfqInitialMode('quotation');
            }}
            className="px-6 py-3 rounded-xl border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-[#0A0A0B] text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer shadow-sm hover:shadow-[0_8px_20px_rgba(212,175,55,0.2)]"
          >
            Discuss Custom Designs →
          </button>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 — EDITORIAL FEATURE: JADAU & MEENAKARI ARTISTRY
          ========================================================================= */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20 relative bg-[#0A0A0B] border-t border-[#1E1E22]" id="featured-craft-section">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-b from-[#141416] to-[#111113] p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] relative border border-white/10 bg-[#0A0A0B] shadow-xl group">
                <img
                  src={kundanImg}
                  alt="Aura Exports - Jaipur Jadau Kundan and Meenakari Craft"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-[#E5C07B] flex items-center justify-between">
                  <span>Jaipur Craft Corridor, Rajasthan</span>
                  <span className="text-[10px] bg-black/60 px-2 py-0.5 rounded border border-white/10">Royal Heritage</span>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-3.5 py-1 mb-4">
                    <Crown className="h-3.5 w-3.5 text-[#D4AF37]" />
                    <span className="text-[10px] font-mono text-[#D4AF37] tracking-wider uppercase font-bold">
                      HERITAGE ARTISANAL SPOTLIGHT
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white font-normal leading-tight mb-4">
                    Royal Jadau & Meenakari.{' '}
                    <span className="text-[#E5C07B] italic font-normal block mt-1">
                      Handcrafted in Rajasthan.
                    </span>
                  </h2>

                  <p className="text-sm md:text-base text-[#A5A19A] font-light leading-relaxed mb-6">
                    Hand-set glass polki stones bedded into pure foil settings with reverse cloisonné vitreous enameling, completed with hand-twisted gold zari silk cords for international bridal and luxury diaspora boutiques.
                  </p>

                  <div className="mb-8">
                    <span className="text-[10px] font-mono text-[#77736C] uppercase tracking-wider block mb-2.5 font-semibold">
                      AVAILABLE BRIDAL FORMATS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {['Bridal Chokers', 'Chandbali Earrings', 'Maang Tikka', 'Matching Haathphool', 'Velvet Gift Suites'].map((form, idx) => (
                        <span key={idx} className="text-xs font-mono bg-[#141416] text-[#F5F2EC] border border-[#1E1E22] px-3 py-1.5 rounded-lg">
                          {form}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#1E1E22] flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProductForRFQ(institutionalFashionProducts[1]);
                      setRfqInitialMode('quotation');
                    }}
                    className="px-7 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#E5C07B] text-[#0A0A0B] font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request Bridal Quotation</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedProductForDrawer(institutionalFashionProducts[1])}
                    className="px-6 py-3 rounded-xl border border-[#1E1E22] hover:border-[#D4AF37]/50 text-[#F5F2EC] hover:bg-white/5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                  >
                    View Specifications
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 — REGIONAL ARTISAN SOURCING CLUSTERS
          ========================================================================= */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative bg-[#0A0A0B] border-t border-[#1E1E22]" id="fashion-sourcing-basins">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#141416] border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <Compass className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="text-[11px] font-mono text-[#D4AF37] tracking-[0.2em] uppercase font-bold">
                SECTION 04 · REGIONAL ARTISAN BASINS
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading text-[#F5F2EC] font-normal leading-tight">
              Rooted in India&apos;s Jewellery Corridors.
            </h2>

            <p className="text-sm md:text-base text-[#A5A19A] font-light leading-relaxed mt-4">
              Direct sourcing from verified artisan clusters across Rajasthan, Tamil Nadu, and Maharashtra.
            </p>

            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sourcingRegions.map((reg) => (
              <div
                key={reg.id}
                onClick={() => setSelectedOriginId(reg.id)}
                className={`p-7 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${
                  selectedOriginId === reg.id
                    ? 'bg-[#141416] border-[#D4AF37] shadow-xl'
                    : 'bg-[#111113] border-[#1E1E22] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-[#D4AF37]" />
                    <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase">{reg.state} · INDIA</span>
                  </div>
                  <h3 className="text-xl font-heading text-white font-medium mb-2">{reg.region}</h3>
                  <p className="text-xs text-[#A5A19A] font-light leading-relaxed mb-4">{reg.craft}</p>
                </div>

                <div className="pt-4 border-t border-[#1E1E22]">
                  <span className="text-[10px] font-mono text-[#77736C] uppercase block mb-1">Key Product Lines</span>
                  <span className="text-xs text-[#F5F2EC] font-medium">{reg.products}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05 — CAPABILITIES & QUALITY ASSURANCE
          ========================================================================= */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative bg-[#0A0A0B] border-t border-[#1E1E22]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#141416] border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="text-[11px] font-mono text-[#D4AF37] tracking-[0.2em] uppercase font-bold">
                SECTION 05 · SPECIFICATIONS & QUALITY
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading text-[#F5F2EC] font-normal leading-tight">
              Jewellery Standards for Global Retail.
            </h2>

            <p className="text-sm md:text-base text-[#A5A19A] font-light leading-relaxed mt-4">
              Export-ready finishes, certified non-toxic metallurgy, and luxury protective packaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                num: '01',
                title: 'High-Density Metallurgy',
                desc: 'Precision copper-brass and 925 sterling silver alloy castings engineered for crisp relief details and durable everyday wear.',
              },
              {
                num: '02',
                title: '22K & 24K Micro-Gold Plating',
                desc: 'Electro-plated micro-gold finishes protected with electro-lacquer anti-tarnish barriers tested to withstand maritime humidity.',
              },
              {
                num: '03',
                title: 'Chemical Safety Compliance',
                desc: 'Cadmium-safe, lead-compliant (<0.05%), and nickel-release compliant formulations adhering to EU REACH and US CPSIA norms.',
              },
              {
                num: '04',
                title: 'Bespoke Private-Label Packaging',
                desc: 'Velvet-lined gift boxes, anti-tarnish zip sleeves, scannable EAN/UPC barcode tags, and cushioned master shipping cartons.',
              },
            ].map((c) => (
              <div key={c.num} className="p-7 rounded-3xl bg-[#141416] border border-[#1E1E22] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#D4AF37] uppercase font-bold mb-2 block">CAPABILITY {c.num}</span>
                  <h3 className="text-xl font-heading text-white font-medium mb-3">{c.title}</h3>
                  <p className="text-xs text-[#A5A19A] font-light leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06 — HOW EXPORT SOURCING WORKS (3 Compact Steps)
          ========================================================================= */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative bg-[#0A0A0B] border-t border-[#1E1E22]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading text-[#F5F2EC] font-normal leading-tight">
              How Jewellery Export Works.
            </h2>
            <p className="text-sm md:text-base text-[#A5A19A] font-light leading-relaxed mt-4">
              A transparent 3-step procurement process designed for international boutiques and jewellery chains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'SHARE YOUR REQUIREMENTS', desc: 'Tell us your preferred styles, metal finishing, stone grade, target volume, and destination.' },
              { step: '02', title: 'CONFIRM SPECIFICATIONS & QUOTATION', desc: 'Review curated design samples, plating certifications, commercial proforma, and production lead times.' },
              { step: '03', title: 'COORDINATE ORDER & SHIPMENT', desc: 'Handcrafted production under strict AQL inspection, protective packaging, customs clearance, and air express transit.' },
            ].map((s) => (
              <div key={s.step} className="p-7 rounded-3xl bg-[#141416] border border-[#1E1E22] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#D4AF37] font-bold uppercase mb-4 block">STEP {s.step}</span>
                  <h3 className="text-lg font-heading text-white font-medium mb-2 leading-snug">{s.title}</h3>
                  <p className="text-xs text-[#A5A19A] font-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07 — ONE CONSOLIDATED FINAL ENQUIRY AREA
          ========================================================================= */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative bg-[#0A0A0B] border-t border-[#1E1E22]" id="fashion-final-enquiry">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-[#141416] border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <Globe className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="text-[11px] font-mono text-[#D4AF37] tracking-[0.2em] uppercase font-bold">
                COMMERCIAL JEWELLERY INTAKE
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading text-[#F5F2EC] font-normal leading-tight">
              Ready to Source from India?
            </h2>

            <p className="text-sm md:text-base text-[#A5A19A] font-light leading-relaxed mt-4">
              Share your product and procurement requirements. Our team can review sourcing availability, specifications, packaging and export options.
            </p>

            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mt-6" />
          </div>

          <div className="rounded-3xl border border-[#1E1E22] bg-[#141416] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            {isSuccess ? (
              <div className="py-12 px-4 text-center flex flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-heading text-white font-medium mb-3">Thank you for contacting AURA Exports.</h3>
                <p className="text-sm text-[#A5A19A] font-light max-w-md mb-6 leading-relaxed">
                  Your enquiry has been received successfully. Our team will review your requirements and get back to you.
                </p>
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-[#D4AF37] mb-6 max-w-sm w-full">
                  Enquiry Reference: <strong className="text-white">{referenceId}</strong>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3 rounded-xl border border-white/15 text-white hover:bg-white/5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#1E1E22] mb-8">
                  <div>
                    <h3 className="text-xl font-heading text-[#F5F2EC] font-medium">Commercial Jewellery Sourcing</h3>
                    <span className="text-xs text-[#A5A19A] font-light">Direct channel to AURA’s jewellery export desk in Chennai & Jaipur.</span>
                  </div>

                  <div className="flex items-center gap-2 bg-[#0A0A0B] p-1 rounded-xl border border-[#1E1E22]">
                    <button
                      type="button"
                      onClick={() => setEnquiryMode('quotation')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                        enquiryMode === 'quotation' ? 'bg-[#E2BC86] text-[#0A0A0B] font-bold shadow-sm' : 'text-[#A5A19A] hover:text-white'
                      }`}
                    >
                      Quotation
                    </button>
                    <button
                      type="button"
                      onClick={() => setEnquiryMode('sample')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                        enquiryMode === 'sample' ? 'bg-[#E2BC86] text-[#0A0A0B] font-bold shadow-sm' : 'text-[#A5A19A] hover:text-white'
                      }`}
                    >
                      Sample Collection
                    </button>
                  </div>
                </div>

                <form onSubmit={handleFinalSubmit} onFocus={handleFormInteraction} className="space-y-6">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                      <X className="h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Claire Bennett"
                        className="w-full bg-[#0A0A0B] border border-[#1E1E22] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">Company / Store Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Bennett Fine Jewels"
                        className="w-full bg-[#0A0A0B] border border-[#1E1E22] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">Business Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.businessEmail}
                        onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                        placeholder="buyer@bennettjewels.com"
                        className="w-full bg-[#0A0A0B] border border-[#1E1E22] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">Collection of Interest *</label>
                      <select
                        value={formData.productOfInterest}
                        onChange={(e) => setFormData({ ...formData, productOfInterest: e.target.value })}
                        className="w-full bg-[#0A0A0B] border border-[#1E1E22] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="South Indian Temple & Heritage Jewellery">South Indian Temple & Heritage Jewellery</option>
                        <option value="Royal Jadau Kundan & Meenakari Bridal Sets">Royal Jadau Kundan & Meenakari Bridal Sets</option>
                        <option value="Contemporary Minimalist & CZ Fashion Jewellery">Contemporary Minimalist & CZ Fashion Jewellery</option>
                        <option value="Custom Artisan Jewellery Line">Custom Private Label Development</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">Destination Country *</label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. United Kingdom, USA, UAE"
                        className="w-full bg-[#0A0A0B] border border-[#1E1E22] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">
                        {enquiryMode === 'sample' ? 'Sample Preference' : 'Estimated Volume (Pieces/Sets)'}
                      </label>
                      <input
                        type="text"
                        value={formData.estimatedQuantity}
                        onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                        placeholder={enquiryMode === 'sample' ? 'e.g. Curated sample kit of 5 designs' : 'e.g. 50 Sets or 200 Pieces'}
                        className="w-full bg-[#0A0A0B] border border-[#1E1E22] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">Design Preferences or Custom Specifications</label>
                    <textarea
                      rows={2}
                      value={formData.technicalRequirements}
                      onChange={(e) => setFormData({ ...formData, technicalRequirements: e.target.value })}
                      placeholder="Specify preferred plating (22K, 18K, rhodium), stone types, custom packaging tags, or trial assortment needs."
                      className="w-full bg-[#0A0A0B] border border-[#1E1E22] rounded-xl p-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#1E1E22]">
                    <div className="flex items-center gap-2 text-[11px] text-[#A5A19A]">
                      <ShieldCheck className="h-4 w-4 text-[#D4AF37] shrink-0" />
                      <span>Initiates commercial review. No public pricing or binding commitment.</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={() => {
                          setEnquiryMode('sample');
                          setSelectedProductForRFQ(institutionalFashionProducts[0]);
                          setRfqInitialMode('sample');
                        }}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-[#1E1E22] hover:border-[#D4AF37]/50 text-[#F5F2EC] text-xs font-mono uppercase tracking-wider transition-all"
                      >
                        Request a Sample Collection
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#E2BC86] text-[#0A0A0B] font-semibold text-xs tracking-wider uppercase hover:bg-[#d4a86a] transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                      >
                        {isSubmitting ? <span>Submitting...</span> : <span>Request an Export Quotation</span>}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Slide-over Specification Drawer */}
      <FashionSpecDrawer
        product={selectedProductForDrawer}
        isOpen={Boolean(selectedProductForDrawer)}
        onClose={() => setSelectedProductForDrawer(null)}
        onRequestQuotation={(product, mode) => {
          setSelectedProductForDrawer(null);
          setSelectedProductForRFQ(product);
          setRfqInitialMode(mode || 'quotation');
        }}
      />

      {/* Product-Specific RFQ Modal */}
      <InstitutionalRFQModal
        product={null}
        customTitle={selectedProductForRFQ?.name}
        customOrigin={selectedProductForRFQ?.origin.displayOrigin}
        customGrade={selectedProductForRFQ?.platingAndFinish}
        initialForm={selectedProductForRFQ?.availableLines[0]}
        isOpen={Boolean(selectedProductForRFQ)}
        onClose={() => setSelectedProductForRFQ(null)}
      />

      {/* Floating & Sticky Quick Contact Bar */}
      <FloatingQuickContact
        onOpenRFQ={() => {
          setSelectedProductForRFQ(institutionalFashionProducts[0]);
          setRfqInitialMode('quotation');
        }}
        productContext={{
          name: selectedProductForRFQ?.name || 'Indian Fashion Jewellery',
          origin: selectedProductForRFQ?.origin.displayOrigin || 'India',
        }}
        isModalOpen={Boolean(selectedProductForRFQ || selectedProductForDrawer)}
      />
    </div>
  );
}
