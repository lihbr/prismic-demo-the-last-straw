import MyComponent from '../../../../slices/TableList';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TableList'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"table_list","items":[{"key":"incentivize collaborative e-business","value":"revolutionize sexy bandwidth"},{"key":"disintermediate compelling bandwidth","value":"embrace out-of-the-box markets"},{"key":"target dynamic portals","value":"revolutionize distributed e-commerce"},{"key":"disintermediate front-end methodologies","value":"synthesize cutting-edge web services"}],"primary":{"title":[{"type":"heading3","text":"Grow compelling networks","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
