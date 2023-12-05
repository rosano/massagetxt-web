const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWPromptTraceItem_Misc', function () {

describe('MSWPromptTraceItemOperation', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptTraceItemOperation: 'alfa',
			MSWPromptTraceItemInput: 'bravo',
		});
	});

	it('initializes to MSWPromptTraceItemOperation', function () {
		return browser.assert.text(MSWPromptTraceItemOperation, 'alfa')
	});
	
});
	
describe('MSWPromptTraceItemInputHeading', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptTraceItemOperation: 'alfa',
			MSWPromptTraceItemInput: 'bravo',
		});
	});

	it('classes OLSKDecorTextVisual', function () {
		return browser.assert.hasClass(MSWPromptTraceItemInputHeading, 'OLSKDecorTextVisual')
	});
	
});
	
describe('MSWPromptTraceItemInputValue', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptTraceItemOperation: 'alfa',
			MSWPromptTraceItemInput: 'bravo',
		});
	});

	it('initializes to MSWPromptTraceItemInput', function () {
		return browser.assert.text(MSWPromptTraceItemInputValue, 'bravo')
	});
	
});
	
describe('MSWPromptTraceItemArgumentsHeading', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptTraceItemOperation: 'alfa',
			MSWPromptTraceItemInput: 'bravo',
			MSWPromptTraceItemArguments: JSON.stringify(['charlie']),
		});
	});

	it('classes OLSKDecorTextVisual', function () {
		return browser.assert.hasClass(MSWPromptTraceItemArgumentsHeading, 'OLSKDecorTextVisual')
	});
	
});
	
});
