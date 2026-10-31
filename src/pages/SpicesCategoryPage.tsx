import { Link } from 'react-router-dom';
import { Leaf, ArrowUpRight, ShieldCheck, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/procurement/Breadcrumbs';
import VerificationPathway from '../components/procurement/VerificationPathway';
import HowToBuyModule from '../components/procurement/HowToBuyModule';
import { turmericProduct, productCategories } from '../data/products';
import turmericImg from '../assets/images/product_turmeric_1780423510096.png';

export default function SpicesCategoryPage() {
  const category = productCategories.find((c) => c.slug === 'spices')!;

  return (
    <div className="w-full pt-28 pb-20">
      <SEOHead pageKey="spices" />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Spices & Botanical Ingredients', href: '/products/spices' },
        ]}
      />

      {/* Section A — Category Hero */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-16">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-4 py-1.5 mb-4">
          <Leaf className="h-3.5 w-3.5 text-[#dcb782]" />
          <span className="text-xs font-mono text-[#dcb782] tracking-wider uppercase font-semibold">
            PRIMARY AGRICULTURAL & BOTANICAL STREAM
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1.05] font-normal mb-4">
          Spices & Botanical Ingredients
        </h1>
        <p className="text-xl md:text-2xl text-[#dcb782] font-heading italic font-light mb-4">
          Sourced for purity. Structured for global supply.
        </p>
        <p className="text-[#D5C8B7] font-body text-base md:text-lg max-w-3xl font-light leading-relaxed mb-8">
          A curated sourcing portfolio spanning turmeric, botanical ingredients and wellness-oriented products, with product-level specifications and export documentation available according to requirement.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#product-families"
            className="bg-[#dcb782] text-black hover:bg-white transition-all font-body font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl shadow-lg flex items-center gap-2"
          >
            <span>Explore Products</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/request-quote?category=spices"
            className="border border-white/10 hover:border-[#dcb782]/40 text-white font-body font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl hover:bg-white/5 transition-all"
          >
            Request Sourcing Discussion
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section B — Product Families (Reference: Turmeric + Formats) */}
        <section id="product-families" className="mb-20">
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-xs font-mono tracking-widest text-[#ab8558] uppercase font-bold">
              VERIFIED PRODUCT PORTFOLIO
            </span>
            <h2 className="text-3xl font-heading text-white font-medium">
              Featured Reference Implementation
            </h2>
            <p className="text-sm text-[#dfd1b9]/70 font-light max-w-2xl">
              Explore available product forms, botanical profiles, and procurement dimensions for our flagship spice portfolio.
            </p>
          </div>

          {/* Turmeric Master Card */}
          <article className="rounded-3xl border border-[#dcb782]/20 bg-[#121210] p-8 md:p-12 mb-12 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#dcb782] tracking-widest uppercase font-bold bg-[#dcb782]/10 px-3 py-1 rounded-full border border-[#dcb782]/20">
                    VERIFIED EXPORT SPECIFICATION
                  </span>
                  <span className="text-xs font-mono text-[#dfd1b9]/60">
                    ORIGIN: ERODE, TAMIL NADU, INDIA
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-heading text-white font-medium">
                  {turmericProduct.name}{' '}
                  <span className="italic text-[#dcb782]">({turmericProduct.botanicalOrMaterialName})</span>
                </h3>

                <p className="text-[#D5C8B7] font-body text-sm md:text-base leading-relaxed font-light">
                  {turmericProduct.description}
                </p>

                {/* 5 Product Formats Grid */}
                <div className="border-t border-white/10 pt-4">
                  <span className="text-[10px] font-mono text-[#ab8558] uppercase tracking-wider block mb-3 font-bold">
                    AVAILABLE PRODUCT FORMATS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {turmericProduct.variants.map((v) => (
                      <div
                        key={v.id}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">{v.name}</span>
                          <span className="text-[9px] font-mono text-[#dcb782] uppercase bg-white/5 px-2 py-0.5 rounded">
                            {v.availability === 'available' ? 'Available' : 'On Request'}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#dfd1b9]/60 font-light mt-1">
                          {v.primaryApplication}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    to="/products/spices/turmeric"
                    className="bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold rounded-xl px-6 py-3.5 text-xs tracking-wider uppercase hover:opacity-95 transition-all flex items-center gap-2 shadow-lg"
                  >
                    <span>View Technical Dossier & Specs</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  <Link
                    to="/request-quote?product=turmeric"
                    className="border border-white/10 hover:border-[#dcb782] text-white font-body font-bold rounded-xl px-6 py-3.5 text-xs tracking-wider uppercase hover:bg-white/5 transition-all"
                  >
                    Request Turmeric Quote
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 relative shadow-2xl">
                  <img
                    src={turmericImg}
                    alt="AURA Global Trade - Premium Indian Turmeric"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </article>

          {/* Active Sourcing Pipeline (Marked without unsupported numbers) */}
          <div className="flex flex-col gap-2 mb-6">
            <span className="text-xs font-mono tracking-widest text-[#ab8558] uppercase font-bold">
              EXPANDING BOTANICAL CLUSTERS
            </span>
            <h3 className="text-2xl font-heading text-white font-medium">
              Sourcing Pathways Under Active Development
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Tellicherry Black Pepper & Ginger',
                origin: 'Western Ghats & Kerala Estates',
                desc: 'Whole peppercorns and split dried ginger evaluated for piperine content and bulk grinding applications.',
              },
              {
                title: 'Standardized Botanical Oleoresins',
                origin: 'Audited Extraction Laboratories',
                desc: 'Concentrated liquid extracts and isolated botanical fractions for industrial flavoring and formulations.',
              },
              {
                title: 'Herbal & Wellness Ingredients',
                origin: 'Regional Cultivation Networks',
                desc: 'Specialty Ayurvedic herbs and dried botanical matter structured for clean-label international brand portfolios.',
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#dcb782] uppercase tracking-wider block mb-1">
                    {p.origin}
                  </span>
                  <h4 className="text-base font-semibold text-white mb-2">{p.title}</h4>
                  <p className="text-xs text-[#dfd1b9]/70 font-light leading-relaxed">{p.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#ab8558]">Available on Request</span>
                  <Link
                    to={`/request-quote?requirement=${encodeURIComponent(p.title)}`}
                    className="text-xs font-mono text-white hover:text-[#dcb782] flex items-center gap-1"
                  >
                    Inquire →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section C — Procurement Lens (What Buyers Can Define) */}
        <section className="mb-20 rounded-3xl border border-white/10 bg-[#141413] p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col gap-3 mb-8">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-3 py-1 w-max">
              <FileText className="h-3 w-3 text-[#dcb782]" />
              <span className="text-[10px] font-mono tracking-widest text-[#dcb782] uppercase font-bold">
                PROCUREMENT LENS
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
              {category.procurementLens.title}
            </h2>
            <p className="text-sm text-[#dfd1b9]/75 font-light max-w-3xl leading-relaxed">
              {category.procurementLens.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {category.procurementLens.definableFields.map((field, fIdx) => (
              <div
                key={fIdx}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3"
              >
                <CheckCircle2 className="h-4 w-4 text-[#dcb782] shrink-0 mt-0.5" />
                <span className="text-xs text-[#dfd1b9]/90 font-light leading-relaxed">{field}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section D — Verification Pathway */}
        <VerificationPathway
          originText={turmericProduct.trade.origin.value}
          verification={turmericProduct.verification}
          categoryName="Botanical Sourcing"
        />

        {/* How to Buy Sourcing Flow */}
        <HowToBuyModule categorySlug="spices" />

        {/* Section E — RFQ Module */}
        <section className="rounded-3xl bg-gradient-to-tr from-[#121211] to-[#1f1d1a] border border-[#dcb782]/20 p-8 md:p-12 text-center flex flex-col items-center gap-4">
          <span className="text-xs font-mono tracking-widest text-[#dcb782] uppercase font-bold">
            COMMERCIAL INTAKE
          </span>
          <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
            Have a Specific Spice or Botanical Sourcing Requirement?
          </h2>
          <p className="text-sm text-[#dfd1b9]/75 font-light max-w-xl">
            Tell us what you need, where it needs to go, and how you intend to source it. Our Chennai trade desk will structure the commercial pathway.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              to="/request-quote?category=spices"
              className="bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold text-xs tracking-wider uppercase px-8 py-3.5 rounded-xl hover:from-white hover:to-[#dcb782] transition-all shadow-xl"
            >
              Request a Quote →
            </Link>
            <Link
              to="/contact"
              className="border border-white/10 hover:border-white text-white text-xs font-body font-bold tracking-wider uppercase px-6 py-3.5 rounded-xl hover:bg-white/5 transition-all"
            >
              Contact Trade Desk
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
