import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSTEditor: '.MSTEditor',

	MSTEditorFieldDebug: '.MSTEditorFieldDebug',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('MSTEditor_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows MSTEditor', function() {
		browser.assert.elements(MSTEditor, 1);
	});
	
	it('shows MSTEditorFieldDebug', function() {
		browser.assert.elements(MSTEditorFieldDebug, 1);
	});
	
});
