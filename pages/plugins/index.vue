<template>
  <v-container class="py-10">
    <v-row>
      <v-col class="text-center">
        <card
          title="Vuepress Plugins"
          description="Find The best Vuepress Plugins and give your Vuepress project
                superpowers."
          icon="mdi-power-plug"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from '@/components/card.vue'

export default {
  components: {
    Card
  }
}
</script>