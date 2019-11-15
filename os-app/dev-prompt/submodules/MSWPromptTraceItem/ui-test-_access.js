import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSWPromptTraceItem: '.MSWPromptTraceItem',

	MSWPromptTraceItemOperation: '.MSWPromptTraceItemOperation',

	MSWPromptTraceItemInputHeading: '.MSWPromptTraceItemInputHeading',
	MSWPromptTraceItemInputContent: '.MSWPromptTraceItemInputContent',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('MSWPromptTraceItem_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptTraceItemOperation: 'alfa',
			MSWPromptTraceItemInputContent: 'bravo',
		});
	});
	
	it('shows MSWPromptTraceItem', function() {
		browser.assert.elements(MSWPromptTraceItem, 1);
	});
	
	it('shows MSWPromptTraceItemOperation', function() {
		browser.assert.elements(MSWPromptTraceItemOperation, 1);
	});
	
	it('shows MSWPromptTraceItemInputHeading', function() {
		browser.assert.elements(MSWPromptTraceItemInputHeading, 1);
	});
	
	it('shows MSWPromptTraceItemInputContent', function() {
		browser.assert.elements(MSWPromptTraceItemInputContent, 1);
	});
	
});
