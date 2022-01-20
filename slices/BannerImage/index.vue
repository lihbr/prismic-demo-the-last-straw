<template>
	<figure>
		<prismic-image :field="slice.primary.image" />
	</figure>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue";

export default {
	props: getSliceComponentProps(),
};
</script>

<style scoped>
img {
	max-width: 100%;
}
</style>
