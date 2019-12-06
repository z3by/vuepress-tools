<template>
  <b-container class="my-3">
    <div class="filter-types text-center">
      <b-button
        v-for="filter in headerFilters"
        :key="filter.type"
        class="rounded-circle mx-2"
        :class="{ active: $store.state.currentType == filter.type }"
        variant="outline-primary"
        @click="filterByType(filter.type)"
        v-b-popover.hover.top="filter.hint"
        :to="filter.type"
      >
        <ThemifyIcon :icon="filter.icon" />
      </b-button>
    </div>
    <b-row class="my-4" v-if="themes.length">
      <b-col md="6" lg="4" v-for="theme in themes" :key="theme.id" class="my-3">
        <ThemeCard :theme="theme" :key="theme.id" />
      </b-col>
    </b-row>
    <div v-else class="my-5 py-5">
      <img
        src="../assets/not-found.svg"
        alt=""
        style="max-width: 400px"
        class="d-block mx-auto"
      />
      <h2 class="text-center text-muted text-monospace mt-4">
        No Themes found!
      </h2>
    </div>
    <ThemeDetails />
  </b-container>
</template>

<script>
import ThemeCard from "./ThemeCard";
import ThemeDetails from "./ThemeDetails";
import ThemifyIcon from "vue-themify-icons";

export default {
  components: {
    ThemeCard,
    ThemifyIcon,
    ThemeDetails
  },
  data() {
    return {
      headerFilters: [
        {
          type: "all",
          hint: "All themes",
          icon: "home"
        },
        {
          type: "docs",
          hint: "Documentation themes",
          icon: "book"
        },
        {
          type: "blog",
          hint: "Blogs themes",
          icon: "write"
        },
        {
          type: "others",
          hint: "Other themes",
          icon: "more"
        }
      ]
    };
  },

  computed: {
    themes() {
      return this.$store.state.themes;
    }
  },
  methods: {
    filterByType(type) {
      this.$store.commit("filterByType", type);
    }
  }
};
</script>
