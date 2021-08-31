const header = require('../header');
const centerText = require('../center-text');

function theEnd() {
	console.log(header('THE END', 80));
	console.log(centerText('🌟    Guess we are done here!    🌟') + '\n\n');
}

module.exports = theEnd;
