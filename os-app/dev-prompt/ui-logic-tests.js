const { throws, deepEqual } = require('assert');

const mod = require('./ui-logic.js');

describe('MSWPermalinkEncode', function test_MSWPermalinkEncode() {

	it('throws if not string', function() {
		throws(function() {
			mod.MSWPermalinkEncode(null);
		}, /MSWErrorInputNotValid/);
	});

	it('returns input', function () {
		deepEqual(mod.MSWPermalinkEncode('alfa'), 'alfa')
	});

	it('encodes url characters', function () {
		deepEqual(mod.MSWPermalinkEncode('alfa?=&'), 'alfa%3F%3D%26')
	});

	it('encodes brackets', function () {
		deepEqual(mod.MSWPermalinkEncode('alfa-bravo()-charlie[]'), 'alfa-bravo%28%29-charlie%5B%5D')
	});

	it('encodes asterisk', function () {
		deepEqual(mod.MSWPermalinkEncode('alfa-bravo*'), 'alfa-bravo%2a')
	});
	
});

describe('MSWStringify', function test_MSWStringify() {

	it('returns string if string', function () {
		deepEqual(mod.MSWStringify('alfa'), 'alfa')
	});

	it('returns string if regex', function () {
		deepEqual(mod.MSWStringify(/alfa/g), '/alfa/g')
	});

	it('returns JSON.stringified', function () {
		deepEqual(mod.MSWStringify(['alfa']), JSON.stringify(['alfa']))
	});

});

describe('MSWVisualString', function test_MSWVisualString() {

	it('returns input if not string', function () {
		deepEqual(mod.MSWVisualString([]), [])
	});

	it('surrounds with quotes', function () {
		deepEqual(mod.MSWVisualString('alfa'), `'alfa'`)
	});

	it('replaces line breaks', function () {
		deepEqual(mod.MSWVisualString('alfa\nbravo'), `'alfa\\nbravo'`)
	});

});
