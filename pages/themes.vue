<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="false"
      :hide-overlay="true"
      :width="400"
      app
    >
    </v-navigation-drawer>
    <nuxt-child />
  </div>
</template>

<script>
import WithSidebarMixin from '@/mixins/withsidebar'

export default {
  mixins: [WithSidebarMixin]
}
</script>
