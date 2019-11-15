<script>
import Module from './main.svelte';

const mod = {

	TestMSTEditorDispatchValueDidChange (inputData) {
		window.TestMSTEditorDispatchValueDidChange.innerHTML = parseInt(window.TestMSTEditorDispatchValueDidChange.innerHTML) + 1;	
		window.TestMSTEditorDispatchValueDidChangeValue.innerHTML = inputData.detail;
	},

};
</script>

<Module
	on:MSTEditorDispatchValueDidChange={ mod.TestMSTEditorDispatchValueDidChange }
	{...Object.fromEntries((new window.URLSearchParams(window.location.search)).entries())}
	/>

<p>
	<strong>MSTEditorDispatchValueDidChange</strong>
	<span id="TestMSTEditorDispatchValueDidChange">0</span>
	<span id="TestMSTEditorDispatchValueDidChangeValue">undefined</span>
</p>
