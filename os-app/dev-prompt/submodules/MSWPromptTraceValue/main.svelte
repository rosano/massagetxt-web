<script>
export let MSWPromptTraceValueContent;

const mod = {

	// VALUE

	_IsTruncated: true,

	// INTERFACE

	InterfaceDidClick () {
		mod._IsTruncated = !mod._IsTruncated;
	},

};
</script>

<div class="MSWPromptTraceValue" class:MSWPromptTraceValueTruncated={ mod._IsTruncated } on:click={ mod.InterfaceDidClick }>

<div class="MSWPromptTraceValueContent">
	{ MSWPromptTraceValueContent }
</div>

</div>

<style>
.MSWPromptTraceValueTruncated .MSWPromptTraceValueContent {
	max-height: 30px;

	overflow: hidden;
}

.MSWPromptTraceValueTruncated::after { 
  content: '…';

  opacity: 0.6;
}
</style>
