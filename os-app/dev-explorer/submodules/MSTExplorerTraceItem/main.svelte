<script>
export let MSTExplorerTraceItemOperation;
export let MSTExplorerTraceItemInputContent;
export let OLSKLocalized;
</script>

<div class="MSTExplorerTraceItem">

<div class="MSTExplorerTraceItemOperation">{ MSTExplorerTraceItemOperation }</div>

<div class="MSTExplorerTraceItemInputHeading">{ OLSKLocalized('MSTExplorerTraceItemInputHeadingText') }</div>

<div class="MSTExplorerTraceItemInputContent">{ MSTExplorerTraceItemInputContent }</div>

</div>

<style>
.MSTExplorerTraceItem {
	padding: 5px 0;
	border-top: 1px solid rgba(0, 0, 0, 0.1);

	font-family: monospace;
}

.MSTExplorerTraceItemOperation {
	font-weight: bold;
}

.MSTExplorerTraceItemInputHeading {
	margin-top: 10px;

	text-transform: uppercase;
	opacity: 0.5;
	letter-spacing: 3px;
}
</style>
