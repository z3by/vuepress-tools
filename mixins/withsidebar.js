import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['sidebar']),
    drawer: {
      get() {
        return this.sidebar
      },
      set(value) {
        this.setSidebar(value)
      },
    },
  },
  methods: {
    ...mapMutations(['setSidebar', 'setLoading']),
  },
}
