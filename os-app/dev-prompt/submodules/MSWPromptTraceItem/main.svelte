<script>
export let MSWPromptTraceItemOperation;
export let MSWPromptTraceItemInputContent;
export let MSWPromptTraceItemArguments = [];
export let OLSKLocalized;

const mod = {

	// VALUE

	_ValueInputTruncated: true,

	// INTERFACE

	InterfaceInputDidClick () {
		mod._ValueInputTruncated = !mod._ValueInputTruncated;
	}

};
</script>

<div class="MSWPromptTraceItem">

<div class="MSWPromptTraceItemOperation">{ MSWPromptTraceItemOperation }</div>

<div class="MSWPromptTraceItemInput" class:MSWPromptTraceItemInputTruncated={ mod._ValueInputTruncated } on:click={ mod.InterfaceInputDidClick }>
	<div class="MSWPromptTraceItemInputHeading OLSKLayoutElementTappable">{ OLSKLocalized('MSWPromptTraceItemInputHeadingText') }</div>

	<div class="MSWPromptTraceItemInputContent">{ MSWPromptTraceItemInputContent }</div>
</div>

{#if MSWPromptTraceItemArguments.length }
	<div class="MSWPromptTraceItemArguments">
		<div class="MSWPromptTraceItemArgumentsHeading">{ OLSKLocalized('MSWPromptTraceItemArgumentsHeadingText') }</div>

		<div class="MSWPromptTraceItemArgumentsContent">{ MSWPromptTraceItemArguments }</div>
	</div>
{/if}

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

.MSWPromptTraceItemInputTruncated .MSWPromptTraceItemInputContent {
	max-height: 30px;

	overflow: hidden;
}

.MSWPromptTraceItemInputTruncated::after { 
  content: '…';

  opacity: 0.6;
}
</style>
