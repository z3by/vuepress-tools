<template>
  <v-container fluid class="pa-0">
    <v-card class="gradient" shaped>
      <v-row justify="center" align="center" class="py-5">
        <v-col cols="10" sm="8" md="6">
          <v-card class="py-10 my-5" shaped elevation="20">
            <v-card justify="center" align="center" class="py-2" elevation="0">
              <v-img max-width="150" src="/img/vuepress-tools-logo.png"></v-img>
            </v-card>
            <v-card-title class="text-h3 justify-center">
              Vuepress Tools
            </v-card-title>
            <v-card-text>
              <p class="text-body-1 text-center">
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
        <v-col cols="6" sm="12" md="6" class="fill-height">
          <v-card ripple shaped color="primary" to="/plugins">
            <v-card
              justify="center"
              color="transparent"
              align="center"
              elevation="0"
            >
              <v-icon x-large class="text-h1 ma-5 text-gradient"
                >mdi-power-plug</v-icon
              >
            </v-card>
            <v-card-title class="text-h4 justify-center white--text">
              Vuepress Plugins
            </v-card-title>
            <v-card-text align="center">
              <p class="text-body-1 white--text">
                Find The best Vuepress Plugins and give your Vuepress project
                superpowers.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6" sm="12" md="6" class="fill-height">
          <v-card ripple shaped color="secondary" to="/themes">
            <v-card
              justify="center"
              color="transparent"
              align="center"
              class="text"
              elevation="0"
            >
              <v-icon x-large class="text-h1 ma-5 text-gradient"
                >mdi-palette</v-icon
              >
            </v-card>
            <v-card-title class="text-h4 justify-center white--text">
              Vuepress Themes
            </v-card-title>
            <v-card-text align="center">
              <p class="text-body-1 white--text">
                Find The best Vuepress themes and Add an aesthetic touch to your
                Vuepress Project.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style>
.gradient {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient-background 20s ease infinite;
}
.text-gradient {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-background 20s ease infinite;
}
@-webkit-keyframes gradient-background {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  to {
    background-position: 0 50%;
  }
}
@keyframes gradient-background {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  to {
    background-position: 0 50%;
  }
}
</style>