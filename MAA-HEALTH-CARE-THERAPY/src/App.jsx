import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import ReviewsAndDemoSections from './sections/ReviewsAndDemoSections';
import WhyChooseAndTestimonials from './sections/WhyChooseAndTestimonials';
import AboutAndTherapySections from './sections/AboutAndTherapySections';
import ComparisonAndProducts from './sections/ComparisonAndProducts';
import StatsAndServices from './sections/StatsAndServices';
import FaqAndContact from './sections/FaqAndContact';
import Footer from './components/Footer';
import ModalLightbox from './components/ModalLightbox';

export default function App() {
  const [lang, setLang] = useState('en');
  const [modalItem, setModalItem] = useState(null);
  const [preselectedService, setPreselectedService] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleEnquire = (serviceName) => {
    setPreselectedService(serviceName);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header lang={lang} setLang={setLang} />

      <main className="main">
        <HeroSection lang={lang} onOpenDemo={setModalItem} />
        <ReviewsAndDemoSections onOpenMedia={setModalItem} />
        <WhyChooseAndTestimonials />
        <AboutAndTherapySections />
        <ComparisonAndProducts onEnquireProduct={handleEnquire} />
        <StatsAndServices onBookService={handleEnquire} />
        <FaqAndContact preselectedService={preselectedService} />
      </main>

      <Footer />
      <ModalLightbox item={modalItem} onClose={() => setModalItem(null)} />
    </>
  );
}
