<script>
import Module from './main.svelte';

const mod = {

	TestMSWEditorDispatchValueDidChange (inputData) {
		window.TestMSWEditorDispatchValueDidChange.innerHTML = parseInt(window.TestMSWEditorDispatchValueDidChange.innerHTML) + 1;	
		window.TestMSWEditorDispatchValueDidChangeValue.innerHTML = inputData.detail;
	},

};
</script>

<Module
	on:MSWEditorDispatchValueDidChange={ mod.TestMSWEditorDispatchValueDidChange }
	{...Object.fromEntries((new window.URLSearchParams(window.location.search)).entries())}
	/>

<p>
	<strong>MSWEditorDispatchValueDidChange</strong>
	<span id="TestMSWEditorDispatchValueDidChange">0</span>
	<span id="TestMSWEditorDispatchValueDidChangeValue">undefined</span>
</p>
