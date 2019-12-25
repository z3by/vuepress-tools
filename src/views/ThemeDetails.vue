<template>
  <b-container class="fill-height p-5">
    <div
      id="theme-details"
      ref="theme-details"
      v-if="theme"
      class="bg-white p-4 rounded shadow"
    >
      <div class="theme-info">
        <h1>{{ theme.name }}</h1>
        <p class="text-secondary">{{ theme.description }}</p>
        <a
          :href="theme.github"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline-primary rounded btn-sm mx-1"
        >
          <ThemifyIcon icon="github" />
        </a>
        <a
          :href="theme.link"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline-primary rounded btn-sm mx-1"
        >
          <ThemifyIcon icon="link"
        /></a>
      </div>
      <div class="py-4">
        <gallery
          :images="theme.screenShots"
          :index="index"
          @close="index = null"
        ></gallery>
        <div class="screenshot-list d-flex">
          <div
            class="image mr-1 border"
            v-for="(image, imageIndex) in theme.screenShots"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{
              backgroundImage: 'url(' + image + ')',
              width: '700px',
              height: '200px',
              backgroundSize: 'cover'
            }"
          ></div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import VueGallery from "vue-gallery";
import ThemifyIcon from "vue-themify-icons";

export default {
  components: {
    gallery: VueGallery,
    ThemifyIcon
  },
  data() {
    return {
      index: null
    };
  },
  computed: {
    theme() {
      return this.$store.state.currentTheme;
    }
  },
  methods: {
    handleTypeClick() {
      this.$refs["theme-details"].hide();
    }
  },

  mounted() {
    const { name } = this.$route.params;

    this.$store.commit("setCurrentTheme", name);
  }
};
</script>

<style>
.screenshot-list .image {
  background-size: cover;
}
</style>
