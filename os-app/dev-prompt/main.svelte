<script>
export let MSWPromptRaw = '';
export let MSWPromptMassage = '';
export let MSWPromptOptions = {};

let _OLSKLocalizedMap = JSON.parse(`{"OLSK_I18N_SEARCH_REPLACE":"OLSK_I18N_SEARCH_REPLACE"}`);
import OLSKInternational from 'OLSKInternational';
export const OLSKLocalized = function(inputData) {
	return OLSKInternational.OLSKInternationalLocalizedString(inputData, _OLSKLocalizedMap[MSWPromptOptions.MSWOptionLanguage || 'en']);
};

import MassageTXT from 'MassageTXT';
import MSWPromptLogic from './ui-logic.js';

import unifiedPackage from 'unified';
import remarkParsePackage from 'remark-parse';
const uParser = unifiedPackage().use(remarkParsePackage).parse;

const mod = {

	// MESSAGE

	MSWEditorDispatchValueDidChangeRaw (inputData) {
		MSWPromptRaw = inputData;

		mod.ReactOutput();
	},

	MSWEditorDispatchValueDidChangeMassage (inputData) {
		MSWPromptMassage = inputData;

		mod.ReactOutput();
	},

	// VALUE

	_ValueTraceObjects: [],

	_ValueOutput: '',

	// REACT

	ReactOutput () {
		const item = [];
		delete mod._ValueSyntaxError;

		try {
			mod._ValueOutput = MSWPromptMassage[0] !== '$' ? MSWPromptRaw : MassageTXT.MSTMassage(MSWPromptRaw, MSWPromptMassage.replace(/\\n/g, '\n'), {
				MSTOptionMarkdownParser: uParser,
				MSTOptionTrace (index, key, value) {
					if (!item[index]) {
						item[index] = {}
					}

					item[index][key] = value;
				},
			});
		} catch (err) {
			mod._ValueSyntaxError = err;
		}

		mod._ValueTraceObjects = item.slice(1);
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

import MSWEditor from './submodules/MSWEditor/main.svelte';
import MSWPromptTraceItem from './submodules/MSWPromptTraceItem/main.svelte';
</script>

<div class="MSWPrompt">

<div class="MSWPromptToolbar">
	<a class="MSWPromptPermalink" href={ `${ window.location.pathname }?MSWPromptRaw=${ MSWPromptLogic.MSWPermalinkEncode(MSWPromptRaw) }&MSWPromptMassage=${ MSWPromptLogic.MSWPermalinkEncode(MSWPromptMassage) }` } target="_blank">{ OLSKLocalized('MSWPromptPermalinkText') }</a>
</div>

<div class="MSWPromptWorkspace">
	<div class="MSWPromptConvert">
		<div class="MSWPromptRaw">
			<MSWEditor MSWEditorOptions={ {
				lineNumbers: true,
				lineWrapping: true,

				keyMap: 'sublime',

				extraKeys: {
					Tab: false,
				},
			} } MSWEditorInitialValue={ MSWPromptRaw } MSWEditorDispatchValueDidChange={ mod.MSWEditorDispatchValueDidChangeRaw } />
		</div>

		<div class="MSWPromptTrace">
			{#each mod._ValueTraceObjects as item}
				<MSWPromptTraceItem MSWPromptTraceItemOperation={ item.MSTTraceOperation } MSWPromptTraceItemInput={ MSWPromptLogic.MSWStringify(MSWPromptLogic.MSWVisualString(item.MSTTraceInput)) } MSWPromptTraceItemArguments={ (item.MSTTraceArguments || []).map(function (e) {
					return MSWPromptLogic.MSWStringify(MSWPromptLogic.MSWVisualString(e))
				}) } OLSKLocalized={ OLSKLocalized } />
			{/each}

			{#if mod._ValueSyntaxError}
				<div class="MSWPromptSyntaxError">{ mod._ValueSyntaxError.message }</div>
			{/if}
		</div>

		<pre class="MSWPromptOutput">{ mod._ValueOutput }</pre>
	</div>

	<div class="MSWPromptMassage">
		<MSWEditor MSWEditorOptions={ {
			lineWrapping: true,

			keyMap: 'sublime',

			extraKeys: {
				Tab: false,
				'Shift-Tab': false,
			},
		} } MSWEditorInitialValue={ MSWPromptMassage } MSWEditorDispatchValueDidChange={ mod.MSWEditorDispatchValueDidChangeMassage } />
	</div>
</div>

</div>

<style src="./ui-style.css"></style>
