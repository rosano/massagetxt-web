const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWGuide_Misc', function () {

	before(function () {
		return browser.OLSKVisit(kDefaultRoute)
	});

	it('assigns meta:viewport', function () {
		browser.assert.attribute('meta[name=viewport]', 'content', 'width=device-width');
	});

	context('MSWGuide', function () {
		
		it('classes OLSKCommon', function () {
			browser.assert.hasClass(MSWGuide, 'OLSKCommon');
		});
	
	});

	describe('MSWGuideIdentity', function test_MSWGuideIdentity() {

		it('classes OLSKCommonCard', function () {
			browser.assert.hasClass(MSWGuideIdentity, 'OLSKCommonCard');
		});

		it('classes OLSKCommonIdentityCard', function () {
			browser.assert.hasClass(MSWGuideIdentity, 'OLSKCommonIdentityCard');
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
