module.exports = {
	MSWPromptRollupConfigCustom (inputData, options = {}) {
		if (typeof inputData !== 'object' || inputData === null) {
			throw new Error('MSWErrorInputNotValid');
		}

		inputData.plugins.push(require('rollup-plugin-json')());
		inputData.plugins.push(require('rollup-plugin-node-builtins')());
		inputData.plugins.push(require('rollup-plugin-node-globals')());

		return inputData;
	},
	OLSKRollupConfigCustom (inputData, options) {
		return module.exports.MSWPromptRollupConfigCustom(inputData, options);
	}
};
