exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/prompt',
		OLSKRouteMethod: 'get',
		OLSKRouteSignature: 'MSWPromptRoute',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKLayoutRender(require('path').join(__dirname, 'ui-view'));
		},
		OLSKRouteLanguages: ['en'],
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}];
};
