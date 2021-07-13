<template>
  <v-card
    :ripple="!!to"
    :to="to"
    shaped
    color="secondary"
    class="gradient"
  >
    <v-card
      v-if="icon"
      justify="center"
      color="transparent"
      align="center"
      class="text"
      elevation="0"
    >
      <v-icon x-large class="text-h1 ma-5 white--text">{{ icon }}</v-icon>
    </v-card>
    <v-card-title
      class="justify-center white--text font-weight-bold text-capitalize"
    >
      {{ title }}
    </v-card-title>
    <v-card-text align="center">
      <p class="subtitle-1 white--text">
        {{ description }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  }
}
</script>
