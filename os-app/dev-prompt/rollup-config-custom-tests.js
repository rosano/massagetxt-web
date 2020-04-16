const { throws, deepEqual } = require('assert');

const mainModule = require('./rollup-config-custom.js');

describe('MSWPromptRollupConfigCustom', function test_MSWPromptRollupConfigCustom() {

	it('throws error if not object', function() {
		throws(function() {
			mainModule.MSWPromptRollupConfigCustom(null);
		}, /MSWErrorInputNotValid/);
	})

});
