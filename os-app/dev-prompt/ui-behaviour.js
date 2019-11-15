const mod = {

	// SETUP

	SetupEverything() {
		const app = new Main({
			target: document.getElementById('MSWPromptTarget'),
			props: Object.fromEntries((new window.URLSearchParams(window.location.search)).entries()),
		});
	},

	// LIFECYCLE

	LifecyclePageWillLoad () {
		mod.SetupEverything();
	},
};

window.MSWPromptBehaviour = mod
