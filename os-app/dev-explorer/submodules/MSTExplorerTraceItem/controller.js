exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/stub/MSTExplorerTraceItem',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction: function(req, res, next) {
			return res.render(require('path').join(__dirname, 'stub-view'), {
				OLSKPagePublicLocalizedStringKeys: ['MSTExplorerTraceItemInputHeadingText'],
			});
		},
		OLSKRouteSignature: 'MSTExplorerTraceItemStubRoute',
		OLSKRouteLanguages: ['en'],
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}];
};
