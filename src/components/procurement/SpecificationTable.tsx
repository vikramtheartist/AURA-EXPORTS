import { SpecificationItem, BusinessDataState } from '../../types/procurement';
import { ShieldCheck, Info } from 'lucide-react';

interface SpecificationTableProps {
  specifications: SpecificationItem[];
  title?: string;
  subtitle?: string;
}

function renderStateBadge(state: BusinessDataState) {
  switch (state) {
    case 'VERIFIED':
      return (
        <span className="text-[10px] font-mono uppercase tracking-wider text-white/80 font-medium">
          Verified Standard
        </span>
      );
    case 'SUBJECT_TO_CONFIRMATION':
      return (
        <span className="text-[10px] font-mono uppercase tracking-wider text-[#dcb782] font-medium">
          Batch Confirmed
        </span>
      );
    case 'AVAILABLE_ON_REQUEST':
      return (
        <span className="text-[10px] font-mono uppercase tracking-wider text-[#dfd1b9]/50 font-normal">
          On Request
        </span>
      );
    default:
      return null;
  }
}

export default function SpecificationTable({
  specifications,
  title = 'Institutional Technical Specifications',
  subtitle = 'STRUCTURED PROCUREMENT PARAMETERS',
}: SpecificationTableProps) {
  return (
    <div className="w-full" id="aura-specification-section">
      <div className="flex flex-col items-center text-center mb-8">
        <span className="text-xs font-mono tracking-[0.25em] text-[#dcb782] uppercase font-bold mb-2">
          {subtitle}
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-white font-normal">
          {title}
        </h2>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#dcb782]/40 to-transparent mt-3" />
      </div>

      {/* Desktop & Tablet Table (Hidden on small mobile < 768px to eliminate horizontal scroll) */}
      <div className="hidden md:block rounded-2xl border border-white/10 bg-[#121211] overflow-hidden shadow-2xl">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02] text-[#ab8558]">
              <th className="py-4 px-6 text-[11px] font-mono font-bold tracking-widest uppercase">
                Parameter
              </th>
              <th className="py-4 px-6 text-[11px] font-mono font-bold tracking-widest uppercase text-white">
                Specification Requirement
              </th>
              <th className="py-4 px-6 text-[11px] font-mono font-bold tracking-widest uppercase text-[#dfd1b9]/60">
                Verification Protocol / Method
              </th>
              <th className="py-4 px-6 text-[11px] font-mono font-bold tracking-widest uppercase text-right">
                Data Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {specifications.map((spec, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="py-4 px-6 font-body text-xs font-bold text-white whitespace-nowrap">
                  {spec.parameter}
                </td>
                <td className="py-4 px-6 font-body text-xs text-[#dcb782] font-medium">
                  <div>{spec.requirement}</div>
                  {spec.notes && (
                    <div className="text-[10px] text-[#dfd1b9]/50 font-light mt-0.5">{spec.notes}</div>
                  )}
                </td>
                <td className="py-4 px-6 font-mono text-[11px] text-[#dfd1b9]/70">
                  {spec.testMethod || 'Standard Analytical Assay'}
                </td>
                <td className="py-4 px-6 text-right whitespace-nowrap">
                  {renderStateBadge(spec.state)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Cards (Visible only on < 768px for perfect responsive ergonomics) */}
      <div className="md:hidden flex flex-col gap-3">
        {specifications.map((spec, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl border border-white/10 bg-[#121211] flex flex-col gap-2.5 shadow-lg"
          >
            <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-2">
              <span className="text-xs font-bold text-white font-body">{spec.parameter}</span>
              {renderStateBadge(spec.state)}
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#ab8558] block">Requirement</span>
              <p className="text-xs text-[#dcb782] font-semibold mt-0.5">{spec.requirement}</p>
              {spec.notes && (
                <p className="text-[10px] text-[#dfd1b9]/60 font-light mt-1">{spec.notes}</p>
              )}
            </div>
            {spec.testMethod && (
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#dfd1b9]/60">
                <span>TEST METHOD</span>
                <span className="text-white/80">{spec.testMethod}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
