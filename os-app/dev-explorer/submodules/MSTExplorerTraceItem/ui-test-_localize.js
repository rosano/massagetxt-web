import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguages.forEach(function (languageCode) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, languageCode);
};

describe(`MSTExplorer_Localize-${ languageCode }`, function () {

	before(function() {
		return browser.visit(OLSKTestingCanonicalFor(kDefaultRoute.OLSKRoutePath, {
			OLSKRoutingLanguage: languageCode,
			MSTExplorerTraceItemOperation: 'alfa',
			MSTExplorerTraceItemInputContent: 'bravo',
		}));
	});

	it('localizes MSTExplorerTraceItemInputHeading', function () {
		browser.assert.text(MSTExplorerTraceItemInputHeading, uLocalized('MSTExplorerTraceItemInputHeadingText'))
	});

});

});
