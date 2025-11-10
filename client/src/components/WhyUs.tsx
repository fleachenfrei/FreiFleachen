import { Award, Zap, DollarSign, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WhyUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Award,
      title: t.why.professional.title,
      description: t.why.professional.description,
    },
    {
      icon: Zap,
      title: t.why.fast.title,
      description: t.why.fast.description,
    },
    {
      icon: DollarSign,
      title: t.why.transparent.title,
      description: t.why.transparent.description,
    },
    {
      icon: Heart,
      title: t.why.satisfaction.title,
      description: t.why.satisfaction.description,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-why-title">
            {t.why.title}
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-why-subtitle">
            {t.why.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="text-center" data-testid={`why-item-${index}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold mb-2" data-testid={`text-why-title-${index}`}>
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`text-why-description-${index}`}>
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
