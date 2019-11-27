<template>
  <main class="home py-5">
    <ThemesList class="animated fast fadeIn" />
  </main>
</template>

<script>
import ThemesList from "../components/ThemesList";

export default {
  name: "home",

  components: {
    ThemesList
  }
};
</script>

<style>
.home {
  min-height: 90vh;
}
</style>
