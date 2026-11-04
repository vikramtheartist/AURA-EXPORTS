import React from 'react';
import { 
  FileText, 
  CheckCircle, 
  Truck, 
  ArrowRight,
  Compass
} from 'lucide-react';

interface ExportProcessStepsProps {
  onOpenEnquiry?: () => void;
}

export default function ExportProcessSteps({ onOpenEnquiry }: ExportProcessStepsProps) {
  const steps = [
    {
      step: '01',
      title: 'SHARE YOUR REQUIREMENTS',
      description: 'Tell us the product, grade, quantity, packaging and destination.',
      icon: <FileText className="h-5 w-5 text-[#D4AF37]" />,
      actionLabel: 'Initiate Requirement',
    },
    {
      step: '02',
      title: 'CONFIRM SPECIFICATIONS & QUOTATION',
      description: 'Review sourcing availability, specifications and commercial terms.',
      icon: <CheckCircle className="h-5 w-5 text-[#D4AF37]" />,
      actionLabel: 'Technical Alignment',
    },
    {
      step: '03',
      title: 'COORDINATE ORDER & SHIPMENT',
      description: 'Proceed with agreed commercial arrangements, documentation and shipment planning.',
      icon: <Truck className="h-5 w-5 text-[#D4AF37]" />,
      actionLabel: 'Maritime Dispatch',
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative bg-[#0A0A0B] border-t border-[#1E1E22]" id="how-export-sourcing-works">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#141416] border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Compass className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-mono text-[#D4AF37] tracking-[0.2em] uppercase font-bold">
              SECTION 06 · EXPORT EXECUTION
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading text-[#F5F2EC] font-normal leading-tight">
            How Export Sourcing Works.
          </h2>

          <p className="text-sm md:text-base text-[#A5A19A] font-light leading-relaxed mt-4">
            A simplified three-step procurement journey connecting institutional buyers with verified Indian agricultural supply chains.
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mt-6" />
        </div>

        {/* 3 Compact Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {steps.map((s, idx) => (
            <div
              key={s.step}
              className="rounded-3xl border border-[#1E1E22] bg-[#141416] p-7 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-all duration-300 group shadow-lg relative overflow-hidden"
            >
              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#1E1E22]">
                  <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
                    STEP {s.step}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#0A0A0B] border border-[#1E1E22] group-hover:border-[#D4AF37]/40 transition-colors">
                    {s.icon}
                  </div>
                </div>

                <h3 className="text-lg font-heading text-[#F5F2EC] font-medium mb-3 group-hover:text-[#E5C07B] transition-colors leading-snug">
                  {s.title}
                </h3>

                <p className="text-xs text-[#A5A19A] font-light leading-relaxed">
                  {s.description}
                </p>
              </div>

              {idx === 0 && (
                <div className="pt-6 mt-6 border-t border-[#1E1E22]">
                  <button
                    type="button"
                    onClick={onOpenEnquiry}
                    className="w-full py-3 rounded-xl bg-[#D4AF37] text-[#0A0A0B] font-semibold text-xs tracking-wider uppercase hover:bg-[#E5C07B] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Start Step 01 Enquiry</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
