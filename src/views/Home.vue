<template>
  <main class="home py-5">
    <ThemesList />
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
