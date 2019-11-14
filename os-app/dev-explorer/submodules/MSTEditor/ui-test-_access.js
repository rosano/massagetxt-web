import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSTEditor: '.MSTEditor',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('MSTEditor_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});
	
	it('shows MSTEditor', function() {
		browser.assert.elements(MSTEditor, 1);
	});
	
});
