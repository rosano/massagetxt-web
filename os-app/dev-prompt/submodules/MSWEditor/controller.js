exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/stub/MSWEditor',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction: function(req, res, next) {
			return res.render(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteSignature: 'MSWEditorStubRoute',
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}];
};