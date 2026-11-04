import { 
  Package, 
  Boxes, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { agroPackagingTiers } from '../../data/agroOriginsData';

interface PackagingPrivateLabelSectionProps {
  onOpenPackagingEnquiry?: () => void;
}

export default function PackagingPrivateLabelSection({ onOpenPackagingEnquiry }: PackagingPrivateLabelSectionProps) {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative bg-[#0d0d0c] border-t border-b border-white/5" id="flexible-packaging-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/25 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Package className="h-3.5 w-3.5 text-[#dcb782]" />
            <span className="text-[11px] font-mono text-[#dcb782] tracking-[0.2em] uppercase font-bold">
              COMMERCIAL PACKAGING & PRIVATE LABEL
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading text-white font-normal leading-tight">
            Your Product. Your Packaging. Your Market.
          </h2>

          <p className="text-sm md:text-base text-[#D5C8B7] font-light leading-relaxed mt-4">
            From bulk agricultural shipments to retail-ready products, AURA offers flexible packaging discussions based on product type, buyer specifications, destination-market regulations and commercial requirements.
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#dcb782]/40 to-transparent mt-6" />
        </div>

        {/* 3 Packaging Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {agroPackagingTiers.map((tier) => (
            <div
              key={tier.id}
              className="rounded-3xl border border-white/10 bg-[#121210] p-6 sm:p-8 flex flex-col justify-between hover:border-[#dcb782]/40 transition-all duration-300 group shadow-lg"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-[#dcb782] uppercase font-bold">
                    {tier.tier.toUpperCase()} TIER
                  </span>
                  <div className="p-2 rounded-xl bg-white/5 text-[#dcb782]">
                    {tier.tier === 'bulk' && <Boxes className="h-4 w-4" />}
                    {tier.tier === 'retail' && <Package className="h-4 w-4" />}
                    {tier.tier === 'private-label' && <Sparkles className="h-4 w-4" />}
                  </div>
                </div>

                <h3 className="text-xl font-heading text-white font-medium mb-1 group-hover:text-[#dcb782] transition-colors">
                  {tier.title}
                </h3>
                <span className="text-xs text-[#dfd1b9]/70 font-mono block mb-4">
                  {tier.subtitle}
                </span>

                <p className="text-xs text-[#dfd1b9]/80 font-light leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Available Sizes */}
                <div className="mb-5 pb-5 border-b border-white/5">
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider block mb-2 font-bold">
                    Available Sizes / Capacities
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {tier.sizes.map((size, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono bg-white/[0.04] text-[#dcb782] border border-white/5 px-2.5 py-1 rounded-md"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Approved Food Contact Packaging Materials */}
                <div className="mb-6">
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider block mb-2 font-bold">
                    Packaging Materials
                  </span>
                  <ul className="space-y-2">
                    {tier.materials.map((mat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#dfd1b9]/75 font-light">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#dcb782] shrink-0 mt-0.5" />
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Customization Notes */}
              <div className="pt-4 border-t border-white/10">
                <ul className="space-y-1.5 mb-5 text-[11px] text-white/60">
                  {tier.customizationDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-[#dcb782]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onOpenPackagingEnquiry}
                  className="w-full py-3 rounded-xl border border-[#dcb782]/40 hover:bg-[#dcb782] hover:text-black text-[#dcb782] font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Discuss {tier.title.split(' ')[0]} Packaging</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Packaging Regulatory Disclosure */}
        <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#dfd1b9]/75">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-[#dcb782] shrink-0" />
            <p className="font-light">
              <strong className="text-white font-medium">Food-Contact Safety Standard:</strong>{' '}
              All packaging materials comply with applicable international food-contact migration limits (EU 10/2011, US FDA 21 CFR). Format availability depends on the specific product and destination-market import regulations.
            </p>
          </div>
          <button
            onClick={onOpenPackagingEnquiry}
            className="px-6 py-2.5 rounded-xl bg-[#dcb782] text-black font-semibold text-xs uppercase tracking-wider shrink-0 hover:bg-white transition-all shadow-md"
          >
            Discuss Custom Packaging
          </button>
        </div>

      </div>
    </section>
  );
}
