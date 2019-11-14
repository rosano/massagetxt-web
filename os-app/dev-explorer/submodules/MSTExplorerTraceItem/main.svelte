<script>
export let MSTExplorerTraceItemOperation = '';
export let MSTExplorerTraceItemInput;
</script>

<div class="MSTExplorerTraceItem">

<div class="MSTExplorerTraceItemOperation">{ MSTExplorerTraceItemOperation }</div>

<div class="MSTExplorerTraceItemInput">{ MSTExplorerTraceItemInput }</div>

</div>

<style>
.MSTExplorerTraceItem {
	padding: 5px 0;
	border-top: 1px solid rgba(0, 0, 0, 0.1);

	font-family: monospace;
}
</style>
