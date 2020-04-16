const { throws, deepEqual } = require('assert');

const mainModule = require('./logic.js');

describe('MSWSharedGitHubLinkGuard', function test_MSWSharedGitHubLinkGuard() {

	const StubEnvValid = function () {
		return {
			MSW_SHARED_GITHUB_URL: 'alfa',
		};
	};

	it('throws if not object', function() {
		throws(function() {
			mainModule.MSWSharedGitHubLinkGuard(null);
		}, /MSWErrorInputNotValid/);
	});

	it('returns error if no MSW_SHARED_GITHUB_URL', function () {
		deepEqual(mainModule.MSWSharedGitHubLinkGuard(Object.assign(StubEnvValid(), {
			MSW_SHARED_GITHUB_URL: null,
		})), new Error('MSW_SHARED_GITHUB_URL not defined'));
	});

	it('returns error if MSW_SHARED_GITHUB_URL blank', function () {
		deepEqual(mainModule.MSWSharedGitHubLinkGuard(Object.assign(StubEnvValid(), {
			MSW_SHARED_GITHUB_URL: ' ',
		})), new Error('MSW_SHARED_GITHUB_URL not defined'));
	});

});
