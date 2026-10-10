// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Seiten, die auf noindex stehen, gehören nicht in die Sitemap.
const NOINDEX_PATHS = ['/impressum', '/datenschutz', '/schluessel-regionen'];

export default defineConfig({
  site: 'https://www.schlüsseldienst-schmidt24.de',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    // Keine Inline-Assets: Astro bettet kleine Skripte sonst als
    // <script type="module"> direkt ins HTML ein. Extern ausgeliefert lässt
    // sich eine strikte CSP mit script-src 'self' fahren (ohne 'unsafe-inline'
    // und ohne bei jedem Build wechselnde Hashes).
    // Siehe public/_headers und vercel.json.
    build: { assetsInlineLimit: 0 }
  },
  redirects: {
    // Alter Slug enthielt einen Tippfehler (fehlendes "r").
    '/leistungen/tresooeffnung': '/leistungen/tresoroeffnung',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '');
        return !NOINDEX_PATHS.includes(path);
      },
    })
  ],
  compressHTML: true,
});
