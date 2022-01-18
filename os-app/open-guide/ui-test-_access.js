const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSWGuide: '.MSWGuide',

	MSWGuideCrown: '.MSWGuideCrown',
	MSWGuideCrownName: '.MSWGuideCrownName',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('MSWGuide_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows MSWGuide', function () {
		browser.assert.elements(MSWGuide, 1);
	});

	it('shows MSWGuideCrown', function () {
		browser.assert.elements(MSWGuideCrown, 1);
	});

	it('shows MSWGuideCrownName', function () {
		browser.assert.elements(MSWGuideCrownName, 1);
	});

	it('shows MSWRootLink', function () {
		browser.assert.elements('.MSWRootLink', 1);
	});

});
