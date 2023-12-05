const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSWEditor: '.MSWEditor',

	MSWEditorFieldDebug: '.MSWEditorFieldDebug',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('MSWEditor_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows MSWEditor', function() {
		return browser.assert.elements(MSWEditor, 1);
	});
	
	it('shows MSWEditorFieldDebug', function() {
		return browser.assert.elements(MSWEditorFieldDebug, 1);
	});
	
});
