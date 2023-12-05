const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute._OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe('MSWGuide_Localize-' + OLSKRoutingLanguage, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});

		it.skip('localizes title', function() {
			return browser.assert.text('title', uLocalized('MSWGuideTitle'))
		});

		it('localizes meta[description]', function() {
			return browser.assert.attribute('meta[name=description]', 'content', uLocalized('MSWGuideDescription'))
		});

		it('localizes MSWGuideCrownName', function () {
			return browser.assert.text(MSWGuideCrownName, uLocalized('MSWGuideTitle'));
		});

	});

})
