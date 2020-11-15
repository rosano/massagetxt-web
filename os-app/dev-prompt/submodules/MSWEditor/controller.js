exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/stub/MSWEditor',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKLayoutRender(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteSignature: 'MSWEditorStubRoute',
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}];
};
