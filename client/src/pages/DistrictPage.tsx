import { useEffect } from 'react';
import { useRoute } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Phone, Mail, MapPin, CheckCircle, Star, Landmark, MapPinned } from 'lucide-react';
import { getDistrictBySlug } from '@/data/districts';
import { updateMetaTags, addJsonLd, getFAQSchema, addMultipleJsonLd } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import viennaImage from '@assets/generated_images/Vienna_landmark_Stephansdom_a1284b43.png';

export default function DistrictPage() {
  const [match, params] = useRoute('/bezirke/:slug');
  const district = params?.slug ? getDistrictBySlug(params.slug) : null;

  useEffect(() => {
    if (district) {
      const title = `Räumung ${district.postalCode} Wien ${district.name} - Flächen Frei | Professionell & Schnell`;
      const url = `/bezirke/${district.slug}`;

      updateMetaTags({
        title,
        description: district.metaDescription,
        url,
        type: 'website',
      });

      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: `Flächen Frei - Räumung ${district.name}`,
        image: viennaImage,
        '@id': url,
        url: `${window.location.origin}${url}`,
        telephone: '+436602005610',
        email: 'office@flaechenfrei.at',
        address: {
          '@type': 'PostalAddress',
          streetAddress: district.name,
          addressLocality: 'Wien',
          postalCode: district.postalCode,
          addressCountry: 'AT',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 48.2082,
          longitude: 16.3738,
        },
        areaServed: {
          '@type': 'City',
          name: `Wien ${district.name}`,
          '@id': `https://www.wikidata.org/wiki/Q1741`,
        },
        priceRange: '€€',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
        description: district.description,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Räumungsdienstleistungen',
          itemListElement: district.popularServices.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service,
              serviceType: 'Räumung',
            },
          })),
        },
      };

      const schemas: Record<string, unknown>[] = [jsonLd];
      
      if (district.faq && district.faq.length > 0) {
        schemas.push(getFAQSchema(district.faq));
      }
      
      addMultipleJsonLd(schemas, `district-${district.slug}-schemas`);
    }
  }, [district]);

  if (!match || !district) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Bezirke', url: '/#districts' },
              { name: `${district.postalCode} ${district.name}`, url: `/bezirke/${district.slug}` }
            ]} 
          />
        </div>
        <section className="relative bg-primary text-primary-foreground py-16 md:py-24">
          <div className="absolute inset-0 opacity-20">
            <img src={viennaImage} alt="Wien" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
                {district.postalCode} Wien
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-district-title">
                Räumung in {district.postalCode} Wien {district.name}
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-6" data-testid="text-district-subtitle">
                {district.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+436602005610">
                  <Button size="lg" className="bg-secondary hover:bg-secondary text-secondary-foreground">
                    <Phone className="mr-2 w-5 h-5" />
                    Jetzt anrufen
                  </Button>
                </a>
                <a href="#kontakt">
                  <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                    Kostenlose Besichtigung
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Professionelle Räumung in {district.name}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Flächen Frei ist Ihr zuverlässiger Partner für professionelle Räumungen im {district.postalCode} Wien {district.name}. 
                    Mit über 26 Jahren Erfahrung bieten wir schnelle, diskrete und kostengünstige Räumungsservices in allen Bereichen des Bezirks.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Egal ob Wohnung, Haus, Keller oder Dachboden - wir kümmern uns um alles und hinterlassen 
                    Ihre Räumlichkeiten in besenreinem Zustand. Kostenlose Besichtigung und transparente Preise garantiert!
                  </p>
                </div>

                {district.landmarks.length > 0 && (
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Landmark className="w-5 h-5 text-primary" />
                        <CardTitle>Bekannte Orte in {district.name}</CardTitle>
                      </div>
                      <CardDescription>
                        Wir sind im gesamten Bezirk tätig
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {district.landmarks.map((landmark, i) => (
                          <div key={i} className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
                            {landmark}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    Unsere Leistungen in {district.name}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {district.popularServices.map((service, i) => (
                      <Card key={i} className="hover-elevate" data-testid={`service-item-${i}`}>
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="font-medium">{service}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {district.serviceAreas.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <MapPinned className="w-6 h-6 text-primary" />
                      Unsere Einsatzgebiete in {district.postalCode}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Wir sind in allen Teilen des {district.postalCode}. Bezirks tätig, einschließlich:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {district.serviceAreas.map((area, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-primary shrink-0" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {district.characteristics.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Besonderheiten von {district.name}
                    </h3>
                    <div className="space-y-3">
                      {district.characteristics.map((char, i) => (
                        <div key={i} className="flex gap-3">
                          <Star className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{char}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Warum Flächen Frei in {district.name}?
                  </h3>
                  <div className="space-y-3">
                    {district.whyChooseUs.map((reason, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {district.neighborhoods.length > 0 && (
                  <Card className="bg-accent/50">
                    <CardHeader>
                      <CardTitle>Stadtteile und Grätzl in {district.name}</CardTitle>
                      <CardDescription>
                        Wir kennen jeden Winkel des Bezirks
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {district.neighborhoods.map((neighborhood, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <span>{neighborhood}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {district.faq.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6">
                      Häufig gestellte Fragen zur Räumung in {district.name}
                    </h3>
                    <Accordion type="single" collapsible className="w-full">
                      {district.faq.map((item, i) => (
                        <AccordionItem key={i} value={`item-${i}`}>
                          <AccordionTrigger className="text-left">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )}

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">
                      Kostenlose Besichtigung in {district.name}
                    </h3>
                    <p className="mb-6 text-primary-foreground/90">
                      Wir bieten Ihnen eine kostenlose und unverbindliche Besichtigung vor Ort. 
                      Dabei erstellen wir einen transparenten Kostenvoranschlag ohne versteckte Gebühren.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a href="tel:+436602005610">
                        <Button size="lg" className="bg-secondary hover:bg-secondary text-secondary-foreground w-full sm:w-auto">
                          <Phone className="mr-2 w-5 h-5" />
                          +43 660 200 5610
                        </Button>
                      </a>
                      <a href="mailto:office@flaechenfrei.at">
                        <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm w-full sm:w-auto">
                          <Mail className="mr-2 w-5 h-5" />
                          E-Mail senden
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="sticky top-20">
                  <CardHeader className="bg-primary text-primary-foreground">
                    <CardTitle>Jetzt Kontakt aufnehmen</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      Kostenlose Beratung für {district.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">Telefon</div>
                        <a href="tel:+436602005610" className="font-medium hover:text-primary">
                          +43 660 200 5610
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">E-Mail</div>
                        <a href="mailto:office@flaechenfrei.at" className="font-medium hover:text-primary break-all">
                          office@flaechenfrei.at
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">Bezirk</div>
                        <div className="font-medium">{district.postalCode} Wien {district.name}</div>
                      </div>
                    </div>
                    <div className="pt-4 border-t space-y-2">
                      <a href="tel:+436602005610" className="block">
                        <Button className="w-full bg-secondary hover:bg-secondary text-secondary-foreground" data-testid="button-district-call">
                          <Phone className="mr-2 w-4 h-4" />
                          Jetzt anrufen
                        </Button>
                      </a>
                      <a href="mailto:office@flaechenfrei.at" className="block">
                        <Button variant="outline" className="w-full" data-testid="button-district-email">
                          <Mail className="mr-2 w-4 h-4" />
                          E-Mail senden
                        </Button>
                      </a>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="text-sm font-medium mb-3">Unsere Vorteile:</div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>24/7 erreichbar</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>Kostenlose Besichtigung</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>Faire Festpreise</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>Besenreine Übergabe</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>26+ Jahre Erfahrung</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
