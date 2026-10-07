/**
 * Serialisiert Schema.org-Daten für die Ausgabe in einem <script>-Tag.
 *
 * Hintergrund: `set:html` escaped bewusst nicht, und `JSON.stringify` escaped
 * "<" nicht. Enthielte ein Wert jemals "</script>", bräche er aus dem Script-Tag
 * aus und beliebiges HTML wäre injizierbar. Aktuell stammen alle Inhalte aus
 * `cities.ts` / `services.ts` und sind damit vertrauenswürdig — sobald Inhalte
 * aber aus einer externen Quelle kommen (CMS, Bewertungs-Import), wäre das eine
 * XSS-Lücke. Diese Funktion schließt sie vorsorglich.
 *
 * Die \uXXXX-Escapes sind gültiges JSON und werden von Parsern (auch dem von
 * Google) wieder zum ursprünglichen Zeichen aufgelöst.
 */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    // U+2028/U+2029 sind in JSON erlaubt, brechen aber ältere JS-Parser.
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}
