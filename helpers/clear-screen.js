function clearScreen(context) {
	const isMac = process.platform === 'darwin';

	if (isMac) {
		context.spawnCommandSync('clear');
		context.log('[3J');
	}
}

module.exports = clearScreen;
