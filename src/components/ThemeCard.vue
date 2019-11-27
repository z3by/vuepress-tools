<template>
  <b-card no-body class="overflow-hidden rounded" style="max-width: 540px;">
    <b-card-img :src="theme.image" class="rounded-0"></b-card-img>
    <div class="card-overlay h-100 w-100">
      <div
        class="center-text text-center d-flex flex-column justify-content-center h-100"
      >
        <h3 class="text-white">
          {{ theme.name }}
        </h3>
        <div class="card-action">
          <b-button
            variant="outline-light"
            class="rounded btn-sm px-3 mt-3 bg-transparent"
            v-b-modal.theme-details
          >
            Show
          </b-button>
        </div>
      </div>
      <div class="overlay-links w-100 p-3">
        <a
          :href="theme.github"
          target="_blank"
          rel="noopener noreferrer"
          class="text-light icon"
        >
          <ThemifyIcon icon="github" />
        </a>
        <a
          :href="theme.link"
          target="_blank"
          rel="noopener noreferrer"
          class="text-light icon"
        >
          <ThemifyIcon icon="link"
        /></a>
      </div>
      <div class="overlay-info p-3">
        <span class="text-light text-monospace"># {{ theme.type }}</span>
      </div>
    </div>
  </b-card>
</template>

<script>
import ThemifyIcon from "vue-themify-icons";

export default {
  components: {
    ThemifyIcon
  },

  props: ["theme"]
};
</script>

<style>
.card-overlay {
  background: linear-gradient(#3494e6, #ec6ead);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.3s ease;
}

.card-overlay:hover {
  opacity: 0.95;
}

.overlay-links,
.overlay-info {
  z-index: 2;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.overlay-links {
  top: 0;
}

.overlay-info {
  bottom: 0;
}

.overlay-links .icon {
  font-size: 2rem;
  text-decoration: none;
}

.card-action {
  z-index: 10;
}
</style>
