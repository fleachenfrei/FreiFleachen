import Services from '../Services';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function ServicesExample() {
  return (
    <LanguageProvider>
      <Services />
    </LanguageProvider>
  );
}
