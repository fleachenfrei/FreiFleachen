import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40 md:hidden">
      <a href="https://wa.me/436602005610" target="_blank" rel="noopener noreferrer">
        <Button
          size="icon"
          className="w-14 h-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white"
          data-testid="button-float-whatsapp"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </a>
      <a href="tel:+436602005610">
        <Button
          size="icon"
          className="w-14 h-14 rounded-full shadow-lg bg-secondary hover:bg-secondary text-secondary-foreground"
          data-testid="button-float-phone"
        >
          <Phone className="w-6 h-6" />
        </Button>
      </a>
    </div>
  );
}
