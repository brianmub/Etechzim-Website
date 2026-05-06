const jimp = require('jimp');
// Quick fallback in case of different export structures
const Jimp = jimp.Jimp || jimp.default || jimp;

async function removeWhiteBackground() {
  try {
    const image = await Jimp.read('public/logo.png');
    
    // Scan all pixels
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      // If the pixel is white (or very close to white)
      if (r > 240 && g > 240 && b > 240) {
        // Set alpha channel to 0 (transparent)
        this.bitmap.data[idx + 3] = 0;
      }
    });

    await image.writeAsync('public/logo-transparent.png');
    console.log('Successfully created transparent logo!');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

removeWhiteBackground();
