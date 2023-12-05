const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSWExplore: '.MSWExplore',
	
	MSWExploreFooter: '.MSWExploreFooter',
	MSWExploreGuideLink: '.MSWExploreGuideLink',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('MSWExplore_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows MSWExplore', function() {
		return browser.assert.elements(MSWExplore, 1)
	});
	
	it('shows MSWPrompt', function() {
		return browser.assert.elements('.MSWPrompt', 1)
	});
	
	it('shows MSWExploreFooter', function() {
		return browser.assert.elements(MSWExploreFooter, 1)
	});
	
	it('shows MSWRootLink', function() {
		return browser.assert.elements('.MSWRootLink', 1)
	});

	it('shows MSWExploreGuideLink', function () {
		return browser.assert.elements(MSWExploreGuideLink, 1);
	});
	
});
