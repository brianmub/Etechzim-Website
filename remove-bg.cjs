const jimp = require('jimp');
// Quick fallback in case of different export structures
const Jimp = jimp.Jimp || jimp.default || jimp;

async function removeWhiteBackground() {
  try {
    const image = await Jimp.read('public/logo.png');
    
    // Guess background color from top-left pixel
    const bgR = image.bitmap.data[0];
    const bgG = image.bitmap.data[1];
    const bgB = image.bitmap.data[2];
    console.log(`Detected background color: RGB(${bgR}, ${bgG}, ${bgB})`);

    // Scan all pixels
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      // If the pixel is very close to the detected background color
      const diff = Math.sqrt(
        Math.pow(r - bgR, 2) + 
        Math.pow(g - bgG, 2) + 
        Math.pow(b - bgB, 2)
      );

      if (diff < 45) {
        // Set alpha channel to 0 (transparent)
        this.bitmap.data[idx + 3] = 0;
      }
    });

    await image.write('public/logo-transparent.png');
    console.log('Successfully created transparent logo!');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

removeWhiteBackground();
