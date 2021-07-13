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
          label="Search Themes"
          solo-inverted
        ></v-autocomplete>
      </v-container>
      <v-list-item
        v-for="theme in themes"
        :key="theme.slug"
        :to="`/themes/${theme.slug}`"
        nuxt
      >
        <v-list-item-avatar>
          <v-img v-if="theme.author.avatar" :src="theme.author.avatar"> </v-img>
          <span v-else class="white--text">{{ theme.slug[0] }}</span>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold pb-1">{{
            theme.name
          }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ theme.description }}
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
    this.fetchThemes()
  },
  head: {
    title: 'VuePress Themes'
  },
  computed: {
    ...mapState(['themes'])
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val)
    },
    select(val) {
      this.$router.push(`/themes/${val}`)
    }
  },
  methods: {
    ...mapMutations(['setThemes']),
    async onIntersect(entries) {
      const isIntersecting = entries[0].intersectionRatio >= 0.5
      if (isIntersecting) {
        if (this.themes.length) {
          await this.fetchThemes()
        }
      }
    },
    async fetchThemes() {
      this.setLoading(true)
      const themes = await this.$content('themes')
        .only(['name', 'description', 'slug', 'author'])
        .sortBy('stars', 'desc')
        .limit(20)
        .skip(this.themes.length)
        .fetch()
      this.setLoading(false)
      this.setThemes([...this.themes, ...themes])
    },
    async querySelections(v) {
      this.setLoading(true)
      const searchResult = await this.$content('themes')
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
