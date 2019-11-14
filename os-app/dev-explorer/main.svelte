<script>
export let MSTExplorerRaw = '';
export let MSTExplorerMassage = '';
export let MSTExplorerOptions = {};

import MassageTXT from 'MassageTXT';

const mod = {

	// MESSAGE

	MSTEditorDispatchValueChangedRaw (event) {
		MSTExplorerRaw = event.detail;

		mod.ReactOutput();
	},

	MSTEditorDispatchValueChangedMassage (event) {
		MSTExplorerMassage = event.detail;

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

<div class="MSTExplorer">

<div class="MSTExplorerWorkspace">
	<div class="MSTExplorerConvert">
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

		<pre class="MSTExplorerOutput">{ mod._ValueOutput }</pre>
	</div>

	<div class="MSTExplorerMassageEditor">
		<MSTEditor MSTEditorOptions={ {
			lineWrapping: true,

			keyMap: 'sublime',

			extraKeys: {
				Tab: false,
			},
		} } MSTEditorInitialValue={ MSTExplorerMassage } on:MSTEditorDispatchValueChanged={ mod.MSTEditorDispatchValueChangedMassage } />
	</div>
</div>

</div>

<style src="./ui-style.css"></style>
