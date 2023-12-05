const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSWPromptTraceValue: '.MSWPromptTraceValue',

	MSWPromptTraceValueContent: '.MSWPromptTraceValueContent',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('MSWPromptTraceValue_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptTraceValueContent: 'alfa',
		});
	});
	
	it('shows MSWPromptTraceValue', function() {
		return browser.assert.elements(MSWPromptTraceValue, 1);
	});
	
	it('shows MSWPromptTraceValueContent', function() {
		return browser.assert.elements(MSWPromptTraceValueContent, 1);
	});

});
