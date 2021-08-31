function clearScreen(context) {
	context.spawnCommandSync('clear');
	context.log('[3J');
}

module.exports = clearScreen;
