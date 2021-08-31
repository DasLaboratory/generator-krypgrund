const Table = require('cli-table3');
const header = require('../header');
const centerText = require('../center-text');
const os = require('os');
const chalk = require('chalk');
const keyToContinue = require('../key-to-continue');

async function copying(context) {
	console.log(header('COPYING', 80));
	console.log(
		centerText('We are now going to copy the following configuration files to the krypgrund folder:') + '\n\n'
	);

	// instantiate
	// var table = new Table({
	// 	head: ['TH 1 label', 'TH 2 label'],
	// 	colWidths: [null, 100]
	// });

	// // table is an Array, so you can `push`, `unshift`, `splice` and friends
	// table.push(['First value', 'Second value'], ['First value', 'Second value']);

	// console.log(table.toString());

	var table2 = new Table({
		head: [chalk.red.bold('Config file'), chalk.red.bold('Tool')],
		colWidths: [18, 57],
		wordWrap: true
	});

	table2.push(
		{
			'.browserslistrc':
				chalk.white.bold('Browserslist:') +
				' the config to share target browsers and Node.js versions between different front-end tools. (https://github.com/browserslist/browserslist)'
		},
		{
			'.editorconfig':
				chalk.white.bold('EditorConfig:') +
				' helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. (https://editorconfig.org)'
		},
		{
			'.eslintrc.js, .eslintignore':
				chalk.white.bold('ESLint:') + ' find and fix problems in your JavaScript code. (https://eslint.org)'
		},
		{
			'.htmlhintrc':
				chalk.white.bold('HTMLHint:') + ' find and fix problems in your JavaScript code. (https://htmlhint.com)'
		},
		{
			'.prettierrc.js, .prettierignore':
				chalk.white.bold('Prettier:') + ' an opinionated code formatter. (https://prettier.io) '
		},
		{
			'.stylelintrc.js, .stylelintignore':
				chalk.white.bold('stylelint:') + ' find and fix problems in your CSS/SCSS. (https://stylelint.io)'
		},
		{
			'babel.config.js':
				chalk.white.bold('Babel:') +
				' a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript. (https://babeljs.io)'
		},
		{ 'package.json': chalk.white.bold('npm:') + " the world's largest software registry. (https://npmjs.com)" }
	);

	const tableString = table2.toString().split('\n').join('\n ');
	console.log(' ' + tableString + '\n\n');
	await keyToContinue('Press any key to continue...', 39);

	context.fs.copy(context.templatePath('*'), context.destinationPath(), {
		globOptions: { dot: true, ignore: [context.templatePath('.DS_Store')] }
	});
	context.fs.copy(context.templatePath('.eslintignore'), os.homedir() + '/.eslintignore', { noGlob: true });
	context.fs.copy(context.templatePath('.stylelintignore'), os.homedir() + '/.stylelintignore', { noGlob: true });
	context.fs.copy(context.templatePath('.prettierignore'), os.homedir() + '/.prettierignore', { noGlob: true });
}

module.exports = copying;
