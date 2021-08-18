<template>
	<section>
		<prismic-text :field="slice.primary.title" wrapper="h3" />
		<div class="nes-table-responsive">
		<table class="nes-table is-bordered is-centered">
			<tbody>
				<tr v-for="item in slice.items" :key="item.key">
					<td>{{ item.key }}</td>
					<td>{{ item.value }}</td>
				</tr>
			</tbody>
		</table>
</div>
	</section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue";

export default {
	props: getSliceComponentProps(),
};
</script>

<style scoped>
table {
	width: calc(100% - 8px);
}
</style>
