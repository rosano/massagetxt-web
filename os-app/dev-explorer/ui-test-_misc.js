import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSTExplorer_Misc', function () {

describe('MSTExplorerRawEditor', function() {
	
	before(function() {
		return browser.visit(OLSKTestingCanonicalFor(kDefaultRoute.OLSKRoutePath, {
			MSTExplorerRaw: 'alfa',
		}));
	});

	it('initializes to MSTExplorerRaw', function () {
		browser.assert.input(`${ MSTExplorerRawEditor } .MSTEditorFieldDebug`, 'alfa')
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
	
describe('MSTExplorerOutput', function() {
	
	before(function() {
		return browser.visit(OLSKTestingCanonicalFor(kDefaultRoute.OLSKRoutePath, {
			MSTExplorerRaw: 'alfa',
		}));
	});

	it('initializes to MSTExplorerMassage', function () {
		browser.assert.text(MSTExplorerOutput, 'alfa')
	});
	
});
	
});
