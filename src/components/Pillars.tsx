import { motion } from 'motion/react';
import sourcingImg from '../assets/images/pillar_sourcing_1780421266966.png';
import qualityImg from '../assets/images/pillar_quality_1780421288060.png';
import innovationImg from '../assets/images/pillar_innovation_1780421305847.png';
import sustainabilityImg from '../assets/images/pillar_sustainability_1780421329954.png';

export default function Pillars() {
  const pillars = [
    {
      id: 'sourcing',
      title: 'SOURCING',
      subtitle: 'Ethical, Authentic, Exceptional',
      description: 'We partner with trusted farms to handpick the finest ingredients while supporting ethical and sustainable farming communities worldwide.',
      image: sourcingImg,
      isImageRight: true,
    },
    {
      id: 'quality',
      title: 'QUALITY',
      subtitle: 'Uncompromising Standards, Unmatched Freshness',
      description: 'Every product undergoes rigorous quality checks to ensure freshness, purity, and excellence — only the best reaches your kitchen.',
      image: qualityImg,
      isImageRight: false,
    },
    {
      id: 'innovation',
      title: 'INNOVATION',
      subtitle: 'Redefining Taste, Elevating Experiences',
      description: 'From unique blends to pioneering packaging, we make gourmet cooking effortless, turning everyday meals into extraordinary experiences.',
      image: innovationImg,
      isImageRight: true,
    },
    {
      id: 'sustainability',
      title: 'SUSTAINABILITY',
      subtitle: 'A Greener Future, One Spice at a Time',
      description: 'With sustainable sourcing and recyclable packaging, we ensure bold flavors today while protecting the planet for tomorrow.',
      image: sustainabilityImg,
      isImageRight: false,
    },
  ];

  const blockVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="pillars" className="w-full bg-[#0d0d0c] py-24 px-6 md:px-12 lg:px-16 border-t border-white/5 relative overflow-hidden">
      {/* Visual background lights to create premium dept of field */}
      <div className="absolute top-[10%] left-[-15%] w-[450px] h-[450px] bg-[#dcb782]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] bg-white/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title Header Section */}
        <div className="flex flex-col items-center text-center gap-4 mb-20" id="pillars-header">
          <div className="w-fit bg-white/5 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/10 shadow-sm">
            <span className="text-[#dcb782] font-body font-bold text-xs tracking-widest uppercase">
              OUR CORE VALUES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[2.85rem] font-heading font-medium tracking-tight text-white leading-none">
            The Pillars That <span className="text-[#dcb782] italic font-normal">Define Us</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#dcb782]/40 to-transparent mt-2" />
        </div>

        {/* Dynamic Alternating Showcase List of Pillars */}
        <div className="flex flex-col gap-24 md:gap-32" id="pillars-sections-list">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10% 0px' }}
              className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center`}
              id={`pillar-${pillar.id}-row`}
            >
              {/* Text Container Column */}
              <div
                className={`flex flex-col gap-3 md:col-span-6 ${
                  pillar.isImageRight ? 'md:order-1' : 'md:order-2 md:pl-8'
                }`}
                id={`pillar-${pillar.id}-text-col`}
              >
                {/* Horizontal Category accent rule */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono tracking-[0.25em] text-[#dcb782] font-extrabold uppercase">
                    {pillar.title}
                  </span>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-[#dcb782]/25 to-transparent" />
                </div>

                <h3 className="text-2xl md:text-3.5xl font-heading text-white italic font-medium leading-snug mt-1">
                  {pillar.subtitle}
                </h3>

                <p className="text-[#D5C8B7]/80 font-body text-sm md:text-base leading-relaxed font-light mt-2">
                  {pillar.description}
                </p>
              </div>

              {/* Photo Showcase Container Column */}
              <div
                className={`relative md:col-span-6 flex justify-center w-full ${
                  pillar.isImageRight ? 'md:order-2' : 'md:order-1'
                }`}
                id={`pillar-${pillar.id}-img-col`}
              >
                {/* Visual Glow framing effect */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#dcb782]/15 to-transparent rounded-[2rem] blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
                
                {/* Outer frame structure with thin gold accent */}
                <div className="relative p-2 border border-white/5 bg-black/60 rounded-[1.8rem] backdrop-blur-sm overflow-hidden w-full max-w-[480px]">
                  <div className="overflow-hidden rounded-[1.4rem] aspect-[4/3] w-full relative">
                    <img
                      src={pillar.image}
                      alt={`AURA Global Trade Pillar - ${pillar.title}`}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out hover:scale-105 filter brightness-95"
                      referrerPolicy="no-referrer"
                      id={`pillar-${pillar.id}-img`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
