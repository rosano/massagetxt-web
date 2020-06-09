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

});
