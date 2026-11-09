import React, { useState, useEffect, FormEvent, useRef } from 'react';
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
  Download,
  Share2,
  Eye,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { COMPANY_CONTACT } from '../config/companyContact';
import { useQuoteModal } from '../context/QuoteModalContext';
import { trackContactEvent } from '../utils/analytics';
import { submitGeneralCorrespondence } from '../services/consultationService';
import BusinessCardModal from '../components/card/BusinessCardModal';
import {
  downloadVCard,
  OFFICIAL_DIGITAL_CARD_URL,
  OFFICIAL_QR_CODE_IMAGE,
  shareBusinessCard,
} from '../utils/businessCardUtils';

export default function ContactPage() {
  const { openQuoteModal } = useQuoteModal();

  // Digital Business Card modal state
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

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
      <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-12 relative">
        {/* Flowing Gold Linear Waves (top-right header background) */}
        <div className="absolute -top-12 right-0 w-[540px] h-[380px] pointer-events-none overflow-hidden opacity-35 select-none">
          <svg viewBox="0 0 540 380" fill="none" className="w-full h-full">
            <path d="M160 0 C 270 80, 380 160, 540 180" stroke="#dcb782" strokeWidth="1" fill="none" />
            <path d="M190 0 C 295 90, 400 180, 540 210" stroke="#dcb782" strokeWidth="1" fill="none" />
            <path d="M220 0 C 320 100, 420 200, 540 240" stroke="#dcb782" strokeWidth="1" fill="none" />
            <path d="M250 0 C 345 110, 440 220, 540 270" stroke="#dcb782" strokeWidth="1" fill="none" />
            <path d="M280 0 C 370 120, 460 240, 540 300" stroke="#dcb782" strokeWidth="1" fill="none" />
            <path d="M310 0 C 395 130, 480 260, 540 330" stroke="#dcb782" strokeWidth="1" fill="none" />
            <path d="M340 0 C 420 140, 500 280, 540 360" stroke="#dcb782" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* Eyebrow: Globe icon + CONTACT & OPERATIONS */}
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#dcb782] tracking-[0.22em] uppercase font-semibold mb-3 relative z-10">
          <Globe className="h-4 w-4 text-[#dcb782]" />
          <span>CONTACT & OPERATIONS</span>
        </div>

        {/* 2-Column Split: Title & Intro Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading text-white tracking-tight leading-[1.08] font-normal">
              Get in Touch with <br className="hidden sm:inline" />
              Aura Exports
            </h1>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end gap-3.5 lg:pt-1">
            <p className="text-sm md:text-base text-[#dfd1b9]/85 font-light leading-relaxed">
              Your direct point of contact for trade enquiries, partnerships, sourcing, documentation, and operational support.
            </p>

            {/* 3 Inline Capability Badges with dividers */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs pt-0.5">
              <div className="inline-flex items-center gap-2">
                <Zap className="h-4 w-4 shrink-0 text-[#dcb782]" />
                <span className="text-white text-xs font-medium">Responsive</span>
              </div>

              <span className="text-white/20 select-none">|</span>

              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#dcb782]" />
                <span className="text-white text-xs font-medium">Trade Compliant</span>
              </div>

              <span className="text-white/20 select-none">|</span>

              <div className="inline-flex items-center gap-2">
                <Layers className="h-4 w-4 shrink-0 text-[#dcb782]" />
                <span className="text-white text-xs font-medium">End-to-End Support</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-8">
        {/* CARD 1: OUR TRADE DESK & EXECUTIVE BUSINESS CARD */}
        <section
          aria-labelledby="trade-desk-heading"
          className="rounded-[2.2rem] bg-[#0c0c0b] border border-white/10 overflow-hidden relative shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Executive Business Card Module */}
            <div className="lg:col-span-5 p-6 sm:p-8 md:p-9 bg-gradient-to-br from-[#1a150e]/70 via-[#100f0d] to-[#0c0c0b] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative">
              {/* Subtle warm glow */}
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#dcb782]/15 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10 flex flex-col">
                <span className="text-[11px] font-mono tracking-[0.25em] text-[#dcb782] uppercase font-bold mb-4">
                  EXECUTIVE BUSINESS CARD
                </span>

                {/* The Business Card */}
                <div
                  onClick={() => setIsCardModalOpen(true)}
                  className="w-full rounded-2xl bg-gradient-to-br from-[#181511] via-[#0f0e0c] to-[#080807] border border-[#dcb782]/35 p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[220px] sm:min-h-[235px] cursor-pointer group hover:border-[#dcb782]/60 transition-colors"
                  title="Click to view full interactive 3D business card"
                >
                  {/* Top-Right Guilloche Curves */}
                  <div className="absolute top-0 right-0 w-48 h-36 pointer-events-none overflow-hidden opacity-35">
                    <svg viewBox="0 0 170 130" fill="none" className="w-full h-full">
                      <path d="M40 0 C 80 30, 110 70, 170 60" stroke="#dcb782" strokeWidth="0.8" fill="none" />
                      <path d="M55 0 C 95 35, 120 75, 170 72" stroke="#dcb782" strokeWidth="0.8" fill="none" />
                      <path d="M70 0 C 110 40, 130 80, 170 84" stroke="#dcb782" strokeWidth="0.8" fill="none" />
                      <path d="M85 0 C 120 45, 140 85, 170 96" stroke="#dcb782" strokeWidth="0.8" fill="none" />
                      <path d="M100 0 C 130 50, 150 90, 170 108" stroke="#dcb782" strokeWidth="0.8" fill="none" />
                      <path d="M115 0 C 140 55, 158 95, 170 120" stroke="#dcb782" strokeWidth="0.8" fill="none" />
                    </svg>
                  </div>

                  {/* Bottom-Left Guilloche Curves */}
                  <div className="absolute bottom-0 left-0 w-48 h-36 pointer-events-none overflow-hidden opacity-35">
                    <svg viewBox="0 0 170 130" fill="none" className="w-full h-full">
                      <path d="M0 60 C 50 70, 90 110, 130 130" stroke="#dcb782" strokeWidth="0.8" fill="none" />
                      <path d="M0 72 C 55 78, 95 115, 145 130" stroke="#dcb782" strokeWidth="0.8" fill="none" />
                      <path d="M0 84 C 60 86, 100 120, 160 130" stroke="#dcb782" strokeWidth="0.8" fill="none" />
                      <path d="M0 96 C 65 94, 105 125, 170 130" stroke="#dcb782" strokeWidth="0.8" fill="none" />
                      <path d="M0 108 C 70 102, 110 130, 170 130" stroke="#dcb782" strokeWidth="0.8" fill="none" />
                    </svg>
                  </div>

                  {/* Card Center: Brand & Leaf Divider */}
                  <div className="relative z-10 flex flex-col items-center text-center pt-1">
                    <span className="font-heading text-2xl sm:text-3xl tracking-[0.25em] text-[#e8cb9b] font-normal leading-tight">
                      AURA
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.28em] text-[#dcb782] uppercase font-medium mt-1">
                      AURA ENTERPRISE EXPORTS
                    </span>
                    <div className="flex items-center justify-center gap-2 my-2 w-32 mx-auto">
                      <div className="h-[1px] bg-gradient-to-r from-transparent to-[#dcb782]/70 flex-1" />
                      <span className="text-[#dcb782] text-[10px]">❦</span>
                      <div className="h-[1px] bg-gradient-to-l from-transparent to-[#dcb782]/70 flex-1" />
                    </div>
                  </div>

                  {/* Card Bottom: Executive Name & Scannable QR Code */}
                  <div className="relative z-10 flex items-end justify-between mt-auto pt-3">
                    <div className="flex flex-col">
                      <span className="text-xl sm:text-2xl font-heading text-white tracking-wide font-normal leading-tight">
                        Vikram
                      </span>
                      <span className="text-xs sm:text-sm text-[#dcb782] italic font-serif mt-0.5">
                        Managing Director
                      </span>
                    </div>

                    <a
                      href={OFFICIAL_DIGITAL_CARD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-xl bg-white shadow-md hover:scale-105 transition-transform block shrink-0"
                      title="Scan or click to open official digital business card"
                    >
                      <img
                        src={OFFICIAL_QR_CODE_IMAGE}
                        alt="AURA Business Card QR Code"
                        className="w-16 h-16 sm:w-[68px] sm:h-[68px] object-contain"
                      />
                    </a>
                  </div>
                </div>

                {/* Below Card: Save Contact (.VCF) and Share Buttons */}
                <div className="flex items-center gap-3 mt-4">
                  <button
                    type="button"
                    onClick={() => downloadVCard()}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#dcb782] via-[#e5c493] to-[#c79c65] hover:brightness-110 text-black font-semibold text-xs tracking-wide flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.01] cursor-pointer"
                  >
                    <Download className="w-4 h-4 stroke-[2.2]" />
                    <span>Save Contact (.VCF)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => shareBusinessCard()}
                    className="py-3 px-6 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-[#dcb782]/40 text-white text-xs font-mono flex items-center justify-center gap-2 transition-colors cursor-pointer shrink-0"
                  >
                    <Share2 className="w-4 h-4 text-[#dcb782]" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Channels */}
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-9 flex flex-col justify-between gap-3.5 bg-[#0e0e0d]">
              {/* Row 1: Operating Gateway */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#121110] border border-white/10 flex items-center justify-between gap-4 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-[#dcb782]/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#dcb782]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Operating Gateway</h3>
                    <p className="text-xs text-[#dfd1b9]/90 mt-0.5">{COMPANY_CONTACT.operatingLocation}</p>
                    <p className="text-[11px] text-[#dfd1b9]/50 font-light mt-0.5">
                      Maritime Corridor: {COMPANY_CONTACT.maritimeCorridors}
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 2: Trade Desk Correspondence */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#121110] border border-white/10 flex items-center justify-between gap-4 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-[#dcb782]/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#dcb782]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Trade Desk Correspondence</h3>
                    <p className="text-xs text-[#dcb782] font-mono mt-0.5">{COMPANY_CONTACT.corporateEmail}</p>
                  </div>
                </div>
                <a
                  href={`mailto:${COMPANY_CONTACT.corporateEmail}`}
                  className="border border-white/20 hover:border-[#dcb782] text-white hover:text-[#dcb782] px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all bg-white/[0.02] shrink-0"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Us</span>
                </a>
              </div>

              {/* Row 3: Direct Telephone / Trade Line */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#121110] border border-white/10 flex items-center justify-between gap-4 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-[#dcb782]/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#dcb782]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Direct Telephone / Trade Line</h3>
                    <p className="text-xs text-[#dcb782] font-mono mt-0.5">+91 93619 90229</p>
                  </div>
                </div>
                <a
                  href={`tel:${COMPANY_CONTACT.phoneTel}`}
                  className="border border-white/20 hover:border-[#dcb782] text-white hover:text-[#dcb782] px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all bg-white/[0.02] shrink-0"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Row 4: Operating Desk Hours */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#121110] border border-white/10 flex items-center justify-between gap-4 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-[#dcb782]/30 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-[#dcb782]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Operating Desk Hours</h3>
                    <p className="text-xs text-[#dfd1b9]/90 mt-0.5">{COMPANY_CONTACT.deskHours}</p>
                    <p className="text-[11px] text-[#dfd1b9]/50 font-light mt-0.5">{COMPANY_CONTACT.operatingDays}</p>
                  </div>
                </div>
                <a
                  href={COMPANY_CONTACT.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 hover:border-[#dcb782] text-white hover:text-[#dcb782] px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all bg-white/[0.02] shrink-0"
                >
                  <CalendarDays className="w-3.5 h-3.5" />
                  <span>Schedule a Call</span>
                </a>
              </div>
            </div>
          </div>

          {/* Statutory Registration Bar */}
          <div className="border-t border-white/10 bg-[#090908] px-6 sm:px-8 md:px-10 py-4 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs text-[#dfd1b9]/70 font-mono">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/5 border border-[#dcb782]/25 flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4 text-[#dcb782]" />
              </div>
              <span className="text-white font-medium text-xs sm:text-sm whitespace-nowrap">
                Statutory Registration
              </span>
            </div>

            <span className="text-white/20 hidden md:inline select-none">|</span>

            <span className="text-white font-bold tracking-wide whitespace-nowrap">
              {COMPANY_CONTACT.legalEntity}
            </span>

            <span className="text-white/20 hidden md:inline select-none">|</span>

            <span className="whitespace-nowrap">CIN: {COMPANY_CONTACT.cin}</span>

            <span className="text-white/20 hidden md:inline select-none">|</span>

            <span className="whitespace-nowrap">IEC: {COMPANY_CONTACT.iec}</span>

            <span className="text-white/20 hidden md:inline select-none">|</span>

            <span className="whitespace-nowrap">GSTIN: Available</span>
          </div>
        </section>

        {/* CARD 2: REQUEST A TRADE QUOTE */}
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

      {/* Interactive Digital Business Card Modal */}
      <BusinessCardModal isOpen={isCardModalOpen} onClose={() => setIsCardModalOpen(false)} />
    </div>
  );
}
