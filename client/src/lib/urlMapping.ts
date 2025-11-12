export type Language = 'de' | 'en';

interface RouteConfig {
  de: string;
  en: string;
}

export const routeMapping: Record<string, RouteConfig> = {
  home: { de: '/de', en: '/en' },
  services: { de: '/de/leistungen', en: '/en/services' },
  districts: { de: '/de/bezirke', en: '/en/districts' },
  bundeslaender: { de: '/de/bundeslaender', en: '/en/federal-states' },
  contact: { de: '/de/kontakt', en: '/en/contact' },
};

export function getLocalizedPath(basePath: string, language: Language): string {
  if (basePath === '/' || basePath === '/de' || basePath === '/en') {
    return language === 'de' ? '/de' : '/en';
  }

  const pathWithoutLang = basePath.replace(/^\/(de|en)/, '');
  
  const pathMappings: Record<string, RouteConfig> = {
    '/leistungen': routeMapping.services,
    '/services': routeMapping.services,
    '/bezirke': routeMapping.districts,
    '/districts': routeMapping.districts,
    '/bundeslaender': routeMapping.bundeslaender,
    '/federal-states': routeMapping.bundeslaender,
    '/kontakt': routeMapping.contact,
    '/contact': routeMapping.contact,
  };

  const serviceMapping: Record<string, string> = {
    'wohnungsraeumung': 'apartment-clearing',
    'haushaltsaufloesung': 'household-dissolution',
    'kellerraeumung': 'basement-clearing',
    'dachbodenraeumung': 'attic-clearing',
    'geschaeftsraeumung': 'commercial-clearing',
    'buroraeumung': 'office-clearing',
    'entrümpelung': 'decluttering',
    'sperrmullentsorgung': 'bulk-waste-disposal',
  };

  const reverseServiceMapping = Object.fromEntries(
    Object.entries(serviceMapping).map(([k, v]) => [v, k])
  );

  for (const [path, config] of Object.entries(pathMappings)) {
    if (pathWithoutLang.startsWith(path)) {
      const remainder = pathWithoutLang.slice(path.length);
      if (remainder) {
        if (path === '/leistungen' || path === '/services') {
          const slug = remainder.slice(1);
          let translatedSlug = slug;
          if (language === 'en' && serviceMapping[slug]) {
            translatedSlug = serviceMapping[slug];
          } else if (language === 'de' && reverseServiceMapping[slug]) {
            translatedSlug = reverseServiceMapping[slug];
          }
          return `${config[language]}/${translatedSlug}`;
        }
        return `${config[language]}${remainder}`;
      }
      return config[language];
    }
  }

  return `/${language}${pathWithoutLang}`;
}

export function getLanguageFromPath(pathname: string): Language {
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/de')) return 'de';
  return 'de';
}

export function getPathWithoutLanguage(pathname: string): string {
  return pathname.replace(/^\/(de|en)/, '') || '/';
}

export function getAlternateUrls(pathname: string): { de: string; en: string } {
  const currentLang = getLanguageFromPath(pathname);
  const pathWithoutLang = getPathWithoutLanguage(pathname);
  
  return {
    de: getLocalizedPath(pathWithoutLang, 'de'),
    en: getLocalizedPath(pathWithoutLang, 'en'),
  };
}
