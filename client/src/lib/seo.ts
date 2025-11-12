export function updateMetaTags(config: {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
  keywords?: string;
}) {
  const baseUrl = window.location.origin;
  const fullUrl = `${baseUrl}${config.url}`;
  const defaultImage = `${baseUrl}/og-image.jpg`;

  document.title = config.title;

  const metaTags = [
    { name: 'description', content: config.description },
    { property: 'og:title', content: config.title },
    { property: 'og:description', content: config.description },
    { property: 'og:url', content: fullUrl },
    { property: 'og:type', content: config.type || 'website' },
    { property: 'og:image', content: config.image || defaultImage },
    { property: 'og:site_name', content: 'Flächen Frei' },
    { property: 'og:locale', content: 'de_AT' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: config.title },
    { name: 'twitter:description', content: config.description },
    { name: 'twitter:image', content: config.image || defaultImage },
  ];

  if (config.keywords) {
    metaTags.push({ name: 'keywords', content: config.keywords });
  }

  metaTags.forEach(({ name, property, content }) => {
    const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
    let element = document.querySelector(selector);

    if (!element) {
      element = document.createElement('meta');
      if (name) element.setAttribute('name', name);
      if (property) element.setAttribute('property', property);
      document.head.appendChild(element);
    }

    element.setAttribute('content', content);
  });

  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = fullUrl;
}

export function addJsonLd(data: Record<string, unknown>, id?: string) {
  if (id) {
    const existing = document.getElementById(id);
    if (existing) {
      existing.remove();
    }
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  if (id) {
    script.id = id;
  }
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export function addMultipleJsonLd(dataArray: Record<string, unknown>[], schemaId: string = 'page-schemas') {
  const existingScripts = document.querySelectorAll(`script[data-schema-group="${schemaId}"]`);
  existingScripts.forEach(script => script.remove());

  dataArray.forEach((data, index) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema-group', schemaId);
    script.setAttribute('data-schema-index', String(index));
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  });
}

export function getLocalBusinessSchema(language: 'de' | 'en' = 'de') {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://flaechenfrei.at/#business',
    'name': 'Flächen Frei',
    'alternateName': 'Flächen Frei Entrümpelung',
    'description': language === 'de' 
      ? 'Professionelle Entrümpelung und Räumungsdienste in Wien und ganz Österreich. Schnell, zuverlässig und zu fairen Preisen.'
      : 'Professional clearing and removal services in Vienna and throughout Austria. Fast, reliable, and at fair prices.',
    'url': 'https://flaechenfrei.at',
    'telephone': '+43660 39 57 587',
    'email': 'office@flaechenfrei.at',
    'priceRange': '€€',
    'image': 'https://flaechenfrei.at/og-image.jpg',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://flaechenfrei.at/logo.png',
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Herndlgasse 7/17',
      'addressLocality': 'Wien',
      'addressRegion': 'Wien',
      'postalCode': '1100',
      'addressCountry': 'AT',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 48.2082,
      'longitude': 16.3738,
    },
    'areaServed': [
      {
        '@type': 'City',
        'name': 'Wien',
      },
      {
        '@type': 'State',
        'name': 'Niederösterreich',
      },
      {
        '@type': 'State',
        'name': 'Burgenland',
      },
      {
        '@type': 'State',
        'name': 'Oberösterreich',
      },
      {
        '@type': 'State',
        'name': 'Salzburg',
      },
      {
        '@type': 'State',
        'name': 'Tirol',
      },
      {
        '@type': 'State',
        'name': 'Vorarlberg',
      },
      {
        '@type': 'State',
        'name': 'Kärnten',
      },
      {
        '@type': 'State',
        'name': 'Steiermark',
      },
    ],
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        'opens': '09:00',
        'closes': '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Saturday',
        'opens': '09:00',
        'closes': '12:00',
      },
    ],
    'sameAs': [
      'https://www.facebook.com/flaechenfrei',
      'https://www.instagram.com/flaechenfrei',
    ],
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '156',
      'bestRating': '5',
      'worstRating': '1',
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': language === 'de' ? 'Entrümpelungsdienste' : 'Clearing Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': language === 'de' ? 'Wohnungsentrümpelung' : 'Apartment Clearing',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': language === 'de' ? 'Haushaltsauflösung' : 'Household Dissolution',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': language === 'de' ? 'Kellerentrümpelung' : 'Basement Clearing',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': language === 'de' ? 'Geschäftsentrümpelung' : 'Commercial Clearing',
          },
        },
      ],
    },
  };
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `https://flaechenfrei.at${item.url}`,
    })),
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://flaechenfrei.at/#organization',
    'name': 'Flächen Frei',
    'url': 'https://flaechenfrei.at',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://flaechenfrei.at/logo.png',
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+43660 39 57 587',
      'contactType': 'customer service',
      'email': 'office@flaechenfrei.at',
      'areaServed': 'AT',
      'availableLanguage': ['de', 'en'],
    },
  };
}
