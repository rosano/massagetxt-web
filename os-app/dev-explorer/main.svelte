<script>
export let MSTExplorerRaw = '';
export let MSTExplorerMassage = '';
export let MSTExplorerOptions = {};

import MassageTXT from 'MassageTXT';

const mod = {

	// MESSAGE

	MSTEditorDispatchValueChangedRaw () {
		MSTExplorerRaw = arguments[0].detail;
		
		mod.ReactOutput();
	},

	// VALUE

	_ValueOutput: '',

	// REACT

	ReactOutput () {
		mod._ValueOutput = MSTExplorerMassage[0] !== '$' ? MSTExplorerRaw : MassageTXT.MSTMassage(MSTExplorerRaw, MSTExplorerMassage);
	},

	// SETUP

	SetupEverything() {
		mod.ReactOutput();
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

<div class="MSTExplorerRawEditor">
	<MSTEditor MSTEditorOptions={ {
		lineNumbers: true,
		lineWrapping: true,

		keyMap: 'sublime',

		extraKeys: {
			Tab: false,
		},
	} } MSTEditorInitialValue={ MSTExplorerRaw } on:MSTEditorDispatchValueChanged={ mod.MSTEditorDispatchValueChangedRaw } />
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

<pre class="MSTExplorerOutput">{ mod._ValueOutput }</pre>

</div>

<style src="./ui-style.css"></style>
