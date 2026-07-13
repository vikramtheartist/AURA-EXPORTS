import { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform, useMotionValueEvent, useMotionValue, motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import BlurText from './BlurText';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const partners = ['Asia-Pacific', 'Americas', 'Europe', 'Middle East', 'Africa'];
  
  // High-performance scroll tracking via Framer Motion
  const { scrollY } = useScroll();
  const [vh, setVh] = useState(800);
  const [isVisible, setIsVisible] = useState(true);
  const [hasPassed40, setHasPassed40] = useState(false);
  const [video2Finished, setVideo2Finished] = useState(false);
  const [video1Loaded, setVideo1Loaded] = useState(false);
  const [video2Loaded, setVideo2Loaded] = useState(false);

  const lastScrollY = useRef(0);
  const video2TimeRef = useRef(0);
  const lastPostedTimeRef = useRef(0);
  const isReversingRef = useRef(false);

  useEffect(() => {
    setVh(window.innerHeight);
    const handleResize = () => setVh(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set up fallback timeout to ensure preloader is hidden even under poor network conditions
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideo1Loaded(true);
      setVideo2Loaded(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  // Monitor scroll height, update viewport states, and control title-relative fade out
  const titleFadeOpacity = useMotionValue(1);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest < 2.5 * vh);

    const element = document.getElementById("sourcing-header");
    if (element) {
      const rect = element.getBoundingClientRect();
      const vhVal = window.innerHeight || 800;
      const ratio = rect.top / vhVal;

      if (ratio >= 0.30) {
        titleFadeOpacity.set(1);
      } else if (ratio <= 0.10) {
        titleFadeOpacity.set(0);
      } else {
        const opacityVal = (ratio - 0.10) / 0.20;
        titleFadeOpacity.set(Math.max(0, Math.min(1, opacityVal)));
      }
    } else {
      titleFadeOpacity.set(1);
    }

    const delta = latest - lastScrollY.current;
    lastScrollY.current = latest;

    const iframe2 = iframe2Ref.current;
    const passed = latest >= 40;
    if (passed !== hasPassed40) {
      setHasPassed40(passed);
    }

    if (latest >= 40) {
      if (delta < 0) {
        // Scrolling UP - play/seek in reverse!
        if (!isReversingRef.current) {
          isReversingRef.current = true;
          if (iframe2?.contentWindow) {
            iframe2.contentWindow.postMessage(JSON.stringify({ method: 'pause' }), '*');
          }
        }
        const secondsToSubtract = Math.abs(delta) * 0.015;
        const targetTime = Math.max(0, video2TimeRef.current - secondsToSubtract);
        video2TimeRef.current = targetTime;
        setVideo2Finished(false); // Make sure it stays visible when reversing
        if (iframe2?.contentWindow && (Math.abs(targetTime - lastPostedTimeRef.current) >= 0.04 || targetTime === 0)) {
          lastPostedTimeRef.current = targetTime;
          iframe2.contentWindow.postMessage(JSON.stringify({ method: 'setCurrentTime', value: targetTime }), '*');
        }
      } else if (delta > 0) {
        // Scrolling DOWN - resume forward play at 2x if we were reversing
        if (isReversingRef.current) {
          isReversingRef.current = false;
          if (iframe2?.contentWindow) {
            iframe2.contentWindow.postMessage(JSON.stringify({ method: 'setPlaybackRate', value: 2 }), '*');
            iframe2.contentWindow.postMessage(JSON.stringify({ method: 'play' }), '*');
          }
        }
      }
    } else {
      isReversingRef.current = false;
    }
  });

  // Once the content on the hero section scrolls up by 40px, the old video fades out, and the new video fades in.
  const video1Opacity = useTransform(scrollY, [0, 40, 120], [0.85, 0.85, 0]);
  const video2EntryOpacity = useTransform(scrollY, [0, 40, 120], [0, 0, 0.85]);
  const video2Opacity = useTransform(
    [video2EntryOpacity, titleFadeOpacity],
    ([v2, tFade]) => (v2 as number) * (tFade as number)
  );

  // Parallax subtle text translation and fade-out as we scroll down
  const contentY = useTransform(scrollY, [0, 0.8 * vh], [0, -60]);
  const contentOpacity = useTransform(scrollY, [0, 0.7 * vh], [1, 0]);

  // Refs for controlling video play/pause states via message passing
  const iframe1Ref = useRef<HTMLIFrameElement>(null);
  const iframe2Ref = useRef<HTMLIFrameElement>(null);

  // Listen to the Vimeo finish and timeupdate events to manage visibility and time tracking
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (data) {
          const isFromIframe1 = iframe1Ref.current && event.source === iframe1Ref.current.contentWindow;
          const isFromIframe2 = iframe2Ref.current && event.source === iframe2Ref.current.contentWindow;

          // If from Iframe 1 (Primary background video)
          if (isFromIframe1) {
            if (data.event === 'ready' || data.method === 'ready' || data.event === 'play') {
              setVideo1Loaded(true);
            }
          }

          // If from Iframe 2 (Secondary scroll video)
          if (isFromIframe2) {
            if (data.event === 'ready' || data.method === 'ready' || data.event === 'play' || data.event === 'timeupdate') {
              setVideo2Loaded(true);
            }
            if (data.event === 'finish') {
              setVideo2Finished(true);
            } else if (data.event === 'timeupdate' && data.data) {
              // Only update time tracking if we are not currently active in reverse mode
              if (!isReversingRef.current) {
                video2TimeRef.current = data.data.seconds;
              }
            }
          }
        }
      } catch (e) {
        // Ignore JSON parse errors from other postMessages
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    const iframe1 = iframe1Ref.current;
    const iframe2 = iframe2Ref.current;

    if (hasPassed40) {
      // Pause Video 1, Play Video 2
      if (iframe1?.contentWindow) {
        iframe1.contentWindow.postMessage(JSON.stringify({ method: 'pause' }), '*');
      }
      if (iframe2?.contentWindow) {
        // Register finish and timeupdate event listeners in case they haven't been registered yet
        iframe2.contentWindow.postMessage(JSON.stringify({ method: 'addEventListener', value: 'finish' }), '*');
        iframe2.contentWindow.postMessage(JSON.stringify({ method: 'addEventListener', value: 'timeupdate' }), '*');
        // Reset and play Video 2 once at 2x speed
        iframe2.contentWindow.postMessage(JSON.stringify({ method: 'setCurrentTime', value: 0 }), '*');
        iframe2.contentWindow.postMessage(JSON.stringify({ method: 'setPlaybackRate', value: 2 }), '*');
        iframe2.contentWindow.postMessage(JSON.stringify({ method: 'play' }), '*');
      }
    } else {
      // Play Video 1, Pause Video 2, and reset finished state
      setVideo2Finished(false);
      if (iframe1?.contentWindow) {
        iframe1.contentWindow.postMessage(JSON.stringify({ method: 'play' }), '*');
      }
      if (iframe2?.contentWindow) {
        iframe2.contentWindow.postMessage(JSON.stringify({ method: 'pause' }), '*');
      }
    }
  }, [hasPassed40]);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-black flex flex-col"
      style={{ height: '130vh' }}
    >
      <AnimatePresence>
        {!(video1Loaded && video2Loaded) && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center select-none"
            id="hero-preloader"
          >
            <div className="relative flex flex-col items-center">
              {/* Elegant pulsing logo symbol/text */}
              <motion.span 
                initial={{ opacity: 0.3, letterSpacing: "0.15em" }}
                animate={{ opacity: [0.3, 1, 0.3], letterSpacing: ["0.15em", "0.25em", "0.15em"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="text-2xl font-sans text-[#dcb782] mb-6 font-light uppercase tracking-[0.25em]"
                id="hero-loader-title"
              >
                AURA
              </motion.span>
              
              {/* Minimalist sleek gold loading line */}
              <div className="w-24 h-[1px] bg-[#dcb782]/20 relative overflow-hidden rounded-full" id="hero-loader-bar-bg">
                <motion.div 
                  className="absolute top-0 bottom-0 left-0 bg-[#dcb782] w-1/2"
                  animate={{ 
                    left: ["-50%", "100%"]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.8, 
                    ease: "easeInOut" 
                  }}
                  id="hero-loader-bar-fill"
                />
              </div>

              {/* Minimalist subtext */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-[10px] text-[#fbfbeb] font-body tracking-[0.1em] uppercase mt-4 font-light animate-pulse"
                id="hero-loader-subtitle"
              >
                Sourcing Precision
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Video (Fixed/Static Wrapper) */}
      {isVisible && (
        <div 
          className="fixed inset-0 w-full h-screen overflow-hidden pointer-events-none z-0 select-none bg-black" 
          id="hero-bg-container"
        >
          {/* Video 1 (At the top) */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            id="hero-video-1-wrap"
            style={{ opacity: video1Opacity }}
          >
            <iframe
              ref={iframe1Ref}
              src="https://player.vimeo.com/video/1209648490?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&playsinline=1&api=1"
              onLoad={() => {
                setTimeout(() => {
                  setVideo1Loaded(true);
                }, 600);
              }}
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-full min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none scale-[1.05] brightness-[0.7]"
              allow="autoplay; fullscreen"
              title="Hero Background Video 1"
              frameBorder="0"
              id="hero-bg-vimeo-iframe-1"
            />
          </motion.div>

          {/* Video 2 (When scrolled, no background=1 parameter to allow loop=0 control) */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            id="hero-video-2-wrap"
            style={{ 
              opacity: video2Finished ? 0 : video2Opacity,
              transition: video2Finished ? 'opacity 0.5s ease-in-out' : 'none'
            }}
          >
            <iframe
              ref={iframe2Ref}
              src="https://player.vimeo.com/video/1209646687?autoplay=0&loop=0&controls=0&muted=1&byline=0&title=0&portrait=0&playsinline=1&api=1"
              onLoad={() => {
                setTimeout(() => {
                  setVideo2Loaded(true);
                  if (iframe2Ref.current?.contentWindow) {
                    iframe2Ref.current.contentWindow.postMessage(JSON.stringify({ method: 'addEventListener', value: 'finish' }), '*');
                    iframe2Ref.current.contentWindow.postMessage(JSON.stringify({ method: 'addEventListener', value: 'timeupdate' }), '*');
                  }
                }, 600);
              }}
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-full min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none scale-[1.05] brightness-[0.7]"
              allow="autoplay; fullscreen"
              title="Hero Background Video 2"
              frameBorder="0"
              id="hero-bg-vimeo-iframe-2"
            />
          </motion.div>

          {/* Dark tint overlay */}
          <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" id="hero-tint-overlay" />

          {/* Bottom gradient fade: transparent to solid black */}
          <div
            className="absolute bottom-0 left-0 right-0 w-full pointer-events-none z-1"
            style={{
              height: '300px',
              background: 'linear-gradient(to bottom, transparent, black 100%)',
            }}
            id="hero-bottom-fade"
          />
        </div>
      )}

      {/* Hero Content Wrapper (Absolute flow to scroll over the sticky background) */}
      <motion.div 
        className="relative z-10 w-full h-screen flex flex-col justify-between pt-[140px] pb-12 pointer-events-none"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Hero Central Content */}
        <div 
          className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-center items-start text-left gap-6 mt-16 md:mt-24 pointer-events-auto"
          style={{ transform: 'translateY(-90px)' }}
        >
          {/* Heading: BlurText Component */}
          <BlurText
            text="Empowering exports, enriching lives."
            delay={100}
            stagger={80}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-display italic text-[#E3C591] leading-[1.05] max-w-2xl tracking-[-2px] text-left justify-start font-bold"
          />

          {/* Subtext Paragraph */}
          <motion.p
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-xl font-body font-light leading-relaxed text-left text-lg md:text-xl text-[#D5C8B7]"
            id="hero-subtext"
          >
            Through quality sourcing and global partnerships, we deliver more than products — we deliver value.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-start justify-start gap-4 sm:gap-6"
            id="hero-ctas"
          >
            {/* Main CTA */}
            <button
              onClick={() => onNavigate('products')}
              className="group liquid-glass-strong rounded-full px-7 py-3 flex items-center justify-center gap-2 text-white border border-[#dcb782]/30 hover:border-[#dcb782]/60 hover:bg-white/5 transition-all cursor-pointer shadow-lg hover:scale-[1.03] active:scale-[0.98]"
              id="hero-cta-main"
            >
              <span className="font-body font-medium text-sm tracking-wide text-[#fbfbeb] group-hover:text-white">Discover our products</span>
              <ArrowUpRight className="h-4 w-4 text-[#dcb782] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Partners Bar at bottom */}
        <div className="w-full flex flex-col items-center gap-4 pb-12 pt-8 pointer-events-auto" id="hero-partners-section">
          <div className="liquid-glass border border-primary/10 rounded-full px-4 py-1.5 shadow-md">
            <p className="text-[#dfd1b9]/50 text-[10px] md:text-xs font-body font-light uppercase tracking-widest text-center">
              Delivering Value Across Global Corridors
            </p>
          </div>
          <div
            className="flex flex-wrap justify-center items-center gap-12 md:gap-16 px-6 max-w-5xl w-full"
            id="partners-logos-list"
          >
            {partners.map((partner) => {
              const isItalic = ['asia-pacific', 'europe'].includes(partner.toLowerCase());
              return (
                <motion.span
                  key={partner}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ opacity: 0.95, scale: 1.05 }}
                  className={`text-[20px] font-heading text-white tracking-tight cursor-default relative font-medium select-none ${
                    isItalic ? 'italic' : 'not-italic'
                  }`}
                  id={`partner-${partner.toLowerCase()}`}
                >
                  {partner}
                </motion.span>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

