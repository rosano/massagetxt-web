import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWPromptTraceItem_Misc', function () {

describe('MSWPromptTraceItemOperation', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptTraceItemOperation: 'alfa',
			MSWPromptTraceItemInputContent: 'bravo',
		});
	});

	it('initializes to MSWPromptTraceItemOperation', function () {
		browser.assert.text(MSWPromptTraceItemOperation, 'alfa')
	});
	
});
	
describe('MSWPromptTraceItemInput', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptTraceItemOperation: 'alfa',
			MSWPromptTraceItemInputContent: 'bravo',
		});
	});

	it('sets class', function () {
		browser.assert.hasClass(MSWPromptTraceItemInput, 'MSWPromptTraceItemInputTruncated');
	});

	context('click MSWPromptTraceItemInput truncated', function () {

		before(function () {
			browser.click(MSWPromptTraceItemInput);
		});

		it('removes class', function () {
			browser.assert.hasNoClass(MSWPromptTraceItemInput, 'MSWPromptTraceItemInputTruncated');
		});
	
	});

	context('click MSWPromptTraceItemInput truncated', function () {

		before(function () {
			browser.click(MSWPromptTraceItemInput);
		});

		it('adds class', function () {
			browser.assert.hasClass(MSWPromptTraceItemInput, 'MSWPromptTraceItemInputTruncated');
		});
	
	});
	
});
	
describe('MSWPromptTraceItemInputContent', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptTraceItemOperation: 'alfa',
			MSWPromptTraceItemInputContent: 'bravo',
		});
	});

	it('initializes to MSWPromptTraceItemInputContent', function () {
		browser.assert.text(MSWPromptTraceItemInputContent, 'bravo')
	});
	
});
	
});
