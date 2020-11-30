const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (languageCode) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, languageCode);
};

describe(`MSWExplore_Localize-${ languageCode }`, function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKRoutingLanguage: languageCode,
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
