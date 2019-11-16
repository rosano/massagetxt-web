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
			MSWPromptTraceItemInput: 'bravo',
		});
	});

	it('localizes MSWPromptTraceItemInputHeading', function () {
		browser.assert.text(MSWPromptTraceItemInputHeading, uLocalized('MSWPromptTraceItemInputHeadingText'))
	});

	context('MSWPromptTraceItemArguments', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				MSWPromptTraceItemOperation: 'alfa',
				MSWPromptTraceItemInput: 'bravo',
				MSWPromptTraceItemArguments: JSON.stringify(['charlie', 'delta']),
			});
		});
		
		it('localizes MSWPromptTraceItemArgumentsHeading', function () {
			browser.assert.text(MSWPromptTraceItemArgumentsHeading, uLocalized('MSWPromptTraceItemArgumentsHeadingText'))
		});
	
	});

});

});
