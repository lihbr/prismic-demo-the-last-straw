<template>
	<SliceSimulator :state="state" #default="{ slices }">
		<div class="container stack block">
			<SliceZone :slices="slices" :components="components" />
		</div>
	</SliceSimulator>
</template>

<script setup>
import { SliceSimulator } from "@prismicio/slice-simulator-vue3";
import { SliceZone } from "@prismicio/vue";

import state from "../../.slicemachine/libraries-state.json";
import components from "../../slices/components";

// TODO: tmp ignore HMR for state
if (import.meta.hot) {
	import.meta.hot.accept("../../.slicemachine/libraries-state.json", () => {});
}
</script>
