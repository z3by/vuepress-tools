<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <transition name="zoom">
        <router-view></router-view>
      </transition>
    </main>
    <footer class="text-center bg-light p-5">
      <p class="m-0">
        Made with ❤️ by <a href="https://ahmadmostafa.com">@z3by</a>
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

.rounded {
  border-radius: 15px !important;
}

.btn-primary,
.btn-outline-primary.active {
  background: linear-gradient(#6a82fb, #fc5c7d);
  border-color: #fc5c7d;
}

.btn-outline-primary {
  border-color: #6b6b83;
  color: #6b6b83;
}

.btn-outline-primary:hover {
  background: linear-gradient(#6a82fb, #fc5c7d);
  border-color: #fc5c7d;
}

.btn-outline-light:hover {
  background: white !important;
}

.card-wrapper {
  height: 21rem;
}
.card-overlay {
  background: linear-gradient(#6a82fb, #fc5c7d);
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

.modal-content {
  border-radius: 2rem;
  border: none;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
  min-height: 16rem;
}

.modal-header {
  background: linear-gradient(to right, #6a82fb, #fc5c7d);
  border: none;
  color: white;
}

.modal-header button.close {
  color: white;
}

.screenshot-list {
  width: 1140px;
  overflow-x: auto;
}
.image {
  min-width: 300px;
}
a.next,
a.prev {
  color: gray;
}
</style>
