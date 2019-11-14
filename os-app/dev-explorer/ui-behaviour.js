const params = Object.fromEntries((new window.URLSearchParams(window.location.search)).entries());

const mod = {

	// SETUP

	SetupEverything() {
		let app = new Main({
			target: document.getElementById('MSTExplorerTarget'),
			props: {},
		});
	},

	// LIFECYCLE

	LifecyclePageWillLoad () {
		mod.SetupEverything();
	},
};

window.MSTExplorerBehaviour = mod
