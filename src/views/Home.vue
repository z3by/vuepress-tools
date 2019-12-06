<template>
  <main class="home py-5">
    <header class="my-5 py-5 container">
      <div class="row p-5 rounded shadow-lg">
        <div class="col-sm-12 col-md-6 m-0">
          <h1 class="display-4">Vuepress Themes</h1>
          <h2 class="h2 font-weight-lighter text-secondary">
            Find The best Vuepress themes for your vuepress project
          </h2>
          <a href="#themes" class="btn btn-outline-primary mt-3">
            See All Vuepress Themes
          </a>
        </div>
        <div class="col-sm-12 col-md-6 m-0">
          <img
            src="../assets/undraw_art_museum_8or4.svg"
            alt="Vuepress themes"
            class="w-100"
          />
        </div>
      </div>
    </header>
    <br />
    <br />
    <br />
    <div id="themes" class="py-3">
      <ThemesList class="animated fast fadeIn" />
    </div>
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
