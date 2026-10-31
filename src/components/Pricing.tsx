import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

interface PricingProps {
  onNavigate: (sectionId: string) => void;
}

export default function Pricing({ onNavigate }: PricingProps) {
  const faqs = [
    {
      q: 'What is your standard Minimum Order Quantity (MOQ)?',
      a: 'MOQs are established per product category and commercial grade. For botanical spices (Erode Turmeric), typical starting orders range from 1 Metric Ton (palletized) to 20ft FCL container loads. For fashion jewelry and sustainable textiles, minimum volumes are structured around production runs and design specifications.',
    },
    {
      q: 'How do you verify chemical assays and product grades?',
      a: 'Quality documentation and independent laboratory test reports (covering active curcumin assay, moisture percentage, microbiological profile, and heavy metal screening) are coordinated through accredited testing laboratories prior to commercial export dispatch.',
    },
    {
      q: 'Which trade terms and payment frameworks are accepted?',
      a: 'We structure commercial agreements in accordance with ICC Incoterms 2020 (primarily FOB Chennai/Tuticorin and CIF destination port). Commercial settlements are processed via recognized international banking instruments including Irrevocable Letters of Credit (L/C) or Telegraphic Transfers (T/T) as agreed in proforma contracts.',
    },
    {
      q: 'How is maritime export and port carting coordinated?',
      a: 'Aura manages inland transport from South Indian sourcing clusters to designated container terminals at Chennai Port (INMAA) or Tuticorin (INTUT). Our trade officers oversee customs clearance, mandatory plant quarantine inspections, and carrier document releases.',
    },
    {
      q: 'Do you offer customized particle processing or private-label packaging?',
      a: 'Yes. We accommodate customized particle mesh sizes for cold-milled turmeric powder, nitrogen-flushed barrier bags, private-label branding, and custom packaging formats tailored to destination import and retail standards.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>{/* FAQs section removed */}</>
  );
}
