import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { translations, type Language } from '@/lib/i18n';
import { getLanguageFromPath } from '@/lib/urlMapping';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.de;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const urlLanguage = getLanguageFromPath(location);
  const [language, setLanguageState] = useState<Language>(urlLanguage);

  useEffect(() => {
    const detectedLanguage = getLanguageFromPath(location);
    if (detectedLanguage !== language) {
      setLanguageState(detectedLanguage);
      localStorage.setItem('language', detectedLanguage);
    }
  }, [location, language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
