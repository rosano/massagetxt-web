import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSTEditor_Misc', function () {

describe('MSTEditorField', function testMSTEditorField () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});

	before(function () {
		browser.assert.text('#TestMSTEditorDispatchValueChanged', '0');
		browser.assert.text('#TestMSTEditorDispatchValueChangedValue', 'undefined');
	});

	context('input', function () {
		
		before(function () {
			browser.fill(MSTEditorFieldDebug, 'alfa');
		});

		it('sends MSTEditorDispatchValueChanged', function () {
			browser.assert.text('#TestMSTEditorDispatchValueChanged', '1')
			browser.assert.text('#TestMSTEditorDispatchValueChangedValue', 'alfa')
		});
	
	});

});

});
