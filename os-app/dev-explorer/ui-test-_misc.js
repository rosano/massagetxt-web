import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSTExplorer_Misc', function () {

describe('MSTExplorerPermalink', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSTExplorerRaw: 'alfa bravo',
			MSTExplorerMassage: '$input.prepend( charlie)',
		});
	});

	it('sets href', function () {
		browser.assert.attribute(MSTExplorerPermalink, 'href', OLSKTestingCanonicalFor(kDefaultRoute.OLSKRoutePath, {
			MSTExplorerRaw: require('./ui-logic.js').MSTPermalinkEncode('alfa bravo'),
			MSTExplorerMassage: require('./ui-logic.js').MSTPermalinkEncode('$input.prepend( charlie)'),
		}));
	});

});
	
describe('MSTExplorerRaw', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSTExplorerRaw: 'alfa',
		});
	});

	it('initializes to MSTExplorerRaw', function () {
		browser.assert.input(`${ MSTExplorerRaw } .MSTEditorFieldDebug`, 'alfa')
	});
	
});
	
describe('MSTExplorerMassage', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSTExplorerMassage: '$input',
		});
	});

	it('initializes to MSTExplorerMassage', function () {
		browser.assert.input(`${ MSTExplorerMassage } .MSTEditorFieldDebug`, '$input')
	});
	
});
	
describe('MSTExplorerTraceItem', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSTExplorerRaw: 'alfa',
			MSTExplorerMassage: '$input',
		});
	});

	it('initializes to result', function () {
		browser.assert.elements(MSTExplorerTraceItem, 1)
	});

	it('sets MSTExplorerTraceItemOperation', function () {
		browser.assert.text(MSTExplorerTraceItemOperation, '$input')
	});

	it('sets MSTExplorerTraceItemInputContent', function () {
		browser.assert.text(MSTExplorerTraceItemInputContent, 'alfa')
	});

	context('update MSTExplorerMassage', function () {

		before(function () {
			browser.fill(`${ MSTExplorerMassage } .MSTEditorFieldDebug`, '$input.lines');
		});

		it('updates elements', function () {
			browser.assert.elements(MSTExplorerTraceItem, 2)
		});
	
	});

});
	
describe('MSTExplorerOutput', function() {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			MSTExplorerRaw: 'alfa',
			MSTExplorerMassage: '$input',
		});
	});

	it('initializes to result', function () {
		browser.assert.text(MSTExplorerOutput, 'alfa')
	});

	context('update MSTExplorerRaw', function () {

		before(function () {
			browser.fill(`${ MSTExplorerRaw } .MSTEditorFieldDebug`, 'bravo');
		});
		
		it('sets value', function () {
			browser.assert.text(MSTExplorerOutput, 'bravo')
		});
	
	});

	context('update MSTExplorerMassage', function () {

		before(function () {
			browser.fill(`${ MSTExplorerMassage } .MSTEditorFieldDebug`, '$input.prepend(alfa )');
		});
		
		it('sets value', function () {
			browser.assert.text(MSTExplorerOutput, 'alfa bravo')
		});
	
	});
	
});
	
});
