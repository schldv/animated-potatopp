import type { City } from '../data/cities';
import type { Service, ServiceFaq } from '../data/services';

/**
 * Erzeugt die stadtspezifischen Textbausteine für /[stadt]/[leistung].
 *
 * WICHTIG: Hier wird nichts erfunden. Jeder Satz stützt sich ausschließlich auf
 * Felder aus cities.ts (Name, Region, Einwohnerzahl, Entfernung, Stadtteile,
 * description, localFact) oder auf Aussagen, die bereits an anderer Stelle auf
 * der Website stehen. Keine Preise, keine Reaktionszeiten, keine Einsatzgebiete
 * ohne Beleg.
 */

/** Nur die beiden Reaktionszeit-Werte, die die Website ohnehin nennt. */
export function responseTimeFor(city: City): string {
  return city.distanceKm === 0 ? 'unter 15 Min.' : '20–35 Min.';
}

const nf = new Intl.NumberFormat('de-DE');

/** Aufzählung mit "und" vor dem letzten Element. */
function enumerate(items: string[]): string {
  if (items.length <= 1) return items[0] ?? '';
  return `${items.slice(0, -1).join(', ')} und ${items[items.length - 1]}`;
}

/**
 * Einleitung: kombiniert die vorhandene Stadtbeschreibung mit Entfernung,
 * Einwohnerzahl, Region und Stadtteilen. Dadurch unterscheidet sich der obere
 * Seitenbereich zwischen zwei Städten tatsächlich — nicht nur im Ortsnamen.
 */
export function cityIntro(city: City, service: Service): string[] {
  const isHq = city.distanceKm === 0;
  const districts = city.districts ?? [];

  const lage = isHq
    ? `${city.name} ist unser Hauptstandort — hier sind wir am schnellsten vor Ort.`
    : `Von unserem Standort in Essen sind es ${city.distanceKm} km nach ${city.name}; als Richtwert für die Anfahrt planen Sie ${responseTimeFor(city)} ein.`;

  const groesse = `Mit rund ${nf.format(city.population)} Einwohnern liegt ${city.name} in der Region ${city.region}.`;

  const gebiet = districts.length
    ? `Für eine ${service.shortName} in ${city.name} sind wir im gesamten Stadtgebiet unterwegs — unter anderem in ${enumerate(districts)}.`
    : `Für eine ${service.shortName} sind wir im gesamten Stadtgebiet von ${city.name} unterwegs.`;

  return [city.description, `${lage} ${groesse}`, gebiet];
}

/**
 * Stadtbezogene FAQ vor den allgemeinen Fragen zur Leistung.
 * Die Antworten enthalten nur belegte Angaben.
 */
export function cityFaq(city: City, service: Service): ServiceFaq[] {
  const isHq = city.distanceKm === 0;
  const districts = city.districts ?? [];

  const items: ServiceFaq[] = [
    {
      question: `Bieten Sie ${service.shortName} in ${city.name} an?`,
      answer: districts.length
        ? `Ja. ${city.name} gehört zu unserem Einsatzgebiet, und zwar im gesamten Stadtgebiet — unter anderem in ${enumerate(districts)}. Schildern Sie uns Ihren Fall am Telefon, dann sagen wir Ihnen direkt, wie wir vorgehen und was es kostet.`
        : `Ja. ${city.name} gehört zu unserem Einsatzgebiet. Schildern Sie uns Ihren Fall am Telefon, dann sagen wir Ihnen direkt, wie wir vorgehen und was es kostet.`,
    },
    {
      question: `Wie schnell sind Sie in ${city.name} vor Ort?`,
      answer: isHq
        ? `${city.name} ist unser Hauptstandort. Im Stadtgebiet trifft unser Techniker häufig innerhalb von unter 15 Minuten bei Ihnen ein. Die tatsächliche Zeit hängt von Verkehrslage und Tageszeit ab — beim Anruf nennen wir Ihnen einen konkreten Zeitrahmen.`
        : `${city.name} liegt ${city.distanceKm} km von unserem Standort in Essen entfernt; als Richtwert planen Sie ${responseTimeFor(city)} ein. Die tatsächliche Zeit hängt von Verkehrslage und Tageszeit ab — beim Anruf nennen wir Ihnen einen konkreten Zeitrahmen. Erreichbar sind wir 24 Stunden täglich.`,
    },
    {
      question: `Was kostet eine ${service.shortName} in ${city.name}?`,
      answer: `Der Preis richtet sich nach dem Aufwand, nicht nach dem Ort — in ${city.name} gelten dieselben Konditionen wie im übrigen Einsatzgebiet. Sie erhalten die Preisauskunft verbindlich am Telefon, bevor ein Techniker losfährt.`,
    },
  ];

  return items;
}

