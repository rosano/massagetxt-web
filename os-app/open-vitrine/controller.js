exports.OLSKControllerUseLivereload = function() {
	return process.env.NODE_ENV === 'development';
};

exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/',
		OLSKRouteMethod: 'get',
		OLSKRouteSignature: 'MSWVitrineRoute',
		OLSKRouteFunction: function (req, res, next) {
			return res.render(require('path').join(__dirname, 'ui-view'), {
				MSWVitrineContent: require('OLSKString').OLSKStringReplaceTokens(require('marked').setOptions({
					gfm: true,
					headerIds: false,
				})(require('fs').readFileSync(require('path').join(__dirname, `text.${ res.locals.OLSKSharedPageCurrentLanguage }.md`), 'utf-8')), {
					MSWVitrineTokenGuideURL: res.locals.OLSKCanonicalFor('MSWGuideRoute'),
					MSWVitrineTokenExploreURL: res.locals.OLSKCanonicalFor('MSWExploreRoute'),
					MSW_SHARED_GITHUB_URL: process.env.MSW_SHARED_GITHUB_URL,
				}),
				OLSKStringReplaceTokens: require('OLSKString').OLSKStringReplaceTokens,
			});
		},
		OLSKRouteLanguages: ['en'],
		OLSKRouteMiddlewares: [
			'MSWSharedGitHubLinkGuardMiddleware',
		],
	}];
};
