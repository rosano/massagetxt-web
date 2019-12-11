exports.OLSKControllerRoutes = function() {
	return {
		MSTCommonIdentityRedirect: {
			OLSKRoutePath: '/identity.svg',
			OLSKRouteMethod: 'get',
			OLSKRouteRedirect: '/_shared/MSWRootLink/ui-assets/identity.svg',
		},
	};
};

exports.OLSKControllerSharedMiddlewares = function() {
	return {
		MSWSharedGitHubLinkGuardMiddleware (req, res, next) {
			return next(require('./logic.js').MSWSharedGitHubLinkGuard(process.env))
		},
	};
};

exports.OLSKControllerSharedStaticAssetFolders = function() {
	return [
		'_shared/__external',
	];
};
