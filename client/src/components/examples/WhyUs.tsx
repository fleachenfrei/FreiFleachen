import WhyUs from '../WhyUs';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function WhyUsExample() {
  return (
    <LanguageProvider>
      <WhyUs />
    </LanguageProvider>
  );
}
