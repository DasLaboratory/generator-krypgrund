const wrapAnsi = require('wrap-ansi');
const pad = require('pad-component');
// const stringWidth = require('string-width');
// const stringLength = require('string-length');

function centerText(input, textLength, lineLength) {
	textLength = textLength || 76;
	lineLength = lineLength || 80;
	const wrapped = wrapAnsi(input, textLength);
	const wrappedArray = wrapped.split('\n');
	let paddedArray = [];

	for (const line in wrappedArray) {
		if (Object.hasOwnProperty.call(wrappedArray, line)) {
			paddedArray[line] = pad(wrappedArray[line], lineLength, ' ');
		}
	}
	// console.log('stringWidth', stringWidth(input));
	// console.log('stringLength', stringLength(input));
	return paddedArray.join('\n');
}

module.exports = centerText;
