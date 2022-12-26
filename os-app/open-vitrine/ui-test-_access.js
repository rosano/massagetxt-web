const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSWVitrine: '.MSWVitrine',
	
	MSWVitrineVideo: '.OLSKCommonVideoList .OLSKCommonVideoListItem.MSWVitrineVideo iframe',

	MSWVitrineDemosHeading: '.MSWVitrineDemosHeading',
	MSWVitrineDemosOneHeading: '.MSWVitrineDemosOneHeading',
	MSWVitrineDemosOneFrame: '.MSWVitrineDemosOneFrame',
	MSWVitrineDemosTwoHeading: '.MSWVitrineDemosTwoHeading',
	MSWVitrineDemosTwoFrame: '.MSWVitrineDemosTwoFrame',
	MSWVitrineDemosThreeHeading: '.MSWVitrineDemosThreeHeading',
	MSWVitrineDemosThreeFrame: '.MSWVitrineDemosThreeFrame',
	MSWVitrineExploreButton: '.MSWVitrineExploreButton',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('MSWVitrine_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows MSWVitrine', function() {
		browser.assert.elements(MSWVitrine, 1)
	});
	
	it('shows OLSKCrown', function() {
		browser.assert.elements('.OLSKCrown', 1);
	});
	
	it('shows OLSKLanding', function() {
		browser.assert.elements('.OLSKLanding', 1);
	});

	it('shows MSWVitrineVideo', function () {
		browser.assert.elements(MSWVitrineVideo, 1);
	});

	it('shows MSWVitrineDemosHeading', function () {
		browser.assert.elements(MSWVitrineDemosHeading, 1);
	});

	it('shows MSWVitrineDemosOneHeading', function () {
		browser.assert.elements(MSWVitrineDemosOneHeading, 1);
	});

	it('shows MSWVitrineDemosOneFrame', function () {
		browser.assert.elements(MSWVitrineDemosOneFrame, 1);
	});

	it('shows MSWVitrineDemosTwoHeading', function () {
		browser.assert.elements(MSWVitrineDemosTwoHeading, 1);
	});

	it('shows MSWVitrineDemosTwoFrame', function () {
		browser.assert.elements(MSWVitrineDemosTwoFrame, 1);
	});

	it('shows MSWVitrineDemosThreeHeading', function () {
		browser.assert.elements(MSWVitrineDemosThreeHeading, 1);
	});

	it('shows MSWVitrineDemosThreeFrame', function () {
		browser.assert.elements(MSWVitrineDemosThreeFrame, 1);
	});

	it('shows MSWVitrineExploreButton', function () {
		browser.assert.elements(MSWVitrineExploreButton, 1);
	});

	it('shows ROCOGazette', function () {
		browser.assert.elements('.ROCOGazette', 1);
	});

	it('shows OLSKEdit', function () {
		browser.assert.elements('.OLSKEdit', 1);
	});

	it('shows SWARLink', function() {
		browser.assert.elements('.SWARLink', 1);
	});

	it('shows ROCORootLink', function() {
		browser.assert.elements('.ROCORootLink', 1);
	});

});
