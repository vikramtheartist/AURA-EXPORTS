import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Globe, ShieldCheck, MapPin, Building2, CheckCircle2, ArrowUpRight, Compass, Users } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import philosophyImg from '../assets/images/temple_philosophy_png_1780419676440.png';

export default function AboutPage() {
  return (
    <div className="w-full pt-28 pb-20">
      <SEOHead pageKey="about" />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-8 flex items-center justify-between text-xs font-mono tracking-wider text-[#ab8558]/80 font-bold">
        <Link to="/" className="flex items-center gap-1.5 hover:text-white transition-colors">
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>AURA EXPORTS HOME</span>
        </Link>
        <div className="flex items-center gap-2">
          <span>ENTERPRISE</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white">ABOUT AURA EXPORTS</span>
        </div>
      </nav>

      {/* Primary Header: Commercial Identity */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-16">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-4 py-1.5 mb-6">
          <Building2 className="h-3.5 w-3.5 text-[#dcb782]" />
          <span className="text-xs font-mono text-[#dcb782] tracking-wider uppercase font-semibold">
            CORPORATE PROFILE & TRADE IDENTITY
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1.05] font-normal mb-6">
          Premium Indian Sourcing for <span className="text-[#dcb782] italic font-normal">Global Enterprise.</span>
        </h1>
        <p className="text-[#D5C8B7] font-body text-base md:text-xl max-w-3xl font-light leading-relaxed">
          Aura Exports is an Indian export and global sourcing enterprise operating from Chennai. We bridge international procurement organizations with vetted regional supply ecosystems across agricultural botanicals, contemporary fashion jewelry, and sustainable textiles.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-24">
        {/* Layer 1: Core Corporate Pillars (Business Model & Capabilities) */}
        <section aria-labelledby="corporate-answers-heading" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#121210] border border-white/10 flex flex-col justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-[#dcb782] uppercase tracking-wider block mb-1">01 / WHO WE ARE</span>
              <h2 className="text-lg font-heading text-white font-medium mb-2">Registered Entity</h2>
              <p className="text-xs text-[#dfd1b9]/75 font-light leading-relaxed">
                Operating as <strong>Aura Exports</strong> (Incorporated as AURA ENTERPRISE EXPORTS (OPC) PVT LTD), dedicated to institutional cross-border B2B commerce and transparent trade governance.
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#ab8558] block pt-3 border-t border-white/5">
              LEGAL ENTITY: PRIVATE LIMITED
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-[#121210] border border-white/10 flex flex-col justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-[#dcb782] uppercase tracking-wider block mb-1">02 / WHAT WE DO</span>
              <h2 className="text-lg font-heading text-white font-medium mb-2">Vetted Sourcing Partner</h2>
              <p className="text-xs text-[#dfd1b9]/75 font-light leading-relaxed">
                We identify, audit, and manage compliant regional supplier collectives, providing end-to-end quality assaying, custom packaging, and maritime export execution.
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#ab8558] block pt-3 border-t border-white/5">
              MODEL: DIRECT ECOSYSTEM INTEGRATION
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-[#121210] border border-white/10 flex flex-col justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-[#dcb782] uppercase tracking-wider block mb-1">03 / WHERE WE OPERATE</span>
              <h2 className="text-lg font-heading text-white font-medium mb-2">Operating Gateway</h2>
              <p className="text-xs text-[#dfd1b9]/75 font-light leading-relaxed">
                Headquartered in Chennai, Tamil Nadu. Primary export logistics coordinated through Chennai Seaport and V.O. Chidambaranar Port (Tuticorin).
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#ab8558] block pt-3 border-t border-white/5">
              GATEWAY: CHENNAI & TUTICORIN PORTS
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-[#121210] border border-white/10 flex flex-col justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-[#dcb782] uppercase tracking-wider block mb-1">04 / WHO WE SERVE</span>
              <h2 className="text-lg font-heading text-white font-medium mb-2">International Importers</h2>
              <p className="text-xs text-[#dfd1b9]/75 font-light leading-relaxed">
                Procurement directors, private-label brand owners, nutraceutical formulators, and volume retailers across the Americas, Europe, Middle East, and Asia-Pacific.
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#ab8558] block pt-3 border-t border-white/5">
              ORIENTATION: B2B COMMERCIAL CONTRACTS
            </span>
          </div>
        </section>

        {/* Layer 2: Operating Geography & Strategic Gateway */}
        <section aria-labelledby="gateway-heading" className="bg-[#121210] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#dcb782] tracking-widest uppercase font-bold">
                <MapPin className="h-4 w-4" />
                <span>STRATEGIC INDIAN TRADING BASE</span>
              </div>

              <h2 id="gateway-heading" className="text-3xl md:text-4xl font-heading text-white font-medium">
                The Chennai Advantage: Gateway to Southern India's Production Basins
              </h2>

              <p className="text-[#D5C8B7] font-body text-sm md:text-base leading-relaxed font-light">
                Chennai serves as the commercial nexus of South India’s premier manufacturing and agricultural belts. Through our Chennai operating base, Aura directly accesses:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-body font-light text-[#dfd1b9]/80">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-white font-semibold block mb-1">Agricultural Hinterland</span>
                  Direct highway access to the Erode turmeric belt, Western Ghats spice plantations, and Salem botanical centers.
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-white font-semibold block mb-1">Maritime Trade Corridors</span>
                  Container terminal connections via Chennai Port and Tuticorin for regular sailings to Europe, GCC, and North America.
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-white font-semibold block mb-1">Textile & Apparel Ecosystem</span>
                  Immediate proximity to Tirupur and Coimbatore organic cotton spinning clusters and certified eco-weaving collectives.
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-white font-semibold block mb-1">Artisanal Metal Foundries</span>
                  Decades-old artisanal caster networks specializing in fine brass, hypoallergenic settings, and modern PVD gold finishing.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4 p-6 rounded-2xl bg-black/60 border border-[#dcb782]/20">
              <span className="text-xs font-mono text-[#dcb782] uppercase tracking-wider font-bold">TRADE DESK AVAILABILITY</span>
              <div className="flex flex-col gap-3 text-xs font-mono">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#dfd1b9]/60">OPERATING HOURS</span>
                  <span className="text-white">09:00 – 18:00 IST (UTC +5:30)</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#dfd1b9]/60">OFFICIAL CORRESPONDENCE</span>
                  <span className="text-white">trade@auraexport.co</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#dfd1b9]/60">GOVERNING JURISDICTION</span>
                  <span className="text-white">Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#dfd1b9]/60">STATUTORY IEC & GST</span>
                  <span className="text-[#ab8558]">[AVAILABLE UPON REQUEST]</span>
                </div>
              </div>
              <Link
                to="/quality-compliance"
                className="mt-2 text-xs font-mono uppercase tracking-wider text-[#dcb782] hover:text-white flex items-center justify-between pt-2 border-t border-white/10"
              >
                <span>Review Verification Kit</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Layer 3: Foundational Philosophy (Yaadhum Oore, Yaavarum Kelir) */}
        <section aria-labelledby="philosophy-heading" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative group flex justify-center">
            <div className="relative p-2.5 border border-[#dcb782]/20 bg-black/60 rounded-2xl overflow-hidden shadow-2xl">
              <div className="overflow-hidden rounded-xl border border-white/5 relative aspect-[4/5] max-w-[420px]">
                <img
                  src={philosophyImg}
                  alt="Aura Exports Wisdom Philosophy - South Indian Heritage stone craftsmanship"
                  className="w-full h-full object-cover filter grayscale contrast-125"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col items-start text-left gap-4">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-4 py-1">
              <Compass className="h-3.5 w-3.5 text-[#dcb782]" />
              <span className="text-xs font-mono text-[#dcb782] tracking-wider uppercase font-semibold">
                CULTURAL FOUNDATION
              </span>
            </div>

            <h2 id="philosophy-heading" className="text-3xl md:text-5xl font-heading italic text-white leading-tight font-medium">
              “Yaadhum Oore, Yaavarum Kelir”
            </h2>

            <div className="border-l border-[#dcb782]/45 pl-4 mb-2">
              <span className="text-xs font-mono tracking-wider text-[#D5C8B7]/80 uppercase block font-semibold">
                — To us, all towns are our own, and all humankind our kin.
              </span>
              <span className="text-[11px] text-[#dfd1b9]/50 block mt-0.5">
                Kaniyan Poongunranar, Purananuru (Tamil Sangam Literature, c. 6th Century BCE)
              </span>
            </div>

            <p className="text-[#D5C8B7]/90 font-body text-sm md:text-base leading-relaxed font-light">
              Centuries before modern supply-chain networks existed, Tamil merchants pioneered maritime silk and spice corridors connecting South India with Rome, Southeast Asia, and the Levant. They were guided by a worldview that saw the globe as an interconnected home and every trade counterparty as family.
            </p>

            <p className="text-[#D5C8B7]/90 font-body text-sm md:text-base leading-relaxed font-light">
              At Aura Exports, this is not mere poetic sentiment; it is our operational compass. In an industry often troubled by speculative brokers and opaque intermediaries, we operate with transparent contracts, documented specifications, and mutual accountability.
            </p>

            {/* Verified Capability Metrics */}
            <div className="grid grid-cols-3 gap-6 w-full pt-6 mt-4 border-t border-white/10 text-xs font-mono">
              <div>
                <span className="text-[#dcb782] text-xl font-heading font-bold block">Structured</span>
                <span className="text-[#dfd1b9]/50 uppercase text-[10px]">Quality Protocol</span>
              </div>
              <div>
                <span className="text-[#dcb782] text-xl font-heading font-bold block">Direct</span>
                <span className="text-[#dfd1b9]/50 uppercase text-[10px]">Collective Sourcing</span>
              </div>
              <div>
                <span className="text-[#dcb782] text-xl font-heading font-bold block">FOB/CIF</span>
                <span className="text-[#dfd1b9]/50 uppercase text-[10px]">Incoterms Compliance</span>
              </div>
            </div>
          </div>
        </section>

        {/* Layer 4: Clear Commercial Pathways */}
        <section aria-labelledby="about-pathways-heading" className="border-t border-white/10 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 id="about-pathways-heading" className="text-xl font-heading text-white font-semibold">Engage with Aura Exports</h3>
            <p className="text-xs text-[#dfd1b9]/70 font-light mt-1">Review our verification credentials, explore our export workflow, or initiate a commercial RFQ.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/quality-compliance"
              className="border border-white/10 hover:border-white text-white text-xs font-mono uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all"
            >
              Review Verification Kit →
            </Link>
            <Link
              to="/request-quote"
              className="bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl shadow-md hover:scale-[1.02] transition-transform"
            >
              Initiate Commercial RFQ
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
