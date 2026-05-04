import Process from '../Process';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function ProcessExample() {
  return (
    <LanguageProvider>
      <Process />
    </LanguageProvider>
  );
}
