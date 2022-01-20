import MyComponent from '../../../../slices/RecipeStep';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/RecipeStep'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"recipe_step","items":[],"primary":{"duration":1998,"task":[{"type":"paragraph","text":"Non minim Lorem ea cillum. Cupidatat amet ea esse consectetur sint cupidatat anim. Excepteur elit qui non culpa sunt nisi laborum.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
