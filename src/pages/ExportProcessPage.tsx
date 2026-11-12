import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronRight,
  Globe,
  FileCheck,
  Shield,
  Truck,
  Package,
  ArrowUpRight,
  CheckCircle2,
  Anchor,
  FileText,
  UserCheck,
  Send,
  Boxes,
  HelpCircle
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/procurement/Breadcrumbs';

interface ProcessStage {
  step: string;
  tag: string;
  title: string;
  summary: string;
  whatHappens: string;
  buyerProvides: string[];
  auraProvides: string[];
  documentation: string[];
}

const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    tag: 'SCOPING',
    title: 'Requirement & Destination Regulation Audit',
    summary: 'Clear alignment on target product grades, volumes, destination market regulatory compliance, and delivery timelines.',
    whatHappens: 'We audit your technical product specifications, required botanical assay or material grades, target packaging, and destination customs regulations (FDA, EU EFSA, GCC, etc.) to establish commercial feasibility.',
    buyerProvides: [
      'Target product specifications & chemical/physical criteria',
      'Anticipated container volume (FCL / LCL estimate)',
      'Destination port of discharge (POD)',
      'Regulatory compliance requirements of importing nation'
    ],
    auraProvides: [
      'Technical sourcing feasibility assessment',
      'Cultivar & grade alignment from South Indian production belts',
      'Preliminary production and dispatch timeline'
    ],
    documentation: [
      'Commercial RFQ Scope Document',
      'Technical Product Specification Sheet'
    ]
  },
  {
    step: '02',
    tag: 'SOURCING',
    title: 'Direct Source Allocation & Batch Aggregation',
    summary: 'Matching contracted volumes to verified farmer collectives, artisan foundries, or weaving clusters.',
    whatHappens: 'Aura matches your volume with audited producer clusters in South India. For botanical spices, we allocate dedicated drying lots in the Erode agricultural belt. For jewelry and textiles, production runs are scheduled with verified artisanal workshops.',
    buyerProvides: [
      'Primary packaging preference (kraft sacks, food-grade liners, cartons)',
      'Private-labeling and master marking guidelines (if applicable)',
      'Storage and temperature handling requirements'
    ],
    auraProvides: [
      'Batch allocation and aggregation schedule',
      'Regional farmgate/foundry lot assignment',
      'Traceability tracking log for the production run'
    ],
    documentation: [
      'Source Lot Assignment Record',
      'Internal Aggregation & Traceability Log'
    ]
  },
  {
    step: '03',
    tag: 'VERIFICATION',
    title: 'Accredited Laboratory Testing & Chemical Assays',
    summary: 'Multi-parameter laboratory analysis prior to processing and container stuffing.',
    whatHappens: 'Raw and processed lots undergo rigorous physical, chemical, and microbiological testing through accredited independent laboratories (NABL / ISO 17025). For turmeric, active Curcumin percentage, moisture, ash, and heavy metals are assayed.',
    buyerProvides: [
      'Permissible maximum residue limits (MRLs) for destination market',
      'Buyer-specific assay thresholds (e.g. min Curcumin 4.5%–5.2%)',
      'Third-party testing agency preference (if buyer designates)'
    ],
    auraProvides: [
      'Independent accredited laboratory test reports',
      'Verification of active constituents against contracted parameters',
      'Moisture, microbial, and heavy metal screening results'
    ],
    documentation: [
      'Preliminary Certificate of Analysis (CoA)',
      'Accredited Lab Chemical Screening Summary'
    ]
  },
  {
    step: '04',
    tag: 'SAMPLING',
    title: 'Express Sample Dispatch & Buyer Evaluation',
    summary: 'Air freight dispatch of consignment-representative batch samples for buyer sign-off.',
    whatHappens: 'Representative samples taken from the allocated export batch are sealed in tamper-evident packaging and dispatched via express air courier directly to the buyer’s quality assurance facility or designated testing laboratory.',
    buyerProvides: [
      'Physical sample receiving address and delivery contact',
      'Buyer courier account details (or sample dispatch settlement)',
      'Written laboratory evaluation and formal sample approval'
    ],
    auraProvides: [
      'Consignment-representative sample extraction & tamper sealing',
      'Identical counter-sample retained in Aura archive',
      'Express air courier dispatch with tracking and batch CoA'
    ],
    documentation: [
      'International Air Waybill (AWB)',
      'Sample Dispatch Packing Slip & Batch CoA',
      'Formal Buyer Sample Approval Form'
    ]
  },
  {
    step: '05',
    tag: 'COMMERCIAL',
    title: 'Commercial Agreement, Proforma & Payment Structure',
    summary: 'Formalization of Incoterms, packing specifications, banking terms, and milestone delivery dates.',
    whatHappens: 'Following sample sign-off, a formal Proforma Invoice (PI) is issued detailing unit pricing, agreed Incoterm (FOB Chennai/Tuticorin or CIF destination port), packing standards, milestone dates, and recognized banking payment instruments.',
    buyerProvides: [
      'Agreed Incoterm selection (FOB, CIF, CFR)',
      'Formal Purchase Order (PO) issued on corporate letterhead',
      'Agreed payment instrument (Irrevocable L/C or Wire Transfer T/T)'
    ],
    auraProvides: [
      'Statutory Proforma Invoice with complete commercial terms',
      'Authorized banking coordinates for trade settlement',
      'Confirmed container packing and loading schedule'
    ],
    documentation: [
      'Commercial Proforma Invoice (PI)',
      'Buyer Purchase Order (PO)',
      'Letter of Credit (L/C) or Wire Settlement Agreement'
    ]
  },
  {
    step: '06',
    tag: 'EXPORT & DISPATCH',
    title: 'Customs Clearance, Port Handling & Ocean Dispatch',
    summary: 'Final port carting, plant quarantine clearance, container stuffing, and statutory document release.',
    whatHappens: 'Goods are transferred to the container freight station at Chennai or Tuticorin port. Statutory quarantine inspections are conducted, customs shipping bills are cleared, containers are sealed, and the vessel departs. Original shipping documents are surrendered or couriered.',
    buyerProvides: [
      'Complete shipping instructions (consignee & notify party details)',
      'Designated destination clearing broker coordinates',
      'Port discharge documentation requirements'
    ],
    auraProvides: [
      'Quarantine and export customs clearance execution in India',
      'Container stuffing verification and seal management',
      'Complete statutory shipping dossier transmitted via bank or courier'
    ],
    documentation: [
      'Commercial Invoice & Detailed Packing List (PL)',
      'Master Ocean Bill of Lading (B/L)',
      'Phytosanitary Certificate (Plant Quarantine Station, Govt. of India)',
      'Certificate of Origin (COO, Chamber of Commerce)',
      'Final Batch Certificate of Analysis (CoA)'
    ]
  }
];

