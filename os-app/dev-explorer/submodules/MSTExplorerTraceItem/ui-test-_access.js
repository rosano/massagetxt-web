import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSTExplorerTraceItem: '.MSTExplorerTraceItem',

	MSTExplorerTraceItemOperation: '.MSTExplorerTraceItemOperation',

	MSTExplorerTraceItemInputContent: '.MSTExplorerTraceItemInputContent',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('MSTExplorerTraceItem_Access', function () {

	before(function() {
		return browser.visit(OLSKTestingCanonicalFor(kDefaultRoute.OLSKRoutePath, {
			MSTExplorerTraceItemOperation: 'alfa',
			MSTExplorerTraceItemInputContent: 'bravo',
		}));
	});
	
	it('shows MSTExplorerTraceItem', function() {
		browser.assert.elements(MSTExplorerTraceItem, 1);
	});
	
	it('shows MSTExplorerTraceItemOperation', function() {
		browser.assert.elements(MSTExplorerTraceItemOperation, 1);
	});
	
	it('shows MSTExplorerTraceItemInputContent', function() {
		browser.assert.elements(MSTExplorerTraceItemInputContent, 1);
	});
	
});
