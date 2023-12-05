const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWGuide_Misc', function () {

	before(function () {
		return browser.OLSKVisit(kDefaultRoute)
	});

	context('MSWGuide', function () {
		
		it('classes OLSKDecor', function () {
			return browser.assert.hasClass(MSWGuide, 'OLSKDecor');
		});

		it('classes OLSKDecorCapped', function () {
			return browser.assert.hasClass(MSWGuide, 'OLSKDecorCapped');
		});
	
	});

	describe('MSWGuideCrown', function test_MSWGuideCrown() {

		it('classes OLSKCommonCard', function () {
			return browser.assert.hasClass(MSWGuideCrown, 'OLSKCommonCard');
		});

		it('classes OLSKCommonCrownCard', function () {
			return browser.assert.hasClass(MSWGuideCrown, 'OLSKCommonCrownCard');
		});
		
	});

});
