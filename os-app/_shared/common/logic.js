const mod = {

	MSWSharedGitHubLinkGuard (inputData) {
		if (typeof inputData !== 'object' || inputData === null) {
			throw new Error('MSWErrorInputNotValid');
		}

		if (!(inputData.MSW_SHARED_GITHUB_URL || '').trim()) {
			return new Error('MSW_SHARED_GITHUB_URL not defined');
		}
	},

};

Object.assign(exports, mod)
