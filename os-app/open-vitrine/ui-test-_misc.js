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

	describe('MSWVitrineIdentity', function test_MSWVitrineIdentity() {

		it('classes OLSKCommonCard', function () {
			browser.assert.hasClass(MSWVitrineIdentity, 'OLSKCommonCard');
		});

		it('classes OLSKCommonIdentityCard', function () {
			browser.assert.hasClass(MSWVitrineIdentity, 'OLSKCommonIdentityCard');
		});
		
	});

	describe('MSWVitrineIdentityLogo', function () {

		it('sets role', function () {
			browser.assert.attribute(MSWVitrineIdentityLogo, 'role', 'presentation');
		});

		it('sets src', function () {
			browser.assert.attribute(MSWVitrineIdentityLogo, 'src', '/_shared/MSWRootLink/ui-assets/identity.svg');
		});

	});

	context('MSWVitrineIdentityLogo', function () {
		
		it('sets role', function () {
			browser.assert.attribute(MSWVitrineIdentityLogo, 'role', 'presentation')
		});
		
		it('sets src', function () {
			browser.assert.attribute(MSWVitrineIdentityLogo, 'src', '/_shared/MSWRootLink/ui-assets/identity.svg')
		});
	
	});

});
