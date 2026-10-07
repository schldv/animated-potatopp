/**
 * ECHTE Kundenbewertungen.
 *
 * ⚠️ Hier gehören ausschließlich Bewertungen hinein, die tatsächlich von Kunden
 * abgegeben wurden und nachprüfbar sind. § 5b Abs. 3 UWG verpflichtet dazu
 * sicherzustellen, dass angezeigte Bewertungen von echten Kunden stammen;
 * Anhang zu § 3 Abs. 3 UWG Nr. 23b/23c verbietet gefälschte Bewertungen
 * ausnahmslos. Erfundene oder "realistisch gemischte" Bewertungen sind
 * abmahnfähig und verstoßen zusätzlich gegen die Richtlinien von Google.
 *
 * SO BEFÜLLEN:
 *  1. Google Business Profile einrichten und Kunden nach dem Einsatz um eine
 *     Bewertung bitten (am wirkungsvollsten: kurzer Link auf der Rechnung).
 *  2. Vorhandene Bewertungen hier eintragen — wörtlich, ohne Glättung.
 *     `source` und `sourceUrl` machen sie nachprüfbar, das ist der Punkt.
 *  3. `AGGREGATE` nur setzen, wenn die Werte dem Profil entsprechen.
 *
 * Solange das Array leer ist, rendert die Bewertungs-Sektion nichts und es wird
 * KEIN AggregateRating-Schema ausgegeben. Das ist Absicht: Ein AggregateRating
 * ohne echte Bewertungen ist strukturierter Spam und wird von Google abgestraft.
 */

export interface Review {
  /** Name wie vom Kunden angegeben, z. B. "Sabine K." */
  author: string;
  /** 1–5, wie tatsächlich vergeben. */
  rating: number;
  /** Wörtlicher Text der Bewertung. */
  text: string;
  /** ISO-Datum der Bewertung, z. B. '2026-08-14'. */
  date: string;
  /** Stadt, in der der Einsatz stattfand — optional, für lokale Zuordnung. */
  citySlug?: string;
  /** Wo die Bewertung öffentlich steht, z. B. 'Google'. */
  source: string;
  /** Direktlink zur Bewertung oder zum Profil — macht sie nachprüfbar. */
  sourceUrl?: string;
}

/** Noch keine echten Bewertungen erfasst. NICHT mit Beispieldaten füllen. */
export const REVIEWS: Review[] = [];

/**
 * Gesamtwertung — nur setzen, wenn sie dem öffentlichen Profil entspricht
 * und dort nachprüfbar ist. `null` lässt das Schema weg.
 */
export const AGGREGATE: { ratingValue: number; reviewCount: number; source: string; url?: string } | null = null;

export function reviewsForCity(citySlug: string): Review[] {
  return REVIEWS.filter(r => r.citySlug === citySlug);
}

/**
 * AggregateRating für Schema.org — gibt nur etwas zurück, wenn echte Daten
 * hinterlegt sind. Niemals aufweichen.
 */
export function aggregateRatingSchema() {
  if (!AGGREGATE || !REVIEWS.length) return undefined;
  return {
    '@type': 'AggregateRating',
    ratingValue: AGGREGATE.ratingValue,
    reviewCount: AGGREGATE.reviewCount,
  };
}
