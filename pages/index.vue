<template>
  <v-container class=" py-10">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card justify="center" align="center">
          <v-img max-height="150" max-width="250" src="/icon.png"></v-img>
        </v-card>
        <v-card>
          <v-card-title class="headline">
            Welcome to Vuepress Tools
          </v-card-title>
          <v-card-text>
            <p>
              Vuepress Tools is a coolection of the best Vuepress themes and
              Vuepress Plugins
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="my-10">
      <v-col cols="12" sm="8" md="6">
        <v-card justify="center" align="center">
          <v-icon x-large class="text-h1 ma-5">mdi-power-plug</v-icon>
        </v-card>
        <v-card>
          <v-card-title class=" text-h4 justify-center"> Vuepress Plugins </v-card-title>
          <v-card-text align="center">
            <p>
              Plugins generally add global-level functionality to VuePress.
              There is no strictly defined scope for a plugin
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" md="6">
        <v-card justify="center" align="center" class="text">
          <v-icon x-large class="text-h1 ma-5">mdi-palette</v-icon>
        </v-card>
        <v-card>
          <v-card-title class="text-h4 justify-center"> Vuepress Themes </v-card-title>
          <v-card-text align="center">
            <p>
              Vuepress Themes are the main building blocks of a Vuepress site. A
              theme is a collection of components that can be used to create a
              Vuepress site.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
