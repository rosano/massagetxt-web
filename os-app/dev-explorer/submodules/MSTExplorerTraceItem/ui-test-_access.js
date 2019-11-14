import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSTExplorerTraceItem: '.MSTExplorerTraceItem',

	MSTExplorerTraceItemOperation: '.MSTExplorerTraceItemOperation',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('MSTExplorerTraceItem_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});
	
	it('shows MSTExplorerTraceItem', function() {
		browser.assert.elements(MSTExplorerTraceItem, 1);
	});
	
	it('shows MSTExplorerTraceItemOperation', function() {
		browser.assert.elements(MSTExplorerTraceItemOperation, 1);
	});
	
});
