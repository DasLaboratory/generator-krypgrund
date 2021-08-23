const os = require('os');
const header = require('../header');
const centerText = require('../center-text');

async function introduction() {
	console.log(header('INTRODUCTION', 80));
	console.log(
		centerText(
			'This script is about to set up a workspace that is equipped with a whole set of linting and formatting rules. They will help you to avoid small and not so small errors, follow best practices, and relieve you from thinking about keeping your code formatted.'
		) + '\n'
	);
	console.log(centerText('The workspace will be installed into this folder:') + '\n');
	console.log(centerText(os.homedir() + '/krypgrund') + '\n');
	console.log(
		centerText(
			"Why 'krypgrund', you ask? Well, that's the Swedish word for crawl space which I thought sounds a lot better!"
		) + '\n'
	);
	console.log(
		centerText(
			"Why 'crawl space', you ask? Well, because you probably don't want to see these weird config files again, if you don't have to, right? So 'crawl space' makes sense, I thought."
		) + '\n'
	);
	console.log(
		centerText(
			"If you don't like that location, you can rename the 'krypgrund' folder later, using a name that you feel better about. I would recommend leaving the folder (however it is called) at this location, though. And if you drag the 'interactive_workspace' folder (that's where the actual projects are supposed to go) later into the finder's sidebar, you'll never have to see the content of this folder again!\n\nJust like how a good crawl space should work.\n\n😄\n\n"
		) + '\n'
	);
}

module.exports = introduction;
