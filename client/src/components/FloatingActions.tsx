import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40 md:hidden">
      <a href={`https://wa.me/${CONTACT_INFO.phoneLink}`} target="_blank" rel="noopener noreferrer">
        <Button
          size="icon"
          className="w-14 h-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white"
          data-testid="button-float-whatsapp"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </a>
      <a href={`tel:${CONTACT_INFO.phoneLink}`}>
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
