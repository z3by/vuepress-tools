<template>
  <div>
    <v-navigation-drawer v-model="drawer" :clipped="false" :width="400" app>
      <v-container>
        <v-autocomplete
          v-model="select"
          :loading="loading"
          :items="items"
          :item-text="'name'"
          :item-value="'slug'"
          :search-input.sync="search"
          append-icon="mdi-magnify"
          class="my-5"
          cache-items
          flat
          hide-no-data
          hide-details
          label="Search Plugins"
          solo-inverted
        ></v-autocomplete>
      </v-container>
      <v-list-item
        v-for="plugin in plugins"
        :key="plugin.slug"
        :to="`/plugins/${plugin.slug}`"
        nuxt
      >
        <v-list-item-avatar>
          <v-img v-if="plugin.author.avatar" :src="plugin.author.avatar">
          </v-img>
          <span v-else class="white--text">{{ plugin.slug[0] }}</span>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold pb-1">{{
            plugin.name
          }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ plugin.description }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card
        v-intersect="{
          handler: onIntersect,
          options: {
            threshold: [0, 0.5, 1.0],
          },
        }"
        :loading="isLoading"
        height="200"
        color="transparent"
        flat
      >
      </v-card>
    </v-navigation-drawer>
    <nuxt-child />
  </div>
</template>

<script>
import WithSidebarMixin from '@/mixins/withsidebar'
import { mapState, mapMutations } from 'vuex'

export default {
  mixins: [WithSidebarMixin],
  data() {
    return {
      isLoading: false,
      isIntersecting: false,
      loading: false,
      items: [],
      search: null,
      select: null
    }
  },

  fetch() {
    this.fetchPlugins()
  },
  head: {
    title: 'VuePress Plugins'
  },
  computed: {
    ...mapState(['plugins'])
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val)
    },
    select(val) {
      this.$router.push(`/plugins/${val}`)
    }
  },
  methods: {
    ...mapMutations(['setPlugins']),
    async onIntersect(entries) {
      const isIntersecting = entries[0].intersectionRatio >= 0.5
      if (isIntersecting) {
        if (this.plugins.length) {
          await this.fetchPlugins()
        }
      }
    },
    async fetchPlugins() {
      this.setLoading(true)
      const plugins = await this.$content('plugins')
        .only(['name', 'description', 'slug', 'author'])
        .sortBy('stars', 'desc')
        .limit(20)
        .skip(this.plugins.length)
        .fetch()
      this.setPlugins([...this.plugins, ...plugins])
      this.setLoading(false)
    },
    async querySelections(v) {
      this.setLoading(true)
      const searchResult = await this.$content('plugins')
        .only(['name', 'slug'])
        .sortBy('stars', 'desc')
        .search(null, v)
        .fetch()
      this.items = searchResult
      this.setLoading(false)
    }
  }
}
</script>
