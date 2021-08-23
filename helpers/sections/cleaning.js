const del = require('del');
const header = require('../header');
const centerText = require('../center-text');

function cleaning(destinationPath) {
	console.log(header('CLEANING', 80));
	del.sync([destinationPath + '/package-lock.json']);
	del.sync([destinationPath + 'node_modules']);
	console.log(centerText('CLEANING DONE! '), '\n\n');
}

module.exports = cleaning;
