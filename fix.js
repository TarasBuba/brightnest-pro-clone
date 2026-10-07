const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function fixMojibake(filePath) {
  if (!filePath.endsWith('.ts') && !filePath.endsWith('.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Remove BOM if present
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }

  // Replacements in order of decreasing length
  content = content.replace(/â€œ/g, '“');
  content = content.replace(/â€ /g, '”'); // Note the space or character? Wait, '”' is 'â€ ' ?
  content = content.replace(/â€“/g, '–');
  content = content.replace(/â€™/g, '’');
  content = content.replace(/â€”/g, '—');
  content = content.replace(/â€¢/g, '•');
  content = content.replace(/â€/g, '”'); // Fallback for the quote if it doesn't have trailing char

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed:', filePath);
  }
}

['src', 'app'].forEach(dir => {
  if (fs.existsSync(dir)) walkDir(dir, fixMojibake);
});
