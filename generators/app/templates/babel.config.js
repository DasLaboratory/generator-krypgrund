module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				useBuiltIns: 'usage',
				corejs: 3,
				targets: {
					browsers: ['defaults', 'ie >= 11']
				},
				// debug: true,
				modules: 'none'
			}
		]
	]
	// plugins: ['add-module-exports']
};
