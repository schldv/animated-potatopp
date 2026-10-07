import { CITIES } from './cities';

export interface HeroImage {
  /** Dateiname ohne Breiten-Suffix und Endung, liegt unter /images/hero/ */
  base: string;
  width: number;
  height: number;
  /** Alt-Text; {city} wird durch den Stadtnamen ersetzt. */
  altTemplate: string;
  /**
   * Bildausschnitt als Tailwind-Klasse. object-cover beschneidet je nach
   * Seitenverhältnis der Herosection — ohne passende Position fällt der
   * Techniker auf schmalen Viewports aus dem Bild.
   * X-Wert = gemessene Position der Person, Y = 25% damit der Kopf
   * (beginnt bei ca. 6% der Bildhöhe) oben nicht angeschnitten wird.
   * Als Literal ausgeschrieben, damit Tailwind die Klasse beim Scannen findet.
   */
  objectPosition: string;
}

export const HERO_IMAGES: HeroImage[] = [
  {
    base: 'schluesseldienst-schmidt-tueroeffnung-haustuer',
    width: 1600,
    height: 1067,
    altTemplate: 'Techniker von Schlüsseldienst Schmidt vor einer Haustür in {city}',
    objectPosition: 'object-[50%_25%]', // Person mittig
  },
  {
    base: 'schluesseldienst-schmidt-notdienst-servicefahrzeug',
    width: 1600,
    height: 900,
    altTemplate: 'Monteur von Schlüsseldienst Schmidt mit Werkzeugkoffer am Servicefahrzeug in {city}',
    objectPosition: 'object-[35%_25%]', // Person links der Mitte
  },
  {
    base: 'schluesseldienst-schmidt-techniker-vor-ort',
    width: 1600,
    height: 900,
    altTemplate: 'Schlüsseldienst Schmidt im Einsatz vor einem Wohnhaus in {city}',
    objectPosition: 'object-[60%_25%]', // Person rechts der Mitte
  },
  {
    base: 'schluesseldienst-schmidt-tueroeffnung-im-einsatz',
    width: 1600,
    height: 900,
    altTemplate: 'Türöffnung durch einen Techniker von Schlüsseldienst Schmidt in {city}',
    objectPosition: 'object-[70%_25%]', // Person rechts, Türklinke links braucht Raum
  },
];

/**
 * Ordnet jeder Stadt eines der vier Hero-Bilder zu.
 *
 * Vergabe über die Position der Stadt in CITIES (Reihenfolge nach Region
 * gruppiert) modulo Anzahl der Bilder. Das garantiert zwei Dinge:
 *
 *  1. EXAKTE Gleichverteilung — 68 Städte / 4 Bilder = genau 17 je Motiv.
 *  2. Keine Häufung: Zwei in der Liste benachbarte Städte bekommen nie
 *     dasselbe Bild. Wer sich durch Nachbarstädte klickt, sieht Abwechslung.
 *
 * Bewusst KEIN Math.random(): Bei einem statischen Build würde das bei jedem
 * Build neu würfeln — jede Stadtseite bekäme grundlos ein anderes Bild, was
 * unnötige Deploy-Diffs und CDN-Cache-Invalidierung erzeugt.
 *
 * Ein zuvor eingesetzter Hash über den Slug erzeugte 21/17/15/15 und Klumpen
 * von bis zu vier gleichen Bildern hintereinander — deshalb die Umstellung.
 *
 * Hinweis: Wird eine Stadt mitten in CITIES eingefügt, verschieben sich die
 * Zuordnungen dahinter. Das ist gewollt — Gleichverteilung hat Vorrang.
 */
export function heroImageForCity(slug: string): HeroImage {
  const index = CITIES.findIndex(c => c.slug === slug);
  // Unbekannter Slug: auf das erste Motiv zurückfallen statt zu crashen.
  if (index < 0) return HERO_IMAGES[0];
  return HERO_IMAGES[index % HERO_IMAGES.length];
}

/** Alt-Text für eine konkrete Stadt. */
export function heroAlt(image: HeroImage, city: string): string {
  return image.altTemplate.replace('{city}', city);
}
