import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ZigzagDivider from './ZigzagDivider';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="absolute top-0 left-0 right-0">
        <ZigzagDivider color="hsl(var(--primary))" position="top" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-cta-title">
          {t.cta.title}
        </h2>
        <p className="text-xl mb-8 text-white/90" data-testid="text-cta-subtitle">
          {t.cta.subtitle}
        </p>
        <p className="text-lg mb-12 max-w-2xl mx-auto text-white/80" data-testid="text-cta-description">
          {t.cta.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:+436602005610">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary w-full sm:w-auto"
              data-testid="button-cta-phone"
            >
              <Phone className="mr-2 w-5 h-5" />
              +43 660 200 5610
            </Button>
          </a>
          <a href="mailto:office@flaechenfrei.at">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm w-full sm:w-auto"
              data-testid="button-cta-email"
            >
              <Mail className="mr-2 w-5 h-5" />
              E-Mail senden
            </Button>
          </a>
          <a href="https://wa.me/436602005610" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm w-full sm:w-auto"
              data-testid="button-cta-whatsapp"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
