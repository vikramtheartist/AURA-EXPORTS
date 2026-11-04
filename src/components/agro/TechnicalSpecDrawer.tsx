import React, { useState, useEffect } from 'react';
import { 
  X, 
  FileText, 
  ArrowUpRight, 
  Printer, 
  ShieldCheck, 
  CheckCircle2, 
  Truck, 
  Globe2, 
  Layers, 
  AlertCircle,
  HelpCircle,
  Clock,
  Anchor,
  Box,
  MapPin,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { InstitutionalProduct } from '../../data/institutionalAgroCatalog';

interface TechnicalSpecDrawerProps {
  product: InstitutionalProduct | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuotation: (product: InstitutionalProduct, initialNotes?: string) => void;
}

export default function TechnicalSpecDrawer({
  product,
  isOpen,
  onClose,
  onRequestQuotation,
}: TechnicalSpecDrawerProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'technical' | 'logistics' | 'compliance' | 'custom'>('overview');

  // Accordion state for secondary subsections
  const [openAccordion, setOpenAccordion] = useState<string | null>('physical');

  // Prevent background body scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Keyboard navigation: Escape key closes drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const handlePrintSpecification = () => {
    window.print();
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'VERIFIED':
        return (
          <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
            <CheckCircle2 className="h-2.5 w-2.5" />
            Verified
          </span>
        );
      case 'PENDING_VERIFICATION':
        return (
          <span className="inline-flex items-center gap-1 text-[9px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
            <Clock className="h-2.5 w-2.5" />
            Pending
          </span>
        );
      case 'BUYER_SPEC_REQUIRED':
        return (
          <span className="inline-flex items-center gap-1 text-[9px] font-mono text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2 py-0.5 rounded">
            Contract Specified
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[9px] font-mono text-[#A5A19A] bg-white/5 border border-white/10 px-2 py-0.5 rounded">
            On Request
          </span>
        );
    }
  };

  const tabs = [
    { id: 'overview', label: '1. Overview & Origin' },
    { id: 'technical', label: '2. Specifications' },
    { id: 'logistics', label: '3. Packaging & Logistics' },
    { id: 'compliance', label: '4. Export Compliance' },
    { id: 'custom', label: '5. Custom Requirements' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-fadeIn">
      {/* Dark Overlay Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Slide-over Drawer Container */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={`${product.name} Technical Specifications`}
        className="relative z-10 w-full sm:max-w-xl md:max-w-2xl h-full bg-[#111113] border-l border-[#1E1E22] text-[#F5F2EC] flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out"
      >
        {/* =========================================================================
            STICKY DRAWER HEADER WITH CLEAN TYPOGRAPHY
            ========================================================================= */}
        <div className="p-6 md:p-7 border-b border-[#252527] bg-[#111113]/95 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono tracking-widest text-[#E2BC86] uppercase font-bold">
                  {product.category}
                </span>
                <span className="text-[#252527]">·</span>
                <span className="text-[10px] font-mono text-[#A5A19A]">
                  HSN {product.hsnCodes[0]?.code}
                </span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#F5F2EC] leading-tight">
                {product.name}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#A5A19A] mt-1.5">
                <div className="flex items-center gap-1.5 text-[#E2BC86]">
                  <MapPin className="h-3.5 w-3.5 text-[#E2BC86]" />
                  <span>{product.origin.displayOrigin}</span>
                </div>
                {product.botanicalName && (
                  <>
                    <span className="text-[#252527]">·</span>
                    <span className="italic">{product.botanicalName}</span>
                  </>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-[#A5A19A] hover:text-white p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer shrink-0"
              aria-label="Close specification drawer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* 5 Group Tabs Navigation */}
          <div className="flex items-center gap-1 mt-5 border-b border-[#252527] -mb-px overflow-x-auto scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-2.5 px-3 text-[11px] font-mono tracking-wider uppercase whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-[#E2BC86] text-[#E2BC86] font-bold'
                    : 'border-transparent text-[#A5A19A] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            SCROLLABLE CONTENT AREA (5 GROUPED TABS)
            ========================================================================= */}
        <div className="p-6 md:p-7 overflow-y-auto flex-1 space-y-7 font-body">
          {/* TAB 01: PRODUCT OVERVIEW & ORIGIN */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Overview Narrative */}
              <div className="bg-[#141416] border border-[#1E1E22] rounded-2xl p-5 space-y-3">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider font-bold block">
                  PRODUCT OVERVIEW
                </span>
                <p className="text-xs text-[#F5F2EC]/90 leading-relaxed font-light">
                  {product.overviewDescription}
                </p>
              </div>

              {/* Origin & Taxonomy Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs font-mono bg-[#141416] border border-[#1E1E22] rounded-2xl p-5">
                <div>
                  <span className="text-[#77736C] block">Country of Origin:</span>
                  <span className="text-[#F5F2EC] font-semibold">{product.origin.country}</span>
                </div>
                <div>
                  <span className="text-[#77736C] block">Sourcing State / Region:</span>
                  <span className="text-[#F5F2EC]">{product.origin.displayOrigin}</span>
                </div>
                <div>
                  <span className="text-[#77736C] block">Botanical Identification:</span>
                  <span className="text-[#F5F2EC] italic">{product.botanicalName}</span>
                </div>
                <div>
                  <span className="text-[#77736C] block">Standard Export Grade:</span>
                  <span className="text-[#E5C07B]">{product.grade}</span>
                </div>
              </div>

              {/* Available Commercial Forms */}
              <div>
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider font-bold block mb-2.5">
                  AVAILABLE COMMERCIAL FORMATS
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.availableForms.map((form, fIdx) => (
                    <span
                      key={fIdx}
                      className="text-xs font-mono bg-[#141416] text-[#F5F2EC] border border-[#1E1E22] px-3 py-1.5 rounded-lg"
                    >
                      {form}
                    </span>
                  ))}
                </div>
              </div>

              {/* Primary Industrial & Culinary Applications */}
              <div>
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider font-bold block mb-2.5">
                  PRIMARY INDUSTRIAL & COMMERCIAL APPLICATIONS
                </span>
                <div className="space-y-2">
                  {product.primaryApplications.map((app, aIdx) => (
                    <div
                      key={aIdx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-[#141416] border border-[#1E1E22] text-xs text-[#F5F2EC]"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {product.noteOnFormulations && (
                <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-start gap-2.5">
                  <AlertCircle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-[#E5C07B] leading-relaxed">
                    {product.noteOnFormulations}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 02: TECHNICAL & QUALITY SPECIFICATIONS */}
          {activeTab === 'technical' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Physical Parameters Table */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#D4AF37] font-bold mb-3 flex items-center gap-2">
                  <Layers className="h-3.5 w-3.5" />
                  <span>Physical & Cleanliness Specifications</span>
                </h4>
                <div className="overflow-x-auto border border-[#1E1E22] rounded-xl bg-[#0A0A0B]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#141416] text-[#A5A19A] border-b border-[#1E1E22] font-mono text-[10px] uppercase">
                      <tr>
                        <th className="py-2.5 px-3 font-semibold">Parameter</th>
                        <th className="py-2.5 px-3 font-semibold">Specification Benchmark</th>
                        <th className="py-2.5 px-3 font-semibold">Test Method / Evidence</th>
                        <th className="py-2.5 px-3 font-semibold text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1E1E22]/60 font-body">
                      {product.physicalParameters.map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-2.5 px-3 font-medium text-[#F5F2EC]">{row.parameter}</td>
                          <td className="py-2.5 px-3 text-[#E5C07B] font-mono text-[11px]">
                            {row.specification}
                          </td>
                          <td className="py-2.5 px-3 text-[#A5A19A] text-[11px]">
                            {row.testMethodOrEvidence}
                          </td>
                          <td className="py-2.5 px-3 text-right">
                            {getStatusBadge(row.status)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Chemical Parameters Table */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#D4AF37] font-bold mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Chemical & Active Assays</span>
                </h4>
                <div className="overflow-x-auto border border-[#1E1E22] rounded-xl bg-[#0A0A0B]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#141416] text-[#A5A19A] border-b border-[#1E1E22] font-mono text-[10px] uppercase">
                      <tr>
                        <th className="py-2.5 px-3 font-semibold">Parameter</th>
                        <th className="py-2.5 px-3 font-semibold">Specification Range</th>
                        <th className="py-2.5 px-3 font-semibold">Analytical Method</th>
                        <th className="py-2.5 px-3 font-semibold text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1E1E22]/60 font-body">
                      {product.chemicalParameters.map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-2.5 px-3 font-medium text-[#F5F2EC]">{row.parameter}</td>
                          <td className="py-2.5 px-3 text-[#E5C07B] font-mono text-[11px]">
                            {row.specification}
                          </td>
                          <td className="py-2.5 px-3 text-[#A5A19A] text-[11px]">
                            {row.testMethodOrEvidence}
                          </td>
                          <td className="py-2.5 px-3 text-right">
                            {getStatusBadge(row.status)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Microbiological Parameters Table */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#D4AF37] font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Microbiological Thresholds</span>
                </h4>
                <div className="overflow-x-auto border border-[#1E1E22] rounded-xl bg-[#0A0A0B]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#141416] text-[#A5A19A] border-b border-[#1E1E22] font-mono text-[10px] uppercase">
                      <tr>
                        <th className="py-2.5 px-3 font-semibold">Microbiological Agent</th>
                        <th className="py-2.5 px-3 font-semibold">Target Limit</th>
                        <th className="py-2.5 px-3 font-semibold">Testing Method</th>
                        <th className="py-2.5 px-3 font-semibold text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1E1E22]/60 font-body">
                      {product.microbiologicalParameters.map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-2.5 px-3 font-medium text-[#F5F2EC]">{row.parameter}</td>
                          <td className="py-2.5 px-3 text-[#E5C07B] font-mono text-[11px]">
                            {row.specification}
                          </td>
                          <td className="py-2.5 px-3 text-[#A5A19A] text-[11px]">
                            {row.testMethodOrEvidence}
                          </td>
                          <td className="py-2.5 px-3 text-right">
                            {getStatusBadge(row.status)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#141416] border border-[#1E1E22] text-xs text-[#A5A19A] leading-relaxed">
                <span className="font-semibold text-[#F5F2EC] block mb-1">
                  Testing & Batch Release Standard:
                </span>
                {product.qualityDocumentationNote}
              </div>
            </div>
          )}

          {/* TAB 03: PACKAGING & LOGISTICS */}
          {activeTab === 'logistics' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#D4AF37] font-bold mb-3 flex items-center gap-2">
                  <Box className="h-3.5 w-3.5" />
                  <span>Available Packaging Configurations</span>
                </h4>
                <div className="space-y-3">
                  {product.packagingOptions.map((pkg, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#141416] border border-[#1E1E22] hover:border-[#D4AF37]/30 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-[#F5F2EC]">
                          {pkg.format}
                        </span>
                        <span className="text-[10px] font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded">
                          Export Ready
                        </span>
                      </div>
                      <p className="text-xs text-[#A5A19A] mb-2">{pkg.description}</p>
                      <div className="text-[11px] font-mono text-[#77736C]">
                        <span className="text-[#E5C07B]">Primary Application:</span> {pkg.suitability}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#D4AF37] font-bold mb-3 flex items-center gap-2">
                  <Truck className="h-3.5 w-3.5" />
                  <span>Container Payload & Freight Parameters</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#141416] border border-[#1E1E22]">
                    <span className="text-[10px] font-mono text-[#77736C] uppercase block mb-1">
                      Indicative Starting MOQ
                    </span>
                    <span className="text-sm font-semibold text-[#F5F2EC] font-mono">
                      {product.logistics.indicativeMOQ}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#141416] border border-[#1E1E22]">
                    <span className="text-[10px] font-mono text-[#77736C] uppercase block mb-1">
                      Indicative Dispatch Lead Time
                    </span>
                    <span className="text-sm font-semibold text-[#F5F2EC] font-mono">
                      {product.logistics.indicativeDispatch}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#141416] border border-[#1E1E22] sm:col-span-2">
                    <span className="text-[10px] font-mono text-[#77736C] uppercase block mb-1">
                      FCL Container Stuffing Capacity (Indicative)
                    </span>
                    <span className="text-xs text-[#E5C07B] font-mono leading-relaxed block">
                      {product.logistics.containerCapacity}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#141416] border border-[#1E1E22] sm:col-span-2">
                    <span className="text-[10px] font-mono text-[#77736C] uppercase block mb-1">
                      Nominated Export Ports / Air Cargo Gateways
                    </span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {product.logistics.portsOfDispatch.map((port, pIdx) => (
                        <span
                          key={pIdx}
                          className="text-xs font-mono bg-[#0A0A0B] text-[#F5F2EC] px-2.5 py-1 rounded border border-[#1E1E22]"
                        >
                          {port}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-[#77736C] italic mt-3 leading-relaxed">
                  Notice: {product.logistics.logisticsDisclaimer}
                </p>
              </div>
            </div>
          )}

          {/* TAB 04: QUALITY DOCUMENTATION & EXPORT COMPLIANCE */}
          {activeTab === 'compliance' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#D4AF37] font-bold mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Indian Statutory Export Registrations</span>
                </h4>
                <div className="space-y-2">
                  {product.tradeRegulatory.exportRegistrations.map((reg, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-[#141416] border border-[#1E1E22] text-xs text-[#F5F2EC]"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>{reg}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#D4AF37] font-bold mb-3 flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5" />
                  <span>Mandatory Shipment Documentation</span>
                </h4>
                <div className="p-4 rounded-xl bg-[#141416] border border-[#1E1E22] space-y-2">
                  {product.tradeRegulatory.requiredDocumentation.map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#A5A19A]">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#D4AF37] font-bold mb-3 flex items-center gap-2">
                  <Globe2 className="h-3.5 w-3.5" />
                  <span>Destination Market Compliance</span>
                </h4>
                <div className="p-4 rounded-xl bg-[#141416] border border-[#1E1E22] space-y-2.5 text-xs text-[#A5A19A]">
                  {product.tradeRegulatory.destinationComplianceNotes.map((note, idx) => (
                    <p key={idx} className="leading-relaxed">
                      • {note}
                    </p>
                  ))}
                </div>
              </div>

              {product.tradeRegulatory.cepaTariffNote && (
                <div className="p-4 rounded-xl bg-[#141416] border border-[#D4AF37]/30 text-xs text-[#E5C07B] leading-relaxed">
                  <span className="font-bold text-[#F5F2EC] block mb-1 font-mono uppercase tracking-wider text-[10px]">
                    India-UAE CEPA Preferential Trade Framework:
                  </span>
                  {product.tradeRegulatory.cepaTariffNote}
                </div>
              )}
            </div>
          )}

          {/* TAB 05: CUSTOM BUYER REQUIREMENTS */}
          {activeTab === 'custom' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-[#141416] border border-[#1E1E22] rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold">
                    TAILORED SOURCING & PRIVATE-LABEL SOLUTIONS
                  </span>
                </div>
                <p className="text-xs text-[#A5A19A] leading-relaxed font-light">
                  AURA arranges origin contract sourcing to exact buyer technical parameters, active marker thresholds, destination pesticide compliance, and private-label retail or food-service packaging.
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider font-bold block mb-2.5">
                  SUPPORTED CUSTOM SPECIFICATION STREAMS
                </span>
                <div className="space-y-2">
                  {product.customRequirements.customGradesSupported.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#141416] border border-[#1E1E22] text-xs text-[#F5F2EC] flex items-center gap-2.5"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider font-bold block mb-2.5">
                  PACKAGING & PRIVATE-LABEL CAPABILITIES
                </span>
                <p className="text-xs text-[#A5A19A] leading-relaxed p-4 rounded-xl bg-[#141416] border border-[#1E1E22]">
                  {product.customRequirements.packagingTailoring} {product.customRequirements.privateLabelEnquiries}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-center">
                <h5 className="text-sm font-heading text-white font-medium mb-1">
                  Ready to specify custom requirements for {product.cardTitle}?
                </h5>
                <p className="text-xs text-[#A5A19A] mb-4">
                  Share your target assay, packaging format, and destination port.
                </p>
                <button
                  type="button"
                  onClick={() => onRequestQuotation(product, 'Custom Specification Sourcing Enquiry')}
                  className="bg-[#D4AF37] hover:bg-[#E5C07B] text-[#0A0A0B] font-mono font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Discuss Custom Specifications →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* =========================================================================
            STICKY DRAWER FOOTER
            ========================================================================= */}
        <div className="p-5 md:p-6 border-t border-[#252527] bg-[#111113]/95 backdrop-blur-md sticky bottom-0 z-20 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={() => onRequestQuotation(product, 'Sample Evaluation Request')}
            className="w-full sm:w-1/2 border border-[#252527] hover:border-white/30 hover:bg-white/[0.03] text-[#F5F2EC] py-3.5 px-4 rounded-xl text-xs font-body font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>REQUEST A SAMPLE</span>
          </button>

          <button
            type="button"
            onClick={() => onRequestQuotation(product)}
            className="w-full sm:w-1/2 bg-[#E2BC86] hover:bg-[#d4a86a] text-[#0A0A0B] py-3.5 px-4 rounded-xl font-body font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer hover:shadow-[0_8px_20px_rgba(226,188,134,0.25)]"
          >
            <span>REQUEST A QUOTATION</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </aside>
    </div>
  );
}
