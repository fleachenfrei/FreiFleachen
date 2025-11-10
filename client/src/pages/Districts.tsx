import { useEffect } from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const viennaDistricts = [
  { name: 'Innere Stadt', postalCode: '1010', slug: '1010-wien-innere-stadt' },
  { name: 'Leopoldstadt', postalCode: '1020', slug: '1020-wien-leopoldstadt' },
  { name: 'Landstraße', postalCode: '1030', slug: '1030-wien-landstrasse' },
  { name: 'Wieden', postalCode: '1040', slug: '1040-wien-wieden' },
  { name: 'Margareten', postalCode: '1050', slug: '1050-wien-margareten' },
  { name: 'Mariahilf', postalCode: '1060', slug: '1060-wien-mariahilf' },
  { name: 'Neubau', postalCode: '1070', slug: '1070-wien-neubau' },
  { name: 'Josefstadt', postalCode: '1080', slug: '1080-wien-josefstadt' },
  { name: 'Alsergrund', postalCode: '1090', slug: '1090-wien-alsergrund' },
  { name: 'Favoriten', postalCode: '1100', slug: '1100-wien-favoriten' },
  { name: 'Simmering', postalCode: '1110', slug: '1110-wien-simmering' },
  { name: 'Meidling', postalCode: '1120', slug: '1120-wien-meidling' },
  { name: 'Hietzing', postalCode: '1130', slug: '1130-wien-hietzing' },
  { name: 'Penzing', postalCode: '1140', slug: '1140-wien-penzing' },
  { name: 'Rudolfsheim-Fünfhaus', postalCode: '1150', slug: '1150-wien-rudolfsheim-fuenfhaus' },
  { name: 'Ottakring', postalCode: '1160', slug: '1160-wien-ottakring' },
  { name: 'Hernals', postalCode: '1170', slug: '1170-wien-hernals' },
  { name: 'Währing', postalCode: '1180', slug: '1180-wien-waehring' },
  { name: 'Döbling', postalCode: '1190', slug: '1190-wien-doebling' },
  { name: 'Brigittenau', postalCode: '1200', slug: '1200-wien-brigittenau' },
  { name: 'Floridsdorf', postalCode: '1210', slug: '1210-wien-floridsdorf' },
  { name: 'Donaustadt', postalCode: '1220', slug: '1220-wien-donaustadt' },
  { name: 'Liesing', postalCode: '1230', slug: '1230-wien-liesing' },
];

export default function Districts() {
  useEffect(() => {
    document.title = 'Entrümpelung in allen Wiener Bezirken - Flächen Frei | 1010-1230 Wien';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-districts-title">
              Entrümpelung in allen Wiener Bezirken
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Professionelle Entrümpelungs- und Räumungsdienste in allen 23 Bezirken Wiens
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {viennaDistricts.map((district, index) => (
                <Link key={district.slug} href={`/bezirke/${district.slug}`}>
                  <Card className="hover-elevate cursor-pointer h-full" data-testid={`card-district-${index}`}>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-primary">{district.postalCode}</div>
                      </div>
                      <CardTitle data-testid={`text-district-name-${index}`}>
                        {district.name}
                      </CardTitle>
                      <CardDescription>
                        Wien {district.name}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Professionelle Entrümpelung in {district.postalCode} Wien. 
                        Kostenlose Besichtigung, faire Preise.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
