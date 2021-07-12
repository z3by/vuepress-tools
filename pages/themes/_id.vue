<template>
  <v-container class="py-10">
    <v-row>
      <v-col :span="12">
        <card :title="theme.name" :description="theme.description" />
      </v-col>
    </v-row>
    <v-row>
      <v-col :span="12">
        <v-sheet elevation="1" shaped class="overflow-hidden">
          <nuxt-content :document="theme" class="pa-5" />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from '@/components/card.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      theme: {}
    }
  },
  fetch() {
    this.fetchTheme(this.$route.params.id)
  },
  watch: {
    '$route.params.id': 'fetchTheme'
  },
  methods: {
    async fetchTheme(slug) {
      const theme = await this.$content(`themes/${slug}`).fetch()
      this.theme = theme
    }
  }
}
</script>