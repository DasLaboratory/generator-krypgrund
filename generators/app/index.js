'use strict';
const Generator = require('yeoman-generator');
const os = require('os');
const showMessage = require('../../helpers/show-message');
const clearScreen = require('../../helpers/clear-screen');
const keyToContinue = require('../../helpers/key-to-continue');
const hero = require('../../helpers/sections/hero');
const introduction = require('../../helpers/sections/introduction');
const cleaning = require('../../helpers/sections/cleaning');
const copying = require('../../helpers/sections/copying');
const installing = require('../../helpers/sections/installing');
const infoVSCode = require('../../helpers/sections/info-vscode');
const theEnd = require('../../helpers/sections/end');

const krypgrundGenerator = class extends Generator {
	/* INITIALIZING - Your initialization methods (checking current project state, getting configs, etc) */
	async initializing() {
		clearScreen(this);
		await hero();
		await introduction(this);
	}

	/* PROMPTING - Where you prompt users for options (where you'd call this.prompt()) */
	async prompting() {}

	/* CONFIGURING - Saving configurations and configure the project (creating .editorconfig files and other metadata files) */
	configuring() {
		this.destinationRoot(os.homedir() + '/krypgrund');
	}

	/* DEFAULT - If the method name doesn't match a priority, it will be pushed to this group. */
	async default() {
		console.log(this.destinationPath());
		await cleaning(this.destinationPath());
	}

	/* WRITING - Where you write the generator specific files (routes, controllers, etc) */
	async writing() {
		await copying(this);
	}

	/* CONFLICTS - Where conflicts are handled (used internally) */
	conflicts() {}

	/* INSTALL - Where installations are run (npm, bower) */
	async install() {
		showMessage('COPYING DONE!');
		await keyToContinue('Press any key to continue...', 39);
		await installing(this);
	}

	/* END - Called last, cleanup, say good bye, etc */
	async end() {
		await infoVSCode();
		theEnd();
	}
};

module.exports = krypgrundGenerator;
