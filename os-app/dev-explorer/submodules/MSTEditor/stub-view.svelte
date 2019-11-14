<script>
import Module from './main.svelte';

const mod = {

	TestMSTEditorDispatchValueChanged (inputData) {
		window.TestMSTEditorDispatchValueChanged.innerHTML = parseInt(window.TestMSTEditorDispatchValueChanged.innerHTML) + 1;	
		window.TestMSTEditorDispatchValueChangedValue.innerHTML = inputData.detail;
	},

};
</script>

<Module
	on:MSTEditorDispatchValueChanged={ mod.TestMSTEditorDispatchValueChanged }
	{...Object.fromEntries((new window.URLSearchParams(window.location.search)).entries())}
	/>

<p>
	<strong>MSTEditorDispatchValueChanged</strong>
	<span id="TestMSTEditorDispatchValueChanged">0</span>
	<span id="TestMSTEditorDispatchValueChangedValue">undefined</span>
</p>
