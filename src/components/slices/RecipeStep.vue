<template>
	<section>
		<div class="nes-container is-rounded with-title">
			<div class="title">Step {{ step}} | {{ slice.primary.duration }}m</div>
			<prismic-rich-text :field="slice.primary.task" />
		</div>
	</section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue";

export default {
	props: getSliceComponentProps(),
	computed: {
		step() {
			return this.slices
				.slice(0, this.index + 1)
				.filter(slice => slice.slice_type === "recipe_step").length;
		},
	},
};
</script>
