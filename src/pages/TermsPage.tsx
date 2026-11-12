import { FileText } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/procurement/Breadcrumbs';

export default function TermsPage() {
  return (
    <div className="w-full pt-28 pb-20">
      <SEOHead
        title="Terms of Use | Aura Exports"
        description="Website terms and digital platform governance for Aura Exports."
        canonical="https://auraexport.co/terms"
      />

      <Breadcrumbs items={[{ label: 'Terms of Use', href: '/terms' }]} className="!max-w-4xl !px-6" />

      <main className="max-w-4xl mx-auto px-6">
        <header className="mb-12 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-4 py-1.5 mb-4">
            <FileText className="h-3.5 w-3.5 text-[#dcb782]" />
            <span className="text-xs font-mono text-[#dcb782] tracking-wider uppercase font-semibold">
              PLATFORM GOVERNANCE
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading text-white font-medium tracking-tight mb-4">
            Terms of Use
          </h1>
          <p className="text-sm font-body text-[#dfd1b9]/70 font-light">
            Entity: <strong>Aura Exports</strong> (Statutory: AURA ENTERPRISE EXPORTS (OPC) PVT LTD) | Operating Base: Chennai, Tamil Nadu, India
          </p>
        </header>

        <article className="prose prose-invert max-w-none flex flex-col gap-8 text-[#D5C8B7] font-body font-light text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-heading text-white font-semibold mb-3">1. Scope of Digital Storefront</h2>
            <p>
              This website is an institutional B2B trade portal published by Aura Exports (AURA ENTERPRISE EXPORTS (OPC) PVT LTD). Content presented—including product descriptions, category classifications, and technical assay summaries—is provided for commercial procurement scoping and does not constitute a self-executing commercial offer until a formal Proforma Invoice or Sale Contract is issued.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading text-white font-semibold mb-3">2. Intellectual Property & Brand Assets</h2>
            <p>
              All proprietary brand marks, typography, editorial imagery, and technical dossiers published on auraexport.co are the exclusive property of Aura Exports (AURA ENTERPRISE EXPORTS (OPC) PVT LTD).
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white/5 border border-[#dcb782]/20">
            <h2 className="text-lg font-heading text-[#dcb782] font-semibold mb-2">[BUSINESS INPUT REQUIRED — STATUTORY LEGAL REVIEW]</h2>
            <p className="text-xs text-[#dfd1b9]/70 leading-relaxed font-mono">
              Complete dispute resolution clauses, governing law (Courts of Chennai, Tamil Nadu, India), and commercial liability limitations are under active review by enterprise legal counsel. Inquiries may be directed to: trade@auraexport.co.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
