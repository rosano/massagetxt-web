import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSTExplorer_Misc', function () {

describe('MSTExplorerTextEditor', function() {
	
	before(function() {
		return browser.visit(OLSKTestingCanonicalFor(kDefaultRoute.OLSKRoutePath, {
			MSTExplorerText: 'alfa',
		}));
	});

	it('initializes to MSTExplorerText', function () {
		browser.assert.input(`${ MSTExplorerTextEditor } .MSTEditorFieldDebug`, 'alfa')
	});
	
});
	
describe('MSTExplorerMassageEditor', function() {
	
	before(function() {
		return browser.visit(OLSKTestingCanonicalFor(kDefaultRoute.OLSKRoutePath, {
			MSTExplorerMassage: 'alfa',
		}));
	});

	it('initializes to MSTExplorerMassage', function () {
		browser.assert.input(`${ MSTExplorerMassageEditor } .MSTEditorFieldDebug`, 'alfa')
	});
	
});
	
});
