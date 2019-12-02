import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguages.forEach(function (languageCode) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, languageCode);
};

describe(`MSWVitrine_Localize-${ languageCode }`, function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKRoutingLanguage: languageCode,
		});
	});

	it('localizes title', function() {
		browser.assert.text('title', uLocalized('MSWVitrineTitle'))
	});

	it('localizes description', function() {
		browser.assert.attribute('meta[name=description]', 'content', uLocalized('MSWVitrineDescription'))
	});

	it('localizes MSWVitrineIdentityName', function () {
		browser.assert.text(MSWVitrineIdentityName, uLocalized('MSWVitrineTitle'));
	});

	it('localizes MSWVitrineContent', function() {
		const item = require('fs').readFileSync(require('path').join(__dirname, `text.${ languageCode }.md`), 'utf-8').replace(/_/g, '');
		deepEqual(browser.query(MSWVitrineContent).textContent.trim().slice(0, 20), item.slice(0, 20))
	});

	it('localizes MSWGuideRoute', function() {
		browser.assert.element(`a[href="${ require('../open-guide/controller.js').OLSKControllerRoutes().shift().OLSKRoutePath }"]`);
	});

	it('localizes MSWExploreRoute', function() {
		browser.assert.element(`a[href="${ require('../open-explore/controller.js').OLSKControllerRoutes().shift().OLSKRoutePath }"]`);
	});

	it('localizes MSW_SHARED_GITHUB_URL', function() {
		browser.assert.element(`a[href="${ process.env.MSW_SHARED_GITHUB_URL }"]`);
	});

});

});
