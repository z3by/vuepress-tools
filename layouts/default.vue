<template>
  <v-app>
    <v-app-bar app :elevation="1">
      <v-app-bar-nav-icon
        v-if="$route.path !== '/'"
        @click="setSidebar(!sidebar)"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold">{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.to"
        :icon="$vuetify.breakpoint.mdAndDown"
        text
        color="primary"
        :class="$vuetify.breakpoint.mdAndDown ? '' : 'mx-2'"
      >
        <v-icon class="text-gradient">{{
          $route.path === item.to ? item.icon : item.icon + '-outline'
        }}</v-icon>
        <span v-show="$vuetify.breakpoint.lgAndUp">{{ item.title }}</span>
      </v-btn>
      <v-btn
        icon
        class="mx-4"
        @click="$vuetify.theme.dark = !!!$vuetify.theme.dark"
        ><v-icon class="text-gradient">mdi-theme-light-dark</v-icon></v-btn
      >
    </v-app-bar>
    <v-main>
      <v-overlay :value="loading" color="black" opacity="0.4">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
      <Nuxt />
    </v-main>
    <v-footer :absolute="false" app inset>
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <span
        ><v-icon color="blue accent-2">mdi-vuetify</v-icon
        ><v-icon color="green">mdi-vuejs</v-icon></span
      >
      <v-spacer></v-spacer> <span>Built with </span>
      <v-icon color="red">mdi-heart</v-icon> by
      <v-btn
        href="https://ahmadmostafa.com"
        text
        target="_blank"
        class="px-1 mx-1 text--primary"
        >Ahmad Mostafa</v-btn
      >
    </v-footer>
  </v-app>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      navItems: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-power-plug',
          title: 'Plugins',
          to: '/plugins'
        },
        {
          icon: 'mdi-palette',
          title: 'Themes',
          to: '/themes'
        }
      ],
      title: 'Vuepress Tools'
    }
  },
  computed: {
    ...mapState(['sidebar', 'loading']),
    drawer: {
      get() {
        return this.sidebar
      },
      set(value) {
        this.setSidebar(value)
      }
    }
  },
  methods: {
    ...mapMutations(['setSidebar'])
  }
}
</script>
