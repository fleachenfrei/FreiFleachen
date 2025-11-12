import { useEffect } from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, ArrowRight } from 'lucide-react';
import { getAllDistricts } from '@/data/districts';
import { Button } from '@/components/ui/button';
import { updateMetaTags } from '@/lib/seo';

export default function Districts() {
  const districts = getAllDistricts();

  useEffect(() => {
    updateMetaTags({
      title: 'Räumung in allen Wiener Bezirken - Flächen Frei | 1010-1230 Wien',
      description: 'Professionelle Räumung in allen 23 Wiener Bezirken ✓ Schnell ✓ Zuverlässig ✓ Faire Preise. Kostenlose Besichtigung in ganz Wien ☎ +43660 39 57 587',
      url: '/bezirke',
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-districts-title">
                Räumung in allen Wiener Bezirken
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Professionelle Räumungs- und Räumungsdienste in allen 23 Bezirken Wiens. 
                Wählen Sie Ihren Bezirk für detaillierte Informationen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+4366039575587">
                  <Button size="lg" className="bg-secondary hover:bg-secondary text-secondary-foreground">
                    +43660 39 57 587
                  </Button>
                </a>
                <a href="mailto:info@flaechenfrei.at">
                  <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                    E-Mail senden
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Alle Wiener Bezirke im Überblick</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Von der Inneren Stadt bis nach Liesing - wir sind in ganz Wien für Sie da. 
                Klicken Sie auf Ihren Bezirk für spezifische Informationen zu unseren Leistungen vor Ort.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {districts.map((district, index) => (
                <Link key={district.slug} href={`/bezirke/${district.slug}`}>
                  <Card className="hover-elevate active-elevate-2 cursor-pointer h-full transition-all" data-testid={`card-district-${index}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-primary" />
                          </div>
                          <div className="text-2xl font-bold text-primary">{district.postalCode}</div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-xl" data-testid={`text-district-name-${index}`}>
                        {district.name}
                      </CardTitle>
                      <CardDescription>
                        Wien {district.name}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {district.shortSummary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {district.landmarks.slice(0, 3).map((landmark, i) => (
                          <div key={i} className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs">
                            {landmark}
                          </div>
                        ))}
                      </div>
                    </CardContent>                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Warum Flächen Frei in Wien?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Mit über 26 Jahren Erfahrung sind wir Ihr verlässlicher Partner für Räumungen in ganz Wien. 
                Egal in welchem Bezirk Sie uns brauchen - wir sind schnell vor Ort.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">23</div>
                  <div className="font-medium">Bezirke abgedeckt</div>
                  <div className="text-sm text-muted-foreground">Gesamtes Wiener Stadtgebiet</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">26+</div>
                  <div className="font-medium">Jahre Erfahrung</div>
                  <div className="text-sm text-muted-foreground">Professionelle Räumung</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="font-medium">Erreichbar</div>
                  <div className="text-sm text-muted-foreground">Flexible Terminvereinbarung</div>
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
