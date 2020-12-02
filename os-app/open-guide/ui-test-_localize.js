const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute._OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe(`MSWGuide_Localize-${ OLSKRoutingLanguage }`, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});

		it('localizes title', function() {
			browser.assert.text('title', uLocalized('MSWGuideTitle'))
		});

		it('localizes meta[description]', function() {
			browser.assert.attribute('meta[name=description]', 'content', uLocalized('MSWGuideDescription'))
		});

		it('localizes MSWGuideIdentityName', function () {
			browser.assert.text(MSWGuideIdentityName, uLocalized('MSWGuideTitle'));
		});

	});

})
