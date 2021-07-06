<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-img center max-height="150" max-width="250" src="/icon.png"></v-img>
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
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/themes"> Themes </v-btn>
          <v-btn color="secondary" nuxt to="/plugins"> Plugins </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
