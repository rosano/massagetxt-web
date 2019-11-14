const mod = {

	// SETUP

	SetupEverything() {
		let app = new Main({
			target: document.getElementById('MSTExplorerTarget'),
			props: Object.fromEntries((new window.URLSearchParams(window.location.search)).entries()),
		});
	},

	// LIFECYCLE

	LifecyclePageWillLoad () {
		mod.SetupEverything();
	},
};

window.MSTExplorerBehaviour = mod
