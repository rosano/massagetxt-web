import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSTExplorer: '.MSTExplorer',
	
	MSTExplorerSourceEditor: '.MSTExplorerSourceEditor .MSTEditor',
	MSTExplorerMassageEditor: '.MSTExplorerMassageEditor .MSTEditor',
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

	it('shows MSTExplorerSourceEditor', function() {
		browser.assert.elements(MSTExplorerSourceEditor, 1)
	});

	it('shows MSTExplorerMassageEditor', function() {
		browser.assert.elements(MSTExplorerMassageEditor, 1)
	});

});
