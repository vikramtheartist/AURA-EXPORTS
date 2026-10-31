import { Link } from 'react-router-dom';
import { ArrowUpRight, HelpCircle } from 'lucide-react';

interface HowToBuyModuleProps {
  productSlug?: string;
  categorySlug?: string;
}

export default function HowToBuyModule({ productSlug, categorySlug }: HowToBuyModuleProps) {
  const steps = [
    { num: '01', title: 'Define', desc: 'Tell us your target product, form, assay, and estimated volume.' },
    { num: '02', title: 'Source', desc: 'We identify the vetted grower collective, foundry, or textile mill.' },
    { num: '03', title: 'Verify', desc: 'Product specs, testing parameters, and compliance standards are aligned.' },
    { num: '04', title: 'Sample', desc: 'Pre-production or lot samples dispatched for buyer evaluation.' },
    { num: '05', title: 'Quote', desc: 'Proforma invoice issued with transparent FOB/CIF commercial terms.' },
    { num: '06', title: 'Export', desc: 'Consignment packaged, cleared through customs, and dispatched.' },
  ];

  const rfqQuery = productSlug
    ? `?product=${productSlug}`
    : categorySlug
    ? `?category=${categorySlug}`
    : '';

  return (
    <div className="w-full my-16 rounded-3xl border border-white/10 bg-[#10100f] p-8 md:p-12 relative shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#dcb782] uppercase font-bold block mb-2">
            TRANSPARENT SOURCING SEQUENCE
          </span>
          <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
            How to Source from AURA
          </h2>
          <p className="text-xs md:text-sm text-[#dfd1b9]/70 font-light mt-1 max-w-xl">
            A structured B2B procurement pathway designed to ensure technical accuracy and commercial clarity.
          </p>
        </div>

        <Link
          to={`/request-quote${rfqQuery}`}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-xl hover:from-white hover:to-[#dcb782] transition-all shadow-lg shrink-0"
        >
          <span>Start a Requirement</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {/* 6 Sequential Sourcing Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border-y border-white/10 py-2">
        {steps.map((st) => (
          <div
            key={st.num}
            className="p-4 sm:p-5 flex flex-col justify-between transition-colors hover:bg-white/[0.015]"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-[#dcb782] font-bold tracking-wider">{st.num}</span>
                <span className="h-[1px] w-4 bg-[#dcb782]/30" />
              </div>
              <h3 className="text-sm font-heading font-medium text-white mb-1.5">{st.title}</h3>
              <p className="text-[11px] text-[#dfd1b9]/70 font-light leading-relaxed">{st.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sample Policy Callout */}
      <div className="mt-8 p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs text-[#dfd1b9]/70 font-light">
        <HelpCircle className="h-4 w-4 text-[#dcb782] shrink-0 mt-0.5" />
        <div>
          <strong className="text-white font-semibold">Institutional Sample Policy: </strong>
          Samples can be arranged for qualified sourcing requirements. Courier and sample charges may apply and can be credited against the initial commercial purchase order upon agreement.
        </div>
      </div>
    </div>
  );
}
