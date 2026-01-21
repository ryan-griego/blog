const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../.contentlayer/generated/index.mjs');

try {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace 'assert' with 'with' in import statements
    content = content.replace(/assert\s*{\s*type:\s*'json'\s*}/g, "with { type: 'json' }");
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('✅ Fixed contentlayer import assertions');
  }
} catch (error) {
  console.error('Error fixing contentlayer:', error);
}
