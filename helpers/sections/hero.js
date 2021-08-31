const showLogo = require('../show-logo');
const keyToContinue = require('../key-to-continue');
const packageVersion = require('../../package.json').version;
const packageDate = require('../../package.json').date;
const align = require('wide-align');
const chalk = require('chalk');

async function hero() {
	console.log('');
	console.log(showLogo(80));
	console.log(align.center('𝕯𝖆𝖘 𝕷𝖆𝖇𝖔𝖗𝖆𝖙𝖔𝖗𝖞®', 80));
	console.log(align.center(chalk.yellow('INTERACTIVE WORKSPACE PACKAGE INSTALLER'), 80));
	console.log(align.center('v' + packageVersion + ' (' + packageDate + ')', 80) + '\n\n');
	await keyToContinue('Press any key to get started!', 39);
}

module.exports = hero;
