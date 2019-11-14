<script>
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

</script>

<div class="Container MSTExplorer">
</div>

<style src="./ui-style.css"></style>
