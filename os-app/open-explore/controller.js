exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/explore',
		OLSKRouteMethod: 'get',
		OLSKRouteSignature: 'MSWExploreRoute',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'ui-view'));
		},
		OLSKRouteLanguageCodes: ['en'],
	}];
};
