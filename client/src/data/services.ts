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

  'sperrmüllentsorgung': {
    name: 'Sperrmüllentsorgung',
    slug: 'sperrmüllentsorgung',
    shortDescription: 'Schnelle und unkomplizierte Sperrmüllabholung in Wien - wir entsorgen Möbel, Elektrogeräte und mehr fachgerecht.',
    description: 'Sie haben alte Möbel, Matratzen oder Elektrogeräte zu entsorgen? Unsere Sperrmüllentsorgung ist die schnelle und bequeme Lösung. Wir holen Ihren Sperrmüll direkt bei Ihnen ab und entsorgen ihn fachgerecht - ohne dass Sie selbst zum Mistplatz fahren müssen.',
    metaDescription: 'Sperrmüllentsorgung Wien ✓ Schnelle Abholung ✓ Möbel, Matratzen, Elektrogeräte ✓ Fachgerecht entsorgt ✓ Alle Bezirke ☎ +43 660 200 5610',
    benefits: [
      'Abholung direkt bei Ihnen zu Hause',
      'Kein mühsamer Transport zum Mistplatz',
      'Fachgerechte Entsorgung und Recycling',
      'Entsorgung auch von Elektrogeräten (E-Waste)',
      'Flexible Terminvereinbarung - auch kurzfristig',
      'Transparente Preise nach Volumen',
    ],
    process: [
      {
        step: 1,
        title: 'Anfrage & Kostenschätzung',
        description: 'Beschreiben Sie uns Ihren Sperrmüll (Art und Menge). Wir erstellen eine erste Kostenschätzung.',
      },
      {
        step: 2,
        title: 'Terminvereinbarung',
        description: 'Wir vereinbaren einen Wunschtermin für die Abholung - oft schon am nächsten Tag möglich.',
      },
      {
        step: 3,
        title: 'Abholung',
        description: 'Unser Team holt den Sperrmüll bei Ihnen ab - Sie müssen nichts vorbereiten oder tragen.',
      },
      {
        step: 4,
        title: 'Fachgerechte Entsorgung',
        description: 'Wir entsorgen alles umweltgerecht über zertifizierte Entsorgungsbetriebe und Recyclinghöfe.',
      },
    ],
    pricing: {
      info: 'Die Kosten für Sperrmüllentsorgung berechnen wir nach Volumen und Art der Gegenstände. Elektrogeräte haben oft Sonderkonditionen.',
      factors: [
        'Volumen des Sperrmülls (Kubikmeter)',
        'Art der Gegenstände (Möbel, Elektro, Matratzen)',
        'Stockwerk und Zugänglichkeit',
        'Anzahl der benötigten Mitarbeiter',
        'Entsorgungsgebühren für Sondermüll',
      ],
    },
    faq: [
      {
        question: 'Was kostet die Sperrmüllentsorgung?',
        answer: 'Eine Couch oder ein Schrank kosten ab 80-120€ Entsorgung. Eine Matratze ab 40-60€. Komplette Wohnungseinrichtungen nach Volumen ab 300€. Elektrogeräte sind oft günstiger, da sie recycelt werden können. Fixpreis nach Beschreibung oder Foto.',
      },
      {
        question: 'Welchen Sperrmüll nehmen Sie mit?',
        answer: 'Wir entsorgen Möbel (Sofas, Schränke, Tische), Matratzen, Teppiche, Elektrogeräte (Kühlschränke, Waschmaschinen, TV), Fahrräder, Kinderwagen und vieles mehr. Nicht erlaubt sind Gefahrstoffe, Asbest und bestimmte Chemikalien.',
      },
      {
        question: 'Wie schnell können Sie abholen?',
        answer: 'Bei dringenden Fällen oft schon am selben oder nächsten Tag. In der Regel vereinbaren wir einen Termin innerhalb von 2-5 Werktagen. Express-Service gegen Aufpreis möglich.',
      },
      {
        question: 'Muss ich den Sperrmüll vor die Tür stellen?',
        answer: 'Nein, das ist nicht nötig! Wir holen den Sperrmüll direkt aus Ihrer Wohnung, Keller oder Garage ab - auch aus höheren Stockwerken ohne Lift. Sie müssen nichts vorbereiten.',
      },
    ],
    relatedServices: ['wohnungsentrümpelungen', 'möbelentsorgung', 'kellerentrümpelung'],
  },

  'umzugsservice': {
    name: 'Umzugsservice',
    slug: 'umzugsservice',
    shortDescription: 'Professioneller Umzug in Wien und Umgebung - von der Planung bis zum letzten Karton, stressfrei und zuverlässig.',
    description: 'Ein Umzug muss nicht stressig sein. Unser Umzugsservice übernimmt alle Aufgaben rund um Ihren Wohnungs- oder Büroumzug in Wien. Von der Planung über das Packen bis zum Aufbau in der neuen Wohnung - wir kümmern uns um alles.',
    metaDescription: 'Umzugsservice Wien ✓ Privatumzüge & Firmenumzüge ✓ Packmaterial inklusive ✓ Möbelmontage ✓ Versichert ✓ Alle Bezirke ☎ +43 660 200 5610',
    benefits: [
      'Komplettservice von Planung bis Möbelmontage',
      'Erfahrene Umzugshelfer und moderne Fahrzeuge',
      'Packmaterial (Kartons, Folie, Decken) inklusive',
      'Möbelabbau und -aufbau auf Wunsch',
      'Versicherungsschutz für Ihre Möbel',
      'Umzüge in ganz Wien und Umgebung',
    ],
    process: [
      {
        step: 1,
        title: 'Umzugsplanung',
        description: 'Wir besichtigen Ihre alte und neue Wohnung und planen den Umzug im Detail. Sie erhalten ein Festpreisangebot.',
      },
      {
        step: 2,
        title: 'Packen & Vorbereitung',
        description: 'Auf Wunsch packen wir Ihre Gegenstände professionell ein. Möbel werden abgebaut und transportfertig gemacht.',
      },
      {
        step: 3,
        title: 'Umzugstag',
        description: 'Unser Team transportiert alles sicher in Ihre neue Wohnung. Wir tragen vorsichtig über Treppen und schützen Türrahmen.',
      },
      {
        step: 4,
        title: 'Aufbau & Einrichtung',
        description: 'Möbel werden am gewünschten Platz aufgebaut. Kartons werden ausgepackt, wenn Sie das wünschen.',
      },
    ],
    pricing: {
      info: 'Umzugskosten hängen von Distanz, Wohnungsgröße und Umfang der Dienstleistungen ab. Wir erstellen transparente Festpreisangebote.',
      factors: [
        'Wohnungsgröße und Menge der Möbel',
        'Distanz zwischen alter und neuer Wohnung',
        'Stockwerk und Vorhandensein von Lift',
        'Zusatzleistungen (Packen, Möbelmontage)',
        'Umzugstermin (Wochenende teurer als werktags)',
      ],
    },
    faq: [
      {
        question: 'Was kostet ein Umzug in Wien?',
        answer: 'Eine 2-Zimmer-Wohnung innerhalb Wiens kostet ab 600-900€. Eine 4-Zimmer-Wohnung ab 1.200-1.800€. Mit Packen und Möbelmontage kalkulieren wir 30-40% Aufschlag. Festpreis nach Besichtigung.',
      },
      {
        question: 'Sind meine Möbel versichert?',
        answer: 'Ja, wir haben eine Transportversicherung die Schäden an Ihren Möbeln während des Umzugs abdeckt. Die Versicherungssumme ist im Angebot ausgewiesen.',
      },
      {
        question: 'Können Sie auch am Wochenende umziehen?',
        answer: 'Ja, wir ziehen auch samstags und sonntags um. Wochenendtermine sind beliebter und daher etwas teurer. Wir empfehlen Buchung 2-3 Wochen im Voraus.',
      },
      {
        question: 'Stelle Sie auch Packmaterial zur Verfügung?',
        answer: 'Ja, Umzugskartons, Packpapier, Luftpolsterfolie und Möbeldecken sind bei uns inklusive. Sie müssen nichts besorgen. Übrige Kartons nehmen wir nach dem Umzug wieder mit.',
      },
    ],
    relatedServices: ['wohnungsentrümpelungen', 'sperrmüllentsorgung', 'geschäftsentrümpelung'],
  },

  'garageentrümpelung': {
    name: 'Garageentrümpelung',
    slug: 'garageentrümpelung',
    shortDescription: 'Garagen professionell entrümpeln - von vollgestellten Einzelgaragen bis zu Tiefgaragen in Mehrparteienhäusern.',
    description: 'Ihre Garage ist über Jahre zum Abstellraum geworden? Wir entrümpeln Garagen, Carports und Stellplätze professionell. Egal ob Einzelgarage, Doppelgarage oder Tiefgaragenstellplatz - wir schaffen wieder Platz für Ihr Auto.',
    metaDescription: 'Garageentrümpelung Wien ✓ Einzelgaragen & Tiefgaragen ✓ Werkstattauflösung ✓ Altölentsorgung ✓ Schnell & günstig ☎ +43 660 200 5610',
    benefits: [
      'Entrümpelung von Einzel-, Doppel- und Tiefgaragen',
      'Entsorgung von Altöl, Reifen und Autoteilen',
      'Auch vollgestellte Werkstattgaragen kein Problem',
      'Fachgerechte Entsorgung von Gefahrstoffen',
      'Schnelle Abwicklung meist in 2-4 Stunden',
      'Endreinigung der Garage auf Wunsch',
    ],
    process: [
      {
        step: 1,
        title: 'Garagebesichtigung',
        description: 'Wir besichtigen Ihre Garage und prüfen Art und Menge der zu entsorgenden Gegenstände.',
      },
      {
        step: 2,
        title: 'Angebot & Terminplanung',
        description: 'Sie erhalten ein Festpreisangebot. Wir vereinbaren einen passenden Termin für die Entrümpelung.',
      },
      {
        step: 3,
        title: 'Komplette Räumung',
        description: 'Wir räumen Ihre Garage vollständig - von Autoreifen über Werkzeug bis zu alten Farbeimern.',
      },
      {
        step: 4,
        title: 'Entsorgung & Reinigung',
        description: 'Alles wird fachgerecht entsorgt. Auf Wunsch reinigen wir die Garage besenrein oder mit Hochdruckreiniger.',
      },
    ],
    pricing: {
      info: 'Garageentrümpelungen sind meist günstiger als gedacht. Die Kosten richten sich nach Volumen und Entsorgungsaufwand.',
      factors: [
        'Volumen der zu entsorgenden Gegenstände',
        'Art der Gegenstände (normale vs. Gefahrstoffe)',
        'Zugänglichkeit der Garage (ebenerdig vs. Tiefgarage)',
        'Entsorgung von Sondermüll (Öl, Farben, Batterien)',
        'Zusatzleistungen wie Garagen-Reinigung',
      ],
    },
    faq: [
      {
        question: 'Was kostet eine Garageentrümpelung?',
        answer: 'Eine normal gefüllte Einzelgarage (15-20m³) kostet 400-700€. Vollgestellte Doppelgaragen liegen bei 700-1.200€. Werkstattgaragen mit Altöl und Chemikalien können 1.000-1.800€ kosten. Festpreis nach Besichtigung.',
      },
      {
        question: 'Können Sie auch Altöl und Reifen entsorgen?',
        answer: 'Ja, wir entsorgen Altöl, alte Autoreifen, Batterien und andere KFZ-spezifische Abfälle fachgerecht über zertifizierte Entsorgungsbetriebe. Die Entsorgungsgebühren sind im Angebot transparent ausgewiesen.',
      },
      {
        question: 'Arbeiten Sie auch in Tiefgaragen?',
        answer: 'Ja, Tiefgaragen sind für uns Routine. Wir haben kompakte Transportwagen für niedrige Durchfahrtshöhen und arbeiten rücksichtsvoll, um keine Schäden an Wänden oder parkenden Autos zu verursachen.',
      },
      {
        question: 'Wie lange dauert eine Garageentrümpelung?',
        answer: 'Eine durchschnittliche Einzelgarage ist in 2-3 Stunden entrümpelt. Vollgestellte Werkstattgaragen benötigen 4-6 Stunden. Express-Service am selben Tag oft möglich.',
      },
    ],
    relatedServices: ['kellerentrümpelung', 'sperrmüllentsorgung', 'wohnungsentrümpelungen'],
  },

  'büroauflösung': {
    name: 'Büroauflösung',
    slug: 'büroauflösung',
    shortDescription: 'Professionelle Büroauflösung in Wien - diskret und effizient auch außerhalb der Geschäftszeiten.',
    description: 'Sie schließen Ihr Büro, verkleinern sich oder ziehen um? Unsere Büroauflösung übernimmt alles: von Schreibtischen und Serverschränken bis zu Aktenvernichtung. Diskret, schnell und zu fairen Konditionen.',
    metaDescription: 'Büroauflösung Wien ✓ Auch nachts & am Wochenende ✓ DSGVO-Aktenvernichtung ✓ IT-Entsorgung ✓ Diskret ✓ Alle Bezirke ☎ +43 660 200 5610',
    benefits: [
      'Flexible Arbeitszeiten auch nachts und am Wochenende',
      'Sichere DSGVO-konforme Aktenvernichtung',
      'IT-Entsorgung mit Datenlöschung',
      'Verwertung brauchbarer Büromöbel möglich',
      'Diskrete Abwicklung ohne Firmen-Logo',
      'Besenreine Übergabe der Büroräume',
    ],
    process: [
      {
        step: 1,
        title: 'Bürobesichtigung',
        description: 'Wir besichtigen Ihre Büroräume und erfassen alle zu entsorgenden Gegenstände und IT-Geräte.',
      },
      {
        step: 2,
        title: 'Detailplanung',
        description: 'Wir planen die Auflösung im Detail - Zeitpunkt, Aktenvernichtung, IT-Löschung, Verwertung.',
      },
      {
        step: 3,
        title: 'Auflösung',
        description: 'Wir lösen Ihr Büro zum vereinbarten Zeitpunkt auf - auch nachts oder am Wochenende möglich.',
      },
      {
        step: 4,
        title: 'Entsorgung & Dokumentation',
        description: 'Alles wird fachgerecht entsorgt. Sie erhalten Vernichtungsnachweise für Akten und Festplatten.',
      },
    ],
    pricing: {
      info: 'Büroauflösungen kalkulieren wir nach Raumgröße und Inventar. IT-Entsorgung und Aktenvernichtung werden separat ausgewiesen.',
      factors: [
        'Bürogröße in Quadratmetern',
        'Anzahl der Arbeitsplätze und Möbel',
        'Menge zu vernichtender Akten',
        'IT-Geräte und Datenlöschung',
        'Gewünschte Arbeitszeiten (Nacht/Wochenende)',
      ],
    },
    faq: [
      {
        question: 'Was kostet eine Büroauflösung?',
        answer: 'Ein kleines Büro (50m², 3-5 Arbeitsplätze) kostet ab 1.200-2.000€. Größere Büros (150m², 15-20 Arbeitsplätze) liegen bei 4.000-7.000€. DSGVO-Aktenvernichtung ab 200€ extra. Festpreis nach Besichtigung.',
      },
      {
        question: 'Können Sie Festplatten sicher löschen?',
        answer: 'Ja, wir arbeiten mit zertifizierten IT-Entsorgern zusammen, die Festplatten nach BSI-Standard löschen oder physisch vernichten. Sie erhalten Löschprotokolle für Ihre Buchhaltung und Compliance.',
      },
      {
        question: 'Arbeiten Sie auch nachts oder am Wochenende?',
        answer: 'Ja, für Büroauflösungen sind wir sehr flexibel. Freitag Nacht bis Montag Morgen ist eine beliebte Option, damit Ihr Geschäftsbetrieb nicht gestört wird. Nacht-/Wochenendarbeiten ohne Aufpreis.',
      },
      {
        question: 'Was passiert mit brauchbaren Büromöbeln?',
        answer: 'Hochwertige Büromöbel können wir über Gebrauchtmöbelhändler verwerten. Der Erlös wird auf Ihre Rechnung angerechnet. Alternativ spenden wir an soziale Einrichtungen auf Ihren Wunsch.',
      },
    ],
    relatedServices: ['geschäftsentrümpelung', 'wohnungsentrümpelungen', 'sperrmüllentsorgung'],
  },

  'verlassenschaftsentrümpelung': {
    name: 'Verlassenschaftsentrümpelung',
    slug: 'verlassenschaftsentrümpelung',
    shortDescription: 'Einfühlsame Entrümpelung nach Todesfall - diskret, respektvoll und mit Erfahrung in Verlassenschaftsabwicklung.',
    description: 'Nach einem Todesfall müssen Angehörige oft die Wohnung oder das Haus des Verstorbenen auflösen. Wir unterstützen Sie in dieser schwierigen Zeit mit unserer Verlassenschaftsentrümpelung - einfühlsam, diskret und professionell.',
    metaDescription: 'Verlassenschaftsentrümpelung Wien ✓ Nach Todesfall ✓ Einfühlsam & diskret ✓ Wertgegenstände-Sichtung ✓ Erfahren ☎ +43 660 200 5610',
    benefits: [
      'Einfühlsamer Umgang in Trauersituationen',
      'Erfahrung mit Verlassenschaftsabwicklung',
      'Sorgfältige Sichtung nach Wertgegenständen',
      'Zusammenarbeit mit Notaren und Gerichten',
      'Diskrete und respektvolle Arbeitsweise',
      'Dokumentation für Verlassenschaftsverfahren',
    ],
    process: [
      {
        step: 1,
        title: 'Einfühlsames Erstgespräch',
        description: 'Wir besprechen Ihre Situation und klären rechtliche Fragen. Termine werden sensibel vereinbart.',
      },
      {
        step: 2,
        title: 'Sichtung & Sortierung',
        description: 'Gemeinsam oder eigenständig sichten wir die Wohnung nach Wertgegenständen, Dokumenten und Erinnerungen.',
      },
      {
        step: 3,
        title: 'Entrümpelung',
        description: 'Nach Ihrer Freigabe entrümpeln wir die Wohnung respektvoll und dokumentieren alles für das Gericht.',
      },
      {
        step: 4,
        title: 'Übergabe',
        description: 'Die Wohnung wird besenrein übergeben. Sie erhalten alle gefundenen Wertgegenstände und Unterlagen.',
      },
    ],
    pricing: {
      info: 'Verlassenschaftsentrümpelungen kalkulieren wir besonders fair. Wertgegenstände können die Kosten reduzieren.',
      factors: [
        'Wohnungsgröße und Objektmenge',
        'Zeitaufwand für Sichtung und Sortierung',
        'Vorhandensein verwertbarer Gegenstände',
        'Koordination mit Notar/Gericht',
        'Besondere Wünsche der Erben',
      ],
    },
    faq: [
      {
        question: 'Wie läuft eine Verlassenschaftsentrümpelung ab?',
        answer: 'Wir besprechen zunächst alle Details mit Ihnen oder dem Notar. Dann sichten wir die Wohnung nach Wertgegenständen und wichtigen Dokumenten. Nach Ihrer Freigabe entrümpeln wir die Wohnung und übergeben sie besenrein.',
      },
      {
        question: 'Was passiert mit gefundenen Wertgegenständen?',
        answer: 'Alle Wertgegenstände, Schmuck, Bargeld und wichtigen Dokumente werden sorgfältig gesammelt und Ihnen übergeben. Wir erstellen eine Dokumentation für das Verlassenschaftsverfahren.',
      },
      {
        question: 'Können Sie direkt mit unserem Notar zusammenarbeiten?',
        answer: 'Ja, wir haben Erfahrung mit Notaren und Verlassenschaftsgerichten. Auf Wunsch koordinieren wir direkt mit Ihrem Notar und stellen alle erforderlichen Unterlagen bereit.',
      },
      {
        question: 'Wie schnell können Sie die Wohnung räumen?',
        answer: 'Wir verstehen, dass oft Zeitdruck besteht (Mietende, Verkauf). Nach der Sichtung können wir meist innerhalb von 3-5 Tagen entrümpeln. Express-Service bei Bedarf möglich.',
      },
    ],
    relatedServices: ['haushaltsauflösung', 'wohnungsentrümpelungen', 'dachbodenentrümpelung'],
  },

  'container-service': {
    name: 'Container-Service',
    slug: 'container-service',
    shortDescription: 'Container-Vermietung in Wien - verschiedene Größen für Bau, Renovierung und Entrümpelung.',
    description: 'Sie renovieren oder bauen und brauchen einen Container für Bauschutt, Holz oder Mischabfall? Wir liefern Container in verschiedenen Größen direkt zu Ihnen und holen sie nach Absprache wieder ab.',
    metaDescription: 'Container mieten Wien ✓ 3m³ bis 10m³ ✓ Bauschutt, Holz, Mischabfall ✓ Schnelle Lieferung ✓ Günstige Preise ☎ +43 660 200 5610',
    benefits: [
      'Container in verschiedenen Größen (3m³ - 10m³)',
      'Schnelle Lieferung meist innerhalb 24-48h',
      'Flexible Mietdauer - tage- oder wochenweise',
      'Fachgerechte Entsorgung inklusive',
      'Auch für Bauschutt, Holz, Grünschnitt geeignet',
      'Kostenlose Beratung zur richtigen Containergröße',
    ],
    process: [
      {
        step: 1,
        title: 'Beratung & Bestellung',
        description: 'Wir beraten Sie zur passenden Containergröße und erstellen ein Angebot. Bestellung per Telefon oder E-Mail.',
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
        answer: 'Für kleine Renovierungen (Bad, Küche) reicht meist 3-5m³. Bei Wohnungsentrümpelungen empfehlen wir 5-7m³. Für Hausabbruch oder große Baustellen 7-10m³. Wir beraten Sie gerne telefonisch.',
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
    relatedServices: ['sperrmüllentsorgung', 'garageentrümpelung', 'kellerentrümpelung'],
  },
};

export const getAllServices = (): ServiceInfo[] => {
  return Object.values(services);
};

export const getServiceBySlug = (slug: string): ServiceInfo | null => {
  return services[slug] || null;
};
