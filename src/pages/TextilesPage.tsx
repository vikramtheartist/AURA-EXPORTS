import { Link } from 'react-router-dom';
import { Shirt, ArrowUpRight, ShieldCheck, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/procurement/Breadcrumbs';
import HowToBuyModule from '../components/procurement/HowToBuyModule';
import { textileProductFamilies, productCategories } from '../data/products';
import textilesImg from '../assets/images/product_textiles_1780423544568.png';

export default function TextilesPage() {
  const category = productCategories.find((c) => c.slug === 'textiles')!;

  return (
    <div className="w-full pt-28 pb-20" id="textiles-category-page">
      <SEOHead pageKey="textiles" />

      {/* Semantic Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Sustainable Textiles & Apparel', href: '/products/textiles' },
        ]}
      />

      {/* Section A — Category Hero */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-16">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-4 py-1.5 mb-4">
          <Shirt className="h-3.5 w-3.5 text-[#dcb782]" />
          <span className="text-xs font-mono text-[#dcb782] tracking-wider uppercase font-semibold">
            SUSTAINABLE FABRIC & APPAREL VERTICAL
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1.05] font-normal mb-4">
          Sustainable Textiles & Apparel
        </h1>
        <p className="text-xl md:text-2xl text-[#dcb782] font-heading italic font-light mb-4">
          Natural and recycled textile sourcing for modern brands.
        </p>
        <p className="text-[#D5C8B7] font-body text-base md:text-lg max-w-3xl font-light leading-relaxed mb-8">
          Eco-responsible textile sourcing connecting global brands and institutional buyers with South India’s premier spinning, weaving, and circular textile clusters across Coimbatore, Tirupur, and Karur.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#textile-families"
            className="bg-[#dcb782] text-black hover:bg-white transition-all font-body font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl shadow-lg flex items-center gap-2"
          >
            <span>Explore Fabric Families</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/request-quote?category=textiles"
            className="border border-white/10 hover:border-[#dcb782]/40 text-white font-body font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl hover:bg-white/5 transition-all"
          >
            Request Textile Sourcing Discussion
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Featured Visual Banner */}
        <div className="rounded-3xl overflow-hidden border border-white/10 aspect-[21/9] mb-16 relative shadow-2xl">
          <img
            src={textilesImg}
            alt="AURA Sustainable Textiles Sourcing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-xl">
            <span className="text-[10px] font-mono tracking-widest text-[#dcb782] uppercase font-bold block mb-1">
              REGENERATIVE WEAVES & CIRCULAR FIBERS
            </span>
            <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
              Vetted Mills for International Manufacturing
            </h2>
          </div>
        </div>

        {/* Section B — Product Families (Section 15) */}
        <section id="textile-families" className="mb-20">
          <div className="flex flex-col gap-2 mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono tracking-widest text-[#ab8558] uppercase font-bold">
              FIBER & FABRIC FAMILIES
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-white font-medium">
              Engineered Textile Streams
            </h2>
            <p className="text-xs md:text-sm text-[#dfd1b9]/70 font-light">
              Structured natural and recycled fabrics woven and knitted to international apparel, home textile, and technical standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {textileProductFamilies.map((fam) => (
              <article
                key={fam.id}
                className="rounded-3xl border border-white/10 bg-[#121211] p-6 flex flex-col justify-between hover:border-[#dcb782]/30 transition-all shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
                    <span className="text-[10px] font-mono tracking-widest text-[#dcb782] uppercase font-bold">
                      {fam.constructions}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading text-white font-medium mb-2">{fam.name}</h3>

                  <p className="text-xs text-[#dfd1b9]/75 font-light leading-relaxed mb-4">
                    {fam.description}
                  </p>

                  <div className="flex flex-col gap-2 py-3 border-t border-white/5 text-xs">
                    <div>
                      <span className="text-[10px] font-mono text-[#ab8558] uppercase block">
                        Fiber Profile
                      </span>
                      <span className="text-white font-medium text-[11px]">{fam.fiberProfile}</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-[#ab8558] uppercase block">
                        Primary Applications
                      </span>
                      <span className="text-[#dfd1b9]/80 font-light text-[11px]">
                        {fam.applications.join(' · ')}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-[#ab8558] uppercase block">
                        Custom Finishing
                      </span>
                      <span className="text-[#dfd1b9]/80 font-light text-[11px]">{fam.customization}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 mt-2">
                  <Link
                    to={`/request-quote?product=textiles&form=${encodeURIComponent(fam.name)}`}
                    className="w-full bg-[#dcb782] text-black hover:bg-white transition-all font-body font-bold text-xs tracking-wider uppercase py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Request Swatch & Quote</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section C — Textile Procurement Lens (Section 16) */}
        <section className="mb-20 rounded-3xl border border-white/10 bg-[#141413] p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col gap-3 mb-8">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-3 py-1 w-max">
              <FileText className="h-3 w-3 text-[#dcb782]" />
              <span className="text-[10px] font-mono tracking-widest text-[#dcb782] uppercase font-bold">
                TEXTILE PROCUREMENT LENS
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
              What Fabric Buyers Can Specify
            </h2>
            <p className="text-sm text-[#dfd1b9]/75 font-light max-w-3xl leading-relaxed">
              Every textile production contract is structured around technical manufacturing parameters:
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

          {/* Section 16 Strict Certification & GSM Rule Notice */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-start gap-4 text-xs text-[#dfd1b9]/70 font-light">
            <div className="flex items-center gap-2 shrink-0 text-[#dcb782] font-semibold">
              <ShieldCheck className="h-4 w-4" />
              <span>Technical Standards:</span>
            </div>
            <div>
              GSM is defined according to buyer specification and selected fabric. Certification requirements (GOTS, Oeko-Tex, BCI) can be evaluated against the selected fabric, supplier, and destination market.
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
              <p className="text-sm text-white font-medium">
                Defined according to fabric, colourway and production specification.
              </p>
              <p className="text-xs text-[#dfd1b9]/60 font-light mt-1">
                Sampling yardage and roll quantities configured per mill run.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-[#ab8558] uppercase block mb-1">Incoterms</span>
              <p className="text-sm text-[#dcb782] font-semibold">FOB · CIF (Tuticorin / Chennai)</p>
              <p className="text-xs text-[#dfd1b9]/60 font-light mt-1">
                Consolidated roll packing with moisture-barrier wrapping for oceanic transit.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-[#ab8558] uppercase block mb-1">Swatch Program</span>
              <p className="text-sm text-white font-medium">Fabric swatch cards available.</p>
              <p className="text-xs text-[#dfd1b9]/60 font-light mt-1">
                Samples can be arranged for qualified sourcing requirements. Courier charges apply.
              </p>
            </div>
          </div>
        </section>

        {/* How to Buy Sourcing Flow */}
        <HowToBuyModule categorySlug="textiles" />

        {/* Section E — RFQ Module */}
        <section className="rounded-3xl bg-gradient-to-tr from-[#121211] to-[#1f1d1a] border border-[#dcb782]/20 p-8 md:p-12 text-center flex flex-col items-center gap-4">
          <span className="text-xs font-mono tracking-widest text-[#dcb782] uppercase font-bold">
            COMMERCIAL INTAKE
          </span>
          <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
            Have a Specific Fabric Construction or Sourcing Requirement?
          </h2>
          <p className="text-sm text-[#dfd1b9]/75 font-light max-w-xl">
            Tell us your target composition, GSM, estimated meterage, and destination port. Our trade desk will structure the quotation.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              to="/request-quote?category=textiles"
              className="bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold text-xs tracking-wider uppercase px-8 py-3.5 rounded-xl hover:from-white hover:to-[#dcb782] transition-all shadow-xl"
            >
              Request a Quote →
            </Link>
            <Link
              to="/contact"
              className="border border-white/10 hover:border-white text-white text-xs font-body font-bold tracking-wider uppercase px-6 py-3.5 rounded-xl hover:bg-white/5 transition-all"
            >
              Contact Textile Desk
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
