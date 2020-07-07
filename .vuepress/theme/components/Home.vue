<template>
  <main class="fade-in">
    <div class="home" aria-labelledby="main-title">
      <div class="bg-gradient"></div>
      <header class="hero">
        <div align="center" class="img-container">
          <img
            v-if="data.heroImage"
            :src="$withBase(data.heroImage)"
            :alt="data.heroAlt || 'hero'"
          />
        </div>

        <div>
          <h1 v-if="data.heroText !== null" id="main-title">
            {{ data.heroText || $title || "Hello" }}
          </h1>

          <p class="description">
            {{
              data.tagline || $description || "Welcome to your VuePress site"
            }}
          </p>

          <div class="action" v-if="data.actionText && data.actionLink">
            <NavLink class="action-button" :item="actionLink" />
          </div>
        </div>
      </header>

      <div v-if="data.features && data.features.length" class="features-list">
        <div
          v-for="(feature, index) in data.features"
          :key="index"
          class="feature"
        >
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
          <div>
            <img :src="$withBase(feature.img)" :alt="feature.title" />
          </div>
          <router-link :to="feature.link" class="action-button">
            Explore
          </router-link>
        </div>
      </div>

      <Content class="theme-default-content custom" />
      <!-- <ins
        class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-8518970931701152"
        data-ad-slot="1315196571"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins> -->
      <footer class="footer" v-if="data.footer"></footer>
    </div>
  </main>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";

export default {
  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
  },
};
</script>

<style lang="stylus">
.home {
  padding: $navbarHeight 2rem 0;
  max-width: 960px;
  margin: 0px auto;
  display: block;

@keyframes gradient-background {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
  .bg-gradient {
    position: absolute;
    left: 0;
    width: 100vw;
    height: 15rem;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	  background-size: 400% 400%;
	  animation: gradient-background 20s ease infinite;
  }

  .hero {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    margin-top: 3rem;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    background-color: white;
    padding: 1.5rem;
    position: relative;
    z-index: 2;
    max-width: 45rem;

    @media (max-width: ($MQNarrow + 1px)) {
      flex-direction: column;
      text-align: center;
    }

    .img-container {
      padding: 1rem;

      img {
        max-width: 100%;
        max-height: 12rem;
        display: block;
      }
    }

    h1 {
      font-size: 3rem;
    }

    h1, .description, .action {
      margin: 1rem;
    }

    .description {
      font-size: 1.2rem;
      line-height: 1.3;
      color: lighten($textColor, 50%);
    }
  }

  .action-button {
    display: inline-block;
    font-size: 1.2rem;
    margin: 1rem auto;
    color: $lightColor;
    background-color: darken($accentColor, 10%);
    padding: 0.8rem 1.6rem;
    transition: background-color 0.1s ease;
    box-sizing: border-box;

    &:hover {
      background-color: darken($accentColorLight, 20%);
      color: white;
    }
  }

  .footer {
    padding: 2.5rem;
    text-align: center;
    color: lighten($textColor, 25%);
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }
  }
}
.features-list {
  max-width: 45rem;
  margin: 5rem auto;

  .feature {
    background: linear-gradient(to bottom right, lighten(beige, 40%), lighten(beige, 80%));
    box-shadow: .3rem .3rem .5rem 0 lighten(gray, 80%),
                -0.6rem -0.6rem 1rem 0 white;
    margin-top: 5rem;
    border-radius: 4rem;
    padding: 3rem;

    h2 {
      border none;
      font-size 2.4rem;
      margin 0;
    }

    img {
      max-width: 100%;
      margin 1rem;
    }
  }
}
</style>
