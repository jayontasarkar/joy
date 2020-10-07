const pkgJSON = require('./../package.json');
const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
module.exports = () => {
  // Welcome header
  checkNode('10');

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
};
