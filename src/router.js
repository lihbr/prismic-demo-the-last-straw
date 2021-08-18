import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "Index",
			component: () =>
				import(/* webpackChunkName: "index" */ "./pages/index.vue"),
		},
		{
			path: "/recipes/:uid",
			name: "SingleRecipes",
			component: () =>
				import(
					/* webpackChunkName: "recipes--uid" */ "./pages/recipes/_uid.vue"
				),
		},
	],
});

export default router;
