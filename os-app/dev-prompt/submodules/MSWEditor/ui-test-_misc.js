const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWEditor_Misc', function () {

describe('MSWEditorField', function test_MSWEditorField () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	before(function () {
		return browser.assert.text('#TestMSWEditorDispatchValueDidChange', '0');
		return browser.assert.text('#TestMSWEditorDispatchValueDidChangeValue', 'undefined');
	});

	context('input', function () {
		
		before(function () {
			browser.fill(MSWEditorFieldDebug, 'alfa');
		});

		it('sends MSWEditorDispatchValueDidChange', function () {
			return browser.assert.text('#TestMSWEditorDispatchValueDidChange', '1')
			return browser.assert.text('#TestMSWEditorDispatchValueDidChangeValue', 'alfa')
		});
	
	});

});

});
