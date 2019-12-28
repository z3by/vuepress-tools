<template>

  <main class="fade-in">
    <div
      class="home"
      aria-labelledby="main-title"
    >
      <div class="bg-gradient"></div>
      <header class="hero">
        <div
          align="center"
          class="img-container"
        >
          <img
            v-if="data.heroImage"
            :src="$withBase(data.heroImage)"
            :alt="data.heroAlt || 'hero'"
          >
        </div>

        <div>
          <h1
            v-if="data.heroText !== null"
            id="main-title"
          >{{ data.heroText || $title || 'Hello' }}</h1>

          <p class="description">
            {{ data.tagline || $description || 'Welcome to your VuePress site' }}
          </p>

          <div
            class="action"
            v-if="data.actionText && data.actionLink"
          >
            <NavLink
              class="action-button"
              :item="actionLink"
            />
          </div>
        </div>
      </header>

      <div
        class="centerflipcards"
        v-if="data.features && data.features.length"
      >
        <div
          class="square-flip"
          v-for="(feature, index) in data.features"
          :key="index"
        >
          <div
            class='square'
            data-image="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
          >
            <div class="square-container">
              <h2 class="textshadow">{{feature.title}}</h2>
            </div>
            <div class="flip-overlay"></div>
          </div>
          <div
            class='square2'
            data-image="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
          >
            <div class="square-container2">
              <div class="align-center">
                <p>{{feature.details}}</p>
                <router-link
                  :to="feature.link"
                  class="action-button"
                >Explore</router-link>
              </div>
            </div>
            <div class="flip-overlay"></div>
          </div>
        </div>
      </div>

      <Content class="theme-default-content custom" />

      <footer
        class="footer"
        v-if="data.footer"
      >
        {{ data.footer }}
      </footer>
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
.home {
  padding: $navbarHeight 2rem 0;
  max-width: 960px;
  margin: 0px auto;
  display: block;

  .bg-gradient {
    position: absolute;
    left: 0;
    width: 100vw;
    height: 15rem;
    background: linear-gradient($accentColor, $accentColorLight);
  }

  .hero {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    margin-top: 5rem;
    box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.1);
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

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}

.square-flip {
  perspective: 1000;
  transform: perspective(1000px);
  transform-style: preserve-3d;
  position: relative;
}

.square-flip {
  width: 100%;
  height: 300px;
}

.square, .square2 {
  width: 100%;
  height: 100%;
}

.square {
  background-size: cover;
  background-position: center center;
  transition: transform 0.6s cubic-bezier(0.5, 0.3, 0.3, 1);
  overflow: hidden;
  position: absolute;
  top: 0;
  backface-visibility: hidden;
}

.square-flip .square {
  transform: rotateY(0deg);
  transform-style: preserve-3d;
  z-index: 1;
}

.square-flip:hover .square {
  transform: rotateY(-180deg);
  transform-style: preserve-3d;
}

.square2 {
  background-size: cover;
  background-position: center center;
  transition: transform 0.6s cubic-bezier(0.5, 0.3, 0.3, 1);
  overflow: hidden;
  position: absolute;
  top: 0;
  backface-visibility: hidden;
}

.square-flip .square2 {
  transform: rotateY(180deg);
  transform-style: preserve-3d;
  z-index: 1;
}

.square-flip:hover .square2 {
  transform: rotateY(0deg);
  transform-style: preserve-3d;
}

.square-container {
  padding: 40px;
  text-align: center;
  position: relative;
  top: 50%;
  transition: transform 0.6s cubic-bezier(0.5, 0.3, 0.3, 1);
  transform: translateY(-50%) translateX(0px) scale(1);
  transform-style: preserve-3d;
  z-index: 2;
}

.square-flip:hover .square-container {
  transform: translateY(-50%) translateX(-650px) scale(0.88);
  transform-style: preserve-3d;
}

.square-container2 {
  padding: 40px;
  text-align: center;
  position: relative;
  top: 50%;
  transition: transform 0.6s cubic-bezier(0.5, 0.3, 0.3, 1);
  transform: translateY(-50%) translateX(650px) translateZ(60px) scale(0.88);
  transform-style: preserve-3d;
  z-index: 2;
}

.square-flip:hover .square-container2 {
  transform: translateY(-50%) translateX(0px) translateZ(0px) scale(1);
  transform-style: preserve-3d;
}

.square-flip h2 {
  color: white;
  border: none;
}

.square-flip h3 {
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
}

.flip-overlay {
  display: block;
  background: linear-gradient($accentColor, darken($accentColorLight, 30%));
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.align-center {
  margin: 0 auto;
}

.square-flip .square .boxshadow, .square-flip .square .textshadow, .square-flip .square2 .boxshadow, .square-flip .square2 .textshadow {
  transition: 0.6s;
}

.square-flip .square .boxshadow {
  box-shadow: 24px 42px 58px -8px rgba(0, 0, 0, 0.3);
}

.square-flip .square .textshadow {
  text-shadow: 24px 42px 58px -8px rgba(0, 0, 0, 0.3);
}

.square-flip:hover .square .boxshadow, .square-flip:hover .square .textshadow {
  box-shadow: 240px 42px 58px -8px rgba(0, 0, 0, 0);
}

.square-flip .square2 .boxshadow {
  box-shadow: 240px 42px 58px -8px rgba(0, 0, 0, 0);
}

.square-flip .square2 .textshadow {
  text-shadow: 240px 42px 58px -8px rgba(0, 0, 0, 0);
}

.square-flip:hover .square2 .boxshadow, .square-flip:hover .square2 .textshadow {
  box-shadow: 24px 42px 58px -8px rgba(0, 0, 0, 0.3);
}

/* You can delete this style */
.centerflipcards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  width: 100%;
  text-align: center;
  margin: 6rem auto;
  position: relative;
  z-index: 12;

  @media (max-width: ($MQNarrow + 1px)) {
    grid-template-columns: 1fr;
  }
}

.clearfix {
  clear: both;
}

.centerflipcards p {
  color: $lightColor;
}
</style>
