import { Shield, Clock, CheckCircle, Euro } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TrustBadges() {
  const { language } = useLanguage();

  const badges = [
    {
      icon: Shield,
      title: language === 'de' ? 'Versichert & Zertifiziert' : 'Insured & Certified',
      description: language === 'de' ? 'Vollständig versichert für Ihre Sicherheit' : 'Fully insured for your safety',
    },
    {
      icon: Clock,
      title: language === 'de' ? '24/7 Erreichbar' : '24/7 Available',
      description: language === 'de' ? 'Immer für Sie da, Tag und Nacht' : 'Always there for you, day and night',
    },
    {
      icon: CheckCircle,
      title: language === 'de' ? 'Kostenlose Besichtigung' : 'Free Consultation',
      description: language === 'de' ? 'Unverbindliche Beratung vor Ort' : 'Non-binding on-site consultation',
    },
    {
      icon: Euro,
      title: language === 'de' ? 'Faire Festpreise' : 'Fair Fixed Prices',
      description: language === 'de' ? 'Transparente Preise ohne versteckte Kosten' : 'Transparent prices without hidden costs',
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center gap-3"
                data-testid={`trust-badge-${index}`}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                    {badge.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
