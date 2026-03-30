import fs from 'fs';

const html = fs.readFileSync('index.html', 'utf-8');
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);

if (styleMatch) {
  const cssContent = styleMatch[1];
  let indexCss = fs.readFileSync('src/index.css', 'utf-8');
  indexCss += '\n' + cssContent;
  fs.writeFileSync('src/index.css', indexCss);
  
  // Remove the style block from index.html
  const newHtml = html.replace(/<style>[\s\S]*?<\/style>/, '<link rel="stylesheet" href="/src/index.css">');
  fs.writeFileSync('index.html', newHtml);
  console.log('CSS extracted successfully!');
} else {
  console.log('No style tag found.');
}
