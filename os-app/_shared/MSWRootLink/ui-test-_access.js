Object.entries({
	MSWRootLink: '.MSWRootLink',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

require('./controller.js').OLSKControllerRoutes().forEach(function (kDefaultRoute) {

	describe(`MSWRootLink_Access-${ kDefaultRoute.OLSKRouteSignature }`, function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});
		
		it('shows MSWRootLink', function() {
			return browser.assert.elements(MSWRootLink, 1);
		});
		
		it('shows OLSKRootLink', function() {
			return browser.assert.elements('.OLSKRootLink', 1);
		})
		
	});
	
})
