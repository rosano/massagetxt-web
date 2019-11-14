<script>
export let MSTExplorerRaw = '';
export let MSTExplorerMassage = '';
export let MSTExplorerOptions = {};

import MassageTXT from 'MassageTXT';

const mod = {

	// VALUE

	_ValueOutput: '',

	// COMMAND

	CommandUpdateOutput (param1, param2) {
		mod._ValueOutput = param2[0] !== '$' ? param1 : MassageTXT.MSTMassage(param1, param2);
	},

	// SETUP

	SetupEverything() {
		mod.CommandUpdateOutput(MSTExplorerRaw, MSTExplorerMassage);
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
	} } MSTEditorInitialValue={ MSTExplorerRaw }/>
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
