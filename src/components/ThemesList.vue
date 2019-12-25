<template>
  <b-container class="my-3">
    <b-row class="my-4" v-if="themes.length">
      <b-col
        sm="12"
        md="6"
        v-for="theme in themes"
        :key="theme.id"
        class="my-3"
      >
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
  </b-container>
</template>

<script>
import ThemeCard from "./ThemeCard";

export default {
  components: {
    ThemeCard
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
