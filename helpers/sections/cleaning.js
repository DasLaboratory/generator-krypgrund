const del = require('del');
const header = require('../header');
const centerText = require('../center-text');
const showMessage = require('../show-message');
const keyToContinue = require('../key-to-continue');

async function cleaning(destinationPath) {
	console.log(header('CLEANING'));
	console.log(
		centerText(
			"First, let's make sure that we have a fresh start and remove potential artifacts of previous installations.\n\nWe are going to delete the following files and folders:\n\n"
		)
	);
	console.log('                              • node_modules/');
	console.log('                              • shell-scripts/');
	console.log('                              • .browserslistrc');
	console.log('                              • .editorconfig');
	console.log('                              • .eslintignore');
	console.log('                              • .eslintrc.js');
	console.log('                              • .gitignore');
	console.log('                              • .htmlhintrc');
	console.log('                              • .npmignore');
	console.log('                              • .prettierignore');
	console.log('                              • .prettierrc.js');
	console.log('                              • .stylelintignore');
	console.log('                              • .stylelintrc.js');
	console.log('                              • babel.config.js');
	console.log('                              • package-lock.json');
	console.log('                              • package.json');
	console.log('                              • README.md\n\n');

	showMessage('CLEANING...\n(This might take a minute.)');

	del.sync([destinationPath + '/.browserslistrc']);
	del.sync([destinationPath + '/.editorconfig']);
	del.sync([destinationPath + '/.eslintignore']);
	del.sync([destinationPath + '/.eslintrc.js']);
	del.sync([destinationPath + '/.gitignore']);
	del.sync([destinationPath + '/.htmlhintrc']);
	del.sync([destinationPath + '/.npmignore']);
	del.sync([destinationPath + '/.prettierignore']);
	del.sync([destinationPath + '/.prettierrc.js']);
	del.sync([destinationPath + '/.stylelintignore']);
	del.sync([destinationPath + '/.stylelintrc.js']);
	del.sync([destinationPath + '/babel.config.js']);
	del.sync([destinationPath + '/node_modules']);
	del.sync([destinationPath + '/package-lock.json']);
	del.sync([destinationPath + '/package.json']);
	del.sync([destinationPath + '/README.md']);
	del.sync([destinationPath + '/shell-scripts']);

	showMessage('CLEANING DONE!');
	await keyToContinue('Press any key to continue...', 39);
}

module.exports = cleaning;
