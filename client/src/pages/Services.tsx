import { useEffect } from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { getAllServices } from '@/data/services';
import { updateMetaTags } from '@/lib/seo';
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

export default function Services() {
  const services = getAllServices();

  useEffect(() => {
    updateMetaTags({
      title: 'Unsere Leistungen - Räumung & Räumung in Wien | Flächen Frei',
      description: 'Professionelle Räumungs-Services in Wien ✓ Wohnungsräumung ✓ Haushaltsauflösung ✓ Keller & Dachboden ✓ Messie-Hilfe ✓ Alle Bezirke ☎ +43660 39 57 587',
      url: '/leistungen',
      type: 'website',
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-services-title">
                Unsere Räumungs-Leistungen
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Von der Wohnungsräumung bis zur Messie-Hilfe - wir bieten professionelle 
                Räumungsdienste für alle Anforderungen in ganz Wien.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary text-secondary-foreground" data-testid="button-call-services">
                  <a href="tel:+4366039575587">
                    Jetzt anrufen: +43660 39 57 587
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                  <a href="mailto:info@flaechenfrei.at">
                    E-Mail Anfrage
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Alle Leistungen im Überblick</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Wählen Sie die passende Dienstleistung für Ihre Bedürfnisse. 
                Jeder Service wird mit höchster Professionalität und Sorgfalt durchgeführt.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link key={service.slug} href={`/leistungen/${service.slug}`}>
                  <Card className="hover-elevate active-elevate-2 cursor-pointer h-full transition-all overflow-hidden" data-testid={`card-service-${index}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={serviceImages[service.slug]} 
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {service.shortDescription}
                      </p>
                      <div className="space-y-2 mb-4">
                        {service.benefits.slice(0, 3).map((benefit, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="ghost" className="w-full group">
                        Mehr erfahren
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Nicht sicher, welche Leistung Sie benötigen?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Rufen Sie uns einfach an oder schreiben Sie uns. Wir beraten Sie kostenlos 
              und unverbindlich zu allen Fragen rund um Räumung und Räumung in Wien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="tel:+4366039575587">
                  Kostenlose Beratung: +43660 39 57 587
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="mailto:info@flaechenfrei.at">
                  E-Mail senden
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
