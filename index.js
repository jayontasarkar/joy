#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
// Welcome header
welcome({
  title: pkgJSON.name,
  tagline: 'Howdy! nice to meet ya!',
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

console.log(`
Hi! I'm Jayonta Sarkar.

Passionate software engineer - Love to play with code.
I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me.

🌎 Twitter: https://twitter.com/jayontasarkar
🌓 Github: https://github.com/jayontasarkar
`);
