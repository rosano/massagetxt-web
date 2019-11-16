const { throws, deepEqual } = require('assert');

const mainModule = require('./ui-logic.js');

describe('MSWPermalinkEncode', function testMSWPermalinkEncode() {

	it('throws if not string', function() {
		throws(function() {
			mainModule.MSWPermalinkEncode(null);
		}, /MSWErrorInputNotValid/);
	});

	it('returns input', function () {
		deepEqual(mainModule.MSWPermalinkEncode('alfa'), 'alfa')
	});

	it('encodes url characters', function () {
		deepEqual(mainModule.MSWPermalinkEncode('alfa?=&'), 'alfa%3F%3D%26')
	});

	it('encodes brackets', function () {
		deepEqual(mainModule.MSWPermalinkEncode('alfa-bravo()-charlie[]'), 'alfa-bravo%28%29-charlie%5B%5D')
	});

	it('encodes asterisk', function () {
		deepEqual(mainModule.MSWPermalinkEncode('alfa-bravo*'), 'alfa-bravo%2a')
	});
	
});

describe('MSWStringify', function testMSWStringify() {

	it('returns string if string', function () {
		deepEqual(mainModule.MSWStringify('alfa'), 'alfa')
	});

	it('returns JSON.stringified', function () {
		deepEqual(mainModule.MSWStringify(['alfa']), JSON.stringify(['alfa']))
	});

});

describe('MSWVisualString', function testMSWVisualString() {

	it('returns input if not string', function () {
		deepEqual(mainModule.MSWVisualString([]), [])
	});

	it('surrounds with quotes', function () {
		deepEqual(mainModule.MSWVisualString('alfa'), `'alfa'`)
	});

	it('replaces line breaks', function () {
		deepEqual(mainModule.MSWVisualString('alfa\nbravo'), `'alfa\\nbravo'`)
	});

});
