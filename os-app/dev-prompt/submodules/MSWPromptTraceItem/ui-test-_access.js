const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSWPromptTraceItem: '.MSWPromptTraceItem',

	MSWPromptTraceItemOperation: '.MSWPromptTraceItemOperation',

	MSWPromptTraceItemInput: '.MSWPromptTraceItemInput',
	MSWPromptTraceItemInputHeading: '.MSWPromptTraceItemInputHeading',
	MSWPromptTraceItemInputValue: '.MSWPromptTraceItemInput .MSWPromptTraceValue',

	MSWPromptTraceItemArguments: '.MSWPromptTraceItemArguments',
	MSWPromptTraceItemArgumentsHeading: '.MSWPromptTraceItemArgumentsHeading',
	MSWPromptTraceItemArgumentsValue: '.MSWPromptTraceItemArguments .MSWPromptTraceValue',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('MSWPromptTraceItem_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptTraceItemOperation: 'alfa',
			MSWPromptTraceItemInput: 'bravo',
		});
	});
	
	it('shows MSWPromptTraceItem', function() {
		return browser.assert.elements(MSWPromptTraceItem, 1);
	});
	
	it('shows MSWPromptTraceItemOperation', function() {
		return browser.assert.elements(MSWPromptTraceItemOperation, 1);
	});
	
	it('shows MSWPromptTraceItemInput', function() {
		return browser.assert.elements(MSWPromptTraceItemInput, 1);
	});
	
	it('shows MSWPromptTraceItemInputHeading', function() {
		return browser.assert.elements(MSWPromptTraceItemInputHeading, 1);
	});
	
	it('shows MSWPromptTraceItemInputValue', function() {
		return browser.assert.elements(MSWPromptTraceItemInputValue, 1);
	});

	it('hides MSWPromptTraceItemArguments', function () {
		return browser.assert.elements(MSWPromptTraceItemArguments, 0);
	});

	context('MSWPromptTraceItemArguments', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				MSWPromptTraceItemOperation: 'alfa',
				MSWPromptTraceItemInput: 'bravo',
				MSWPromptTraceItemArguments: JSON.stringify(['charlie', 'delta']),
			});
		});
		
		it('shows MSWPromptTraceItemArguments', function () {
			return browser.assert.elements(MSWPromptTraceItemArguments, 1);
		});

		it('shows MSWPromptTraceItemArgumentsHeading', function () {
			return browser.assert.elements(MSWPromptTraceItemArgumentsHeading, 1);
		});

		it('shows MSWPromptTraceItemArgumentsValue', function () {
			return browser.assert.elements(MSWPromptTraceItemArgumentsValue, 2);
		});
	
	});
	
});
