const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWVitrine_Misc', function () {

	before(function () {
		return browser.OLSKVisit(kDefaultRoute)
	});

	context('MSWVitrine', function () {
		
		it('classes OLSKDecor', function () {
			browser.assert.hasClass(MSWVitrine, 'OLSKDecor')
		});

		it('classes OLSKDecorCapped', function () {
			browser.assert.hasClass(MSWVitrine, 'OLSKDecorCapped')
		});

		it('classes OLSKDecorNoTopPad', function () {
			browser.assert.hasClass(MSWVitrine, 'OLSKDecorNoTopPad')
		});
	
	});

	describe('OLSKCrown', function test_OLSKCrown () {

		it('sets OLSKCrownCardImageURL', function () {
			browser.assert.attribute('.OLSKCrownCardImage', 'src', '/_shared/MSWRootLink/ui-assets/identity.svg');
		});
	
	});

	describe('MSWVitrineVideo', function test_MSWVitrineVideo () {

		it('sets src', function () {
			browser.assert.attribute(MSWVitrineVideo, 'src', process.env.MSW_VITRINE_VIDEO_URL);
		});

		it('sets allow', function () {
			browser.assert.attribute(MSWVitrineVideo, 'allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
		});

		it('sets allowfullscreen', function () {
			browser.assert.attribute(MSWVitrineVideo, 'allowfullscreen', '');
		});

	});

	describe('MSWVitrineDemosOneFrame', function test_MSWVitrineDemosOneFrame () {

		it('sets src', function () {
			browser.assert.attribute(MSWVitrineDemosOneFrame, 'src', '/explore?raw=alfa%0Abravo%0Acharlie&massage=%24input.lines.prepend%28Hello%20%29.postpend%28!%29.join%28%5Cn%29');
		});

	});

	describe('MSWVitrineDemosTwoFrame', function test_MSWVitrineDemosTwoFrame () {

		it('sets src', function () {
			browser.assert.attribute(MSWVitrineDemosTwoFrame, 'src', '/explore?raw=%23%20one%0A-%20alfa%0A-%20bravo%0A-%20charlie%0A%0A%23%20two%0A-%20delta&massage=%24input.markdown.items.join%28%2C%20%29.prepend%28Hello%20%29.postpend%28!%29');
		});

	});

	describe('MSWVitrineDemosThreeFrame', function test_MSWVitrineDemosThreeFrame () {
		
		it('sets src', function () {
			browser.assert.attribute(MSWVitrineDemosThreeFrame, 'src', '/explore?raw=spanish-vocab-journal%0A%0A%23%202020.04.17%0A-%20atraco%3Bheist%0A-%20hojuelas%3Bflakes%0A-%20nuboso%3Bcloudy%0A-%20nubloso%3Bhazy%0A-%20lujoso%3Bluxurious%0A-%20nariz%3Bnose%0A-%20desdoble%3Bunfold%0A-%20soplando%3Bblowing%0A%0A%23%202020.04.14%0A-%20¿cómo%20sigues%3F%3Bhow%27s%20it%20going%3F%0A%0A%23%202020.03.21%0A-%20aprovisionarse%3Bto%20stock%20up%0A%0A%5B%5B%23lingo%5D%5D&massage=%24input.markdown.sections%5B1%5D.markdown.items.postpend%28%3Bspanish%29.join%28%5Cn%29');
		});

	});

	describe('MSWVitrineExploreButton', function test_MSWVitrineExploreButton () {

		it('classes OLSKDecorPress', function () {
			browser.assert.hasClass(MSWVitrineExploreButton, 'OLSKDecorPress');
		});
		
		it('classes OLSKDecorPressCall', function () {
			browser.assert.hasClass(MSWVitrineExploreButton, 'OLSKDecorPressCall');
		});
	
	});

	describe('ROCOGazette', function test_ROCOGazette () {

		it('sets ROCOBulletinProject', function () {
			browser.assert.attribute('.ROCOBulletinProjectField', 'value', process.env.ROCO_SHARED_PROJECT_ID);
		});

	});

	describe('OLSKEdit', function test_OLSKEdit () {

		it('sets OLSKEditURL', function () {
			browser.assert.attribute('.OLSKEdit', 'href', process.env.OLSK_REPO_URL);
		});

	});

});
