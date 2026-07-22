import { createCanvas, loadImage } from 'canvas';
import { writeFileSync } from 'fs';

async function generateRoundedFavicon() {
  const size = 192;
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Load the original logo
  const logo = await loadImage('public/go-my-truck-logo.png');

  // Clip to a full circle
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();

  // Draw the logo into the clipped circle
  ctx.drawImage(logo, 0, 0, size, size);

  // Save as PNG
  const buffer = canvas.toBuffer('image/png');
  writeFileSync('public/favicon-rounded.png', buffer);
  console.log('Rounded favicon saved to public/favicon-rounded.png');
}

generateRoundedFavicon().catch(console.error);
