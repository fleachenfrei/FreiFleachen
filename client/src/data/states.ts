export interface State {
  slug: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  metaDescription: string;
  metaDescriptionEn: string;
  features: string[];
  featuresEn: string[];
  image?: string;
}

export const states: State[] = [
  {
    slug: 'wien',
    name: 'Wien',
    nameEn: 'Vienna',
    description: 'Professionelle Entrümpelung und Räumung in Wien. Als lokales Unternehmen kennen wir alle 23 Bezirke und bieten schnelle, zuverlässige Dienstleistungen in der gesamten Bundeshauptstadt.',
    descriptionEn: 'Professional clearing and removal services in Vienna. As a local company, we know all 23 districts and offer fast, reliable services throughout the federal capital.',
    metaDescription: 'Entrümpelung Wien - Schnelle & professionelle Räumung in allen 23 Bezirken. Kostenlose Besichtigung ✓ Faire Preise ✓ Entsorgung inklusive.',
    metaDescriptionEn: 'Clearing Services Vienna - Fast & professional removal in all 23 districts. Free consultation ✓ Fair prices ✓ Disposal included.',
    features: [
      'Alle 23 Wiener Bezirke',
      'Same-Day Service verfügbar',
      'Lokales Team mit Wiener Expertise',
      'Entrümpelung, Transport & Entsorgung',
    ],
    featuresEn: [
      'All 23 Vienna districts',
      'Same-day service available',
      'Local team with Vienna expertise',
      'Clearing, transport & disposal',
    ],
  },
  {
    slug: 'niederoesterreich',
    name: 'Niederösterreich',
    nameEn: 'Lower Austria',
    description: 'Zuverlässige Entrümpelung und Räumung in ganz Niederösterreich. Von St. Pölten bis ins Waldviertel - wir sind in der gesamten Region für Sie da.',
    descriptionEn: 'Reliable clearing and removal services throughout Lower Austria. From St. Pölten to the Waldviertel - we are there for you across the entire region.',
    metaDescription: 'Entrümpelung Niederösterreich - Professionelle Räumung in ganz NÖ. St. Pölten, Wiener Neustadt, Waldviertel ✓ Kostenlose Besichtigung.',
    metaDescriptionEn: 'Clearing Lower Austria - Professional removal throughout NÖ. St. Pölten, Wiener Neustadt, Waldviertel ✓ Free consultation.',
    features: [
      'Gesamtes Niederösterreich abgedeckt',
      'Schnelle Anfahrt aus Wien',
      'Ländliche und städtische Gebiete',
      'Flexible Terminvereinbarung',
    ],
    featuresEn: [
      'All of Lower Austria covered',
      'Quick access from Vienna',
      'Rural and urban areas',
      'Flexible scheduling',
    ],
  },
  {
    slug: 'oberoesterreich',
    name: 'Oberösterreich',
    nameEn: 'Upper Austria',
    description: 'Professionelle Entrümpelung und Räumung in Oberösterreich. Linz, Wels, Steyr und Umgebung - schneller Service in der gesamten Region.',
    descriptionEn: 'Professional clearing and removal in Upper Austria. Linz, Wels, Steyr and surroundings - fast service throughout the region.',
    metaDescription: 'Entrümpelung Oberösterreich - Räumung in Linz, Wels, Steyr ✓ Kostenlose Besichtigung ✓ Faire Preise ✓ Professionelles Team.',
    metaDescriptionEn: 'Clearing Upper Austria - Removal in Linz, Wels, Steyr ✓ Free consultation ✓ Fair prices ✓ Professional team.',
    features: [
      'Linz, Wels, Steyr und Umland',
      'Industrie- und Wohnimmobilien',
      'Erfahrenes Räumungsteam',
      'Komplettservice mit Entsorgung',
    ],
    featuresEn: [
      'Linz, Wels, Steyr and surroundings',
      'Industrial and residential properties',
      'Experienced clearing team',
      'Complete service with disposal',
    ],
  },
  {
    slug: 'salzburg',
    name: 'Salzburg',
    nameEn: 'Salzburg',
    description: 'Entrümpelung und Räumung in Salzburg Stadt und Land. Professioneller Service in der gesamten Region mit erfahrenem Team.',
    descriptionEn: 'Clearing and removal in Salzburg city and state. Professional service throughout the region with experienced team.',
    metaDescription: 'Entrümpelung Salzburg - Stadt & Land ✓ Professionelle Räumung ✓ Kostenlose Besichtigung ✓ Schneller Service.',
    metaDescriptionEn: 'Clearing Salzburg - City & State ✓ Professional removal ✓ Free consultation ✓ Fast service.',
    features: [
      'Salzburg Stadt und Umgebung',
      'Berg- und Talregionen',
      'Spezialisiert auf alpine Gebiete',
      'Zuverlässiger Service',
    ],
    featuresEn: [
      'Salzburg city and surroundings',
      'Mountain and valley regions',
      'Specialized in alpine areas',
      'Reliable service',
    ],
  },
  {
    slug: 'tirol',
    name: 'Tirol',
    nameEn: 'Tyrol',
    description: 'Professionelle Entrümpelung in Tirol. Innsbruck und Umgebung - auch in schwer zugänglichen Bergregionen sind wir für Sie da.',
    descriptionEn: 'Professional clearing in Tyrol. Innsbruck and surroundings - we serve you even in hard-to-reach mountain regions.',
    metaDescription: 'Entrümpelung Tirol - Innsbruck & Umgebung ✓ Bergregionen ✓ Professionelles Team ✓ Kostenlose Besichtigung.',
    metaDescriptionEn: 'Clearing Tyrol - Innsbruck & surroundings ✓ Mountain regions ✓ Professional team ✓ Free consultation.',
    features: [
      'Innsbruck und Tiroler Gemeinden',
      'Spezialausrüstung für Berggebiete',
      'Erfahrung mit alpinen Objekten',
      'Ganzjähriger Service',
    ],
    featuresEn: [
      'Innsbruck and Tyrolean municipalities',
      'Special equipment for mountain areas',
      'Experience with alpine properties',
      'Year-round service',
    ],
  },
  {
    slug: 'vorarlberg',
    name: 'Vorarlberg',
    nameEn: 'Vorarlberg',
    description: 'Zuverlässige Entrümpelung in Vorarlberg. Bregenz, Dornbirn, Feldkirch - professioneller Service im Ländle.',
    descriptionEn: 'Reliable clearing in Vorarlberg. Bregenz, Dornbirn, Feldkirch - professional service in the Ländle.',
    metaDescription: 'Entrümpelung Vorarlberg - Bregenz, Dornbirn, Feldkirch ✓ Professionelle Räumung ✓ Kostenlose Besichtigung.',
    metaDescriptionEn: 'Clearing Vorarlberg - Bregenz, Dornbirn, Feldkirch ✓ Professional removal ✓ Free consultation.',
    features: [
      'Bregenz, Dornbirn, Feldkirch',
      'Bodensee-Region',
      'Schnelle Reaktionszeiten',
      'Komplettservice',
    ],
    featuresEn: [
      'Bregenz, Dornbirn, Feldkirch',
      'Lake Constance region',
      'Fast response times',
      'Complete service',
    ],
  },
  {
    slug: 'kaernten',
    name: 'Kärnten',
    nameEn: 'Carinthia',
    description: 'Professionelle Entrümpelung in Kärnten. Klagenfurt, Villach und Umgebung - zuverlässiger Service in der südlichsten Region Österreichs.',
    descriptionEn: 'Professional clearing in Carinthia. Klagenfurt, Villach and surroundings - reliable service in Austria\'s southernmost region.',
    metaDescription: 'Entrümpelung Kärnten - Klagenfurt, Villach ✓ Professionelle Räumung ✓ Kostenlose Besichtigung ✓ Faire Preise.',
    metaDescriptionEn: 'Clearing Carinthia - Klagenfurt, Villach ✓ Professional removal ✓ Free consultation ✓ Fair prices.',
    features: [
      'Klagenfurt, Villach und Umland',
      'Seen- und Bergregionen',
      'Tourismus- und Wohnimmobilien',
      'Flexibler Service',
    ],
    featuresEn: [
      'Klagenfurt, Villach and surroundings',
      'Lake and mountain regions',
      'Tourism and residential properties',
      'Flexible service',
    ],
  },
  {
    slug: 'steiermark',
    name: 'Steiermark',
    nameEn: 'Styria',
    description: 'Entrümpelung und Räumung in der Steiermark. Graz und Umgebung - professioneller Service in der grünen Mark.',
    descriptionEn: 'Clearing and removal in Styria. Graz and surroundings - professional service in the green state.',
    metaDescription: 'Entrümpelung Steiermark - Graz & Umgebung ✓ Professionelle Räumung ✓ Kostenlose Besichtigung ✓ Erfahrenes Team.',
    metaDescriptionEn: 'Clearing Styria - Graz & surroundings ✓ Professional removal ✓ Free consultation ✓ Experienced team.',
    features: [
      'Graz und steirische Gemeinden',
      'Stadt- und Landregionen',
      'Industrie- und Privatobjekte',
      'Umfassender Service',
    ],
    featuresEn: [
      'Graz and Styrian municipalities',
      'Urban and rural regions',
      'Industrial and private properties',
      'Comprehensive service',
    ],
  },
  {
    slug: 'burgenland',
    name: 'Burgenland',
    nameEn: 'Burgenland',
    description: 'Zuverlässige Entrümpelung im Burgenland. Eisenstadt, Neusiedl und Umgebung - schneller Service im östlichsten Bundesland.',
    descriptionEn: 'Reliable clearing in Burgenland. Eisenstadt, Neusiedl and surroundings - fast service in Austria\'s easternmost state.',
    metaDescription: 'Entrümpelung Burgenland - Eisenstadt, Neusiedl ✓ Professionelle Räumung ✓ Kostenlose Besichtigung ✓ Schnell & zuverlässig.',
    metaDescriptionEn: 'Clearing Burgenland - Eisenstadt, Neusiedl ✓ Professional removal ✓ Free consultation ✓ Fast & reliable.',
    features: [
      'Eisenstadt, Neusiedl am See',
      'Weinregion und Seegebiet',
      'Nähe zu Wien',
      'Kompetenter Service',
    ],
    featuresEn: [
      'Eisenstadt, Neusiedl am See',
      'Wine region and lake area',
      'Close to Vienna',
      'Competent service',
    ],
  },
];
