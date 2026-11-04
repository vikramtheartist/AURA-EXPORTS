import React, { useState, useRef } from 'react';
import { 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Globe, 
  FlaskConical,
  FileCheck2,
  AlertCircle
} from 'lucide-react';
import { submitRFQ } from '../../services/rfqService';
import { trackContactEvent } from '../../utils/analytics';

interface FinalEnquirySectionProps {
  onOpenModal?: (inquiryType: 'quotation' | 'specifications' | 'sample') => void;
}

export default function FinalEnquirySection({ onOpenModal }: FinalEnquirySectionProps) {
  const [enquiryMode, setEnquiryMode] = useState<'quotation' | 'sample'>('quotation');

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    country: '',
    destinationPort: '',
    productOfInterest: 'Salem Turmeric (Erode & Salem)',
    productForm: 'Whole Fingers / Cold-Milled Powder',
    estimatedQuantity: '',
    preferredPackaging: 'Bulk (25kg/50kg Kraft or PP Sacks)',
    technicalRequirements: '',
    additionalMessage: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const hasTriggeredFormStart = useRef(false);

  const handleFormInteraction = () => {
    if (!hasTriggeredFormStart.current) {
      hasTriggeredFormStart.current = true;
      trackContactEvent('enquiry_form_started', {
        productName: formData.productOfInterest,
        vertical: 'agro',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const payload = {
        productCategory: 'Agro Products',
        productRequirement: `[${enquiryMode.toUpperCase()}] Product: ${formData.productOfInterest} | Form: ${formData.productForm} | Packaging: ${formData.preferredPackaging} | Specs: ${formData.technicalRequirements || 'Standard export quality'}`,
        quantity: enquiryMode === 'sample' ? 'Sample lot (eval)' : (formData.estimatedQuantity || 'Commercial lot to be advised'),
        destinationCountry: formData.country,
        destinationPort: formData.destinationPort,
        timeline: enquiryMode === 'sample' ? 'Immediate sample dispatch' : '1-2 Months',
        buyerName: formData.fullName,
        companyName: formData.companyName,
        businessEmail: formData.businessEmail,
        procurementType: enquiryMode === 'sample' ? 'Product Sample Evaluation' : 'International Importer / Wholesaler',
        incoterm: 'FOB / CIF',
        additionalRequirements: formData.additionalMessage,
      };

      const result = await submitRFQ(payload);
      if (result && result.success && result.referenceId) {
        setReferenceId(result.referenceId);
        setIsSuccess(true);
        trackContactEvent('enquiry_submitted', {
          productName: formData.productOfInterest,
          vertical: 'agro',
          referenceId: result.referenceId,
          mode: enquiryMode,
        });
      } else {
        setErrorMessage(result?.message || "We couldn't submit your enquiry right now. Your information has not been confirmed as received. Please try again or contact us directly at contact@auraexport.co.");
      }
    } catch (err: any) {
      setErrorMessage(
        err.message ||
        "We couldn't submit your enquiry right now. Your information has not been confirmed as received. Please try again or contact us directly at contact@auraexport.co."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative bg-[#0A0A0B] border-t border-[#1E1E22]" id="final-enquiry-section">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#141416] border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Globe className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-mono text-[#D4AF37] tracking-[0.2em] uppercase font-bold">
              SECTION 07 · PROCUREMENT CONVERSION
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading text-[#F5F2EC] font-normal leading-tight">
            Ready to Source from India?
          </h2>

          <p className="text-sm md:text-base text-[#A5A19A] font-light leading-relaxed mt-4">
            Share your product and procurement requirements. Our team can review sourcing availability, specifications, packaging and export options.
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mt-6" />
        </div>

        {/* Unified Enquiry Card */}
        <div className="rounded-3xl border border-[#1E1E22] bg-[#141416] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {isSuccess ? (
            <div className="py-12 px-4 text-center flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold mb-2">
                ENQUIRY RECEIVED
              </span>

              <h3 className="text-2xl sm:text-3xl font-heading text-[#F5F2EC] font-medium mb-3">
                Thank you for contacting AURA Exports.
              </h3>

              <p className="text-sm text-[#A5A19A] font-light max-w-lg mb-6 leading-relaxed">
                Your enquiry has been received successfully. Our team will review your requirements and get back to you.
              </p>

              <div className="rounded-2xl bg-[#0A0A0B] border border-[#1E1E22] p-5 text-left w-full max-w-md mb-8 text-xs text-[#A5A19A] space-y-2">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/50">Enquiry Reference:</span>
                  <span className="font-mono text-[#D4AF37] font-semibold">{referenceId}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/50">Product:</span>
                  <span className="text-[#F5F2EC] font-medium">{formData.productOfInterest}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-white/50">Next Commercial Step:</span>
                  <span className="text-emerald-400 font-medium">Export Officer Review within 24 Hours</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({
                    fullName: '',
                    companyName: '',
                    businessEmail: '',
                    country: '',
                    destinationPort: '',
                    productOfInterest: 'Salem Turmeric (Erode & Salem)',
                    productForm: 'Whole Fingers / Cold-Milled Powder',
                    estimatedQuantity: '',
                    preferredPackaging: 'Bulk (25kg/50kg Kraft or PP Sacks)',
                    technicalRequirements: '',
                    additionalMessage: '',
                  });
                }}
                className="px-8 py-3 rounded-xl border border-white/15 text-white hover:bg-white/5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <div>
              {/* Form Mode Selector: Quotation vs Sample */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#1E1E22] mb-8">
                <div>
                  <h3 className="text-xl font-heading text-[#F5F2EC] font-medium">
                    Commercial Sourcing Intake
                  </h3>
                  <span className="text-xs text-[#A5A19A] font-light">
                    Direct communication with AURA&apos;s agricultural export desk. All fields support custom parameters.
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-[#0A0A0B] p-1 rounded-xl border border-[#1E1E22]">
                  <button
                    type="button"
                    onClick={() => setEnquiryMode('quotation')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                      enquiryMode === 'quotation'
                        ? 'bg-[#D4AF37] text-[#0A0A0B] font-bold shadow-sm'
                        : 'text-[#A5A19A] hover:text-white'
                    }`}
                  >
                    Quotation
                  </button>
                  <button
                    type="button"
                    onClick={() => setEnquiryMode('sample')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                      enquiryMode === 'sample'
                        ? 'bg-[#D4AF37] text-[#0A0A0B] font-bold shadow-sm'
                        : 'text-[#A5A19A] hover:text-white'
                    }`}
                  >
                    Sample Request
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} onFocus={handleFormInteraction} className="space-y-6">
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                
                {/* Row 1: Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">
                      Full Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Marcus Vance"
                      className="w-full bg-[#0A0A0B] border border-[#1E1E22] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">
                      Company Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Vance Spice Trading Ltd"
                      className="w-full bg-[#0A0A0B] border border-[#1E1E22] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">
                      Business Email <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.businessEmail}
                      onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                      placeholder="procurement@vancespices.co.uk"
                      className="w-full bg-[#0A0A0B] border border-[#1E1E22] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Row 2: Commodity & Form */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">
                      Commodity of Interest <span className="text-[#D4AF37]">*</span>
                    </label>
                    <select
                      value={formData.productOfInterest}
                      onChange={(e) => setFormData({ ...formData, productOfInterest: e.target.value })}
                      className="w-full bg-[#0A0A0B] border border-[#1E1E22] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Salem Turmeric (Erode & Salem)">Salem Turmeric (Erode & Salem)</option>
                      <option value="Malabar Black Pepper (Kerala)">Malabar Black Pepper (Kerala)</option>
                      <option value="Alleppey Green Cardamom (Kerala)">Alleppey Green Cardamom (Kerala)</option>
                      <option value="Optical Sortex Cumin (Gujarat & Rajasthan)">Optical Sortex Cumin (Gujarat & Rajasthan)</option>
                      <option value="Guntur & Byadgi Red Chillies (Andhra & Karnataka)">Guntur & Byadgi Red Chillies (Andhra & Karnataka)</option>
                      <option value="Pure Moringa Leaf Powder (Tamil Nadu)">Pure Moringa Leaf Powder (Tamil Nadu)</option>
                      <option value="Custom Agricultural Commodity Sourcing">Custom Commodity / Multiple Products</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">
                      Target Form / Grade
                    </label>
                    <input
                      type="text"
                      value={formData.productForm}
                      onChange={(e) => setFormData({ ...formData, productForm: e.target.value })}
                      placeholder="e.g. Whole fingers / 80 mesh powder"
                      className="w-full bg-[#0A0A0B] border border-[#1E1E22] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">
                      {enquiryMode === 'sample' ? 'Sample Quantity' : 'Estimated Volume (FCL/LCL)'}
                    </label>
                    <input
                      type="text"
                      value={formData.estimatedQuantity}
                      onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                      placeholder={enquiryMode === 'sample' ? 'e.g. 500g representative sample' : 'e.g. 1 x 20ft FCL (18 MT)'}
                      className="w-full bg-[#0A0A0B] border border-[#1E1E22] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Row 3: Country, Packaging & Port */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">
                      Destination Country <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. United Kingdom, UAE, Germany"
                      className="w-full bg-[#0A0A0B] border border-[#1E1E22] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">
                      Packaging Preference
                    </label>
                    <select
                      value={formData.preferredPackaging}
                      onChange={(e) => setFormData({ ...formData, preferredPackaging: e.target.value })}
                      className="w-full bg-[#0A0A0B] border border-[#1E1E22] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Bulk (25kg/50kg Kraft or PP Sacks)">Bulk (25kg / 50kg Kraft or PP Sacks)</option>
                      <option value="Retail Stand-up Barrier Pouches (100g-1kg)">Retail Stand-up Barrier Pouches (100g – 1kg)</option>
                      <option value="Private Label Custom Branded Packaging">Private Label Custom Branded Packaging</option>
                      <option value="FIBC Jumbo Bags (500kg-1000kg)">FIBC Jumbo Bags (500kg – 1000kg)</option>
                      <option value="Vacuum Sealed Packs">Vacuum Sealed Packs</option>
                      <option value="To Be Discussed">To Be Discussed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">
                      Destination Seaport / Airport
                    </label>
                    <input
                      type="text"
                      value={formData.destinationPort}
                      onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                      placeholder="e.g. Felixstowe, Rotterdam, Jebel Ali"
                      className="w-full bg-[#0A0A0B] border border-[#1E1E22] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Row 4: Technical Specifications & Message */}
                <div>
                  <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">
                    Technical Specifications or Custom Requirements
                  </label>
                  <textarea
                    rows={2}
                    value={formData.technicalRequirements}
                    onChange={(e) => setFormData({ ...formData, technicalRequirements: e.target.value })}
                    placeholder="Specify target active compounds (e.g. Curcumin min 3.5%, Piperine min 5.0%), mesh size, moisture threshold, required lab certificates, or private label details."
                    className="w-full bg-[#0A0A0B] border border-[#1E1E22] rounded-xl p-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                {/* Submit Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#1E1E22]">
                  <div className="flex items-center gap-2 text-[11px] text-[#A5A19A]">
                    <ShieldCheck className="h-4 w-4 text-[#D4AF37] shrink-0" />
                    <span>Initiates proforma review. Strictly no public pricing or binding obligation.</span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {/* Secondary CTA */}
                    <button
                      type="button"
                      onClick={() => {
                        setEnquiryMode('sample');
                        if (onOpenModal) {
                          onOpenModal('sample');
                        }
                      }}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-[#1E1E22] hover:border-[#D4AF37]/50 text-[#F5F2EC] text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <FlaskConical className="h-3.5 w-3.5 text-[#D4AF37]" />
                      <span>Request a Product Sample</span>
                    </button>

                    {/* Primary CTA */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#D4AF37] text-[#0A0A0B] font-semibold text-xs tracking-wider uppercase hover:bg-[#E5C07B] transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Request an Export Quotation</span>
                          <Send className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </form>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
