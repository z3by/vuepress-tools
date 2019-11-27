<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="/">
      <img src="../assets/logo.png" alt="vuepress themes" width="40px" />
      Vuepress Themes
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          href="https://github.com/arab-open-source/vuepress-themes/edit/master/themes.json"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b-button
            v-b-popover.hover.bottom="'Submit Your theme'"
            variant="primary"
            class="mx-3 rounded-circle"
          >
            <ThemifyIcon icon="plus" />
          </b-button>
        </b-nav-item>
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2 rounded"
            type="search"
            v-model="query"
            placeholder="Search"
          ></b-form-input>
          <b-button
            size="sm"
            class="my-2 my-sm-0 rounded-circle"
            variant="outline-primary"
            @click="search"
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
  data() {
    return {
      query: ""
    };
  },
  components: {
    ThemifyIcon
  },
  methods: {
    search() {
      this.$store.commit("search", this.query);
    }
  },
  watch: {
    query(val, old) {
      if (val !== old && val == "") {
        this.$store.commit("search", "");
      }
    }
  }
};
</script>

<style></style>
