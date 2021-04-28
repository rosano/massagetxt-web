const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
};

describe('MSWExplore_Localize-' + OLSKRoutingLanguage, function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKRoutingLanguage,
		});
	});

	it('localizes title', function() {
		browser.assert.text('title', uLocalized('MSWExploreTitle'))
	});

	it('localizes meta[description]', function() {
		browser.assert.attribute('meta[name=description]', 'content', uLocalized('MSWExploreDescription'))
	});

	it('localizes MSWExploreGuideLink', function () {
		browser.assert.text(MSWExploreGuideLink, uLocalized('MSWExploreGuideLinkText'));
	});

});

});
