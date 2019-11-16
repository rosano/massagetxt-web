import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWExplore_Misc', function () {

describe('MSWExploreFooter', function() {
	
	before(function () {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});
	
	it('sets class', function () {
		browser.assert.hasClass(MSWExploreFooter, 'OLSKToolbar');
	});

});

});
