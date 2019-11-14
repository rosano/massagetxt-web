import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSTExplorer: '.MSTExplorer',
	
	MSTExplorerTextEditor: '.MSTExplorerTextEditor .MSTEditor',
	MSTExplorerMassageEditor: '.MSTExplorerMassageEditor .MSTEditor',
	
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

	it('shows MSTExplorerTextEditor', function() {
		browser.assert.elements(MSTExplorerTextEditor, 1)
	});

	it('shows MSTExplorerMassageEditor', function() {
		browser.assert.elements(MSTExplorerMassageEditor, 1)
	});

	it('shows MSTExplorerOutput', function() {
		browser.assert.elements(MSTExplorerOutput, 1)
	});

});
