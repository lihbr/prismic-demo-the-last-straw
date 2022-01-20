<template>
	<main class="container stack block" v-if="recipe">
		<header class="block">
			<h1>{{ $prismic.asText(recipe.data.title) }}</h1>
			<prismic-rich-text :field="recipe.data.description" />
		</header>
		<slice-zone :slices="recipe.data.slices" :components="components" />
	</main>
	<four-o-four v-else-if="error" />
</template>

<script setup>
import { usePrismicDocumentByUID } from "@prismicio/vue";
import { useRoute } from "vue-router";

import FourOFour from "../../components/FourOFour.vue";
import components from "../../../slices/components";

const route = useRoute();

const {data: recipe, error} = usePrismicDocumentByUID("recipes", route.params.uid);
</script>
