const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWGuide_Misc', function () {

	before(function () {
		return browser.OLSKVisit(kDefaultRoute)
	});

	context('MSWGuide', function () {
		
		it('classes OLSKCommon', function () {
			browser.assert.hasClass(MSWGuide, 'OLSKCommon');
		});

		it('classes OLSKCommonCapped', function () {
			browser.assert.hasClass(MSWGuide, 'OLSKCommonCapped');
		});
	
	});

	describe('MSWGuideIdentity', function test_MSWGuideIdentity() {

		it('classes OLSKCommonCard', function () {
			browser.assert.hasClass(MSWGuideIdentity, 'OLSKCommonCard');
		});

		it('classes OLSKCommonCrownCard', function () {
			browser.assert.hasClass(MSWGuideIdentity, 'OLSKCommonCrownCard');
		});
		
	});

	describe('MSWGuideIdentityLogo', function () {

		it('sets role', function () {
			browser.assert.attribute(MSWGuideIdentityLogo, 'role', 'presentation');
		});

		it('sets src', function () {
			browser.assert.attribute(MSWGuideIdentityLogo, 'src', '/_shared/KOMRootLink/ui-assets/identity.svg');
		});

	});

});
