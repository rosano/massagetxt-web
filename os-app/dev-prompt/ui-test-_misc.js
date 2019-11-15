import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWPrompt_Misc', function () {

describe('MSWPromptPermalink', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptRaw: 'alfa bravo',
			MSWPromptMassage: '$input.prepend( charlie)',
		});
	});

	it('sets href', function () {
		browser.assert.attribute(MSWPromptPermalink, 'href', OLSKTestingCanonical(kDefaultRoute, {
			MSWPromptRaw: require('./ui-logic.js').MSTPermalinkEncode('alfa bravo'),
			MSWPromptMassage: require('./ui-logic.js').MSTPermalinkEncode('$input.prepend( charlie)'),
		}));
	});

});
	
describe('MSWPromptRaw', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptRaw: 'alfa',
		});
	});

	it('initializes to MSWPromptRaw', function () {
		browser.assert.input(`${ MSWPromptRaw } .MSWEditorFieldDebug`, 'alfa')
	});
	
});
	
describe('MSWPromptMassage', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptMassage: '$input',
		});
	});

	it('initializes to MSWPromptMassage', function () {
		browser.assert.input(`${ MSWPromptMassage } .MSWEditorFieldDebug`, '$input')
	});
	
});
	
describe('MSWPromptTraceItem', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptRaw: 'alfa',
			MSWPromptMassage: '$input',
		});
	});

	it('initializes to result', function () {
		browser.assert.elements(MSWPromptTraceItem, 1)
	});

	it('sets MSWPromptTraceItemOperation', function () {
		browser.assert.text(MSWPromptTraceItemOperation, '$input')
	});

	it('sets MSWPromptTraceItemInputContent', function () {
		browser.assert.text(MSWPromptTraceItemInputContent, 'alfa')
	});

	context('update MSWPromptMassage', function () {

		before(function () {
			browser.fill(`${ MSWPromptMassage } .MSWEditorFieldDebug`, '$input.lines');
		});

		it('updates elements', function () {
			browser.assert.elements(MSWPromptTraceItem, 2)
		});
	
	});

});
	
describe('MSWPromptOutput', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSWPromptRaw: 'alfa',
			MSWPromptMassage: '$input',
		});
	});

	it('initializes to result', function () {
		browser.assert.text(MSWPromptOutput, 'alfa')
	});

	context('update MSWPromptRaw', function () {

		before(function () {
			browser.fill(`${ MSWPromptRaw } .MSWEditorFieldDebug`, 'bravo');
		});
		
		it('sets value', function () {
			browser.assert.text(MSWPromptOutput, 'bravo')
		});
	
	});

	context('update MSWPromptMassage', function () {

		before(function () {
			browser.fill(`${ MSWPromptMassage } .MSWEditorFieldDebug`, '$input.prepend(alfa )');
		});
		
		it('sets value', function () {
			browser.assert.text(MSWPromptOutput, 'alfa bravo')
		});
	
	});
	
});
	
});
