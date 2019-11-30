import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSWExplore: '.MSWExplore',
	
	MSWExploreFooter: '.MSWExploreFooter',
	MSWExploreGuideLink: '.MSWExploreGuideLink',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('MSWExplore_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows MSWExplore', function() {
		browser.assert.elements(MSWExplore, 1)
	});
	
	it('shows MSWPrompt', function() {
		browser.assert.elements('.MSWPrompt', 1)
	});
	
	it('shows MSWExploreFooter', function() {
		browser.assert.elements(MSWExploreFooter, 1)
	});
	
	it('shows MSWRootLink', function() {
		browser.assert.elements('.MSWRootLink', 1)
	});

	it('shows MSWExploreGuideLink', function () {
		browser.assert.elements(MSWExploreGuideLink, 1);
	});
	
});
