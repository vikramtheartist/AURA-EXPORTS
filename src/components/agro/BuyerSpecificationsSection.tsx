import { useState } from 'react';
import { 
  Sliders, 
  FlaskConical, 
  Layers, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  Sparkles 
} from 'lucide-react';

interface BuyerSpecificationsSectionProps {
  onOpenCustomSpecEnquiry?: (productName: string, specs: string) => void;
}

export default function BuyerSpecificationsSection({ onOpenCustomSpecEnquiry }: BuyerSpecificationsSectionProps) {
  const [selectedCommodity, setSelectedCommodity] = useState<string>('Turmeric (Curcuma Longa)');
  const [targetCurcumin, setTargetCurcumin] = useState<string>('3.5% - 4.5% (High Curcumin)');
  const [targetMesh, setTargetMesh] = useState<string>('80 - 100 Mesh (Fine Pulverized)');
  const [targetPackaging, setTargetPackaging] = useState<string>('25kg Kraft Paper with PE Liner');
  const [destinationRegion, setDestinationRegion] = useState<string>('European Union (EU MRL Compliant)');

  const handleLaunchSpecEnquiry = () => {
    const specSummary = `Category: ${selectedCommodity} | Active Assay: ${targetCurcumin} | Granularity: ${targetMesh} | Packaging: ${targetPackaging} | Destination Standard: ${destinationRegion}`;
    if (onOpenCustomSpecEnquiry) {
      onOpenCustomSpecEnquiry(selectedCommodity, specSummary);
    }
  };

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative bg-[#111110] border-t border-white/5" id="buyer-specifications-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/25 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Sliders className="h-3.5 w-3.5 text-[#dcb782]" />
            <span className="text-[11px] font-mono text-[#dcb782] tracking-[0.2em] uppercase font-bold">
              CONFIGURABLE EXPORT SPECIFICATIONS
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading text-white font-normal leading-tight">
            Have Specific Product Requirements?
          </h2>

          <p className="text-sm md:text-base text-[#D5C8B7] font-light leading-relaxed mt-4">
            Every market and buyer has different product requirements. Share your desired specifications and our team can review the sourcing and supply options.
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#dcb782]/40 to-transparent mt-6" />
        </div>

        {/* Specification Builder Workspace */}
        <div className="rounded-3xl border border-white/15 bg-[#161614] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Configurator Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] font-mono text-[#dcb782] tracking-wider uppercase font-bold block mb-1">
                  INTERACTIVE SPECIFICATION CONFIGURATOR
                </span>
                <h3 className="text-xl sm:text-2xl font-heading text-white font-medium">
                  Tailor Your Sourcing Lot Parameters
                </h3>
              </div>

              {/* 1. Commodity Selection */}
              <div>
                <label className="block text-xs font-mono text-white/70 uppercase mb-2">
                  1. Select Agricultural Commodity
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Turmeric (Curcuma Longa)',
                    'Green Cardamom',
                    'Black Pepper',
                    'Red Chillies',
                    'Moringa Leaf Powder',
                    'Fresh Onions / Drumsticks',
                  ].map((comm) => (
                    <button
                      key={comm}
                      type="button"
                      onClick={() => setSelectedCommodity(comm)}
                      className={`p-2.5 rounded-xl text-left text-xs transition-all border ${
                        selectedCommodity === comm
                          ? 'bg-[#dcb782] text-black font-semibold border-[#dcb782]'
                          : 'bg-white/5 text-white/80 border-white/5 hover:border-white/20'
                      }`}
                    >
                      {comm}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Target Active Compound / Grade */}
              <div>
                <label className="block text-xs font-mono text-white/70 uppercase mb-2">
                  2. Active Assay / Compound Threshold (HPLC Verified)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'Standard Export (2.5% - 3.0%)',
                    '3.5% - 4.5% (High Curcumin)',
                    '5.0%+ (Extract / Oleoresin Grade)',
                  ].map((assay) => (
                    <button
                      key={assay}
                      type="button"
                      onClick={() => setTargetCurcumin(assay)}
                      className={`p-2.5 rounded-xl text-left text-xs transition-all border ${
                        targetCurcumin === assay
                          ? 'bg-[#dcb782] text-black font-semibold border-[#dcb782]'
                          : 'bg-white/5 text-white/80 border-white/5 hover:border-white/20'
                      }`}
                    >
                      {assay}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Physical Granularity / Mesh Size */}
              <div>
                <label className="block text-xs font-mono text-white/70 uppercase mb-2">
                  3. Physical Cut, Mesh Size & Granularity
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'Whole Dried (Rhizomes / Pods)',
                    'Coarse Crushed (10-30 Mesh)',
                    '80 - 100 Mesh (Fine Pulverized)',
                  ].map((mesh) => (
                    <button
                      key={mesh}
                      type="button"
                      onClick={() => setTargetMesh(mesh)}
                      className={`p-2.5 rounded-xl text-left text-xs transition-all border ${
                        targetMesh === mesh
                          ? 'bg-[#dcb782] text-black font-semibold border-[#dcb782]'
                          : 'bg-white/5 text-white/80 border-white/5 hover:border-white/20'
                      }`}
                    >
                      {mesh}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Target Destination Regulatory Regime */}
              <div>
                <label className="block text-xs font-mono text-white/70 uppercase mb-2">
                  4. Destination Market Compliance Standard
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'European Union (EU MRL Compliant)',
                    'United States (US FDA Compliant)',
                    'GCC / Middle East (GSO Standards)',
                  ].map((reg) => (
                    <button
                      key={reg}
                      type="button"
                      onClick={() => setDestinationRegion(reg)}
                      className={`p-2.5 rounded-xl text-left text-xs transition-all border ${
                        destinationRegion === reg
                          ? 'bg-[#dcb782] text-black font-semibold border-[#dcb782]'
                          : 'bg-white/5 text-white/80 border-white/5 hover:border-white/20'
                      }`}
                    >
                      {reg}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Summary & Sourcing Dossier Preview (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[#dcb782]/40 bg-[#0f0f0e] p-6 shadow-xl relative">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <FlaskConical className="h-4 w-4 text-[#dcb782]" />
                    <span className="text-xs font-mono text-[#dcb782] uppercase font-bold tracking-wider">
                      Specification Sheet Draft
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white/40">
                    B2B RFQ
                  </span>
                </div>

                <div className="space-y-3 mb-6 text-xs text-[#dfd1b9]/85">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40">Commodity:</span>
                    <span className="text-white font-medium">{selectedCommodity}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40">Target Assay:</span>
                    <span className="text-[#dcb782] font-semibold">{targetCurcumin}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40">Granularity / Cut:</span>
                    <span className="text-white">{targetMesh}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40">Regulatory Target:</span>
                    <span className="text-white">{destinationRegion}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-white/40">Lab Validation:</span>
                    <span className="text-emerald-400 font-mono text-[11px]">ISO 17025 Third-Party COA</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 mb-6 text-[11px] text-[#dfd1b9]/70 leading-relaxed">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#dcb782] inline mr-1.5" />
                  AURA reviews sourcing availability directly with growers and milling centers in Tamil Nadu, Kerala & Andhra Pradesh to align with your exact specifications.
                </div>

                <button
                  onClick={handleLaunchSpecEnquiry}
                  className="w-full py-3.5 rounded-xl bg-[#dcb782] text-black font-semibold text-xs tracking-wider uppercase hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Specification Review</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
