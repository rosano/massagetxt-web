import { deepEqual } from 'assert';

describe('MSTCommon_Access', function test_MSTCommon_Access () {

	it('redirects MSTCommonIdentityRedirect', async function() {
		deepEqual((await (await browser.fetch('http://loc.tests' + OLSKTestingCanonical(require('./controller.js').OLSKControllerRoutes().MSTCommonIdentityRedirect))).text()).slice(0, 10), '<?xml vers')
	});

});
