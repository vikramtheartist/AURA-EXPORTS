import { useState } from 'react';
import { 
  ShieldCheck, 
  FileCheck2, 
  FlaskConical, 
  CheckCircle2, 
  AlertCircle, 
  Globe, 
  Building2, 
  Award, 
  ChevronRight 
} from 'lucide-react';
import { qualityAssuranceSteps } from '../../data/agroOriginsData';

interface QualityAssuranceFrameworkProps {
  onOpenComplianceEnquiry?: () => void;
}

export default function QualityAssuranceFramework({ onOpenComplianceEnquiry }: QualityAssuranceFrameworkProps) {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = qualityAssuranceSteps[activeStepIndex];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative bg-[#10100f]" id="quality-assurance-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/25 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-[#dcb782]" />
            <span className="text-[11px] font-mono text-[#dcb782] tracking-[0.2em] uppercase font-bold">
              STANDARDS & TESTING PROTOCOLS
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading text-white font-normal leading-tight">
            Quality Aligned with Global Buyer Requirements
          </h2>

          <p className="text-sm md:text-base text-[#D5C8B7] font-light leading-relaxed mt-4">
            Product quality is evaluated against agreed specifications, applicable regulatory requirements and the expectations of the destination market.
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#dcb782]/40 to-transparent mt-6" />
        </div>

        {/* 5-Step Interactive Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Step Nav List (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-xs font-mono text-[#dcb782] uppercase tracking-wider font-bold mb-1">
              5-Stage Quality Assurance Workflow
            </span>
            {qualityAssuranceSteps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-[#181816] border-[#dcb782] shadow-xl'
                      : 'bg-[#121210] border-white/5 hover:border-white/15 hover:bg-[#141412]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`h-8 w-8 rounded-xl font-mono text-xs flex items-center justify-center font-bold ${
                        isActive ? 'bg-[#dcb782] text-black' : 'bg-white/5 text-white/50'
                      }`}
                    >
                      {step.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {step.title}
                      </h4>
                      <span className="text-[11px] text-[#dfd1b9]/60 font-mono">
                        {step.tagline}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`h-4 w-4 ${isActive ? 'text-[#dcb782]' : 'text-white/20'}`} />
                </div>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Showcase (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/15 bg-[#141412] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#dcb782] uppercase font-bold block mb-1">
                    STAGE {activeStep.step} DETAILS
                  </span>
                  <h3 className="text-2xl font-heading text-white font-medium">
                    {activeStep.title}
                  </h3>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 text-[#dcb782]">
                  <FlaskConical className="h-6 w-6" />
                </div>
              </div>

              <p className="text-sm text-[#dfd1b9]/85 font-light leading-relaxed mb-6">
                {activeStep.description}
              </p>

              {/* Verified Parameters */}
              <div className="mb-6">
                <span className="text-xs font-mono text-white uppercase tracking-wider block font-bold mb-3">
                  Verified Inspection & Testing Parameters
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeStep.parameters.map((param, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2 text-xs text-[#dfd1b9]/90"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#dcb782] shrink-0" />
                      <span>{param}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documentation Available */}
              <div className="pt-5 border-t border-white/10">
                <span className="text-xs font-mono text-white/50 uppercase tracking-wider block font-bold mb-3">
                  Applicable Certificates & Records
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeStep.documentation.map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 bg-[#dcb782]/10 border border-[#dcb782]/20 px-3 py-1.5 rounded-lg text-xs font-mono text-[#dcb782]"
                    >
                      <FileCheck2 className="h-3.5 w-3.5" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Standards & International Compliance Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-1">
            <span className="text-[10px] font-mono text-[#dcb782] uppercase font-bold">Regulatory Authority</span>
            <span className="text-sm font-semibold text-white">APEDA & FSSAI India</span>
            <span className="text-[11px] text-white/50">Registered export & food safety framework</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-1">
            <span className="text-[10px] font-mono text-[#dcb782] uppercase font-bold">Laboratory Standard</span>
            <span className="text-sm font-semibold text-white">ISO/IEC 17025 Accredited</span>
            <span className="text-[11px] text-white/50">HPLC assays, aflatoxin & pesticide testing</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-1">
            <span className="text-[10px] font-mono text-[#dcb782] uppercase font-bold">Global Standards</span>
            <span className="text-sm font-semibold text-white">Codex Alimentarius Aligned</span>
            <span className="text-[11px] text-white/50">International food hygiene guidelines</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-1">
            <span className="text-[10px] font-mono text-[#dcb782] uppercase font-bold">Import Corridors</span>
            <span className="text-sm font-semibold text-white">US FDA, EU MRL & GCC</span>
            <span className="text-[11px] text-white/50">Country-tailored documentation verification</span>
          </div>
        </div>

        {/* IMPORTANT MANDATORY COMPLIANCE NOTICE */}
        <div className="rounded-2xl bg-[#dcb782]/10 border border-[#dcb782]/30 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-start gap-3.5">
            <AlertCircle className="h-5 w-5 text-[#dcb782] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#dcb782] uppercase font-bold tracking-wider">
                Transparent Trade & Compliance Notice
              </span>
              <p className="text-xs text-[#dfd1b9]/90 font-light leading-relaxed max-w-3xl">
                Product specifications, testing, documentation and export requirements are aligned with the buyer&apos;s destination market and agreed product requirements, subject to applicable regulations and supplier verification. AURA facilitates verifiable third-party testing for every commercial lot.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenComplianceEnquiry}
            className="px-6 py-2.5 rounded-xl bg-[#dcb782] text-black font-semibold text-xs tracking-wider uppercase hover:bg-white transition-all shadow-md shrink-0 cursor-pointer"
          >
            Review Destination Requirements
          </button>
        </div>

      </div>
    </section>
  );
}
