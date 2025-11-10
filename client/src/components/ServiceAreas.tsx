import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServiceAreas() {
  const { language } = useLanguage();

  const districts = [
    { name: '1010 Innere Stadt', slug: '1010-wien-innere-stadt' },
    { name: '1020 Leopoldstadt', slug: '1020-wien-leopoldstadt' },
    { name: '1030 Landstraße', slug: '1030-wien-landstrasse' },
    { name: '1100 Favoriten', slug: '1100-wien-favoriten' },
    { name: '1110 Simmering', slug: '1110-wien-simmering' },
    { name: '1120 Meidling', slug: '1120-wien-meidling' },
    { name: '1130 Hietzing', slug: '1130-wien-hietzing' },
    { name: '1140 Penzing', slug: '1140-wien-penzing' },
    { name: '1150 Rudolfsheim', slug: '1150-wien-rudolfsheim-fuenfhaus' },
    { name: '1160 Ottakring', slug: '1160-wien-ottakring' },
    { name: '1170 Hernals', slug: '1170-wien-hernals' },
    { name: '1180 Währing', slug: '1180-wien-waehring' },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-service-areas-title">
            {language === 'de' ? 'Unsere Einsatzgebiete in Wien' : 'Our Service Areas in Vienna'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de' 
              ? 'Wir sind in allen 23 Wiener Bezirken für Sie da. Professionelle Entrümpelung direkt in Ihrer Nähe.'
              : 'We serve all 23 Vienna districts. Professional clearing services right in your neighborhood.'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {districts.map((district, index) => (
            <Link key={district.slug} href={`/bezirke/${district.slug}`}>
              <div 
                className="flex items-center gap-2 p-3 rounded-md border border-border hover-elevate cursor-pointer"
                data-testid={`area-link-${index}`}
              >
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium">{district.name}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/bezirke">
            <Button variant="outline" size="lg" data-testid="button-all-districts">
              {language === 'de' ? 'Alle Bezirke anzeigen' : 'View All Districts'}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
