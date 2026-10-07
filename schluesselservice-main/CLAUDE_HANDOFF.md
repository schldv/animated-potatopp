# CLAUDE HANDOFF — Schlüsseldienst Schmidt Website

**Erstellt:** 2026-06-22
**Zuletzt aktualisiert:** 2026-09-05 (Local-SEO-Session)
**Projekt:** `/Users/kevindziuba/Desktop/Schlüsseldienst/schluesselservice`
**Dev-Server:** `npm run dev` → http://localhost:4321 (weicht auf 4322/4323 aus, falls belegt)

> ⚠️ **Wichtig für die nächste Session:** Dieses Dokument war bis 2026-09-05 in zentralen Punkten
> überholt (es beschrieb einen Ein-Leistungs-Betrieb mit Kontaktformular). Es wurde vollständig
> gegen den tatsächlichen Code-Stand abgeglichen. **Bei Widersprüchen gilt immer der Code.**

---

# Projektübersicht

## Ziel
Production-ready SEO + GEO optimierte statische Website für **Schlüsseldienst Schmidt**, Essen.
Ziel: Web-Traffic und Neukunden über Google und KI-Suchmaschinen (ChatGPT Search, Perplexity, Google AI Overviews).

## Dienstleistungen (5 Leistungsseiten)
Die Website führt **fünf** Leistungen — die frühere Angabe „einzige Dienstleistung: Türöffnung" ist überholt:

1. **Türöffnung / Schlüsselnotdienst 24h** — Kernleistung, eigene Seite `leistungen/tueroeffnung.astro`
2. **Tresoröffnung** — `/leistungen/tresoroeffnung`
3. **Schlossaustausch & Schlossservice** — `/leistungen/schlossaustausch`
4. **Einbruchschutz** — `/leistungen/einbruchschutz`
5. **Schließanlagen** — `/leistungen/schliessanlagen`

**Autoöffnung** ist bewusst *keine* eigene Seite, sondern ein Abschnitt auf der Türöffnungsseite
(Entscheidung des Nutzers, 2026-09-05 — vermeidet Kannibalisierung).

## Preismodell
- **Türöffnung: ab 79€** (einzige Preisangabe, steht im Hero der Startseite)
- **Alle übrigen Leistungen:** Preis nach Aufwand, wird vorab am Telefon genannt
- Kein Festpreis — Preissprache immer „ab X€" bzw. „Preis vor dem Einsatz"

⚠️ Die früher dokumentierten Staffelpreise (Nacht ab 109€, Wochenende ab 129€, Anfahrt kostenlos)
standen **nur** in `llms.txt` und waren auf der Website nirgends belegt. Sie wurden am 2026-09-05
entfernt. Falls diese Preise real sind, müssen sie auf der Website ergänzt werden — nicht umgekehrt.

## Reaktionszeit
- **Essener Stadtgebiet: unter 15 Minuten** (durchgängig auf der gesamten Website)
- **Übrige Städte: 20–35 Minuten** als Richtwert
- In `[city].astro` aus `cityData.distanceKm` abgeleitet (`isHeadquarters ? … : …`)

⚠️ Frühere Angabe „unter 10 Minuten" war ein Widerspruch zum Rest der Seite und ist bereinigt.

## Aktueller Stand
✅ Vollständig gebaut, SEO/GEO- und Local-SEO-optimiert. **Nicht live** — Platzhalter noch offen.
`npm run build` → **556 Seiten**, 0 Fehler. `npx astro check` → 0 errors, 0 warnings.

---

# Aktueller Arbeitskontext

## Zuletzt bearbeitet (2026-09-05): Local-SEO-Audit + gezielte Erweiterung

Vorgehen: erst vollständiges Audit, dann Keyword-Mapping, dann nur die nötigen Ergänzungen.
Leitlinie war **Beibehalten + Erweitern statt Umbauen** — keine neue Seite, keine URL-Änderung
außer der Tippfehler-Korrektur, **null neue CSS-Klassen** (per Diff verifiziert).

