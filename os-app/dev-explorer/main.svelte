<script>
export let MSTExplorerSource = '';
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

<div class="MSTExplorerSourceEditor">
	<MSTEditor MSTEditorOptions={ {
		lineNumbers: true,
		lineWrapping: true,

		keyMap: 'sublime',

		extraKeys: {
			Tab: false,
		},
	} } MSTEditorInitialValue={ MSTExplorerSource }/>
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

</div>

<style src="./ui-style.css"></style>
