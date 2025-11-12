import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT_INFO } from '@/lib/constants';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Services from '@/components/Services';
import Process from '@/components/Process';
import TrustStats from '@/components/TrustStats';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { updateMetaTags, addMultipleJsonLd, getLocalBusinessSchema, getOrganizationSchema } from '@/lib/seo';

export default function Home() {
  const { language } = useLanguage();

  useEffect(() => {
    const title = language === 'de'
      ? `Räumung Wien & Österreich | Flächen Frei - Schnell & Professionell ☎ ${CONTACT_INFO.phone}`
      : `Clearing Services Vienna & Austria | Flächen Frei - Fast & Professional ☎ ${CONTACT_INFO.phone}`;

    const description = language === 'de'
      ? 'Professionelle Räumung in Wien und ganz Österreich ✓ 26+ Jahre Erfahrung ✓ Faire Festpreise ✓ Kostenlose Besichtigung ✓ Schnelle Termine ✓ Besenreine Übergabe. Jetzt anrufen!'
      : 'Professional clearing services in Vienna and throughout Austria ✓ 26+ years experience ✓ Fair fixed prices ✓ Free consultation ✓ Fast appointments ✓ Broom-clean handover. Call now!';

    const keywords = language === 'de'
      ? 'Räumung Wien, Wohnungsräumung, Haushaltsauflösung, Kellerräumung, Räumung Österreich, Räumung Wien, Messie-Räumung, Verlassenschaftsräumung, Geschäftsräumung, Räumungsfirma Wien'
      : 'Clearing Vienna, apartment clearing, household dissolution, basement clearing, clearing Austria, removal Vienna, hoarder clearing, estate clearing, commercial clearing, clearing company Vienna';

    updateMetaTags({
      title,
      description,
      url: '/',
      keywords,
    });

    addMultipleJsonLd([
      getLocalBusinessSchema(language),
      getOrganizationSchema(),
    ], 'home-page-schemas');
  }, [language]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <Process />
        <TrustStats />
        <WhyUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
