import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full pt-28 pb-20">
      <SEOHead
        title="Privacy Policy | Aura Exports"
        description="Privacy policy and data protection commitments for international procurement clients of Aura Exports."
        canonical="https://auraexport.co/privacy"
      />

      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 mb-8 flex items-center justify-between text-xs font-mono tracking-wider text-[#ab8558]/80 font-bold">
        <Link to="/" className="flex items-center gap-1.5 hover:text-white transition-colors">
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>AURA EXPORTS HOME</span>
        </Link>
        <div className="flex items-center gap-2">
          <span>LEGAL</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white">PRIVACY POLICY</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6">
        <header className="mb-12 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-4 py-1.5 mb-4">
            <ShieldCheck className="h-3.5 w-3.5 text-[#dcb782]" />
            <span className="text-xs font-mono text-[#dcb782] tracking-wider uppercase font-semibold">
              DATA GOVERNANCE & CONFIDENTIALITY
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading text-white font-medium tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm font-body text-[#dfd1b9]/70 font-light">
            Entity: <strong>Aura Exports</strong> (Statutory: AURA ENTERPRISE EXPORTS (OPC) PVT LTD) | Operating Base: Chennai, Tamil Nadu, India
          </p>
        </header>

        <article className="prose prose-invert max-w-none flex flex-col gap-8 text-[#D5C8B7] font-body font-light text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-heading text-white font-semibold mb-3">1. Commercial Confidentiality Commitment</h2>
            <p>
              Aura Exports (AURA ENTERPRISE EXPORTS (OPC) PVT LTD) recognizes that international sourcing requirements, target product formulations, private-label artwork, and volume forecasts represent proprietary commercial assets. All RFQ submissions and procurement consultations are held in strict commercial confidence.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading text-white font-semibold mb-3">2. Procurement Data Collected</h2>
            <p>
              When an international buyer initiates communication or submits an RFQ via auraexport.co, we collect organizational details necessary to evaluate import compliance:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-sm text-[#dfd1b9]/80">
              <li>Corporate email address and authorized contact name</li>
              <li>Company legal name, jurisdiction, and import destination country</li>
              <li>Target commodity specifications, required volume, and destination seaport</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-white/5 border border-[#dcb782]/20">
            <h2 className="text-lg font-heading text-[#dcb782] font-semibold mb-2">[BUSINESS INPUT REQUIRED — STATUTORY LEGAL COUNSEL REVIEW]</h2>
            <p className="text-xs text-[#dfd1b9]/70 leading-relaxed font-mono">
              Formal statutory privacy policy clauses (including GDPR compliance for European Union importers, data retention schedules, and registered grievance officer contact details) are currently under final legal counsel review by Aura Exports. For specific data governance inquiries, contact: trade@auraexport.co.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
