<template>
  <main class="themes-home fade-in">
    <header>
      <div class="card">
        <div class="card-text">
          <h1>Vuepress Themes</h1>
          <p>
            Find The best themes for your vuepress project
          </p>
        </div>
        <div class="card-img-wrapper">
          <img
            :src="$withBase('/img/undraw_art_museum_8or4.svg')"
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
    padding: 3rem;
    text-align: center;
    margin: 5rem auto;
    background: linear-gradient(to bottom right, $lightColor, lighten($lightColor, 50%));
    border-radius: 100%;
    height: 30rem;
    width: 30rem;

    @media (max-width: ($MQNarrow + 1px)) {
      height: 20rem;
      width: 20rem;
    }

    .card-img-wrapper img {
      margin: 2rem;
      width: 30rem;

      @media (max-width: ($MQNarrow + 1px)) {
        margin: 0;
      }
    }

    .card-text {
      margin: 3rem auto;

      h1 {
        margin: 0.5rem;
        font-size: 2rem;
      }

      p {
        color: lighten($textColor, 40%);
      }
    }
  }
}
</style>