<template>
  <router-link class="sidebar-link" :to="item.path" v-if="item.frontmatter">
    <div class="sidebar-link__img" v-if="item.frontmatter.owner">
      <img :src="item.frontmatter.owner.avatar_url" />
    </div>
    <div class="sidebar-link__info">
      <span class="sidebar-link__title">
        <strong>{{ item.frontmatter.full_name || item.title }}</strong>
      </span>
      <p class="sidebar-link__description">
        {{ item.frontmatter.description }}
      </p>
      <div class="text-muted sidebar-link__icons">
        <span>
          <small>{{ item.frontmatter.stargazers_count }}</small>
          <small>
            <ThemifyIcon icon="star" />
          </small>
        </span>
        <span>
          <small>{{ item.frontmatter.forks_count }}</small>
          <small>
            <ThemifyIcon icon="vector" />
          </small>
        </span>
        <span>
          <small>{{ item.frontmatter.watchers_count }}</small>
          <small>
            <ThemifyIcon icon="eye" />
          </small>
        </span>
      </div>
    </div>
  </router-link>
</template>

<script>
import ThemifyIcon from "vue-themify-icons";

export default {
  props: ["item", "sidebarDepth"],
  components: {
    ThemifyIcon,
  },
};
</script>

<style lang="stylus" scoped>
.sidebar-link {
  display: flex;
  padding: 0.5rem;

  &:hover {
    background-color: $hoverBgColor;
  }

  .sidebar-link__img {
    padding-right: 1rem;

    img {
      width: 60px;
      border-radius: 1rem;
    }
  }

  .sidebar-link__info {
    width: 100%;

    .sidebar-link__title {
      font-size: 1rem;
    }

    .sidebar-link__description {
      margin: 0;
      color: $textLight;
      font-weight: 300;
      font-size: 0.9rem;
    }

    .sidebar-link__icons {
      margin-left: 50%;
      width: 50%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
