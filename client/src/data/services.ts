export interface ServiceInfo {
  name: string;
  slug: string;
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
  relatedServices: string[];
}

export const services: Record<string, ServiceInfo> = {
  'wohnungsentrümpelungen': {
    name: 'Wohnungsentrümpelung',
    slug: 'wohnungsentrümpelungen',
    shortDescription: 'Professionelle Entrümpelung Ihrer Wohnung in ganz Wien - schnell, zuverlässig und zu fairen Preisen.',
    description: 'Unsere Wohnungsentrümpelung ist der ideale Service für Sie, wenn Sie Ihre Wohnung komplett räumen müssen. Ob bei Umzug, Verkauf, Vermietung oder Erbe - wir entrümpeln Ihre Wohnung professionell, schnell und diskret. Von der 1-Zimmer-Wohnung bis zur großen Altbauwohnung in allen 23 Wiener Bezirken.',
    metaDescription: 'Wohnungsentrümpelung Wien ✓ Alle Bezirke ✓ Auch ohne Lift ✓ Besenreine Übergabe ✓ Festpreisgarantie ✓ Same-Day möglich ☎ +43 660 200 5610',
    benefits: [
      'Komplette Entrümpelung vom Keller bis zum Dachboden',
      'Auch Altbauwohnungen ohne Lift bis 5. Stock',
      'Besenreine Übergabe garantiert',
      'Fachgerechte Entsorgung und Recycling',
      'Diskrete Abwicklung in allen Wiener Bezirken',
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
        title: 'Professionelle Entrümpelung',
        description: 'Unser Team räumt Ihre Wohnung komplett - vom Mobiliar über Elektrogeräte bis zu Kleinteilen.',
      },
      {
        step: 4,
        title: 'Besenreine Übergabe',
        description: 'Wir übergeben Ihre Wohnung besenrein und entsorgen alles fachgerecht über zertifizierte Partner.',
      },
    ],
    pricing: {
      info: 'Die Kosten für eine Wohnungsentrümpelung in Wien hängen von mehreren Faktoren ab. Nach einer kostenlosen Besichtigung erhalten Sie von uns einen transparenten Festpreis.',
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
        question: 'Was kostet eine Wohnungsentrümpelung in Wien?',
        answer: 'Eine 50m² Wohnung kostet durchschnittlich 800-1.200€, eine 80m² Wohnung 1.200-1.800€. Der genaue Preis hängt von der Objektmenge und dem Stockwerk ab. Nach kostenloser Besichtigung erhalten Sie einen verbindlichen Festpreis ohne versteckte Kosten.',
      },
      {
        question: 'Wie lange dauert eine Wohnungsentrümpelung?',
        answer: 'Eine 60m² Wohnung entrümpeln wir in der Regel in 4-6 Stunden. Größere Wohnungen oder stark vollgestellte Objekte benötigen 6-10 Stunden. Bei Messie-Wohnungen planen wir 1-2 Tage ein.',
      },
      {
        question: 'Können Sie auch ohne Lift bis in den 5. Stock?',
        answer: 'Ja, selbstverständlich! Viele Wiener Altbauten haben keinen Lift - das ist für uns Routine. Unsere Teams sind trainiert im Tragen schwerer Gegenstände über enge Wendeltreppen. Bei Bedarf nutzen wir Möbel-Tragegurte und Außenaufzüge.',
      },
      {
        question: 'Was passiert mit meinen Möbeln und Gegenständen?',
        answer: 'Brauchbare Möbel und Gegenstände führen wir sozialen Einrichtungen zu. Defekte Möbel werden fachgerecht recycelt. Sondermüll entsorgen wir über zertifizierte Fachbetriebe. Sie erhalten auf Wunsch Entsorgungsnachweise.',
      },
    ],
    relatedServices: ['haushaltsauflösung', 'kellerentrümpelung', 'verlassenschaftsentrümpelung'],
  },

  'haushaltsauflösung': {
    name: 'Haushaltsauflösung',
    slug: 'haushaltsauflösung',
    shortDescription: 'Komplette Haushaltsauflösung nach Todesfall, Umzug ins Pflegeheim oder bei Verkauf - einfühlsam und professionell.',
    description: 'Eine Haushaltsauflösung ist oft eine emotionale Angelegenheit. Ob nach einem Todesfall, beim Umzug ins Pflegeheim oder bei Verkauf - wir übernehmen die komplette Auflösung Ihres Haushalts mit Respekt und Einfühlungsvermögen. Wir kümmern uns um alles: von der Wertgegenständesortierung bis zur besenreinen Übergabe.',
    metaDescription: 'Haushaltsauflösung Wien ✓ Einfühlsam nach Todesfall ✓ Wertgegenstände-Sortierung ✓ Komplettservice ✓ Alle Bezirke ☎ +43 660 200 5610',
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
        'Zeitaufwand für Sortierung und Sichtung',
        'Besondere Wünsche (z.B. Dokumentenvernichtung)',
        'Stockwerk und Erreichbarkeit',
      ],
    },
    faq: [
      {
        question: 'Wie lange dauert eine komplette Haushaltsauflösung?',
        answer: 'Ein durchschnittlicher 3-Zimmer-Haushalt wird in 1-2 Tagen aufgelöst. Bei größeren Haushalten oder aufwendiger Sortierung planen wir 2-4 Tage ein. Für dringende Fälle bieten wir auch Express-Service an.',
      },
      {
        question: 'Was passiert mit wertvollen Gegenständen?',
        answer: 'Wertgegenstände sortieren wir sorgfältig aus und übergeben sie Ihnen oder Ihren Angehörigen. Auf Wunsch vermitteln wir Kontakte zu Auktionshäusern oder Antiquitätenhändlern. Auch eine Anrechnung auf die Entrümpelungskosten ist möglich.',
      },
      {
        question: 'Können Sie auch Dokumente vernichten?',
        answer: 'Ja, wir bieten sichere Dokumentenvernichtung nach DSGVO-Standard an. Persönliche Papiere, Kontoauszüge und sensible Dokumente werden in zertifizierten Anlagen geschreddert. Sie erhalten einen Vernichtungsnachweis.',
      },
      {
        question: 'Arbeiten Sie auch am Wochenende?',
        answer: 'Ja, gerade bei Haushaltsauflösungen bieten wir flexible Termine auch am Samstag an, damit Angehörige dabei sein können. Sonntags arbeiten wir bei besonders dringenden Fällen.',
      },
    ],
    relatedServices: ['wohnungsentrümpelungen', 'verlassenschaftsentrümpelung', 'dachbodenentrümpelung'],
  },

  'kellerentrümpelung': {
    name: 'Kellerentrümpelung',
    slug: 'kellerentrümpelung',
    shortDescription: 'Professionelle Kellerentrümpelung in Wien - von vollgestellten Kellerabteilen bis zu großen Kellern in Mehrparteienhäusern.',
    description: 'Ihr Keller ist über Jahre vollgestellt und Sie brauchen wieder Platz? Wir entrümpeln Kellerabteile, Kellerräume und komplette Keller in Wiener Altbauten und Neubauten. Auch feuchte oder schwer zugängliche Keller sind kein Problem für uns.',
    metaDescription: 'Kellerentrümpelung Wien ✓ Kellerabteile ✓ Feuchte Keller ✓ Altbau-Keller ✓ Auch große Mengen ✓ Alle Bezirke ☎ +43 660 200 5610',
    benefits: [
      'Entrümpelung auch von feuchten und vollgestellten Kellern',
      'Erfahrung mit engen Kellerzugängen in Altbauten',
      'Entsorgung auch von Sondermüll (Farben, Chemikalien)',
      'Kellerreinigung auf Wunsch inklusive',
      'Flexible Arbeitszeiten auch abends möglich',
      'Schnelle Abwicklung innerhalb 1-2 Tagen',
    ],
    process: [
      {
        step: 1,
        title: 'Kellerbesichtigung',
        description: 'Wir besichtigen Ihren Keller und prüfen Zugangsmöglichkeiten, Feuchtigkeit und Art der Gegenstände.',
      },
      {
        step: 2,
        title: 'Festpreis-Angebot',
        description: 'Sie erhalten ein transparentes Angebot basierend auf Volumen und Aufwand - keine versteckten Kosten.',
      },
      {
        step: 3,
        title: 'Komplette Entrümpelung',
        description: 'Wir räumen Ihren Keller komplett - von alten Möbeln über Gerümpel bis zu Sondermüll.',
      },
      {
        step: 4,
        title: 'Fachgerechte Entsorgung',
        description: 'Sondermüll wird über zertifizierte Betriebe entsorgt. Brauchbares recyceln oder spenden wir.',
      },
    ],
    pricing: {
      info: 'Kellerentrümpelungen sind oft günstiger als gedacht. Die Kosten richten sich nach Kubikmetern und Aufwand.',
      factors: [
        'Volumen der zu entsorgenden Gegenstände',
        'Art der Gegenstände (normaler Müll vs. Sondermüll)',
        'Zugänglichkeit des Kellers (Treppen, Gänge)',
        'Feuchtigkeit und Zustand des Kellers',
        'Zusatzleistungen wie Kellerreinigung',
      ],
    },
    faq: [
      {
        question: 'Was kostet eine Kellerentrümpelung?',
        answer: 'Ein kleines Kellerabteil (5-10m³) kostet ab 300-500€. Ein vollgestellter Altbau-Keller (20-30m³) liegt bei 800-1.500€. Bei Sondermüll (Farben, Lacke) kommen Entsorgungsgebühren hinzu. Fixpreis nach Besichtigung.',
      },
      {
        question: 'Können Sie auch feuchte Keller entrümpeln?',
        answer: 'Ja, feuchte Keller sind für uns kein Problem. Wir tragen Schutzkleidung und entsorgen auch schimmelige oder feuchte Gegenstände fachgerecht. Bei starkem Schimmelbefall empfehlen wir vorab eine Sanierung.',
      },
      {
        question: 'Wie entsorgen Sie Sondermüll aus dem Keller?',
        answer: 'Farben, Lacke, Chemikalien und andere Gefahrstoffe entsorgen wir über zertifizierte Sondermüll-Betriebe. Sie erhalten Entsorgungsnachweise. Die Kosten werden transparent im Angebot ausgewiesen.',
      },
      {
        question: 'Arbeiten Sie auch in sehr engen Kellern?',
        answer: 'Ja, Wiener Altbau-Keller mit engen Treppen und Gängen kennen wir bestens. Wir nutzen spezielle Tragegurte und arbeiten in kleineren Teams, um auch verwinkelte Keller zu entrümpeln.',
      },
    ],
    relatedServices: ['dachbodenentrümpelung', 'wohnungsentrümpelungen', 'garageentrümpelung'],
  },

  'dachbodenentrümpelung': {
    name: 'Dachbodenentrümpelung',
    slug: 'dachbodenentrümpelung',
    shortDescription: 'Dachböden und Speicher professionell entrümpeln in ganz Wien - auch bei steilen Stiegen und niedrigen Durchgängen.',
    description: 'Über Jahrzehnte sammelt sich auf Dachböden vieles an. Wir entrümpeln Ihren Dachboden professionell - von einzelnen Dachkammern bis zu kompletten Dachgeschossen in Wiener Zinshäusern. Auch schwer zugängliche Speicher sind für uns kein Problem.',
    metaDescription: 'Dachbodenentrümpelung Wien ✓ Steile Treppen ✓ Niedrige Durchgänge ✓ Altbau-Speicher ✓ Sperrmüll-Entsorgung ☎ +43 660 200 5610',
    benefits: [
      'Erfahrung mit steilen Dachbodentreppen und niedrigen Durchgängen',
      'Entrümpelung auch bei extremen Dachschrägen',
      'Vorsichtiger Umgang mit historischen Dachkonstruktionen',
      'Entsorgung von altem Sperrmüll und Gerümpel',
      'Schnelle Abwicklung ohne Lärm für Nachbarn',
      'Besenreine Übergabe des Dachbodens',
    ],
    process: [
      {
        step: 1,
        title: 'Dachboden-Besichtigung',
        description: 'Wir prüfen Zugänglichkeit, Treppen, Durchgangshöhen und Art der zu entsorgenden Gegenstände.',
      },
      {
        step: 2,
        title: 'Sicherheitsplanung',
        description: 'Wir planen die sichere Entrümpelung unter Berücksichtigung steiler Treppen und niedriger Decken.',
      },
      {
        step: 3,
        title: 'Professionelle Räumung',
        description: 'Unser geschultes Team räumt den Dachboden komplett - vorsichtig und ohne Schäden an der Bausubstanz.',
      },
      {
        step: 4,
        title: 'Fachgerechte Entsorgung',
        description: 'Alles wird umweltgerecht entsorgt oder recycelt. Brauchbare Gegenstände spenden wir.',
      },
    ],
    pricing: {
      info: 'Die Kosten für eine Dachbodenentrümpelung hängen von Zugänglichkeit und Menge ab. Steile Treppen erhöhen den Aufwand leicht.',
      factors: [
        'Volumen und Art der zu entsorgenden Gegenstände',
        'Zugänglichkeit (Treppen, Durchgangshöhen)',
        'Stockwerk und Gebäudehöhe',
        'Besondere Anforderungen (z.B. historischer Dachstuhl)',
        'Zusatzleistungen wie Dachbodenreinigung',
      ],
    },
    faq: [
      {
        question: 'Was kostet eine Dachbodenentrümpelung?',
        answer: 'Ein kleiner Dachboden (10-15m³) kostet ab 400-700€. Größere Speicher in Altbauten (25-40m³) liegen bei 1.000-2.000€. Bei sehr steilen oder engen Treppen kalkulieren wir einen Aufschlag von 15-20%. Festpreis nach Besichtigung.',
      },
      {
        question: 'Können Sie auch sehr steile Dachbodentreppen bewältigen?',
        answer: 'Ja, steile Wiener Altbau-Treppen zum Dachboden sind uns bestens vertraut. Wir nutzen Tragegurte und arbeiten vorsichtig, um weder Treppe noch Treppenhaus zu beschädigen. Für sehr große Möbel prüfen wir Fensterlösungen.',
      },
      {
        question: 'Was passiert mit alten Möbeln vom Dachboden?',
        answer: 'Antike oder wertvolle Möbelstücke können wir auf Wunsch begutachten lassen. Brauchbare Möbel spenden wir an soziale Einrichtungen. Defekte Stücke werden fachgerecht recycelt - Holz getrennt von Metall und Textilien.',
      },
      {
        question: 'Wie lange dauert eine Dachbodenentrümpelung?',
        answer: 'Ein durchschnittlicher Altbau-Dachboden (20m³) ist in 4-6 Stunden entrümpelt. Bei besonders vollgestellten oder schwer zugänglichen Speichern planen wir 6-10 Stunden ein. Express-Service innerhalb 24h möglich.',
      },
    ],
    relatedServices: ['kellerentrümpelung', 'wohnungsentrümpelungen', 'sperrmüllentsorgung'],
  },

  'geschäftsentrümpelung': {
    name: 'Geschäftsentrümpelung',
    slug: 'geschäftsentrümpelung',
    shortDescription: 'Professionelle Entrümpelung von Geschäftsräumen, Büros und Gewerbeflächen in Wien - diskret und außerhalb der Öffnungszeiten.',
    description: 'Sie schließen Ihr Geschäft, ziehen um oder renovieren? Wir entrümpeln Ihre Geschäftsräume professionell und diskret - von kleinen Boutiquen bis zu großen Gewerbeflächen. Arbeitszeiten flexibel außerhalb Ihrer Öffnungszeiten.',
    metaDescription: 'Geschäftsentrümpelung Wien ✓ Außerhalb Öffnungszeiten ✓ Büros & Gewerbe ✓ Diskret ✓ Schnell ✓ Alle Bezirke ☎ +43 660 200 5610',
    benefits: [
      'Flexible Arbeitszeiten außerhalb der Öffnungszeiten',
      'Diskrete Abwicklung ohne Firmenkennzeichnung',
      'Erfahrung mit Gewerbeimmobilien aller Art',
      'Fachgerechte Entsorgung auch von Gewerbemüll',
      'Schnelle Abwicklung für nahtlose Übergabe',
      'Dokumentenvernichtung nach DSGVO möglich',
    ],
    process: [
      {
        step: 1,
        title: 'Gewerbe-Besichtigung',
        description: 'Wir besichtigen Ihre Geschäftsräume und besprechen spezielle Anforderungen wie Arbeitszeiten und Diskretion.',
      },
      {
        step: 2,
        title: 'Detailliertes Angebot',
        description: 'Sie erhalten ein transparentes Festpreisangebot mit allen Leistungen und flexiblen Zeitfenstern.',
      },
      {
        step: 3,
        title: 'Professionelle Räumung',
        description: 'Wir entrümpeln außerhalb Ihrer Öffnungszeiten - abends, nachts oder am Wochenende nach Wunsch.',
      },
      {
        step: 4,
        title: 'Besenreine Übergabe',
        description: 'Ihre Geschäftsräume werden besenrein übergeben - bereit für Nachmieter oder Renovierung.',
      },
    ],
    pricing: {
      info: 'Die Kosten für Geschäftsentrümpelungen richten sich nach Fläche, Inventar und Zeitaufwand. Flexible Arbeitszeiten sind im Preis inkludiert.',
      factors: [
        'Größe der Gewerbefläche in m²',
        'Art und Menge des Inventars (Regale, Theken, etc.)',
        'Gewünschte Arbeitszeiten (Nacht/Wochenende)',
        'Besondere Anforderungen (DSGVO-Vernichtung)',
        'Stockwerk und Ladezonenzugang',
      ],
    },
    faq: [
      {
        question: 'Können Sie auch nachts oder am Wochenende arbeiten?',
        answer: 'Ja, für Geschäftsentrümpelungen arbeiten wir flexibel außerhalb Ihrer Öffnungszeiten. Samstag/Sonntag oder nachts von 22-6 Uhr ist möglich. Besonders in der Mariahilfer Straße oder am Graben sind Nacht-Einsätze üblich.',
      },
      {
        question: 'Was kostet die Entrümpelung eines kleinen Geschäfts?',
        answer: 'Ein kleines Ladenlokal (30-50m²) kostet ab 800-1.500€. Größere Gewerbeflächen (100-200m²) liegen bei 2.500-5.000€. Arbeiten außerhalb der Geschäftszeiten sind im Preis inkludiert. Festpreis nach Besichtigung.',
      },
      {
        question: 'Können Sie Geschäftsunterlagen sicher vernichten?',
        answer: 'Ja, wir bieten DSGVO-konforme Dokumentenvernichtung an. Akten, Kundenunterlagen und Geschäftspapiere werden in zertifizierten Anlagen geschreddert. Sie erhalten einen Vernichtungsnachweis für Ihre Buchhaltung.',
      },
      {
        question: 'Arbeiten Sie diskret ohne Firmenlogo?',
        answer: 'Absolut. Für Geschäftsentrümpelungen nutzen wir auf Wunsch neutrale Fahrzeuge ohne Logo. Unsere Mitarbeiter tragen zivile Kleidung. Gerade in gehobenen Lagen (Innere Stadt, Botschaftsviertel) ist Diskretion Standard.',
      },
    ],
    relatedServices: ['büroauflösung', 'wohnungsentrümpelungen', 'sperrmüllentsorgung'],
  },

  'messie-entrümpelung': {
    name: 'Messie-Entrümpelung',
    slug: 'messie-entrümpelung',
    shortDescription: 'Einfühlsame Messie-Entrümpelung in Wien - diskret, respektvoll und ohne Vorurteile.',
    description: 'Messie-Wohnungen erfordern besondere Sensibilität und Erfahrung. Wir entrümpeln Messie-Haushalte mit Respekt, Diskretion und ohne Vorurteile. Unsere geschulten Teams arbeiten einfühlsam und helfen Ihnen, wieder Ordnung zu schaffen.',
    metaDescription: 'Messie-Entrümpelung Wien ✓ Diskret & einfühlsam ✓ Ohne Vorurteile ✓ Professionelle Teams ✓ Vertraulich ✓ Alle Bezirke ☎ +43 660 200 5610',
    benefits: [
      'Geschulte Teams mit Messie-Erfahrung und Einfühlungsvermögen',
      'Absolute Diskretion und Verschwiegenheit garantiert',
      'Respektvoller Umgang ohne Bewertung',
      'Sortierung wichtiger Dokumente und Erinnerungen',
      'Schrittweise Entrümpelung nach Ihrem Tempo möglich',
      'Vermittlung von Nachsorge-Kontakten auf Wunsch',
    ],
    process: [
      {
        step: 1,
        title: 'Vertrauliches Erstgespräch',
        description: 'In einem unverbindlichen Gespräch besprechen wir Ihre Situation - telefonisch, per Video oder vor Ort.',
      },
      {
        step: 2,
        title: 'Gemeinsame Planung',
        description: 'Wir planen die Entrümpelung nach Ihren Wünschen - ob komplett oder schrittweise in Etappen.',
      },
      {
        step: 3,
        title: 'Einfühlsame Entrümpelung',
        description: 'Unser Team arbeitet respektvoll und sortiert auf Wunsch wichtige Gegenstände und Dokumente aus.',
      },
      {
        step: 4,
        title: 'Wiederherstellung',
        description: 'Wir übergeben Ihre Wohnung gereinigt und in nutzbarem Zustand - als Neuanfang.',
      },
    ],
    pricing: {
      info: 'Messie-Entrümpelungen sind oft aufwendiger als normale Entrümpelungen. Wir kalkulieren fair und transparent nach Aufwand.',
      factors: [
        'Grad der Vermüllung (leicht bis schwer)',
        'Wohnungsgröße und Anzahl der Zimmer',
        'Sortierungsaufwand für wichtige Dokumente',
        'Hygienezustand und Reinigungsaufwand',
        'Gewünschte Schrittweise vs. Komplett-Entrümpelung',
      ],
    },
    faq: [
      {
        question: 'Wie diskret arbeiten Sie bei Messie-Entrümpelungen?',
        answer: 'Absolute Diskretion ist bei uns selbstverständlich. Wir nutzen neutrale Fahrzeuge, tragen zivile Kleidung und informieren keine Nachbarn. Unsere Mitarbeiter sind geschult und behandeln Ihre Situation vertraulich ohne Vorurteile.',
      },
      {
        question: 'Was kostet eine Messie-Entrümpelung?',
        answer: 'Eine leichte Messie-Wohnung (60m²) kostet ab 1.500-2.500€. Mittelschwere Fälle liegen bei 2.500-4.500€, schwere Fälle bei 4.500-8.000€. Die Kosten hängen vom Vermüllungsgrad und Sortieraufwand ab. Ratenzahlung möglich.',
      },
      {
        question: 'Können Sie auch schrittweise entrümpeln?',
        answer: 'Ja, wenn gewünscht entrümpeln wir in Etappen - z.B. erst ein Zimmer, dann das nächste. Das gibt Ihnen Zeit, sich an die Veränderung zu gewöhnen. Viele Klienten bevorzugen diesen sanfteren Weg.',
      },
      {
        question: 'Helfen Sie auch bei der Nachsorge?',
        answer: 'Wir können Ihnen Kontakte zu Therapeuten, Selbsthilfegruppen und Ordnungsberatern vermitteln. Einige unserer Kunden buchen auch regelmäßige Unterstützung, um Rückfälle zu vermeiden.',
      },
    ],
    relatedServices: ['wohnungsentrümpelungen', 'haushaltsauflösung', 'kellerentrümpelung'],
  },
};

export const getAllServices = (): ServiceInfo[] => {
  return Object.values(services);
};

export const getServiceBySlug = (slug: string): ServiceInfo | null => {
  return services[slug] || null;
};
