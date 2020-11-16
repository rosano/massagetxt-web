exports.OLSKControllerRoutes = function() {
	return {
		MSTCommonIdentityRedirect: {
			OLSKRoutePath: '/identity.svg',
			OLSKRouteMethod: 'get',
			OLSKRouteRedirect: '/_shared/MSWRootLink/ui-assets/identity.svg',
		},
	};
};

exports.OLSKControllerSharedStaticAssetFolders = function() {
	return [
		'_shared/__external',
	];
};
