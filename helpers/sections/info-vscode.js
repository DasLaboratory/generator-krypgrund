const showVSCodeInfo = require('@das.laboratory/vscode-config-interactive/dist/bundle.cjs');

async function infoVSCode() {
	await showVSCodeInfo();
}

module.exports = infoVSCode;
