const { throws, deepEqual } = require('assert');

const mainModule = require('./ui-logic.js');

describe('MSTPermalinkEncode', function testMSTPermalinkEncode() {

	it('throws if not string', function() {
		throws(function() {
			mainModule.MSTPermalinkEncode(null);
		}, /MSTErrorInputNotValid/);
	});

	it('returns input', function () {
		deepEqual(mainModule.MSTPermalinkEncode('alfa'), 'alfa')
	});

	it('encodes url characters', function () {
		deepEqual(mainModule.MSTPermalinkEncode('alfa?=&'), 'alfa%3F%3D%26')
	});

	it('encodes brackets', function () {
		deepEqual(mainModule.MSTPermalinkEncode('alfa-bravo()-charlie[]'), 'alfa-bravo%28%29-charlie%5B%5D')
	});

	it('encodes asterisk', function () {
		deepEqual(mainModule.MSTPermalinkEncode('alfa-bravo*'), 'alfa-bravo%2a')
	});
	
});

describe('MSTStringify', function testMSTStringify() {

	it('returns string if string', function () {
		deepEqual(mainModule.MSTStringify('alfa'), 'alfa')
	});

	it('returns JSON.stringified', function () {
		deepEqual(mainModule.MSTStringify(['alfa']), JSON.stringify(['alfa']))
	});

});
