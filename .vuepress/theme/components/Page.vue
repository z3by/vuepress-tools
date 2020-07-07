<template>
  <main class="page">
    <slot name="top" />
    <InArticleAdsense
      data-ad-client="ca-pub-8518970931701152"
      data-ad-slot="3317068607"
    />
    <Content class="theme-default-content fade-in" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";

export default {
  components: { PageEdit, PageNav },
  props: ["sidebarItems"],
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  padding-top 4rem
  display block
</style>
