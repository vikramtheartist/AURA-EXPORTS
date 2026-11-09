import React, { useState, FormEvent, useRef } from 'react';
import {
  Globe,
  Mail,
  MapPin,
  Clock,
  Phone,
  FileText,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Zap,
  Layers,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Calendar,
  CalendarDays,
  Loader2,
  QrCode,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { COMPANY_CONTACT } from '../config/companyContact';
import { useQuoteModal } from '../context/QuoteModalContext';
import { trackContactEvent } from '../utils/analytics';
import { submitGeneralCorrespondence } from '../services/consultationService';
import BusinessCardSection from '../components/card/BusinessCardSection';

export default function ContactPage() {
  const { openQuoteModal } = useQuoteModal();

  // Accordion state for credentials in Card 1
  const [isCredentialsOpen, setIsCredentialsOpen] = useState(false);

  // Toggle state for General Inquiry Form in Card 3
  const [isGeneralFormOpen, setIsGeneralFormOpen] = useState(false);

  // General Correspondence Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    country: '',
    topic: 'Bilateral Trade Partnership',
    message: '',
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [submitError, setSubmitError] = useState<string | null>(null);

  const hasTriggeredFormStart = useRef(false);

  const handleFormInteraction = () => {
    if (!hasTriggeredFormStart.current) {
      hasTriggeredFormStart.current = true;
      trackContactEvent('enquiry_form_started', {
        productName: formData.topic,
        mode: 'general_correspondence',
      });
    }
  };

  const handleGeneralSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!formData.fullName.trim()) {
      setSubmitError('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setSubmitError('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setSubmitError('Please enter your message (minimum 5 characters).');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitGeneralCorrespondence({
        fullName: formData.fullName,
        email: formData.email,
        organization: formData.organization,
        country: formData.country,
        topic: formData.topic,
        message: formData.message,
        honeypot: formData.honeypot,
      });

      setReferenceId(result.referenceId);
      setSubmitted(true);
      // Clear form only after confirmed success
      setFormData({
        fullName: '',
        email: '',
        organization: '',
        country: '',
        topic: 'Bilateral Trade Partnership',
        message: '',
        honeypot: '',
      });
    } catch (err: any) {
      setSubmitError(
        err.message ||
        "We couldn't submit your enquiry right now. Your information has not been confirmed as received. Please try again or contact us directly at contact@auraexport.co."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full pt-28 pb-24" id="contact-page-view">
      <SEOHead pageKey="contact" />

      {/* Header Section */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-14">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#dcb782] tracking-widest uppercase font-semibold mb-4">
          <Globe className="h-4 w-4 text-[#dcb782]" />
          <span>CONTACT & OPERATIONS</span>
        </div>

        {/* 2-Column Split: Title & Intro Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1.05] font-normal">
              Get in Touch with <br className="hidden sm:inline" />
              <span className="text-[#dfd1b9]">Aura Exports</span>
            </h1>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4 lg:border-l lg:border-white/10 lg:pl-8">
            <p className="text-sm md:text-base text-[#dfd1b9]/80 font-light leading-relaxed">
              Your direct point of contact for trade enquiries, partnerships, sourcing, documentation, and operational support.
            </p>

            {/* 3 Inline Capability Badges + Business Card Link */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs">
              <div className="inline-flex items-center gap-2 text-[#dcb782]">
                <Zap className="h-4 w-4 shrink-0 text-[#dcb782]" />
                <span className="text-white text-[11px] font-medium">Responsive & Direct Communication</span>
              </div>

              <div className="inline-flex items-center gap-2 text-[#dcb782]">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#dcb782]" />
                <span className="text-white text-[11px] font-medium">Verified & Trade Compliant</span>
              </div>

              <div className="inline-flex items-center gap-2 text-[#dcb782]">
                <Layers className="h-4 w-4 shrink-0 text-[#dcb782]" />
                <span className="text-white text-[11px] font-medium">End-to-End Trade Support</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('digital-business-card-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dcb782]/15 hover:bg-[#dcb782]/25 border border-[#dcb782]/40 text-[#dcb782] text-[11px] font-mono transition-all cursor-pointer shadow-sm hover:scale-[1.02]"
              >
                <QrCode className="h-3.5 w-3.5" />
                <span>Download Business Card</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-8">
        {/* CARD 1: OUR TRADE DESK */}
        <section
          aria-labelledby="trade-desk-heading"
          className="rounded-[2rem] bg-[#0c0c0b] border border-white/10 overflow-hidden relative shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column (5 cols) */}
            <div className="lg:col-span-5 relative p-8 md:p-12 bg-gradient-to-br from-[#221a11] via-[#14120f] to-[#0c0c0b] flex flex-col justify-start overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
              {/* Warm top-left glow */}
              <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#dcb782]/20 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#dcb782] uppercase font-bold">
                  CONTACT & OPERATIONS
                </span>

                <h2
                  id="trade-desk-heading"
                  className="text-3xl md:text-4xl font-heading text-white font-normal mt-3 mb-4"
                >
                  Our Trade Desk
                </h2>

                <p className="text-sm text-[#dfd1b9]/75 font-light leading-relaxed">
                  Reach us directly through your preferred channel. Our team in Chennai is available to support your business enquiries, coordination, and documentation needs.
                </p>
              </div>
            </div>

            {/* Right Column: 4 Channels (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col gap-5 bg-[#0e0e0d]">
              {/* Row 1: Operating Gateway */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors gap-4">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-2xl bg-white/5 border border-[#dcb782]/25 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-[#dcb782]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Operating Gateway</h3>
                    <p className="text-xs text-[#dfd1b9]/80 mt-0.5">{COMPANY_CONTACT.operatingLocation}</p>
                    <p className="text-[11px] text-[#dfd1b9]/50 font-mono mt-0.5">
                      Maritime Corridor: {COMPANY_CONTACT.maritimeCorridors}
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 2: Trade Desk Correspondence */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors gap-4">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-2xl bg-white/5 border border-[#dcb782]/25 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-[#dcb782]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Trade Desk Correspondence</h3>
                    <p className="text-xs text-[#dcb782] font-mono mt-0.5">{COMPANY_CONTACT.corporateEmail}</p>
                    <p className="text-[11px] text-[#dfd1b9]/50 font-light mt-0.5">
                      Primary verified correspondence mailbox
                    </p>
                  </div>
                </div>
                <a
                  href={`mailto:${COMPANY_CONTACT.corporateEmail}`}
                  className="self-start sm:self-center border border-[#dcb782]/35 hover:border-[#dcb782] text-white hover:text-[#dcb782] px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all bg-white/[0.02]"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Email Us</span>
                </a>
              </div>

              {/* Row 3: Direct Telephone / Trade Line */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors gap-4">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-2xl bg-white/5 border border-[#dcb782]/25 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-[#dcb782]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Direct Telephone / Trade Line</h3>
                    <p className="text-xs text-[#dfd1b9]/80 font-mono mt-0.5">{COMPANY_CONTACT.phoneDisplay}</p>
                    <p className="text-[11px] text-[#dfd1b9]/50 font-light mt-0.5">
                      Chennai Trade Desk Official Representative Line
                    </p>
                  </div>
                </div>
                <a
                  href={`tel:${COMPANY_CONTACT.phoneTel}`}
                  className="self-start sm:self-center border border-[#dcb782]/35 hover:border-[#dcb782] text-white hover:text-[#dcb782] px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all bg-white/[0.02]"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Row 4: Operating Desk Hours */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors gap-4">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-2xl bg-white/5 border border-[#dcb782]/25 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-[#dcb782]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Operating Desk Hours</h3>
                    <p className="text-xs text-[#dfd1b9]/80 font-mono mt-0.5">{COMPANY_CONTACT.deskHours}</p>
                    <p className="text-[11px] text-[#dfd1b9]/50 font-light mt-0.5">
                      {COMPANY_CONTACT.operatingDays}
                    </p>
                  </div>
                </div>
                <a
                  href={COMPANY_CONTACT.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start sm:self-center border border-[#dcb782]/35 hover:border-[#dcb782] text-white hover:text-[#dcb782] px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all bg-white/[0.02]"
                >
                  <CalendarDays className="h-3.5 w-3.5 text-[#dcb782]" />
                  <span>Schedule a Call</span>
                </a>
              </div>
            </div>
          </div>

          {/* Statutory Registration Credentials Accordion Bar */}
          <div className="border-t border-white/10 bg-[#090908]">
            <button
              type="button"
              onClick={() => setIsCredentialsOpen(!isCredentialsOpen)}
              className="w-full px-6 md:px-10 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-left hover:bg-white/[0.02] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-xl bg-white/5 border border-[#dcb782]/20 flex items-center justify-center shrink-0">
                  <Building2 className="h-4 w-4 text-[#dcb782]" />
                </div>
                <span className="text-xs font-semibold text-white">
                  Statutory Registration Credentials
                </span>
              </div>

              <div className="flex items-center gap-3 text-[11px] font-mono text-[#dfd1b9]/70 flex-wrap">
                <span className="text-white font-bold">{COMPANY_CONTACT.legalEntity}</span>
                <span className="hidden sm:inline text-white/30">|</span>
                <span>CIN: {COMPANY_CONTACT.cin}</span>
                <span className="hidden sm:inline text-white/30">|</span>
                <span>IEC: {COMPANY_CONTACT.iec}</span>
                <span className="hidden sm:inline text-white/30">|</span>
                <span>GSTIN: Available</span>
                <div className="ml-2 text-[#dcb782]">
                  {isCredentialsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </div>
            </button>

            {/* Expanded Credentials Drawer */}
            {isCredentialsOpen && (
              <div className="px-6 md:px-10 pb-6 pt-2 border-t border-white/5 text-xs text-[#dfd1b9]/80 font-light flex flex-col gap-2 animate-fade-in">
                <p>
                  <strong>Registered Office:</strong> {COMPANY_CONTACT.registeredAddress}
                </p>
                <p>
                  <strong>Corporate Authority:</strong> Ministry of Corporate Affairs (MCA), Government of India.
                </p>
                <p>
                  <strong>Trade Directorate:</strong> Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industry, Government of India.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CARD 2: DIGITAL BUSINESS CARD & EXECUTIVE PASS */}
        <BusinessCardSection />

        {/* CARD 3: REQUEST A TRADE QUOTE */}
        <section
          aria-labelledby="card-quote-heading"
          className="rounded-[2rem] bg-gradient-to-r from-[#1d1710] via-[#12110f] to-[#0c0c0b] border border-white/10 p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle gold glow */}
          <div className="absolute -top-16 -left-16 w-52 h-52 bg-[#dcb782]/15 rounded-full blur-[60px] pointer-events-none" />

          <div className="flex items-start gap-4 sm:gap-5 relative z-10 max-w-2xl">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/5 border border-[#dcb782]/25 flex items-center justify-center shrink-0">
              <FileText className="h-6 w-6 text-[#dcb782]" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#dcb782] uppercase font-bold block mb-1">
                COMMERCIAL INQUIRY OR CONTAINER PRICING
              </span>
              <h2 id="card-quote-heading" className="text-2xl sm:text-3xl font-heading text-white font-normal mb-1">
                Request a Trade Quote
              </h2>
              <p className="text-xs sm:text-sm text-[#dfd1b9]/70 font-light leading-relaxed">
                For formal quotations, container load pricing (FCL/LCL), specific curcumin assays, custom packaging, or Incoterm quotations.
              </p>
            </div>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="w-full md:w-auto bg-gradient-to-r from-[#dcb782] to-[#ab8558] hover:from-[#fbf3db] hover:to-[#dcb782] text-black font-body font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* CARD 3: SUBMIT GENERAL CORRESPONDENCE */}
        <section
          aria-labelledby="card-general-heading"
          className="rounded-[2rem] bg-gradient-to-r from-[#1d1710] via-[#12110f] to-[#0c0c0b] border border-white/10 p-6 sm:p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle gold glow */}
          <div className="absolute -top-16 -left-16 w-52 h-52 bg-[#dcb782]/15 rounded-full blur-[60px] pointer-events-none" />

          {/* Top Bar / Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4 sm:gap-5 max-w-2xl">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/5 border border-[#dcb782]/25 flex items-center justify-center shrink-0">
                <Send className="h-6 w-6 text-[#dcb782]" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#dcb782] uppercase font-bold block mb-1">
                  GENERAL TRADE INQUIRY
                </span>
                <h2 id="card-general-heading" className="text-2xl sm:text-3xl font-heading text-white font-normal mb-1">
                  Submit General Correspondence
                </h2>
                <p className="text-xs sm:text-sm text-[#dfd1b9]/70 font-light leading-relaxed">
                  For bilateral partnership enquiries, vendor applications, or non-commercial correspondence.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsGeneralFormOpen(!isGeneralFormOpen)}
              className="w-full md:w-auto border border-[#dcb782]/40 hover:border-[#dcb782] text-white hover:text-[#dcb782] font-body font-bold text-xs tracking-wider uppercase px-7 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer bg-white/[0.02]"
            >
              <span>{isGeneralFormOpen ? 'CLOSE INQUIRY FORM' : 'OPEN INQUIRY FORM'}</span>
              {isGeneralFormOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>

          {/* Expandable Correspondence Form */}
          {isGeneralFormOpen && (
            <div className="relative z-10 pt-6 border-t border-white/10 animate-fade-in">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-[#dcb782]/30 flex flex-col items-center text-center max-w-md mx-auto">
                  <CheckCircle2 className="h-12 w-12 text-[#dcb782] mb-3" />
                  <h3 className="text-xl font-heading text-white font-medium mb-2">
                    Thank you for contacting AURA Exports.
                  </h3>
                  <p className="text-xs text-[#dfd1b9]/80 font-light leading-relaxed mb-4">
                    Your enquiry has been received successfully. Our team will review your requirements and get back to you.
                  </p>
                  <div className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-[#dcb782] mb-5 w-full">
                    Enquiry Reference: <strong className="text-white">{referenceId}</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setIsGeneralFormOpen(false);
                    }}
                    className="text-xs font-mono text-[#dcb782] hover:underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleGeneralSubmit} onFocus={handleFormInteraction} className="flex flex-col gap-4">
                  {/* Invisible Honeypot Field */}
                  <input
                    type="text"
                    name="contact_auth_token"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200 text-xs flex flex-col gap-2">
                      <span>{submitError}</span>
                      <div className="flex justify-end pt-1">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="text-[11px] font-bold underline hover:text-white cursor-pointer"
                        >
                          Retry Submission
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#dfd1b9] mb-1.5">
                        Full Name <span className="text-[#dcb782]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full rounded-xl bg-[#141413] border border-white/10 hover:border-[#dcb782]/40 p-3 text-white text-xs placeholder:text-[#dfd1b9]/30 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#dfd1b9] mb-1.5">
                        Corporate / Personal Email <span className="text-[#dcb782]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. eleanor.vance@vancetrade.com"
                        className="w-full rounded-xl bg-[#141413] border border-white/10 hover:border-[#dcb782]/40 p-3 text-white text-xs placeholder:text-[#dfd1b9]/30 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#dfd1b9] mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Vance Trading Collective"
                        className="w-full rounded-xl bg-[#141413] border border-white/10 hover:border-[#dcb782]/40 p-3 text-white text-xs placeholder:text-[#dfd1b9]/30 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#dfd1b9] mb-1.5">
                        Country
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. United Kingdom"
                        className="w-full rounded-xl bg-[#141413] border border-white/10 hover:border-[#dcb782]/40 p-3 text-white text-xs placeholder:text-[#dfd1b9]/30 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#dfd1b9] mb-1.5">
                      Inquiry Scope / Topic
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full rounded-xl bg-[#141413] border border-white/10 hover:border-[#dcb782]/40 p-3 text-white text-xs focus:outline-none cursor-pointer transition-colors"
                    >
                      <option value="Bilateral Trade Partnership">Bilateral Trade Partnership</option>
                      <option value="Supplier / Artisan Collective Registration">Supplier / Artisan Collective Registration</option>
                      <option value="Maritime Freight & Logistics Coordination">Maritime Freight & Logistics Coordination</option>
                      <option value="Institutional Compliance & Certification">Institutional Compliance & Certification</option>
                      <option value="General Corporate Correspondence">General Corporate Correspondence</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#dfd1b9] mb-1.5">
                      Message / Subject of Discussion <span className="text-[#dcb782]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your inquiry, proposal, or operational matter..."
                      className="w-full rounded-xl bg-[#141413] border border-white/10 hover:border-[#dcb782]/40 p-3 text-white text-xs placeholder:text-[#dfd1b9]/30 focus:outline-none resize-none transition-colors leading-relaxed"
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#dcb782] to-[#ab8558] hover:from-[#fbf3db] hover:to-[#dcb782] text-black font-body font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin text-black" />
                          <span>TRANSMITTING...</span>
                        </>
                      ) : (
                        <>
                          <span>TRANSMIT GENERAL CORRESPONDENCE</span>
                          <Send className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
