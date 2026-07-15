import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { INDEXABLE_ROUTES } from './route-manifest.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://gomytruck.com';

function generateSitemap() {
  const publicDir = path.join(__dirname, 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  INDEXABLE_ROUTES.forEach(route => {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${route}</loc>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  fs.writeFileSync(sitemapPath, xml);
  console.log(`✅ sitemap.xml successfully generated at ${sitemapPath}`);
}

generateSitemap();
