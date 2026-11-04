import React from 'react';
import { 
  Sliders, 
  FlaskConical, 
  Package, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Globe
} from 'lucide-react';

interface QualityCustomisationSectionProps {
  onOpenEnquiry?: (inquiryType: 'specifications' | 'packaging') => void;
}

export default function QualityCustomisationSection({ onOpenEnquiry }: QualityCustomisationSectionProps) {
  const capabilities = [
    {
      id: 'specifications',
      number: '01',
      title: 'Product Specifications',
      subtitle: 'Buyer-Defined Parameters',
      description: 'Sourcing lots calibrated to target technical requirements, from active assays to mesh granularity for food manufacturing, spice blending and extraction.',
      points: [
        'Calibrated active assays (Curcumin, Piperine, Capsaicin)',
        'Target moisture & volatile oil thresholds',
        'Physical particle sizing (Whole, coarse cut, 60–100+ mesh)',
        'Extraneous matter & visual defect tolerance limits',
      ],
      icon: <Sliders className="h-5 w-5 text-[#D4AF37]" />,
    },
    {
      id: 'testing-documentation',
      number: '02',
      title: 'Quality Testing & Documentation',
      subtitle: 'Accredited Laboratory Verification',
      description: 'Rigorous batch testing and verified export documentation issued by certified laboratories for every commercial container shipment.',
      points: [
        'Comprehensive Certificate of Analysis (COA) per consignment',
        'HPLC active compound assays (Spices Board / NABL labs)',
        'Microbiological screening (Salmonella, E. coli, Yeast & Mould)',
        'Multi-residue pesticide screens & heavy metals clearance',
      ],
      icon: <FlaskConical className="h-5 w-5 text-[#D4AF37]" />,
    },
    {
      id: 'flexible-packaging',
      number: '03',
      title: 'Flexible Packaging',
      subtitle: 'Bulk to Retail Formats',
      description: 'Food-grade moisture-barrier packaging engineered for long maritime transit, bulk processing, or ready-for-shelf supermarket distribution.',
      points: [
        'Bulk industrial sacks: 10kg, 25kg & 50kg Kraft paper / PP woven',
        'Consumer packaging: 100g to 1kg multi-layer barrier stand-up pouches',
        'Private label: Custom branding, barcodes and nutrition labels',
        'Containerized bulk liners & FIBC big bags available',
      ],
      icon: <Package className="h-5 w-5 text-[#D4AF37]" />,
    },
    {
      id: 'destination-requirements',
      number: '04',
      title: 'Destination-Market Requirements',
      subtitle: 'International Regulatory Compliance',
      description: 'Export execution aligned with target country import regulations, sanitary/phytosanitary standards and commercial Incoterms 2020.',
      points: [
        'APEDA & FSSAI registered export compliance protocols',
        'Phytosanitary inspection & Certificate of Origin documentation',
        'Fumigation certification and container security seal records',
        'Multimodal maritime dispatch via Chennai, Tuticorin & Cochin',
      ],
      icon: <Globe className="h-5 w-5 text-[#D4AF37]" />,
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative bg-[#0A0A0B] border-t border-[#1E1E22]" id="quality-customisation-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#141416] border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-mono text-[#D4AF37] tracking-[0.2em] uppercase font-bold">
              SECTION 05 · CAPABILITIES & QUALITY
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading text-[#F5F2EC] font-normal leading-tight">
            Specifications That Match Your Market.
          </h2>

          <p className="text-sm md:text-base text-[#A5A19A] font-light leading-relaxed mt-4">
            Every buyer has distinct technical and packaging parameters. AURA aligns regional sourcing, processing and compliance with agreed commercial specifications.
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mt-6" />
        </div>

        {/* 4 Clear Capability Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {capabilities.map((c) => (
            <div
              key={c.id}
              className="rounded-3xl border border-[#1E1E22] bg-[#141416] p-7 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-all duration-300 group shadow-lg"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#1E1E22]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#0A0A0B] border border-[#1E1E22] text-[#D4AF37] group-hover:border-[#D4AF37]/40 transition-colors">
                      {c.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block font-bold">
                        CAPABILITY {c.number}
                      </span>
                      <h3 className="text-xl font-heading text-[#F5F2EC] font-medium group-hover:text-[#E5C07B] transition-colors">
                        {c.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#A5A19A] uppercase tracking-wider hidden sm:block">
                    {c.subtitle}
                  </span>
                </div>

                <p className="text-xs text-[#A5A19A] font-light leading-relaxed mb-6">
                  {c.description}
                </p>

                {/* Key Bullet Points */}
                <ul className="space-y-2.5 mb-6">
                  {c.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#F5F2EC]/85 font-light">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#1E1E22] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#A5A19A]">
                  Aligned to buyer requirements
                </span>
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenEnquiry) {
                      onOpenEnquiry(c.id === 'flexible-packaging' ? 'packaging' : 'specifications');
                    }
                  }}
                  className="text-xs font-mono text-[#D4AF37] hover:text-[#E5C07B] uppercase font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <span>Request Customisation</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
