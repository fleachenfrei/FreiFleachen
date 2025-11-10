import AboutUs from '../AboutUs';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function AboutUsExample() {
  return (
    <LanguageProvider>
      <AboutUs />
    </LanguageProvider>
  );
}
