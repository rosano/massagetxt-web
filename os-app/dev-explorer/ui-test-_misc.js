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
	
});
