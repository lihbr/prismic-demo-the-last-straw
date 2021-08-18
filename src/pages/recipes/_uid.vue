<template>
	<main class="container stack block" v-if="recipe">
		<header class="block">
			<h1>{{ $prismic.asText(recipe.data.title) }}</h1>
			<prismic-rich-text :field="recipe.data.description" />
		</header>
		<slice-zone :slices="recipe.data.body" :components="components" />
	</main>
	<four-o-four v-else-if="error" />
</template>

<script setup>
import { getSliceZoneComponents, usePrismicDocumentByUID } from "@prismicio/vue";
import { defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";

import FourOFour from "../../components/FourOFour.vue";

const route = useRoute();

const {data: recipe, error} = usePrismicDocumentByUID("recipes", route.params.uid);

const components = getSliceZoneComponents({
	banner_image: defineAsyncComponent(() => import("../../components/slices/BannerImage.vue")),
	table_list: defineAsyncComponent(() => import("../../components/slices/TableList.vue")),
	recipe_step: defineAsyncComponent(() => import("../../components/slices/RecipeStep.vue")),
});
</script>
