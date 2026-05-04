import { Users, Star, Briefcase, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from './ui/card';

export default function TrustStats() {
  const { language } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: '5000+',
      label: language === 'de' ? 'Zufriedene Kunden' : 'Satisfied Customers',
      labelEn: 'Satisfied Customers',
    },
    {
      icon: Star,
      value: '4.9/5',
      label: language === 'de' ? 'Kundenbewertung' : 'Customer Rating',
      labelEn: 'Customer Rating',
    },
    {
      icon: Briefcase,
      value: '26+',
      label: language === 'de' ? 'Jahre Erfahrung' : 'Years of Experience',
      labelEn: 'Years of Experience',
    },
    {
      icon: Award,
      value: '100%',
      label: language === 'de' ? 'Kundenzufriedenheit' : 'Customer Satisfaction',
      labelEn: 'Customer Satisfaction',
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-stats-title">
            {language === 'de' ? 'Zahlen die überzeugen' : 'Convincing Numbers'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Seit über 26 Jahren vertrauen Kunden in ganz Österreich auf unsere professionellen Räumungsdienste.'
              : 'For over 26 years, customers throughout Austria have trusted our professional clearing services.'}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center hover-elevate" data-testid={`stat-card-${index}`}>
                <CardContent className="pt-6 pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2" data-testid={`stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`stat-label-${index}`}>
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
