import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSTEditor_Misc', function () {

describe('MSTEditorField', function testMSTEditorField () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	before(function () {
		browser.assert.text('#TestMSTEditorDispatchValueDidChange', '0');
		browser.assert.text('#TestMSTEditorDispatchValueDidChangeValue', 'undefined');
	});

	context('input', function () {
		
		before(function () {
			browser.fill(MSTEditorFieldDebug, 'alfa');
		});

		it('sends MSTEditorDispatchValueDidChange', function () {
			browser.assert.text('#TestMSTEditorDispatchValueDidChange', '1')
			browser.assert.text('#TestMSTEditorDispatchValueDidChangeValue', 'alfa')
		});
	
	});

});

});
