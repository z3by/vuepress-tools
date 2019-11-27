<template>
  <b-modal
    id="theme-details"
    size="lg"
    :title="theme.name"
    centered
    hide-footer
  >
    <b-row>
      <b-col>
        <b-carousel id="carousel-no-animation" controls class="pb-2">
          <b-carousel-slide
            class="rounded overflow-hidden"
            img-src="https://picsum.photos/1024/480/?image=10"
          ></b-carousel-slide>
          <b-carousel-slide
            class="rounded overflow-hidden"
            img-src="https://picsum.photos/1024/480/?image=12"
          ></b-carousel-slide>
          <b-carousel-slide
            class="rounded overflow-hidden"
            img-src="https://picsum.photos/1024/480/?image=22"
          ></b-carousel-slide>
          <b-carousel-slide
            class="rounded overflow-hidden"
            img-src="https://picsum.photos/1024/480/?image=23"
          ></b-carousel-slide>
        </b-carousel>
      </b-col>
      <b-col>
        <p>{{ theme.description }}</p>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      theme: {
        id: "1",
        name: "Theme name",
        type: "docs",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo eos quia",
        image: "https://picsum.photos/400/400/?image=20",
        github: "https://github.com/z3by/vuepress-theme-modern-blog",
        link: "https://github.com/z3by/vuepress-theme-modern-blog"
      }
    };
  }
};
</script>

<style>
.modal-content {
  border-radius: 2rem;
  overflow: scroll;
  background: rgba(255, 255, 255, 0.9);
  min-height: 16rem;
}
</style>
