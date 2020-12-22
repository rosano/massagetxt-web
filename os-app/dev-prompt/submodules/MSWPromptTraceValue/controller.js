exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/stub/MSWPromptTraceValue',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteSignature: 'MSWPromptTraceValueStubRoute',
		OLSKRouteLanguageCodes: ['en'],
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}];
};
