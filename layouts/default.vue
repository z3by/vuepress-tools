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
      <Nuxt />
    </v-main>
    <v-footer :absolute="false" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
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
    ...mapState(['sidebar']),
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
