import { Link } from 'react-router-dom';
import { Shield, FileCheck2, Compass, Anchor, ArrowUpRight } from 'lucide-react';
import { VerificationInformation } from '../../types/procurement';

interface VerificationPathwayProps {
  originText: string;
  verification: VerificationInformation;
  categoryName: string;
}

export default function VerificationPathway({
  originText,
  verification,
  categoryName,
}: VerificationPathwayProps) {
  const steps = [
    {
      num: '01',
      title: 'Where Does It Come From?',
      subtitle: 'ORIGIN & HARVEST BASIN',
      description: originText,
      icon: Compass,
    },
    {
      num: '02',
      title: 'How Is It Specified?',
      subtitle: 'BUYER-LED PARAMETERS',
      description:
        'Parameters including active botanical assays, moisture thresholds, mesh size, base metallurgy, or fabric construction are defined per requirement rather than generic catalog SKUs.',
      icon: FileCheck2,
    },
    {
      num: '03',
      title: 'How Is It Verified?',
      subtitle: 'INDEPENDENT ASSAY & CoA',
      description: verification.qualityTesting,
      icon: Shield,
    },
    {
      num: '04',
      title: 'How Is It Shipped?',
      subtitle: 'STRUCTURED EXPORT DISPATCH',
      description:
        'Consolidated containerization, phytosanitary clearance, Chamber of Commerce origin certification, and commercial documentation routed through Chennai and Tuticorin seaports.',
      icon: Anchor,
    },
  ];

  return (
    <section className="w-full my-16 rounded-3xl border border-white/10 bg-[#121211] p-8 md:p-12 relative overflow-hidden shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-3 py-1 mb-3">
            <Shield className="h-3 w-3 text-[#dcb782]" />
            <span className="text-[10px] font-mono tracking-widest text-[#dcb782] uppercase font-bold">
              TRUST & VERIFICATION PATHWAY
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
            Procurement Integrity for {categoryName}
          </h2>
          <p className="text-sm text-[#dfd1b9]/70 font-light mt-2 max-w-2xl leading-relaxed">
            Every sourcing contract moves through a verifiable 4-pillar assurance framework before commercial export dispatch.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/quality-compliance"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#dcb782]/30 text-[#dcb782] hover:bg-white/5 text-xs font-mono tracking-wider uppercase transition-all"
          >
            <span>Quality Framework</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/export-process"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-mono tracking-wider uppercase transition-all"
          >
            <span>Export Stages</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* 4 Connected Narrative Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 border-y border-white/10 py-4 my-8">
        {steps.map((step) => {
          return (
            <div
              key={step.num}
              className="p-6 md:px-6 md:py-8 flex flex-col justify-between transition-colors hover:bg-white/[0.015]"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-[#ab8558] font-bold tracking-widest">{step.num}</span>
                  <span className="h-[1px] w-6 bg-[#dcb782]/30" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#dcb782]">
                    {step.subtitle}
                  </span>
                </div>
                <h3 className="text-base font-heading font-medium text-white mb-2">{step.title}</h3>
                <p className="text-xs text-[#dfd1b9]/75 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Available Documentation Dossier */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#ab8558] font-bold">
            STANDARD SHIPMENT DOSSIER:
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {verification.documentationAvailable.map((doc, dIdx) => (
            <span
              key={dIdx}
              className="text-[10px] font-mono bg-white/[0.03] border border-white/10 px-3 py-1 rounded text-[#dfd1b9]/80"
            >
              {doc}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
