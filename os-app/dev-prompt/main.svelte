<script>
export let MSWPromptRaw = '';
export let MSWPromptMassage = '';
export let MSWPromptOptions = {};

let _OLSKLocalizedMap = JSON.parse(`{"OLSK_I18N_SEARCH_REPLACE":"OLSK_I18N_SEARCH_REPLACE"}`);
import OLSKInternational from 'OLSKInternational';
export const OLSKLocalized = function(inputData) {
	return OLSKInternational.OLSKInternationalLocalizedString(inputData, _OLSKLocalizedMap[MSWPromptOptions.MSTOptionLanguage || 'en']);
};

import MassageTXT from 'MassageTXT';
import MSWPromptLogic from './ui-logic.js';

const mod = {

	// MESSAGE

	MSTEditorDispatchValueDidChangeRaw (inputData) {
		MSWPromptRaw = inputData;

		mod.ReactOutput();
	},

	MSTEditorDispatchValueDidChangeMassage (inputData) {
		MSWPromptMassage = inputData;

		mod.ReactOutput();
	},

	// VALUE

	_ValueTraceObjects: [],

	_ValueOutput: '',

	// REACT

	ReactOutput () {
		const item = [];

		mod._ValueOutput = MSWPromptMassage[0] !== '$' ? MSWPromptRaw : MassageTXT.MSTMassage(MSWPromptRaw, MSWPromptMassage, {
			MSTOptionTrace (inputData) {
				item.push(inputData);
			},
		});

		mod._ValueTraceObjects = item;
	},

	// SETUP

	SetupEverything() {
		mod.ReactOutput();
	},

	// LIFECYCLE

	LifecycleModuleWillMount() {
		mod.SetupEverything();
	},

};

mod.LifecycleModuleWillMount();

import MSTEditor from './submodules/MSTEditor/main.svelte';
import MSWPromptTraceItem from './submodules/MSWPromptTraceItem/main.svelte';
</script>

<div class="MSWPrompt">

<div class="MSWPromptToolbar">
	<a class="MSWPromptPermalink" href={ `${ window.location.pathname }?MSWPromptRaw=${ MSWPromptLogic.MSTPermalinkEncode(MSWPromptRaw) }&MSWPromptMassage=${ MSWPromptLogic.MSTPermalinkEncode(MSWPromptMassage) }` }>{ OLSKLocalized('MSWPromptPermalinkText') }</a>
</div>

<div class="MSWPromptWorkspace">
	<div class="MSWPromptConvert">
		<div class="MSWPromptRaw">
			<MSTEditor MSTEditorOptions={ {
				lineNumbers: true,
				lineWrapping: true,

				keyMap: 'sublime',

				extraKeys: {
					Tab: false,
				},
			} } MSTEditorInitialValue={ MSWPromptRaw } MSTEditorDispatchValueDidChange={ mod.MSTEditorDispatchValueDidChangeRaw } />
		</div>

		<div class="MSWPromptTrace">
			{#each mod._ValueTraceObjects as item}
				<MSWPromptTraceItem MSWPromptTraceItemOperation={ item.MSTTraceOperation } MSWPromptTraceItemInputContent={ MSWPromptLogic.MSTStringify(item.MSTTraceInput) } OLSKLocalized={ OLSKLocalized } />
			{/each}
		</div>

		<pre class="MSWPromptOutput">{ mod._ValueOutput }</pre>
	</div>

	<div class="MSWPromptMassage">
		<MSTEditor MSTEditorOptions={ {
			lineWrapping: true,

			keyMap: 'sublime',

			extraKeys: {
				Tab: false,
				'Shift-Tab': false,
			},
		} } MSTEditorInitialValue={ MSWPromptMassage } MSTEditorDispatchValueDidChange={ mod.MSTEditorDispatchValueDidChangeMassage } />
	</div>
</div>

</div>

<style src="./ui-style.css"></style>
