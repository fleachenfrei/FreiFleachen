import ServiceAreas from '../ServiceAreas';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function ServiceAreasExample() {
  return (
    <LanguageProvider>
      <ServiceAreas />
    </LanguageProvider>
  );
}
