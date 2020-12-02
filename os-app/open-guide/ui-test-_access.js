const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSWGuide: '.MSWGuide',

	MSWGuideIdentity: '.MSWGuideIdentity',
	MSWGuideIdentityName: '.MSWGuideIdentityName',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('MSWGuide_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows MSWGuide', function () {
		browser.assert.elements(MSWGuide, 1);
	});

	it('shows MSWGuideIdentity', function () {
		browser.assert.elements(MSWGuideIdentity, 1);
	});

	it('shows MSWGuideIdentityName', function () {
		browser.assert.elements(MSWGuideIdentityName, 1);
	});

	it('shows MSWRootLink', function () {
		browser.assert.elements('.MSWRootLink', 1);
	});

});
