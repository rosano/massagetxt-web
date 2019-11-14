import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSTExplorer: '.MSTExplorer',
	
	MSTExplorerRawEditor: '.MSTExplorerRawEditor .MSTEditor',
	MSTExplorerMassageEditor: '.MSTExplorerMassageEditor .MSTEditor',
	
	MSTExplorerTrace: '.MSTExplorerTrace',	
	MSTExplorerTraceItem: '.MSTExplorerTraceItem',
	
	MSTExplorerOutput: '.MSTExplorerOutput',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('MSTExplorer_Access', function testMSTExplorer_Access () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});

	it('shows MSTExplorer', function() {
		browser.assert.elements(MSTExplorer, 1)
	});

	it('shows MSTExplorerRawEditor', function() {
		browser.assert.elements(MSTExplorerRawEditor, 1)
	});

	it('shows MSTExplorerMassageEditor', function() {
		browser.assert.elements(MSTExplorerMassageEditor, 1)
	});

	it('shows MSTExplorerTrace', function() {
		browser.assert.elements(MSTExplorerTrace, 1)
	});

	it('hides MSTExplorerTraceItem', function() {
		browser.assert.elements(MSTExplorerTraceItem, 0)
	});

	it('shows MSTExplorerOutput', function() {
		browser.assert.elements(MSTExplorerOutput, 1)
	});

	context('input', function () {
		
		before(function() {
			return browser.visit(OLSKTestingCanonicalFor(kDefaultRoute.OLSKRoutePath, {
				MSTExplorerRaw: 'alfa',
				MSTExplorerMassage: '$input',
			}));
		});

		it('shows MSTExplorerTraceItem', function () {
			browser.assert.elements(MSTExplorerTraceItem, 1)
		});
	
	});

});
