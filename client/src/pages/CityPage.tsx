import { useEffect } from 'react';
import { useRoute } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Phone, Mail, MapPin, CheckCircle, Star, Building2, MapPinned } from 'lucide-react';
import { getCityBySlug } from '@/data/cities';
import { updateMetaTags, getFAQSchema, addMultipleJsonLd, getBreadcrumbSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import NotFound from './not-found';
import cityImage from '@assets/generated_images/House_clearance_service_e0229004.png';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLocalizedBundeslaenderPath } from '@/lib/urlMapping';

export default function CityPage() {
  const { t, language } = useLanguage();
  const [matchDe, paramsDe] = useRoute('/de/bundeslaender/:bundesland/:city');
  const [matchEn, paramsEn] = useRoute('/en/federal-states/:bundesland/:city');
  const match = matchDe || matchEn;
  const params = matchDe ? paramsDe : paramsEn;
  const bundeslaenderPath = getLocalizedBundeslaenderPath(language);
  const city = params?.bundesland && params?.city 
    ? getCityBySlug(params.bundesland, params.city) 
    : null;

  useEffect(() => {
    if (city) {
      const title = `${t.cityPage.pageTitleTemplate} ${city.name} ${city.bundesland} ${t.cityPage.pageTitleSuffix}`;
      const url = getLocalizedBundeslaenderPath(language, city.bundeslandSlug, city.slug);

      updateMetaTags({
        title,
        description: city.metaDescription,
        url,
        type: 'website',
      });

      const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: `${t.cityPage.schemaCompanyName} ${city.name}`,
        image: cityImage,
        '@id': url,
        url: `${window.location.origin}${url}`,
        telephone: '+43660 39 57 587',
        email: 'info@flaechenfrei.at',
        address: {
          '@type': 'PostalAddress',
          addressLocality: city.name,
          postalCode: city.postalCode,
          addressRegion: city.bundesland,
          addressCountry: 'AT',
        },
        areaServed: {
          '@type': 'City',
          name: city.name,
          containedIn: {
            '@type': 'State',
            name: city.bundesland,
          },
        },
        priceRange: '€€',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        description: city.description,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: t.cityPage.schemaCatalogName,
          itemListElement: city.services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service,
              serviceType: t.cityPage.schemaServiceType,
            },
          })),
        },
      };

      const breadcrumbSchema = getBreadcrumbSchema([
        { name: t.common.states, url: bundeslaenderPath },
        { name: city.bundesland, url: getLocalizedBundeslaenderPath(language, city.bundeslandSlug) },
        { name: city.name, url: getLocalizedBundeslaenderPath(language, city.bundeslandSlug, city.slug) },
      ]);

      const schemas: Record<string, unknown>[] = [localBusinessSchema, breadcrumbSchema];
      
      if (city.faq && city.faq.length > 0) {
        schemas.push(getFAQSchema(city.faq));
      }
      
      addMultipleJsonLd(schemas, `city-${city.slug}-schemas`);
    }
  }, [city, language, t, bundeslaenderPath]);

  if (!match || !city) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: t.common.states, url: bundeslaenderPath },
              { name: city.bundesland, url: getLocalizedBundeslaenderPath(language, city.bundeslandSlug) },
              { name: city.name, url: getLocalizedBundeslaenderPath(language, city.bundeslandSlug, city.slug) }
            ]} 
          />
        </div>

        <section className="relative bg-primary text-primary-foreground py-16 md:py-24">
          <div className="absolute inset-0 opacity-20">
            <img src={cityImage} alt={city.name} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
                {city.postalCode} {city.name}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-city-title">
                {t.cityPage.clearingIn} {city.name}, {city.bundesland}
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-6" data-testid="text-city-subtitle">
                {city.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+436603957587">
                  <Button size="lg" className="bg-secondary hover:bg-secondary text-secondary-foreground" data-testid="button-call">
                    <Phone className="mr-2 w-5 h-5" />
                    {t.common.callNow}
                  </Button>
                </a>
                <a href="#kontakt">
                  <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm" data-testid="button-consultation">
                    {t.common.freeConsultation}
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
                    {t.cityPage.professionalClearing} {city.name}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {t.cityPage.description1} {city.name}, {city.bundesland}. 
                    {t.cityPage.description2} {city.name} {t.cityPage.description3}
                  </p>
                  <p className="text-lg text-muted-foreground">
                    {t.cityPage.description4}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    {t.cityPage.ourServicesIn} {city.name}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {city.services.map((service, i) => (
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

                {city.benefits.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Star className="w-6 h-6 text-primary" />
                      {t.cityPage.benefitsTitle} {city.name}
                    </h3>
                    <div className="space-y-3">
                      {city.benefits.map((benefit, i) => (
                        <Card key={i} className="hover-elevate" data-testid={`benefit-item-${i}`}>
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {city.coverage && (
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPinned className="w-5 h-5 text-primary" />
                        <CardTitle>{t.cityPage.coverageTitle}</CardTitle>
                      </div>
                      <CardDescription>
                        {t.cityPage.coverageSubtitle} {city.name} {t.cityPage.coverageActive}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{city.coverage}</p>
                    </CardContent>
                  </Card>
                )}

                {city.faq && city.faq.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6">
                      {t.cityPage.faqTitle} {city.name}
                    </h3>
                    <Accordion type="single" collapsible className="w-full">
                      {city.faq.map((faqItem, i) => (
                        <AccordionItem key={i} value={`item-${i}`}>
                          <AccordionTrigger className="text-left" data-testid={`faq-question-${i}`}>
                            {faqItem.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground" data-testid={`faq-answer-${i}`}>
                            {faqItem.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>{t.cityPage.quickContact}</CardTitle>
                    <CardDescription>{t.cityPage.requestInspection}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <a 
                      href="tel:+436603957587" 
                      className="flex items-center gap-3 p-3 hover-elevate active-elevate-2 rounded-md border"
                      data-testid="link-phone"
                    >
                      <Phone className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <div className="font-medium">{t.cityPage.contactPhone}</div>
                        <div className="text-sm text-muted-foreground">+43660 39 57 587</div>
                      </div>
                    </a>
                    
                    <a 
                      href="mailto:info@flaechenfrei.at" 
                      className="flex items-center gap-3 p-3 hover-elevate active-elevate-2 rounded-md border"
                      data-testid="link-email"
                    >
                      <Mail className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <div className="font-medium">{t.cityPage.contactEmail}</div>
                        <div className="text-sm text-muted-foreground">info@flaechenfrei.at</div>
                      </div>
                    </a>

                    <div className="flex items-start gap-3 p-3 rounded-md border bg-muted/50">
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium">{t.cityPage.contactAddress}</div>
                        <div className="text-sm text-muted-foreground">
                          Herndlgasse 7/17<br />
                          1100 Wien
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{t.cityPage.benefit1}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{t.cityPage.benefit2}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{t.cityPage.benefit3}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{t.cityPage.benefit4}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50" id="kontakt">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              {t.cityPage.bookFreeInspection}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.cityPage.ctaText} {city.name} {t.cityPage.ctaTextAnd} {city.bundesland} {t.cityPage.ctaTextActive}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+436603957587">
                <Button size="lg" data-testid="button-cta-call">
                  <Phone className="mr-2 w-5 h-5" />
                  +43660 39 57 587
                </Button>
              </a>
              <a href="mailto:info@flaechenfrei.at">
                <Button size="lg" variant="outline" data-testid="button-cta-email">
                  <Mail className="mr-2 w-5 h-5" />
                  {t.cityPage.ctaEmailButton}
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
