const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
};

describe(`MSWPrompt_Localize-${ OLSKRoutingLanguage }`, function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKRoutingLanguage,
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
