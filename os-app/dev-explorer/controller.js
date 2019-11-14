exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/explorer',
		OLSKRouteMethod: 'get',
		OLSKRouteSignature: 'MSTExplorerRoute',
		OLSKRouteFunction: function(req, res, next) {
			return res.render(require('path').join(__dirname, 'ui-view'), {});
		},
		OLSKRouteLanguages: ['en'],
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}];
};
