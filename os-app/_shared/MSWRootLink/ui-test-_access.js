import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSWRootLink: '.MSWRootLink',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('MSWRootLink_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows MSWRootLink', function() {
		browser.assert.elements(MSWRootLink, 1);
	});

});
