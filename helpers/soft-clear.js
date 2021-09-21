const execSync = require('child_process').execSync;

function softClear() {
	const isMac = process.platform === 'darwin';

	if (isMac) {
		execSync('clear', {
			stdio: 'inherit'
		});
	}
}

module.exports = softClear;