export default function ExportProcessPage() {
  const [activeStep, setActiveStep] = useState<string>('01');

  const currentStage = PROCESS_STAGES.find(s => s.step === activeStep) || PROCESS_STAGES[0];

  return (
    <div className="w-full pt-28 pb-20">
      <SEOHead pageKey="exportProcess" />

      {/* Breadcrumb Navigation */}
      <Breadcrumbs items={[{ label: 'Our Approach', href: '/export-process' }]} />

      {/* Semantic Page Header */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-16">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-4 py-1.5 mb-6">
          <Globe className="h-3.5 w-3.5 text-[#dcb782]" />
          <span className="text-xs font-mono text-[#dcb782] tracking-wider uppercase font-semibold">
            INTERNATIONAL COMMERCE CORRIDOR
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1.05] font-normal mb-6">
          Structured <span className="text-[#dcb782] italic font-normal">Export Workflow</span>
        </h1>
        <p className="text-[#D5C8B7] font-body text-base md:text-lg max-w-3xl font-light leading-relaxed">
          International sourcing demands predictability at every milestone. Aura Exports structures cross-border transactions through a transparent 6-stage operational protocol, eliminating ambiguities between order initiation and port arrival.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-20">

        {/* WORKFLOW NAVIGATION TABS */}
        <section aria-label="Export Stages Overview" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {PROCESS_STAGES.map((s) => {
            const isSelected = s.step === activeStep;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-[#1c1a16] border-[#dcb782] shadow-lg shadow-[#dcb782]/5'
                    : 'bg-[#121210] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-2xl font-heading italic font-bold ${
                    isSelected ? 'text-[#dcb782]' : 'text-white/40'
                  }`}>
                    {s.step}
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-[#ab8558] uppercase">
                    {s.tag}
                  </span>
                </div>
                <span className={`text-xs font-heading font-medium leading-snug line-clamp-2 ${
                  isSelected ? 'text-white' : 'text-[#dfd1b9]/70'
                }`}>
                  {s.title}
                </span>
              </button>
            );
          })}
        </section>

        {/* ACTIVE STAGE DEEP DIVE */}
        <section aria-labelledby="stage-detail-heading" className="p-8 md:p-12 rounded-3xl bg-[#121210] border border-[#dcb782]/30 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl md:text-5xl font-heading italic font-bold text-[#dcb782]">
                {currentStage.step}
              </span>
              <div>
                <span className="text-xs font-mono text-[#ab8558] uppercase tracking-widest font-bold block mb-1">
                  STAGE {currentStage.step} — {currentStage.tag}
                </span>
                <h2 id="stage-detail-heading" className="text-2xl md:text-3xl font-heading text-white font-medium">
                  {currentStage.title}
                </h2>
              </div>
            </div>
            <p className="text-xs font-mono text-[#dfd1b9]/60 max-w-sm">
              {currentStage.summary}
            </p>
          </div>

          {/* What Happens Section */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#dcb782] font-bold">
              WHAT HAPPENS IN THIS STAGE
            </span>
            <p className="text-sm md:text-base text-[#dfd1b9] font-light leading-relaxed">
              {currentStage.whatHappens}
            </p>
          </div>

          {/* 3-Column Roles & Responsibilities Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/5">
            {/* Buyer Provides */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/5 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-white">
                <UserCheck className="h-4 w-4 text-[#dcb782]" />
                <h3 className="text-xs font-mono uppercase tracking-wider font-bold">What Buyer Provides</h3>
              </div>
              <ul className="flex flex-col gap-2.5 text-xs text-[#dfd1b9]/80 font-light leading-relaxed">
                {currentStage.buyerProvides.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#dcb782] font-mono mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aura Delivers */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/5 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-white">
                <Boxes className="h-4 w-4 text-[#dcb782]" />
                <h3 className="text-xs font-mono uppercase tracking-wider font-bold">What Aura Delivers</h3>
              </div>
              <ul className="flex flex-col gap-2.5 text-xs text-[#dfd1b9]/80 font-light leading-relaxed">
                {currentStage.auraProvides.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-mono mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documentation Involved */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/5 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-white">
                <FileText className="h-4 w-4 text-[#dcb782]" />
                <h3 className="text-xs font-mono uppercase tracking-wider font-bold">Documentation Involved</h3>
              </div>
              <ul className="flex flex-col gap-2.5 text-xs text-[#dfd1b9]/80 font-light leading-relaxed">
                {currentStage.documentation.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#ab8558] font-mono mt-0.5">▪</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CHENNAI OPERATING GATEWAY SECTION */}
        <section aria-labelledby="chennai-gateway-heading" className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-black/40 border border-white/10 rounded-full px-3.5 py-1 w-fit">
              <Anchor className="h-3.5 w-3.5 text-[#dcb782]" />
              <span className="text-xs font-mono text-[#dcb782] tracking-wider uppercase font-semibold">
                MARITIME & AIR CORRIDOR
              </span>
            </div>
            <h2 id="chennai-gateway-heading" className="text-2xl md:text-3xl font-heading text-white font-normal">
              Chennai, India — Aura's Operating Gateway
            </h2>
            <p className="text-sm text-[#dfd1b9]/80 font-light leading-relaxed">
              Chennai serves as Aura Exports’ operational and trade desk gateway. Situated on the southeastern coast of India, Chennai provides direct maritime coordination with major container terminals at Chennai Port (INMAA) and Tuticorin (INTUT), alongside air freight connectivity via Chennai International Airport (MAA).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <span className="text-xs font-mono text-[#dcb782] uppercase font-bold block mb-1">Deepwater Ocean Freight</span>
                <p className="text-xs text-[#dfd1b9]/60 font-light">Regular feeder and mother vessel schedules connecting to Middle Eastern, European, and Asian hub ports.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <span className="text-xs font-mono text-[#dcb782] uppercase font-bold block mb-1">Direct Trade Desk Coordination</span>
                <p className="text-xs text-[#dfd1b9]/60 font-light">Real-time customs clearance oversight and plant quarantine coordination handled directly by our Chennai team.</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-black/60 border border-white/10 flex flex-col gap-4 w-full lg:w-80 shrink-0">
            <span className="text-xs font-mono text-[#ab8558] uppercase tracking-widest font-bold">
              REGIONAL DISPATCH CORRIDORS
            </span>
            <div className="flex flex-col gap-2 text-xs font-mono text-[#dfd1b9]/80">
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-[#dfd1b9]/50">Primary Ocean Gateway:</span>
                <span className="text-white font-bold">Chennai Port (INMAA)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-[#dfd1b9]/50">Secondary Ocean Gateway:</span>
                <span className="text-white font-bold">Tuticorin (INTUT)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-[#dfd1b9]/50">Air Cargo Gateway:</span>
                <span className="text-white font-bold">Chennai Cargo (MAA)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-[#dfd1b9]/50">Coordination Base:</span>
                <span className="text-white font-bold">Chennai, TN, India</span>
              </div>
            </div>
            <Link
              to="/request-quote"
              className="mt-2 w-full text-center bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold text-xs uppercase tracking-wider py-3 rounded-xl hover:opacity-95 transition-all shadow-md"
            >
              Request Port Freight Quote →
            </Link>
          </div>
        </section>

        {/* STATUTORY EXPORT DOSSIER COMPONENT */}
        <section aria-labelledby="export-docs-heading" className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col gap-3 mb-8">
            <span className="text-xs font-mono tracking-widest text-[#dcb782] uppercase font-bold">
              STATUTORY EXPORT DOSSIER
            </span>
            <h2 id="export-docs-heading" className="text-2xl md:text-3xl font-heading text-white font-medium">
              Statutory Documentation Accompanying Every Consignment
            </h2>
            <p className="text-sm text-[#dfd1b9]/70 font-light max-w-2xl">
              Frictionless international customs clearance requires institutional documentation. Every export shipment dispatched by Aura Exports is backed by an authentic statutory dossier:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 flex flex-col justify-between gap-4">
              <div>
                <FileCheck className="h-5 w-5 text-[#dcb782] mb-3" />
                <h3 className="text-white text-sm font-semibold mb-1">Commercial Invoice & PL</h3>
                <p className="text-xs text-[#dfd1b9]/60 font-light leading-relaxed">Detailed tariff classification, HS codes, net/gross weights, and batch identifiers.</p>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">Statutory standard</span>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 flex flex-col justify-between gap-4">
              <div>
                <Shield className="h-5 w-5 text-[#dcb782] mb-3" />
                <h3 className="text-white text-sm font-semibold mb-1">Certificate of Analysis (CoA)</h3>
                <p className="text-xs text-[#dfd1b9]/60 font-light leading-relaxed">Accredited laboratory test reports for assays, moisture, ash, and microbiological limits.</p>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">Accredited lab issued</span>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 flex flex-col justify-between gap-4">
              <div>
                <Package className="h-5 w-5 text-[#dcb782] mb-3" />
                <h3 className="text-white text-sm font-semibold mb-1">Certificate of Origin (COO)</h3>
                <p className="text-xs text-[#dfd1b9]/60 font-light leading-relaxed">Authorized chamber of commerce certification confirming authentic Indian provenance.</p>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">Chamber authenticated</span>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 flex flex-col justify-between gap-4">
              <div>
                <Truck className="h-5 w-5 text-[#dcb782] mb-3" />
                <h3 className="text-white text-sm font-semibold mb-1">Phytosanitary Certificate</h3>
                <p className="text-xs text-[#dfd1b9]/60 font-light leading-relaxed">Government plant quarantine inspection certifying biological safety for botanical goods.</p>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">Quarantine certified</span>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA: RFQ INTAKE */}
        <section aria-labelledby="workflow-cta-heading" className="border-t border-white/10 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 id="workflow-cta-heading" className="text-xl font-heading text-white font-semibold">Ready to structure an export contract?</h3>
            <p className="text-xs text-[#dfd1b9]/70 font-light mt-1">Submit your specifications, volume estimates, and preferred Incoterms for a formal review.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/quality-compliance" className="text-xs font-mono uppercase tracking-wider text-[#dcb782] hover:underline flex items-center gap-1 self-center">
              Review Quality Framework →
            </Link>
            <Link to="/request-quote" className="bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-xl transition-all shadow-md">
              Initiate RFQ Intake
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
