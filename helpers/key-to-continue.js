const pressAnyKey = require('press-any-key');
const align = require('wide-align');

async function keyToContinue(message, padding) {
	await pressAnyKey(align.center(message + '\n ', 80) + '\n\n' + ' '.repeat(padding));
}

module.exports = keyToContinue;
