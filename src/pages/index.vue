<template>
	<main class="container">
		<header v-if="home" class="block">
			<h1>{{ $prismic.asText(home.data.title) }}</h1>
			<prismic-rich-text :field="home.data.description" />
		</header>

		<ul class="stack block" v-if="recipes">
			<li v-for="recipe in recipes" :key="recipe.uid">
				<prismic-link :field="recipe">
					<article class="nes-container is-rounded with-title">
						<prismic-text class="title" :field="recipe.data.title" wrapper="h2" />
						<section>
							<prismic-image :field="recipe.data.thumbnail" />
							<div class="stack">
								<ul>
									<li>
										<div class="nes-badge is-splited">
											<span class="is-dark">Dur.</span>
											<span class="is-primary">{{ recipe.data.duration}}m</span>
										</div>
									</li>
									<li>
										<div class="nes-badge">
											<span :class="{
												'is-success': recipe.data.difficulty === 'Beginner',
												'is-warning': recipe.data.difficulty === 'Intermediate',
												'is-error': recipe.data.difficulty === 'Advanced'
											}">{{ recipe.data.difficulty }}</span>
										</div>
									</li>
								</ul>
								<prismic-rich-text :field="recipe.data.description" />
							</div>
						</section>
					</article>
				</prismic-link>
			</li>
		</ul>
	</main>
</template>

<script setup>
import { useAllPrismicDocumentsByType, useSinglePrismicDocument } from "@prismicio/vue";

const { data: home } = useSinglePrismicDocument("home");

const { data: recipes } = useAllPrismicDocumentsByType("recipes");
</script>

<style scoped>
a {
	display: block;
}

article section, article ul {
	display: flex;
	align-items: flex-start;
	gap: 2rem;
}
</style>
