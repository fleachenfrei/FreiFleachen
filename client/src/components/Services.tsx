import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Building2, Heart, Warehouse, Truck, Archive } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import apartmentImage from '@assets/generated_images/Apartment_cleaning_before-after_cf8e77b7.png';
import basementImage from '@assets/generated_images/Basement_clearing_service_45b66ae1.png';
import houseImage from '@assets/generated_images/House_clearance_service_e0229004.png';
import warehouseImage from '@assets/generated_images/Warehouse_clearing_service_06fa396e.png';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Home,
      title: t.services.apartment.title,
      description: t.services.apartment.description,
      image: apartmentImage,
      slug: 'wohnungsräumungen',
    },
    {
      icon: Building2,
      title: t.services.house.title,
      description: t.services.house.description,
      image: houseImage,
      slug: 'haushaltsauflösung',
    },
    {
      icon: Heart,
      title: t.services.estate.title,
      description: t.services.estate.description,
      image: apartmentImage,
      slug: 'verlassenschaftsräumung',
    },
    {
      icon: Warehouse,
      title: t.services.warehouse.title,
      description: t.services.warehouse.description,
      image: warehouseImage,
      slug: 'geschäftsräumung',
    },
    {
      icon: Truck,
      title: t.services.transport.title,
      description: t.services.transport.description,
      image: houseImage,
      slug: 'umzugsservice',
    },
    {
      icon: Archive,
      title: t.services.basement.title,
      description: t.services.basement.description,
      image: basementImage,
      slug: 'kellerräumung',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-subtitle">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-elevate overflow-hidden" data-testid={`card-service-${index}`}>
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    data-testid={`img-service-${index}`}
                  />
                </div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </CardDescription>
                  <Link href={`/leistungen/${service.slug}`}>
                    <Button variant="outline" size="sm" className="w-full" data-testid={`button-service-${index}`}>
                      Jetzt anfragen
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
