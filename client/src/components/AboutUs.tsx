import { Award, Users, Truck, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutUs() {
  const { language } = useLanguage();

  const stats = [
    { 
      icon: Award, 
      value: '26+', 
      label: language === 'de' ? 'Jahre Erfahrung' : 'Years Experience' 
    },
    { 
      icon: Users, 
      value: '5000+', 
      label: language === 'de' ? 'Zufriedene Kunden' : 'Happy Customers' 
    },
    { 
      icon: Truck, 
      value: '10000+', 
      label: language === 'de' ? 'Erfolgreiche Entrümpelungen' : 'Successful Clearances' 
    },
    { 
      icon: Heart, 
      value: '100%', 
      label: language === 'de' ? 'Kundenzufriedenheit' : 'Customer Satisfaction' 
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-about-title">
              {language === 'de' ? 'Über Flächen Frei' : 'About Flächen Frei'}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {language === 'de' 
                  ? 'Seit über 26 Jahren sind wir Ihr vertrauenswürdiger Partner für professionelle Entrümpelungen in Wien und Umgebung. Was als kleines Familienunternehmen begann, hat sich zu einem der führenden Anbieter für Entrümpelung und Räumung in der Region entwickelt.'
                  : 'For over 26 years, we have been your trusted partner for professional clearances in Vienna and surrounding areas. What started as a small family business has grown into one of the leading providers for clearing and removal services in the region.'}
              </p>
              <p>
                {language === 'de'
                  ? 'Unser erfahrenes Team besteht aus geschulten Fachkräften, die mit modernster Ausrüstung arbeiten. Wir legen großen Wert auf Pünktlichkeit, Zuverlässigkeit und absolute Diskretion bei jedem Auftrag.'
                  : 'Our experienced team consists of trained professionals who work with state-of-the-art equipment. We place great emphasis on punctuality, reliability and absolute discretion with every job.'}
              </p>
              <p>
                {language === 'de'
                  ? 'Egal ob Wohnungsentrümpelung, Haushaltsauflösung oder Geschäftsentrümpelung - wir sind Ihr kompetenter Ansprechpartner für alle Arten von Räumungen in Wien. Kostenlose Besichtigung und transparente Preise sind bei uns selbstverständlich.'
                  : 'Whether apartment clearing, household dissolution or business clearance - we are your competent contact for all types of clearances in Vienna. Free consultation and transparent prices are a matter of course for us.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="bg-background rounded-lg p-6 text-center"
                  data-testid={`stat-${index}`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
