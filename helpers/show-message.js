const centerText = require('./center-text');

function showMessage(string) {
	console.log('\n' + centerText(string), '\n\n');
}

module.exports = showMessage;
