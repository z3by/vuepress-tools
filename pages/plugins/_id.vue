<template>
  <v-container class="py-10">
    <v-row>
      <v-col :span="12">
        <card :title="plugin.name" :description="plugin.description" />
      </v-col>
    </v-row>
    <v-row>
      <v-col :span="12">
        <v-sheet elevation="1" shaped class="overflow-hidden">
          <nuxt-content :document="plugin" class="pa-5" />
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
      plugin: {}
    }
  },
  fetch() {
    this.fetchPlugin(this.$route.params.id)
  },
  watch: {
    '$route.params.id': 'fetchPlugin'
  },
  methods: {
    async fetchPlugin(slug) {
      const plugin = await this.$content(`plugins/${slug}`).fetch()
      this.plugin = plugin
    }
  }
}
</script>