/** Title für /[stadt]/[leistung] — Keyword vorn, Länge im Zielbereich. */
export function cityServiceTitle(city: City, service: Service): string {
  return `${service.shortName} ${city.name} – Schlüsseldienst Schmidt`;
}

/** Meta Description, ca. 140–160 Zeichen. */
export function cityServiceDescription(city: City, service: Service, phone: string): string {
  return `${service.shortName} in ${city.name} vom Fachbetrieb: 24h erreichbar, Preisauskunft vor dem Einsatz, Einsatz im gesamten Stadtgebiet. Jetzt anrufen: ${phone}`;
}

/**
 * FAQ für die Stadt-Übersichtsseite /[stadt]/faq.
 * Deckt Fragen ab, die sich auf den Ort beziehen — nicht auf eine einzelne
 * Leistung. Auch hier gilt: keine erfundenen Preise oder Reaktionszeiten.
 */
export function cityGeneralFaq(city: City, serviceNames: string[]): ServiceFaq[] {
  const isHq = city.distanceKm === 0;
  const districts = city.districts ?? [];

  return [
    {
      question: `Wie schnell ist der Schlüsseldienst in ${city.name} vor Ort?`,
      answer: isHq
        ? `${city.name} ist unser Hauptstandort. Im Stadtgebiet trifft unser Techniker häufig innerhalb von unter 15 Minuten bei Ihnen ein. Verkehrslage und Tageszeit beeinflussen das — beim Anruf nennen wir Ihnen einen konkreten Zeitrahmen.`
        : `${city.name} liegt ${city.distanceKm} km von unserem Standort in Essen entfernt; als Richtwert planen Sie ${responseTimeFor(city)} ein. Verkehrslage und Tageszeit beeinflussen das — beim Anruf nennen wir Ihnen einen konkreten Zeitrahmen.`,
    },
    {
      question: `Welche Leistungen bieten Sie in ${city.name} an?`,
      answer: `In ${city.name} decken wir unser komplettes Leistungsspektrum ab: ${enumerate(serviceNames)}. Für jede dieser Leistungen finden Sie auf dieser Website eine eigene Seite für ${city.name}.`,
    },
    ...(districts.length
      ? [{
          question: `In welchen Stadtteilen von ${city.name} sind Sie im Einsatz?`,
          answer: `Wir sind im gesamten Stadtgebiet unterwegs, unter anderem in ${enumerate(districts)}. Auch Randlagen und Ortsteile außerhalb dieser Aufzählung gehören zum Einsatzgebiet.`,
        }]
      : []),
    {
      question: `Was kostet ein Einsatz in ${city.name}?`,
      answer: `Der Preis richtet sich nach Art der Leistung, Türtyp, Schloss, Zeitpunkt und Aufwand — nicht nach dem Ort. In ${city.name} gelten dieselben Konditionen wie im übrigen Einsatzgebiet. Sie erhalten die Preisauskunft verbindlich am Telefon, bevor ein Techniker losfährt.`,
    },
    {
      question: `Sind Sie in ${city.name} auch nachts, am Wochenende und an Feiertagen erreichbar?`,
      answer: `Ja. Unser Notdienst ist 24 Stunden täglich, 7 Tage die Woche und 365 Tage im Jahr erreichbar — einschließlich Heiligabend, Neujahr und aller gesetzlichen Feiertage in Nordrhein-Westfalen.`,
    },
    {
      question: `Was soll ich tun, wenn ich mich in ${city.name} ausgesperrt habe?`,
      answer: `Bewahren Sie Ruhe und versuchen Sie nicht, die Tür selbst aufzuhebeln — das beschädigt Schloss und Türblatt und macht die professionelle Öffnung teurer. Prüfen Sie, ob ein Ersatzschlüssel bei Nachbarn, Vermieter oder Familie liegt. Wenn nicht, rufen Sie uns an und halten Sie einen Lichtbildausweis bereit.`,
    },
    {
      question: `Muss ich nachweisen, dass ich zur Öffnung berechtigt bin?`,
      answer: `Ja. Wir öffnen Türen ausschließlich für berechtigte Personen. Halten Sie einen gültigen Lichtbildausweis bereit — Personalausweis oder Reisepass. Liegt der Ausweis in der Wohnung, kann die Prüfung auch nach der Öffnung erfolgen, etwa über Mietvertrag oder Meldebescheinigung.`,
    },
    {
      question: `Welche Zahlungsmöglichkeiten gibt es?`,
      answer: `Je nach Einsatz können Sie bar oder mit EC- bzw. Kreditkarte bezahlen. Nach jedem Einsatz erhalten Sie eine vollständige Rechnung mit Leistungsbeschreibung.`,
    },
  ];
}
