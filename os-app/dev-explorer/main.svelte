<script>
export let MSTExplorerText = '';
export let MSTExplorerMassage = '';
export let MSTExplorerOptions = {};

const mod = {

	// SETUP

	SetupEverything() {
	},

	// LIFECYCLE

	LifecycleModuleWillMount() {
		mod.SetupEverything();
	},

};

mod.LifecycleModuleWillMount();

import MSTEditor from './submodules/MSTEditor/main.svelte';
</script>

<div class="Container MSTExplorer">

<div class="MSTExplorerTextEditor">
	<MSTEditor MSTEditorOptions={ {
		lineNumbers: true,
		lineWrapping: true,

		keyMap: 'sublime',

		extraKeys: {
			Tab: false,
		},
	} } MSTEditorInitialValue={ MSTExplorerText }/>
</div>

<div class="MSTExplorerMassageEditor">
	<MSTEditor MSTEditorOptions={ {
		lineWrapping: true,

		keyMap: 'sublime',

		extraKeys: {
			Tab: false,
		},
	} } MSTEditorInitialValue={ MSTExplorerMassage }/>
</div>

<pre class="MSTExplorerOutput"></pre>

</div>

<style src="./ui-style.css"></style>
