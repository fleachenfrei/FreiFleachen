import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { updateMetaTags, addJsonLd } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getAllServices } from '@/data/services';

export default function Contact() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const services = getAllServices();

  useEffect(() => {
    const title = language === 'de' 
      ? 'Kontakt - Flächen Frei | Entrümpelung Wien und Umgebung ☎ +43660 39 57 587'
      : 'Contact - Flächen Frei | Clearing Services Vienna ☎ +43660 39 57 587';
    
    const description = language === 'de'
      ? 'Kontaktieren Sie Flächen Frei für professionelle Entrümpelung in Wien und ganz Österreich ✓ Kostenlose Beratung ✓ Schnelle Termine ✓ 24/7 Erreichbar ☎ +43660 39 57 587'
      : 'Contact Flächen Frei for professional clearing services in Vienna and throughout Austria ✓ Free consultation ✓ Fast appointments ✓ 24/7 available ☎ +43660 39 57 587';

    updateMetaTags({
      title,
      description,
      url: '/kontakt',
      type: 'website',
    });

    // Add LocalBusiness structured data
    addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Flächen Frei',
      image: `${window.location.origin}/og-image.jpg`,
      '@id': window.location.origin,
      url: window.location.origin,
      telephone: '+43660 39 57 587',
      email: 'office@flaechenfrei.at',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Herndlgasse 7/17',
        addressLocality: 'Wien',
        postalCode: '1100',
        addressCountry: 'AT',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 48.1756,
        longitude: 16.3858,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '12:00',
        },
      ],
      sameAs: [
        'https://www.facebook.com/flaechenfrei',
        'https://www.instagram.com/flaechenfrei',
      ],
      priceRange: '€€',
      areaServed: {
        '@type': 'Country',
        name: 'Austria',
      },
    });
  }, [language]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real application, this would send to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: language === 'de' ? 'Anfrage gesendet!' : 'Request sent!',
        description: t.contact.form.success,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: t.contact.form.error,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-contact-title">
              {t.contact.title}
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-primary-foreground/90">
              {t.contact.subtitle}
            </p>
            <p className="text-lg max-w-3xl mx-auto text-primary-foreground/80">
              {t.contact.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone Card */}
            <Card className="hover-elevate" data-testid="card-phone-info">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t.contact.phone}</CardTitle>
                <CardDescription>24/7 {language === 'de' ? 'erreichbar' : 'available'}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="tel:+4366039575 87" className="text-lg font-semibold text-primary hover:underline" data-testid="link-phone">
                  +43660 39 57 587
                </a>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="hover-elevate" data-testid="card-email-info">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t.contact.email}</CardTitle>
                <CardDescription>{language === 'de' ? 'Schnelle Antwort' : 'Quick response'}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="mailto:office@flaechenfrei.at" className="text-lg font-semibold text-primary hover:underline" data-testid="link-email">
                  office@flaechenfrei.at
                </a>
              </CardContent>
            </Card>

            {/* WhatsApp Card */}
            <Card className="hover-elevate" data-testid="card-whatsapp-info">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t.contact.whatsapp}</CardTitle>
                <CardDescription>{language === 'de' ? 'Direktnachricht' : 'Direct message'}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://wa.me/4366039575 87" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-primary hover:underline" data-testid="link-whatsapp">
                  +43660 39 57 587
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card data-testid="card-contact-form">
                <CardHeader>
                  <CardTitle className="text-2xl">{t.contact.form.title}</CardTitle>
                  <CardDescription>
                    {language === 'de' 
                      ? 'Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.'
                      : 'Fill out the form and we will contact you as soon as possible.'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.contact.form.name} *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder={language === 'de' ? 'Max Mustermann' : 'John Doe'}
                        data-testid="input-name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.contact.form.email} *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          placeholder="mail@beispiel.at"
                          data-testid="input-email"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.contact.form.phone}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+43 660 123 4567"
                          data-testid="input-phone"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">{t.contact.form.service}</Label>
                      <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                        <SelectTrigger id="service" data-testid="select-service">
                          <SelectValue placeholder={language === 'de' ? 'Wählen Sie eine Leistung' : 'Select a service'} />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.slug} value={service.slug}>
                              {service.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t.contact.form.message} *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={6}
                        placeholder={language === 'de' 
                          ? 'Beschreiben Sie bitte Ihr Anliegen...'
                          : 'Please describe your request...'}
                        data-testid="input-message"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full" 
                      disabled={isSubmitting}
                      data-testid="button-submit-form"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? (language === 'de' ? 'Wird gesendet...' : 'Sending...') : t.contact.form.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              {/* Opening Hours */}
              <Card data-testid="card-opening-hours">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{t.contact.hours.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">{t.contact.hours.weekdays}:</span>
                    <span className="text-muted-foreground">{t.contact.hours.weekdaysTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{t.contact.hours.saturday}:</span>
                    <span className="text-muted-foreground">{t.contact.hours.saturdayTime}</span>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-sm font-semibold text-primary">{t.contact.hours.emergency}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Address */}
              <Card data-testid="card-address">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{t.contact.coverage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t.contact.coverage.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium">{language === 'de' ? 'Hauptsitz:' : 'Headquarters:'}</p>
                    <p className="text-muted-foreground">
                      Herndlgasse 7/17<br />
                      1100 Wien, Österreich
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Call CTA */}
              <Card className="bg-secondary text-secondary-foreground" data-testid="card-quick-call">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">
                    {language === 'de' ? 'Sofortiger Kontakt?' : 'Immediate Contact?'}
                  </h3>
                  <p className="mb-4 text-sm">
                    {language === 'de' 
                      ? 'Rufen Sie uns jetzt an für eine kostenlose Beratung!'
                      : 'Call us now for a free consultation!'}
                  </p>
                  <a href="tel:+4366039575 87">
                    <Button variant="outline" size="lg" className="w-full bg-background text-foreground hover:bg-background" data-testid="button-quick-call">
                      <Phone className="w-4 h-4 mr-2" />
                      +43660 39 57 587
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
