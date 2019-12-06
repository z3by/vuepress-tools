<template>
  <div class="bg-light">
    <header>
      <Navbar />
    </header>
    <main>
      <transition name="zoom">
        <router-view></router-view>
      </transition>
    </main>
    <footer class="text-center bg-white p-3 shadow">
      <p class="m-0 text-muted">
        Made with ❤️ by
        <a
          href="https://ahmadmostafa.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          @z3by
        </a>
      </p>
    </footer>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>

<style>
@import url("https://raw.githubusercontent.com/daneden/animate.css/master/animate.css");

html {
  scroll-behavior: smooth;
}
.rounded {
  border-radius: 20px !important;
}

.btn-primary,
.btn-outline-primary.active {
  background: linear-gradient(to top left, #aa82fb, #fc5c9a);
  border-color: lightgrey;
}

.btn-outline-primary {
  border-color: #6b6b83;
  color: #6b6b83;
}

.btn-outline-primary:hover {
  background: linear-gradient(to top left, #aa82fb, #fc5c9a);
  border-color: lightgrey;
}

.btn-outline-light:hover {
  background: white !important;
}

.card-wrapper {
  height: 15rem;
}
.card-overlay {
  background: linear-gradient(to top left, #aa82fb, #fc5c9a);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

.card-overlay:hover {
  opacity: 0.9;
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

.modal-content {
  border-radius: 2rem;
  border: none;
  overflow: hidden;
  background: rgba(255, 255, 255, 1);
  min-height: 16rem;
}

.modal-header {
  background: linear-gradient(to right, #aa82fb, #fc5c9a);
  border: none;
  color: white;
}

.modal-header button.close {
  color: white;
}

.screenshot-list {
  overflow-x: auto;
}
.image {
  min-width: 300px;
  cursor: zoom-in;
}
a.next,
a.prev {
  color: gray;
}
</style>
