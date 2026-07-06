import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://gomytruck.com';

// Define all routes manually or read from a config
const routes = [
  '/',
  '/truck',
  '/bike',
  '/packers-and-movers',
  '/services',
  '/enterprise',
  '/about',
  '/support',
  '/driver-partner',
  '/workforce',
  '/contact',
  '/pricing',
  '/blog',
  // Silo routes
  '/kolkata/truck-booking',
  '/barrackpore/truck-booking',
  '/kolkata/mini-truck-booking',
  '/kolkata/pickup-truck-rent',
  '/kolkata/goods-transport',
  '/kolkata/tata-ace-booking',
  '/barrackpore/goods-transport',
  '/services/transport-for-msmes',
  '/services/commercial-goods-transport',
  '/services/fleet-partner-registration-india',
  '/intercity/kolkata',
  '/local-transport/kolkata',
  // Legal
  '/privacy-policy',
  '/terms',
  '/partner-terms',
  '/refund-cancellation'
];

function getFileDate(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  } catch (error) {
    return new Date().toISOString().split('T')[0]; // Fallback to today
  }
}

function generateSitemap() {
  const publicDir = path.join(__dirname, 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  // App.jsx is a good proxy for major route changes, but we'll use it as a fallback
  const appJsxDate = getFileDate(path.join(__dirname, 'src', 'App.jsx'));

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  routes.forEach(route => {
    // Determine changefreq based on route importance
    let changefreq = 'weekly';

    if (route === '/') {
      changefreq = 'daily';
    } else if (route.includes('/kolkata') || route.includes('/barrackpore')) {
      changefreq = 'daily'; // Local landing pages are high priority and change often
    } else if (route.includes('privacy') || route.includes('terms')) {
      changefreq = 'monthly';
    }

    const lastModDate = appJsxDate; 

    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${route}</loc>\n`;
    xml += `    <lastmod>${lastModDate}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  fs.writeFileSync(sitemapPath, xml);
  console.log(`✅ sitemap.xml successfully generated at ${sitemapPath}`);
}

generateSitemap();
