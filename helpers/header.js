const align = require('wide-align');
const boxen = require('boxen');
const chalk = require('chalk');

function header(string, length) {
	return boxen(align.center(chalk.white(string), length - 2), { borderStyle: 'round', borderColor: 'red' }) + '\n';
}

module.exports = header;
