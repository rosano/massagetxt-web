exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/prompt',
		OLSKRouteMethod: 'get',
		OLSKRouteSignature: 'MSWPromptRoute',
		OLSKRouteFunction: function(req, res, next) {
			return res.render(require('path').join(__dirname, 'ui-view'));
		},
		OLSKRouteLanguages: ['en'],
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}];
};
