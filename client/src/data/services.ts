export enum ServiceId {
  WOHNUNGSRAEUMUNG = 'wohnungsraeumung',
  HAUSHALTSAUFLOESUNG = 'haushaltsaufloesung',
  KELLERRAEUMUNG = 'kellerraeumung',
  DACHBODENRAEUMUNG = 'dachbodenraeumung',
  GESCHAEFTSRAEUMUNG = 'geschaeftsraeumung',
  MESSIERAEUMUNG = 'messieraeumung',
  SPERRMULLENTSORGUNG = 'sperrmullentsorgung',
  UMZUGSSERVICE = 'umzugsservice',
  GARAGERAEUMUNG = 'garageraeumung',
  BUROAUFLOESUNG = 'buroaufloesung',
  VERLASSENSCHAFTSRAEUMUNG = 'verlassenschaftsraeumung',
  CONTAINERSERVICE = 'containerservice',
}

export interface ServiceContent {
  name: string;
  shortDescription: string;
  description: string;
  metaDescription: string;
  benefits: string[];
  process: Array<{ step: number; title: string; description: string }>;
  pricing: {
    info: string;
    factors: string[];
  };
  faq: Array<{ question: string; answer: string }>;
}

export interface ServiceEntry {
  id: ServiceId;
  slugs: { de: string; en: string };
  content: { de: ServiceContent; en: ServiceContent };
  relatedServices: ServiceId[];
}

