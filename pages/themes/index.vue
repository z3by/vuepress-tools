<template>
  <v-container class="py-10">
    <v-row>
      <v-col class="text-center" cols="12">
        <card
          title="Vuepress Themes"
          description="Find The best Vuepress themes and Add an aesthetic touch to your
                Vuepress Project."
          icon="mdi-palette"
        />
      </v-col>
      <v-col cols="12">
        <v-img src="img/themes.svg" alt="Vuepress themes" max-height="500" contain></v-img>
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