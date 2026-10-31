import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import StartSection from '../components/StartSection';
import FeaturesChess from '../components/FeaturesChess';
import FeaturesGrid from '../components/FeaturesGrid';
import Philosophy from '../components/Philosophy';
import Stats from '../components/Stats';
import QualityCommitment from '../components/QualityCommitment';
import Pillars from '../components/Pillars';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import SEOHead from '../components/SEOHead';

export default function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = (target: string) => {
    if (target.startsWith('products/') || target.includes('/')) {
      navigate(`/${target.replace(/^\//, '')}`);
      return;
    }
    if (target === 'agro-products') {
      navigate('/products/agro-products');
      return;
    }
    if (target === 'turmeric') {
      navigate('/products/spices/turmeric');
      return;
    }
    if (target === 'jewelry') {
      navigate('/products/jewelry');
      return;
    }
    if (target === 'textiles') {
      navigate('/products/textiles');
      return;
    }
    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Scroll to section on homepage if exists
    const element = document.getElementById(target);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      return;
    }

    // Otherwise navigate to route
    if (target === 'about') navigate('/about');
    else if (target === 'quality') navigate('/quality-compliance');
    else if (target === 'products') navigate('/products');
    else if (target === 'faqs') navigate('/faqs');
    else if (target === 'contact') navigate('/contact');
    else navigate(`/${target}`);
  };

  return (
    <div className="flex flex-col w-full" id="home-view-group">
      <SEOHead pageKey="home" />
      <Hero onNavigate={handleNavigate} />
      <main id="main-content">
        <FeaturesChess onNavigate={handleNavigate} />
        <StartSection onNavigate={handleNavigate} />
        <FeaturesGrid />
        <Philosophy />
        <Stats />
        <QualityCommitment onNavigate={handleNavigate} />
        <Pillars />
        <Testimonials />
        <Pricing onNavigate={handleNavigate} />
      </main>
    </div>
  );
}
