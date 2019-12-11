exports.OLSKControllerRoutes = function() {
	return {
		MSTCommonIdentityRedirect: {
			OLSKRoutePath: '/identity.svg',
			OLSKRouteMethod: 'get',
			OLSKRouteRedirect: '/_shared/MSTRootLink/ui-assets/identity.svg',
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
