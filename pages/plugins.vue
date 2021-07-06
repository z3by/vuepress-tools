<template>
  <v-navigation-drawer
    v-model="drawer"
  >
    <v-list>
      <v-list-item
        v-for="(plugin, i) in plugins"
        :key="i"
        :to="plugin.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ plugin.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="plugin.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      plugins: [
        {
          icon: 'mdi-apps',
          title: 'plugin name',
          to: '/'
        },
      ],
    }
  }
}
</script>
