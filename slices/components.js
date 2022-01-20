import { defineAsyncComponent } from "vue";
import { getSliceZoneComponents } from "@prismicio/vue";

export default getSliceZoneComponents({
	banner_image: defineAsyncComponent(() => import("./BannerImage/index.vue")),
	table_list: defineAsyncComponent(() => import("./TableList/index.vue")),
	recipe_step: defineAsyncComponent(() => import("./RecipeStep/index.vue")),
});
