export interface CityInfo {
  name: string;
  slug: string;
  bundesland: string;
  bundeslandSlug: string;
  postalCode: string;
  population?: number;
  description: string;
  metaDescription: string;
  services: string[];
  benefits: string[];
  coverage: string;
  faq: Array<{ question: string; answer: string }>;
}

export const cities: Record<string, CityInfo[]> = {
  niederösterreich: [
    {
      name: 'St. Pölten',
      slug: 'st-poelten',
      bundesland: 'Niederösterreich',
      bundeslandSlug: 'niederösterreich',
      postalCode: '3100',
      population: 55000,
      description: 'Professionelle Räumung und Transport in St. Pölten, der Landeshauptstadt von Niederösterreich. Wir sind Ihr zuverlässiger Partner für Wohnungsräumung, Haushaltsauflösung und Kellerräumung in St. Pölten und Umgebung.',
      metaDescription: 'Räumung St. Pölten ✓ Wohnungsräumung ✓ Haushaltsauflösung ✓ Transport ✓ Schnell & zuverlässig in ganz St. Pölten ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Haushaltsauflösung', 'Kellerräumung', 'Dachbodenräumung', 'Geschäftsräumung', 'Transportservice'],
      benefits: [
        'Schnelle Anfahrt in St. Pölten und Umgebung',
        'Erfahrung mit Altbauten im Stadtzentrum',
        'Flexible Termine auch am Wochenende',
        'Besenreine Übergabe garantiert',
        'Faire Festpreise nach kostenloser Besichtigung'
      ],
      coverage: 'Wir sind in ganz St. Pölten tätig - vom Zentrum bis zu den Stadtteilen wie Wagram, Spratzern, Pottenbrunn und Viehofen.',
      faq: [
        {
          question: 'Wie schnell können Sie in St. Pölten anfahren?',
          answer: 'Wir sind innerhalb von 30-45 Minuten in St. Pölten vor Ort. Für dringende Fälle bieten wir Express-Service innerhalb von 24 Stunden.'
        },
        {
          question: 'Arbeiten Sie auch in den Stadtteilen von St. Pölten?',
          answer: 'Ja, wir arbeiten in allen Stadtteilen von St. Pölten - Wagram, Spratzern, Pottenbrunn, Viehofen und allen weiteren Bezirken der Landeshauptstadt.'
        }
      ]
    },
    {
      name: 'Wiener Neustadt',
      slug: 'wiener-neustadt',
      bundesland: 'Niederösterreich',
      bundeslandSlug: 'niederösterreich',
      postalCode: '2700',
      population: 45000,
      description: 'Professionelle Räumungsdienste in Wiener Neustadt. Von der Innenstadt bis zu den Außenbezirken - wir räumen Wohnungen, Häuser und Keller schnell und zuverlässig.',
      metaDescription: 'Räumung Wiener Neustadt ✓ Wohnungsräumung ✓ Kellerräumung ✓ Transport ✓ Schnell & professionell ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung', 'Transportservice'],
      benefits: [
        'Kurze Anfahrtswege aus Wien',
        'Erfahrung mit historischen Gebäuden',
        'Besenreine Übergabe',
        'Transparente Festpreise'
      ],
      coverage: 'Gesamtes Stadtgebiet Wiener Neustadt und Umgebung.',
      faq: [
        {
          question: 'Wie lange dauert eine Wohnungsräumung in Wiener Neustadt?',
          answer: 'Eine durchschnittliche 70m² Wohnung räumen wir in 4-6 Stunden. Bei größeren Objekten oder Altbauten ohne Lift kann es 6-8 Stunden dauern.'
        }
      ]
    },
    {
      name: 'Baden',
      slug: 'baden',
      bundesland: 'Niederösterreich',
      bundeslandSlug: 'niederösterreich',
      postalCode: '2500',
      population: 26000,
      description: 'Räumung und Transport in Baden bei Wien. Spezialisiert auf die besonderen Anforderungen der Kurstadt mit ihren historischen Villen und Altbauten.',
      metaDescription: 'Räumung Baden bei Wien ✓ Villenräumung ✓ Altbau-Expertise ✓ Diskret & professionell ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Villenräumung', 'Haushaltsauflösung', 'Kellerräumung'],
      benefits: [
        'Erfahrung mit historischen Villen',
        'Diskrete Abwicklung in gehobenen Wohngegenden',
        'Schonendes Arbeiten in denkmalgeschützten Gebäuden',
        'Kurze Anfahrt aus Wien'
      ],
      coverage: 'Baden Zentrum, Weikersdorf, Leesdorf und alle Ortsteile.',
      faq: [
        {
          question: 'Können Sie auch denkmalgeschützte Villen in Baden räumen?',
          answer: 'Ja, wir haben umfangreiche Erfahrung mit historischen Gebäuden und Villen in Baden. Wir arbeiten besonders schonend und achten auf die Bausubstanz.'
        }
      ]
    },
    {
      name: 'Klosterneuburg',
      slug: 'klosterneuburg',
      bundesland: 'Niederösterreich',
      bundeslandSlug: 'niederösterreich',
      postalCode: '3400',
      population: 28000,
      description: 'Professionelle Räumung in Klosterneuburg. Schnelle Anfahrt aus Wien, spezialisiert auf Wohnungen und Häuser in allen Stadtteilen.',
      metaDescription: 'Räumung Klosterneuburg ✓ Wohnungsräumung ✓ Hausräumung ✓ Schnelle Anfahrt ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung', 'Transportservice'],
      benefits: [
        'Sehr schnelle Anfahrt aus Wien',
        'Lokale Marktkenntnis',
        'Flexible Terminvereinbarung',
        'Faire Preise'
      ],
      coverage: 'Alle Stadtteile von Klosterneuburg inklusive Kierling, Weidling und Kritzendorf.',
      faq: []
    },
    {
      name: 'Mödling',
      slug: 'moedling',
      bundesland: 'Niederösterreich',
      bundeslandSlug: 'niederösterreich',
      postalCode: '2340',
      population: 21000,
      description: 'Räumungsdienste in Mödling. Von kleinen Wohnungen bis zu großen Häusern - wir räumen professionell und zuverlässig.',
      metaDescription: 'Räumung Mödling ✓ Professionell & schnell ✓ Wohnungen & Häuser ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung'],
      benefits: [
        'Schnelle Anfahrt aus Wien Süd',
        'Erfahrung mit Einfamilienhäusern',
        'Besenreine Übergabe',
        'Transparente Preise'
      ],
      coverage: 'Mödling und alle umliegenden Gemeinden.',
      faq: []
    },
    {
      name: 'Krems an der Donau',
      slug: 'krems',
      bundesland: 'Niederösterreich',
      bundeslandSlug: 'niederösterreich',
      postalCode: '3500',
      population: 25000,
      description: 'Räumung in Krems an der Donau und Umgebung. Professionelle Dienstleistungen für die gesamte Wachau-Region.',
      metaDescription: 'Räumung Krems ✓ Wachau ✓ Wohnungsräumung ✓ Zuverlässig ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung', 'Geschäftsräumung'],
      benefits: [
        'Regionale Präsenz in der Wachau',
        'Erfahrung mit Weinkellern',
        'Flexible Terminvereinbarung',
        'Faire Konditionen'
      ],
      coverage: 'Krems, Stein, Mautern und gesamte Wachau-Region.',
      faq: []
    },
    {
      name: 'Amstetten',
      slug: 'amstetten',
      bundesland: 'Niederösterreich',
      bundeslandSlug: 'niederösterreich',
      postalCode: '3300',
      population: 24000,
      description: 'Professionelle Räumung in Amstetten. Schnell und zuverlässig für Wohnungen, Häuser und Gewerbeobjekte.',
      metaDescription: 'Räumung Amstetten ✓ Professionell ✓ Wohnungen & Gewerbe ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Geschäftsräumung', 'Kellerräumung'],
      benefits: [
        'Regionale Expertise im Mostviertel',
        'Schnelle Abwicklung',
        'Besenreine Übergabe',
        'Festpreisgarantie'
      ],
      coverage: 'Amstetten und Umgebung im Mostviertel.',
      faq: []
    },
    {
      name: 'Traiskirchen',
      slug: 'traiskirchen',
      bundesland: 'Niederösterreich',
      bundeslandSlug: 'niederösterreich',
      postalCode: '2514',
      population: 18000,
      description: 'Räumung in Traiskirchen. Schnelle Anfahrt aus Wien für alle Räumungsarbeiten.',
      metaDescription: 'Räumung Traiskirchen ✓ Schnelle Anfahrt ✓ Professionell ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung'],
      benefits: [
        'Sehr kurze Anfahrt aus Wien',
        'Flexible Termine',
        'Transparente Preise',
        'Professionelle Abwicklung'
      ],
      coverage: 'Traiskirchen und Umgebung.',
      faq: []
    }
  ],
  burgenland: [
    {
      name: 'Eisenstadt',
      slug: 'eisenstadt',
      bundesland: 'Burgenland',
      bundeslandSlug: 'burgenland',
      postalCode: '7000',
      population: 15000,
      description: 'Räumung in Eisenstadt, der Landeshauptstadt des Burgenlandes. Professionelle Dienstleistungen für Wohnungen, Häuser und Geschäfte.',
      metaDescription: 'Räumung Eisenstadt ✓ Burgenland ✓ Wohnungen & Häuser ✓ Professionell ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Geschäftsräumung', 'Kellerräumung'],
      benefits: [
        'Kurze Anfahrt aus Wien',
        'Regionale Expertise im Burgenland',
        'Flexible Terminvereinbarung',
        'Faire Festpreise'
      ],
      coverage: 'Eisenstadt und gesamtes nördliches Burgenland.',
      faq: [
        {
          question: 'Wie schnell können Sie in Eisenstadt sein?',
          answer: 'Von Wien aus erreichen wir Eisenstadt in etwa 45-60 Minuten. Termine können oft schon innerhalb von 24-48 Stunden vereinbart werden.'
        }
      ]
    },
    {
      name: 'Rust',
      slug: 'rust',
      bundesland: 'Burgenland',
      bundeslandSlug: 'burgenland',
      postalCode: '7071',
      population: 2000,
      description: 'Räumung in Rust am Neusiedlersee. Spezialisiert auf historische Gebäude in der Freistadt.',
      metaDescription: 'Räumung Rust ✓ Neusiedlersee ✓ Historische Gebäude ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung'],
      benefits: [
        'Erfahrung mit historischen Gebäuden',
        'Schonendes Arbeiten',
        'Regionale Präsenz',
        'Diskrete Abwicklung'
      ],
      coverage: 'Rust und Neusiedlersee-Region.',
      faq: []
    },
    {
      name: 'Neusiedl am See',
      slug: 'neusiedl-am-see',
      bundesland: 'Burgenland',
      bundeslandSlug: 'burgenland',
      postalCode: '7100',
      population: 8000,
      description: 'Professionelle Räumung in Neusiedl am See und Umgebung.',
      metaDescription: 'Räumung Neusiedl am See ✓ Burgenland ✓ Professionell ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung'],
      benefits: [
        'Regionale Expertise',
        'Schnelle Abwicklung',
        'Faire Preise',
        'Besenreine Übergabe'
      ],
      coverage: 'Neusiedl am See und Seewinkel.',
      faq: []
    },
    {
      name: 'Oberwart',
      slug: 'oberwart',
      bundesland: 'Burgenland',
      bundeslandSlug: 'burgenland',
      postalCode: '7400',
      population: 7000,
      description: 'Räumungsdienste in Oberwart im Südburgenland.',
      metaDescription: 'Räumung Oberwart ✓ Südburgenland ✓ Zuverlässig ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung'],
      benefits: [
        'Regionale Präsenz im Südburgenland',
        'Flexible Termine',
        'Transparente Preise',
        'Professionelle Abwicklung'
      ],
      coverage: 'Oberwart und Südburgenland.',
      faq: []
    }
  ],
  oberösterreich: [
    {
      name: 'Linz',
      slug: 'linz',
      bundesland: 'Oberösterreich',
      bundeslandSlug: 'oberösterreich',
      postalCode: '4020',
      population: 206000,
      description: 'Professionelle Räumung in Linz, der Landeshauptstadt von Oberösterreich. Schnell, zuverlässig und zu fairen Preisen in allen Stadtteilen.',
      metaDescription: 'Räumung Linz ✓ Wohnungsräumung ✓ Haushaltsauflösung ✓ Alle Bezirke ✓ Schnell & professionell ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Haushaltsauflösung', 'Kellerräumung', 'Geschäftsräumung', 'Dachbodenräumung', 'Transportservice'],
      benefits: [
        'Lokale Präsenz in Linz',
        'Alle Stadtbezirke abgedeckt',
        'Erfahrung mit Altbauten und Neubauten',
        'Flexible Terminvereinbarung',
        'Besenreine Übergabe garantiert'
      ],
      coverage: 'Alle Stadtteile von Linz - Urfahr, Zentrum, Ebelsberg, Pichling, Pöstlingberg und alle weiteren Bezirke.',
      faq: [
        {
          question: 'In welchen Stadtteilen von Linz sind Sie tätig?',
          answer: 'Wir arbeiten in allen Stadtteilen von Linz - von Urfahr über das Zentrum bis nach Ebelsberg, Pichling und den Pöstlingberg. Kein Stadtteil ist zu weit.'
        },
        {
          question: 'Wie lange dauert eine Räumung in Linz?',
          answer: 'Eine durchschnittliche 70m² Wohnung räumen wir in 4-6 Stunden. Bei größeren Objekten oder besonderen Anforderungen kann es länger dauern.'
        }
      ]
    },
    {
      name: 'Wels',
      slug: 'wels',
      bundesland: 'Oberösterreich',
      bundeslandSlug: 'oberösterreich',
      postalCode: '4600',
      population: 62000,
      description: 'Räumung in Wels - professionell, schnell und zuverlässig in der zweitgrößten Stadt Oberösterreichs.',
      metaDescription: 'Räumung Wels ✓ Wohnungsräumung ✓ Hausräumung ✓ Professionell ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung', 'Geschäftsräumung'],
      benefits: [
        'Regionale Präsenz in Wels',
        'Schnelle Abwicklung',
        'Erfahrung mit Altstadt-Gebäuden',
        'Transparente Festpreise'
      ],
      coverage: 'Gesamtes Stadtgebiet Wels.',
      faq: []
    },
    {
      name: 'Steyr',
      slug: 'steyr',
      bundesland: 'Oberösterreich',
      bundeslandSlug: 'oberösterreich',
      postalCode: '4400',
      population: 38000,
      description: 'Professionelle Räumungsdienste in Steyr. Expertise für historische Gebäude in der Altstadt.',
      metaDescription: 'Räumung Steyr ✓ Altstadt-Expertise ✓ Professionell ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung'],
      benefits: [
        'Erfahrung mit Altstadt-Gebäuden',
        'Schonendes Arbeiten',
        'Lokale Marktkenntnis',
        'Besenreine Übergabe'
      ],
      coverage: 'Steyr und Umgebung.',
      faq: []
    },
    {
      name: 'Leonding',
      slug: 'leonding',
      bundesland: 'Oberösterreich',
      bundeslandSlug: 'oberösterreich',
      postalCode: '4060',
      population: 29000,
      description: 'Räumung in Leonding bei Linz. Schnelle Anfahrt, professioneller Service.',
      metaDescription: 'Räumung Leonding ✓ Bei Linz ✓ Schnell & zuverlässig ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung'],
      benefits: [
        'Sehr schnelle Anfahrt aus Linz',
        'Flexible Termine',
        'Faire Preise',
        'Professionelle Abwicklung'
      ],
      coverage: 'Leonding und angrenzende Gemeinden.',
      faq: []
    }
  ],
  salzburg: [
    {
      name: 'Salzburg',
      slug: 'salzburg',
      bundesland: 'Salzburg',
      bundeslandSlug: 'salzburg',
      postalCode: '5020',
      population: 156000,
      description: 'Professionelle Räumung in der Stadt Salzburg. Von der Altstadt bis zu den modernen Stadtteilen - wir sind Ihr Partner für alle Räumungsarbeiten.',
      metaDescription: 'Räumung Salzburg ✓ Altstadt ✓ Alle Bezirke ✓ Professionell & diskret ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Haushaltsauflösung', 'Kellerräumung', 'Geschäftsräumung', 'Dachbodenräumung'],
      benefits: [
        'Erfahrung mit denkmalgeschützten Gebäuden',
        'Diskrete Abwicklung in der Altstadt',
        'Alle Stadtteile abgedeckt',
        'Flexible Terminvereinbarung',
        'Besenreine Übergabe'
      ],
      coverage: 'Alle Stadtteile - Altstadt, Neustadt, Maxglan, Gnigl, Lehen und alle weiteren Bezirke.',
      faq: [
        {
          question: 'Können Sie auch in der Salzburger Altstadt räumen?',
          answer: 'Ja, wir haben umfangreiche Erfahrung mit engen Gassen und denkmalgeschützten Gebäuden in der Altstadt. Wir arbeiten besonders schonend und diskret.'
        }
      ]
    },
    {
      name: 'Hallein',
      slug: 'hallein',
      bundesland: 'Salzburg',
      bundeslandSlug: 'salzburg',
      postalCode: '5400',
      population: 21000,
      description: 'Räumungsdienste in Hallein im Tennengau.',
      metaDescription: 'Räumung Hallein ✓ Tennengau ✓ Professionell ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung'],
      benefits: [
        'Regionale Präsenz im Tennengau',
        'Schnelle Abwicklung',
        'Faire Preise',
        'Besenreine Übergabe'
      ],
      coverage: 'Hallein und Tennengau.',
      faq: []
    },
    {
      name: 'Saalfelden',
      slug: 'saalfelden',
      bundesland: 'Salzburg',
      bundeslandSlug: 'salzburg',
      postalCode: '5760',
      population: 16000,
      description: 'Professionelle Räumung in Saalfelden im Pinzgau.',
      metaDescription: 'Räumung Saalfelden ✓ Pinzgau ✓ Zuverlässig ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung'],
      benefits: [
        'Regionale Expertise im Pinzgau',
        'Flexible Termine',
        'Transparente Preise',
        'Professionelle Abwicklung'
      ],
      coverage: 'Saalfelden und Pinzgau-Region.',
      faq: []
    }
  ],
  tirol: [
    {
      name: 'Innsbruck',
      slug: 'innsbruck',
      bundesland: 'Tirol',
      bundeslandSlug: 'tirol',
      postalCode: '6020',
      population: 132000,
      description: 'Professionelle Räumung in Innsbruck, der Landeshauptstadt von Tirol. Schnell und zuverlässig in allen Stadtteilen.',
      metaDescription: 'Räumung Innsbruck ✓ Alle Stadtteile ✓ Altstadt-Expertise ✓ Professionell ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Haushaltsauflösung', 'Kellerräumung', 'Geschäftsräumung', 'Dachbodenräumung'],
      benefits: [
        'Lokale Präsenz in Innsbruck',
        'Erfahrung mit Altstadtgebäuden',
        'Alle Stadtbezirke abgedeckt',
        'Besenreine Übergabe',
        'Flexible Termine'
      ],
      coverage: 'Alle Stadtteile von Innsbruck - Altstadt, Wilten, Hötting, Pradl und alle weiteren Bezirke.',
      faq: [
        {
          question: 'Arbeiten Sie auch in der engen Altstadt von Innsbruck?',
          answer: 'Ja, wir haben große Erfahrung mit den engen Gassen und historischen Gebäuden der Innsbrucker Altstadt. Wir arbeiten schonend und mit spezieller Ausrüstung.'
        }
      ]
    },
    {
      name: 'Kufstein',
      slug: 'kufstein',
      bundesland: 'Tirol',
      bundeslandSlug: 'tirol',
      postalCode: '6330',
      population: 19000,
      description: 'Räumung in Kufstein. Professionelle Dienstleistungen im Tiroler Unterland.',
      metaDescription: 'Räumung Kufstein ✓ Tiroler Unterland ✓ Professionell ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung'],
      benefits: [
        'Regionale Präsenz im Unterland',
        'Schnelle Abwicklung',
        'Faire Preise',
        'Besenreine Übergabe'
      ],
      coverage: 'Kufstein und Umgebung.',
      faq: []
    },
    {
      name: 'Wörgl',
      slug: 'woergl',
      bundesland: 'Tirol',
      bundeslandSlug: 'tirol',
      postalCode: '6300',
      population: 14000,
      description: 'Professionelle Räumungsdienste in Wörgl.',
      metaDescription: 'Räumung Wörgl ✓ Tirol ✓ Zuverlässig ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung'],
      benefits: [
        'Regionale Expertise',
        'Flexible Termine',
        'Transparente Preise',
        'Professionelle Abwicklung'
      ],
      coverage: 'Wörgl und Tiroler Unterland.',
      faq: []
    }
  ],
  vorarlberg: [
    {
      name: 'Bregenz',
      slug: 'bregenz',
      bundesland: 'Vorarlberg',
      bundeslandSlug: 'vorarlberg',
      postalCode: '6900',
      population: 30000,
      description: 'Professionelle Räumung in Bregenz am Bodensee. Landeshauptstadt von Vorarlberg.',
      metaDescription: 'Räumung Bregenz ✓ Bodensee ✓ Vorarlberg ✓ Professionell ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Haushaltsauflösung', 'Kellerräumung', 'Geschäftsräumung'],
      benefits: [
        'Lokale Präsenz in Vorarlberg',
        'Erfahrung mit Seeanrainern',
        'Flexible Terminvereinbarung',
        'Besenreine Übergabe'
      ],
      coverage: 'Bregenz und Bodensee-Region.',
      faq: []
    },
    {
      name: 'Dornbirn',
      slug: 'dornbirn',
      bundesland: 'Vorarlberg',
      bundeslandSlug: 'vorarlberg',
      postalCode: '6850',
      population: 50000,
      description: 'Räumung in Dornbirn, der größten Stadt Vorarlbergs.',
      metaDescription: 'Räumung Dornbirn ✓ Vorarlberg ✓ Professionell ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung', 'Geschäftsräumung'],
      benefits: [
        'Regionale Präsenz',
        'Schnelle Abwicklung',
        'Faire Preise',
        'Besenreine Übergabe'
      ],
      coverage: 'Dornbirn und Rheintal.',
      faq: []
    },
    {
      name: 'Feldkirch',
      slug: 'feldkirch',
      bundesland: 'Vorarlberg',
      bundeslandSlug: 'vorarlberg',
      postalCode: '6800',
      population: 35000,
      description: 'Professionelle Räumungsdienste in Feldkirch.',
      metaDescription: 'Räumung Feldkirch ✓ Vorarlberg ✓ Zuverlässig ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung'],
      benefits: [
        'Regionale Expertise',
        'Erfahrung mit Altstadt',
        'Flexible Termine',
        'Transparente Preise'
      ],
      coverage: 'Feldkirch und Umgebung.',
      faq: []
    }
  ],
  kärnten: [
    {
      name: 'Klagenfurt',
      slug: 'klagenfurt',
      bundesland: 'Kärnten',
      bundeslandSlug: 'kärnten',
      postalCode: '9020',
      population: 101000,
      description: 'Professionelle Räumung in Klagenfurt am Wörthersee, der Landeshauptstadt von Kärnten.',
      metaDescription: 'Räumung Klagenfurt ✓ Wörthersee ✓ Alle Stadtteile ✓ Professionell ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Haushaltsauflösung', 'Kellerräumung', 'Geschäftsräumung', 'Dachbodenräumung'],
      benefits: [
        'Lokale Präsenz in Kärnten',
        'Alle Stadtteile abgedeckt',
        'Erfahrung mit Seeliegenschaften',
        'Flexible Termine',
        'Besenreine Übergabe'
      ],
      coverage: 'Alle Stadtteile von Klagenfurt und Wörthersee-Region.',
      faq: []
    },
    {
      name: 'Villach',
      slug: 'villach',
      bundesland: 'Kärnten',
      bundeslandSlug: 'kärnten',
      postalCode: '9500',
      population: 63000,
      description: 'Räumung in Villach, der zweitgrößten Stadt Kärntens.',
      metaDescription: 'Räumung Villach ✓ Kärnten ✓ Professionell ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung', 'Geschäftsräumung'],
      benefits: [
        'Regionale Präsenz',
        'Schnelle Abwicklung',
        'Faire Preise',
        'Besenreine Übergabe'
      ],
      coverage: 'Villach und Umgebung.',
      faq: []
    },
    {
      name: 'Wolfsberg',
      slug: 'wolfsberg',
      bundesland: 'Kärnten',
      bundeslandSlug: 'kärnten',
      postalCode: '9400',
      population: 25000,
      description: 'Professionelle Räumungsdienste in Wolfsberg im Lavanttal.',
      metaDescription: 'Räumung Wolfsberg ✓ Lavanttal ✓ Zuverlässig ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung'],
      benefits: [
        'Regionale Expertise im Lavanttal',
        'Flexible Termine',
        'Transparente Preise',
        'Professionelle Abwicklung'
      ],
      coverage: 'Wolfsberg und Lavanttal.',
      faq: []
    }
  ],
  steiermark: [
    {
      name: 'Graz',
      slug: 'graz',
      bundesland: 'Steiermark',
      bundeslandSlug: 'steiermark',
      postalCode: '8010',
      population: 291000,
      description: 'Professionelle Räumung in Graz, der Landeshauptstadt der Steiermark. Schnell, zuverlässig und professionell in allen Bezirken.',
      metaDescription: 'Räumung Graz ✓ Alle Bezirke ✓ Altstadt-Expertise ✓ Professionell & diskret ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Haushaltsauflösung', 'Kellerräumung', 'Geschäftsräumung', 'Dachbodenräumung', 'Transportservice'],
      benefits: [
        'Lokale Präsenz in Graz',
        'Alle Stadtbezirke abgedeckt',
        'Erfahrung mit Altstadtgebäuden',
        'Flexible Terminvereinbarung',
        'Besenreine Übergabe garantiert'
      ],
      coverage: 'Alle Stadtbezirke von Graz - Innere Stadt, Gries, Lend, Jakomini, Liebenau, St. Peter und alle weiteren Bezirke.',
      faq: [
        {
          question: 'In welchen Bezirken von Graz sind Sie tätig?',
          answer: 'Wir arbeiten in allen 17 Bezirken von Graz - von der Altstadt über Gries und Lend bis nach St. Peter, Liebenau und Andritz. Kein Bezirk ist zu weit.'
        }
      ]
    },
    {
      name: 'Leoben',
      slug: 'leoben',
      bundesland: 'Steiermark',
      bundeslandSlug: 'steiermark',
      postalCode: '8700',
      population: 25000,
      description: 'Räumung in Leoben in der Obersteiermark.',
      metaDescription: 'Räumung Leoben ✓ Obersteiermark ✓ Professionell ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung'],
      benefits: [
        'Regionale Präsenz in der Obersteiermark',
        'Schnelle Abwicklung',
        'Faire Preise',
        'Besenreine Übergabe'
      ],
      coverage: 'Leoben und Mur-Mürz-Furche.',
      faq: []
    },
    {
      name: 'Kapfenberg',
      slug: 'kapfenberg',
      bundesland: 'Steiermark',
      bundeslandSlug: 'steiermark',
      postalCode: '8605',
      population: 22000,
      description: 'Professionelle Räumungsdienste in Kapfenberg.',
      metaDescription: 'Räumung Kapfenberg ✓ Steiermark ✓ Zuverlässig ☎ +43660 39 57 587',
      services: ['Wohnungsräumung', 'Hausräumung', 'Kellerräumung'],
      benefits: [
        'Regionale Expertise',
        'Flexible Termine',
        'Transparente Preise',
        'Professionelle Abwicklung'
      ],
      coverage: 'Kapfenberg und Umgebung.',
      faq: []
    }
  ]
};

export function getCitiesByBundesland(bundeslandSlug: string): CityInfo[] {
  return cities[bundeslandSlug] || [];
}

export function getAllCities(): CityInfo[] {
  return Object.values(cities).flat();
}

export function getCityBySlug(bundeslandSlug: string, citySlug: string): CityInfo | undefined {
  const bundeslandCities = getCitiesByBundesland(bundeslandSlug);
  return bundeslandCities.find(city => city.slug === citySlug);
}
