import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({
	endpoint: "the-last-straw",
	clientConfig: {
		defaultParams: {
			routes: [
				{
					type: "home",
					path: "/"
				},
				{
					type: "recipes",
					path: "/recipes/:uid"
				},
			]
		},
	},
});

export default prismic;
