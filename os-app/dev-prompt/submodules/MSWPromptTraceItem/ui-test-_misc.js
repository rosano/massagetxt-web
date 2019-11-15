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
	
describe('MSWPromptTraceItemInputContent', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptTraceItemOperation: 'alfa',
			MSWPromptTraceItemInputContent: 'bravo',
		});
	});

	it('sets class', function () {
		browser.assert.hasClass(MSWPromptTraceItemInputContent, 'MSWPromptTraceItemInputContentTruncated');
	});

	it('initializes to MSWPromptTraceItemInputContent', function () {
		browser.assert.text(MSWPromptTraceItemInputContent, 'bravo')
	});

	context('click truncated', function () {

		before(function () {
			browser.click(MSWPromptTraceItemInputContent);
		});

		it('removes class', function () {
			browser.assert.hasNoClass(MSWPromptTraceItemInputContent, 'MSWPromptTraceItemInputContentTruncated');
		});
	
	});

	context('click not truncated', function () {

		before(function () {
			browser.click(MSWPromptTraceItemInputContent);
		});

		it('adds class', function () {
			browser.assert.hasClass(MSWPromptTraceItemInputContent, 'MSWPromptTraceItemInputContentTruncated');
		});
	
	});
	
});
	
});
