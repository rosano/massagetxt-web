import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWPromptTraceValue_Misc', function () {
		
describe('MSWPromptTraceValue', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptTraceValueContent: 'alfa',
		});
	});

	it('sets class', function () {
		browser.assert.hasClass(MSWPromptTraceValue, 'MSWPromptTraceValueTruncated');
	});

	context('click truncated', function () {

		before(function () {
			browser.click(MSWPromptTraceValue);
		});

		it('removes class', function () {
			browser.assert.hasNoClass(MSWPromptTraceValue, 'MSWPromptTraceValueTruncated');
		});
	
	});

	context('click truncated', function () {

		before(function () {
			browser.click(MSWPromptTraceValue);
		});

		it('adds class', function () {
			browser.assert.hasClass(MSWPromptTraceValue, 'MSWPromptTraceValueTruncated');
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
		browser.assert.text(MSWPromptTraceValueContent, 'alfa')
	});
	
});
	
});
