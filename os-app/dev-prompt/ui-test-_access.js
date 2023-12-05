const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	MSWPrompt: '.MSWPrompt',
	
	MSWPromptPermalink: '.MSWPromptPermalink',

	MSWPromptRaw: '.MSWPromptRaw .MSWEditor',
	MSWPromptMassage: '.MSWPromptMassage .MSWEditor',
	
	MSWPromptSyntaxError: '.MSWPromptSyntaxError',	
	
	MSWPromptTrace: '.MSWPromptTrace',	
	MSWPromptTraceItem: '.MSWPromptTraceItem',
	
	MSWPromptOutput: '.MSWPromptOutput',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('MSWPrompt_Access', function test_MSWPrompt_Access () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows MSWPrompt', function() {
		return browser.assert.elements(MSWPrompt, 1)
	});

	it('shows MSWPromptPermalink', function() {
		return browser.assert.elements(MSWPromptPermalink, 1)
	});

	it('shows MSWPromptRaw', function() {
		return browser.assert.elements(MSWPromptRaw, 1)
	});

	it('shows MSWPromptMassage', function() {
		return browser.assert.elements(MSWPromptMassage, 1)
	});

	it('shows MSWPromptTrace', function() {
		return browser.assert.elements(MSWPromptTrace, 1)
	});

	it('hides MSWPromptSyntaxError', function() {
		return browser.assert.elements(MSWPromptSyntaxError, 0)
	});

	it('hides MSWPromptTraceItem', function() {
		return browser.assert.elements(MSWPromptTraceItem, 0)
	});

	it('shows MSWPromptOutput', function() {
		return browser.assert.elements(MSWPromptOutput, 1)
	});

	context('input', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				MSWPromptRaw: 'alfa',
				MSWPromptMassage: '$input.lines',
			});
		});

		it('shows MSWPromptTraceItem', function () {
			return browser.assert.elements(MSWPromptTraceItem, 1)
		});
	
	});

	context('syntax error', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				MSWPromptRaw: 'alfa',
				MSWPromptMassage: '$input.prepend(',
			});
		});

		it('shows MSWPromptSyntaxError', function () {
			return browser.assert.elements(MSWPromptSyntaxError, 1)
		});
	
	});

});
