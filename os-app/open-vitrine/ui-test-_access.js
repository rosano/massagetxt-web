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
		return browser.assert.elements(MSWVitrine, 1)
	});
	
	it('shows OLSKCrown', function() {
		return browser.assert.elements('.OLSKCrown', 1);
	});
	
	it('shows OLSKLanding', function() {
		return browser.assert.elements('.OLSKLanding', 1);
	});

	it('shows MSWVitrineVideo', function () {
		return browser.assert.elements(MSWVitrineVideo, 1);
	});

	it('shows MSWVitrineDemosHeading', function () {
		return browser.assert.elements(MSWVitrineDemosHeading, 1);
	});

	it('shows MSWVitrineDemosOneHeading', function () {
		return browser.assert.elements(MSWVitrineDemosOneHeading, 1);
	});

	it('shows MSWVitrineDemosOneFrame', function () {
		return browser.assert.elements(MSWVitrineDemosOneFrame, 1);
	});

	it('shows MSWVitrineDemosTwoHeading', function () {
		return browser.assert.elements(MSWVitrineDemosTwoHeading, 1);
	});

	it('shows MSWVitrineDemosTwoFrame', function () {
		return browser.assert.elements(MSWVitrineDemosTwoFrame, 1);
	});

	it('shows MSWVitrineDemosThreeHeading', function () {
		return browser.assert.elements(MSWVitrineDemosThreeHeading, 1);
	});

	it('shows MSWVitrineDemosThreeFrame', function () {
		return browser.assert.elements(MSWVitrineDemosThreeFrame, 1);
	});

	it('shows MSWVitrineExploreButton', function () {
		return browser.assert.elements(MSWVitrineExploreButton, 1);
	});

	it('shows ROCOGazette', function () {
		return browser.assert.elements('.ROCOGazette', 1);
	});

	it('shows OLSKEdit', function () {
		return browser.assert.elements('.OLSKEdit', 1);
	});

	it('shows SWARLink', function() {
		return browser.assert.elements('.SWARLink', 1);
	});

	it('shows ROCORootLink', function() {
		return browser.assert.elements('.ROCORootLink', 1);
	});

});
