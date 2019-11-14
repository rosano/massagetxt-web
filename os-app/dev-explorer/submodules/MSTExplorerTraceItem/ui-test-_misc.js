import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSTExplorerTraceItem_Misc', function () {

describe('MSTExplorerTraceItemOperation', function() {
	
	before(function() {
		return browser.visit(OLSKTestingCanonicalFor(kDefaultRoute.OLSKRoutePath, {
			MSTExplorerTraceItemOperation: 'alfa',
			MSTExplorerTraceItemInput: 'bravo',
		}));
	});

	it('initializes to MSTExplorerTraceItemOperation', function () {
		browser.assert.text(MSTExplorerTraceItemOperation, 'alfa')
	});
	
});
	
describe('MSTExplorerTraceItemInput', function() {
	
	before(function() {
		return browser.visit(OLSKTestingCanonicalFor(kDefaultRoute.OLSKRoutePath, {
			MSTExplorerTraceItemOperation: 'alfa',
			MSTExplorerTraceItemInput: 'bravo',
		}));
	});

	it('initializes to MSTExplorerTraceItemInput', function () {
		browser.assert.text(MSTExplorerTraceItemInput, 'bravo')
	});
	
});
	
});
