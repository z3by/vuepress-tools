<template>
  <main class="themes-home">
    <header>
      <div class="card">
        <div>
          <h1>Vuepress Themes</h1>
          <p>
            Find The best Vuepress themes for your vuepress project
          </p>
        </div>
        <div>
          <img
            src="/img/undraw_art_museum_8or4.svg"
            alt="Vuepress themes"
            class="w-100"
          />
        </div>
      </div>
    </header>
  </main>
</template>

<script>
export default {
  name: 'themes-homepage'
}
</script>

<style lang="stylus" scoped>
.themes-home {
  .card {
    border: 1px solid $borderColor;
    padding: 1rem;
    text-align: center;
    margin: 5rem auto;

    p {
      color: $textLight;
    }
  }
}
</style>