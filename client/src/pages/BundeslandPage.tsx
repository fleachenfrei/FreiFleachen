import { useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { states } from '@/data/states';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { updateMetaTags, addJsonLd } from '@/lib/seo';
import NotFound from './not-found';

export default function BundeslandPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  
  const state = states.find(s => s.slug === slug);

  useEffect(() => {
    if (!state) return;

    const title = language === 'de'
      ? `Entrümpelung ${state.name} | Professionelle Räumung | Flächen Frei`
      : `Clearing Services ${state.nameEn} | Professional Removal | Flächen Frei`;

    const description = language === 'de' ? state.metaDescription : state.metaDescriptionEn;

    updateMetaTags({
      title,
      description,
      url: `/bundeslaender/${state.slug}`,
    });

    addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': language === 'de' ? 'Entrümpelung und Räumung' : 'Clearing and Removal',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Flächen Frei',
        'telephone': '+43 664 99124972',
        'email': 'office@flaechenfrei.at',
        'areaServed': {
          '@type': 'State',
          'name': language === 'de' ? state.name : state.nameEn,
        },
      },
      'description': description,
    });
  }, [state, language]);

  if (!state) {
    return <NotFound />;
  }

  const stateName = language === 'de' ? state.name : state.nameEn;
  const features = language === 'de' ? state.features : state.featuresEn;
  const description = language === 'de' ? state.description : state.descriptionEn;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground" data-testid="text-state-title">
                  {language === 'de' ? `Entrümpelung ${stateName}` : `Clearing Services ${stateName}`}
                </h1>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground mb-8" data-testid="text-state-description">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+4366499124972">
                  <Button size="lg" data-testid="button-call">
                    <Phone className="w-5 h-5 mr-2" />
                    {language === 'de' ? 'Jetzt anrufen' : 'Call Now'}
                  </Button>
                </a>
                <Link href="/kontakt">
                  <Button variant="outline" size="lg" data-testid="button-contact">
                    <Mail className="w-5 h-5 mr-2" />
                    {language === 'de' ? 'Anfrage senden' : 'Send Inquiry'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8" data-testid="text-features-title">
              {language === 'de' ? `Unsere Leistungen in ${stateName}` : `Our Services in ${stateName}`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-feature-${index}`}>
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              {language === 'de' ? 'Unsere Dienstleistungen' : 'Our Services'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle>{language === 'de' ? 'Wohnungsentrümpelung' : 'Apartment Clearing'}</CardTitle>
                  <CardDescription>
                    {language === 'de' 
                      ? 'Schnelle und diskrete Entrümpelung Ihrer Wohnung'
                      : 'Fast and discreet clearing of your apartment'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/leistungen/wohnungsentruempelung">
                    <Button variant="outline" className="w-full">
                      {language === 'de' ? 'Mehr erfahren' : 'Learn More'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle>{language === 'de' ? 'Hausräumung' : 'House Clearance'}</CardTitle>
                  <CardDescription>
                    {language === 'de'
                      ? 'Gründliche und zügige Hausräumung'
                      : 'Thorough and swift house clearance'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/leistungen/hausraeumung">
                    <Button variant="outline" className="w-full">
                      {language === 'de' ? 'Mehr erfahren' : 'Learn More'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle>{language === 'de' ? 'Gewerbeobjekte' : 'Commercial Properties'}</CardTitle>
                  <CardDescription>
                    {language === 'de'
                      ? 'Professionelle Räumung von Geschäftsräumen'
                      : 'Professional clearing of business premises'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/leistungen/gewerbeobjekt-raeumung">
                    <Button variant="outline" className="w-full">
                      {language === 'de' ? 'Mehr erfahren' : 'Learn More'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">
                  {language === 'de' ? `Entrümpelung in ${stateName} gewünscht?` : `Need Clearing in ${stateName}?`}
                </CardTitle>
                <CardDescription className="text-base">
                  {language === 'de'
                    ? 'Kontaktieren Sie uns jetzt für eine kostenlose Besichtigung und ein unverbindliches Angebot.'
                    : 'Contact us now for a free consultation and a non-binding quote.'}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+4366499124972">
                  <Button size="lg" data-testid="button-call-cta">
                    <Phone className="w-5 h-5 mr-2" />
                    +43 664 99124972
                  </Button>
                </a>
                <Link href="/kontakt">
                  <Button variant="outline" size="lg" data-testid="button-contact-cta">
                    {language === 'de' ? 'Anfrage senden' : 'Send Inquiry'}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
