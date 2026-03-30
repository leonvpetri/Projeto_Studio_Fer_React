import fs from 'fs';

const html = fs.readFileSync('index.html', 'utf-8');

// The regex will match from <nav class="nav" id="nav"> up to the end of <section class="hero">
const newHtml = html.replace(/<nav class="nav" id="nav">[\s\S]*?<\/section>/, '');

fs.writeFileSync('index.html', newHtml);
console.log('HTML cleaned successfully!');
