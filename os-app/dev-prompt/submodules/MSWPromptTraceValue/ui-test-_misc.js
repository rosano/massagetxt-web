const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWPromptTraceValue_Misc', function () {
		
describe('MSWPromptTraceValue', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptTraceValueContent: 'alfa',
		});
	});

	it('classes MSWPromptTraceValueTruncated', function () {
		return browser.assert.hasClass(MSWPromptTraceValue, 'MSWPromptTraceValueTruncated');
	});

	context('click truncated', function () {

		before(function () {
			browser.click(MSWPromptTraceValue);
		});

		it('classes MSWPromptTraceValueTruncated', function () {
			return browser.assert.hasNoClass(MSWPromptTraceValue, 'MSWPromptTraceValueTruncated');
		});
	
	});

	context('click truncated', function () {

		before(function () {
			browser.click(MSWPromptTraceValue);
		});

		it('classes MSWPromptTraceValueTruncated', function () {
			return browser.assert.hasClass(MSWPromptTraceValue, 'MSWPromptTraceValueTruncated');
		});
	
	});
	
});
	
describe('MSWPromptTraceValueContent', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptTraceValueContent: 'alfa',
		});
	});

	it('initializes to MSWPromptTraceValueContent', function () {
		return browser.assert.text(MSWPromptTraceValueContent, 'alfa')
	});
	
});
	
});
