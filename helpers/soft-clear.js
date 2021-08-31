const execSync = require('child_process').execSync;

function softClear() {
	execSync('clear', {
		stdio: 'inherit'
	});
}

module.exports = softClear;
