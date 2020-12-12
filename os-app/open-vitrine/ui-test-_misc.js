const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWVitrine_Misc', function () {

	before(function () {
		return browser.OLSKVisit(kDefaultRoute)
	});

	context('MSWVitrine', function () {
		
		it('classes OLSKCommon', function () {
			browser.assert.hasClass(MSWVitrine, 'OLSKCommon')
		});

		it('classes OLSKCommonCapped', function () {
			browser.assert.hasClass(MSWVitrine, 'OLSKCommonCapped')
		});
	
	});

	describe('MSWVitrineCrown', function test_MSWVitrineCrown() {

		it('classes OLSKCommonCard', function () {
			browser.assert.hasClass(MSWVitrineCrown, 'OLSKCommonCard');
		});

		it('classes OLSKCommonCrownCard', function () {
			browser.assert.hasClass(MSWVitrineCrown, 'OLSKCommonCrownCard');
		});
		
	});

	describe('MSWVitrineCrownIcon', function () {

		it('sets role', function () {
			browser.assert.attribute(MSWVitrineCrownIcon, 'role', 'presentation');
		});

		it('sets src', function () {
			browser.assert.attribute(MSWVitrineCrownIcon, 'src', '/_shared/MSWRootLink/ui-assets/identity.svg');
		});

	});

	context('MSWVitrineCrownIcon', function () {
		
		it('sets role', function () {
			browser.assert.attribute(MSWVitrineCrownIcon, 'role', 'presentation')
		});
		
		it('sets src', function () {
			browser.assert.attribute(MSWVitrineCrownIcon, 'src', '/_shared/MSWRootLink/ui-assets/identity.svg')
		});
	
	});

});
