<template>
  <b-modal
    id="theme-details"
    ref="theme-details"
    size="lg"
    :title="theme.name"
    centered
    hide-footer
  >
    <div class="theme-info">
      <p>{{ theme.description }}</p>
      <b-button
        variant="outline-primary"
        class="rounded btn-sm mx-1"
        @click="handleTypeClick"
      >
        #{{ theme.type }}
      </b-button>
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
    <gallery
      :images="theme.screenShots"
      :index="index"
      @close="index = null"
    ></gallery>
    <div class="screenshot-list mt-3 d-flex rounded">
      <div
        class="image mr-1"
        v-for="(image, imageIndex) in theme.screenShots"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{
          backgroundImage: 'url(' + image + ')',
          width: '300px',
          height: '200px'
        }"
      ></div>
    </div>
  </b-modal>
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
      this.$store.commit("filterByType", this.theme.type);
      this.$refs["theme-details"].hide();
    }
  }
};
</script>

<style>
.screenshot-list .image {
  background-size: cover;
}
</style>
