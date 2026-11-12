import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  Package,
  PenLine,
  Calendar,
  MapPin,
  Anchor,
  User,
  Building2,
  Mail,
  Phone,
  Scale,
  Globe,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Leaf,
  Layers,
  CheckCircle2,
  Loader2,
  ChevronDown,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/procurement/Breadcrumbs';
import { submitRFQ } from '../services/rfqService';
import { RFQRequest } from '../types/rfq';
import { COMPANY_CONTACT } from '../config/companyContact';
import { trackContactEvent } from '../utils/analytics';

const CATEGORY_OPTIONS = [
  { value: 'Agro Products (Comprehensive Agricultural Portfolio)', label: 'Agro Products (Comprehensive Agricultural Portfolio)' },
  { value: 'Spices & Botanicals (Turmeric, Pepper, Cardamom, Cumin, Chilli)', label: 'Spices & Botanicals (Turmeric, Pepper, Cardamom, Cumin, Chilli)' },
  { value: 'Moringa & Natural Plant Extracts', label: 'Moringa & Natural Plant Extracts' },
  { value: 'Fresh Agricultural Produce & Drumsticks', label: 'Fresh Agricultural Produce & Drumsticks' },
  { value: 'Grains & Pulses (Basmati & Non-Basmati Rice)', label: 'Grains & Pulses (Basmati & Non-Basmati Rice)' },
  { value: 'Fashion & Lifestyle (Indian Artisanal Craft & Jewellery)', label: 'Fashion & Lifestyle (Indian Artisanal Craft & Jewellery)' },
  { value: 'Apparel & Textiles (Heritage Handloom, Kanjivaram Silk, Fabrics)', label: 'Apparel & Textiles (Heritage Handloom, Kanjivaram Silk, Fabrics)' },
];

