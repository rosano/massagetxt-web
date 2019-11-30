import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWExplore_Misc', function () {

before(function () {
	return browser.OLSKVisit(kDefaultRoute);
});

describe('MSWExploreFooter', function() {
	
	it('sets class', function () {
		browser.assert.hasClass(MSWExploreFooter, 'OLSKToolbar');
	});

});

describe('MSWExploreGuideLink', function() {

	it('sets href', function () {
		browser.assert.attribute(MSWExploreGuideLink, 'href', OLSKTestingCanonical(require('../open-guide/controller.js').OLSKControllerRoutes().shift()));
	});

	it('sets target', function () {
		browser.assert.attribute(MSWExploreGuideLink, 'target', '_blank');
	});

});

});
