const { throws, deepEqual } = require('assert');

const mod = require('./rollup-config-custom.js');

describe('MSWPromptRollupConfigCustom', function test_MSWPromptRollupConfigCustom() {

	it('throws error if not object', function() {
		throws(function() {
			mod.MSWPromptRollupConfigCustom(null);
		}, /MSWErrorInputNotValid/);
	})

});
