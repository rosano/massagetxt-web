import RollupStart from './main.svelte';

const mod = {
	
	TestMSWEditorDispatchValueDidChange (inputData) {
		window.TestMSWEditorDispatchValueDidChange.innerHTML = parseInt(window.TestMSWEditorDispatchValueDidChange.innerHTML) + 1;	
		window.TestMSWEditorDispatchValueDidChangeValue.innerHTML = inputData;
	},

};

const MSWEditor = new RollupStart({
	target: document.body,
	props: Object.assign({...Object.fromEntries((new window.URLSearchParams(window.location.search)).entries())}, {
		MSWEditorDispatchValueDidChange: mod.TestMSWEditorDispatchValueDidChange,
	}),
});

export default MSWEditor;
