const QRCode = require('qrcode');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

async function createQR() {
  const url = 'https://play.google.com/store/apps/details?id=com.gomytruck.customer&pcampaignid=web_share';
  
  // Create a canvas for the QR code
  const qrCanvas = createCanvas(400, 400);
  await QRCode.toCanvas(qrCanvas, url, {
    errorCorrectionLevel: 'H',
    margin: 2,
    color: {
      dark: '#000000',
      light: '#ffffff'
    },
    width: 400
  });

  const ctx = qrCanvas.getContext('2d');
  
  // Load the logo
  const logo = await loadImage('public/go-my-truck-logo.png');
  
  // Calculate center position for the logo (make it about 25% of the QR size)
  const logoSize = 100;
  const x = (qrCanvas.width - logoSize) / 2;
  const y = (qrCanvas.height - logoSize) / 2;
  
  // Draw a white circle/square behind the logo for better visibility
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.roundRect(x - 5, y - 5, logoSize + 10, logoSize + 10, 15);
  ctx.fill();
  
  // Draw the logo
  ctx.drawImage(logo, x, y, logoSize, logoSize);
  
  // Save to file
  const buffer = qrCanvas.toBuffer('image/png');
  fs.writeFileSync('public/download-qr.png', buffer);
  console.log('QR Code generated successfully!');
}

createQR().catch(console.error);
