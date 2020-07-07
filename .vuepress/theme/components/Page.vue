<template>
  <main class="page">
    <slot name="top" />
    <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8518970931701152"
     data-ad-slot="3317068607"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
  
    <Content class="theme-default-content fade-in" />
    <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8518970931701152"
     data-ad-slot="1315196571"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
