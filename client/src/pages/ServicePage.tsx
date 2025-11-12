import { useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Phone, Mail, CheckCircle, ArrowRight, Euro } from 'lucide-react';
import { getServiceBySlug } from '@/data/services';
import { updateMetaTags, addJsonLd, getFAQSchema, addMultipleJsonLd } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useLanguage } from '@/contexts/LanguageContext';
import apartmentImage from '@assets/generated_images/Apartment_clearance_Vienna_fd741ce0.png';
import estateImage from '@assets/generated_images/Estate_clearance_service_46b9585f.png';
import basementImage from '@assets/generated_images/Basement_clearance_759c9b49.png';
import atticImage from '@assets/generated_images/Attic_clearance_Vienna_cd35a753.png';
import officeImage from '@assets/generated_images/Office_clearance_service_21e87799.png';
import messieImage from '@assets/generated_images/Hoarding_clearance_support_81793b23.png';
import bulkyWasteImage from '@assets/generated_images/Bulky_waste_disposal_Vienna_e9c6cea4.png';
import movingImage from '@assets/generated_images/Moving_service_Vienna_8eeb3795.png';
import garageImage from '@assets/generated_images/Garage_clearance_service_435382d9.png';
import officeDissolutionImage from '@assets/generated_images/Office_dissolution_service_d98c3ee9.png';
import probateImage from '@assets/generated_images/Probate_estate_clearance_1eadd49e.png';
import containerImage from '@assets/generated_images/Container_rental_service_f4846763.png';

const serviceImages: Record<string, string> = {
  'wohnungsräumungen': apartmentImage,
  'haushaltsauflösung': estateImage,
  'kellerräumung': basementImage,
  'dachbodenräumung': atticImage,
  'geschäftsräumung': officeImage,
  'messie-räumung': messieImage,
  'sperrmüllentsorgung': bulkyWasteImage,
  'umzugsservice': movingImage,
  'garageräumung': garageImage,
  'büroauflösung': officeDissolutionImage,
  'verlassenschaftsräumung': probateImage,
  'container-service': containerImage,
};

export default function ServicePage() {
  const { t, language } = useLanguage();
  const [match, params] = useRoute('/leistungen/:slug');
  const service = params?.slug ? getServiceBySlug(params.slug) : null;

  useEffect(() => {
    if (service) {
      const title = `${service.name} Wien - Flächen Frei | Professionell & Schnell`;
      const url = `/leistungen/${service.slug}`;

      updateMetaTags({
        title,
        description: service.metaDescription,
        url,
        type: 'service',
        image: serviceImages[service.slug],
      });

      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
          '@type': 'LocalBusiness',
          name: 'Flächen Frei',
          telephone: '+4366039575587',
          email: 'info@flaechenfrei.at',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Wien',
            addressCountry: 'AT',
          },
        },
        areaServed: {
          '@type': 'City',
          name: 'Wien',
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'EUR',
          },
        },
      };

      const schemas: Record<string, unknown>[] = [jsonLd];
      
      if (service.faq && service.faq.length > 0) {
        schemas.push(getFAQSchema(service.faq));
      }
      
      addMultipleJsonLd(schemas, `service-${service.slug}-schemas`);
    }
  }, [service]);

  if (!match || !service) {
    return null;
  }

  const serviceImage = serviceImages[service.slug];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: t.common.services, url: '/#services' },
              { name: service.name, url: `/leistungen/${service.slug}` }
            ]} 
          />
        </div>
        <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(${serviceImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-service-title">
                {service.name} {t.common.in} {t.common.wien}
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
                {service.shortDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary text-secondary-foreground" data-testid="button-call-service">
                  <a href="tel:+4366039575587">
                    <Phone className="mr-2 w-5 h-5" />
                    +43660 39 57 587
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                  <a href="mailto:info@flaechenfrei.at">
                    <Mail className="mr-2 w-5 h-5" />
                    {t.common.emailInquiry}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>{t.servicePage.about} {service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>{t.servicePage.benefits}</CardTitle>
                    <CardDescription>{t.servicePage.benefitsSubtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-muted-foreground">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>{t.servicePage.process}</CardTitle>
                    <CardDescription>{t.servicePage.processSubtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {service.process.map((step) => (
                        <div key={step.step} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                              {step.step}
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Euro className="w-6 h-6" />
                      {t.servicePage.pricing}
                    </CardTitle>
                    <CardDescription>{t.servicePage.pricingSubtitle} {service.name}?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {service.pricing.info}
                    </p>
                    <h4 className="font-semibold mb-3">{t.servicePage.pricingFactors}</h4>
                    <ul className="space-y-2">
                      {service.pricing.factors.map((factor, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>{factor}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 bg-accent rounded-lg">
                      <p className="font-semibold mb-2">{t.servicePage.freeInspection}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.servicePage.inspectionText}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{t.servicePage.faq}</CardTitle>
                    <CardDescription>{t.servicePage.faqSubtitle} {service.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {service.faq.map((faq, index) => (
                        <AccordionItem key={index} value={`faq-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <Card className="bg-primary text-primary-foreground">
                    <CardHeader>
                      <CardTitle>{t.servicePage.bookAppointment}</CardTitle>
                      <CardDescription className="text-primary-foreground/80">
                        {t.servicePage.freeConsultation}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button asChild size="lg" className="w-full bg-secondary hover:bg-secondary text-secondary-foreground">
                        <a href="tel:+4366039575587">
                          <Phone className="mr-2 w-5 h-5" />
                          {t.common.callNow}
                        </a>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="w-full bg-white/10 text-white border-white/30 hover:bg-white/20">
                        <a href="mailto:info@flaechenfrei.at">
                          <Mail className="mr-2 w-5 h-5" />
                          {t.servicePage.sendEmail}
                        </a>
                      </Button>
                      <div className="pt-4 border-t border-primary-foreground/20">
                        <p className="text-sm text-primary-foreground/80">
                          {t.servicePage.phoneAvailable}<br />
                          {t.servicePage.phoneHours}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{t.servicePage.relatedServices}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {service.relatedServices.map((relatedSlug) => {
                        const relatedService = getServiceBySlug(relatedSlug);
                        if (!relatedService) return null;
                        return (
                          <Link key={relatedSlug} href={`/leistungen/${relatedSlug}`}>
                            <div className="hover-elevate active-elevate-2 p-3 rounded-lg border cursor-pointer transition-all">
                              <h4 className="font-semibold text-sm mb-1">{relatedService.name}</h4>
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {relatedService.shortDescription}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                      <Link href="/leistungen">
                        <Button variant="ghost" className="w-full">
                          Alle Leistungen anzeigen
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
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
