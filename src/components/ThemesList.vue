<template>
  <b-container>
    <div class="filter-types text-center">
      <b-button
        class="rounded-circle mx-2"
        variant="outline-primary"
        v-b-popover.hover.top="'Documentation themes'"
      >
        <ThemifyIcon icon="book" />
      </b-button>
      <b-button
        class="rounded-circle mx-2"
        variant="outline-primary"
        v-b-popover.hover.top="'Blog themes'"
      >
        <ThemifyIcon icon="write" />
      </b-button>
      <b-button
        class="rounded-circle mx-2"
        variant="outline-primary"
        v-b-popover.hover.top="'Portfolio themes'"
      >
        <ThemifyIcon icon="user" />
      </b-button>
      <b-button
        class="rounded-circle mx-2"
        variant="outline-primary"
        v-b-popover.hover.top="'Other themes'"
      >
        <ThemifyIcon icon="more" />
      </b-button>
    </div>
    <b-row>
      <b-col md="6" lg="4" v-for="theme in themes" :key="theme.id" class="my-3">
        <ThemeCard :theme="theme" />
      </b-col>
    </b-row>
    <ThemeDetails />
  </b-container>
</template>

<script>
import ThemeCard from "./ThemeCard";
import ThemeDetails from "./ThemeDetails";
import ThemifyIcon from "vue-themify-icons";

export default {
  components: {
    ThemeCard,
    ThemifyIcon,
    ThemeDetails
  },

  data() {
    return {
      themes: [
        {
          id: "1",
          name: "Theme name",
          type: "docs",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo eos quia",
          image: "https://picsum.photos/400/400/?image=20",
          github: "https://github.com/z3by/vuepress-theme-modern-blog",
          link: "https://github.com/z3by/vuepress-theme-modern-blog"
        },
        {
          id: "2",
          name: "Theme name",
          type: "docs",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo eos quia",
          image: "https://picsum.photos/400/400/?image=20",
          github: "https://github.com/z3by/vuepress-theme-modern-blog",
          link: "https://github.com/z3by/vuepress-theme-modern-blog"
        },
        {
          id: "3",
          name: "Theme name",
          type: "blog",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo eos quia",
          image: "https://picsum.photos/400/400/?image=20",
          github: "https://github.com/z3by/vuepress-theme-modern-blog",
          link: "https://github.com/z3by/vuepress-theme-modern-blog"
        },
        {
          id: "4",
          name: "Theme name",
          type: "blog",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo eos quia",
          image: "https://picsum.photos/400/400/?image=20",
          github: "https://github.com/z3by/vuepress-theme-modern-blog",
          link: "https://github.com/z3by/vuepress-theme-modern-blog"
        },
        {
          id: "5",
          name: "Theme name",
          type: "docs",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo eos quia",
          image: "https://picsum.photos/400/400/?image=20",
          github: "https://github.com/z3by/vuepress-theme-modern-blog",
          link: "https://github.com/z3by/vuepress-theme-modern-blog"
        },
        {
          id: "6",
          name: "Theme name",
          type: "portfolio",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo eos quia",
          image: "https://picsum.photos/400/400/?image=20",
          github: "https://github.com/z3by/vuepress-theme-modern-blog",
          link: "https://github.com/z3by/vuepress-theme-modern-blog"
        },
        {
          id: "7",
          name: "Theme name",
          type: "portfolio",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo eos quia",
          image: "https://picsum.photos/400/400/?image=20",
          github: "https://github.com/z3by/vuepress-theme-modern-blog",
          link: "https://github.com/z3by/vuepress-theme-modern-blog"
        },
        {
          id: "8",
          name: "Theme name",
          type: "others",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo eos quia",
          image: "https://picsum.photos/400/400/?image=20",
          github: "https://github.com/z3by/vuepress-theme-modern-blog",
          link: "https://github.com/z3by/vuepress-theme-modern-blog"
        }
      ]
    };
  }
};
</script>
