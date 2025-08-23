const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to check if a file is an image
function isImageFile(filename) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  const ext = path.extname(filename).toLowerCase();
  return imageExtensions.includes(ext);
}

// Function to get file size in MB
function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

// Function to optimize images using sharp (if available)
function optimizeImage(inputPath, outputPath) {
  try {
    // Check if sharp is available
    const sharp = require('sharp');
    
    return sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => {
        console.log(`✅ Optimized: ${path.basename(inputPath)}`);
        return true;
      })
      .catch(err => {
        console.error(`❌ Failed to optimize ${inputPath}:`, err.message);
        return false;
      });
  } catch (error) {
    console.log(`⚠️  Sharp not available, skipping optimization for ${inputPath}`);
    return Promise.resolve(false);
  }
}

// Function to process directory recursively
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (stat.isFile() && isImageFile(item)) {
      const size = getFileSize(fullPath);
      console.log(`📁 Found image: ${item} (${size} MB)`);
      
      if (parseFloat(size) > 0.5) { // Only optimize images larger than 500KB
        const outputPath = fullPath.replace(/\.[^/.]+$/, '.webp');
        optimizeImage(fullPath, outputPath);
      }
    }
  });
}

// Main execution
console.log('🚀 Starting image optimization...\n');

const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (fs.existsSync(imagesDir)) {
  processDirectory(imagesDir);
  console.log('\n✅ Image optimization completed!');
} else {
  console.log('❌ Images directory not found');
}

console.log('\n💡 Tips for better performance:');
console.log('1. Use WebP format for images when possible');
console.log('2. Compress images before adding to the project');
console.log('3. Use appropriate image sizes for different screen sizes');
console.log('4. Consider using Next.js Image component with proper sizing');
