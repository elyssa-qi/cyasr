import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [16, 32, 48, 64, 128, 256];

async function generateFavicons() {
  const inputFile = join(__dirname, '../src/designs/casrlogo.png');
  const outputDir = join(__dirname, '../public');

  // Generate favicon.ico (multi-size ICO file)
  const promises = sizes.map(size => 
    sharp(inputFile)
      .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(join(outputDir, `favicon-${size}.png`))
  );

  // Generate apple-touch-icon
  promises.push(
    sharp(inputFile)
      .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(join(outputDir, 'apple-touch-icon.png'))
  );

  await Promise.all(promises);
  console.log('Favicons generated successfully!');
}

generateFavicons().catch(console.error); 