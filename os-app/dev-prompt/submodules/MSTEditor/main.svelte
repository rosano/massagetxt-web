<script>
export let MSTEditorInitialValue = '';
export let MSTEditorOptions = {};
export let MSTEditorDispatchValueDidChange = null;

export const MSTEditorSetDocument = function (inputData) {
	mod._ValueCodeMirrorInstance.setValue(inputData);
	mod._ValueCodeMirrorInstance.getDoc().clearHistory();
};

export let EditorConfigure = function (e) {
	// console.log(mod._ValueCodeMirrorInstance ? 'run' : 'queue', e);
	return mod._ValueCodeMirrorInstance ? e(mod._ValueCodeMirrorInstance) : mod._ValuePostInitializeQueue.push(e);
};

import { OLSK_TESTING_BEHAVIOUR } from 'OLSKTesting'

const mod = {

	// INTERFACE

	InterfaceInputDebugDidInput (event) {
		if (MSTEditorDispatchValueDidChange) {
			MSTEditorDispatchValueDidChange(this.value);
		}
	},

	// VALUE

	_ValuePostInitializeQueue: [],

	// SETUP

	SetupEverything () {
		if (OLSK_TESTING_BEHAVIOUR()) {
			return;
		}

		mod.SetupCodeMirrorInstance();

		// console.log(mod._ValuePostInitializeQueue);
		
		mod._ValuePostInitializeQueue.splice(0, mod._ValuePostInitializeQueue.length).forEach(function(e) {
			// console.log('run', e);

			return e(mod._ValueCodeMirrorInstance);
		});
	},

	SetupCodeMirrorInstance() {
		mod._ValueCodeMirrorInstance = CodeMirror.fromTextArea(mod._ModuleInstanceElement, MSTEditorOptions);

		mod._ValueCodeMirrorInstance.setValue(MSTEditorInitialValue);

		mod._ValueCodeMirrorInstance.on('change', function (instance, changeObject) {
			if (changeObject.origin === 'setValue') {
				return;
			}

			if (MSTEditorDispatchValueDidChange) {
				MSTEditorDispatchValueDidChange(instance.getValue());
			}
		});

		mod._ValueCodeMirrorInstance.focus();
	},

	// LIFECYCLE

	LifecycleComponentDidMount () {
		mod.SetupEverything();
	},

}

import { onMount } from 'svelte';
onMount(mod.LifecycleComponentDidMount);
</script>

<div class="MSTEditor">

{#if OLSK_TESTING_BEHAVIOUR()}
	<textarea class="MSTEditorFieldDebug" on:input={ mod.InterfaceInputDebugDidInput } value={ MSTEditorInitialValue }></textarea>
{/if}

<textarea class="MSTEditorField" bind:this={ mod._ModuleInstanceElement }></textarea>

</div>
