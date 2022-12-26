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

		it('localizes title', function() {
			browser.assert.text('title', uLocalized('MSWVitrineTitle'))
		});

		it('localizes meta[description]', function() {
			browser.assert.attribute('meta[name=description]', 'content', uLocalized('MSWVitrineDescription'))
		});

		it('localizes MSWVitrineDemosHeading', function () {
			browser.assert.text(MSWVitrineDemosHeading, uLocalized('MSWVitrineDemosHeadingText'));
		});

		it('localizes MSWVitrineDemosOneHeading', function () {
			browser.assert.text(MSWVitrineDemosOneHeading, uLocalized('MSWVitrineDemosOneHeadingText'));
		});

		it('localizes MSWVitrineDemosTwoHeading', function () {
			browser.assert.text(MSWVitrineDemosTwoHeading, uLocalized('MSWVitrineDemosTwoHeadingText'));
		});

		it('localizes MSWVitrineDemosThreeHeading', function () {
			browser.assert.text(MSWVitrineDemosThreeHeading, uLocalized('MSWVitrineDemosThreeHeadingText'));
		});

		it('localizes MSWVitrineExploreButton', function () {
			browser.assert.text(MSWVitrineExploreButton, uLocalized('MSWExploreTitle'));
		});

		context('OLSKCrown', function test_OLSKCrown () {

			it('localizes OLSKCrownCardName', function () {
				browser.assert.text('.OLSKCrownCardName', uLocalized('MSWVitrineTitle'));
			});
		
		});

		context('OLSKLanding', function test_OLSKLanding () {

			it('localizes OLSKLandingHeadingText', function () {
				browser.assert.text('.OLSKLandingHeading', uLocalized('MSWVitrineDescription'));
			});

			it('localizes OLSKLandingBlurbText', function () {
				browser.assert.text('.OLSKLandingBlurb', uLocalized('OLSKLandingBlurbText'));
			});

			it('localizes OLSKLandingActionText', function () {
				browser.assert.text('.OLSKLandingAction', uLocalized('OLSKWordingOpenGuide'));
			});

			it('localizes OLSKLandingActionHref', function () {
				browser.assert.attribute('.OLSKLandingAction', 'href', OLSKTestingCanonical(require('../open-guide/controller.js').OLSKControllerRoutes().shift()));
			});
		
		});

	});

});
