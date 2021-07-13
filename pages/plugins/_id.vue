<template>
  <v-container class="py-10">
    <v-row>
      <v-col :cols="12">
        <card :title="pkg.name" :description="pkg.description" />
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="12">
        <v-card shaped flat outlined class="pa-5">
          <div v-if="pkg.author">
            <v-card-title v-if="pkg.author.name || pkg.author.username">
              <v-avatar size="50" color="red">
                <img :src="pkg.author.avatar" alt="alt" />
              </v-avatar>
              <span class="mx-5"
                >By {{ pkg.author.name || pkg.author.username }}</span
              >
            </v-card-title>
          </div>
          <v-card-actions class="py-5">
            <v-btn
              rounded
              elevation="0"
              color="primary"
              :href="pkg.repository"
              target="_blank"
              ><v-icon>mdi-github</v-icon> Github</v-btn
            >
            <v-btn
              rounded
              elevation="0"
              color="primary"
              :href="pkg.npm"
              target="_blank"
              ><v-icon>mdi-npm</v-icon> npm</v-btn
            >
            <v-btn
              rounded
              elevation="0"
              color="primary"
              :href="pkg.repository"
              target="_blank"
              ><v-icon>mdi-star</v-icon> {{ pkg.stars || 0 }}</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col :cols="12">
        <v-sheet flat outlined shaped class="overflow-hidden">
          <nuxt-content :document="pkg" class="pa-5" />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from '@/components/card.vue'
import { mapMutations } from 'vuex'

export default {
  components: {
    Card
  },
  data() {
    return {
      pkg: {}
    }
  },
  fetch() {
    this.fetchPackage(this.$route.params.id)
  },
  head() {
    return {
      title: this.pkg.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.pkg.description
        }
      ]
    }
  },
  watch: {
    '$route.params.id': 'fetchPackage'
  },
  methods: {
    ...mapMutations(['setLoading']),
    async fetchPackage(slug) {
      this.setLoading(true)
      const plugin = await this.$content(`plugins/${slug}`).fetch()
      this.pkg = plugin
      this.setLoading(false)
    }
  }
}
</script>