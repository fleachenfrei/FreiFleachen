import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import AboutUs from '@/components/AboutUs';
import WhyUs from '@/components/WhyUs';
import ServiceAreas from '@/components/ServiceAreas';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function Home() {
  useEffect(() => {
    document.title = 'Flächen Frei - Entrümpelung & Räumung in Wien | Schnell, Professionell, Zuverlässig';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <AboutUs />
        <WhyUs />
        <ServiceAreas />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
