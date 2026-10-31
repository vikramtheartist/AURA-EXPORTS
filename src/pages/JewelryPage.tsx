import { Link } from 'react-router-dom';
import { Sparkles, ArrowUpRight, ShieldCheck, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/procurement/Breadcrumbs';
import HowToBuyModule from '../components/procurement/HowToBuyModule';
import { jewelryProductFamilies, productCategories } from '../data/products';
import jewelryImg from '../assets/images/product_jewelry_1780423528983.png';

export default function JewelryPage() {
  const category = productCategories.find((c) => c.slug === 'jewelry')!;

  return (
    <div className="w-full pt-28 pb-20" id="jewelry-category-page">
      <SEOHead pageKey="jewelry" />

      {/* Semantic Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Contemporary Fashion Jewelry', href: '/products/jewelry' },
        ]}
      />

      {/* Section A — Category Hero */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-16">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-4 py-1.5 mb-4">
          <Sparkles className="h-3.5 w-3.5 text-[#dcb782]" />
          <span className="text-xs font-mono text-[#dcb782] tracking-wider uppercase font-semibold">
            DESIGN-LED SOURCING VERTICAL
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1.05] font-normal mb-4">
          Contemporary Fashion Jewelry
        </h1>
        <p className="text-xl md:text-2xl text-[#dcb782] font-heading italic font-light mb-4">
          Design-led Indian sourcing for global brands and private labels.
        </p>
        <p className="text-[#D5C8B7] font-body text-base md:text-lg max-w-3xl font-light leading-relaxed mb-8">
          Precision handcrafted jewelry combining modern geometric silhouettes with South Indian foundry techniques, engineered across selected base metals, durable PVD coatings, and collection-level private label packaging configurations.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#jewelry-families"
            className="bg-[#dcb782] text-black hover:bg-white transition-all font-body font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl shadow-lg flex items-center gap-2"
          >
            <span>Explore Collections</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/request-quote?category=jewelry"
            className="border border-white/10 hover:border-[#dcb782]/40 text-white font-body font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl hover:bg-white/5 transition-all"
          >
            Request Jewelry Sourcing Discussion
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Featured Visual Banner */}
        <div className="rounded-3xl overflow-hidden border border-white/10 aspect-[21/9] mb-16 relative shadow-2xl">
          <img
            src={jewelryImg}
            alt="AURA Contemporary Fashion Jewelry Sourcing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-xl">
            <span className="text-[10px] font-mono tracking-widest text-[#dcb782] uppercase font-bold block mb-1">
              FOUNDRY PRECISION & MODERN SILHOUETTES
            </span>
            <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
              Vetted Metallurgy for International Retail
            </h2>
          </div>
        </div>

        {/* Section B — Product Families (Section 13) */}
        <section id="jewelry-families" className="mb-20">
          <div className="flex flex-col gap-2 mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono tracking-widest text-[#ab8558] uppercase font-bold">
              PRODUCT ARCHITECTURE
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-white font-medium">
              Sourcing Categories & Metallurgies
            </h2>
            <p className="text-xs md:text-sm text-[#dfd1b9]/70 font-light">
              Structured material families built to accommodate buyer design specifications, plating thickness, and target price points.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jewelryProductFamilies.map((fam) => (
              <article
                key={fam.id}
                className="rounded-3xl border border-white/10 bg-[#121211] p-8 flex flex-col justify-between hover:border-[#dcb782]/30 transition-all shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                    <span className="text-[10px] font-mono tracking-widest text-[#dcb782] uppercase font-bold">
                      {fam.baseMaterials}
                    </span>
                    <span className="text-[10px] font-mono text-[#dfd1b9]/50 uppercase">
                      Private Label Ready
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading text-white font-medium mb-3">
                    {fam.name}
                  </h3>

                  <p className="text-xs text-[#dfd1b9]/75 font-light leading-relaxed mb-6">
                    {fam.description}
                  </p>

                  <div className="flex flex-col gap-3 py-4 border-t border-white/5">
                    <div>
                      <span className="text-[10px] font-mono text-[#ab8558] uppercase block">
                        Surface Plating & Finish
                      </span>
                      <span className="text-xs text-white font-medium">{fam.finishes}</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-[#ab8558] uppercase block">
                        Target Applications
                      </span>
                      <span className="text-xs text-[#dfd1b9]/80 font-light">
                        {fam.applications.join(' · ')}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-[#ab8558] uppercase block">
                        Customization
                      </span>
                      <span className="text-xs text-[#dfd1b9]/80 font-light">{fam.customization}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                  <Link
                    to={`/request-quote?product=jewelry&form=${encodeURIComponent(fam.name)}`}
                    className="flex-1 bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold text-xs tracking-wider uppercase py-3 rounded-xl flex items-center justify-center gap-2 hover:from-white hover:to-[#dcb782] transition-all shadow-lg"
                  >
                    <span>Request Production Quote</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="px-4 py-3 rounded-xl border border-white/10 hover:border-white text-white text-xs font-mono uppercase tracking-wider text-center transition-all"
                  >
                    Discuss Design
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section C — Jewelry Procurement Lens (Section 14) */}
        <section className="mb-20 rounded-3xl border border-white/10 bg-[#141413] p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col gap-3 mb-8">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-3 py-1 w-max">
              <FileText className="h-3 w-3 text-[#dcb782]" />
              <span className="text-[10px] font-mono tracking-widest text-[#dcb782] uppercase font-bold">
                JEWELRY PROCUREMENT LENS
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
              What Sourcing Directors Can Specify
            </h2>
            <p className="text-sm text-[#dfd1b9]/75 font-light max-w-3xl leading-relaxed">
              We fabricate to brand tech packs and sample specs. Every jewelry collection can be configured across:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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

          {/* Section 14 Compliance Notice */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs text-[#dfd1b9]/70 font-light">
            <ShieldCheck className="h-4 w-4 text-[#dcb782] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white font-semibold">Regulatory Compliance Note: </strong>
              Compliance requirements can be evaluated at SKU and destination level (including EU REACH nickel-release thresholds, California Proposition 65 lead limits, and custom lab testing).
            </div>
          </div>
        </section>

        {/* Commercial Parameters */}
        <section className="mb-20 rounded-3xl border border-white/10 bg-[#121211] p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-[10px] font-mono tracking-widest text-[#dcb782] uppercase font-bold">
              COMMERCIAL PARAMETERS
            </span>
            <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
              Commercial Trade & Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-[#ab8558] uppercase block mb-1">Production MOQ</span>
              <p className="text-sm text-white font-medium">Defined per design / production run.</p>
              <p className="text-xs text-[#dfd1b9]/60 font-light mt-1">
                Flexible batch configurations structured per design SKU and metal casting method.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-[#ab8558] uppercase block mb-1">Incoterms</span>
              <p className="text-sm text-[#dcb782] font-semibold">FOB · CIF · Air Cargo</p>
              <p className="text-xs text-[#dfd1b9]/60 font-light mt-1">
                Routed through Chennai International Airport (MAA) or designated seaport.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-[#ab8558] uppercase block mb-1">Sampling & Prototyping</span>
              <p className="text-sm text-white font-medium">Pre-production master samples available.</p>
              <p className="text-xs text-[#dfd1b9]/60 font-light mt-1">
                Samples arranged for qualified requirements. Courier charges apply.
              </p>
            </div>
          </div>
        </section>

        {/* How to Buy Sourcing Flow */}
        <HowToBuyModule categorySlug="jewelry" />

        {/* Section E — RFQ Module */}
        <section className="rounded-3xl bg-gradient-to-tr from-[#121211] to-[#1f1d1a] border border-[#dcb782]/20 p-8 md:p-12 text-center flex flex-col items-center gap-4">
          <span className="text-xs font-mono tracking-widest text-[#dcb782] uppercase font-bold">
            PRIVATE LABEL INTAKE
          </span>
          <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
            Have a Specific Jewelry Design or Capsule Line Requirement?
          </h2>
          <p className="text-sm text-[#dfd1b9]/75 font-light max-w-xl">
            Tell us what you need, your target volume, and your preferred metal alloy. Our trade desk will structure the technical and commercial quote.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              to="/request-quote?category=jewelry"
              className="bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold text-xs tracking-wider uppercase px-8 py-3.5 rounded-xl hover:from-white hover:to-[#dcb782] transition-all shadow-xl"
            >
              Request a Quote →
            </Link>
            <Link
              to="/contact"
              className="border border-white/10 hover:border-white text-white text-xs font-body font-bold tracking-wider uppercase px-6 py-3.5 rounded-xl hover:bg-white/5 transition-all"
            >
              Contact Jewelry Desk
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
