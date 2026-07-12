import { motion } from 'motion/react';
import React, { useRef, useEffect, useState } from 'react';

interface BlurTextProps {
  text: string;
  delay?: number; // base delay in ms
  stagger?: number; // stagger delay between items in ms
  splitBy?: 'words' | 'letters';
  className?: string;
}

export default function BlurText({
  text,
  delay = 100,
  stagger = 60,
  splitBy = 'words',
  className = '',
}: BlurTextProps) {
  const elements = splitBy === 'words' ? text.split(' ') : text.split('');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

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
      filter: 'blur(10px)',
      opacity: 0,
      y: 50,
    },
    visible: (index: number) => ({
      filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
      opacity: [0, 0.5, 1],
      y: [50, -5, 0],
      transition: {
        duration: 0.7, // total 0.35s per keyframe step transition (2 steps = 0.7s)
        times: [0, 0.5, 1],
        delay: (delay + index * stagger) / 1000,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap gap-x-[0.25em] gap-y-[0.1em] ${className}`}
      id="blur-text-container"
    >
      {elements.map((el, i) => {
        const customStyle: React.CSSProperties = {};
        if (i === 0) {
          customStyle.fontStyle = 'normal';
          customStyle.fontWeight = 'bold';
          customStyle.fontSize = '62px';
        } else if (i === 1) {
          customStyle.fontStyle = 'normal';
          customStyle.fontSize = '62px';
        } else if (i === 2) {
          customStyle.fontStyle = 'normal';
          customStyle.fontSize = '62px';
        } else if (i === 3) {
          customStyle.fontStyle = 'normal';
          customStyle.fontSize = '62px';
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
    </div>
  );
}
