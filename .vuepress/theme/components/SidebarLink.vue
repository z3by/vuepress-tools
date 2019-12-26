<template>
  <router-link
    class="sidebar-link"
    :to="item.path"
  >
    <div
      class="sidebar-link__img"
      v-if="item.frontmatter.owner"
    >
      <img :src="item.frontmatter.owner.avatar_url">
    </div>
    <div>

      <span>
        <strong>
          {{item.frontmatter.full_name || item.title}}
        </strong>
      </span>
      <p class="sidebar-link__description">{{item.frontmatter.description}}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['item', 'sidebarDepth'],
}
</script>

<style lang="stylus" scoped>
.sidebar-link {
  display: flex;
  padding: 1rem;

  &:hover {
    background-color: $hoverBgColor;
  }

  .sidebar-link__img {
    padding-right: 1rem;

    img {
      width: 60px;
    }
  }

  .sidebar-link__description {
    margin: 0;
    color: $textLight;
    font-weight: 300;
    font-size: 1rem;
  }
}
</style>