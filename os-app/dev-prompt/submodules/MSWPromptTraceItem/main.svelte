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
	<h2 class="MSWPromptTraceItemInputHeading OLSKDecorTextVisual">{ OLSKLocalized('MSWPromptTraceItemInputHeadingText') }</h2>

	<MSWPromptTraceValue MSWPromptTraceValueContent={ MSWPromptTraceItemInput } />
</div>

{#if MSWPromptTraceItemArguments.length }
	<div class="MSWPromptTraceItemArguments">
		<h2 class="MSWPromptTraceItemArgumentsHeading OLSKDecorTextVisual">{ OLSKLocalized('MSWPromptTraceItemArgumentsHeadingText') }</h2>

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

h2 {
	margin: 10px 0 0 0;
	margin-top: 10px;

	font-size: 100%;
	font-weight: normal;
	letter-spacing: 3px;
	text-transform: uppercase;
	opacity: 0.5;
}
</style>
