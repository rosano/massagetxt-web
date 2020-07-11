<script>
let _OLSKLocalizedMap = JSON.parse(`{"OLSK_I18N_SEARCH_REPLACE":"OLSK_I18N_SEARCH_REPLACE"}`);
import OLSKInternational from 'OLSKInternational';
const OLSKLocalized = function(inputData) {
	return OLSKInternational.OLSKInternationalLocalizedString(inputData, _OLSKLocalizedMap[window.OLSKPublicConstants('OLSKSharedPageCurrentLanguage')]);
};

import Module from './main.svelte';
</script>

<Module
	{...Object.fromEntries(Array.from((new window.URLSearchParams(window.location.search)).entries()).map(function ([key, value]) {
		return [key, key === 'MSWPromptTraceItemArguments' ? JSON.parse(value) : value];
	}))}
	OLSKLocalized={ OLSKLocalized }
	/>
