import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import fsPromises from 'fs/promises';

const inputDir = './src/assests/images/memories';
const outputDir = './src/assests/images/memories_optimized';

async function compressImages() {
  console.log('🚀 Starting image optimization process...');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = await fsPromises.readdir(inputDir);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

  console.log(`Found ${imageFiles.length} images to compress. This will take a moment...\n`);

  let savedBytes = 0;

  for (let i = 0; i < imageFiles.length; i++) {
    const file = imageFiles[i];
    const inputPath = path.join(inputDir, file);
    // Convert to webp for ultra-small file sizes
    const newFileName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputPath = path.join(outputDir, newFileName);

    try {
      const metadata = await sharp(inputPath).metadata();
      const originalSize = fs.statSync(inputPath).size;

      // Resize if it's crazily massive (e.g. > 1500px wide) and save as 80% quality WebP
      await sharp(inputPath)
        .resize({ width: 1080, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);

      const newSize = fs.statSync(outputPath).size;
      const savings = originalSize - newSize;
      savedBytes += savings;

      console.log(`[${i + 1}/${imageFiles.length}] ✅ Compressed ${file} -> ${(newSize / 1024 / 1024).toFixed(2)} MB`);
    } catch (e) {
      console.error(`❌ Failed to compress ${file}:`, e.message);
    }
  }

  console.log(`\n🎉 All done! You saved ${(savedBytes / 1024 / 1024).toFixed(2)} MB of space!`);
  console.log(`Now make sure to use '.webp' in your Vite imports or update the folder path to use 'memories_optimized'`);
}

compressImages();
