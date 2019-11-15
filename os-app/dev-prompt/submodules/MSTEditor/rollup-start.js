import RollupStart from './main.svelte';

const mod = {
	
	TestMSTEditorDispatchValueDidChange (inputData) {
		window.TestMSTEditorDispatchValueDidChange.innerHTML = parseInt(window.TestMSTEditorDispatchValueDidChange.innerHTML) + 1;	
		window.TestMSTEditorDispatchValueDidChangeValue.innerHTML = inputData;
	},

};

const MSTEditor = new RollupStart({
	target: document.body,
	props: Object.assign({...Object.fromEntries((new window.URLSearchParams(window.location.search)).entries())}, {
		MSTEditorDispatchValueDidChange: mod.TestMSTEditorDispatchValueDidChange,
	}),
});

export default MSTEditor;
