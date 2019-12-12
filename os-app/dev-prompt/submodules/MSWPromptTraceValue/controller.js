exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/stub/MSWPromptTraceValue',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.render(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteSignature: 'MSWPromptTraceValueStubRoute',
		OLSKRouteLanguages: ['en'],
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}];
};
