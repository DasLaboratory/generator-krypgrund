'use strict';
const Generator = require('yeoman-generator');
// const inquirer = require('inquirer');
// const chalk = require('chalk');
// const yosay = require('yosay');
const os = require('os');
const centerText = require('../../helpers/center-text');
// const pad = require('pad-component');
const hero = require('../../helpers/sections/hero');
const introduction = require('../../helpers/sections/introduction');
const cleaning = require('../../helpers/sections/cleaning');
const copying = require('../../helpers/sections/copying');
// const clearScreen = require('../../helpers/clear-screen');
// const align = require('wide-align');
const destination = os.homedir() + '/krypgrund-dev';

const krypgrundGenerator = class extends Generator {
	initializing() {
		console.log('INITIALIZING');
	}

	async prompting() {
		console.log('PROMPTING');
		// this.spawnCommandSync('clear');
		// console.log('[3J');

		await hero();
		introduction();
		// Have Yeoman greet the user.
		// this.log(
		// 	yosay(`Welcome to the cat's meow ${chalk.red('@das.laboratory/krypgrund')} generator!`, { maxLength: 26 })
		// );

		const prompts = [
			// {
			// 	type: 'confirm',
			// 	name: 'someAnswer',
			// 	message: 'Does that sound like something you would like to do?',
			// 	default: true
			// },
			{
				type: 'list',
				name: 'start',
				message: 'Does that sound like something you might enjoy?',
				choices: ["Yeah! I'm in!", 'Nah, thanks. Maybe some other time.']
			}
		];

		return this.prompt(prompts).then(props => {
			console.log('PROMPTING -> then');
			// To access props later use this.props.someAnswer;
			this.props = props;
			if (props.start === 'Nah, thanks. Maybe some other time.') {
				this.log(centerText("\n\nOkay, I understand. It's not for everyone.\n\n🙁\n\nRain check?\n\n🥺\n"));
				process.exit(0);
			} else {
				this.log(centerText("\n\nAlright! Let's do this!\n\n😃\n\n"));
			}
		});
	}

	paths() {
		console.log('PATHS');
		this.destinationRoot(destination);
	}

	configuring() {
		console.log('CONFIGURING');
	}

	default() {
		console.log('DEFAULT');
	}

	writing() {
		console.log('WRITING');
		cleaning(this.destinationPath());
		copying();
		this.fs.copy(this.templatePath('*'), this.destinationPath(), {
			globOptions: { dot: true, ignore: [this.templatePath('.DS_Store')] }
		});
		// 	console.log(centerText('Done!'), '\n\n');
	}

	conflicts() {
		console.log('CONFLICTS');
	}

	install() {
		this.log('\n' + centerText('WRITING DONE!'), '\n\n');
		console.log('INSTALL');
		// this.installDependencies({
		// 	bower: false
		// });
	}

	end() {
		console.log('END');
		const actions = Object.getPrototypeOf(Generator);
		this.log(actions);
	}
};

module.exports = krypgrundGenerator;
