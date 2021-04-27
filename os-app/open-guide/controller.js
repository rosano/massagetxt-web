function OLSKRouteFunction (req, res, next) {
	return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'ui-view'), {
		MSWGuideContent: res.OLSKMarkdownContent(require('path').join(__dirname, `text.${ res.locals.OLSKSharedPageCurrentLanguage }.md`)),
		OLSKStringReplaceTokens: require('OLSKString').OLSKStringReplaceTokens,
	});
};

exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/guide',
		OLSKRouteSignature: 'MSWGuideRoute',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction,
		_OLSKRouteLanguageCodes: ['en'],
	}];
};
