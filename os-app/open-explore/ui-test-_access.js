import { deepEqual } from 'assert';

const kDefaultRoutePath = require('./controller.js').OLSKControllerRoutes().shift().OLSKRoutePath;

Object.entries({
	MSWExplore: '.MSWExplore',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('MSWExplore_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows MSWExplore', function() {
		browser.assert.elements(MSWExplore, 1)
	});
	
	it('shows MSWPrompt', function() {
		browser.assert.elements('.MSWPrompt', 1)
	});
	
});
