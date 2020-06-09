const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWGuide_Misc', function () {

	before(function () {
		return browser.OLSKVisit(kDefaultRoute)
	});

	context('MSWGuide', function () {
		
		it('classes OLSKCommon', function () {
			browser.assert.hasClass(MSWGuide, 'OLSKCommon');
		});
	
	});

});
