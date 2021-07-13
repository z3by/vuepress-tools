<template>
  <v-container fluid class="pa-0">
    <v-card class="gradient" shaped>
      <v-row justify="center" align="center" class="py-5">
        <v-col cols="10" sm="8" md="6">
          <v-card class="py-10 my-5" shaped elevation="20">
            <v-card justify="center" align="center" class="py-2" elevation="0">
              <v-img max-width="150" src="img/vuepress-tools-logo.png"></v-img>
            </v-card>
            <v-card-title class="justify-center text-h2">
              Vuepress Tools
            </v-card-title>
            <v-card-text>
              <p class="subtitle-1 text-center">
                Vuepress Tools is a curated list of the best Vuepress Themes and
                Plugins.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-container class="py-10 rounded-bl-pill">
      <v-row justify="center" align="center" class="ma-lg-10">
        <v-col cols="12" sm="12" md="6" class="fill-height">
          <card
            title="Vuepress Plugins"
            to="/plugins"
            description="Find The best Vuepress Plugins and give your Vuepress project
                superpowers."
            icon="mdi-power-plug"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6" class="fill-height">
          <card
            title="Vuepress Themes"
            to="/themes"
            description="Find The best Vuepress themes and Add an aesthetic touch to your
                Vuepress Project."
            icon="mdi-palette"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import Card from '@/components/card.vue'

export default {
  components: {
    Card
  },
  head: {
    title: 'Home'
  }
}
</script>
