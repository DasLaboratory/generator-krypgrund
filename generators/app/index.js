'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const os = require('os');

module.exports = class extends Generator {
	prompting() {
		// Have Yeoman greet the user.
		this.log(yosay(`Welcome to the cat's meow ${chalk.red('@das.laboratory/generator-krypgrund')} generator!`));

		const prompts = [
			{
				type: 'confirm',
				name: 'someAnswer',
				message: 'Would you like to enable this option?',
				default: true
			}
		];

		return this.prompt(prompts).then(props => {
			// To access props later use this.props.someAnswer;
			this.props = props;
		});
	}

	paths() {
		this.destinationRoot(os.homedir() + '/krypgrund-666');
		// returns '~/projects'

		// this.destinationPath('index.js');
		// returns '~/projects/index.js'
	}

	writing() {
		this.fs.copy(this.templatePath('dummyfile.txt'), this.destinationPath('dummyfile.txt'));
		this.fs.copy(this.templatePath('package.json'), this.destinationPath('package.json'));
		this.fs.copy(this.templatePath('index.js'), this.destinationPath('index.js'));
	}

	install() {
		this.installDependencies({
			bower: false
		});
	}
};
