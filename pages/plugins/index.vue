<template>
  <v-container class="py-10">
    <v-row>
       <v-col class="text-center" cols="12">
        <card
          title="Vuepress Plugins"
          description="Find The best Vuepress Plugins and give your Vuepress project
                superpowers."
          icon="mdi-power-plug"
        />
      </v-col>
      <v-col cols="12">
        <v-img src="img/plugins.svg" alt="Vuepress plugins" max-height="500" contain></v-img>
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