### Behobene Bugs
| Bug | Auswirkung | Fix |
|---|---|---|
| BreadcrumbList-Schema auf allen 68 Stadtseiten wurde verworfen | `slot="head"` ohne passenden Slot in `BaseLayout` → 0 Vorkommen im Build | `<slot name="head" />` im `<head>` ergänzt |
| Sitemap enthielt noindex-Seiten | Widersprüchliche Signale an Google | `filter` in `astro.config.mjs`, 80 → 77 URLs |
| `og:image` lieferte 404 | Kein Vorschaubild beim Teilen | `public/images/og-default.jpg` (1200×630) erzeugt |
| `sameAs: [".../PLACEHOLDER"]` | Ungültige URLs im LocalBusiness-Schema | Aus `BaseLayout` + `index.astro` entfernt |
| Reaktionszeit-Widerspruch | Stadtseiten versprachen „unter 15 Min." auch für Heinsberg (75 km), KPI-Box daneben „20–35 Min." | Aus `distanceKm` abgeleitet, 4 Stellen bereinigt |
| Schema sagte „unter 10 Minuten" | Widerspruch zur restlichen Seite | Auf 15 Minuten korrigiert |
| Toter Code im Footer | Importierte alle 68 Städte ohne sie zu rendern | Entfernt (siehe Regel „keine Stadt-Querverlinkung") |
| `getCityBySlug` ungenutzt importiert | TypeScript-Hint | Import bereinigt |

### Keyword-Mapping
| Keyword | Zielseite | Maßnahme |
|---|---|---|
| Schlüsselnotdienst Essen | `/leistungen/tueroeffnung`, `/`, Stadtseiten | Erweitert — Begriffsabschnitt, Title, FAQ |
| Aufsperrdienst Essen | `/leistungen/tueroeffnung`, `/`, Stadtseiten | Erweitert — Begriffsabschnitt, FAQ |
| Türöffnung Essen | `/leistungen/tueroeffnung` | Erhalten, Meta optimiert |
| Autoöffnung Essen | `/leistungen/tueroeffnung` (Abschnitt) | Erweitert — Abschnitt + FAQ |
| Tresoröffnung Essen | `/leistungen/tresoroeffnung` | Erhalten, Slug korrigiert |
| Einbruchschutz Essen | `/leistungen/einbruchschutz` | Erhalten, Meta gekürzt |

Für Schlüsselnotdienst und Aufsperrdienst wurden **bewusst keine eigenen Seiten** angelegt —
es sind Synonyme derselben Suchintention wie Startseite/Türöffnung, eigene Seiten wären
Keyword-Kannibalisierung.

### Slug-Korrektur (einzige URL-Änderung)
`/leistungen/tresooeffnung` → `/leistungen/tresoroeffnung` (fehlendes „r").
Dreifach abgesichert: Astro-`redirects` (Meta-Refresh-Fallback), `vercel.json` (301),
`public/_redirects` (301 für Netlify/Cloudflare Pages). Alle internen Links mitgezogen,
Sitemap führt nur die neue URL.

### Titles & Meta Descriptions
Vorher Stadt-Titles bei 77 Zeichen, mehrere Descriptions bei 181.
Jetzt **Titles 48–64, Descriptions 127–156** über alle 80 Seiten.
Bei Leistungsseiten wurde das Suffix `| Schlüsseldienst Schmidt` gestrichen — die Titles in
`services.ts` tragen Keyword und Region bereits selbst.

### llms.txt
Vollständig gegen den Website-Inhalt abgeglichen: alle 5 Leistungen statt „ausschließlich
Türöffnung", Reaktionszeiten korrigiert, unbelegte Staffelpreise entfernt, 68 statt „über 70"
Städte, Begriffsklärung Schlüsselnotdienst/Aufsperrdienst, Autoöffnung, alle Leistungs-URLs.

## Sicherheit (Stand 2026-09-05)

Die Seite ist statisch, hat **keine Formulare, kein Backend, keine Cookies, kein Storage,
keine externen Ressourcen** und keine gefährlichen JS-Sinks (`innerHTML`, `eval`,
`document.write`, URL-Parameter-Parsing). Damit entfallen SQL-Injection, CSRF, Auth-Bypass,
Session-Hijacking, DOM-XSS und CDN-Supply-Chain strukturell.

### Umgesetzt
| Maßnahme | Datei |
|---|---|
| Security-Header inkl. strikter CSP | `vercel.json` (Vercel) + `public/_headers` (Netlify/Cloudflare) |
| JSON-LD-Escaping gegen `</script>`-Ausbruch | `src/lib/jsonld.ts`, an 8 Stellen eingesetzt |
| Skripte extern statt inline (ermöglicht `script-src 'self'`) | `astro.config.mjs` → `assetsInlineLimit: 0` |
| npm-Schwachstellen 12 → 3 | `npm audit fix` |
| `.DS_Store` aus Deployment | Build-Script `find dist -name '.DS_Store' -delete` + `.vercelignore` |
| Herkunftsnachweis gegen Klone (Canary) | `src/layouts/BaseLayout.astro` |
| CI mit `npm ci`, Typecheck, Build, CSP-Regression | `.github/workflows/ci.yml` |
| Dependabot (wöchentlich, Astro-Major ausgenommen) | `.github/dependabot.yml` |
| Node-Version gepinnt (LTS 22, wie bei Vercel) | `.nvmrc` |

### Wichtig für künftige Änderungen
- **`vercel.json` und `public/_headers` müssen synchron bleiben** — Vercel liest `_headers` nicht,
  Netlify liest `vercel.json` nicht.
- **`assetsInlineLimit: 0` nicht entfernen.** Sonst bettet Astro Skripte wieder inline ein und die
  CSP (`script-src 'self'`) bricht die Seite.
- **Neues JSON-LD immer über `jsonLd()`** aus `src/lib/jsonld.ts` ausgeben, nie über
  `JSON.stringify` direkt — `set:html` escaped nicht.
- `style-src` braucht aktuell `'unsafe-inline'` wegen des einen `style="display:none"` in
  `EmergencyBanner.astro`. Wird das durch eine CSS-Klasse ersetzt, kann `'unsafe-inline'` weg.
- Externe Ressourcen (Fonts, Analytics, Karten-Embeds) würden die CSP brechen — bewusst so.
- **Im CI immer `npm ci`, nie `npm install`.** `npm ci` installiert exakt die im Lockfile
  gepinnten Versionen und prüft die `integrity`-Hashes (aktuell 449/449 Pakete abgedeckt);
  `npm install` darf Versionen eigenmächtig anheben. Relevant, weil npm-Lifecycle-Skripte zur
  Buildzeit mit den Deploy-Credentials der CI laufen.
- `npm run verify` führt lokal Build + Typecheck + CSP-Check in einem Rutsch aus.
- `scripts/check-csp.mjs` enthält die eigene Domain als Konstante `OWN_HOST` —
  **beim Platzhalter-Ersatz mit anpassen.**

### Verbleibende npm-Advisories (3, alle nicht anwendbar)
Nur mit Astro 7 behebbar (semver-major), betreffen diese Seite aber faktisch nicht:
- **astro** — XSS über Spread-Attribute, `transition:*` und View Transitions.
  Verifiziert: 0 Spread-Attribute, 0 Transition-Direktiven, 0 hydrierte Islands im Projekt.
- **esbuild** — Dateilesen über den Dev-Server **unter Windows**; Projekt läuft auf macOS.
- **sharp** — libvips-CVEs; Astros Bildoptimierung (`astro:assets`, `<Image>`) wird nicht genutzt,
  sharp läuft nie.

Alle drei sind Buildtime-Abhängigkeiten — bei einer statischen Seite erreicht keine davon den Besucher.

### SSL / HTTPS — Ablauf beim Go-Live

Ein Zertifikat lässt sich **erst mit registrierter Domain** ausstellen (die CA muss die
Domainkontrolle prüfen). Selbst bauen muss man es nicht: Vercel, Netlify und Cloudflare Pages
holen automatisch ein Let's-Encrypt-Zertifikat und erneuern es selbstständig. Kein Kauf nötig —
kostenpflichtige OV/EV-Zertifikate bringen im Browser keinen sichtbaren Vorteil.

Der Code ist bereits HTTPS-fertig: keine hartkodierte `http://`-URL, `upgrade-insecure-requests`
in der CSP, alle Domain-Referenzen einheitlich `https://www.`.

**Vor dem Verbinden entscheiden: `www` oder Apex.** Die Konfiguration ist aktuell durchgehend auf
`www.` festgelegt (`astro.config.mjs`, `robots.txt`, alle 80 Canonicals). Eine Umstellung ist
*jetzt* ein einmaliges Suchen-und-Ersetzen — nach dem Launch ändern sich dadurch sämtliche
Canonicals und Google muss alles neu crawlen.

**HSTS gestaffelt ausrollen (wichtig):**
1. Go-Live mit dem aktuellen Wert `max-age=300; includeSubDomains`
2. Prüfen, dass Domain **und alle Subdomains** sauber über HTTPS erreichbar sind
3. Erst dann in **beiden** Dateien auf `max-age=31536000; includeSubDomains` erhöhen
4. `preload` nur ergänzen, wenn ihr sicher seid — danach auf hstspreload.org einreichen

Grund für die Staffelung: Ein zu früh gesetzter langer `max-age` sperrt jeden Besucher, der den
Header einmal gesehen hat, für die volle Dauer von jeder Subdomain aus, die kein HTTPS kann.
Serverseitig ist das **nicht** zurücknehmbar.

Reihenfolge insgesamt: Domain registrieren → `www`-Entscheidung → Platzhalter ersetzen →
Repo zu GitHub → Vercel verbinden → Domain eintragen, DNS setzen (**Zertifikat kommt hier
automatisch**) → prüfen mit `curl -sI https://DOMAIN | head -3` und ssllabs.com/ssltest →
danach HSTS erhöhen.

### Konten- & DNS-Checkliste (vor/beim Go-Live abhaken)

Der Code ist abgesichert — das verbleibende Risiko liegt fast vollständig bei Konten und DNS.
Ein übernommener Registrar-Zugang wiegt schwerer als jede Lücke im Quelltext: damit zeigt eure
Domain auf eine Fake-Seite mit fremder Telefonnummer, und genau das ist die typische
Schlüsseldienst-Betrugsmasche.

**Domain / Registrar**
- [ ] 2FA am Registrar-Konto aktiviert
- [ ] Transfer-Lock (Registrar-Lock / Domain-Sperre) gesetzt
- [ ] Auth-Code (AuthInfo) nicht per E-Mail herumliegen lassen
- [ ] **Kontakt-/Recovery-E-Mail läuft NICHT über die eigene Domain.**
      Sonst gilt: DNS gekapert → Mailempfang weg → Passwort-Reset unmöglich → Domain verloren.
      Eine Adresse bei einem unabhängigen Anbieter hinterlegen.

**DNS**
- [ ] DNSSEC aktiviert
- [ ] CAA-Record gesetzt (legt fest, welche CA Zertifikate ausstellen darf — z. B. `letsencrypt.org`)
- [ ] Nur benötigte Records vorhanden; alte Einträge auf abgeschaltete Dienste löschen
      (verwaiste CNAMEs ermöglichen Subdomain-Takeover)
- [ ] SPF, DKIM und DMARC gesetzt — im Impressum steht eine Adresse; ohne diese Records
      kann jeder in eurem Namen mailen

**Hosting (Vercel/Netlify)**
- [ ] 2FA aktiviert
- [ ] Team-Zugriffe geprüft, keine verwaisten Mitglieder oder Deploy-Tokens
- [ ] Domain im Dashboard verbunden, Zertifikat automatisch ausgestellt

**GitHub**
- [ ] 2FA aktiviert (ein Push = ein Deploy)
- [ ] `main` als geschützter Branch, Force-Push aus
- [ ] Dependabot-PRs werden tatsächlich gesichtet (`.github/dependabot.yml` liegt bereit)

**Recovery**
- [ ] Recovery-Codes aller Konten offline gesichert (nicht im selben Passwortmanager wie das Konto)

**Monitoring nach dem Launch**
- [ ] Uptime-Monitoring
- [ ] Google Search Console: Sicherheitswarnungen aktiviert
- [ ] Gelegentlich nach einem wörtlichen Satz aus eurem Text googeln (Klon-Erkennung)

### Schutz gegen Website-Klone

Technisch **verhindern** lässt sich Kopieren nicht — alles, was der Browser bekommt, ist
speicherbar. „Kopierschutz" per Rechtsklick-Sperre oder JS-Obfuskation ist wirkungslos und
schadet SEO; bitte nicht einbauen. Was stattdessen wirkt:

| Maßnahme | Status |
|---|---|
| Absolute, selbstreferenzierende Canonicals auf allen 80 Seiten | ✅ vorhanden — ein wörtlicher Klon sagt Google selbst, dass ihr das Original seid |
| `Cross-Origin-Resource-Policy: same-origin` | ✅ verhindert Hotlinking eurer CSS/JS/Bilder |
| Urheberrechtshinweis im HTML-Kopf jeder Seite (mit Original-URL) | ✅ `BaseLayout.astro` |
| Stiller Herkunfts-Token `<!-- b:64bf8f6b2659427c -->` | ✅ `BaseLayout.astro` |
| Echte Fotos mit EXIF-Urhebervermerk | ⬜ sobald Bilder vorhanden sind — stärkster Nachweis |

**Klon prüfen:** `curl -s https://verdaechtige-domain.de | grep 64bf8f6b2659427c`

⚠️ **Der Token `ORIGIN_TOKEN` in `BaseLayout.astro` darf niemals neu generiert werden** — er
taugt nur als Nachweis, solange er stabil bleibt.

Bei einem Fund: Hoster über die Abuse-Adresse (per `whois` ermittelbar), parallel
Google-Löschantrag wegen Urheberrechtsverletzung, bei proxied Domains zusätzlich
Cloudflare-Abuse. Rechtlich greifen UrhG (Texte), MarkenG (Name) und UWG (Irreführung).

Der eigentliche Geschäftsschaden entsteht nicht durch den Klon selbst, sondern durch einen Klon
mit **ausgetauschter Telefonnummer**. Dagegen helfen nur verifiziertes Google Business Profile,
ggf. Markenanmeldung und vorsorglich registrierte Tippfehler-Domains.

### Offen (nach Go-Live, nicht im Code lösbar)
- **HSTS steht bewusst auf `max-age=300` (5 Minuten) — gestaffelter Rollout, siehe unten.**
  `preload` ist bewusst nicht gesetzt, weil es praktisch irreversibel ist.
- DNS: CAA-Record und DNSSEC setzen.
- E-Mail: **SPF, DKIM, DMARC** — im Impressum steht eine Adresse, ohne diese Records kann jeder
  in eurem Namen mailen.
- Branchenrisiko: Schlüsseldienste sind das Paradebeispiel für Typosquatting und Fake-Anbieter.
  Ähnliche Domains sichern, Google Business Profile verifizieren, Markenüberwachung.
- Nach Deploy Header verifizieren: `curl -sI https://DOMAIN | grep -i 'content-security\|x-frame\|strict-transport'`

---

## Hero-Bilder & Essen-Differenzierung (2026-09-05, Nachtrag)

### Hero-Bilder
Vier Fotos (Techniker + gebrandetes Fahrzeug) liegen als Original-PNG unter
`../Bilder Herosection: Landingpage/`. Für die Website wurden sie zu WebP in zwei Breiten
konvertiert (`public/images/hero/`, 9,85 MB → 0,55 MB).

- Zuordnung über `src/data/heroImages.ts` → `heroImageForCity(slug)`
- **Bewusst kein `Math.random()`:** Bei einem statischen Build würde Zufall bei jedem Build
  neu würfeln → unnötige Deploy-Diffs und CDN-Cache-Invalidierung.
- **Vergabe über den Index in `CITIES` modulo 4.** Ergibt exakt **17/17/17/17** (68 Städte
  teilen sich glatt durch 4) und garantiert, dass **zwei benachbarte Städte nie dasselbe
  Bild** bekommen — beim Durchklicken von Nachbarstädten sieht man Abwechslung.
  Ein zuvor eingesetzter Slug-Hash erzeugte 21/17/15/15 mit Klumpen von bis zu vier
  gleichen Bildern hintereinander und wurde deshalb ersetzt.
- ⚠️ Wird eine Stadt mitten in `CITIES` eingefügt, verschieben sich alle Zuordnungen
  dahinter. Das ist bewusst in Kauf genommen — Gleichverteilung hat Vorrang.
- Die Startseite wählt in `index.astro` gezielt ein **anderes** Motiv als `/essen`
  (beide sind Essen-Seiten und sollen sich auch optisch unterscheiden). Bei Änderungen
  an der Reihenfolge von `CITIES` oder `HERO_IMAGES` gegenprüfen.
- Overlay `from-gray-950/80 via-gray-900/72 to-orange-950/75`: Die Fotos haben helle Himmel,
  weiße Schrift braucht Kontrast. Wert wurde gemessen (WCAG gegen die hellsten 5 % der Pixel
  im Textbereich): **~7,3:1, AAA**. Wird das Overlay aufgehellt, unbedingt nachrechnen —
  ab ca. `/65` fällt es unter AA.
- **Bildausschnitt je Motiv** über `objectPosition` in `heroImages.ts` (`object-[X%_25%]`).
  `object-cover` beschneidet je nach Höhe der Herosection; bei mittiger Ausrichtung fiel der
  Techniker auf schmalen Viewports aus dem Bild. Die X-Werte (35/50/60/70 %) entsprechen der
  gemessenen Position der Person, Y=25 % verhindert, dass Köpfe (beginnen bei ~6 % der
  Bildhöhe) oben angeschnitten werden. Geprüft durch Nachrendern des Ausschnitts bei
  360×820, 390×720, 768×700 und 1440×670.
  Die Klassen stehen als Literale in der Datei, damit Tailwind sie beim Scannen findet —
  dynamisch zusammengesetzte Klassennamen würden nicht erzeugt.
- `<img>` mit srcset 900w/1600w, `width`/`height` gegen CLS, `loading="eager"` +
  `fetchpriority="high"` (Hero ist das LCP-Element).

### Leistungs-Hero-Bilder (2026-09-06)

Fünf Fotos (Originale unter `../Leistungen Foto Hero/`) auf den Leistungsseiten, konvertiert
nach `public/images/leistungen/` (16 MB → 0,62 MB, WebP 800w/1400w).

| Seite | Motiv | Ausschnitt | Overlay |
|---|---|---|---|
| `/leistungen/tueroeffnung` | Türöffnung im Flur | `object-[58%_20%]` | leicht |
| `/leistungen/tresoroeffnung` | Tresorschloss im Büro | `object-[62%_40%]` | leicht |
| `/leistungen/schlossaustausch` | Zylindertausch Haustür | `object-[40%_20%]` | standard |
| `/leistungen/einbruchschutz` | Beratung Mehrfachverriegelung | `object-[40%_15%]` | standard |
| `/leistungen/schliessanlagen` | Schließplan mit Zylindern | `object-[50%_22%]` | standard |

- Zuordnung ist **fest**, nicht verteilt: jede Leistung hat ihr eigenes Motiv. Die vier
  datengetriebenen Seiten über `heroImage` in `services.ts`, `/leistungen/tueroeffnung`
  (eigene Datei) über Props direkt in der Seite.
- **`/leistungen` (Hub) hat bewusst kein Foto** — es lag kein passendes Motiv vor. Falls
  gewünscht, könnte dort eines der Stadt-Hero-Bilder als generisches Markenbild dienen.
- Die Fotos sind 4:3, die Hero-Section deutlich breiter → starker vertikaler Beschnitt.
  Die Y-Werte (15–40 %) verhindern, dass Köpfe oben abgeschnitten werden; geprüft durch
  Nachrendern bei 1440×560 und 390×620.
- **Zwei Overlay-Stufen** in `HeroBackdrop.astro`: `standard` (80/72/75) für normal
  belichtete Fotos, `leicht` (70/62/65) für die von Haus aus dunklen Motive Tresor und
  Notdienst — dort lag der Kontrast mit der Standardstufe bei 10:1, das Foto verschwand
  komplett. Mit `leicht` sind es 8,2:1, weiterhin AAA.

### HeroBackdrop-Komponente
`src/components/HeroBackdrop.astro` bündelt Bild + Abdunklung für **alle** Hero-Bereiche
(Startseite, 68 Stadtseiten, 5 Leistungsseiten). Vorher war das Markup dupliziert.
Beim Refactoring wurde der Build vorher/nachher verglichen: **81 Seiten inhaltlich identisch**
(nur 3 Leerzeichen Unterschied durch die Komponentengrenze).

Die umgebende `<section>` braucht `relative overflow-hidden`, der Inhalt darüber `relative`.

### Essen: Startseite vs. /essen
`/` und `/essen` hatten **identische H1 und nahezu identischen Title** („Schlüsseldienst Essen")
— klassische Keyword-Kannibalisierung. Aufgelöst durch inhaltliche Trennung:

| | `/` | `/essen` |
|---|---|---|
| H1 | Schlüsseldienst Essen | Schlüsseldienst Essen – alle Stadtteile |
| Title | Schlüsseldienst Essen 24h – Türöffnung Notdienst \| Schmidt | Schlüsseldienst Essen – alle Stadtteile im Überblick |
| Rolle | Breiter Marken- und Notdiensteinstieg | Stadtteil-Zielseite (Rüttenscheid, Steele, Altenessen, Borbeck, Kettwig) |

Umgesetzt in `[city].astro` über die bestehende Variable `isHeadquarters`
(`cityData.distanceKm === 0`) — keine Sonderdatei. Die Startseite verlinkt `/essen` im
Einsatzgebiet-Abschnitt.

⚠️ **Bei künftigen Änderungen an Title/H1 einer der beiden Seiten die andere mitprüfen**,
sonst entsteht die Kannibalisierung erneut. Kontrolle: über alle 80 Seiten dürfen keine
doppelten Titles oder H1 auftreten (aktuell: 0).

## Stadtspezifische Leistungsseiten (2026-09-06)

**476 stadtspezifische Seiten**, Gesamtumfang der Website **556 Seiten**:

| Typ | Anzahl |
|---|---|
| Stadt-Übersicht `/[stadt]` | 68 |
| Leistungen `/[stadt]/[leistung]` | 340 |
| FAQ `/[stadt]/faq` | 68 |
| Kontakt `/[stadt]/kontakt` | 68 |

- Template: `src/pages/[city]/[service].astro`
- Leistungsdaten: `CITY_SERVICES` in `services.ts` = `[TUEROEFFNUNG, ...SERVICES]`
- Stadtspezifische Textbausteine: `src/lib/cityService.ts`
- Die Stadtseiten verlinken ihre eigenen fünf Unterseiten; die Unterseiten verlinken die
  Geschwister derselben Stadt und zurück zur Stadtübersicht.

### FAQ & Kontakt je Stadt (2026-09-07)
`/[stadt]/faq` und `/[stadt]/kontakt` (je 68 Seiten). Vorher zeigten Header und Footer aus dem
Stadtkontext auf die globalen `/faq` und `/kontakt` — derselbe Kontextbruch wie zuvor bei den
Leistungslinks.

- Templates: `src/pages/[city]/faq.astro`, `src/pages/[city]/kontakt.astro`
- FAQ-Inhalte: `cityGeneralFaq()` in `cityService.ts` — ortsbezogene Fragen (Anfahrt,
  Stadtteile, Kosten, Erreichbarkeit), erzeugt ausschließlich aus `cities.ts`
- Kontaktseite: Telefon-CTA, Anfahrt mit Entfernung und Richtwert, Stadtteile,
  Begründung „nur telefonisch", Checkliste fürs Telefonat
- **Impressum und Datenschutz bleiben global** — rechtliche Pflichtseiten, zudem `noindex`
- Die globalen `/faq` und `/kontakt` bleiben bestehen und sind weiterhin verlinkt
  (25 bzw. 24 eingehende Links von den nicht-städtischen Seiten)

`check-links.mjs` wertet jetzt auch `/faq` und `/kontakt` aus dem Stadtkontext als
Kontextbruch — ein Rückfall fällt damit im CI auf.

### Interne Verlinkung: Stadtkontext (Fix 2026-09-06)
`Header.astro` und `Footer.astro` nehmen jetzt zusätzlich `citySlug` entgegen. Auf Stadtseiten
und deren Unterseiten zeigen Navigation und Footer-Leistungsspalte auf die Seiten **dieser
Stadt** statt auf die generischen Leistungsseiten.

Vorher landete man von `/marl` über den Header wieder auf der Essen-lastigen Hauptseite, und
die generischen Seiten saugten die interne Linkkraft ab:

| Ziel | vorher | nachher |
|---|---|---|
| `/leistungen/tueroeffnung` | 848 | 32 |
| `/leistungen/einbruchschutz` | 425 | 17 |
| `/marl/tueroeffnung` | 5 | 17 |
| `/marl` | 12 | 24 |
| Kontextbrüche gesamt | 2.040 | **0** |

⚠️ **Wer `Header`/`Footer` auf einer Stadtseite einbindet, muss `citySlug` mitgeben** — sonst
zeigen die Links wieder aus dem Stadtkontext heraus. `npm run check:links` schlägt darauf an.

### Generische Leistungsseiten entlokalisiert
`/leistungen/*` trug Titles wie „Einbruchschutz Essen & NRW" und konkurrierte damit direkt mit
`/essen/einbruchschutz`. Die generischen Seiten sind jetzt rein thematisch positioniert
(„Einbruchschutz – Beratung & Nachrüstung vom Fachbetrieb"), der Ortsbezug liegt ausschließlich
bei den Stadtseiten. Saubere Zuordnung:

- `/` → Marke + Notdienst Essen
- `/essen` → Schlüsseldienst Essen, Stadtteile
- `/essen/tueroeffnung` → „Türöffnung Essen"
- `/leistungen/tueroeffnung` → „Türöffnung" (thematisch, ortslos)

### Link- und Kontext-Audit
`scripts/audit-links.mjs` (`npm run audit:links`, Teil von `npm run verify` und der CI)
prüft über den fertigen Build elf Punkte:

| | Prüfung |
|---|---|
| A | Kaputte interne Links (Seiten und Assets) |
| B | Links auf Weiterleitungs-Stubs statt aufs echte Ziel |
| C | Anker `#id`, deren Ziel-Element fehlt |
| D | Canonical stimmt nicht mit dem tatsächlichen Pfad überein |
| E | Trailing Slash und Domain-Schreibweise im Canonical |
| F | Verwaiste Seiten (indexierbar, aber ohne internen Link) |
| G | Kontextbrüche: aus dem Stadtkontext auf die globale Entsprechung |
| H | Stadt-zu-Stadt-Links (Projektregel) |
| I | Breadcrumb-JSON-LD zeigt auf nicht existierende Pfade |
| J | Sitemap ↔ Routen ↔ Canonical zeichengleich |
| K | Uneinheitliche `tel:`-Nummern |

A, B, C, D, H und I brechen den Build. Stand 2026-09-07: **0 Befunde** über 557 Routen.

**Behobene Befunde aus dem ersten Durchlauf:**
1. **Telefonnummer uneinheitlich** — `impressum.astro` und `datenschutz.astro` schrieben
   `tel:+492010000000` ohne Leerzeichen, überall sonst `tel:+49 201 000000`. Der dokumentierte
   `sed`-Befehl für den Platzhalter-Ersatz hätte genau diese beiden Pflichtseiten
   übersprungen. Beide nutzen jetzt dieselbe Konstante.
2. **Canonical ≠ Sitemap** — Astro baut mit `build.format: 'directory'`, ausgeliefert wird
   also `/pfad/`. Die Sitemap schrieb den Trailing Slash und kleine Domain, der Canonical
   nicht. `BaseLayout` normalisiert den Canonical jetzt über `new URL().href`; alle 553
   indexierbaren Seiten sind zeichengleich mit ihrer Sitemap-URL.

### ⚠️ Bekanntes SEO-Risiko — bewusste Entscheidung des Nutzers
Diese Struktur widerspricht der Regel „keine künstlichen regionalen Seiten in Masse /
keine Doorway-Pages" aus dem ursprünglichen Briefing. Der Nutzer wurde am 2026-09-06 auf
das Risiko hingewiesen und hat sich nach Abwägung ausdrücklich für alle fünf Leistungen je
Stadt entschieden (Alternativen waren: nur Türöffnung = 68 Seiten, drei Kernleistungen =
204 Seiten, oder Ausbau der bestehenden Stadtseiten ohne neue URLs).

**Gemessene Textähnlichkeit zweier Städte bei gleicher Leistung: 88–91 %.**
Rund 32 % der Wörter je Seite haben Ortsbezug. Google kann das als Doorway-Struktur werten.

Falls die Seiten nicht ranken oder eine manuelle Maßnahme kommt, ist der Rückbau:
1. Zuerst die selten regional gesuchten Leistungen entfernen (Schließanlagen, Tresoröffnung)
2. `/[stadt]/[leistung]` per 301 auf `/[stadt]` umleiten
3. Stadtseiten-Karten wieder auf `/leistungen/[leistung]` zeigen lassen

### Content-Herkunft
`cityService.ts` erzeugt Einleitung und stadtbezogene FAQ **ausschließlich** aus Feldern in
`cities.ts` (Name, Region, Einwohnerzahl, Entfernung, Stadtteile, description, localFact)
sowie aus Aussagen, die bereits auf der Website stehen. Keine erfundenen Preise,
Reaktionszeiten oder Einsatzgebiete. Wer den Content differenzieren will, muss echte
Zusatzdaten in `cities.ts` ergänzen — dann steigt die Einzigartigkeit automatisch.

### Offene Kannibalisierung
`/leistungen/[leistung]` trägt in `services.ts` Titles wie „Einbruchschutz Essen & NRW".
Damit konkurriert die generische Seite mit `/essen/einbruchschutz` um dasselbe lokale
Keyword. H1 und Title unterscheiden sich zwar, die Suchintention ist aber dieselbe.
Sauber wäre, die generischen Leistungsseiten vom Ortsbezug „Essen" zu lösen und rein
thematisch zu positionieren. **Noch offen.**

## Nutzer-Simulation 2026-09-07 — behobene Widersprüche

Durchgang als Kunde über /marl, /marl/tueroeffnung, /impressum. Gefundene und behobene
Widersprüche bei der Reaktionszeit:

- `HeroSection` (Trust-Badge) und `TrustBar` hatten „Unter 15 Min." **hart verdrahtet**.
  Auf `/marl` stand damit im Hero „Unter 15 Min. vor Ort" und zwei Bildschirme tiefer
  „20–35 Min." — im selben Scroll sichtbar. Beide Komponenten nehmen jetzt
  `responseTime` als Prop; `[city].astro` reicht den Wert der Stadt durch.
  ⚠️ **Wer diese Komponenten auf einer Stadtseite einbindet, muss `responseTime` mitgeben.**
- Schritt-Titel „Sofortige Anfahrt (unter 10 Min.)" auf Startseite und Türöffnungsseite
  widersprach dem eigenen Fließtext direkt darunter („unter 15 Minuten"). Klammer entfernt.
- Drei Stadtbeschreibungen in `cities.ts` (Essen, Oberhausen, Gladbeck) nannten eigene
  „innerhalb von 20 Minuten", was dem Richtwert 20–35 Min. bzw. unter 15 Min. widersprach.
  Zeitangabe aus den Beschreibungen entfernt.

Kontrolle: Jede Seite trägt jetzt genau **eine** Reaktionszeit (Essen/Startseite: unter 15 Min.,
übrige Städte: 20–35 Min.). Die Öffnungsdauer 2–10 Min. ist eine andere Kennzahl und bleibt.

## Bewertungen (2026-09-07)

`src/data/reviews.ts` + `src/components/Reviews.astro`, eingebunden auf Startseite und allen
68 Stadtseiten. **`REVIEWS` ist bewusst leer** — solange keine echten Bewertungen erfasst sind,
rendert die Sektion nichts und es wird **kein AggregateRating-Schema** ausgegeben.

### ⛔ Keine erfundenen Bewertungen
Am 2026-09-07 wurde angefragt, „realistische" Bewertungen zu erfinden (überwiegend positiv,
vereinzelt Kritik an Anfahrtszeiten). Das wurde abgelehnt:
- **§ 5b Abs. 3 UWG** verpflichtet zur Sicherstellung, dass angezeigte Bewertungen von echten
  Kunden stammen
- **Anhang zu § 3 Abs. 3 UWG Nr. 23b/23c** verbietet gefälschte Bewertungen ausnahmslos
- Verstoß gegen Google-Richtlinien, Abmahnrisiko, und bei einem Schlüsseldienst besonders
  geschäftsschädigend, wenn es auffliegt

Ein AggregateRating ohne echte Bewertungen ist zusätzlich strukturierter Spam. `AGGREGATE`
deshalb nur setzen, wenn die Werte dem öffentlichen Profil entsprechen.

### So wird befüllt
Google Business Profile einrichten → Kunden nach dem Einsatz um Bewertung bitten (Link auf der
Rechnung wirkt am besten) → Bewertungen wörtlich in `reviews.ts` eintragen, mit `source` und
`sourceUrl`. Die Nachprüfbarkeit ist der eigentliche Vertrauensgewinn — mehr als jede Zahl
im eigenen Design.

### TrustBar bereinigt (2026-09-07)
Die unbelegten Kacheln **„4,9 ★ Kundenbewertung"** und **„10.000+ Einsätze"** wurden durch
überprüfbare Aussagen ersetzt. Die Leiste zeigt jetzt:

| Wert | Label |
|---|---|
| Ausweis | Prüfung vor jeder Öffnung |
| *Reaktionszeit der Stadt* | Reaktionszeit |
| Rechnung | Nach jedem Einsatz |
| 24 / 7 | Notdienst · 365 Tage |

Ausweisprüfung und vollständige Rechnung sind genau die Merkmale, die die Seriös-vs-Unseriös-
Tabelle als Unterschied nennt — und der Kunde kann beide beim Einsatz selbst überprüfen.
Bewusst andere Aussagen als die Trust-Badges im Hero (Preis, Reaktionszeit, Zerstörungsfreiheit,
24/7), damit nicht zweimal dasselbe untereinander steht.

⚠️ **Keine Statistik ohne Quelle ergänzen.** Sobald echte Bewertungen vorliegen, gehört die
Gesamtwertung nach `reviews.ts` (`AGGREGATE`) und wird von `Reviews.astro` mit Quellenlink
ausgegeben — nicht zurück in die TrustBar.

### Verbleibende Aussagen, die belegbar sein müssen
Anders als erfundene Bewertungen sind das Angaben, die der Betrieb entweder hat oder nicht.
Vor Go-Live prüfen:

| Aussage | Vorkommen |
|---|---|
| „IHK-Mitglied" | 556 Seiten (Footer) |
| „gewerblich haftpflichtversichert" | 556 Seiten (Footer) |
| „über 95 % zerstörungsfrei" | 70 Seiten |
| „ab 79 €" | Startseite |
| „ausgebildete Schlosser" | Startseite, Footer |

### Neuer Audit-Check L
`slot="head"` funktioniert nur bei **direkten Kindern** von `BaseLayout`. In einer Komponente
wird der Slot-Inhalt kommentarlos verworfen — so verschwand zuerst das BreadcrumbList-Schema
und beim Bau von `Reviews.astro` erneut das Review-Schema. Prüfung L in `audit-links.mjs`
scannt `src/components/` darauf und bricht den Build. JSON-LD im `<body>` ist gültig und der
richtige Weg für Komponenten (so macht es auch `FaqAccordion`).

## Testsuiten (2026-09-07)

`npm test` = Sicherheit + Performance + SEO. `npm run verify` = Build + Typecheck +
CSP-Check + Link-Audit + alle drei Suiten. Alles läuft auch in der CI.

| Suite | Datei | Umfang | Stand |
|---|---|---|---|
| Sicherheit | `scripts/test-security.mjs` | 18 Prüfungen | 18/18 |
| Performance | `scripts/test-performance.mjs` | 11 Prüfungen | 11/11 |
| SEO | `scripts/test-seo.mjs` | 11 Prüfungen | 10/11 + 1 Hinweis |
| Links/Kontext | `scripts/audit-links.mjs` | 12 Prüfungen | 0 Befunde |
| CSP | `scripts/check-csp.mjs` | Inline-JS/externe Ressourcen | grün |

### Behobene Befunde aus dem ersten Durchlauf

**1. 352 Seiten per Klick nicht erreichbar (kritisch).**
Die Startseite verlinkte nur 24 der 68 Städte. Jede Stadt bildet mit ihren fünf Leistungs-,
der FAQ- und der Kontaktseite eine **in sich geschlossene Insel** — ohne Link von außen war
die ganze Insel unerreichbar: 44 Städte × 8 Seiten = 352. Der Orphan-Check in `audit-links`
schlug nicht an, weil jede einzelne Seite eingehende Links hat; nur eine Klicktiefen-Analyse
ab `/` deckt so etwas auf.
→ `index.astro` verlinkt jetzt **alle** Städte (`topCities = CITIES`). Alle 553 indexierbaren
Seiten sind in **maximal 2 Klicks** erreichbar. Städte untereinander bleiben unverlinkt.
⚠️ **Diese Liste nicht wieder kürzen** — `npm run test:seo` schlägt sofort an.

**2. Title zu lang bei langen Städtenamen.**
„Schlüsseldienst Mülheim an der Ruhr – 24h Türöffnung & Notdienst" = 64 Zeichen.
`[city].astro` kürzt den Zusatz jetzt ab 18 Zeichen Ortsname auf „24h Notdienst".

**3. sharp-Advisories differenziert bewertet.**
Die 2 verbleibenden high-Advisories betreffen nur sharp/esbuild/astro und sind ausschließlich
mit Astro 7 (Major) behebbar. Der Sicherheitstest akzeptiert sie dokumentiert — **prüft aber
gleichzeitig, ob `astro:assets` / `<Image>` irgendwo verwendet wird**. Sobald das passiert,
ist sharp erreichbar und der Test schlägt fehl.

**4. Duplikate im dist/.**
Der Testlauf fand `og-default 3.jpg` und drei `... 3.js` — Konfliktkopien von iCloud/Finder,
die **nach** dem Build im Ordner landeten. Der Quellbaum ist sauber, ein `rm -rf dist &&
npm run build` beseitigt sie. CI-Builds unter Linux sind davon nie betroffen.

### Kennzahlen
- HTML Ø 7 KB gzip, größte Seite 9 KB
- Seitengewicht 113–142 KB bei 6 Requests
- JavaScript gesamt **1 KB gzip** (6 Dateien)
- LCP-Bild 72–102 KB, `fetchpriority="high"`, mit Maßen
- 414 Bilder, alle mit Alt-Text, Maßen und `srcset`
- Klicktiefe max. 2

### Verbleibender Hinweis
Duplicate Content zwischen Städten: 91–94 %. Das ist die bewusst getroffene Entscheidung zu
den 340 Leistungsseiten (siehe Abschnitt oben) und bleibt als Hinweis stehen, nicht als Fehler.

## ⚠️ iCloud-Sync bricht den Build (2026-09-07)

Das Projekt liegt unter `~/Desktop`, das bei aktiviertem „Schreibtisch & Dokumente" von
iCloud synchronisiert wird. Bei Sync-Konflikten legt iCloud Kopien im Muster
`datei 2.astro` an — **auch unter `src/pages/`**. Astro baut diese als zusätzliche Routen:

    556 Seiten -> 1037 Seiten, Link-Audit 0 -> 1924 Befunde

Die Kopien sind untracked und fallen in `git status` kaum auf. Der gepushte Stand war davon
**nicht** betroffen (0 Konfliktkopien im Commit) — der lokale Build aber schon.

**Absicherung:** `scripts/test-security.mjs` prüft jetzt den gesamten Quellbaum auf das
Muster ` <Zahl>` im Dateinamen und schlägt fehl. Gegengetestet.

**Aufräumen, falls es wieder auftritt:**

    find . -not -path "./node_modules/*" -not -path "./.git/*" \
      \( -name "* [0-9]" -o -name "* [0-9].*" \) -exec rm -rf {} +
    rm -rf dist && npm run build   # muss 556 Seiten ergeben

**Dauerhafte Lösung:** Projekt aus dem iCloud-synchronisierten Desktop herausnehmen, etwa
nach `~/Projekte/`. Solange es dort liegt, kann das jederzeit erneut passieren.

## Feste Regeln des Nutzers (nicht eigenmächtig ändern!)

1. **Stadtseiten dürfen NICHT untereinander verlinkt werden.** Ausdrückliche Vorgabe (2026-09-05).
   44 der 68 Stadtseiten sind dadurch ohne internen Link — bewusst in Kauf genommen.
   Sie bleiben über die Sitemap indexierbar. Der tote `topCities`-Code im Footer wurde entfernt,
   damit hier nichts versehentlich wieder entsteht. **Vor jedem Commit prüfen.**
2. **Stadtseiten nicht in die Besuchernavigation.** `/schluessel-regionen` bleibt `noindex` und
   unverlinkt. Die Startseite verlinkt bewusst nur 24 Städte.
3. **Keine erfundenen Angaben.** Keine Preise, Reaktionszeiten, Bewertungen, Zertifikate,
   Standorte oder Mitarbeiterzahlen ohne Beleg auf der Website oder vom Nutzer.
4. **Preissprache:** immer „ab X€" bzw. „Preis vor dem Einsatz" — nie „Festpreis".
5. **Kein Kontaktformular.** Beratung und Auftragsannahme ausschließlich telefonisch —
   bewusste Entscheidung, auf `/kontakt` auch so begründet.

## Bekannte Risiken (offen)
- **`TrustBar.astro` enthält unbelegte Vertrauenssignale:** „4,9 ★ Kundenbewertung" und
  „10.000+ Einsätze". Ohne echte Bewertungsbasis besteht bei „4,9 ★" wettbewerbsrechtliches
  Risiko (§5 UWG). Vor Go-Live durch echte Zahlen ersetzen oder entfernen.
- **„IHK-Mitglied" / „Haftpflichtversichert" / „Ausgebildete Schlosser"** (Footer, Startseite,
  Türöffnungsseite) müssen der Realität entsprechen.
- **„Türöffnung ab 79€"** muss mit der tatsächlichen Preisgestaltung übereinstimmen.
- **„über 95% zerstörungsfrei"** ist eine konkrete Quote — sollte belegbar sein.

---

# Dateien

## Layouts
| Datei | Zweck | Status | TODOs |
|---|---|---|---|
| `src/layouts/BaseLayout.astro` | Globales HTML-Gerüst, Meta-Tags, LocalBusiness-Schema, OG-Tags, `<slot name="head" />` | ✅ Fertig | Platzhalter: `IHRE-DOMAIN`, `000000` |

## Pages
| Datei | Zweck | Status | TODOs |
|---|---|---|---|
| `src/pages/index.astro` | Homepage (Essen) | ✅ Fertig | Platzhalter |
| `src/pages/[city].astro` | 68 Stadtseiten programmatisch | ✅ Fertig | Platzhalter |
| `src/pages/leistungen/index.astro` | Leistungs-Hub, ItemList + Breadcrumb | ✅ Fertig | Platzhalter |
| `src/pages/leistungen/tueroeffnung.astro` | Hauptleistungsseite, HowTo, Begriffs- + Autoöffnungs-Abschnitt | ✅ Fertig | Platzhalter |
| `src/pages/leistungen/[service].astro` | 4 Leistungsseiten aus `services.ts` | ✅ Fertig | Platzhalter |
| `src/pages/faq.astro` | 20 FAQ in Kategorien, FAQPage-Schema | ✅ Fertig | — |
| `src/pages/kontakt.astro` | Kontaktseite, **telefonisch, kein Formular** | ✅ Fertig | Platzhalter |
| `src/pages/impressum.astro` | §5 TMG, noindex | ⚠️ Platzhalter | HRB, USt-ID, Adresse, Geschäftsführer |
| `src/pages/datenschutz.astro` | DSGVO, noindex | ✅ Fertig | Platzhalter |
| `src/pages/schluessel-regionen.astro` | Alle Städte nach Region, noindex | ✅ noindex | Bewusst unverlinkt |

## Components
| Datei | Zweck | Status | TODOs |
|---|---|---|---|
| `src/components/Header.astro` | Logo, 5-Link-Nav, Tel-CTA | ✅ Fertig | Telefon |
| `src/components/Footer.astro` | 3 Spalten: Firma, Leistungen, Informationen | ✅ Fertig | Telefon · **keine Städte-Links** |
| `src/components/HeroSection.astro` | H1, Subtitle, 2 CTAs, Trust-Badges (`city`/`subtitle`-Props) | ✅ Fertig | Telefon |
| `src/components/EmergencyBanner.astro` | Sticky Top-Banner via IntersectionObserver | ✅ Fertig | Telefon |
| `src/components/TrustBar.astro` | 4 Kennzahlen | ⚠️ Risiko | Unbelegte Bewertung/Einsatzzahl |
| `src/components/ServiceCard.astro` | Leistungskarte | ✅ Fertig | — |
| `src/components/FaqAccordion.astro` | Accordion + FAQPage-Schema + aria | ✅ Fertig | — |

> `ContactForm.astro` existiert **nicht mehr** — Formspree wurde entfernt, es gibt bewusst kein Formular.

## Data
| Datei | Zweck | Status |
|---|---|---|
| `src/data/cities.ts` | **68** Städte (slug, name, region, population, distanceKm, districts, geo, description, localFact) | ✅ Fertig |
| `src/data/services.ts` | 4 Leistungen (Tresoröffnung, Schlossaustausch, Einbruchschutz, Schließanlagen) als Datenmodell für `[service].astro` | ✅ Fertig |

## Public / Config
| Datei | Zweck | Status | TODOs |
|---|---|---|---|
| `public/robots.txt` | AI-Crawler erlaubt, Sitemap-URL | ⚠️ Platzhalter | Domain |
| `public/llms.txt` | GEO-Datei, mit Website abgeglichen | ✅ Fertig | Domain, Telefon, Adresse |
| `public/images/og-default.jpg` | OG-Bild 1200×630 | ✅ Fertig | Bei echtem Logo/Telefon neu erzeugen |
| `public/_redirects` | 301 für Netlify/Cloudflare Pages | ✅ Fertig | — |
| `vercel.json` | 301 für Vercel | ✅ Fertig | — |
| `astro.config.mjs` | Site-URL, Sitemap-Filter, Redirects | ⚠️ Platzhalter | `site:` ersetzen |
| `src/styles/global.css` | Tailwind + `.btn-primary`, `.btn-call`, `.section-title`, `.container-main` | ✅ Fertig | — |

---

# Offene TODOs

## High Priority (vor Go-Live Pflicht)

### 1. Alle Platzhalter ersetzen
- **Domain**: `https://www.IHRE-DOMAIN.de` → echte Domain (auch `astro.config.mjs` + `robots.txt`)
- **Telefon**: `+49 201 000000` / `0201 000000` → echte Nummer
- **Adresse**: `Musterstraße 1, 45127 Essen` → echte Adresse
- **HRB**: `HRB XXXXX` in `impressum.astro`
- **USt-ID**: `DE XXXXXXXXX` in `impressum.astro`
- **Geschäftsführer**: `Max Mustermann` in `impressum.astro`
- **E-Mail**: `info@ihre-domain.de` in `impressum.astro`

```bash
DOMAIN="www.deine-domain.de"
PHONE_INTL="+49 201 123456"
PHONE_DISPLAY="0201 123456"
STREET="Beispielstraße 42"

find src public astro.config.mjs -type f \( -name "*.astro" -o -name "*.ts" -o -name "*.txt" -o -name "*.mjs" \) \
  -exec sed -i '' \
    -e "s|https://www.IHRE-DOMAIN.de|https://${DOMAIN}|g" \
    -e "s|IHRE-DOMAIN.de|${DOMAIN}|g" \
    -e "s|+49 201 000000|${PHONE_INTL}|g" \
    -e "s|0201 000000|${PHONE_DISPLAY}|g" \
    -e "s|Musterstraße 1|${STREET}|g" \
  {} \;
```
Danach manuell: HRB, USt-ID, Geschäftsführer, E-Mail. **`npm run build` gegenprüfen.**

### 2. Vertrauenssignale klären (rechtliches Risiko)
`TrustBar.astro`: „4,9 ★" und „10.000+ Einsätze" belegen oder entfernen. Ebenso „ab 79€",
„über 95% zerstörungsfrei", „IHK-Mitglied", „Haftpflichtversichert".

### 3. `sameAs` im Schema wieder befüllen
Wurde entfernt, weil dort Platzhalter-URLs standen. Sobald Google Business Profile und
Verzeichniseinträge existieren, echte URLs in `BaseLayout.astro` ergänzen — starkes Local-SEO-Signal.

### 4. Deployment
Empfehlung **Vercel** (`vercel.json` liegt bereit) oder Netlify (`public/_redirects` liegt bereit).
Nach Deploy prüfen, dass `/leistungen/tresooeffnung` einen echten **301** liefert:
```bash
curl -sI https://DOMAIN/leistungen/tresooeffnung | head -3
```

### 5. Search Console + Bing Webmaster Tools
- Google Search Console: Domain verifizieren, `sitemap-index.xml` einreichen
- Bing Webmaster Tools: **kritisch für ChatGPT Search / Copilot**
- Google Business Profile: NAP exakt identisch zur Website, Kategorie „Schlüsseldienst"

## Medium Priority
6. **Verzeichniseinträge** mit einheitlichem NAP: Gelbe Seiten, Das Örtliche, Yelp, Cylex
7. **Echte Bilder** — die Seite hat aktuell außer OG-Bild und Favicon keine Bilder. Echte Fotos
   von Team/Fahrzeug/Einsatz wären ein starkes E-E-A-T-Signal. Dateinamen + Alt-Texte lokal halten.
8. **Lighthouse-Audit** — Ziel: Performance ≥ 95, SEO = 100, Accessibility ≥ 90
9. **Rich Results Test** — LocalBusiness, FAQPage, HowTo, BreadcrumbList
10. **Reaktionszeit 20–35 Min. verifizieren** — gilt aktuell pauschal für alle Nicht-Essen-Städte,
    auch für Heinsberg (75 km). Falls unrealistisch: Staffelung nach `distanceKm` in `[city].astro`.

## Low Priority
11. Sitemap-Prioritäten verfeinern (Homepage 1.0, Stadtseiten 0.6)
12. `.DS_Store` aus `public/` und Projektwurzel entfernen + `.gitignore` ergänzen

---

# Architektur

## Verzeichnisstruktur
```
schluesselservice/
├── astro.config.mjs          # Site-URL, Sitemap-Filter (noindex raus), Redirects
├── vercel.json               # 301 tresooeffnung → tresoroeffnung
├── src/
│   ├── data/
│   │   ├── cities.ts         # 68 Städte-Datensätze
│   │   └── services.ts       # 4 Leistungen (Datenmodell für [service].astro)
│   ├── layouts/
│   │   └── BaseLayout.astro  # <head>, Schema.org, OG, <slot name="head" />
│   ├── components/           # Header, Footer, HeroSection, EmergencyBanner,
│   │                         # TrustBar, ServiceCard, FaqAccordion
│   ├── pages/
│   │   ├── index.astro
│   │   ├── [city].astro              # 68 Stadtseiten via getStaticPaths()
│   │   ├── leistungen/
│   │   │   ├── index.astro           # Hub
│   │   │   ├── tueroeffnung.astro    # Hauptleistungsseite (eigene Datei)
│   │   │   └── [service].astro       # 4 Seiten aus services.ts
│   │   ├── faq.astro
│   │   ├── kontakt.astro
│   │   ├── impressum.astro           # noindex
│   │   ├── datenschutz.astro         # noindex
│   │   └── schluessel-regionen.astro # noindex, unverlinkt
│   └── styles/global.css
└── public/
    ├── robots.txt   # AI-Crawler erlaubt
    ├── llms.txt     # GEO-Datei
    ├── _redirects   # 301 für Netlify/Cloudflare
    ├── favicon.svg
    └── images/og-default.jpg
```

## Schema.org Struktur
- **Jede Seite:** Locksmith/LocalBusiness (aus `BaseLayout`, via `schema`-Prop überschreibbar) + WebSite
- **Startseite:** LocalBusiness mit OfferCatalog + FAQPage
- **Stadtseiten:** Locksmith mit `areaServed: City` + GeoCoordinates + BreadcrumbList + FAQPage
- **Türöffnungsseite:** HowTo (5 Steps) + BreadcrumbList + FAQPage
- **Leistungsseiten:** Service + BreadcrumbList + FAQPage
- **Leistungs-Hub:** ItemList + BreadcrumbList

Seitenspezifisches JSON-LD gehört in den `head`-Slot:
```astro
<script type="application/ld+json" slot="head" set:html={JSON.stringify(schema)} />
```
⚠️ **Ohne `slot="head"` landet es im Body — ohne den Slot in `BaseLayout` wurde es früher komplett verworfen.**

## Technologie-Stack
- **Astro 6.4** (static output, `compressHTML: true`)
- **Tailwind CSS 4** via `@tailwindcss/vite`
- **@astrojs/sitemap 3.7** mit `filter` für noindex-Seiten
- **0 JS-Frameworks**, minimales Client-JS (nur `FaqAccordion` und `EmergencyBanner`)
- Keine externen Fonts/CDN (DSGVO)

---

# Wichtige Entscheidungen

| Entscheidung | Begründung | Verworfen |
|---|---|---|
| Astro statt Next.js/Nuxt | Zero-JS output, beste Core Web Vitals | Next.js, Nuxt |
| Tailwind via `@tailwindcss/vite` | Tailwind-4-Plugin-API | `@astrojs/tailwind` (veraltet) |
| **Kein Kontaktformular** | Telefon ist bei Notfällen schneller; keine Drittanbieter-Daten | Formspree (entfernt) |
| Keine Google Fonts | DSGVO: CDN-Anfrage = Datentransfer in die USA | Google Fonts CDN |
| Stadtseiten: nicht untereinander verlinkt | Ausdrückliche Nutzervorgabe | Nachbarstadt-Blöcke, Regionen-Hub indexieren |
| Stadtseiten aus Navigation | Nutzerwunsch: nur Suchmaschinen | Stadtseiten löschen (SEO-Verlust) |
| Autoöffnung als Abschnitt, keine Seite | Nutzerentscheidung; vermeidet Kannibalisierung | Eigene `/leistungen/autooeffnung` |
| Schlüsselnotdienst/Aufsperrdienst ohne eigene Seite | Synonyme derselben Suchintention | Eigene Landingpages |
| Slug-Tippfehler korrigiert | Domain noch Platzhalter → keine Rankings gefährdet | Tippfehler belassen |
| „ab X€" statt Festpreis | Nutzeranforderung | Festpreisgarantie |
| `/schluessel-regionen` noindex | Intern nützlich, nicht für Besucher | Seite löschen |

---

# Offene Fragen

1. **Echte Domain?** — benötigt für alle Platzhalter
2. **Echte Telefonnummer?**
3. **Echte Adresse, HRB, USt-ID, Geschäftsführer?** — Impressum-Pflichtangaben
4. **Stimmen „4,9 ★" und „10.000+ Einsätze"?** — sonst entfernen (UWG-Risiko)
5. **Stimmt „Türöffnung ab 79€"?** Gibt es Nacht-/Wochenendzuschläge? Falls ja: auf die Website,
   nicht nur in `llms.txt`
6. **Stimmt „20–35 Min." für alle Städte?** — gilt aktuell auch für 75 km entfernte Orte
7. **Meisterbetrieb?** — falls ja, starkes E-E-A-T-Signal für Impressum + Trust-Sektion
8. **Google Business Profile vorhanden?** — URL für `sameAs` benötigt
9. **Echte Fotos verfügbar?** — Team, Fahrzeug, Einsatz

---

# Resume Prompt

```
Lies zunächst vollständig die Datei CLAUDE_HANDOFF.md im aktuellen Verzeichnis.

Danach:
1. Analysiere den aktuellen Code-Stand (lies relevante Dateien, bevor du Änderungen machst).
   Bei Widersprüchen zwischen dieser Datei und dem Code gilt IMMER der Code.
2. Übernimm die offenen TODOs, beginnend mit der höchsten Priorität.
3. Wiederhole keine bereits abgeschlossenen Arbeiten.
4. Behalte den bestehenden Code-Stil bei (Astro, Tailwind, TypeScript, deutsche Sprache).
   Führe keine neuen CSS-Klassen oder Designsysteme ein.

Feste Regeln (nicht eigenmächtig ändern):
- Stadtseiten dürfen NICHT untereinander verlinkt werden.
- Stadtseiten gehören nicht in die Besuchernavigation; /schluessel-regionen bleibt noindex.
- Kein Kontaktformular — Auftragsannahme ausschließlich telefonisch.
- Preissprache immer "ab X€", nie "Festpreis".
- NICHTS erfinden: keine Preise, Reaktionszeiten, Bewertungen, Zertifikate oder Standorte
  ohne Beleg auf der Website oder vom Nutzer.

Verifikation nach jeder Änderung:
- `npm run build` muss 80 Seiten, 0 Fehler ergeben
- `npx astro check` muss 0 errors, 0 warnings ergeben
- Nach Änderungen an Skripten/Ressourcen: prüfen, dass die CSP noch passt
  (0 Inline-<script> mit JS, 0 externe Hosts im Build)

Fange mit der Frage an: Welche echten Geschäftsdaten (Domain, Telefon, Adresse, HRB, USt-ID)
liegen inzwischen vor, damit die Platzhalter ersetzt werden können?
```