export default function RequestQuotePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const preselectedProduct = searchParams.get('product') || '';
  const preselectedCategory = searchParams.get('category') || '';
  const preselectedRequirement = searchParams.get('requirement') || '';

  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<{ referenceId: string } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Form State
  const [category, setCategory] = useState(CATEGORY_OPTIONS[0].value);
  const [requirementDescription, setRequirementDescription] = useState('');
  const [estimatedQuantity, setEstimatedQuantity] = useState('');
  const [targetTimeline, setTargetTimeline] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [destinationPort, setDestinationPort] = useState('');

  // Step 2 State
  const [buyerName, setBuyerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [incoterm, setIncoterm] = useState('FOB (Chennai / Tuticorin)');
  const [website, setWebsite] = useState('');
  const [additionalRequirements, setAdditionalRequirements] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const hasTriggeredFormStart = useRef(false);

  useEffect(() => {
    if (preselectedCategory) {
      const match = CATEGORY_OPTIONS.find(c =>
        c.value.toLowerCase().includes(preselectedCategory.toLowerCase())
      );
      if (match) setCategory(match.value);
    }
    if (preselectedProduct || preselectedRequirement) {
      setRequirementDescription(
        preselectedRequirement || `Sourcing quotation and specification inquiry for ${preselectedProduct.replace(/-/g, ' ')}.`
      );
    }

    if (!hasTriggeredFormStart.current) {
      hasTriggeredFormStart.current = true;
      trackContactEvent('enquiry_form_started', {
        productName: preselectedProduct || 'Trade Quote RFQ Page',
        mode: 'page',
      });
    }
  }, [preselectedCategory, preselectedProduct, preselectedRequirement]);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!requirementDescription.trim() || requirementDescription.trim().length < 5) {
      setErrorMsg('Please describe your product requirement (minimum 5 characters).');
      return;
    }

    if (!destinationCountry.trim()) {
      setErrorMsg('Please enter your destination country.');
      return;
    }

    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!buyerName.trim()) {
      setErrorMsg('Please enter your full name or representative title.');
      return;
    }

    if (!companyName.trim()) {
      setErrorMsg('Please enter your company or organization name.');
      return;
    }

    if (!businessEmail.trim() || !businessEmail.includes('@')) {
      setErrorMsg('Please provide a valid corporate email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload: RFQRequest = {
        productCategory: category,
        productRequirement: requirementDescription,
        quantity: estimatedQuantity || 'Not specified',
        timeline: targetTimeline || 'Standard scheduling',
        destinationCountry,
        destinationPort: destinationPort || 'Unspecified port',
        buyerName,
        companyName,
        businessEmail,
        phone,
        incoterm,
        website,
        additionalRequirements,
        procurementType: 'Institutional Importer',
        honeypot,
      } as any;

      const result = await submitRFQ(payload);

      setSubmittedResult({ referenceId: result.referenceId });
      // Reset form fields on confirmed success
      setRequirementDescription('');
      setEstimatedQuantity('');
      setTargetTimeline('');
      setDestinationCountry('');
      setDestinationPort('');
      setBuyerName('');
      setCompanyName('');
      setBusinessEmail('');
      setPhone('');
      setWebsite('');
      setAdditionalRequirements('');
      setHoneypot('');
    } catch (err: any) {
      setErrorMsg(
        err.message ||
        "We couldn't submit your enquiry right now. Your information has not been confirmed as received. Please try again or contact us directly at contact@auraexport.co."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full pt-28 pb-24" id="request-quote-page-view">
      <SEOHead pageKey="requestQuote" />

      {/* Semantic Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Request a Quote', href: '/request-quote' },
        ]}
        className="!max-w-5xl !px-4 sm:!px-6 md:!px-8"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
        {/* Exact 2-Column Institutional RFQ Card */}
        <div className="relative w-full rounded-[1.8rem] md:rounded-[2.2rem] bg-[#0c0c0b] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 relative p-7 sm:p-9 md:p-10 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#1c1811] via-[#100f0d] to-[#0a0a09] border-b lg:border-b-0 lg:border-r border-white/10">
            {/* Subtle Warm Top-Left Amber Glow */}
            <div className="absolute -top-28 -left-28 w-80 h-80 bg-[#dcb782]/20 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 flex flex-col">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#dcb782] uppercase font-bold">
                INSTITUTIONAL B2B TRADE DESK
              </span>

              <h1 className="text-3xl md:text-4xl font-heading text-white font-normal tracking-tight mt-3 mb-2 leading-tight">
                Request a <br className="hidden sm:inline" />
                Trade Quote
              </h1>

              <p className="text-lg md:text-xl font-heading italic text-[#dcb782] font-normal mb-5">
                Tell us what you are sourcing.
              </p>

              <p className="text-xs text-[#dfd1b9]/70 leading-relaxed font-light mb-8">
                We'll structure the requirement around product, quantity, destination and commercial terms. Sourcing contracts are customized to your technical specification and compliance <strong className="text-white font-medium">needs.</strong>
              </p>

              {/* 3 Core Value Props */}
              <div className="flex flex-col gap-5 pt-2 border-t border-white/5">
                <div className="flex items-start gap-3.5">
                  <div className="h-9 w-9 rounded-xl bg-white/5 border border-[#dcb782]/20 flex items-center justify-center shrink-0">
                    <Leaf className="h-4 w-4 text-[#dcb782]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">Wide product portfolio</h3>
                    <p className="text-[11px] text-[#dfd1b9]/60 font-light mt-0.5 leading-snug">
                      Spices, agro commodities, textiles & more
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="h-9 w-9 rounded-xl bg-white/5 border border-[#dcb782]/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-4 w-4 text-[#dcb782]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">Quality & compliance ready</h3>
                    <p className="text-[11px] text-[#dfd1b9]/60 font-light mt-0.5 leading-snug">
                      Meet global market and safety standards
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="h-9 w-9 rounded-xl bg-white/5 border border-[#dcb782]/20 flex items-center justify-center shrink-0">
                    <Layers className="h-4 w-4 text-[#dcb782]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">Flexible & scalable supply</h3>
                    <p className="text-[11px] text-[#dfd1b9]/60 font-light mt-0.5 leading-snug">
                      From trial orders to large-volume contracts
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Routing */}
            <div className="relative z-10 pt-8 mt-6 border-t border-white/5 text-[11px]">
              <span className="text-[#dfd1b9]/50 block mb-1">
                Looking for non-commercial inquiries?
              </span>
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="text-xs font-mono text-[#dcb782] hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1 font-semibold group"
              >
                <span>General Contact Desk</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Right Column (7 cols) */}
          <div className="lg:col-span-7 p-7 sm:p-9 md:p-10 flex flex-col justify-between relative bg-[#0e0e0d]">
            {submittedResult ? (
              <div className="my-auto py-8 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-[#dcb782]/10 border border-[#dcb782]/40 flex items-center justify-center mb-6 text-[#dcb782]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[#dcb782] uppercase font-bold mb-2">
                  ENQUIRY RECEIVED ON TRADE DESK
                </span>
                <h3 className="text-2xl md:text-3xl font-heading text-white font-normal mb-3">
                  Thank you for contacting AURA Exports.
                </h3>
                <p className="text-xs md:text-sm text-[#dfd1b9]/80 font-light max-w-md leading-relaxed mb-6">
                  Your enquiry has been received successfully. Our team will review your requirements and get back to you.
                </p>

                <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-[#dcb782] mb-8">
                  Enquiry Reference: <strong className="text-white">{submittedResult.referenceId}</strong>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                  <a
                    href={COMPANY_CONTACT.getWhatsAppUrl(category)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-[#dcb782]/30 text-xs font-mono text-[#dcb782] flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Connect on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedResult(null);
                      setStep(1);
                    }}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#dcb782] text-black font-body font-bold text-xs uppercase tracking-wider hover:bg-white transition-all cursor-pointer"
                  >
                    New Request
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Stepper Navigation */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-7 h-7 rounded-full text-xs font-mono font-bold flex items-center justify-center transition-colors ${
                        step === 1 ? 'bg-[#dcb782] text-black' : 'bg-white/10 text-white'
                      }`}
                    >
                      1
                    </span>
                    <span
                      className={`text-xs ${
                        step === 1 ? 'font-semibold text-white' : 'font-light text-[#dfd1b9]/60'
                      }`}
                    >
                      Procurement Requirement
                    </span>
                  </div>

                  <div className="w-10 sm:w-16 h-[1px] bg-white/15" />

                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-7 h-7 rounded-full text-xs font-mono font-bold flex items-center justify-center border transition-colors ${
                        step === 2
                          ? 'bg-[#dcb782] text-black border-[#dcb782]'
                          : 'bg-white/5 border-white/15 text-[#dfd1b9]/50'
                      }`}
                    >
                      2
                    </span>
                    <span
                      className={`text-xs ${
                        step === 2 ? 'font-semibold text-white' : 'font-light text-[#dfd1b9]/50'
                      }`}
                    >
                      Buyer Credentials & Commercials
                    </span>
                  </div>
                </div>

                {/* Error Alert */}
                {errorMsg && (
                  <div className="mb-6 p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200 text-xs flex items-center gap-2">
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* STEP 1 */}
                {step === 1 && (
                  <form onSubmit={handleNextStep} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#dfd1b9] mb-1.5">
                        Product / Category <span className="text-[#dcb782]">*</span>
                      </label>
                      <div className="relative rounded-xl bg-[#141413] border border-white/10 hover:border-[#dcb782]/40 transition-colors flex items-center">
                        <div className="pl-3.5 text-[#dcb782] pointer-events-none">
                          <Package className="h-4 w-4" />
                        </div>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="w-full bg-transparent text-white text-xs py-3.5 pl-3 pr-10 appearance-none focus:outline-none cursor-pointer"
                        >
                          {CATEGORY_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value} className="bg-[#141413] text-white">
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="h-4 w-4 text-[#dfd1b9]/60 absolute right-3.5 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#dfd1b9] mb-1.5">
                        Product Requirement Description <span className="text-[#dcb782]">*</span>
                      </label>
                      <div className="relative rounded-xl bg-[#141413] border border-white/10 hover:border-[#dcb782]/40 transition-colors p-3 flex items-start gap-2.5">
                        <PenLine className="h-4 w-4 text-[#dcb782] shrink-0 mt-0.5" />
                        <textarea
                          rows={3}
                          value={requirementDescription}
                          onChange={(e) => setRequirementDescription(e.target.value)}
                          placeholder="e.g. Turmeric fingers, premium grade for food ingredient application with certified curcumin assay."
                          className="w-full bg-transparent text-white text-xs placeholder:text-[#dfd1b9]/30 focus:outline-none resize-none leading-relaxed"
                        />
                      </div>
                      <p className="text-[11px] text-[#dfd1b9]/50 font-light mt-1.5">
                        Describe your required form, grade, target compound percentage, or processing application.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-[#dfd1b9] mb-1.5">
                          Estimated Order Volume / Quantity
                        </label>
                        <div className="rounded-xl bg-[#141413] border border-white/10 hover:border-[#dcb782]/40 transition-colors flex items-center px-3.5 py-3">
                          <Package className="h-4 w-4 text-[#dcb782] shrink-0 mr-2.5" />
                          <input
                            type="text"
                            value={estimatedQuantity}
                            onChange={(e) => setEstimatedQuantity(e.target.value)}
                            placeholder="e.g. 5 MT / 1x20ft FCL / 2,000 units"
                            className="w-full bg-transparent text-white text-xs placeholder:text-[#dfd1b9]/30 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#dfd1b9] mb-1.5">
                          Target Timeline (Optional)
                        </label>
                        <div className="rounded-xl bg-[#141413] border border-white/10 hover:border-[#dcb782]/40 transition-colors flex items-center px-3.5 py-3">
                          <Calendar className="h-4 w-4 text-[#dcb782] shrink-0 mr-2.5" />
                          <input
                            type="text"
                            value={targetTimeline}
                            onChange={(e) => setTargetTimeline(e.target.value)}
                            placeholder="e.g. Q3 shipment / immediate trial"
                            className="w-full bg-transparent text-white text-xs placeholder:text-[#dfd1b9]/30 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-[#dfd1b9] mb-1.5">
                          Destination Country <span className="text-[#dcb782]">*</span>
                        </label>
                        <div className="rounded-xl bg-[#141413] border border-white/10 hover:border-[#dcb782]/40 transition-colors flex items-center px-3.5 py-3">
                          <MapPin className="h-4 w-4 text-[#dcb782] shrink-0 mr-2.5" />
                          <input
                            type="text"
                            value={destinationCountry}
                            onChange={(e) => setDestinationCountry(e.target.value)}
                            placeholder="e.g. Germany, United States, Japan, UAE"
                            className="w-full bg-transparent text-white text-xs placeholder:text-[#dfd1b9]/30 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#dfd1b9] mb-1.5">
                          Destination Port (Where Applicable)
                        </label>
                        <div className="rounded-xl bg-[#141413] border border-white/10 hover:border-[#dcb782]/40 transition-colors flex items-center px-3.5 py-3">
                          <Anchor className="h-4 w-4 text-[#dcb782] shrink-0 mr-2.5" />
                          <input
                            type="text"
                            value={destinationPort}
                            onChange={(e) => setDestinationPort(e.target.value)}
                            placeholder="e.g. Port of Rotterdam, Hamburg, Long Beach"
                            className="w-full bg-transparent text-white text-xs placeholder:text-[#dfd1b9]/30 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-[#dcb782] via-[#e2c191] to-[#ab8558] hover:from-[#fbf3db] hover:to-[#dcb782] text-black font-body font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl hover:scale-[1.005] transition-all cursor-pointer"
                    >
                      <span>CONTINUE TO BUYER DETAILS</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-mono text-[#dcb782] hover:text-white flex items-center gap-1.5 mb-1 cursor-pointer w-fit"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                      <span>Back to Procurement Requirement</span>
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-[#dfd1b9] mb-1.5">
                          Authorized Buyer / Contact Name <span className="text-[#dcb782]">*</span>
                        </label>
                        <div className="rounded-xl bg-[#141413] border border-white/10 hover:border-[#dcb782]/40 transition-colors flex items-center px-3.5 py-3">
                          <User className="h-4 w-4 text-[#dcb782] shrink-0 mr-2.5" />
                          <input
                            type="text"
                            value={buyerName}
                            onChange={(e) => setBuyerName(e.target.value)}
                            placeholder="e.g. Alexander Vance"
                            className="w-full bg-transparent text-white text-xs placeholder:text-[#dfd1b9]/30 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#dfd1b9] mb-1.5">
                          Company Legal Name <span className="text-[#dcb782]">*</span>
                        </label>
                        <div className="rounded-xl bg-[#141413] border border-white/10 hover:border-[#dcb782]/40 transition-colors flex items-center px-3.5 py-3">
                          <Building2 className="h-4 w-4 text-[#dcb782] shrink-0 mr-2.5" />
                          <input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="e.g. Vance Global Commodities GmbH"
                            className="w-full bg-transparent text-white text-xs placeholder:text-[#dfd1b9]/30 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-[#dfd1b9] mb-1.5">
                          Corporate Email Address <span className="text-[#dcb782]">*</span>
                        </label>
                        <div className="rounded-xl bg-[#141413] border border-white/10 hover:border-[#dcb782]/40 transition-colors flex items-center px-3.5 py-3">
                          <Mail className="h-4 w-4 text-[#dcb782] shrink-0 mr-2.5" />
                          <input
                            type="email"
                            value={businessEmail}
                            onChange={(e) => setBusinessEmail(e.target.value)}
                            placeholder="e.g. a.vance@vancecommodities.com"
                            className="w-full bg-transparent text-white text-xs placeholder:text-[#dfd1b9]/30 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#dfd1b9] mb-1.5">
                          Direct Phone / WhatsApp
                        </label>
                        <div className="rounded-xl bg-[#141413] border border-white/10 hover:border-[#dcb782]/40 transition-colors flex items-center px-3.5 py-3">
                          <Phone className="h-4 w-4 text-[#dcb782] shrink-0 mr-2.5" />
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="e.g. +49 170 1234567"
                            className="w-full bg-transparent text-white text-xs placeholder:text-[#dfd1b9]/30 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-[#dfd1b9] mb-1.5">
                          Target Incoterm
                        </label>
                        <div className="relative rounded-xl bg-[#141413] border border-white/10 hover:border-[#dcb782]/40 transition-colors flex items-center">
                          <div className="pl-3.5 text-[#dcb782] pointer-events-none">
                            <Scale className="h-4 w-4" />
                          </div>
                          <select
                            value={incoterm}
                            onChange={(e) => setIncoterm(e.target.value)}
                            className="w-full bg-transparent text-white text-xs py-3 pl-3 pr-10 appearance-none focus:outline-none cursor-pointer"
                          >
                            <option value="FOB (Chennai / Tuticorin)" className="bg-[#141413]">FOB (Free on Board - Chennai/Tuticorin)</option>
                            <option value="CIF (Destination Seaport)" className="bg-[#141413]">CIF (Cost, Insurance & Freight)</option>
                            <option value="CFR (Cost & Freight)" className="bg-[#141413]">CFR (Cost and Freight)</option>
                            <option value="EXW (Ex-Works / Facility)" className="bg-[#141413]">EXW (Ex-Works / Sourcing Hub)</option>
                          </select>
                          <ChevronDown className="h-4 w-4 text-[#dfd1b9]/60 absolute right-3.5 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#dfd1b9] mb-1.5">
                          Corporate Website (Optional)
                        </label>
                        <div className="rounded-xl bg-[#141413] border border-white/10 hover:border-[#dcb782]/40 transition-colors flex items-center px-3.5 py-3">
                          <Globe className="h-4 w-4 text-[#dcb782] shrink-0 mr-2.5" />
                          <input
                            type="url"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            placeholder="e.g. https://company.com"
                            className="w-full bg-transparent text-white text-xs placeholder:text-[#dfd1b9]/30 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#dfd1b9] mb-1.5">
                        Additional Specifications or Quality Standards (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={additionalRequirements}
                        onChange={(e) => setAdditionalRequirements(e.target.value)}
                        placeholder="Mention required certifications (e.g. FSSAI, Phytosanitary, NABL, OEKO-TEX, Hallmarking), packaging formats, or payment terms."
                        className="w-full rounded-xl bg-[#141413] border border-white/10 hover:border-[#dcb782]/40 transition-colors p-3 text-white text-xs placeholder:text-[#dfd1b9]/30 focus:outline-none resize-none leading-relaxed"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-[#dcb782] via-[#e2c191] to-[#ab8558] hover:from-[#fbf3db] hover:to-[#dcb782] text-black font-body font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl hover:scale-[1.005] transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin text-black" />
                          <span>TRANSMITTING RFQ TO TRADE DESK...</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT COMMERCIAL TRADE RFQ</span>
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
