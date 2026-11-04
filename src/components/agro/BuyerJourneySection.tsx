import { 
  Compass, 
  Search, 
  FileText, 
  ShieldCheck, 
  Sliders, 
  Send, 
  Briefcase, 
  ArrowRight 
} from 'lucide-react';
import { b2bBuyerJourneySteps } from '../../data/agroOriginsData';

interface BuyerJourneySectionProps {
  onOpenEnquiry?: () => void;
}

export default function BuyerJourneySection({ onOpenEnquiry }: BuyerJourneySectionProps) {
  const stepIcons = [
    <Search className="h-5 w-5 text-[#dcb782]" key={1} />,
    <FileText className="h-5 w-5 text-[#dcb782]" key={2} />,
    <ShieldCheck className="h-5 w-5 text-[#dcb782]" key={3} />,
    <Sliders className="h-5 w-5 text-[#dcb782]" key={4} />,
    <Send className="h-5 w-5 text-[#dcb782]" key={5} />,
    <Briefcase className="h-5 w-5 text-[#dcb782]" key={6} />,
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative bg-[#0c0c0b] border-t border-white/5" id="buyer-journey-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/25 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Compass className="h-3.5 w-3.5 text-[#dcb782]" />
            <span className="text-[11px] font-mono text-[#dcb782] tracking-[0.2em] uppercase font-bold">
              ORIGIN-TO-MARKET JOURNEY
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading text-white font-normal leading-tight">
            How International Buyers Partner With AURA
          </h2>

          <p className="text-sm md:text-base text-[#D5C8B7] font-light leading-relaxed mt-4">
            A structured six-step sourcing experience designed for global importers, distributors, spice grinders and food manufacturers to transition smoothly from product discovery to international commercial execution.
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#dcb782]/40 to-transparent mt-6" />
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {b2bBuyerJourneySteps.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="rounded-3xl border border-white/10 bg-[#121210] p-6 flex flex-col justify-between hover:border-[#dcb782]/40 transition-all duration-300 group shadow-md"
            >
              <div>
                {/* Step Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono tracking-widest text-[#dcb782] uppercase font-bold">
                    STEP {step.stepNumber}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-[#dcb782]/10 transition-colors">
                    {stepIcons[idx]}
                  </div>
                </div>

                <h3 className="text-xl font-heading text-white font-medium mb-3 group-hover:text-[#dcb782] transition-colors">
                  {step.name}
                </h3>

                <p className="text-xs text-[#dfd1b9]/85 font-light leading-relaxed mb-4">
                  <strong className="text-white/90 font-medium block mb-1">Buyer Action:</strong>
                  {step.buyerAction}
                </p>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 mb-4 text-[11px] text-white/70">
                  <strong className="text-[#dcb782] block mb-0.5">AURA Support:</strong>
                  {step.auraSupport}
                </div>
              </div>

              {/* Deliverables */}
              <div className="pt-3 border-t border-white/5">
                <span className="text-[10px] font-mono text-white/40 uppercase block mb-1.5 font-bold">
                  Step Deliverables
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {step.deliverables.map((item, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-[10px] font-mono bg-white/[0.04] text-[#dfd1b9]/70 px-2 py-0.5 rounded border border-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="rounded-3xl bg-gradient-to-r from-[#181815] to-[#121210] border border-[#dcb782]/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono text-[#dcb782] tracking-wider uppercase font-bold">
              READY TO COMMENCE SOURCING EVALUATION?
            </span>
            <h3 className="text-xl md:text-2xl font-heading text-white font-medium">
              Request Samples, Origin Dossiers or a Formal Commercial Quotation
            </h3>
            <p className="text-xs text-[#dfd1b9]/75 font-light max-w-xl">
              Connect directly with our South India export desk for lot availability, laboratory assays, and freight rates to your destination port.
            </p>
          </div>

          <button
            onClick={onOpenEnquiry}
            className="px-8 py-4 rounded-xl bg-[#dcb782] text-black font-semibold text-xs tracking-wider uppercase hover:bg-white transition-all shadow-xl flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Start Sourcing Enquiry</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
