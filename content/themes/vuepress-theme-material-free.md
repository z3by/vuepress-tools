---
author:
  avatar: https://avatars.githubusercontent.com/u/2576903?v=4
  email: null
  name: Gabriel Willemann
  url: null
  username: gabrielwillemann
bugs: https://github.com/gabrielwillemann/vuepress-theme-material-free/issues
category: themes
date: '2020-04-20T20:04:04.591Z'
deprecated: false
description: Vuepress theme inspired in Material Design Lite
downloads: null
homepage: https://github.com/gabrielwillemann/vuepress-theme-material-free#readme
keywords:
- vuepress
- vuepress-theme
- material
- material-design
- material-design-lite
- material-lite
license: MIT License
maintainers: null
name: vuepress-theme-material-free
npm: https://www.npmjs.com/package/vuepress-theme-material-free
publisher:
  avatar: null
  email: gabrielw@outlook.com
  name: null
  url: null
  username: gabrielwillemann
repository: https://github.com/gabrielwillemann/vuepress-theme-material-free
score: 0.43809465393987557
stars: 6
unstable: true
version: 0.1.4
watchers: 6

---

# [Vuepress Theme Material Free](https://www.npmjs.com/package/vuepress-theme-material-free)

This is a theme for blogs building with Vuepress. The design is inspired in Material Design Lite. In oficial site there are [many templates as example](https://getmdl.io/templates/index.html) and I chose [this template](https://getmdl.io/templates/text-only/index.html) for building this theme.

## Real Case / Demo

I built this theme for use in my personal blog: https://sharklabs.com.br/

But you can use, change or distribute (license MIT).

## Features

- Layout building with CSS Grid Layout and Flexbox
- Navbar for desktop and mobile devices
- Custom text in the footer
- Social icons (twitter, linkedin, github)
- Tag names with spaces and special characters
- Default language: English
- Optional language: Portuguese
- You can translate this theme for your language using `themeConfig`.
- Sidebar with favorite articles
- Schema.org: [TechArticle](https://schema.org/TechArticle)

## Install

```sh
npm install vuepress-theme-material-free --save
```

## Configuration

This is an example of `config.js` with all options available:

```js
// .vuepress/config.js
module.exports = {
  title: 'My Blog',
  theme: 'vuepress-theme-material-free',
  themeConfig: {
    logo: '/assets/img/my-logo.png',
    authors: {
      'Gabriel Willemann': {
        image: '/assets/img/gabrielwillemann.jpeg',
        jobTitle: 'Software Full Stack Developer',
      },
    },
    nav: [
      { label: 'About the author', path: '/about', icon: 'person' },
      { label: 'Tags', path: '/tag', icon: 'category' },
    ],
    footer: {
      text: 'Text in footer',
    },
    social: {
      twitter: 'https://twitter.com/gabrielwilleman',
      linkedin: 'https://www.linkedin.com/in/gabrielwillemann',
      github: 'https://github.com/gabrielwillemann/',
    },
    tags: {
      'vuejs': 'Vue.js',
      'ruby-on-rails': 'Ruby on Rails',
      'nodejs': 'Node.js',
    },
    locales: {
      default: 'en', // or 'pt-BR'
    },
    configPluginBlog: {
      // ...
    },
  },
};
```

In `nav` section, the icons will show in Mobile Menu. [Click here](https://material.io/resources/icons/) to see all icons available for this option.

In `tags` you can write a special name for your tags, but it's optional.

### Configurate vuepress-plugin-blog

This theme have [vuepress-plugin-blog](https://github.com/vuepressjs/vuepress-plugin-blog) as a dependence and default configuration is:

```js
{
  directories: [
    {
      id: 'post',
      dirname: '_posts',
      path: '/',
      layout: 'Index',
      itemLayout: 'Post',
      itemPermalink: '/:slug',
    },
  ],
  frontmatters: [
    {
      id: 'tag',
      keys: ['tags'],
      path: '/tag/',
      layout: 'Tags',
      scopeLayout: 'Tag',
    },
  ],
}
```

But you can apply custom options in this plugin using `configPluginBlog` (in `themeConfig`). For example, if you want to use sitemap:

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    configPluginBlog: {
      sitemap: {
        hostname: 'https://myblog.com',
      },
    },
  },
};
```

### Translate the theme

Initially, this theme have translate for English and Portuguese. But you can translate for your language using `themeConfig`.

For example, if you want to translate for Spanish:

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    locales: {
      default: 'es',
      es: {
        breadcrumb: {
          home: 'Página de inicio',
        },
        sideBar: {
          favoritePosts: 'Publicaciones populares',
        },
        social: {
          follow: 'Redes sociales',
        },
        notFound: {
          title: 'Página no encontrada',
          home: 'Ir a casa',
        },
        article: {
          author: 'Autor',
        },
      },
    },
  },
};
```

Sorry for my spanish, I used the Google Translator :).

## Front Matter

Available options:

```
---
title: 'Title of my post'
date: '2020-04-16'
author: Gabriel Willemann
image: /assets/img/2020-04/image-my-post.jpg
description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dolor ex, lacinia sit amet porttitor feugiat, interdum vitae felis. Vestibulum vitae ullamcorper nibh, id gravida dolor.'
tags:
  - vuejs
  - vuepress
favorite: true
---
```

About the `favorite` option, there is a Sidebar with favorite/popular articles. If you set this option in front matter the post will show in this area.

## Images

About the images of your posts, I recommend that you place in `.vuepress/public/assets/img/` directory.

## SEO Recomendations

I recommend the following plugins (they are optionals but compatible with this theme):

- [@vuepress/plugin-google-analytics](https://www.npmjs.com/package/@vuepress/plugin-google-analytics)
- [vuepress-plugin-seo](https://www.npmjs.com/package/vuepress-plugin-seo)
- [vuepress-plugin-canonical](https://www.npmjs.com/package/vuepress-plugin-canonical)

But you can use any others in your `.vuepress/config.js`.
