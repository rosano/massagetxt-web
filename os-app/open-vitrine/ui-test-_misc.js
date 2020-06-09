const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWVitrine_Misc', function () {

	before(function () {
		return browser.OLSKVisit(kDefaultRoute)
	});

	it('assigns meta:viewport', function () {
		browser.assert.attribute('meta[name=viewport]', 'content', 'width=device-width');
	});

	context('MSWVitrine', function () {
		
		it('classes OLSKCommon', function () {
			browser.assert.hasClass(MSWVitrine, 'OLSKCommon')
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
