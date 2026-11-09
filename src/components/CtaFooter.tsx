import React, { useState, useRef, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, Sparkles, Globe, ShieldCheck, QrCode } from 'lucide-react';
import { submitConsultationBooking } from '../services/consultationService';
import BusinessCardModal from './card/BusinessCardModal';

const HlsVideoBg = lazy(() => import('./HlsVideoBg'));

export default function CtaFooter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [referenceId, setReferenceId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleBookCallSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter an authentic, valid corporate email address.');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }
    setStatus('loading');
    setErrorMessage('');
    try {
      const result = await submitConsultationBooking(email);
      setSubmittedEmail(email);
      setReferenceId(result.referenceId);
      setStatus('success');
      setEmail('');
    } catch (err: any) {
      console.error('Consultation booking error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Unable to submit inquiry. Please try again.');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative w-full min-h-[600px] border-t border-[#dcb782]/10 bg-black py-28 px-6 md:px-16 select-none overflow-hidden"
    >
      {/* Background HLS Video (Lazy loaded on viewport approach) */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black pointer-events-none" aria-hidden="true">
        {shouldLoadVideo && (
          <Suspense fallback={null}>
            <HlsVideoBg
              src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
              className="opacity-55"
            />
          </Suspense>
        )}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Top and Bottom Fades */}
      <div
        className="absolute top-0 left-0 right-0 w-full pointer-events-none z-1"
        style={{
          height: '200px',
          background: 'linear-gradient(to bottom, black, transparent)',
        }}
        id="cta-top-fade"
      />
      <div
        className="absolute bottom-0 left-0 right-0 w-full pointer-events-none z-1"
        style={{
          height: '200px',
          background: 'linear-gradient(to top, black, transparent)',
        }}
        id="cta-bottom-fade"
      />

      {/* Core CTA */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-10 pt-8">
        <div className="flex flex-col gap-4 items-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-4 py-1.5 shadow-sm">
            <Globe className="h-3.5 w-3.5 text-[#dcb782]" />
            <span className="text-xs font-mono text-[#dcb782] tracking-wider uppercase font-semibold">
              COMMERCIAL TRADE CONSULTATION
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#dcb782] tracking-tight font-bold"
            id="cta-heading"
          >
            Initiate your trade relationship today.
          </h2>
          <p
            className="text-[#dfd1b9]/75 font-body font-light text-sm md:text-base leading-relaxed max-w-xl mx-auto"
            id="cta-desc"
          >
            Connect directly with our Chennai trade desk officers. Establish reliable recurring supply corridors, review laboratory assay certifications, and schedule export consignments.
          </p>
        </div>

        {/* Quick Consultation Form */}
        <form
          onSubmit={handleBookCallSubmit}
          className="w-full max-w-md flex flex-col sm:flex-row items-center gap-3 bg-black/60 border border-[#dcb782]/20 p-1.5 rounded-full backdrop-blur-md relative"
          id="cta-booking-form"
        >
          <input
            type="email"
            placeholder="Enter corporate email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading' || status === 'success'}
            className="flex-1 bg-transparent px-5 py-2.5 text-sm text-[#fbfbeb] placeholder-[#dfd1b9]/40 focus:outline-none font-body font-light w-full"
            id="cta-email-input"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="w-full sm:w-auto bg-gradient-to-r from-[#dcb782] to-[#ab8558] hover:from-[#fbf3db] hover:to-[#dcb782] text-black px-6 py-2.5 rounded-full text-xs font-bold font-body tracking-wider uppercase cursor-pointer flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform shrink-0"
            id="cta-book-submit"
          >
            {status === 'loading' ? (
              <span className="h-4 w-4 border-2 border-black border-t-transparent animate-spin rounded-full" />
            ) : status === 'success' ? (
              <span className="flex items-center gap-1">
                <Check className="h-4 w-4" /> Inquiry Received
              </span>
            ) : (
              <span className="flex items-center gap-1">
                Book Consultation <ArrowUpRight className="h-4 w-4" />
              </span>
            )}
          </button>
        </form>

        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
              className="flex flex-col sm:flex-row items-center gap-3 text-[#fbfbeb] bg-white/5 border border-[#dcb782]/40 rounded-2xl px-6 py-4 text-xs font-body backdrop-blur-xl mt-3 shadow-[0_10px_35px_rgba(0,0,0,0.8)] max-w-xl text-center sm:text-left"
              id="cta-success-message"
            >
              <div className="h-9 w-9 rounded-full bg-[#dcb782]/20 border border-[#dcb782]/40 flex items-center justify-center shrink-0">
                <Check className="h-5 w-5 text-[#dcb782]" />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <span className="font-heading font-medium text-white text-sm">
                  We received your inquiry.
                </span>
                <span className="text-[#dfd1b9]/85 font-light leading-relaxed">
                  Thank you! Our trade desk officer has been notified and will review your consultation request and contact you at <strong className="text-white font-mono">{submittedEmail}</strong> promptly.
                </span>
                {referenceId && (
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-[11px] font-mono">
                    <span className="text-[#dcb782] tracking-wider uppercase font-semibold">
                      Enquiry Reference: {referenceId}
                    </span>
                    <span className="text-white/30 hidden sm:inline">·</span>
                    <a
                      href={`mailto:contact@auraexport.co?subject=Trade%20Desk%20Consultation%20${referenceId}&body=Hello%20Aura%20Exports,%0A%0ARequesting%20consultation%20follow-up%20for%20reference%20${referenceId}.%0AEmail:%20${encodeURIComponent(submittedEmail)}`}
                      className="text-[#dcb782] hover:text-white underline transition-colors"
                      id="cta-mailto-backup"
                    >
                      Email Direct ↗
                    </a>
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="text-[11px] font-mono text-[#dcb782] hover:text-white underline cursor-pointer shrink-0 mt-2 sm:mt-0 sm:ml-2"
              >
                Submit another
              </button>
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-300 bg-red-500/10 border border-red-500/20 rounded-full px-5 py-2 text-xs font-body backdrop-blur-lg mt-1"
              id="cta-error-message"
            >
              {errorMessage || 'Please enter an authentic, valid corporate email.'}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Executive Digital Business Card & Contact Pass Trigger */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => setIsCardModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-[#dcb782]/40 hover:border-[#dcb782] text-xs font-mono text-[#dcb782] hover:text-white transition-all shadow-md cursor-pointer group"
          >
            <QrCode className="w-3.5 h-3.5 text-[#dcb782] group-hover:scale-110 transition-transform" />
            <span>Download Executive Business Card</span>
          </button>
        </div>

        {/* Corporate Legal & Navigation Footer */}
        <div
          className="w-full mt-24 pt-8 border-t border-[#dcb782]/10 flex flex-col md:flex-row justify-between items-center bg-transparent gap-6 text-center md:text-left"
          id="footer-bar"
        >
          {/* Entity Identification */}
          <div className="flex flex-col gap-1 select-text">
            <span className="text-[#dfd1b9]/70 font-body font-normal text-xs">
              © {currentYear} Aura Exports.
            </span>
            <span className="text-[#dfd1b9]/40 font-mono font-light text-[11px]">
              Operating Base: Chennai, Tamil Nadu, India | Port Corridors: Chennai & Tuticorin
            </span>
          </div>

          {/* Canonical Internal Footer Links */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 sm:gap-5" id="footer-links">
            <Link
              to="/about"
              className="text-[#dfd1b9]/50 hover:text-[#dcb782] font-body font-light text-xs transition-colors"
            >
              About
            </Link>
            <Link
              to="/export-process"
              className="text-[#dfd1b9]/50 hover:text-[#dcb782] font-body font-light text-xs transition-colors"
            >
              Export Process
            </Link>
            <Link
              to="/faqs"
              className="text-[#dfd1b9]/50 hover:text-[#dcb782] font-body font-light text-xs transition-colors"
            >
              FAQs
            </Link>
            <Link
              to="/contact"
              className="text-[#dfd1b9]/50 hover:text-[#dcb782] font-body font-light text-xs transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/quality-compliance"
              className="text-[#dfd1b9]/50 hover:text-[#dcb782] font-body font-light text-xs transition-colors"
            >
              Quality & Compliance
            </Link>
            <Link
              to="/terms-of-trade"
              className="text-[#dfd1b9]/50 hover:text-[#dcb782] font-body font-light text-xs transition-colors"
            >
              Terms of Trade
            </Link>
            <Link
              to="/terms"
              className="text-[#dfd1b9]/50 hover:text-[#dcb782] font-body font-light text-xs transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              to="/privacy"
              className="text-[#dfd1b9]/50 hover:text-[#dcb782] font-body font-light text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/request-quote"
              className="text-[#dcb782] hover:text-white font-mono text-xs uppercase tracking-wider transition-colors font-medium ml-2"
            >
              Request Quote →
            </Link>
          </div>
        </div>
      </div>

      {/* Interactive Business Card Modal */}
      <BusinessCardModal isOpen={isCardModalOpen} onClose={() => setIsCardModalOpen(false)} />
    </footer>
  );
}
