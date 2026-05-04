import { Calendar, CheckCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      icon: Calendar,
      title: t.process.step1.title,
      description: t.process.step1.description,
    },
    {
      number: '02',
      icon: CheckCircle,
      title: t.process.step2.title,
      description: t.process.step2.description,
    },
    {
      number: '03',
      icon: Sparkles,
      title: t.process.step3.title,
      description: t.process.step3.description,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="section-how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-how-it-works-title">
            {t.process.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative" data-testid={`card-how-step-${index}`}>
                <div className="flex flex-col items-center text-center">
                  {/* Icon with badge */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary" data-testid={`icon-how-step-${index}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-sm font-bold text-secondary-foreground" data-testid={`badge-how-step-${index}`}>{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`text-how-step-title-${index}`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed" data-testid={`text-how-step-description-${index}`}>
                    {step.description}
                  </p>
                </div>

                {/* Connector line (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
