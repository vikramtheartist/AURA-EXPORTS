import { motion } from 'motion/react';
import React, { useRef, useEffect, useState } from 'react';

interface BlurTextProps {
  text: string;
  delay?: number; // base delay in ms
  stagger?: number; // stagger delay between items in ms
  splitBy?: 'words' | 'letters';
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'div';
}

export default function BlurText({
  text,
  delay = 100,
  stagger = 60,
  splitBy = 'words',
  className = '',
  as = 'h1',
}: BlurTextProps) {
  const elements = splitBy === 'words' ? text.split(' ') : text.split('');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const itemVariants = {
    hidden: {
      filter: 'blur(2px)',
      opacity: 0.9,
      y: 4,
    },
    visible: (index: number) => ({
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        delay: Math.min((delay + index * stagger) / 1000, 0.15),
        ease: 'easeOut',
      },
    }),
  };

  const Component: React.ElementType = as;

  return (
    <Component
      ref={containerRef as any}
      className={`flex flex-wrap gap-x-[0.25em] gap-y-[0.1em] ${className}`}
      id="blur-text-container"
    >
      {elements.map((el, i) => {
        const customStyle: React.CSSProperties = {};
        if (i === 0) {
          customStyle.fontStyle = 'normal';
          customStyle.fontWeight = 'bold';
        } else if (i === 1) {
          customStyle.fontStyle = 'normal';
        } else if (i === 2) {
          customStyle.fontStyle = 'normal';
        } else if (i === 3) {
          customStyle.fontStyle = 'normal';
        }

        return (
          <motion.span
            key={i}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="inline-block"
            id={`blur-span-${i}`}
            style={customStyle}
          >
            {el === ' ' ? '\u00A0' : el}
          </motion.span>
        );
      })}
    </Component>
  );
}
