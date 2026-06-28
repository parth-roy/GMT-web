const fs = require('fs');
const path = require('path');

const files = [
  'src/components/truck/AppDownloadBanner.jsx',
  'src/components/DriverSection.jsx',
  'src/components/EstimateModal.jsx',
  'src/components/Footer.jsx',
  'src/components/Navbar.jsx',
  'src/components/Testimonials.jsx',
  'src/pages/ContactPage.jsx',
  'src/pages/IntercityTransportPage.jsx',
  'src/pages/LocalTransportPage.jsx',
  'src/pages/PricingPage.jsx',
  'index.html',
  'package.json'
];

files.forEach(file => {
  const p = path.join(__dirname, file);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    // Perform exact replacements
    content = content.replace(/VahanLogistics/g, 'GoMyTruck');
    content = content.replace(/Vahan Logistics/g, 'GoMyTruck');
    content = content.replace(/Vahan logistics/gi, 'GoMyTruck');
    content = content.replace(/vahanlogistics\.com/g, 'gomytruck.com');
    content = content.replace(/contact@vahanlogistics\.com/g, 'contact@gomytruck.com');
    content = content.replace(/support@vahanlogistics\.com/g, 'support@gomytruck.com');
    content = content.replace(/vahan-logistics/g, 'gomytruck');
    
    fs.writeFileSync(p, content);
    console.log('Updated ' + file);
  } else {
    console.log('File not found: ' + file);
  }
});
