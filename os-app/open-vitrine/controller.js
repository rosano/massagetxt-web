exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/',
		OLSKRouteMethod: 'get',
		OLSKRouteSignature: 'MSWVitrineRoute',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'ui-view'), {
				MSWVitrineContent: res.OLSKMarkdownContent(require('path').join(__dirname, `text-${ res.locals.OLSKSharedPageCurrentLanguage }.md`), {
					MSWVitrineTokenGuideURL: res.locals.OLSKCanonical('MSWGuideRoute'),
					MSWVitrineTokenExploreURL: res.locals.OLSKCanonical('MSWExploreRoute'),

					MSW_SHARED_GITHUB_URL: process.env.MSW_SHARED_GITHUB_URL,
				}),
				OLSKStringReplaceTokens: require('OLSKString').OLSKStringReplaceTokens,
			});
		},
		OLSKRouteLanguageCodes: ['en'],
	}];
};
