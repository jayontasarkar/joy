#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const log = console.log;
const dim = chalk.dim;
const twitterClr = chalk.hex('#1da1f2').bold;
const githubClr = chalk.hex('#6cc644').bold;
// Welcome header
welcome({
  title: ' Jayonta Sarkar ',
  tagLine: 'Howdy! nice to meet ya!',
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#6937ff`,
  color: `#000000`,
  bold: true,
  clear: true,
});

log(`${chalk.italic(`Passionate software engineer - Love to play with code.
I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me.`)}

🌎 ${twitterClr(`Twitter`)}: ${dim(`https://twitter.com/jayontasarkar`)}
🌓 ${githubClr(`Github`)}: ${dim(`https://github.com/jayontasarkar`)}
`);
