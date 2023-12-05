const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe('MSWVitrine_Localize-' + OLSKRoutingLanguage, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
			});
		});

		it.skip('localizes title', function() {
			return browser.assert.text('title', uLocalized('MSWVitrineTitle'))
		});

		it('localizes meta[description]', function() {
			return browser.assert.attribute('meta[name=description]', 'content', uLocalized('MSWVitrineDescription'))
		});

		it('localizes MSWVitrineDemosHeading', function () {
			return browser.assert.text(MSWVitrineDemosHeading, uLocalized('MSWVitrineDemosHeadingText'));
		});

		it('localizes MSWVitrineDemosOneHeading', function () {
			return browser.assert.text(MSWVitrineDemosOneHeading, uLocalized('MSWVitrineDemosOneHeadingText'));
		});

		it('localizes MSWVitrineDemosTwoHeading', function () {
			return browser.assert.text(MSWVitrineDemosTwoHeading, uLocalized('MSWVitrineDemosTwoHeadingText'));
		});

		it('localizes MSWVitrineDemosThreeHeading', function () {
			return browser.assert.text(MSWVitrineDemosThreeHeading, uLocalized('MSWVitrineDemosThreeHeadingText'));
		});

		it('localizes MSWVitrineExploreButton', function () {
			return browser.assert.text(MSWVitrineExploreButton, uLocalized('MSWExploreTitle'));
		});

		context('OLSKCrown', function test_OLSKCrown () {

			it('localizes OLSKCrownCardName', function () {
				return browser.assert.text('.OLSKCrownCardName', uLocalized('MSWVitrineTitle'));
			});
		
		});

		context('OLSKLanding', function test_OLSKLanding () {

			it('localizes OLSKLandingHeadingText', function () {
				return browser.assert.text('.OLSKLandingHeading', uLocalized('MSWVitrineDescription'));
			});

			it('localizes OLSKLandingBlurbText', function () {
				return browser.assert.text('.OLSKLandingBlurb', uLocalized('OLSKLandingBlurbText'));
			});

			it('localizes OLSKLandingActionText', function () {
				return browser.assert.text('.OLSKLandingAction', uLocalized('OLSKWordingOpenGuide'));
			});

			it('localizes OLSKLandingActionHref', function () {
				return browser.assert.attribute('.OLSKLandingAction', 'href', OLSKTestingCanonical(require('../open-guide/controller.js').OLSKControllerRoutes().shift()));
			});
		
		});

	});

});
