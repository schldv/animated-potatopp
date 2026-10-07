export interface ServiceStep {
  title: string;
  text: string;
}

export interface ServiceCase {
  title: string;
  text: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceHeroImage {
  /** Dateiname ohne Breiten-Suffix, liegt unter /images/leistungen/ */
  base: string;
  alt: string;
  /**
   * Bildausschnitt. Die Hero-Sections sind deutlich breiter als die Fotos
   * (4:3), object-cover schneidet also kräftig oben und unten weg. Ohne
   * passende Position fallen Gesichter und die eigentliche Handlung heraus.
   * Als Literal ausgeschrieben, damit Tailwind die Klasse beim Scannen findet.
   */
  objectPosition: string;
  /** Optional: schwächere Abdunklung für von Haus aus dunkle Fotos. */
  overlay?: 'standard' | 'leicht';
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  cardText: string;
  title: string;
  description: string;
  heroLine1: string;
  heroLine2: string;
  heroSub: string;
  introHeading: string;
  introParagraphs: string[];
  kpis: { value: string; label: string }[];
  casesHeading: string;
  cases: ServiceCase[];
  stepsHeading: string;
  steps: ServiceStep[];
  costText: string;
  faq: ServiceFaq[];
  heroImage: ServiceHeroImage;
}

export const SERVICES: Service[] = [
  {
    slug: 'tresoroeffnung',
    name: 'Tresoröffnung',
    shortName: 'Tresoröffnung',
    icon: '🔐',
    cardText:
      'Kombination vergessen, Schlüssel verloren oder Schloss defekt? Wir öffnen Tresore, Safes und Wertschutzschränke fachgerecht — möglichst zerstörungsfrei.',
    title: 'Tresoröffnung – Safe & Wertschutzschrank öffnen',
    description:
      'Tresoröffnung vom Fachbetrieb ✓ Zahlenkombination vergessen ✓ Schlüssel verloren ✓ Elektronikschloss defekt ✓ Möglichst zerstörungsfrei ✓ in ganz NRW.',
    heroLine1: 'Tresoröffnung',
    heroLine2: 'vom Fachbetrieb',
    heroSub:
      'Zahlenkombination vergessen, Schlüssel verloren oder Elektronik defekt? Wir öffnen Tresore, Safes und Wertschutzschränke — in den meisten Fällen ohne Zerstörung des Korpus.',
    introHeading: 'Was ist eine professionelle Tresoröffnung?',
    introParagraphs: [
      'Bei einer <strong>Tresoröffnung</strong> verschafft ein Fachbetrieb Ihnen wieder Zugang zu einem verschlossenen Tresor, Safe oder Wertschutzschrank — ohne dass Sie Code oder Schlüssel besitzen. Anders als beim gewaltsamen Aufbrechen bleibt das Wertbehältnis dabei so weit wie möglich intakt.',
      'Welche Methode zum Einsatz kommt, hängt vom Schlosstyp ab: Bei mechanischen Zahlenschlössern arbeiten wir mit <strong>Manipulation</strong>, bei Doppelbartschlössern mit Spezialwerkzeug, bei defekten Elektronikschlössern häufig über den Austausch des Schlosses oder eine gezielte Bohrung an einer definierten Stelle, die anschließend wieder fachgerecht verschlossen wird.',
      'Wir öffnen freistehende Möbeltresore, Wandtresore, Wertschutzschränke, Waffenschränke und Hotelsafes. Nach der Öffnung setzen wir das Schloss auf Wunsch instand oder tauschen es aus, damit der Tresor weiter nutzbar bleibt.',
    ],
    kpis: [
      { value: 'Alle Typen', label: 'Möbel-, Wand- & Standtresore' },
      { value: 'Schonend', label: 'So wenig Eingriff wie möglich' },
      { value: 'Preis vorab', label: 'Transparente Kosten' },
      { value: 'Nachweis', label: 'Berechtigungsprüfung' },
    ],
    casesHeading: 'Wann wir einen Tresor öffnen',
    cases: [
      {
        title: 'Zahlenkombination vergessen',
        text: 'Der Code funktioniert nicht mehr oder ist in Vergessenheit geraten — ein häufiger Fall, besonders bei selten genutzten Tresoren.',
      },
      {
        title: 'Schlüssel verloren oder abgebrochen',
        text: 'Bei Doppelbart- oder Zylinderschlössern öffnen wir den Tresor und ersetzen anschließend das Schloss samt neuer Schlüssel.',
      },
      {
        title: 'Elektronikschloss defekt',
        text: 'Leere Batterie, Displayfehler oder Elektronikausfall: Wir öffnen den Tresor und tauschen die Schlosseinheit gegen eine funktionsfähige aus.',
      },
      {
        title: 'Riegelwerk blockiert',
        text: 'Der Code wird angenommen, die Tür lässt sich aber nicht öffnen. Meist klemmt das Riegelwerk — das lässt sich in vielen Fällen gezielt lösen.',
      },
      {
        title: 'Erbfall & Haushaltsauflösung',
        text: 'Ein Tresor aus einem Nachlass ohne Code oder Schlüssel. Wir öffnen nach Vorlage der Berechtigung, etwa Erbschein oder Nachlassunterlagen.',
      },
      {
        title: 'Gewerbe & Hotellerie',
        text: 'Zimmersafes, Kassentresore und Wertschutzschränke in Betrieben öffnen wir nach Absprache — auch außerhalb der Geschäftszeiten.',
      },
    ],
    stepsHeading: 'So läuft eine Tresoröffnung ab',
    steps: [
      {
        title: 'Anruf & Einschätzung',
        text: 'Sie beschreiben uns Hersteller, Modell, Schlosstyp (Zahlenschloss, Schlüssel, Elektronik) und Sicherheitsstufe. Daraus ergibt sich der Aufwand — und der Preisrahmen, den wir Ihnen direkt am Telefon nennen.',
      },
      {
        title: 'Terminvereinbarung',
        text: 'Anders als bei der Türöffnung ist eine Tresoröffnung selten ein Sekundenfall. Wir vereinbaren einen Termin und bringen das passende Werkzeug für Ihr Modell mit.',
      },
      {
        title: 'Berechtigung prüfen',
        text: 'Vor Ort weisen Sie Ihre Berechtigung nach — Lichtbildausweis und ein Beleg, dass der Tresor Ihnen gehört: Kaufbeleg, Mietvertrag, Firmennachweis oder Erbschein.',
      },
      {
        title: 'Öffnung mit der schonendsten Methode',
        text: 'Wir beginnen immer mit der am wenigsten invasiven Technik. Erst wenn Manipulation nicht zum Ziel führt, kommt eine gezielte, exakt platzierte Bohrung infrage — und nur nach Ihrer ausdrücklichen Freigabe.',
      },
      {
        title: 'Instandsetzung & Rechnung',
        text: 'Auf Wunsch setzen wir das Schloss instand oder tauschen es aus, damit der Tresor weiter sicher nutzbar ist. Sie erhalten eine vollständige Rechnung mit Leistungsbeschreibung.',
      },
    ],
    costText:
      'Die Kosten einer Tresoröffnung hängen von Schlosstyp, Sicherheitsstufe, Hersteller und Aufwand ab — ein einfacher Möbeltresor ist deutlich schneller geöffnet als ein zertifizierter Wertschutzschrank. Nennen Sie uns Hersteller und Modell, und wir geben Ihnen vorab einen verbindlichen Preisrahmen.',
    faq: [
      {
        question: 'Wird mein Tresor bei der Öffnung beschädigt?',
        answer: 'Wir arbeiten grundsätzlich von der schonendsten zur invasiveren Methode. Viele Tresore lassen sich durch Manipulation völlig ohne Eingriff öffnen. Ist eine Bohrung nötig, erfolgt sie an einer exakt definierten Stelle und wird anschließend fachgerecht verschlossen — der Tresor bleibt in aller Regel weiter nutzbar. Wir sprechen jeden invasiven Schritt vorher mit Ihnen ab.',
      },
      {
        question: 'Welchen Nachweis brauche ich für eine Tresoröffnung?',
        answer: 'Sie benötigen einen gültigen Lichtbildausweis und einen Beleg dafür, dass Sie über den Tresor verfügen dürfen: Kaufbeleg, Mietvertrag der Räumlichkeiten, Gewerbenachweis oder im Erbfall Erbschein beziehungsweise Testamentseröffnungsprotokoll. Ohne Berechtigungsnachweis öffnen wir keinen Tresor.',
      },
      {
        question: 'Kann der Tresor nach der Öffnung weiter genutzt werden?',
        answer: 'In den meisten Fällen ja. Nach der Öffnung setzen wir das Schloss instand oder ersetzen es durch ein neues. Bei zertifizierten Wertschutzschränken kann eine Reparatur allerdings die Zertifizierung berühren — darauf weisen wir Sie vor der Arbeit hin.',
      },
      {
        question: 'Wie lange dauert eine Tresoröffnung?',
        answer: 'Das hängt stark vom Modell ab. Einfache Möbel- und Hotelsafes sind oft in 15 bis 45 Minuten offen, hochwertige Wertschutzschränke können mehrere Stunden in Anspruch nehmen. Nach Ihrer Modellangabe am Telefon können wir den Zeitrahmen meist gut eingrenzen.',
      },
      {
        question: 'Öffnen Sie Tresore auch im Notdienst?',
        answer: 'Grundsätzlich ja — in dringenden Fällen, etwa wenn Medikamente, Ausweisdokumente oder Geschäftsunterlagen im Tresor liegen. Rufen Sie uns an, dann klären wir direkt, wie schnell ein Techniker mit dem passenden Werkzeug bei Ihnen sein kann.',
      },
      {
        question: 'Können Sie den Tresorcode wiederherstellen?',
        answer: 'Bei mechanischen Zahlenschlössern lässt sich die Kombination bei der Öffnung häufig ermitteln. Bei Elektronikschlössern ist der Code nicht auslesbar — hier wird das Schloss ersetzt und Sie vergeben anschließend einen neuen Code.',
      },
    ],
    heroImage: {
      base: 'schluesseldienst-schmidt-tresoroeffnung',
      alt: 'Techniker von Schlüsseldienst Schmidt öffnet einen Tresor in einem Büro',
      objectPosition: 'object-[62%_40%]',
      overlay: 'leicht',
    },
  },
  {
    slug: 'schlossaustausch',
    name: 'Schlossaustausch & Schlossservice',
    shortName: 'Schlossaustausch',
    icon: '🔒',
    cardText:
      'Defektes Schloss, Umzug oder abgebrochener Schlüssel? Wir tauschen Schlösser fachgerecht aus und entfernen Fremdkörper schonend.',
    title: 'Schlossaustausch – Zylinder wechseln vom Fachbetrieb',
    description:
      'Zylinder wechseln nach Umzug oder Schlüsselverlust ✓ Abgebrochene Schlüssel entfernen ✓ Passgenau vermessen ✓ in ganz NRW.',
    heroLine1: 'Schlossaustausch',
    heroLine2: '& Schlossservice',
    heroSub:
      'Schlüssel verloren, Schloss schwergängig oder Zylinder defekt? Wir wechseln Ihr Schloss fachgerecht — passgenau vermessen und mit dem richtigen Sicherheitsniveau.',
    introHeading: 'Wann ist ein Schlossaustausch sinnvoll?',
    introParagraphs: [
      'Beim <strong>Schlossaustausch</strong> wird der Schließzylinder Ihrer Tür gegen einen neuen ersetzt. Das ist immer dann nötig, wenn nicht mehr sicher ist, wer Zugang zu Ihrer Wohnung hat — etwa nach einem Schlüsselverlust, einem Einbruchversuch, einer Trennung oder einem Mieterwechsel.',
      'Ebenso häufig ist der technische Grund: Ein Zylinder ist über die Jahre schwergängig geworden, der Schlüssel klemmt, dreht durch oder bricht ab. Ein abgenutztes Schloss ist nicht nur lästig, sondern auch ein Sicherheitsrisiko — es lässt sich leichter überwinden als ein intaktes.',
      'Wir vermessen Ihren Zylinder <strong>passgenau</strong>. Ein Zylinder, der zu weit übersteht, ist ein Einfallstor für Abbrechversuche. Auf Wunsch bauen wir gleich einen Sicherheitszylinder mit Aufbohr-, Zieh- und Kernziehschutz ein.',
    ],
    kpis: [
      { value: 'Passgenau', label: 'Zylinder wird vermessen' },
      { value: 'Alle Marken', label: 'Gängige Hersteller vorrätig' },
      { value: 'Gleichschließend', label: 'Auf Wunsch mehrere Türen' },
      { value: 'Preis vorab', label: 'Transparente Kosten' },
    ],
    casesHeading: 'Typische Anlässe für einen Schlossaustausch',
    cases: [
      {
        title: 'Schlüssel verloren oder gestohlen',
        text: 'Solange der Schlüssel im Umlauf ist, ist Ihre Wohnung nicht sicher. Ein neuer Zylinder macht den alten Schlüssel wertlos.',
      },
      {
        title: 'Umzug oder Mieterwechsel',
        text: 'Sie wissen nie, wie viele Schlüssel im Lauf der Jahre nachgemacht wurden. Beim Einzug ist der Zylindertausch die einfachste Sicherheitsmaßnahme.',
      },
      {
        title: 'Schlüssel abgebrochen',
        text: 'Wir entfernen den abgebrochenen Bart aus dem Zylinder. Ist der Zylinder dabei beschädigt worden, ersetzen wir ihn direkt mit.',
      },
      {
        title: 'Schloss schwergängig oder defekt',
        text: 'Der Schlüssel lässt sich nur mit Kraft drehen oder klemmt? Oft hilft schon eine Wartung — andernfalls tauschen wir den Zylinder aus.',
      },
      {
        title: 'Nach Einbruch oder Aufbruchversuch',
        text: 'Ein manipuliertes Schloss gehört ersetzt, auch wenn es noch funktioniert. Wir prüfen zugleich, ob die Tür weitere Schäden hat.',
      },
      {
        title: 'Trennung oder Personalwechsel',
        text: 'Wenn eine Person keinen Zugang mehr haben soll, ist der Zylindertausch der rechtlich saubere und sofort wirksame Weg.',
      },
    ],
    stepsHeading: 'So läuft ein Schlossaustausch ab',
    steps: [
      {
        title: 'Anruf & Beratung',
        text: 'Sie schildern uns Türtyp und Anlass. Wir klären, ob ein Standardzylinder genügt oder ein Sicherheitszylinder sinnvoll ist — und nennen Ihnen den Preis vorab.',
      },
      {
        title: 'Termin oder Soforteinsatz',
        text: 'Bei Schlüsselverlust oder nach einem Einbruchversuch kommen wir sofort. Planbare Wechsel legen wir auf einen Termin, der Ihnen passt.',
      },
      {
        title: 'Zylinder vermessen',
        text: 'Wir messen die Länge beidseitig des Beschlags. Nur ein bündig sitzender Zylinder bietet echten Schutz — zu lange Zylinder lassen sich abbrechen.',
      },
      {
        title: 'Austausch in wenigen Minuten',
        text: 'Stulpschraube lösen, alten Zylinder ziehen, neuen einsetzen, Funktion prüfen. Der eigentliche Wechsel dauert bei einer Standardtür meist unter 15 Minuten.',
      },
      {
        title: 'Übergabe der neuen Schlüssel',
        text: 'Sie erhalten den kompletten Schlüsselsatz und die Sicherungskarte für Nachbestellungen — plus eine vollständige Rechnung.',
      },
    ],
    costText:
      'Die Kosten setzen sich aus Arbeitszeit und Zylinder zusammen. Ein Standardzylinder ist deutlich günstiger als ein zertifizierter Sicherheitszylinder mit Kopierschutz. Wir nennen Ihnen beide Varianten mit Preis, bevor wir loslegen — die Entscheidung treffen Sie.',
    faq: [
      {
        question: 'Wie lange dauert ein Schlossaustausch?',
        answer: 'Der reine Zylinderwechsel an einer Standardtür dauert meist unter 15 Minuten. Kommt ein Sicherheitsbeschlag oder ein Zusatzschloss dazu, sollten Sie etwa eine Stunde einplanen.',
      },
      {
        question: 'Muss ich das ganze Schloss tauschen oder reicht der Zylinder?',
        answer: 'In den allermeisten Fällen genügt der Schließzylinder — er ist das Teil, das zum Schlüssel passt. Das Einsteckschloss im Türblatt muss nur ersetzt werden, wenn Falle oder Riegel selbst defekt sind.',
      },
      {
        question: 'Kann ich mehrere Türen mit demselben Schlüssel schließen?',
        answer: 'Ja. Gleichschließende Zylinder sorgen dafür, dass Haustür, Wohnungstür und Keller mit einem einzigen Schlüssel funktionieren. Das lässt sich beim Austausch direkt mitbestellen.',
      },
      {
        question: 'Darf ich als Mieter das Schloss tauschen lassen?',
        answer: 'Ja, den Zylinder Ihrer Wohnungstür dürfen Sie in der Regel austauschen lassen. Bewahren Sie den alten Zylinder auf und setzen Sie ihn beim Auszug wieder ein. Bei Haustüren und Schließanlagen sprechen Sie den Wechsel vorher mit Vermieter oder Verwaltung ab.',
      },
      {
        question: 'Was kostet ein Schlossaustausch?',
        answer: 'Das hängt vom gewählten Zylinder und vom Aufwand ab. Wir nennen Ihnen den Gesamtpreis inklusive Material immer vor Beginn der Arbeit — ohne Nachforderungen.',
      },
      {
        question: 'Können Sie einen abgebrochenen Schlüssel entfernen?',
        answer: 'Ja. Mit Spezialwerkzeug ziehen wir abgebrochene Schlüsselteile aus dem Zylinder. Häufig bleibt der Zylinder dabei intakt und kann weiter genutzt werden.',
      },
    ],
    heroImage: {
      base: 'schluesseldienst-schmidt-schlossaustausch-zylinder',
      alt: 'Techniker von Schlüsseldienst Schmidt tauscht den Schließzylinder einer Haustür',
      objectPosition: 'object-[40%_20%]',
    },
  },
  {
    slug: 'einbruchschutz',
    name: 'Einbruchschutz',
    shortName: 'Einbruchschutz',
    icon: '🛡️',
    cardText:
      'Nach einem Einbruch oder zur Vorsorge: Wir beraten zu Sicherheitslösungen und installieren hochwertige Sicherheitszylinder und Zusatzschlösser.',
    title: 'Einbruchschutz – Beratung & Nachrüstung vom Fachbetrieb',
    description:
      'Einbruchschutz vom Fachbetrieb ✓ Sicherheitszylinder & Schutzbeschläge ✓ Zusatzschlösser ✓ Fenstersicherung ✓ in ganz NRW.',
    heroLine1: 'Einbruchschutz',
    heroLine2: 'zum Nachrüsten',
    heroSub:
      'Die meisten Einbrüche scheitern an mechanischem Widerstand. Wir prüfen Ihre Schwachstellen und rüsten Türen und Fenster gezielt nach.',
    introHeading: 'Warum mechanischer Einbruchschutz zuerst kommt',
    introParagraphs: [
      'Ein großer Teil aller Einbruchversuche wird abgebrochen, wenn der Täter nicht schnell genug hineinkommt. Genau hier setzt <strong>mechanischer Einbruchschutz</strong> an: Er kostet Zeit, macht Lärm und erhöht das Entdeckungsrisiko. Eine Alarmanlage meldet den Einbruch — gute Mechanik verhindert ihn.',
      'Die typischen Schwachstellen sind schnell benannt: ein überstehender Standardzylinder ohne Ziehschutz, ein Beschlag ohne Kernziehschutz, eine Tür mit einfacher Schlossfalle ohne Zusatzverriegelung und Fenster mit Rollzapfen statt Pilzkopfverriegelung.',
      'Wir schauen uns Ihre Situation vor Ort an und schlagen genau die Maßnahmen vor, die bei <em>Ihrer</em> Tür etwas bringen — statt pauschal alles zu verkaufen. Als Orientierung dienen die Empfehlungen der polizeilichen Beratungsstellen und die Widerstandsklassen nach DIN EN 1627 (RC 2 und aufwärts).',
    ],
    kpis: [
      { value: 'Vor Ort', label: 'Schwachstellenanalyse' },
      { value: 'RC 2+', label: 'Widerstandsklassen nach DIN' },
      { value: 'Nachrüstbar', label: 'Ohne neue Tür' },
      { value: 'Förderfähig', label: 'KfW-Zuschuss möglich' },
    ],
    casesHeading: 'Womit wir Ihre Türen und Fenster sichern',
    cases: [
      {
        title: 'Sicherheitszylinder',
        text: 'Zylinder mit Aufbohr-, Zieh- und Kernziehschutz sowie kopiergeschütztem Schlüssel. Die Basismaßnahme an jeder Eingangstür.',
      },
      {
        title: 'Schutzbeschläge',
        text: 'Ein Beschlag mit Zylinderabdeckung verhindert, dass der Zylinder überhaupt greifbar wird — das stoppt Abbrech- und Ziehversuche.',
      },
      {
        title: 'Zusatzschlösser & Querriegel',
        text: 'Kastenschlösser und Querriegelschlösser verteilen die Kraft auf die ganze Türbreite und sichern auch die Bandseite.',
      },
      {
        title: 'Bandseitensicherung',
        text: 'Hintergreifhaken oder Bandsicherungen sorgen dafür, dass die Tür auch bei ausgehebelten Scharnieren im Rahmen bleibt.',
      },
      {
        title: 'Fenstersicherung',
        text: 'Pilzkopfverriegelungen, abschließbare Griffe und Aufschraubsicherungen — Fenster und Terrassentüren sind der häufigste Einstiegsweg.',
      },
      {
        title: 'Kellertüren & Nebeneingänge',
        text: 'Die am schlechtesten gesicherte Tür bestimmt das Schutzniveau. Nebeneingänge werden fast immer vergessen.',
      },
    ],
    stepsHeading: 'So gehen wir vor',
    steps: [
      {
        title: 'Anruf & Terminvereinbarung',
        text: 'Sie schildern uns kurz das Objekt: Wohnung oder Haus, Türtyp, Baujahr, vorhandene Sicherung. Danach vereinbaren wir einen Beratungstermin.',
      },
      {
        title: 'Schwachstellenanalyse vor Ort',
        text: 'Wir prüfen Türen, Zylinder, Beschläge, Bandseiten und erreichbare Fenster und zeigen Ihnen konkret, wo ein Täter zuerst ansetzen würde.',
      },
      {
        title: 'Empfehlung mit Prioritäten',
        text: 'Sie erhalten einen nach Wirkung sortierten Vorschlag — was zuerst gemacht werden sollte, was später Sinn ergibt, und was Sie sich sparen können.',
      },
      {
        title: 'Angebot mit Festpreis',
        text: 'Material und Montage werden vorab beziffert. Sie entscheiden in Ruhe, welche Maßnahmen umgesetzt werden.',
      },
      {
        title: 'Montage & Funktionsprüfung',
        text: 'Wir montieren fachgerecht, prüfen jede Verriegelung im eingebauten Zustand und weisen Sie in die Bedienung ein.',
      },
    ],
    costText:
      'Einbruchschutz ist keine Alles-oder-nichts-Entscheidung. Oft bringt schon der Tausch von Zylinder und Beschlag den größten Sicherheitsgewinn zum kleinsten Preis. Für umfangreichere Nachrüstungen an selbst genutztem Wohnraum gibt es zudem Förderprogramme der KfW — wir sagen Ihnen, welche Maßnahmen dafür infrage kommen.',
    faq: [
      {
        question: 'Was bringt Einbruchschutz überhaupt?',
        answer: 'Ein erheblicher Teil aller Einbruchversuche wird abgebrochen, weil der Täter nicht schnell genug hineinkommt. Mechanische Sicherungen zielen genau darauf: mehr Zeitaufwand, mehr Lärm, höheres Entdeckungsrisiko. Deshalb empfehlen auch die polizeilichen Beratungsstellen zuerst Mechanik, dann Elektronik.',
      },
      {
        question: 'Muss ich für Einbruchschutz eine neue Tür einbauen?',
        answer: 'In den meisten Fällen nicht. Sicherheitszylinder, Schutzbeschlag, Zusatzschloss und Bandsicherung lassen sich an einer stabilen vorhandenen Tür nachrüsten. Nur bei sehr leichten oder beschädigten Türblättern ist ein Austausch die sinnvollere Investition.',
      },
      {
        question: 'Helfen Sie auch direkt nach einem Einbruch?',
        answer: 'Ja. Nach einem Einbruch sichern wir die beschädigte Tür kurzfristig, sodass die Wohnung wieder verschließbar ist, und ersetzen anschließend Schloss und Beschlag. Für die Versicherung dokumentieren wir die Schäden und die ausgeführten Arbeiten auf der Rechnung.',
      },
      {
        question: 'Was bedeutet RC 2?',
        answer: 'RC steht für Resistance Class — die Widerstandsklasse nach DIN EN 1627. RC 2 bedeutet, dass die Tür einem Gelegenheitstäter mit einfachem Werkzeug für eine definierte Zeit standhält. Für Wohnungen und Einfamilienhäuser gilt RC 2 als sinnvolles Mindestniveau.',
      },
      {
        question: 'Gibt es Fördermittel für Einbruchschutz?',
        answer: 'Für selbst genutzten Wohnraum fördert die KfW Maßnahmen zum Einbruchschutz. Die Bedingungen ändern sich gelegentlich — wir sagen Ihnen bei der Beratung, welche der geplanten Maßnahmen aktuell förderfähig sind, und stellen die Rechnung entsprechend aus.',
      },
      {
        question: 'Sichern Sie auch Fenster und Terrassentüren?',
        answer: 'Ja. Fenster und Terrassentüren im Erdgeschoss sind der häufigste Einstiegsweg. Wir rüsten Pilzkopfverriegelungen, abschließbare Fenstergriffe und Aufschraubsicherungen nach.',
      },
    ],
    heroImage: {
      base: 'schluesseldienst-schmidt-einbruchschutz-beratung',
      alt: 'Beratung zum Einbruchschutz an einer Tür mit Mehrfachverriegelung',
      objectPosition: 'object-[40%_15%]',
    },
  },
  {
    slug: 'schliessanlagen',
    name: 'Schließanlagen',
    shortName: 'Schließanlagen',
    icon: '🏢',
    cardText:
      'Für Mehrfamilienhäuser, Unternehmen und Hausverwaltungen: Wir planen, installieren und warten professionelle Schließanlagen.',
    title: 'Schließanlagen – Planung, Montage & Erweiterung',
    description:
      'Schließanlagen vom Fachbetrieb ✓ Planung & Schließplan ✓ Zentralschließanlage & Generalhauptschlüssel ✓ Erweiterung und Nachschlüssel ✓ in ganz NRW.',
    heroLine1: 'Schließanlagen',
    heroLine2: 'für Objekte & Betriebe',
    heroSub:
      'Ein Schlüssel für die Haustür, einer für alles: Wir planen, montieren und erweitern Schließanlagen für Mehrfamilienhäuser, Gewerbe und Verwaltungen.',
    introHeading: 'Was ist eine Schließanlage?',
    introParagraphs: [
      'Eine <strong>Schließanlage</strong> ist ein System aus aufeinander abgestimmten Zylindern und Schlüsseln. Statt eines Schlüsselbunds pro Person legt ein <em>Schließplan</em> fest, wer welche Tür öffnen darf — vom Mieter mit Wohnungs- und Haustürschlüssel bis zum Hausmeister mit Generalhauptschlüssel.',
      'Gängig sind drei Bauformen: die <strong>Zentralschlossanlage</strong> (jeder öffnet seine eigene Tür plus gemeinsame Türen wie Haustür und Müllraum), die <strong>Hauptschlüsselanlage</strong> (zusätzlich ein übergeordneter Schlüssel für Verwaltung oder Hausmeister) und die <strong>Generalhauptschlüsselanlage</strong> für größere Objekte mit mehreren Hierarchieebenen.',
      'Entscheidend ist die Planung: Ein sauber aufgesetzter Schließplan lässt sich jahrelang erweitern, ein schlecht geplanter zwingt Sie beim ersten Umbau zum Neuanfang. Deshalb beginnen wir immer mit der Struktur — nicht mit dem Material.',
    ],
    kpis: [
      { value: 'Schließplan', label: 'Individuell erstellt' },
      { value: 'Erweiterbar', label: 'Auch nach Jahren' },
      { value: 'Kopierschutz', label: 'Sicherungskarte & Patent' },
      { value: 'Wartung', label: 'Service für Bestandsanlagen' },
    ],
    casesHeading: 'Für wen sich eine Schließanlage lohnt',
    cases: [
      {
        title: 'Mehrfamilienhäuser',
        text: 'Haustür, Keller, Müllraum, Waschküche und Wohnung — mit einem Schlüssel pro Partei statt fünf.',
      },
      {
        title: 'Hausverwaltungen',
        text: 'Verwalter und Hausmeister erhalten einen übergeordneten Schlüssel, ohne dass Mieter Zugang zu fremden Wohnungen bekommen.',
      },
      {
        title: 'Büros & Gewerbe',
        text: 'Abgestufte Rechte für Mitarbeiter, Teamleitung und Reinigungskräfte — Serverraum und Archiv bleiben geschlossen.',
      },
      {
        title: 'Praxen & Kanzleien',
        text: 'Sensible Bereiche wie Akten- und Medikamentenräume lassen sich sauber vom allgemeinen Zugang trennen.',
      },
      {
        title: 'Handwerk & Lager',
        text: 'Werkstatt, Lager, Fuhrpark und Büro in einer Anlage — inklusive Vorhangschlösser im selben Schließsystem.',
      },
      {
        title: 'Bestandsanlagen erweitern',
        text: 'Neue Mietpartei, umgebauter Raum oder verlorener Hauptschlüssel: Wir erweitern und sanieren bestehende Anlagen.',
      },
    ],
    stepsHeading: 'Von der Planung bis zur Übergabe',
    steps: [
      {
        title: 'Anruf & Objektaufnahme',
        text: 'Sie nennen uns Objektart, Anzahl der Türen und Nutzergruppen. Bei bestehenden Anlagen genügt oft die Sicherungskarte, um das System zu identifizieren.',
      },
      {
        title: 'Schließplan erstellen',
        text: 'Wir erarbeiten eine Matrix: Welcher Schlüssel öffnet welche Tür? Dabei planen wir Reserven für spätere Erweiterungen mit ein.',
      },
      {
        title: 'Angebot & Freigabe',
        text: 'Sie erhalten ein Angebot mit Zylindern, Schlüsselanzahl und Montage. Erst nach Ihrer schriftlichen Freigabe des Schließplans wird gefertigt.',
      },
      {
        title: 'Montage & Schlüsselübergabe',
        text: 'Wir tauschen die Zylinder objektweise aus, prüfen jede Tür und übergeben die Schlüssel dokumentiert — mit Quittung pro Empfänger.',
      },
      {
        title: 'Wartung & Nachbestellung',
        text: 'Über die Sicherungskarte bestellen Sie jederzeit Nachschlüssel. Auf Wunsch warten wir die Anlage regelmäßig und tauschen abgenutzte Zylinder.',
      },
    ],
    costText:
      'Der Preis einer Schließanlage richtet sich nach Anzahl der Zylinder und Schlüssel, nach dem gewählten Schließsystem und nach der Komplexität des Schließplans. Nennen Sie uns die Zahl der Türen und Nutzer — dann erhalten Sie ein belastbares Angebot, bevor irgendetwas gefertigt wird.',
    faq: [
      {
        question: 'Was kostet eine Schließanlage?',
        answer: 'Das hängt von der Anzahl der Türen und Schlüssel sowie vom Schließsystem ab. Eine kleine Zentralschlossanlage für ein Mehrfamilienhaus liegt deutlich unter einer mehrstufigen Generalhauptschlüsselanlage für ein Gewerbeobjekt. Sie erhalten vor der Fertigung ein verbindliches Angebot.',
      },
      {
        question: 'Kann eine bestehende Schließanlage erweitert werden?',
        answer: 'In der Regel ja, solange das Schließsystem noch lieferbar ist und die Sicherungskarte vorliegt. Damit lassen sich passende Zylinder und Schlüssel nachbestellen. Ist das System abgekündigt, planen wir den schrittweisen Umstieg.',
      },
      {
        question: 'Was passiert, wenn ein Hauptschlüssel verloren geht?',
        answer: 'Das ist der kritische Fall: Ein verlorener Hauptschlüssel gefährdet alle Türen, die er öffnet. Betroffene Zylinder sollten getauscht werden. Wie groß der Umfang ist, hängt vom Schließplan ab — ein gut geplantes System begrenzt den Schaden auf einen Teilbereich.',
      },
      {
        question: 'Wie lange dauert die Lieferung?',
        answer: 'Schließanlagen werden individuell nach Ihrem Schließplan gefertigt. Je nach Hersteller und Umfang sollten Sie mit einigen Werktagen bis wenigen Wochen rechnen. Den konkreten Termin nennen wir mit dem Angebot.',
      },
      {
        question: 'Sind die Schlüssel gegen Nachmachen geschützt?',
        answer: 'Bei den von uns eingesetzten Systemen ja. Nachschlüssel gibt es nur gegen Vorlage der Sicherungskarte, und patentgeschützte Profile lassen sich nicht im freien Handel kopieren. Wer die Karte erhält, sollten Sie bewusst festlegen.',
      },
      {
        question: 'Betreuen Sie auch Anlagen, die Sie nicht selbst eingebaut haben?',
        answer: 'Ja. Wir warten, erweitern und sanieren auch Bestandsanlagen anderer Anbieter — sofern sich das verbaute System identifizieren lässt. Halten Sie dafür die Sicherungskarte bereit.',
      },
    ],
    heroImage: {
      base: 'schluesseldienst-schmidt-schliessanlage-schliessplan',
      alt: 'Planung einer Schließanlage mit Schließplan und Zylindern',
      objectPosition: 'object-[50%_22%]',
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find(s => s.slug === slug);
}

/**
 * Türöffnung als Datensatz.
 *
 * Die generische Seite /leistungen/tueroeffnung ist eine eigenständige Datei mit
 * zusätzlichen Elementen (HowTo-Schema, Vergleichstabelle seriös/unseriös) und
 * bleibt davon unberührt. Dieser Eintrag versorgt ausschließlich die
 * stadtspezifischen Unterseiten /[stadt]/tueroeffnung und ist deshalb bewusst
 * NICHT Teil von SERVICES — sonst würde /leistungen/[service] die bestehende
 * Datei doppelt erzeugen.
 */
export const TUEROEFFNUNG: Service = {
  slug: 'tueroeffnung',
  name: 'Türöffnung',
  shortName: 'Türöffnung',
  icon: '🚪',
  cardText:
    'Ausgesperrt? Unsere ausgebildeten Schlosser öffnen Wohnungstüren, Haustüren und Bürotüren zerstörungsfrei.',
  title: 'Türöffnung – zerstörungsfrei vom Fachbetrieb',
  description:
    'Türöffnung bei Aussperrung ✓ Zerstörungsfrei in 2–10 Minuten ✓ Preisauskunft vor dem Einsatz ✓ 24h erreichbar.',
  heroLine1: 'Türöffnung',
  heroLine2: '24h Notdienst',
  heroSub:
    'Tür zugefallen, Schlüssel verloren oder abgebrochen? Wir öffnen zerstörungsfrei — Tür und Schloss bleiben intakt.',
  introHeading: 'Was ist eine professionelle Türöffnung?',
  introParagraphs: [
    'Bei einer <strong>Türöffnung</strong> verschafft ein Fachbetrieb Ihnen wieder Zugang zu Wohnung, Haus oder Büro — ohne Tür oder Schloss zu beschädigen. Die professionelle Methode ist das <strong>Picking</strong>: Mit Spezialwerkzeug werden die Schließpins im Zylinder einzeln angehoben, bis sich das Schloss öffnet, genau wie mit dem richtigen Schlüssel.',
    'Erfahrene Techniker öffnen einen Standard-Profilzylinder so in 2 bis 5 Minuten. In über 95 % aller Einsätze gelingt die Öffnung zerstörungsfrei — anders als beim Aufbohren entstehen keine Folgekosten für Schloss oder Türblatt.',
    'Wir öffnen Wohnungstüren, Haustüren, Bürotüren, Kellertüren und Zimmertüren. Vor jeder Öffnung prüfen wir Ihre Berechtigung anhand eines Lichtbildausweises — das schützt Sie ebenso wie uns.',
  ],
  kpis: [
    { value: '2–10 Min.', label: 'Öffnungsdauer' },
    { value: '> 95 %', label: 'Zerstörungsfrei' },
    { value: 'Preis vorab', label: 'Transparente Kosten' },
    { value: '24 / 7', label: '365 Tage erreichbar' },
  ],
  casesHeading: 'Wann wir eine Tür öffnen',
  cases: [
    { title: 'Tür zugefallen', text: 'Der Klassiker: Die Tür fällt ins Schloss, der Schlüssel liegt innen. Meist die schnellste Öffnung überhaupt.' },
    { title: 'Schlüssel verloren', text: 'Wir öffnen die Tür und beraten Sie anschließend, ob ein Zylindertausch sinnvoll ist — solange der Schlüssel im Umlauf ist, ist die Wohnung nicht sicher.' },
    { title: 'Schlüssel abgebrochen', text: 'Das Bruchstück steckt im Zylinder. Wir ziehen es mit Spezialwerkzeug heraus und prüfen, ob der Zylinder weiter nutzbar ist.' },
    { title: 'Schlüssel steckt innen', text: 'Steckt der Schlüssel von innen im Schloss, ist eine Öffnung von außen anspruchsvoller — mit dem passenden Werkzeug aber in aller Regel möglich.' },
    { title: 'Schloss defekt oder blockiert', text: 'Der Schlüssel dreht durch oder klemmt. Wir öffnen die Tür und setzen den Zylinder instand oder tauschen ihn aus.' },
    { title: 'Bürotür & Gewerbe', text: 'Auch außerhalb der Geschäftszeiten. Für die Berechtigungsprüfung genügt in der Regel ein Gewerbenachweis.' },
  ],
  stepsHeading: 'So läuft eine Türöffnung ab',
  steps: [
    { title: 'Anruf & Preisauskunft', text: 'Sie schildern uns Türtyp und Schloss. Wir nennen Ihnen den Preis, bevor ein Techniker losfährt.' },
    { title: 'Anfahrt', text: 'Der nächstgelegene Techniker fährt sofort los. Beim Anruf sagen wir Ihnen, wann er bei Ihnen sein kann.' },
    { title: 'Identitätsprüfung', text: 'Vor Ort weisen Sie sich mit Personalausweis oder Reisepass aus und bestätigen, dass Sie zur Öffnung berechtigt sind.' },
    { title: 'Zerstörungsfreie Öffnung', text: 'Mit Picking-Set und Spezialwerkzeug öffnen wir das Schloss in der Regel in 2 bis 10 Minuten, ohne Beschädigung.' },
    { title: 'Bezahlung & Rechnung', text: 'Sie zahlen den vorher genannten Preis bar oder mit EC-Karte und erhalten eine vollständige Rechnung.' },
  ],
  costText:
    'Die Kosten hängen von Türtyp, Schloss, Zeitpunkt und Aufwand ab. Den genauen Preis nennen wir Ihnen immer vor Beginn der Arbeiten — keine versteckten Kosten, keine Nachforderungen.',
  faq: [
    { question: 'Kann eine zugefallene Tür beschädigungsfrei geöffnet werden?', answer: 'In den meisten Fällen ja. Mit Picking-Set und Spannwerkzeug öffnen wir das Schloss, ohne es zu beschädigen — Tür und Zylinder bleiben intakt. In über 95 % aller Einsätze ist diese Methode erfolgreich.' },
    { question: 'Wie lange dauert eine Türöffnung?', answer: 'Die eigentliche Öffnung dauert in der Regel 2 bis 10 Minuten, bei einfachen Profilzylindern oft weniger als 5 Minuten. Bei Hochsicherheitsschlössern kann es länger dauern — darauf weisen wir Sie vorab hin.' },
    { question: 'Muss ich nachweisen, dass ich die Tür öffnen darf?', answer: 'Ja. Wir öffnen Türen ausschließlich für berechtigte Personen. Halten Sie einen Lichtbildausweis bereit. Liegt der Ausweis in der Wohnung, kann die Prüfung auch nach der Öffnung erfolgen — etwa über Mietvertrag oder Meldebescheinigung.' },
    { question: 'Was kostet eine Türöffnung?', answer: 'Das hängt von Türtyp, Schloss, Zeitpunkt und Aufwand ab. Wir nennen Ihnen den Preis verbindlich am Telefon, bevor ein Techniker losfährt.' },
    { question: 'Was soll ich tun, bis der Techniker kommt?', answer: 'Versuchen Sie nicht, die Tür mit Kreditkarte, Draht oder Hebelwerkzeug selbst zu öffnen — das beschädigt Schloss und Türblatt und macht die professionelle Öffnung teurer. Prüfen Sie stattdessen, ob ein Ersatzschlüssel bei Nachbarn, Vermieter oder Familie liegt.' },
    { question: 'Muss das Schloss nach der Öffnung getauscht werden?', answer: 'Nach einer zerstörungsfreien Öffnung in der Regel nicht — der Zylinder bleibt unbeschädigt. Ein Tausch ist nur sinnvoll, wenn der Schlüssel verloren ging oder gestohlen wurde und weiter im Umlauf ist.' },
  ],
  heroImage: {
    base: 'schluesseldienst-schmidt-tueroeffnung-notdienst',
    alt: 'Techniker von Schlüsseldienst Schmidt öffnet eine verschlossene Wohnungstür',
    objectPosition: 'object-[58%_20%]',
    overlay: 'leicht',
  },
};

/** Alle Leistungen für die stadtspezifischen Unterseiten /[stadt]/[leistung]. */
export const CITY_SERVICES: Service[] = [TUEROEFFNUNG, ...SERVICES];

export function getCityServiceBySlug(slug: string): Service | undefined {
  return CITY_SERVICES.find(s => s.slug === slug);
}
