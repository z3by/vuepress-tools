<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="/">Vuepress Themes</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <!-- Right aligned nav items -->
        <b-nav-item href="/">
          <b-button
            variant="primary"
            size="sm"
            class="my-2 my-sm-0 rounded-circle"
          >
            <ThemifyIcon icon="home" />
          </b-button>
        </b-nav-item>

        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2 rounded"
            type="search"
            placeholder="Search"
          ></b-form-input>
          <b-button
            size="sm"
            class="my-2 my-sm-0 rounded-circle"
            variant="outline-primary"
          >
            <ThemifyIcon icon="search" />
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import ThemifyIcon from "vue-themify-icons";

export default {
  name: "navbar",
  components: {
    ThemifyIcon
  }
};
</script>

<style></style>
