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

	it('initializes to MSWPromptTraceItemInputContent', function () {
		browser.assert.text(MSWPromptTraceItemInputContent, 'bravo')
	});
	
});
	
});
