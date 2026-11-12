import { Link } from 'react-router-dom';
import { Scale, ShieldCheck, ArrowUpRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/procurement/Breadcrumbs';

export default function TermsOfTradePage() {
  return (
    <div className="w-full pt-28 pb-20">
      <SEOHead
        title="Terms of Trade | Commercial Export Governance | Aura Exports"
        description="Standard international trade terms, Incoterms governance, sampling protocols, and payment mechanisms for Aura Exports."
        canonical="https://auraexport.co/terms-of-trade"
      />

      <Breadcrumbs items={[{ label: 'Terms of Trade', href: '/terms-of-trade' }]} className="!max-w-4xl !px-6" />

      <main className="max-w-4xl mx-auto px-6">
        <header className="mb-12 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-4 py-1.5 mb-4">
            <Scale className="h-3.5 w-3.5 text-[#dcb782]" />
            <span className="text-xs font-mono text-[#dcb782] tracking-wider uppercase font-semibold">
              INTERNATIONAL COMMERCE FRAMEWORK
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading text-white font-medium tracking-tight mb-4">
            Commercial Terms of Trade
          </h1>
          <p className="text-sm font-body text-[#dfd1b9]/70 font-light">
            Entity: <strong>Aura Exports</strong> (Statutory: AURA ENTERPRISE EXPORTS (OPC) PVT LTD) | Operating Corridor: Chennai / Tuticorin Seaports, India
          </p>
        </header>

        <article className="prose prose-invert max-w-none flex flex-col gap-8 text-[#D5C8B7] font-body font-light text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-heading text-white font-semibold mb-3">1. International Incoterms Structure</h2>
            <p>
              Aura Exports quotes international export shipments under ICC Incoterms® 2020 rules. Primary trading bases:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-sm text-[#dfd1b9]/80">
              <li><strong>FOB (Free On Board):</strong> Chennai Seaport / V.O. Chidambaranar Port (Tuticorin), Tamil Nadu, India. Includes customs clearance, export loading, and port terminal handling.</li>
              <li><strong>CIF / CFR (Cost, Insurance & Freight):</strong> Delivered to destination seaport specified in the commercial proforma invoice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading text-white font-semibold mb-3">2. Sampling & Pre-Shipment Inspection</h2>
            <p>
              Pre-shipment verification samples are dispatched via international courier (DHL / FedEx express) accompanied by a preliminary Certificate of Analysis (CoA). Sample charges and courier costs are deductible against confirmed bulk purchase orders upon commercial closing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading text-white font-semibold mb-3">3. Payment Instruments & Currency</h2>
            <p>
              All international commercial transactions are denominated in <strong>USD ($)</strong> or <strong>EUR (€)</strong>. Standard trade finance mechanisms:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-sm text-[#dfd1b9]/80">
              <li>Irrevocable, Confirmed Letter of Credit (L/C at sight) from a prime international bank.</li>
              <li>Telegraphic Transfer (T/T advance deposit balance against shipping documents / Bill of Lading).</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-white/5 border border-[#dcb782]/20">
            <h2 className="text-lg font-heading text-[#dcb782] font-semibold mb-2">[BUSINESS INPUT REQUIRED — COMMERCIAL TRADE DESK ALIGNMENT]</h2>
            <p className="text-xs text-[#dfd1b9]/70 leading-relaxed font-mono">
              Specific credit terms, container detention thresholds, volume tiered discounts, and demurrage schedules are finalized on a per-contract basis depending on commodity market volatility. To review customized trade terms, submit your commercial parameters:
            </p>
            <div className="mt-4">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-md"
              >
                <span>Request Contract Terms via RFQ</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
