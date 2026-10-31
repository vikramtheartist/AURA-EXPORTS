import { useNavigate } from 'react-router-dom';
import TurmericDetail from '../components/TurmericDetail';
import SEOHead from '../components/SEOHead';

export default function TurmericDetailPage() {
  const navigate = useNavigate();

  const handleNavigate = (target: string) => {
    if (target === 'home') {
      navigate('/');
    } else if (target === 'contact') {
      navigate('/contact');
    } else {
      navigate(`/${target}`);
    }
  };

  return (
    <main id="main-content" className="w-full">
      <SEOHead pageKey="turmeric" />
      <TurmericDetail onNavigate={handleNavigate} />
    </main>
  );
}
