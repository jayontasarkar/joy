#!/usr/bin/env node
const init = require('./utils/init.js');
const chalk = require('chalk');
const log = console.log;
const dim = chalk.dim;
const twitterClr = chalk.hex('#1da1f2').bold;
const githubClr = chalk.hex('#6cc644').bold;

(() => {
  init();

  log(`${chalk.italic(`Passionate software engineer - Love to play with code.
I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me.`)}

🌎 ${twitterClr(`Twitter`)}: ${dim(`https://twitter.com/jayontasarkar`)}
🌓 ${githubClr(`Github`)}: ${dim(`https://github.com/jayontasarkar`)}
`);
})();