export const servicesData: ServiceEntry[] = [
  {
    id: ServiceId.WOHNUNGSRAEUMUNG,
    slugs: { de: 'wohnungsraeumungen', en: 'apartment-clearing' },
    relatedServices: [ServiceId.HAUSHALTSAUFLOESUNG, ServiceId.KELLERRAEUMUNG, ServiceId.VERLASSENSCHAFTSRAEUMUNG],
    content: {
      de: {
        name: 'Wohnungsräumung',
        shortDescription: 'Professionelle Räumung Ihrer Wohnung in Wien und Umgebung - schnell, zuverlässig und zu fairen Preisen.',
        description: 'Unsere Wohnungsräumung ist der ideale Service für Sie, wenn Sie Ihre Wohnung komplett räumen müssen. Ob bei Umzug, Verkauf, Vermietung oder Erbe - wir räumen Ihre Wohnung professionell, schnell und diskret. Von der 1-Zimmer-Wohnung bis zur großen Altbauwohnung in ganz Österreich.',
        metaDescription: 'Wohnungsräumung Wien und Umgebung ✓ Ganz Österreich ✓ Auch ohne Lift ✓ Besenreine Übergabe ✓ Festpreisgarantie ☎ +43660 39 57 587',
        benefits: [
          'Komplette Räumung vom Keller bis zum Dachboden',
          'Auch Altbauwohnungen ohne Lift bis 5. Stock',
          'Besenreine Übergabe garantiert',
          'Fachgerechte Entsorgung und Recycling',
          'Diskrete Abwicklung in Wien und ganz Österreich',
          'Fixpreis nach kostenloser Besichtigung',
        ],
        process: [
          {
            step: 1,
            title: 'Kostenlose Besichtigung',
            description: 'Wir besichtigen Ihre Wohnung vor Ort oder per Video-Call und erstellen ein unverbindliches Festpreisangebot.',
          },
          {
            step: 2,
            title: 'Terminvereinbarung',
            description: 'Nach Ihrer Zusage vereinbaren wir einen Wunschtermin - oft schon innerhalb von 24-48 Stunden möglich.',
          },
          {
            step: 3,
            title: 'Professionelle Räumung',
            description: 'Unser Team räumt Ihre Wohnung komplett - vom Mobiliar über Elektrogeräte bis zu Kleinteilen.',
          },
          {
            step: 4,
            title: 'Besenreine Übergabe',
            description: 'Wir übergeben Ihre Wohnung besenrein und entsorgen alles fachgerecht über zertifizierte Partner.',
          },
        ],
        pricing: {
          info: 'Die Kosten für eine Wohnungsräumung hängen von mehreren Faktoren ab. Nach einer kostenlosen Besichtigung erhalten Sie von uns einen transparenten Festpreis.',
          factors: [
            'Wohnungsgröße (m² und Anzahl der Zimmer)',
            'Menge und Art der zu entsorgenden Gegenstände',
            'Stockwerk und Vorhandensein eines Lifts',
            'Zufahrtsmöglichkeiten zum Gebäude',
            'Besondere Anforderungen (z.B. Messie-Wohnung, Sperrmüll)',
          ],
        },
        faq: [
          {
            question: 'Was kostet eine Wohnungsräumung?',
            answer: 'Eine 50m² Wohnung kostet durchschnittlich 800-1.200€, eine 80m² Wohnung 1.200-1.800€. Der genaue Preis hängt von der Objektmenge und dem Stockwerk ab. Nach kostenloser Besichtigung erhalten Sie einen verbindlichen Festpreis ohne versteckte Kosten.',
          },
          {
            question: 'Wie lange dauert eine Wohnungsräumung?',
            answer: 'Eine 60m² Wohnung räumen wir in der Regel in 4-6 Stunden. Größere Wohnungen oder stark vollgestellte Objekte benötigen 6-10 Stunden. Bei Messie-Wohnungen planen wir 1-2 Tage ein.',
          },
          {
            question: 'Können Sie auch ohne Lift bis in den 5. Stock?',
            answer: 'Ja, selbstverständlich! Viele Altbauten haben keinen Lift - das ist für uns Routine. Unsere Teams sind trainiert im Tragen schwerer Gegenstände über enge Wendeltreppen. Bei Bedarf nutzen wir Möbel-Tragegurte und Außenaufzüge.',
          },
          {
            question: 'Was passiert mit meinen Möbeln und Gegenständen?',
            answer: 'Brauchbare Möbel und Gegenstände führen wir sozialen Einrichtungen zu. Defekte Möbel werden fachgerecht recycelt. Sondermüll entsorgen wir über zertifizierte Fachbetriebe. Sie erhalten auf Wunsch Entsorgungsnachweise.',
          },
        ],
      },
      en: {
        name: 'Apartment Clearing',
        shortDescription: 'Professional apartment clearing in Vienna and surroundings - fast, reliable, and at fair prices.',
        description: 'Our apartment clearing service is ideal when you need to completely clear your apartment. Whether for moving, sale, rental, or inheritance - we clear your apartment professionally, quickly, and discreetly. From studio apartments to large heritage buildings throughout Austria.',
        metaDescription: 'Apartment Clearing Vienna & Austria ✓ Nationwide Service ✓ No Elevator Required ✓ Broom-Clean Handover ✓ Fixed Price Guarantee ☎ +43660 39 57 587',
        benefits: [
          'Complete clearing from basement to attic',
          'Heritage buildings without elevator up to 5th floor',
          'Guaranteed broom-clean handover',
          'Professional disposal and recycling',
          'Discreet execution in Vienna and throughout Austria',
          'Fixed price after free inspection',
        ],
        process: [
          {
            step: 1,
            title: 'Free Inspection',
            description: 'We inspect your apartment on-site or via video call and create a non-binding fixed-price offer.',
          },
          {
            step: 2,
            title: 'Appointment Scheduling',
            description: 'After your confirmation, we schedule your preferred date - often possible within 24-48 hours.',
          },
          {
            step: 3,
            title: 'Professional Clearing',
            description: 'Our team completely clears your apartment - from furniture and appliances to small items.',
          },
          {
            step: 4,
            title: 'Broom-Clean Handover',
            description: 'We hand over your apartment broom-clean and dispose of everything professionally through certified partners.',
          },
        ],
        pricing: {
          info: 'The cost of apartment clearing depends on several factors. After a free inspection, we provide a transparent fixed price.',
          factors: [
            'Apartment size (m² and number of rooms)',
            'Quantity and type of items to be disposed',
            'Floor level and availability of elevator',
            'Building access options',
            'Special requirements (e.g., hoarding situations, bulky waste)',
          ],
        },
        faq: [
          {
            question: 'How much does apartment clearing cost?',
            answer: 'A 50m² apartment costs on average €800-1,200, an 80m² apartment €1,200-1,800. The exact price depends on the amount of items and floor level. After free inspection, you receive a binding fixed price with no hidden costs.',
          },
          {
            question: 'How long does apartment clearing take?',
            answer: 'We typically clear a 60m² apartment in 4-6 hours. Larger apartments or heavily cluttered spaces require 6-10 hours. For hoarding situations, we plan 1-2 days.',
          },
          {
            question: 'Can you work without an elevator up to the 5th floor?',
            answer: 'Yes, absolutely! Many heritage buildings have no elevator - this is routine for us. Our teams are trained in carrying heavy items up narrow spiral staircases. When needed, we use furniture straps and external lifts.',
          },
          {
            question: 'What happens to my furniture and belongings?',
            answer: 'Usable furniture and items are donated to social organizations. Damaged furniture is professionally recycled. Hazardous waste is disposed of through certified specialists. You receive disposal certificates upon request.',
          },
        ],
      },
    },
  },
  {
    id: ServiceId.HAUSHALTSAUFLOESUNG,
    slugs: { de: 'haushaltsaufloesung', en: 'household-dissolution' },
    relatedServices: [ServiceId.WOHNUNGSRAEUMUNG, ServiceId.VERLASSENSCHAFTSRAEUMUNG, ServiceId.SPERRMULLENTSORGUNG],
    content: {
      de: {
        name: 'Haushaltsauflösung',
        shortDescription: 'Komplette Haushaltsauflösung in Wien und Umgebung nach Todesfall, Umzug ins Pflegeheim oder bei Verkauf - einfühlsam und professionell.',
        description: 'Eine Haushaltsauflösung ist oft eine emotionale Angelegenheit. Ob nach einem Todesfall, beim Umzug ins Pflegeheim oder bei Verkauf - wir übernehmen die komplette Auflösung Ihres Haushalts in ganz Österreich mit Respekt und Einfühlungsvermögen. Wir kümmern uns um alles: von der Wertgegenständesortierung bis zur besenreinen Übergabe.',
        metaDescription: 'Haushaltsauflösung Wien und Umgebung ✓ Ganz Österreich ✓ Einfühlsam nach Todesfall ✓ Wertgegenstände-Sortierung ☎ +43660 39 57 587',
        benefits: [
          'Einfühlsamer Umgang in schwierigen Situationen',
          'Sortierung von Wertgegenständen und Erinnerungsstücken',
          'Komplette Haushaltsauflösung von A-Z',
          'Diskrete und respektvolle Arbeitsweise',
          'Verwertung brauchbarer Gegenstände',
          'Besenreine Übergabe der Immobilie',
        ],
        process: [
          {
            step: 1,
            title: 'Persönliches Erstgespräch',
            description: 'Wir besprechen in Ruhe Ihre Wünsche und besonderen Anforderungen. Wertgegenstände und Erinnerungsstücke werden markiert.',
          },
          {
            step: 2,
            title: 'Sortierung und Sichtung',
            description: 'Gemeinsam oder eigenständig sortieren wir Wertgegenstände, Dokumente und persönliche Erinnerungen aus.',
          },
          {
            step: 3,
            title: 'Komplette Auflösung',
            description: 'Wir räumen den gesamten Haushalt - von Möbeln über Kleidung bis zu Kleinteilen und Küchenutensilien.',
          },
          {
            step: 4,
            title: 'Fachgerechte Verwertung',
            description: 'Brauchbare Gegenstände spenden wir an soziale Einrichtungen. Rest wird umweltgerecht entsorgt.',
          },
        ],
        pricing: {
          info: 'Die Kosten einer Haushaltsauflösung variieren je nach Umfang. Wertvolle Gegenstände können die Kosten reduzieren oder sogar eine kostenlose Auflösung ermöglichen.',
          factors: [
            'Größe des Haushalts und Anzahl der Räume',
            'Vorhandensein verwertbarer Gegenstände',
            'Zeitaufwand für Sortierung',
            'Stockwerk und Liftvorhandensein',
            'Entsorgungsaufwand',
          ],
        },
        faq: [
          {
            question: 'Was kostet eine Haushaltsauflösung?',
            answer: 'Die Kosten variieren stark je nach Haushaltsgröße. Ein 3-Zimmer-Haushalt kostet durchschnittlich 1.500-2.500€. Bei wertvollen Gegenständen (Antiquitäten, hochwertige Möbel) kann die Auflösung kostenlos sein oder sogar eine Vergütung bringen.',
          },
          {
            question: 'Wie lange dauert eine Haushaltsauflösung?',
            answer: 'Ein durchschnittlicher 3-Zimmer-Haushalt benötigt 1-2 Tage. Größere Haushalte oder intensive Sortierarbeiten können 2-3 Tage dauern. Wir planen immer ausreichend Zeit für sorgfältiges Arbeiten ein.',
          },
          {
            question: 'Was passiert mit wertvollen Gegenständen?',
            answer: 'Wertgegenstände wie Schmuck, Uhren, Kunstwerke oder Antiquitäten werden sorgfältig aussortiert und an Sie übergeben. Auf Wunsch vermitteln wir auch Ankäufer oder Auktionshäuser.',
          },
          {
            question: 'Können Sie auch nach Todesfall diskret arbeiten?',
            answer: 'Ja, wir arbeiten sehr diskret und einfühlsam. Unsere Teams sind im Umgang mit emotionalen Situationen geschult. Wir respektieren die Privatsphäre und arbeiten auf Wunsch auch außerhalb der üblichen Zeiten.',
          },
        ],
      },
      en: {
        name: 'Household Dissolution',
        shortDescription: 'Complete household dissolution in Vienna and surroundings after bereavement, nursing home move, or sale - compassionate and professional.',
        description: 'Household dissolution is often an emotional matter. Whether after a death, moving to a care home, or property sale - we handle the complete dissolution of your household throughout Austria with respect and compassion. We take care of everything: from sorting valuables to broom-clean handover.',
        metaDescription: 'Household Dissolution Vienna & Austria ✓ Compassionate After Bereavement ✓ Valuables Sorting ✓ Professional Service ☎ +43660 39 57 587',
        benefits: [
          'Compassionate handling in difficult situations',
          'Sorting of valuables and keepsakes',
          'Complete household dissolution A to Z',
          'Discreet and respectful work approach',
          'Utilization of usable items',
          'Broom-clean property handover',
        ],
        process: [
          {
            step: 1,
            title: 'Personal Initial Consultation',
            description: 'We discuss your wishes and special requirements at leisure. Valuables and keepsakes are marked.',
          },
          {
            step: 2,
            title: 'Sorting and Review',
            description: 'Together or independently, we sort out valuables, documents, and personal memories.',
          },
          {
            step: 3,
            title: 'Complete Dissolution',
            description: 'We clear the entire household - from furniture and clothing to small items and kitchen utensils.',
          },
          {
            step: 4,
            title: 'Professional Utilization',
            description: 'Usable items are donated to social organizations. The rest is disposed of in an environmentally friendly manner.',
          },
        ],
        pricing: {
          info: 'The cost of household dissolution varies depending on scope. Valuable items can reduce costs or even enable free dissolution.',
          factors: [
            'Household size and number of rooms',
            'Presence of usable items',
            'Time required for sorting',
            'Floor level and elevator availability',
            'Disposal effort required',
          ],
        },
        faq: [
          {
            question: 'How much does household dissolution cost?',
            answer: 'Costs vary greatly depending on household size. A 3-room household costs on average €1,500-2,500. With valuable items (antiques, high-quality furniture), dissolution can be free or even provide compensation.',
          },
          {
            question: 'How long does household dissolution take?',
            answer: 'An average 3-room household requires 1-2 days. Larger households or intensive sorting work can take 2-3 days. We always plan sufficient time for careful work.',
          },
          {
            question: 'What happens to valuable items?',
            answer: 'Valuables such as jewelry, watches, artworks, or antiques are carefully sorted and handed over to you. Upon request, we also arrange buyers or auction houses.',
          },
          {
            question: 'Can you work discreetly after bereavement?',
            answer: 'Yes, we work very discreetly and compassionately. Our teams are trained in handling emotional situations. We respect privacy and can work outside regular hours if desired.',
          },
        ],
      },
    },
  },
  {
    id: ServiceId.KELLERRAEUMUNG,
    slugs: { de: 'kellerraeumung', en: 'basement-clearing' },
    relatedServices: [ServiceId.DACHBODENRAEUMUNG, ServiceId.GARAGERAEUMUNG, ServiceId.SPERRMULLENTSORGUNG],
    content: {
      de: {
        name: 'Kellerräumung',
        shortDescription: 'Professionelle Kellerräumung in Wien und Umgebung - wir räumen Ihren Keller komplett aus und entsorgen alles fachgerecht.',
        description: 'Ihr Keller ist voll und Sie möchten wieder Platz schaffen? Wir räumen Ihren Keller komplett - von alten Möbeln über Gerümpel bis zu Sperrmüll. Auch bei schwierigen Bedingungen wie engen Treppen oder fehlendem Lift arbeiten wir professionell und zuverlässig in ganz Österreich.',
        metaDescription: 'Kellerräumung Wien und Umgebung ✓ Ganz Österreich ✓ Auch bei engen Treppen ✓ Komplette Entsorgung ✓ Festpreis ☎ +43660 39 57 587',
        benefits: [
          'Komplette Räumung auch vollgestellter Keller',
          'Entsorgung von Sperrmüll und Gerümpel',
          'Auch bei engen Treppen und ohne Lift',
          'Besenreine Übergabe',
          'Kurzfristige Termine möglich',
          'Festpreis nach Besichtigung',
        ],
        process: [
          {
            step: 1,
            title: 'Kostenlose Besichtigung',
            description: 'Wir besichtigen Ihren Keller und erstellen ein unverbindliches Festpreisangebot.',
          },
          {
            step: 2,
            title: 'Terminvereinbarung',
            description: 'Nach Ihrer Zusage vereinbaren wir einen passenden Termin - oft innerhalb weniger Tage.',
          },
          {
            step: 3,
            title: 'Professionelle Räumung',
            description: 'Unser Team räumt Ihren Keller komplett aus - von großen Möbeln bis zu Kleinteilen.',
          },
          {
            step: 4,
            title: 'Fachgerechte Entsorgung',
            description: 'Wir entsorgen alles fachgerecht und übergeben Ihren Keller besenrein.',
          },
        ],
        pricing: {
          info: 'Die Kosten für eine Kellerräumung hängen vom Umfang ab. Nach kostenloser Besichtigung erhalten Sie einen transparenten Festpreis.',
          factors: [
            'Größe und Füllstand des Kellers',
            'Art der zu entsorgenden Gegenstände',
            'Zugänglichkeit (Treppen, Gänge)',
            'Entfernung zum Transportfahrzeug',
            'Besondere Entsorgungsanforderungen',
          ],
        },
        faq: [
          {
            question: 'Was kostet eine Kellerräumung?',
            answer: 'Ein durchschnittlicher Kellerraum (15-20m²) kostet 400-800€. Größere Keller oder stark vollgestellte Bereiche kosten entsprechend mehr. Nach kostenloser Besichtigung erhalten Sie einen verbindlichen Festpreis.',
          },
          {
            question: 'Wie lange dauert eine Kellerräumung?',
            answer: 'Ein Kellerraum von ca. 20m² räumen wir in 2-4 Stunden. Größere Keller oder schwer zugängliche Bereiche benötigen entsprechend mehr Zeit.',
          },
          {
            question: 'Können Sie auch bei sehr engen Treppen arbeiten?',
            answer: 'Ja, enge Kellertreppen sind für uns kein Problem. Unsere Teams sind ausgerüstet und trainiert für schwierige Zugangssituationen. Notfalls nutzen wir Kellerabgänge oder Lichtschächte.',
          },
          {
            question: 'Was passiert mit alten Chemikalien im Keller?',
            answer: 'Alte Farben, Lacke und Chemikalien entsorgen wir als Sondermüll über zertifizierte Fachbetriebe. Diese Entsorgung wird separat berechnet und erfolgt vollständig nach Vorschrift.',
          },
        ],
      },
      en: {
        name: 'Basement Clearing',
        shortDescription: 'Professional basement clearing in Vienna and surroundings - we completely clear your basement and dispose of everything properly.',
        description: 'Is your basement full and you want to create space again? We completely clear your basement - from old furniture to clutter and bulky waste. Even under difficult conditions like narrow stairs or no elevator, we work professionally and reliably throughout Austria.',
        metaDescription: 'Basement Clearing Vienna & Austria ✓ Even Narrow Stairs ✓ Complete Disposal ✓ Fixed Price ✓ Professional Service ☎ +43660 39 57 587',
        benefits: [
          'Complete clearing even of heavily cluttered basements',
          'Disposal of bulky waste and clutter',
          'Works with narrow stairs and no elevator',
          'Broom-clean handover',
          'Short-notice appointments available',
          'Fixed price after inspection',
        ],
        process: [
          {
            step: 1,
            title: 'Free Inspection',
            description: 'We inspect your basement and create a non-binding fixed-price offer.',
          },
          {
            step: 2,
            title: 'Appointment Scheduling',
            description: 'After your confirmation, we schedule a suitable date - often within a few days.',
          },
          {
            step: 3,
            title: 'Professional Clearing',
            description: 'Our team completely clears your basement - from large furniture to small items.',
          },
          {
            step: 4,
            title: 'Professional Disposal',
            description: 'We dispose of everything properly and hand over your basement broom-clean.',
          },
        ],
        pricing: {
          info: 'The cost of basement clearing depends on scope. After free inspection, you receive a transparent fixed price.',
          factors: [
            'Size and fill level of basement',
            'Type of items to be disposed',
            'Accessibility (stairs, corridors)',
            'Distance to transport vehicle',
            'Special disposal requirements',
          ],
        },
        faq: [
          {
            question: 'How much does basement clearing cost?',
            answer: 'An average basement room (15-20m²) costs €400-800. Larger basements or heavily cluttered areas cost proportionally more. After free inspection, you receive a binding fixed price.',
          },
          {
            question: 'How long does basement clearing take?',
            answer: 'We clear a basement room of approximately 20m² in 2-4 hours. Larger basements or hard-to-access areas require correspondingly more time.',
          },
          {
            question: 'Can you work with very narrow stairs?',
            answer: 'Yes, narrow basement stairs are no problem for us. Our teams are equipped and trained for difficult access situations. If necessary, we use basement entrances or light wells.',
          },
          {
            question: 'What happens to old chemicals in the basement?',
            answer: 'Old paints, varnishes, and chemicals are disposed of as hazardous waste through certified specialists. This disposal is billed separately and carried out fully according to regulations.',
          },
        ],
      },
    },
  },
  {
    id: ServiceId.DACHBODENRAEUMUNG,
    slugs: { de: 'dachbodenraeumung', en: 'attic-clearing' },
    relatedServices: [ServiceId.KELLERRAEUMUNG, ServiceId.SPERRMULLENTSORGUNG, ServiceId.HAUSHALTSAUFLOESUNG],
    content: {
      de: {
        name: 'Dachbodenräumung',
        shortDescription: 'Professionelle Dachbodenräumung in Wien und ganz Österreich - auch bei schwierigem Zugang und ohne Lift.',
        description: 'Ihr Dachboden ist vollgestellt mit alten Möbeln, Kartons und Gerümpel? Wir räumen Ihren Dachboden komplett - auch bei schwierigem Zugang, niedrigen Decken oder steilen Treppen. Professionell, sicher und zu fairen Preisen in ganz Österreich.',
        metaDescription: 'Dachbodenräumung Wien ✓ Ganz Österreich ✓ Auch ohne Lift ✓ Schwieriger Zugang kein Problem ✓ Festpreis ☎ +43660 39 57 587',
        benefits: [
          'Räumung auch bei schwierigem Dachbodenzugang',
          'Sicherer Transport über steile Treppen',
          'Entsorgung von Gerümpel und Sperrmüll',
          'Besenreine Übergabe',
          'Erfahrung mit Altbau-Dachböden',
          'Festpreis nach Besichtigung',
        ],
        process: [
          {
            step: 1,
            title: 'Kostenlose Besichtigung',
            description: 'Wir besichtigen Ihren Dachboden und prüfen die Zugangsmöglichkeiten für ein genaues Angebot.',
          },
          {
            step: 2,
            title: 'Planung und Termin',
            description: 'Wir planen die Räumung unter Berücksichtigung besonderer Anforderungen und vereinbaren einen Termin.',
          },
          {
            step: 3,
            title: 'Sichere Räumung',
            description: 'Unser geschultes Team räumt den Dachboden sicher - auch bei niedrigen Decken und engen Treppen.',
          },
          {
            step: 4,
            title: 'Fachgerechte Entsorgung',
            description: 'Wir entsorgen alles fachgerecht und hinterlassen einen besenreinen Dachboden.',
          },
        ],
        pricing: {
          info: 'Die Kosten hängen von Größe, Füllstand und Zugänglichkeit ab. Nach Besichtigung erhalten Sie einen transparenten Festpreis.',
          factors: [
            'Dachbodengröße und Füllstand',
            'Zugänglichkeit und Treppensituation',
            'Art und Menge der Gegenstände',
            'Stockwerkshöhe',
            'Besondere Sicherheitsanforderungen',
          ],
        },
        faq: [
          {
            question: 'Was kostet eine Dachbodenräumung?',
            answer: 'Ein durchschnittlicher Dachboden (30-40m²) kostet 600-1.200€. Schwer zugängliche oder sehr vollgestellte Dachböden können mehr kosten. Nach Besichtigung erhalten Sie einen genauen Festpreis.',
          },
          {
            question: 'Wie kommen Sie auf schwer zugängliche Dachböden?',
            answer: 'Wir sind ausgerüstet für alle Zugangssituationen: steile Treppen, Bodentreppen, niedrige Durchgänge. Bei Bedarf nutzen wir Außenaufzüge oder arbeiten über Dachfenster.',
          },
          {
            question: 'Können Sie auch bei niedriger Deckenhöhe arbeiten?',
            answer: 'Ja, niedrige Dachböden sind für uns Routine. Unsere Teams arbeiten auch in gebeugter Haltung sicher und effizient. Wir planen dafür entsprechend mehr Zeit ein.',
          },
          {
            question: 'Was passiert mit alten Holzbalken und Baumaterial?',
            answer: 'Altes Holz wird fachgerecht entsorgt oder recycelt. Baumaterialien werden getrennt entsorgt. Bei Verdacht auf Schadstoffe (z.B. Asbest) informieren wir Sie sofort.',
          },
        ],
      },
      en: {
        name: 'Attic Clearing',
        shortDescription: 'Professional attic clearing in Vienna and throughout Austria - even with difficult access and no elevator.',
        description: 'Is your attic cluttered with old furniture, boxes, and junk? We completely clear your attic - even with difficult access, low ceilings, or steep stairs. Professional, safe, and at fair prices throughout Austria.',
        metaDescription: 'Attic Clearing Vienna & Austria ✓ No Elevator Required ✓ Difficult Access No Problem ✓ Fixed Price ✓ Safe Service ☎ +43660 39 57 587',
        benefits: [
          'Clearing even with difficult attic access',
          'Safe transport over steep stairs',
          'Disposal of clutter and bulky waste',
          'Broom-clean handover',
          'Experience with heritage building attics',
          'Fixed price after inspection',
        ],
        process: [
          {
            step: 1,
            title: 'Free Inspection',
            description: 'We inspect your attic and check access options for an accurate quote.',
          },
          {
            step: 2,
            title: 'Planning and Scheduling',
            description: 'We plan the clearing considering special requirements and schedule an appointment.',
          },
          {
            step: 3,
            title: 'Safe Clearing',
            description: 'Our trained team safely clears the attic - even with low ceilings and narrow stairs.',
          },
          {
            step: 4,
            title: 'Professional Disposal',
            description: 'We dispose of everything properly and leave a broom-clean attic.',
          },
        ],
        pricing: {
          info: 'Costs depend on size, fill level, and accessibility. After inspection, you receive a transparent fixed price.',
          factors: [
            'Attic size and fill level',
            'Accessibility and stair situation',
            'Type and quantity of items',
            'Floor height',
            'Special safety requirements',
          ],
        },
        faq: [
          {
            question: 'How much does attic clearing cost?',
            answer: 'An average attic (30-40m²) costs €600-1,200. Hard-to-access or very cluttered attics may cost more. After inspection, you receive an exact fixed price.',
          },
          {
            question: 'How do you access hard-to-reach attics?',
            answer: 'We are equipped for all access situations: steep stairs, loft ladders, low passages. When needed, we use external lifts or work through roof windows.',
          },
          {
            question: 'Can you work with low ceiling height?',
            answer: 'Yes, low attics are routine for us. Our teams work safely and efficiently even in stooped positions. We plan correspondingly more time for this.',
          },
          {
            question: 'What happens to old wooden beams and building materials?',
            answer: 'Old wood is properly disposed of or recycled. Building materials are separately disposed of. If we suspect hazardous materials (e.g., asbestos), we inform you immediately.',
          },
        ],
      },
    },
  },
  {
    id: ServiceId.GESCHAEFTSRAEUMUNG,
    slugs: { de: 'geschaeftsraeumung', en: 'commercial-clearing' },
    relatedServices: [ServiceId.BUROAUFLOESUNG, ServiceId.SPERRMULLENTSORGUNG, ServiceId.CONTAINERSERVICE],
    content: {
      de: {
        name: 'Geschäftsräumung',
        shortDescription: 'Professionelle Räumung von Geschäftslokalen, Läden und Gewerbeflächen in Wien und ganz Österreich.',
        description: 'Sie schließen Ihr Geschäft oder übernehmen ein neues Lokal? Wir räumen Geschäftslokale jeder Art - vom kleinen Laden bis zur großen Gewerbefläche. Professionell, diskret und termingerecht in ganz Österreich.',
        metaDescription: 'Geschäftsräumung Wien ✓ Ganz Österreich ✓ Läden & Gewerbeflächen ✓ Termingerecht ✓ Diskret ☎ +43660 39 57 587',
        benefits: [
          'Räumung aller Geschäftsarten und Gewerbeflächen',
          'Termingerechte Ausführung (auch Wochenende)',
          'Diskrete Abwicklung',
          'Entsorgung von Ladeneinrichtung und Inventar',
          'Besenreine Übergabe',
          'Festpreis nach Besichtigung',
        ],
        process: [
          {
            step: 1,
            title: 'Besichtigung vor Ort',
            description: 'Wir besichtigen Ihre Geschäftsräume und erstellen ein detailliertes Angebot inkl. Zeitplan.',
          },
          {
            step: 2,
            title: 'Terminplanung',
            description: 'Wir planen die Räumung nach Ihrem Zeitplan - auch außerhalb der Geschäftszeiten oder am Wochenende.',
          },
          {
            step: 3,
            title: 'Professionelle Räumung',
            description: 'Wir räumen Ihr Geschäft komplett - von Ladeneinrichtung über Inventar bis zu Restbeständen.',
          },
          {
            step: 4,
            title: 'Besenreine Übergabe',
            description: 'Wir übergeben die Räumlichkeiten besenrein und termingerecht.',
          },
        ],
        pricing: {
          info: 'Die Kosten hängen von Art und Größe des Geschäfts ab. Nach Besichtigung erhalten Sie einen detaillierten Festpreis.',
          factors: [
            'Größe der Geschäftsfläche',
            'Art und Menge der Einrichtung',
            'Zeitfenster und Dringlichkeit',
            'Entsorgungsaufwand',
            'Besondere Anforderungen (Demontage, etc.)',
          ],
        },
        faq: [
          {
            question: 'Was kostet eine Geschäftsräumung?',
            answer: 'Ein kleiner Laden (50m²) kostet ab 1.500€, größere Geschäftsflächen ab 3.000€. Der genaue Preis hängt von Einrichtung und Inventar ab. Nach Besichtigung erhalten Sie ein detailliertes Festpreisangebot.',
          },
          {
            question: 'Können Sie auch am Wochenende räumen?',
            answer: 'Ja, wir räumen auch am Wochenende und außerhalb der üblichen Geschäftszeiten. So stören wir den laufenden Betrieb nicht und Sie können termingerecht übergeben.',
          },
          {
            question: 'Was passiert mit der Ladeneinrichtung?',
            answer: 'Brauchbare Ladeneinrichtung versuchen wir zu verkaufen - das reduziert Ihre Kosten. Nicht verwertbare Teile werden fachgerecht entsorgt oder recycelt.',
          },
          {
            question: 'Wie diskret läuft eine Geschäftsräumung ab?',
            answer: 'Wir arbeiten sehr diskret - auf Wunsch mit neutralen Fahrzeugen und ohne sichtbare Firmenaufschrift. Die Räumung erfolgt professionell und ohne Aufsehen.',
          },
        ],
      },
      en: {
        name: 'Commercial Clearing',
        shortDescription: 'Professional clearing of commercial premises, stores, and business spaces in Vienna and throughout Austria.',
        description: 'Closing your business or taking over new premises? We clear commercial premises of all types - from small shops to large business spaces. Professional, discreet, and on schedule throughout Austria.',
        metaDescription: 'Commercial Clearing Vienna & Austria ✓ Stores & Business Spaces ✓ On Schedule ✓ Discreet Service ✓ Fixed Price ☎ +43660 39 57 587',
        benefits: [
          'Clearing of all business types and commercial spaces',
          'On-schedule execution (including weekends)',
          'Discreet handling',
          'Disposal of store fixtures and inventory',
          'Broom-clean handover',
          'Fixed price after inspection',
        ],
        process: [
          {
            step: 1,
            title: 'On-Site Inspection',
            description: 'We inspect your business premises and create a detailed quote including timeline.',
          },
          {
            step: 2,
            title: 'Schedule Planning',
            description: 'We plan the clearing according to your schedule - even outside business hours or on weekends.',
          },
          {
            step: 3,
            title: 'Professional Clearing',
            description: 'We completely clear your business - from store fixtures and inventory to remaining stock.',
          },
          {
            step: 4,
            title: 'Broom-Clean Handover',
            description: 'We hand over the premises broom-clean and on schedule.',
          },
        ],
        pricing: {
          info: 'Costs depend on type and size of business. After inspection, you receive a detailed fixed price.',
          factors: [
            'Size of business space',
            'Type and quantity of fixtures',
            'Time window and urgency',
            'Disposal effort',
            'Special requirements (dismantling, etc.)',
          ],
        },
        faq: [
          {
            question: 'How much does commercial clearing cost?',
            answer: 'A small shop (50m²) costs from €1,500, larger business spaces from €3,000. The exact price depends on fixtures and inventory. After inspection, you receive a detailed fixed-price offer.',
          },
          {
            question: 'Can you clear on weekends?',
            answer: 'Yes, we clear on weekends and outside regular business hours. This way we don\'t disturb ongoing operations and you can hand over on schedule.',
          },
          {
            question: 'What happens to store fixtures?',
            answer: 'We try to sell usable store fixtures - this reduces your costs. Non-usable parts are professionally disposed of or recycled.',
          },
          {
            question: 'How discreet is commercial clearing?',
            answer: 'We work very discreetly - on request with unmarked vehicles and no visible company branding. Clearing is carried out professionally and without attracting attention.',
          },
        ],
      },
    },
  },
  {
    id: ServiceId.MESSIERAEUMUNG,
    slugs: { de: 'messie-raeumung', en: 'hoarding-clearing' },
    relatedServices: [ServiceId.WOHNUNGSRAEUMUNG, ServiceId.HAUSHALTSAUFLOESUNG, ServiceId.SPERRMULLENTSORGUNG],
    content: {
      de: {
        name: 'Messie-Räumung',
        shortDescription: 'Einfühlsame und professionelle Räumung von Messie-Wohnungen in Wien und ganz Österreich - diskret und respektvoll.',
        description: 'Messie-Wohnungen erfordern besondere Sensibilität und Professionalität. Wir räumen Messie-Wohnungen diskret, respektvoll und gründlich in ganz Österreich. Unser geschultes Team arbeitet einfühlsam und unterstützt Sie bei der Wiederherstellung Ihrer Wohn qualität.',
        metaDescription: 'Messie-Räumung Wien ✓ Ganz Österreich ✓ Diskret & einfühlsam ✓ Professionelle Hilfe ✓ Vertrauensvoll ☎ +43660 39 57 587',
        benefits: [
          'Einfühlsames und geschultes Team',
          'Absolut diskrete Abwicklung',
          'Gründliche Reinigung nach Räumung',
          'Sortierung von Wertgegenständen',
          'Professionelle Geruchsbeseitigung',
          'Vertrauliche Behandlung',
        ],
        process: [
          {
            step: 1,
            title: 'Vertrauliches Erstgespräch',
            description: 'Wir besprechen in Ruhe und diskret Ihre Situation und besonderen Anforderungen.',
          },
          {
            step: 2,
            title: 'Behutsame Planung',
            description: 'Wir planen die Räumung sensibel und berücksichtigen Ihre persönlichen Wünsche.',
          },
          {
            step: 3,
            title: 'Professionelle Räumung',
            description: 'Unser geschultes Team räumt behutsam und gründlich - mit Respekt für Ihre Situation.',
          },
          {
            step: 4,
            title: 'Gründliche Reinigung',
            description: 'Nach der Räumung reinigen wir gründlich und beseitigen professionell Gerüche.',
          },
        ],
        pricing: {
          info: 'Messie-Räumungen sind individuell. Nach einem vertraulichen Gespräch erstellen wir ein faires Festpreisangebot.',
          factors: [
            'Wohnungsgröße und Füllgrad',
            'Verschmutzungsgrad',
            'Reinigungsaufwand',
            'Geruchsbeseitigung',
            'Zeitaufwand',
          ],
        },
        faq: [
          {
            question: 'Was kostet eine Messie-Räumung?',
            answer: 'Eine 60m² Messie-Wohnung kostet durchschnittlich 2.000-4.000€, abhängig vom Verschmutzungs- und Füllgrad. Nach vertraulichem Gespräch erhalten Sie ein transparentes Festpreisangebot.',
          },
          {
            question: 'Wie diskret arbeiten Sie?',
            answer: 'Absolute Diskretion ist uns sehr wichtig. Wir verwenden auf Wunsch neutrale Fahrzeuge, arbeiten zu vereinbarten Zeiten und behandeln Ihre Situation streng vertraulich.',
          },
          {
            question: 'Können Sie auch Gerüche beseitigen?',
            answer: 'Ja, wir haben professionelle Methoden zur Geruchsbeseitigung. Nach der Räumung und Reinigung setzen wir Ozonbehandlung oder spezielle Reinigungsmittel ein.',
          },
          {
            question: 'Wie gehen Sie mit persönlichen Gegenständen um?',
            answer: 'Wir sortieren behutsam alle Gegenstände. Persönliche Dokumente, Wertgegenstände und Erinnerungsstücke werden gesondert behandelt und Ihnen übergeben oder nach Ihren Wünschen verwahrt.',
          },
        ],
      },
      en: {
        name: 'Hoarding Clearing',
        shortDescription: 'Compassionate and professional clearing of hoarding situations in Vienna and throughout Austria - discreet and respectful.',
        description: 'Hoarding situations require special sensitivity and professionalism. We clear hoarding apartments discreetly, respectfully, and thoroughly throughout Austria. Our trained team works compassionately and supports you in restoring your living quality.',
        metaDescription: 'Hoarding Clearing Vienna & Austria ✓ Discreet & Compassionate ✓ Professional Help ✓ Confidential Service ☎ +43660 39 57 587',
        benefits: [
          'Compassionate and trained team',
          'Absolutely discreet handling',
          'Thorough cleaning after clearing',
          'Sorting of valuables',
          'Professional odor removal',
          'Confidential treatment',
        ],
        process: [
          {
            step: 1,
            title: 'Confidential Initial Consultation',
            description: 'We discuss your situation and special requirements calmly and discreetly.',
          },
          {
            step: 2,
            title: 'Gentle Planning',
            description: 'We plan the clearing sensitively and consider your personal wishes.',
          },
          {
            step: 3,
            title: 'Professional Clearing',
            description: 'Our trained team clears gently and thoroughly - with respect for your situation.',
          },
          {
            step: 4,
            title: 'Thorough Cleaning',
            description: 'After clearing, we clean thoroughly and professionally eliminate odors.',
          },
        ],
        pricing: {
          info: 'Hoarding clearings are individual. After a confidential consultation, we create a fair fixed-price offer.',
          factors: [
            'Apartment size and fill level',
            'Degree of soiling',
            'Cleaning effort required',
            'Odor removal',
            'Time required',
          ],
        },
        faq: [
          {
            question: 'How much does hoarding clearing cost?',
            answer: 'A 60m² hoarding apartment costs on average €2,000-4,000, depending on the degree of soiling and fill level. After confidential consultation, you receive a transparent fixed-price offer.',
          },
          {
            question: 'How discreet do you work?',
            answer: 'Absolute discretion is very important to us. Upon request, we use unmarked vehicles, work at agreed times, and treat your situation in strict confidence.',
          },
          {
            question: 'Can you also eliminate odors?',
            answer: 'Yes, we have professional methods for odor removal. After clearing and cleaning, we use ozone treatment or special cleaning agents.',
          },
          {
            question: 'How do you handle personal belongings?',
            answer: 'We carefully sort all items. Personal documents, valuables, and keepsakes are treated separately and handed over to you or kept according to your wishes.',
          },
        ],
      },
    },
  },
  {
    id: ServiceId.SPERRMULLENTSORGUNG,
    slugs: { de: 'sperrmullentsorgung', en: 'bulky-waste-disposal' },
    relatedServices: [ServiceId.CONTAINERSERVICE, ServiceId.WOHNUNGSRAEUMUNG, ServiceId.KELLERRAEUMUNG],
    content: {
      de: {
        name: 'Sperrmüllentsorgung',
        shortDescription: 'Professionelle Sperrmüllentsorgung in Wien und ganz Österreich - schnell, zuverlässig und umweltgerecht.',
        description: 'Sie müssen Sperrmüll entsorgen? Wir holen Ihren Sperrmüll ab und entsorgen ihn fachgerecht. Von einzelnen Möbelstücken bis zu größeren Mengen - schnell, zuverlässig und umweltbewusst in ganz Österreich.',
        metaDescription: 'Sperrmüllentsorgung Wien ✓ Ganz Österreich ✓ Schnelle Abholung ✓ Umweltgerecht ✓ Faire Preise ☎ +43660 39 57 587',
        benefits: [
          'Schnelle Abholung oft schon am nächsten Tag',
          'Entsorgung von Möbeln und Elektrogeräten',
          'Umweltgerechte Verwertung und Recycling',
          'Auch größere Mengen kein Problem',
          'Festpreis nach Besichtigung',
          'Abtransport aus allen Stockwerken',
        ],
        process: [
          {
            step: 1,
            title: 'Anfrage',
            description: 'Sie beschreiben uns Ihren Sperrmüll telefonisch, per E-Mail oder mit Fotos.',
          },
          {
            step: 2,
            title: 'Preisangebot',
            description: 'Wir erstellen ein transparentes Festpreisangebot für Abholung und Entsorgung.',
          },
          {
            step: 3,
            title: 'Schnelle Abholung',
            description: 'Wir holen Ihren Sperrmüll zum vereinbarten Termin ab - oft schon am nächsten Tag möglich.',
          },
          {
            step: 4,
            title: 'Fachgerechte Entsorgung',
            description: 'Wir entsorgen alles umweltgerecht und führen verwertbare Teile dem Recycling zu.',
          },
        ],
        pricing: {
          info: 'Die Kosten hängen von Art und Menge des Sperrmülls ab. Nach Beschreibung oder Besichtigung erhalten Sie einen Festpreis.',
          factors: [
            'Art und Menge des Sperrmülls',
            'Stockwerk und Liftvorhandensein',
            'Anzahl der benötigten Helfer',
            'Entsorgungskosten',
            'Entfernung',
          ],
        },
        faq: [
          {
            question: 'Was kostet Sperrmüllentsorgung?',
            answer: 'Ein Sofa oder Schrank kostet ab 80€, ein komplettes Schlafzimmer ab 200€. Der Preis hängt von Größe, Gewicht und Stockwerk ab. Nach Beschreibung erhalten Sie einen genauen Festpreis.',
          },
          {
            question: 'Wie schnell können Sie kommen?',
            answer: 'In dringenden Fällen oft schon am nächsten Tag. Normalerweise können wir innerhalb von 2-3 Tagen einen Termin anbieten.',
          },
          {
            question: 'Was zählt alles als Sperrmüll?',
            answer: 'Möbel, Matratzen, Teppiche, Elektrogeräte, Fahrräder, Gartengeräte - alles was nicht in die normale Mülltonne passt. Keine Baustellenabfälle oder Gefahrenstoffe.',
          },
          {
            question: 'Holen Sie auch aus oberen Stockwerken ab?',
            answer: 'Ja, wir holen Sperrmüll aus allen Stockwerken ab - auch ohne Lift. Unsere Teams sind ausgerüstet für alle Transportsituationen.',
          },
        ],
      },
      en: {
        name: 'Bulky Waste Disposal',
        shortDescription: 'Professional bulky waste disposal in Vienna and throughout Austria - fast, reliable, and environmentally friendly.',
        description: 'Need to dispose of bulky waste? We collect your bulky waste and dispose of it properly. From individual furniture pieces to larger quantities - fast, reliable, and environmentally conscious throughout Austria.',
        metaDescription: 'Bulky Waste Disposal Vienna & Austria ✓ Fast Collection ✓ Environmentally Friendly ✓ Fair Prices ✓ Same-Day Service ☎ +43660 39 57 587',
        benefits: [
          'Fast collection often the next day',
          'Disposal of furniture and electrical appliances',
          'Environmentally friendly recycling',
          'Large quantities no problem',
          'Fixed price after inspection',
          'Collection from all floors',
        ],
        process: [
          {
            step: 1,
            title: 'Inquiry',
            description: 'You describe your bulky waste by phone, email, or with photos.',
          },
          {
            step: 2,
            title: 'Price Quote',
            description: 'We create a transparent fixed-price offer for collection and disposal.',
          },
          {
            step: 3,
            title: 'Fast Collection',
            description: 'We collect your bulky waste at the agreed time - often possible the next day.',
          },
          {
            step: 4,
            title: 'Professional Disposal',
            description: 'We dispose of everything environmentally and recycle usable parts.',
          },
        ],
        pricing: {
          info: 'Costs depend on type and quantity of bulky waste. After description or inspection, you receive a fixed price.',
          factors: [
            'Type and quantity of bulky waste',
            'Floor level and elevator availability',
            'Number of helpers needed',
            'Disposal costs',
            'Distance',
          ],
        },
        faq: [
          {
            question: 'How much does bulky waste disposal cost?',
            answer: 'A sofa or wardrobe costs from €80, a complete bedroom set from €200. Price depends on size, weight, and floor level. After description, you receive an exact fixed price.',
          },
          {
            question: 'How quickly can you come?',
            answer: 'In urgent cases, often the next day. Normally, we can offer an appointment within 2-3 days.',
          },
          {
            question: 'What counts as bulky waste?',
            answer: 'Furniture, mattresses, carpets, electrical appliances, bicycles, garden equipment - anything that doesn\'t fit in the regular trash bin. No construction waste or hazardous materials.',
          },
          {
            question: 'Do you collect from upper floors?',
            answer: 'Yes, we collect bulky waste from all floors - even without elevator. Our teams are equipped for all transport situations.',
          },
        ],
      },
    },
  },
  {
    id: ServiceId.UMZUGSSERVICE,
    slugs: { de: 'umzugsservice', en: 'moving-service' },
    relatedServices: [ServiceId.WOHNUNGSRAEUMUNG, ServiceId.SPERRMULLENTSORGUNG, ServiceId.HAUSHALTSAUFLOESUNG],
    content: {
      de: {
        name: 'Umzugsservice',
        shortDescription: 'Professioneller Umzugsservice in Wien und ganz Österreich - von der Planung bis zur Endreinigung.',
        description: 'Ihr Umzug steht an? Wir kümmern uns um alles - vom Verpacken über den Transport bis zur Endreinigung der alten Wohnung. Professionell, zuverlässig und stressfrei in ganz Österreich.',
        metaDescription: 'Umzugsservice Wien ✓ Ganz Österreich ✓ Komplettservice mit Endreinigung ✓ Professionell ✓ Festpreis ☎ +43660 39 57 587',
        benefits: [
          'Kompletter Umzugsservice von A-Z',
          'Professionelles Verpackungsmaterial',
          'Möbelmontage und -demontage',
          'Endreinigung der alten Wohnung',
          'Versicherter Transport',
          'Festpreis nach Besichtigung',
        ],
        process: [
          {
            step: 1,
            title: 'Kostenlose Besichtigung',
            description: 'Wir besichtigen beide Wohnungen und planen den Umzug im Detail.',
          },
          {
            step: 2,
            title: 'Umzugsplanung',
            description: 'Wir erstellen einen detaillierten Umzugsplan mit Zeitablauf und Kostenübersicht.',
          },
          {
            step: 3,
            title: 'Durchführung',
            description: 'Am Umzugstag packen wir, montieren, transportieren und montieren wieder auf.',
          },
          {
            step: 4,
            title: 'Endreinigung',
            description: 'Wir reinigen Ihre alte Wohnung besenrein für die Übergabe.',
          },
        ],
        pricing: {
          info: 'Die Umzugskosten hängen von mehreren Faktoren ab. Nach Besichtigung erhalten Sie einen detaillierten Festpreis.',
          factors: [
            'Wohnungsgröße und Zimmerzahl',
            'Menge und Art des Umzugsguts',
            'Entfernung zwischen Alt- und Neuwohnung',
            'Stockwerk und Liftvorhandensein',
            'Zusatzleistungen (Montage, Endreinigung)',
          ],
        },
        faq: [
          {
            question: 'Was kostet ein Umzug?',
            answer: 'Ein 2-Zimmer-Umzug innerhalb Wiens kostet ab 800€, eine 4-Zimmer-Wohnung ab 1.500€. Der genaue Preis hängt von Umfang und Entfernung ab. Nach Besichtigung erhalten Sie einen verbindlichen Festpreis.',
          },
          {
            question: 'Wie lange dauert ein Umzug?',
            answer: 'Eine 2-Zimmer-Wohnung innerhalb Wiens schaffen wir in 4-6 Stunden. Größere Wohnungen oder weitere Entfernungen benötigen entsprechend mehr Zeit.',
          },
          {
            question: 'Ist mein Umzugsgut versichert?',
            answer: 'Ja, Ihr Umzugsgut ist während des Transports versichert. Die Versicherungssumme und Bedingungen besprechen wir im Erstgespräch.',
          },
          {
            question: 'Bringen Sie Verpackungsmaterial mit?',
            answer: 'Ja, wir bringen professionelles Verpackungsmaterial mit - Kartons, Luftpolsterfolie, Möbeldecken, etc. Die Kosten sind im Festpreis enthalten.',
          },
        ],
      },
      en: {
        name: 'Moving Service',
        shortDescription: 'Professional moving service in Vienna and throughout Austria - from planning to final cleaning.',
        description: 'Your move is coming up? We take care of everything - from packing and transport to final cleaning of the old apartment. Professional, reliable, and stress-free throughout Austria.',
        metaDescription: 'Moving Service Vienna & Austria ✓ Complete Service with Final Cleaning ✓ Professional ✓ Fixed Price ✓ Insured ☎ +43660 39 57 587',
        benefits: [
          'Complete moving service from A to Z',
          'Professional packing materials',
          'Furniture assembly and disassembly',
          'Final cleaning of old apartment',
          'Insured transport',
          'Fixed price after inspection',
        ],
        process: [
          {
            step: 1,
            title: 'Free Inspection',
            description: 'We inspect both apartments and plan the move in detail.',
          },
          {
            step: 2,
            title: 'Move Planning',
            description: 'We create a detailed moving plan with timeline and cost overview.',
          },
          {
            step: 3,
            title: 'Execution',
            description: 'On moving day, we pack, disassemble, transport, and reassemble.',
          },
          {
            step: 4,
            title: 'Final Cleaning',
            description: 'We clean your old apartment broom-clean for handover.',
          },
        ],
        pricing: {
          info: 'Moving costs depend on several factors. After inspection, you receive a detailed fixed price.',
          factors: [
            'Apartment size and number of rooms',
            'Quantity and type of items to move',
            'Distance between old and new apartment',
            'Floor level and elevator availability',
            'Additional services (assembly, final cleaning)',
          ],
        },
        faq: [
          {
            question: 'How much does a move cost?',
            answer: 'A 2-room move within Vienna costs from €800, a 4-room apartment from €1,500. The exact price depends on scope and distance. After inspection, you receive a binding fixed price.',
          },
          {
            question: 'How long does a move take?',
            answer: 'We complete a 2-room apartment within Vienna in 4-6 hours. Larger apartments or longer distances require correspondingly more time.',
          },
          {
            question: 'Are my belongings insured?',
            answer: 'Yes, your belongings are insured during transport. We discuss insurance coverage and conditions in the initial consultation.',
          },
          {
            question: 'Do you bring packing materials?',
            answer: 'Yes, we bring professional packing materials - boxes, bubble wrap, furniture blankets, etc. Costs are included in the fixed price.',
          },
        ],
      },
    },
  },
  {
    id: ServiceId.GARAGERAEUMUNG,
    slugs: { de: 'garageraeumung', en: 'garage-clearing' },
    relatedServices: [ServiceId.KELLERRAEUMUNG, ServiceId.CONTAINERSERVICE, ServiceId.SPERRMULLENTSORGUNG],
    content: {
      de: {
        name: 'Garageräumung',
        shortDescription: 'Professionelle Räumung von Garagen, Carports und Stellplätzen in Wien und ganz Österreich.',
        description: 'Ihre Garage ist vollgestellt und Sie brauchen wieder Platz fürs Auto? Wir räumen Garagen, Carports und Stellplätze komplett - von alten Autoreifen über Werkzeug bis zu jahrelang gesammeltem Gerümpel in ganz Österreich.',
        metaDescription: 'Garageräumung Wien ✓ Ganz Österreich ✓ Carports & Stellplätze ✓ Schnelle Abwicklung ✓ Festpreis ☎ +43660 39 57 587',
        benefits: [
          'Komplette Räumung von Garagen und Carports',
          'Entsorgung von Autoreifen und Altöl',
          'Auch größere Mengen kein Problem',
          'Schnelle Abwicklung',
          'Besenreine Übergabe',
          'Festpreis nach Besichtigung',
        ],
        process: [
          {
            step: 1,
            title: 'Kostenlose Besichtigung',
            description: 'Wir besichtigen Ihre Garage und erstellen ein unverbindliches Festpreisangebot.',
          },
          {
            step: 2,
            title: 'Terminvereinbarung',
            description: 'Nach Ihrer Zusage vereinbaren wir schnellstmöglich einen Termin.',
          },
          {
            step: 3,
            title: 'Professionelle Räumung',
            description: 'Wir räumen Ihre Garage komplett - inkl. fachgerechter Entsorgung von Sondermüll.',
          },
          {
            step: 4,
            title: 'Besenreine Übergabe',
            description: 'Wir übergeben Ihre Garage sauber und besenrein.',
          },
        ],
        pricing: {
          info: 'Die Kosten hängen vom Füllstand und der Größe ab. Nach Besichtigung erhalten Sie einen transparenten Festpreis.',
          factors: [
            'Garagengröße',
            'Füllstand und Art der Gegenstände',
            'Sondermüll (Reifen, Öl, Chemikalien)',
            'Zugänglichkeit',
            'Entsorgungsaufwand',
          ],
        },
        faq: [
          {
            question: 'Was kostet eine Garageräumung?',
            answer: 'Eine durchschnittliche Einzelgarage kostet 300-600€. Größere Garagen oder stark vollgestellte Bereiche kosten entsprechend mehr. Nach Besichtigung erhalten Sie einen genauen Festpreis.',
          },
          {
            question: 'Wie gehen Sie mit Autoreifen und Altöl um?',
            answer: 'Autoreifen und Altöl entsorgen wir fachgerecht über zertifizierte Fachbetriebe. Die Entsorgungskosten sind im Festpreis enthalten.',
          },
          {
            question: 'Können Sie auch Werkzeug und Maschinen abtransportieren?',
            answer: 'Ja, wir transportieren alles ab - von Werkzeugen über Maschinen bis zu Gartengeräten. Brauchbare Gegenstände können wir auf Wunsch auch verkaufen.',
          },
          {
            question: 'Wie lange dauert eine Garageräumung?',
            answer: 'Eine normale Einzelgarage räumen wir in 2-3 Stunden. Größere oder stark vollgestellte Garagen benötigen entsprechend mehr Zeit.',
          },
        ],
      },
      en: {
        name: 'Garage Clearing',
        shortDescription: 'Professional clearing of garages, carports, and parking spaces in Vienna and throughout Austria.',
        description: 'Is your garage cluttered and you need space for your car again? We completely clear garages, carports, and parking spaces - from old car tires and tools to years of accumulated clutter throughout Austria.',
        metaDescription: 'Garage Clearing Vienna & Austria ✓ Carports & Parking Spaces ✓ Fast Service ✓ Fixed Price ✓ Professional Disposal ☎ +43660 39 57 587',
        benefits: [
          'Complete clearing of garages and carports',
          'Disposal of car tires and waste oil',
          'Large quantities no problem',
          'Fast service',
          'Broom-clean handover',
          'Fixed price after inspection',
        ],
        process: [
          {
            step: 1,
            title: 'Free Inspection',
            description: 'We inspect your garage and create a non-binding fixed-price offer.',
          },
          {
            step: 2,
            title: 'Appointment Scheduling',
            description: 'After your confirmation, we schedule an appointment as soon as possible.',
          },
          {
            step: 3,
            title: 'Professional Clearing',
            description: 'We completely clear your garage - including proper disposal of hazardous waste.',
          },
          {
            step: 4,
            title: 'Broom-Clean Handover',
            description: 'We hand over your garage clean and broom-clean.',
          },
        ],
        pricing: {
          info: 'Costs depend on fill level and size. After inspection, you receive a transparent fixed price.',
          factors: [
            'Garage size',
            'Fill level and type of items',
            'Hazardous waste (tires, oil, chemicals)',
            'Accessibility',
            'Disposal effort',
          ],
        },
        faq: [
          {
            question: 'How much does garage clearing cost?',
            answer: 'An average single garage costs €300-600. Larger garages or heavily cluttered areas cost proportionally more. After inspection, you receive an exact fixed price.',
          },
          {
            question: 'How do you handle car tires and waste oil?',
            answer: 'We properly dispose of car tires and waste oil through certified specialists. Disposal costs are included in the fixed price.',
          },
          {
            question: 'Can you also transport tools and machinery?',
            answer: 'Yes, we transport everything - from tools and machinery to garden equipment. Upon request, we can also sell usable items.',
          },
          {
            question: 'How long does garage clearing take?',
            answer: 'We clear a normal single garage in 2-3 hours. Larger or heavily cluttered garages require correspondingly more time.',
          },
        ],
      },
    },
  },
  {
    id: ServiceId.BUROAUFLOESUNG,
    slugs: { de: 'bueroaufloesung', en: 'office-dissolution' },
    relatedServices: [ServiceId.GESCHAEFTSRAEUMUNG, ServiceId.SPERRMULLENTSORGUNG, ServiceId.CONTAINERSERVICE],
    content: {
      de: {
        name: 'Büroauflösung',
        shortDescription: 'Professionelle Auflösung von Büros und Praxen in Wien und ganz Österreich - diskret und termingerecht.',
        description: 'Sie lösen Ihr Büro oder Ihre Praxis auf? Wir übernehmen die komplette Büroauflösung - von der Demontage der Möbel bis zur fachgerechten Entsorgung von IT-Equipment. Diskret, professionell und termingerecht in ganz Österreich.',
        metaDescription: 'Büroauflösung Wien ✓ Ganz Österreich ✓ IT-Entsorgung ✓ Diskret ✓ Termingerecht ✓ Festpreis ☎ +43660 39 57 587',
        benefits: [
          'Komplette Büroauflösung von A-Z',
          'Fachgerechte IT- und Datenträger-Entsorgung',
          'Demontage von Büromöbeln',
          'Diskrete Abwicklung',
          'Termingerechte Ausführung',
          'Festpreis nach Besichtigung',
        ],
        process: [
          {
            step: 1,
            title: 'Besichtigung vor Ort',
            description: 'Wir besichtigen Ihre Büroräume und erstellen ein detailliertes Angebot.',
          },
          {
            step: 2,
            title: 'Detailplanung',
            description: 'Wir planen die Auflösung nach Ihrem Zeitplan - auch außerhalb der Geschäftszeiten.',
          },
          {
            step: 3,
            title: 'Professionelle Auflösung',
            description: 'Wir demontieren, räumen und entsorgen alles fachgerecht - inkl. IT-Equipment.',
          },
          {
            step: 4,
            title: 'Besenreine Übergabe',
            description: 'Wir übergeben die Räumlichkeiten besenrein und termingerecht.',
          },
        ],
        pricing: {
          info: 'Die Kosten hängen von Größe und Ausstattung ab. Nach Besichtigung erhalten Sie einen detaillierten Festpreis.',
          factors: [
            'Größe der Bürofläche',
            'Anzahl und Art der Büromöbel',
            'Menge an IT-Equipment',
            'Zeitfenster und Dringlichkeit',
            'Besondere Entsorgungsanforderungen',
          ],
        },
        faq: [
          {
            question: 'Was kostet eine Büroauflösung?',
            answer: 'Ein kleines Büro (30m²) kostet ab 1.000€, größere Büroflächen ab 2.500€. Der genaue Preis hängt von Möbeln und IT-Equipment ab. Nach Besichtigung erhalten Sie ein detailliertes Angebot.',
          },
          {
            question: 'Wie werden Datenträger entsorgt?',
            answer: 'Festplatten und Datenträger werden nach Datenschutzrichtlinien vernichtet. Auf Wunsch erhalten Sie Entsorgungsnachweise und Zertifikate über die fachgerechte Vernichtung.',
          },
          {
            question: 'Können Sie auch am Wochenende arbeiten?',
            answer: 'Ja, wir führen Büroauflösungen auch am Wochenende oder nachts durch, um den laufenden Betrieb nicht zu stören.',
          },
          {
            question: 'Was passiert mit den Büromöbeln?',
            answer: 'Hochwertige Büromöbel versuchen wir zu verkaufen - das reduziert Ihre Kosten. Nicht verwertbare Möbel werden fachgerecht entsorgt oder recycelt.',
          },
        ],
      },
      en: {
        name: 'Office Dissolution',
        shortDescription: 'Professional dissolution of offices and practices in Vienna and throughout Austria - discreet and on schedule.',
        description: 'Dissolving your office or practice? We handle the complete office dissolution - from furniture disassembly to proper IT equipment disposal. Discreet, professional, and on schedule throughout Austria.',
        metaDescription: 'Office Dissolution Vienna & Austria ✓ IT Disposal ✓ Discreet ✓ On Schedule ✓ Fixed Price ✓ Data Protection ☎ +43660 39 57 587',
        benefits: [
          'Complete office dissolution A to Z',
          'Professional IT and data carrier disposal',
          'Office furniture disassembly',
          'Discreet handling',
          'On-schedule execution',
          'Fixed price after inspection',
        ],
        process: [
          {
            step: 1,
            title: 'On-Site Inspection',
            description: 'We inspect your office premises and create a detailed quote.',
          },
          {
            step: 2,
            title: 'Detailed Planning',
            description: 'We plan the dissolution according to your schedule - even outside business hours.',
          },
          {
            step: 3,
            title: 'Professional Dissolution',
            description: 'We disassemble, clear, and properly dispose of everything - including IT equipment.',
          },
          {
            step: 4,
            title: 'Broom-Clean Handover',
            description: 'We hand over the premises broom-clean and on schedule.',
          },
        ],
        pricing: {
          info: 'Costs depend on size and equipment. After inspection, you receive a detailed fixed price.',
          factors: [
            'Office space size',
            'Number and type of office furniture',
            'Amount of IT equipment',
            'Time window and urgency',
            'Special disposal requirements',
          ],
        },
        faq: [
          {
            question: 'How much does office dissolution cost?',
            answer: 'A small office (30m²) costs from €1,000, larger office spaces from €2,500. The exact price depends on furniture and IT equipment. After inspection, you receive a detailed quote.',
          },
          {
            question: 'How are data carriers disposed of?',
            answer: 'Hard drives and data carriers are destroyed according to data protection regulations. Upon request, you receive disposal certificates for proper destruction.',
          },
          {
            question: 'Can you work on weekends?',
            answer: 'Yes, we also carry out office dissolutions on weekends or at night to avoid disrupting ongoing operations.',
          },
          {
            question: 'What happens to office furniture?',
            answer: 'We try to sell high-quality office furniture - this reduces your costs. Non-usable furniture is professionally disposed of or recycled.',
          },
        ],
      },
    },
  },
  {
    id: ServiceId.VERLASSENSCHAFTSRAEUMUNG,
    slugs: { de: 'verlassenschaftsraeumung', en: 'estate-clearing' },
    relatedServices: [ServiceId.HAUSHALTSAUFLOESUNG, ServiceId.WOHNUNGSRAEUMUNG, ServiceId.SPERRMULLENTSORGUNG],
    content: {
      de: {
        name: 'Verlassenschaftsräumung',
        shortDescription: 'Einfühlsame Verlassenschaftsräumung nach Todesfall in Wien und ganz Österreich - respektvoll und professionell.',
        description: 'Nach einem Todesfall ist die Räumung der Wohnung oder des Hauses emotional belastend. Wir übernehmen die Verlassenschaftsräumung respektvoll und einfühlsam. Wir kümmern uns um alles - von der Sortierung persönlicher Gegenstände bis zur besenreinen Übergabe in ganz Österreich.',
        metaDescription: 'Verlassenschaftsräumung Wien ✓ Ganz Österreich ✓ Einfühlsam nach Todesfall ✓ Diskret ✓ Respektvoll ☎ +43660 39 57 587',
        benefits: [
          'Einfühlsamer Umgang in schwierigen Zeiten',
          'Sorgfältige Sortierung von Wertgegenständen',
          'Diskrete und respektvolle Arbeitsweise',
          'Komplette Räumung von A-Z',
          'Besenreine Übergabe',
          'Festpreis nach Besichtigung',
        ],
        process: [
          {
            step: 1,
            title: 'Persönliches Erstgespräch',
            description: 'Wir besprechen in Ruhe Ihre Situation und besonderen Wünsche bezüglich der Verlassenschaft.',
          },
          {
            step: 2,
            title: 'Sorgfältige Sortierung',
            description: 'Wir sortieren behutsam Wertgegenstände, Dokumente und persönliche Erinnerungen aus.',
          },
          {
            step: 3,
            title: 'Respektvolle Räumung',
            description: 'Wir räumen die gesamte Verlassenschaft mit Respekt und Sorgfalt.',
          },
          {
            step: 4,
            title: 'Besenreine Übergabe',
            description: 'Wir übergeben die Immobilie besenrein und bereit zur Weitervermietung oder zum Verkauf.',
          },
        ],
        pricing: {
          info: 'Die Kosten variieren je nach Umfang. Wertvolle Gegenstände können die Kosten reduzieren. Nach Besichtigung erhalten Sie ein faires Angebot.',
          factors: [
            'Größe der Immobilie',
            'Umfang der Verlassenschaft',
            'Vorhandensein verwertbarer Gegenstände',
            'Zeitaufwand für Sortierung',
            'Entsorgungsaufwand',
          ],
        },
        faq: [
          {
            question: 'Was kostet eine Verlassenschaftsräumung?',
            answer: 'Eine 3-Zimmer-Wohnung kostet durchschnittlich 1.500-2.500€. Bei wertvollen Gegenständen können die Kosten deutlich reduziert werden. Nach Besichtigung erhalten Sie ein transparentes Angebot.',
          },
          {
            question: 'Wie gehen Sie mit persönlichen Gegenständen um?',
            answer: 'Wir sortieren sehr sorgfältig. Schmuck, Uhren, Dokumente, Fotoalben und Erinnerungsstücke werden gesondert behandelt und Ihnen übergeben.',
          },
          {
            question: 'Können Sie diskret arbeiten?',
            answer: 'Absolute Diskretion ist uns sehr wichtig. Wir arbeiten respektvoll, ruhig und auf Wunsch auch außerhalb der üblichen Zeiten.',
          },
          {
            question: 'Wie lange dauert eine Verlassenschaftsräumung?',
            answer: 'Ein durchschnittlicher 3-Zimmer-Haushalt benötigt 1-2 Tage. Wir nehmen uns Zeit für sorgfältiges Sortieren und respektvolles Arbeiten.',
          },
        ],
      },
      en: {
        name: 'Estate Clearing',
        shortDescription: 'Compassionate estate clearing after bereavement in Vienna and throughout Austria - respectful and professional.',
        description: 'After a death, clearing the apartment or house is emotionally challenging. We handle estate clearing respectfully and compassionately. We take care of everything - from sorting personal belongings to broom-clean handover throughout Austria.',
        metaDescription: 'Estate Clearing Vienna & Austria ✓ Compassionate After Bereavement ✓ Discreet ✓ Respectful ✓ Professional Service ☎ +43660 39 57 587',
        benefits: [
          'Compassionate handling in difficult times',
          'Careful sorting of valuables',
          'Discreet and respectful work approach',
          'Complete clearing from A to Z',
          'Broom-clean handover',
          'Fixed price after inspection',
        ],
        process: [
          {
            step: 1,
            title: 'Personal Initial Consultation',
            description: 'We calmly discuss your situation and special wishes regarding the estate.',
          },
          {
            step: 2,
            title: 'Careful Sorting',
            description: 'We gently sort valuables, documents, and personal memories.',
          },
          {
            step: 3,
            title: 'Respectful Clearing',
            description: 'We clear the entire estate with respect and care.',
          },
          {
            step: 4,
            title: 'Broom-Clean Handover',
            description: 'We hand over the property broom-clean and ready for re-rental or sale.',
          },
        ],
        pricing: {
          info: 'Costs vary depending on scope. Valuable items can reduce costs. After inspection, you receive a fair offer.',
          factors: [
            'Property size',
            'Scope of estate',
            'Presence of usable items',
            'Time required for sorting',
            'Disposal effort',
          ],
        },
        faq: [
          {
            question: 'How much does estate clearing cost?',
            answer: 'A 3-room apartment costs on average €1,500-2,500. With valuable items, costs can be significantly reduced. After inspection, you receive a transparent offer.',
          },
          {
            question: 'How do you handle personal belongings?',
            answer: 'We sort very carefully. Jewelry, watches, documents, photo albums, and keepsakes are treated separately and handed over to you.',
          },
          {
            question: 'Can you work discreetly?',
            answer: 'Absolute discretion is very important to us. We work respectfully, quietly, and upon request also outside regular hours.',
          },
          {
            question: 'How long does estate clearing take?',
            answer: 'An average 3-room household requires 1-2 days. We take time for careful sorting and respectful work.',
          },
        ],
      },
    },
  },
  {
    id: ServiceId.CONTAINERSERVICE,
    slugs: { de: 'container-service', en: 'container-service' },
    relatedServices: [ServiceId.SPERRMULLENTSORGUNG, ServiceId.GESCHAEFTSRAEUMUNG, ServiceId.GARAGERAEUMUNG],
    content: {
      de: {
        name: 'Container-Service',
        shortDescription: 'Professioneller Container-Service in Wien und ganz Österreich - von 3m³ bis 10m³ für alle Abfallarten.',
        description: 'Sie benötigen einen Container für Ihre Renovierung oder Baustelle? Wir liefern Container in verschiedenen Größen (3-10m³) für Bauschutt, Holz oder Mischabfall. Mit Abholung, Entsorgung und auf Wunsch Genehmigungsservice in ganz Österreich.',
        metaDescription: 'Container-Service Wien ✓ Ganz Österreich ✓ 3-10m³ Container ✓ Bauschutt & Mischabfall ✓ Inkl. Entsorgung ☎ +43660 39 57 587',
        benefits: [
          'Container in verschiedenen Größen (3-10m³)',
          'Für alle Abfallarten (Bauschutt, Holz, Mischabfall)',
          'Schnelle Lieferung und Abholung',
          'Inklusive fachgerechter Entsorgung',
          'Hilfe bei Straßen-Genehmigung',
          'Transparente Festpreise',
        ],
        process: [
          {
            step: 1,
            title: 'Anfrage & Beratung',
            description: 'Wir beraten Sie zur richtigen Containergröße und erstellen ein Angebot.',
          },
          {
            step: 2,
            title: 'Lieferung',
            description: 'Wir liefern den Container zum Wunschtermin an die gewünschte Stelle (Straße, Grundstück, Baustelle).',
          },
          {
            step: 3,
            title: 'Befüllung',
            description: 'Sie befüllen den Container in Ihrem Tempo. Wir beraten bei Fragen zur richtigen Befüllung.',
          },
          {
            step: 4,
            title: 'Abholung & Entsorgung',
            description: 'Nach Ihrer Meldung holen wir den Container ab und entsorgen den Inhalt fachgerecht.',
          },
        ],
        pricing: {
          info: 'Container-Preise richten sich nach Größe, Mietdauer und Abfallart. Wir erstellen transparente All-inclusive-Angebote.',
          factors: [
            'Containergröße (3m³, 5m³, 7m³, 10m³)',
            'Mietdauer (Tage oder Wochen)',
            'Art des Abfalls (Bauschutt, Holz, Mischabfall)',
            'Lieferentfernung',
            'Stellplatz-Genehmigung (bei Straßenaufstellung)',
          ],
        },
        faq: [
          {
            question: 'Was kostet ein Container?',
            answer: 'Ein 3m³ Container für Bauschutt kostet ab 180€ (inkl. Lieferung, Abholung, Entsorgung, 7 Tage Miete). Ein 7m³ Container ab 350€. Mischabfall ist teurer als sortenreiner Bauschutt. Festpreis im Angebot.',
          },
          {
            question: 'Welche Containergröße brauche ich?',
            answer: 'Für kleine Renovierungen (Bad, Küche) reicht meist 3-5m³. Bei Wohnungsräumungen empfehlen wir 5-7m³. Für Hausabbruch oder große Baustellen 7-10m³. Wir beraten Sie gerne telefonisch.',
          },
          {
            question: 'Brauche ich eine Genehmigung für Straßenaufstellung?',
            answer: 'Bei Aufstellung auf öffentlichem Grund (Straße, Gehsteig) benötigen Sie eine Bewilligung der MA46. Wir helfen Ihnen bei der Beantragung oder stellen den Container auf Privatgrund.',
          },
          {
            question: 'Was darf in den Container?',
            answer: 'In Bauschutt-Container: Ziegel, Beton, Fliesen, Keramik. In Holz-Container: Holzabfälle, Möbel, Paletten. In Mischabfall: alle gemischten Abfälle. Nicht erlaubt: Asbest, Gefahrstoffe, Elektrogeräte.',
          },
        ],
      },
      en: {
        name: 'Container Service',
        shortDescription: 'Professional container service in Vienna and throughout Austria - from 3m³ to 10m³ for all waste types.',
        description: 'Need a container for your renovation or construction site? We deliver containers in various sizes (3-10m³) for construction debris, wood, or mixed waste. With collection, disposal, and optional permit service throughout Austria.',
        metaDescription: 'Container Service Vienna & Austria ✓ 3-10m³ Containers ✓ Construction & Mixed Waste ✓ Incl. Disposal ✓ Fast Delivery ☎ +43660 39 57 587',
        benefits: [
          'Containers in various sizes (3-10m³)',
          'For all waste types (construction debris, wood, mixed waste)',
          'Fast delivery and collection',
          'Including professional disposal',
          'Help with street permits',
          'Transparent fixed prices',
        ],
        process: [
          {
            step: 1,
            title: 'Inquiry & Consultation',
            description: 'We advise you on the right container size and create an offer.',
          },
          {
            step: 2,
            title: 'Delivery',
            description: 'We deliver the container at your desired time to the desired location (street, property, construction site).',
          },
          {
            step: 3,
            title: 'Filling',
            description: 'You fill the container at your own pace. We advise on proper filling if needed.',
          },
          {
            step: 4,
            title: 'Collection & Disposal',
            description: 'After your notification, we collect the container and dispose of contents properly.',
          },
        ],
        pricing: {
          info: 'Container prices depend on size, rental period, and waste type. We create transparent all-inclusive offers.',
          factors: [
            'Container size (3m³, 5m³, 7m³, 10m³)',
            'Rental period (days or weeks)',
            'Type of waste (construction debris, wood, mixed waste)',
            'Delivery distance',
            'Placement permit (for street placement)',
          ],
        },
        faq: [
          {
            question: 'How much does a container cost?',
            answer: 'A 3m³ container for construction debris costs from €180 (incl. delivery, collection, disposal, 7 days rental). A 7m³ container from €350. Mixed waste is more expensive than sorted construction debris. Fixed price in quote.',
          },
          {
            question: 'What container size do I need?',
            answer: 'For small renovations (bathroom, kitchen), 3-5m³ is usually sufficient. For apartment clearings, we recommend 5-7m³. For house demolition or large construction sites, 7-10m³. We are happy to advise you by phone.',
          },
          {
            question: 'Do I need a permit for street placement?',
            answer: 'For placement on public ground (street, sidewalk), you need approval from MA46. We help you with the application or place the container on private property.',
          },
          {
            question: 'What can go in the container?',
            answer: 'Construction debris container: bricks, concrete, tiles, ceramics. Wood container: wood waste, furniture, pallets. Mixed waste: all mixed waste. Not allowed: asbestos, hazardous materials, electrical appliances.',
          },
        ],
      },
    },
  },
];

export const slugIndex: Record<'de' | 'en', Record<string, ServiceId>> = {
  de: {},
  en: {},
};

servicesData.forEach((service) => {
  slugIndex.de[service.slugs.de] = service.id;
  slugIndex.en[service.slugs.en] = service.id;
});

export function getServiceById(id: ServiceId): ServiceEntry | null {
  return servicesData.find((s) => s.id === id) || null;
}

export function getServiceBySlug(slug: string, locale: 'de' | 'en' = 'de'): ServiceEntry | null {
  const id = slugIndex[locale][slug];
  return id ? getServiceById(id) : null;
}

export function getServiceContent(id: ServiceId, locale: 'de' | 'en' = 'de'): ServiceContent | null {
  const service = getServiceById(id);
  return service ? service.content[locale] : null;
}

export function getLocalizedServicePath(id: ServiceId, locale: 'de' | 'en' = 'de'): string {
  const service = getServiceById(id);
  if (!service) return '/';
  
  const basePath = locale === 'de' ? '/leistungen' : '/en/services';
  return `${basePath}/${service.slugs[locale]}`;
}

export function getAllServices(): ServiceEntry[] {
  return servicesData;
}
