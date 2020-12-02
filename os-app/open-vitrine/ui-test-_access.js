const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSWVitrine: '.MSWVitrine',
	
	MSWVitrineIdentity: '.MSWVitrineIdentity',
	MSWVitrineIdentityLogo: '.MSWVitrineIdentityLogo',
	MSWVitrineIdentityName: '.MSWVitrineIdentityName',
	MSWVitrineIdentityBlurb: '.MSWVitrineIdentityBlurb',

	MSWVitrineContent: '.MSWVitrineContent',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('MSWVitrine_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows MSWVitrine', function() {
		browser.assert.elements(MSWVitrine, 1)
	});
	
	it('shows OLSKLanguageSwitcher', function() {
		browser.assert.elements('.OLSKLanguageSwitcher', 1);
	});
	
	it('shows MSWVitrineIdentity', function() {
		browser.assert.elements(MSWVitrineIdentity, 1)
	});
	
	it('shows MSWVitrineIdentityLogo', function() {
		browser.assert.elements(MSWVitrineIdentityLogo, 1)
	});
	
	it('shows MSWVitrineIdentityName', function() {
		browser.assert.elements(MSWVitrineIdentityName, 1)
	});

	it('shows MSWVitrineIdentityBlurb', function () {
		browser.assert.elements(MSWVitrineIdentityBlurb, 1);
	});
	
	it('shows MSWVitrineContent', function() {
		browser.assert.elements(MSWVitrineContent, 1)
	});

	it('shows ROCORootLink', function() {
		browser.assert.elements('.ROCORootLink', 1)
	});

});
