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

	it.skip('localizes title', function() {
		return browser.assert.text('title', uLocalized('MSWExploreTitle'))
	});

	it('localizes meta[description]', function() {
		return browser.assert.attribute('meta[name=description]', 'content', uLocalized('MSWExploreDescription'))
	});

	it('localizes MSWExploreGuideLink', function () {
		return browser.assert.text(MSWExploreGuideLink, uLocalized('MSWExploreGuideLinkText'));
	});

});

});
