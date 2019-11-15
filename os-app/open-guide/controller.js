exports.OLSKControllerUseLivereload = function() {
	return process.env.NODE_ENV === 'development';
};

function OLSKRouteFunction (req, res, next) {
	return res.render(require('path').join(__dirname, 'ui-view'), {
		MSWGuideContent: require('marked').setOptions({
			gfm: true,
			headerIds: false,
		})(require('OLSKString').OLSKStringReplaceTokens(
			require('fs').readFileSync(require('path').join(__dirname, `text.${ res.locals.OLSKSharedPageCurrentLanguage }.md`), 'utf-8'), {})),
		OLSKStringReplaceTokens: require('OLSKString').OLSKStringReplaceTokens,
	});
};

exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/guide',
		OLSKRouteSignature: 'MSWGuideRoute',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction,
		_OLSKRouteLanguages: ['en'],
	}];
};
