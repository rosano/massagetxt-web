exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/stub/MSWRootLinkEJS',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteSignature: 'MSWRootLinkEJSStubRoute',
		OLSKRouteLanguageCodes: ['en', 'fr', 'es'],
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}, {
		OLSKRoutePath: '/stub/MSWRootLinkSvelte',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteSignature: 'MSWRootLinkSvelteStubRoute',
		OLSKRouteLanguageCodes: ['en', 'fr', 'es'],
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}];
};
