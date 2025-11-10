import { useEffect } from 'react';
import { useRoute } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import viennaImage from '@assets/generated_images/Vienna_landmark_Stephansdom_a1284b43.png';

const districtData: Record<string, { name: string; postalCode: string; description: string }> = {
  '1010-wien-innere-stadt': { name: 'Innere Stadt', postalCode: '1010', description: 'Historisches Zentrum Wiens' },
  '1020-wien-leopoldstadt': { name: 'Leopoldstadt', postalCode: '1020', description: 'Prater und Donauufer' },
  '1030-wien-landstrasse': { name: 'Landstraße', postalCode: '1030', description: 'Belvedere und Botschaftsviertel' },
  '1100-wien-favoriten': { name: 'Favoriten', postalCode: '1100', description: 'Größter Bezirk Wiens' },
  '1110-wien-simmering': { name: 'Simmering', postalCode: '1110', description: 'Industrie und Wohngebiet' },
  '1120-wien-meidling': { name: 'Meidling', postalCode: '1120', description: 'Traditionsreicher Bezirk' },
};

export default function DistrictPage() {
  const [match, params] = useRoute('/bezirke/:slug');
  const district = params?.slug ? districtData[params.slug] : null;

  useEffect(() => {
    if (district) {
      document.title = `Entrümpelung ${district.postalCode} Wien ${district.name} - Flächen Frei | Professionell & Schnell`;
    }
  }, [district]);

  if (!match || !district) {
    return null;
  }

  const services = [
    'Wohnungsentrümpelung',
    'Haushaltsauflösung',
    'Kellerentrümpelung',
    'Dachbodenentrümpelung',
    'Geschäftsentrümpelung',
    'Gartenentrümpelung',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="relative bg-primary text-primary-foreground py-16 md:py-24">
          <div className="absolute inset-0 opacity-20">
            <img src={viennaImage} alt="Wien" className="w-full h-full object-cover" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-district-title">
                Entrümpelung in {district.postalCode} Wien {district.name}
              </h1>
              <p className="text-xl text-primary-foreground/90" data-testid="text-district-subtitle">
                Professionelle Entrümpelungs- und Räumungsdienste direkt in Ihrer Nachbarschaft
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Ihr Experte für Entrümpelung in {district.name}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-4">
                    Flächen Frei ist Ihr zuverlässiger Partner für professionelle Entrümpelungen im {district.postalCode} Wien {district.name}. 
                    Mit über 26 Jahren Erfahrung bieten wir schnelle, diskrete und kostengünstige Entrümpelungsservices.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Egal ob Wohnung, Haus, Keller oder Dachboden - wir kümmern uns um alles und hinterlassen 
                    Ihre Räumlichkeiten in besenreinem Zustand. Kostenlose Besichtigung und transparente Preise garantiert!
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Unsere Leistungen in {district.name}</CardTitle>
                    <CardDescription>
                      Alle Entrümpelungsservices für {district.postalCode} Wien
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {services.map((service, i) => (
                        <div key={i} className="flex items-center gap-2" data-testid={`service-item-${i}`}>
                          <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Warum Flächen Frei in {district.name}?
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Lokale Expertise: Wir kennen {district.name} und seine Besonderheiten</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Schnelle Anfahrt: Kurze Wege bedeuten flexible Termine für Sie</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>26+ Jahre Erfahrung in Wien und Umgebung</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Kostenlose Besichtigung und Beratung vor Ort</span>
                    </div>
                  </div>
                </div>
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
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Telefon</div>
                        <a href="tel:+436602005610" className="font-medium hover:text-primary">
                          +43 660 200 5610
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">E-Mail</div>
                        <a href="mailto:office@flaechenfrei.at" className="font-medium hover:text-primary">
                          office@flaechenfrei.at
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Bezirk</div>
                        <div className="font-medium">{district.postalCode} Wien {district.name}</div>
                      </div>
                    </div>
                    <div className="pt-4 space-y-2">
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
