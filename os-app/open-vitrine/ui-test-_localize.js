const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe(`MSWVitrine_Localize-${ OLSKRoutingLanguage }`, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
			});
		});

		it('localizes title', function() {
			browser.assert.text('title', uLocalized('MSWVitrineTitle'))
		});

		it('localizes meta[description]', function() {
			browser.assert.attribute('meta[name=description]', 'content', uLocalized('MSWVitrineDescription'))
		});

		it('localizes MSWVitrineIdentityName', function () {
			browser.assert.text(MSWVitrineIdentityName, uLocalized('MSWVitrineTitle'));
		});

		it('localizes MSWVitrineIdentityBlurb', function () {
			browser.assert.text(MSWVitrineIdentityBlurb, uLocalized('MSWVitrineDescription'));
		});

		it('localizes MSWVitrineContent', function() {
			const item = require('fs').readFileSync(require('path').join(__dirname, `text.${ OLSKRoutingLanguage }.md`), 'utf-8').replace(/_/g, '');
			browser.assert.OLSKTextContent(MSWVitrineContent, item.slice(0, 20), function (inputData) {
				return inputData.slice(0, 20);
			});
		});

		it('localizes MSWGuideRoute', function() {
			browser.assert.element(`a[href="${ require('../open-guide/controller.js').OLSKControllerRoutes().shift().OLSKRoutePath }"]`);
		});

		it('localizes MSWExploreRoute', function() {
			browser.assert.element(`a[href="${ require('../open-explore/controller.js').OLSKControllerRoutes().shift().OLSKRoutePath }"]`);
		});

		it('localizes MSW_SHARED_GITHUB_URL', function() {
			browser.assert.element(`a[href="${ process.env.MSW_SHARED_GITHUB_URL }"]`);
		});

	});

});
