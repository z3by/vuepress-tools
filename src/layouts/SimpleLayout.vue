<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <transition enter-active-class="pop">
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
.rounded {
  border-radius: 15px !important;
}
.pop {
  animation: pop 0.3s cubic-bezier(0.19, 1, 0.22, 1);
}
@keyframes pop {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
.btn-primary {
  background: linear-gradient(#3494e6, #ec6ead);
  border-color: #ec6ead;
}
.btn-outline-primary {
  border-color: #6b6b83;
  color: #6b6b83;
}

.btn-outline-primary:hover {
  background: linear-gradient(#3494e6, #ec6ead);
  border-color: #ec6ead;
}
.btn-outline-light:hover {
  background: white !important;
}
</style>
