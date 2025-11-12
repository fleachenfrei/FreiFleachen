import { useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Phone, Mail, CheckCircle, Building2, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { states } from '@/data/states';
import { getCitiesByBundesland } from '@/data/cities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { updateMetaTags, addJsonLd, getFAQSchema, addMultipleJsonLd } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import NotFound from './not-found';

export default function BundeslandPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  
  const state = states.find(s => s.slug === slug);

  useEffect(() => {
    if (!state) return;

    const stateName = language === 'de' ? state.name : state.nameEn;
    const title = `${t.bundeslandPage.pageTitleTemplate} ${stateName} ${t.bundeslandPage.pageTitleSuffix}`;

    const description = language === 'de' ? state.metaDescription : state.metaDescriptionEn;

    updateMetaTags({
      title,
      description,
      url: `/bundeslaender/${state.slug}`,
    });

    const faqData = language === 'de' ? state.faqs : state.faqsEn;
    
    addMultipleJsonLd([
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'serviceType': t.bundeslandPage.schemaServiceType,
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Flächen Frei',
          'telephone': '+4366039575587',
          'email': 'info@flaechenfrei.at',
          'areaServed': {
            '@type': 'State',
            'name': stateName,
          },
        },
        'description': description,
      },
      getFAQSchema(faqData),
    ], `bundesland-${state.slug}-schemas`);
  }, [state, language, t]);

  if (!state) {
    return <NotFound />;
  }

  const stateName = language === 'de' ? state.name : state.nameEn;
  const features = language === 'de' ? state.features : state.featuresEn;
  const description = language === 'de' ? state.description : state.descriptionEn;
  const detailedIntro = language === 'de' ? state.detailedIntro : state.detailedIntroEn;
  const cities = language === 'de' ? state.cities : state.citiesEn;
  const whyChooseUs = language === 'de' ? state.whyChooseUs : state.whyChooseUsEn;
  const faqs = language === 'de' ? state.faqs : state.faqsEn;
  const cityPages = getCitiesByBundesland(state.slug);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: t.common.states, url: '/#states' },
              { name: stateName, url: `/bundeslaender/${state.slug}` }
            ]} 
          />
        </div>
        
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground" data-testid="text-state-title">
                  {t.bundeslandPage.heroTitlePrefix} {stateName}
                </h1>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground mb-8" data-testid="text-state-description">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+4366039575587">
                  <Button size="lg" data-testid="button-call">
                    <Phone className="w-5 h-5 mr-2" />
                    {t.common.callNow}
                  </Button>
                </a>
                <Link href="/kontakt">
                  <Button variant="outline" size="lg" data-testid="button-contact">
                    <Mail className="w-5 h-5 mr-2" />
                    {t.bundeslandPage.sendInquiry}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Introduction */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-intro-title">
                {t.bundeslandPage.introTitle} {stateName} {t.bundeslandPage.introSuffix}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-intro-content">
                {detailedIntro}
              </p>
            </div>
          </div>
        </section>

        {/* City Pages - SEO Optimized Individual Pages */}
        {cityPages.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-cities-title">
                {t.bundeslandPage.citiesTitle} {stateName}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t.bundeslandPage.citiesDescription} {stateName} {t.bundeslandPage.citiesDescriptionSuffix}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cityPages.map((city) => (
                  <Link key={city.slug} href={`/bundeslaender/${state.slug}/${city.slug}`}>
                    <Card className="hover-elevate cursor-pointer h-full" data-testid={`card-city-${city.slug}`}>
                      <CardHeader>
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Building2 className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{city.name}</CardTitle>
                              <CardDescription className="text-sm">{city.postalCode}</CardDescription>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {city.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Coverage Areas - General Cities */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8" data-testid="text-coverage-title">
              {t.bundeslandPage.coverageTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cities.map((city, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-coverage-${index}`}>
                  <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    <CardTitle className="text-base">{city}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8" data-testid="text-features-title">
              {t.bundeslandPage.ourServicesIn} {stateName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center" data-testid="text-why-title">
              {t.bundeslandPage.whyUsIn} {stateName}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
              {t.bundeslandPage.whyUsDescription} {stateName}:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-reason-${index}`}>
                  <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <CardDescription className="text-base text-foreground">{reason}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t.bundeslandPage.ourServices}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.bundeslandPage.servicesDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle>{t.bundeslandPage.apartmentClearing}</CardTitle>
                  <CardDescription>
                    {t.bundeslandPage.apartmentDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/leistungen/wohnungsräumungen">
                    <Button variant="outline" className="w-full">
                      {t.bundeslandPage.learnMore}
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle>{t.bundeslandPage.householdClearing}</CardTitle>
                  <CardDescription>
                    {t.bundeslandPage.householdDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/leistungen/haushaltsauflösung">
                    <Button variant="outline" className="w-full">
                      {t.bundeslandPage.learnMore}
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle>{t.bundeslandPage.commercialClearing}</CardTitle>
                  <CardDescription>
                    {t.bundeslandPage.professionalClearing}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/leistungen/geschäftsräumung">
                    <Button variant="outline" className="w-full">
                      {t.bundeslandPage.learnMore}
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle>{t.bundeslandPage.basementClearing}</CardTitle>
                  <CardDescription>
                    {t.bundeslandPage.basementDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/leistungen/kellerräumung">
                    <Button variant="outline" className="w-full">
                      {t.bundeslandPage.learnMore}
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle>{t.bundeslandPage.atticClearing}</CardTitle>
                  <CardDescription>
                    {t.bundeslandPage.professionalAtticClearing}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/leistungen/dachbodenräumung">
                    <Button variant="outline" className="w-full">
                      {t.bundeslandPage.learnMore}
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle>{t.bundeslandPage.estateClearing}</CardTitle>
                  <CardDescription>
                    {t.bundeslandPage.estateDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/leistungen/verlassenschaftsräumung">
                    <Button variant="outline" className="w-full">
                      {t.bundeslandPage.learnMore}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center" data-testid="text-faq-title">
              {t.bundeslandPage.faqTitle}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              {t.bundeslandPage.faqDescription} {stateName}
            </p>
            <Accordion type="single" collapsible className="w-full" data-testid="accordion-faq">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} data-testid={`faq-item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              {t.bundeslandPage.howItWorks}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>1. {t.bundeslandPage.freeConsultation}</CardTitle>
                  <CardDescription className="text-base">
                    {t.bundeslandPage.contactPhone}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>2. {t.bundeslandPage.professionalExecution}</CardTitle>
                  <CardDescription className="text-base">
                    {t.process.step2.description}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>3. {t.process.step3.title}</CardTitle>
                  <CardDescription className="text-base">
                    {t.process.step3.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-background/80 backdrop-blur border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl mb-4">
                  {t.bundeslandPage.clearingIn} {stateName} {t.bundeslandPage.ctaTitleSuffix}
                </CardTitle>
                <CardDescription className="text-base md:text-lg">
                  {t.bundeslandPage.contactUs}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+4366039575587">
                  <Button size="lg" data-testid="button-call-cta">
                    <Phone className="w-5 h-5 mr-2" />
                    +43660 39 57 587
                  </Button>
                </a>
                <Link href="/kontakt">
                  <Button variant="outline" size="lg" data-testid="button-contact-cta">
                    <Mail className="w-5 h-5 mr-2" />
                    {t.bundeslandPage.sendInquiry}
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
