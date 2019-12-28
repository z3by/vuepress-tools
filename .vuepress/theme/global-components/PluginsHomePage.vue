<template>
  <main class="plugins-home">
    <header>
      <div class="card">
        <div class="card-text">
          <h1>Vuepress Plugins</h1>
          <p>
            Find The best plugins for your vuepress project
          </p>
        </div>
        <div class="card-img-wrapper">
          <img
            :src="$withBase('/img/undraw_monitor_iqpq.svg')"
            alt="Vuepress plugins"
            class="w-100"
          />
        </div>
      </div>
    </header>
  </main>
</template>

<script>
export default {
  name: 'plugins-homepage'
}
</script>

<style lang="stylus" scoped>
.plugins-home {
  .card {
    padding: 3rem;
    text-align: center;
    margin: 5rem auto;
    background-color: $lightColor;
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