const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSWVitrine: '.MSWVitrine',
	
	MSWVitrineCrown: '.MSWVitrineCrown',
	MSWVitrineCrownIcon: '.MSWVitrineCrownIcon',
	MSWVitrineCrownName: '.MSWVitrineCrownName',
	MSWVitrineCrownBlurb: '.MSWVitrineCrownBlurb',

	MSWVitrineContent: '.MSWVitrineContent',

	MSWVitrineGazetteHeading: '.MSWVitrineGazetteHeading',

	MSWVitrineJarHeading: '.MSWVitrineJarHeading',
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
	
	it('shows MSWVitrineCrown', function() {
		browser.assert.elements(MSWVitrineCrown, 1)
	});
	
	it('shows MSWVitrineCrownIcon', function() {
		browser.assert.elements(MSWVitrineCrownIcon, 1)
	});
	
	it('shows MSWVitrineCrownName', function() {
		browser.assert.elements(MSWVitrineCrownName, 1)
	});

	it('shows MSWVitrineCrownBlurb', function () {
		browser.assert.elements(MSWVitrineCrownBlurb, 1);
	});
	
	it('shows OLSKCommonWhatIsIt', function() {
		browser.assert.elements('.OLSKCommonWhatIsIt', 1);
	});

	it('shows MSWVitrineContent', function() {
		browser.assert.elements(MSWVitrineContent, 1)
	});

	it('shows MSWVitrineGazetteHeading', function () {
		browser.assert.elements(MSWVitrineGazetteHeading, 1);
	});

	it('shows OLSKFollow', function () {
		browser.assert.elements('.OLSKFollow', 1);
	});

	it('shows ROCOBulletin', function () {
		browser.assert.elements('.ROCOBulletin', 1);
	});

	it('shows MSWVitrineJarHeading', function () {
		browser.assert.elements(MSWVitrineJarHeading, 1);
	});

	it('shows OLSKJar', function () {
		browser.assert.elements('.OLSKJar', 1);
	});

	it('shows ROCOEphemerataLink', function () {
		browser.assert.elements('.ROCOEphemerataLink', 1);
	});

	it('shows SWARLink', function() {
		browser.assert.elements('.SWARLink', 1);
	});

	it('shows ROCORootLink', function() {
		browser.assert.elements('.ROCORootLink', 1);
	});

});
