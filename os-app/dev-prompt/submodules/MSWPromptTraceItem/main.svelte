<script>
export let MSWPromptTraceItemOperation;
export let MSWPromptTraceItemInput;
export let MSWPromptTraceItemArguments = [];
export let OLSKLocalized;

import MSWPromptTraceValue from '../MSWPromptTraceValue/main.svelte';
</script>

<div class="MSWPromptTraceItem">

<div class="MSWPromptTraceItemOperation">{ MSWPromptTraceItemOperation }</div>

<div class="MSWPromptTraceItemInput">
	<div class="MSWPromptTraceItemInputHeading OLSKLayoutElementTextVisual">{ OLSKLocalized('MSWPromptTraceItemInputHeadingText') }</div>

	<MSWPromptTraceValue MSWPromptTraceValueContent={ MSWPromptTraceItemInput } />
</div>

{#if MSWPromptTraceItemArguments.length }
	<div class="MSWPromptTraceItemArguments">
		<div class="MSWPromptTraceItemArgumentsHeading">{ OLSKLocalized('MSWPromptTraceItemArgumentsHeadingText') }</div>

		{#each MSWPromptTraceItemArguments as item}
			<MSWPromptTraceValue MSWPromptTraceValueContent={ item } />
		{/each}
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
</style>
