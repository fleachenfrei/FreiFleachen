import { Calendar, CheckCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ZigzagDivider from './ZigzagDivider';

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Calendar,
      title: t.process.step1.title,
      description: t.process.step1.description,
      number: '01',
    },
    {
      icon: CheckCircle,
      title: t.process.step2.title,
      description: t.process.step2.description,
      number: '02',
    },
    {
      icon: Sparkles,
      title: t.process.step3.title,
      description: t.process.step3.description,
      number: '03',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-card">
      <div className="absolute top-0 left-0 right-0">
        <ZigzagDivider color="hsl(var(--card))" position="top" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-process-title">
            {t.process.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative" data-testid={`process-step-${index}`}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3" data-testid={`text-step-title-${index}`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`text-step-description-${index}`}>
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-border -z-10"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <ZigzagDivider color="white" position="bottom" />
      </div>
    </section>
  );
}
