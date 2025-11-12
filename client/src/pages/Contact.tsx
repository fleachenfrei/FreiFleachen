import { useEffect, useMemo } from 'react';
import { useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { updateMetaTags, addJsonLd, addMultipleJsonLd, getLocalBusinessSchema, getWebPageSchema } from '@/lib/seo';
import { CONTACT_INFO } from '@/lib/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getAllServices } from '@/data/services';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@shared/schema';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { getLocalizedContactPath, getAlternateUrls } from '@/lib/urlMapping';

export default function Contact() {
  const { t, language } = useLanguage();
  const [location] = useLocation();
  const { toast } = useToast();
  const services = getAllServices();
  const contactPath = getLocalizedContactPath(language);

  const localizedSchema = useMemo(() => {
    return z.object({
      name: z.string().min(2, t.validation.nameMin),
      email: z.string().email(t.validation.emailInvalid),
      phone: z.string().optional(),
      service: z.string().optional(),
      message: z.string().min(10, t.validation.messageMin),
    });
  }, [language, t.validation.nameMin, t.validation.emailInvalid, t.validation.messageMin]);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(localizedSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  useEffect(() => {
    if (Object.keys(form.formState.errors).length > 0) {
      form.trigger();
    }
  }, [language, form]);

  useEffect(() => {
    const title = language === 'de' 
      ? `Kontakt - Flächen Frei | Räumung Wien und Umgebung ☎ ${CONTACT_INFO.phone}`
      : `Contact - Flächen Frei | Clearing Services Vienna ☎ ${CONTACT_INFO.phone}`;
    
    const description = language === 'de'
      ? `Kontaktieren Sie Flächen Frei für professionelle Räumung in Wien und ganz Österreich ✓ Kostenlose Beratung ✓ Schnelle Termine ✓ 24/7 Erreichbar ☎ ${CONTACT_INFO.phone}`
      : `Contact Flächen Frei for professional clearing services in Vienna and throughout Austria ✓ Free consultation ✓ Fast appointments ✓ 24/7 available ☎ ${CONTACT_INFO.phone}`;

    const alternateUrls = getAlternateUrls(location);

    updateMetaTags({
      title,
      description,
      url: location,
      type: 'website',
      language,
      alternateUrls,
    });

    addMultipleJsonLd([
      getLocalBusinessSchema(language),
      getWebPageSchema(language, {
        type: 'ContactPage',
        name: language === 'de' ? 'Kontakt' : 'Contact',
        description,
        url: location,
      }),
    ], 'contact-page-schemas');
  }, [language, location, contactPath, t]);

  const handleSubmit = async (values: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: language === 'de' ? 'Anfrage gesendet!' : 'Request sent!',
          description: t.contact.form.success,
        });

        form.reset();
      } else {
        throw new Error(data.message || 'Unknown error');
      }
    } catch (error) {
      toast({
        title: language === 'de' ? 'Fehler' : 'Error',
        description: t.contact.form.error,
        variant: 'destructive',
      });
      console.error('Contact form error:', error);
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
                <CardDescription>24/7 {t.contact.available247}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href={`tel:${CONTACT_INFO.phoneLink}`} className="text-lg font-semibold text-primary hover:underline" data-testid="link-phone">
                  {CONTACT_INFO.phone}
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
                <CardDescription>{t.contact.quickResponse}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href={CONTACT_INFO.emailLink} className="text-lg font-semibold text-primary hover:underline" data-testid="link-email">
                  {CONTACT_INFO.email}
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
                <CardDescription>{t.contact.directMessage}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href={`https://wa.me/${CONTACT_INFO.phoneLink}`} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-primary hover:underline" data-testid="link-whatsapp">
                  {CONTACT_INFO.phone}
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
                    {t.contact.formDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.contact.form.name} *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={language === 'de' ? 'Max Mustermann' : 'John Doe'}
                                data-testid="input-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.contact.form.email} *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="mail@beispiel.at"
                                  data-testid="input-email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.contact.form.phone}</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="+43 660 123 4567"
                                  data-testid="input-phone"
                                  {...field}
                                  value={field.value || ''}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.contact.form.service}</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value || ''}>
                              <FormControl>
                                <SelectTrigger data-testid="select-service">
                                  <SelectValue placeholder={language === 'de' ? 'Wählen Sie eine Leistung' : 'Select a service'} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service.id} value={service.id}>
                                    {service.content[language].name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.contact.form.message} *</FormLabel>
                            <FormControl>
                              <Textarea
                                rows={6}
                                placeholder={language === 'de' 
                                  ? 'Beschreiben Sie bitte Ihr Anliegen...'
                                  : 'Please describe your request...'}
                                data-testid="input-message"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full" 
                        disabled={form.formState.isSubmitting}
                        data-testid="button-submit-form"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {form.formState.isSubmitting ? (language === 'de' ? 'Wird gesendet...' : 'Sending...') : t.contact.form.submit}
                      </Button>
                    </form>
                  </Form>
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
                    <p className="font-medium">{t.contact.headquarters}:</p>
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
                    {t.contact.immediateContact}
                  </h3>
                  <p className="mb-4 text-sm">
                    {t.contact.callNowForConsultation}
                  </p>
                  <a href={`tel:${CONTACT_INFO.phoneLink}`}>
                    <Button variant="outline" size="lg" className="w-full bg-background text-foreground hover:bg-background" data-testid="button-quick-call">
                      <Phone className="w-4 h-4 mr-2" />
                      {CONTACT_INFO.phone}
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
