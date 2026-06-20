// One-off generator for the social share image (public/og-image.png).
// Run: node scripts/make-og.mjs
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="78%" cy="14%" r="60%">
      <stop offset="0%" stop-color="#4D8BFF" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#4D8BFF" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="10%" cy="92%" r="55%">
      <stop offset="0%" stop-color="#2F6FE0" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#2F6FE0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0B1F44"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>

  <!-- node mark -->
  <circle cx="600" cy="168" r="78" fill="#16223f"/>
  <g transform="translate(600,168) scale(1.7) translate(-50,-46)">
    <line x1="50" y1="50" x2="50" y2="33" stroke="#fff" stroke-width="2.4" opacity="0.5"/>
    <line x1="50" y1="50" x2="35.3" y2="58.5" stroke="#fff" stroke-width="2.4" opacity="0.5"/>
    <line x1="50" y1="50" x2="64.7" y2="58.5" stroke="#fff" stroke-width="2.4" opacity="0.5"/>
    <circle cx="50" cy="33" r="4.2" fill="#fff"/>
    <circle cx="35.3" cy="58.5" r="4.2" fill="#fff"/>
    <circle cx="64.7" cy="58.5" r="4.2" fill="#fff"/>
    <circle cx="50" cy="50" r="8.4" fill="#4D8BFF"/>
  </g>

  <text x="600" y="375" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="104" font-weight="800" fill="#ffffff" letter-spacing="-2">Corebalt</text>
  <text x="600" y="452" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="500" fill="#cdd8ee">Software that runs your whole business</text>
  <text x="600" y="546" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="700" fill="#5FB8FF" letter-spacing="1">corebalt.co.ke</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og-image.png');
console.log('wrote public/og-image.png');
