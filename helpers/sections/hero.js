const showLogo = require('../show-logo');
const packageVersion = require('../../package.json').version;
const packageDate = require('../../package.json').date;
const align = require('wide-align');
const chalk = require('chalk');
const pressAnyKey = require('press-any-key');

async function hero() {
	console.log('');
	console.log(showLogo(80));
	// this.log('12345678901234567890                                        12345678901234567890');
	// this.log('                                       **');
	console.log(align.center('𝕯𝖆𝖘 𝕷𝖆𝖇𝖔𝖗𝖆𝖙𝖔𝖗𝖞®', 80));
	// this.log('                                       **');
	// this.log('12345678901234567890                                        12345678901234567890');
	console.log(align.center(chalk.yellow('INTERACTIVE WORKSPACE PACKAGE INSTALLER'), 80));
	console.log(align.center('v' + packageVersion + ' (' + packageDate + ')', 80));
	console.log('\n\n');
	await pressAnyKey(align.center('Press any key to get started!\n ', 80) + '\n\n' + ' '.repeat(39));
}

module.exports = hero;
