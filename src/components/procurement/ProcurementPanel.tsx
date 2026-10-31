import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '../../types/procurement';

interface ProcurementPanelProps {
  product: Product;
  selectedForm?: string;
  onFormSelect?: (formId: string) => void;
  className?: string;
}

export default function ProcurementPanel({
  product,
  selectedForm,
  className = '',
}: ProcurementPanelProps) {
  const currentVariant = product.variants.find((v) => v.id === selectedForm) || product.variants[0];

  const specRows = [
    {
      label: 'PRODUCT IDENTIFIER',
      value: `${product.name} ${product.botanicalOrMaterialName ? `(${product.botanicalOrMaterialName})` : ''}`,
      note: 'Indian origin harvest basin',
    },
    {
      label: 'ORIGIN & SOURCING BASIN',
      value: product.trade.origin.value,
      note: 'Traceable regional aggregation',
    },
    {
      label: 'SELECTED PHYSICAL FORM',
      value: currentVariant.name,
      note: currentVariant.form,
      highlight: true,
    },
    {
      label: 'SPECIFICATION BASIS',
      value: 'Buyer & Batch Defined',
      note: 'Assay percentages, mesh size, moisture thresholds confirmed per contract',
    },
    {
      label: 'PACKAGING MODALITY',
      value: 'Bulk / Palletized / Private Label',
      note: 'Export-grade multi-wall bags, drums, or custom retail packs',
    },
    {
      label: 'COMMERCIAL TERMS',
      value: 'FOB · CIF (Tuticorin / Chennai Seaport & Air Cargo)',
      note: 'Incoterms 2020 governed maritime & air dispatch',
    },
    {
      label: 'VERIFICATION PROTOCOL',
      value: 'NABL Accredited / Independent Lab CoA + Phytosanitary + Certificate of Origin',
      note: 'Certified per consignment batch prior to vessel loading',
      spanFull: true,
    },
  ];

  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#121211] p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden ${className}`}
      id="aura-procurement-panel"
    >
      {/* Institutional Document Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
        <div>
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#dcb782] uppercase font-bold block mb-1">
            TRADE DESK SPECIFICATION RECORD
          </span>
          <h3 className="text-xl md:text-2xl font-heading text-white font-normal">
            Institutional Procurement Matrix
          </h3>
        </div>
        <div className="text-right sm:text-right">
          <span className="text-[10px] font-mono tracking-widest text-[#dfd1b9]/50 uppercase block">
            CLASSIFICATION
          </span>
          <span className="text-xs font-mono text-[#dcb782] tracking-wider uppercase font-semibold">
            COMMERCIAL EXPORT
          </span>
        </div>
      </div>

      {/* Clean Architectural Specification Sheet Grid */}
      <div className="divide-y divide-white/10 my-4">
        {specRows.map((row, idx) => (
          <div
            key={idx}
            className="py-4.5 sm:py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline transition-colors hover:bg-white/[0.015] px-2 rounded-lg"
          >
            <div className="md:col-span-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#ab8558] block">
                {row.label}
              </span>
            </div>
            <div className="md:col-span-8 flex flex-col">
              <span
                className={`text-sm font-body font-medium leading-snug ${
                  row.highlight ? 'text-[#dcb782]' : 'text-white'
                }`}
              >
                {row.value}
              </span>
              {row.note && (
                <span className="text-[11px] text-[#dfd1b9]/55 font-light mt-0.5 leading-relaxed">
                  {row.note}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Procurement Notice */}
      <div className="pt-4 pb-6 text-xs text-[#dfd1b9]/60 font-light border-t border-white/10 leading-relaxed">
        <span className="text-[#dcb782] font-mono text-[10px] uppercase tracking-wider font-semibold mr-1.5">
          Notice:
        </span>
        AURA operates via specification-driven sourcing contracts. Active compound targets, moisture content, mesh profiles, and packaging standards are validated against buyer criteria prior to commercial agreement.
      </div>

      {/* Unified Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-white/10">
        <Link
          to={`/request-quote?product=${product.slug}&form=${encodeURIComponent(currentVariant.id)}`}
          className="w-full sm:w-auto flex-1 bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold text-xs tracking-wider uppercase px-7 py-4 rounded-xl hover:from-white hover:to-[#dcb782] transition-all flex items-center justify-center gap-2 shadow-lg"
          id="procurement-panel-rfq-btn"
        >
          <span>Request Trade Quotation</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <Link
          to="/quality-compliance"
          className="w-full sm:w-auto px-6 py-4 rounded-xl border border-white/15 hover:border-white text-white font-body text-xs font-semibold tracking-wider uppercase hover:bg-white/5 transition-all text-center"
        >
          Review Quality Protocol
        </Link>
      </div>
    </div>
  );
}

