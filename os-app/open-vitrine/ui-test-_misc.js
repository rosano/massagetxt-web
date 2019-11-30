import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWVitrine_Misc', function () {

	before(function () {
		return browser.OLSKVisit(kDefaultRoute)
	});

	context('MSWVitrine', function () {
		
		it('sets class', function () {
			browser.assert.hasClass(MSWVitrine, 'OLSKCommon')
		});
	
	});

	context('MSWVitrineIdentityLogo', function () {
		
		it('sets role', function () {
			browser.assert.attribute(MSWVitrineIdentityLogo, 'role', 'image')
		});
		
		it('sets src', function () {
			browser.assert.attribute(MSWVitrineIdentityLogo, 'src', '/_shared/MSWRootLink/ui-assets/logo.svg')
		});
	
	});

});
