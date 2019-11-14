import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSTExplorerTraceItem_Misc', function () {

describe('MSTExplorerTraceItemOperation', function() {
	
	before(function() {
		return browser.visit(OLSKTestingCanonicalFor(kDefaultRoute.OLSKRoutePath, {
			MSTExplorerTraceItemOperation: 'alfa',
			MSTExplorerTraceItemInputContent: 'bravo',
		}));
	});

	it('initializes to MSTExplorerTraceItemOperation', function () {
		browser.assert.text(MSTExplorerTraceItemOperation, 'alfa')
	});
	
});
	
describe('MSTExplorerTraceItemInputContent', function() {
	
	before(function() {
		return browser.visit(OLSKTestingCanonicalFor(kDefaultRoute.OLSKRoutePath, {
			MSTExplorerTraceItemOperation: 'alfa',
			MSTExplorerTraceItemInputContent: 'bravo',
		}));
	});

	it('initializes to MSTExplorerTraceItemInputContent', function () {
		browser.assert.text(MSTExplorerTraceItemInputContent, 'bravo')
	});
	
});
	
});
