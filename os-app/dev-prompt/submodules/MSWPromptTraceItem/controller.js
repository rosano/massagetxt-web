exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/stub/MSWPromptTraceItem',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.render(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteSignature: 'MSWPromptTraceItemStubRoute',
		OLSKRouteLanguages: ['en'],
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}];
};
