import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWGuide_Misc', function () {

	before(function () {
		return browser.OLSKVisit(kDefaultRoute)
	});

	context('MSWGuide', function () {
		
		it('sets class', function () {
			browser.assert.hasClass(MSWGuide, 'OLSKCommon')
		});
	
	});

});
