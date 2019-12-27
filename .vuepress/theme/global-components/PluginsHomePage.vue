<template>
  <main class="plugins-home">
    <header>
      <div class="card">
        <div>
          <h1>Vuepress Plugins</h1>
          <p>
            Find The best plugins for your vuepress project
          </p>
        </div>
        <div>
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
    padding: 1rem;
    text-align: center;
    margin: 5rem auto;

    p {
      color: $textLight;
    }
  }
}
</style>