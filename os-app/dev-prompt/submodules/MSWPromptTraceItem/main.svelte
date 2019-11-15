<script>
export let MSWPromptTraceItemOperation;
export let MSWPromptTraceItemInputContent;
export let OLSKLocalized;

const mod = {

	// VALUE

	_ValueInputTruncated: true,

	// INTERFACE

	InterfaceInputContentDidClick () {
		mod._ValueInputTruncated = !mod._ValueInputTruncated;
	}

};
</script>

<div class="MSWPromptTraceItem">

<div class="MSWPromptTraceItemOperation">{ MSWPromptTraceItemOperation }</div>

<div class="MSWPromptTraceItemInputHeading">{ OLSKLocalized('MSWPromptTraceItemInputHeadingText') }</div>

<div class="MSWPromptTraceItemInputContent" class:MSWPromptTraceItemInputContentTruncated={ mod._ValueInputTruncated } on:click={ mod.InterfaceInputContentDidClick }>{ MSWPromptTraceItemInputContent }</div>

</div>

<style>
.MSWPromptTraceItem {
	padding: 5px 0;
	border-top: 1px solid rgba(0, 0, 0, 0.1);

	font-family: monospace;
}

.MSWPromptTraceItemOperation {
	font-weight: bold;
}

.MSWPromptTraceItemInputHeading {
	margin-top: 10px;

	text-transform: uppercase;
	opacity: 0.5;
	letter-spacing: 3px;
}
</style>
