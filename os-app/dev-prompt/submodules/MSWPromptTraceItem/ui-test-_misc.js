import { deepEqual } from 'assert';

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
		browser.assert.text(MSWPromptTraceItemOperation, 'alfa')
	});
	
});
	
describe('MSWPromptTraceItemInputHeading', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptTraceItemOperation: 'alfa',
			MSWPromptTraceItemInput: 'bravo',
		});
	});

	it('classes OLSKLayoutElementTextVisual', function () {
		browser.assert.hasClass(MSWPromptTraceItemInputHeading, 'OLSKLayoutElementTextVisual')
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
		browser.assert.text(MSWPromptTraceItemInputValue, 'bravo')
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

	it('classes OLSKLayoutElementTextVisual', function () {
		browser.assert.hasClass(MSWPromptTraceItemArgumentsHeading, 'OLSKLayoutElementTextVisual')
	});
	
});
	
});
