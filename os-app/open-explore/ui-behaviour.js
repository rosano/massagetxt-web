const mod = {

	// SETUP

	SetupEverything() {
		const app = new Main({
			target: document.getElementById('MSWPromptTarget'),
			props: Object.fromEntries(Array.from((new window.URLSearchParams(window.location.search)).entries()).map(function ([key, value]) {
				return [key === 'raw' ? 'MSWPromptRaw' : (key === 'massage' ? 'MSWPromptMassage' : key), value];
			})),
		});
	},

	// LIFECYCLE

	LifecyclePageWillLoad () {
		mod.SetupEverything();
	},
};

window.MSWExploreBehaviour = mod
