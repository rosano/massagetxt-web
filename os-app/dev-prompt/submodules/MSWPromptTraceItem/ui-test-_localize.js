import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguages.forEach(function (languageCode) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, languageCode);
};

describe(`MSWPrompt_Localize-${ languageCode }`, function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKRoutingLanguage: languageCode,
			MSWPromptTraceItemOperation: 'alfa',
			MSWPromptTraceItemInputContent: 'bravo',
		});
	});

	it('localizes MSWPromptTraceItemInputHeading', function () {
		browser.assert.text(MSWPromptTraceItemInputHeading, uLocalized('MSWPromptTraceItemInputHeadingText'))
	});

});

});