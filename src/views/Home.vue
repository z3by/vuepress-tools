<template>
  <main class="home">
    <header class="bg-primary-gradient">
      <div class="container">
        <b-card class="p-4 rounded header-card">
          <div class="row">
            <div class="col-sm-12 col-md-6 m-0 p-3">
              <h1 class="display-4">Vuepress Themes</h1>
              <h2 class="h2 font-weight-lighter text-secondary">
                Find The best Vuepress themes for your vuepress project
              </h2>
              <a href="#themes" class="btn btn-outline-primary mt-3">
                See All Vuepress Themes
              </a>
            </div>
            <div class="col-sm-12 col-md-6 m-0 p-3">
              <img
                src="../assets/undraw_art_museum_8or4.svg"
                alt="Vuepress themes"
                class="w-100"
              />
            </div>
          </div>
        </b-card>
      </div>
    </header>
    <div id="themes" class="py-3 themes-list">
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
.home .header-card {
  top: 6rem;
}

.themes-list {
  margin-top: 13rem;
  background: white;
}
</style>
