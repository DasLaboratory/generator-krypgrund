const align = require('wide-align');
const boxen = require('boxen');
const chalk = require('chalk');
const softClear = require('./soft-clear');

function header(string, length) {
	softClear();
	length = length || 80;
	return (
		'\n' + boxen(align.center(chalk.white(string), length - 2), { borderStyle: 'round', borderColor: 'red' }) + '\n'
	);
}

module.exports = header;
