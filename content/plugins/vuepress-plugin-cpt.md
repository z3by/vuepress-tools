---
author:
  avatar: https://avatars.githubusercontent.com/u/1670216?v=4
  email: null
  name: tmiame
  url: null
  username: tmiame
bugs: https://github.com/tmiame/vuepress-plugin-cpt/issues
category: plugin
date: '2019-04-24T14:09:14.906Z'
deprecated: false
description: Custom Post Type & Taxonomy & Pagination Plugin for Vuepress
downloads: null
homepage: https://github.com/tmiame/vuepress-plugin-cpt#readme
keywords:
- vuepress
- vuepress-plugin
license: MIT License
maintainers: null
name: vuepress-plugin-cpt
npm: https://www.npmjs.com/package/vuepress-plugin-cpt
publisher:
  avatar: null
  email: tmiame@gmail.com
  name: null
  url: null
  username: tmiame
repository: https://github.com/tmiame/vuepress-plugin-cpt
score: 0.3701229776682039
stars: 4
unstable: false
version: 1.0.2
watchers: 4

---

<br>

<h1 align="center">VuePress Custom Post Type</h1>

<h4 align="center">Custom post types and taxonomy plugin for VuePress 1.x-alpha.</h4>

<p align="center"><a href="https://www.npmjs.com/package/vuepress-plugin-cpt" rel="nofollow"><img alt="npm version" src="https://img.shields.io/npm/v/vuepress-plugin-cpt.svg?style=flat-square" style="max-width:100%;"></a><a href="/LICENSE.md" rel="nofollow"><img alt="license" src="https://img.shields.io/github/license/tmiame/vuepress-plugin-cpt.svg?style=flat-square" style="max-width:100%;"></a></p>

<p align="center">Inspired by Wordpress custom post types.</p>

<p align="center"><a href="#getting-started">Getting started</a>&nbsp;|&nbsp;<a href="#documentation">Documentation</a>&nbsp;|&nbsp;<a href="#demos-and-examples">Demos and examples</a>&nbsp;|&nbsp;<a href="#tops">Tips</a></p>

<br>

## Demos and examples

__Basic(Default Options)__ - [Demo](https://vuepress-plugin-cpt.netlify.com/) [![Netlify Status](https://api.netlify.com/api/v1/badges/4dd34b93-1ac4-4471-8fb8-52390264fee5/deploy-status)](https://vuepress-plugin-cpt.netlify.com/) | [Code](/demos/demo/)

__i18n__ - [Demo](https://vuepress-plugin-cpt-i18n.netlify.com/) [![Netlify Status](https://api.netlify.com/api/v1/badges/3ecb5a8b-631b-4371-aab8-16d847c4e4ad/deploy-status)](https://vuepress-plugin-cpt-i18n.netlify.com/) | [Code](/demos/demo-i18n/)

<br>

## Getting started

### Install

```bash
# via npm
$ npm install -D vuepress-plugin-cpt

# via yarn
$ yarn add -D vuepress-plugin-cpt
```

### Usage

```javascript
// .vuepress/config.js or .vuepress/theme/index.js

const registerPostTypes = {
  news: {
    label: 'News',
    postsDir: '_posts-news',
    taxonomys: {
      category: true,
      tag: true,
      author: true
    }
  }
};

module.exports = {
  plugins: [
    [
      'vuepress-plugin-cpt', registerPostTypes
    ],
    ...
  ]
}
```

#### 2. File structure

```
demo
├─ index.md
└─ _posts-news
   └─ 1.md
   └─ hello-world.md
```

#### 3. Article Front Matter

```markdown
---
title: Hello World

// By default it is used for posts sorting.
date: 2018-01-01

// Add taxonomy terms you set up
category: Plugins
author: tmiame
tag:
  - Vue
  - VuePress

// Single
category: Plugins

// Multiple
category:
- Plugins
- Projects
---
```

#### 4. Create Theme layout file required by default

```
demo
├─ index.md
└─ .vuepress
   └─ theme
      └─ layouts
         ├─ Posts.vue
         ├─ Post.vue
         ├─ Taxonomy.vue
         └─ Term.vue
```

#### 5. Write layout template

##### `Posts.vue`

```html
<div v-if="$cpt.posts">
  <router-link
    v-for="item of $cpt.posts"
    v-if="item && item.path"
    v-bind:to="item.path">
    <div
      v-if="item.taxonomys"
      v-for="taxonomy of item.taxonomys"
      v-on:click:stop.prevent>
      <span>{{ taxonomy.indexPage.label }}:</span>
      <router-link
        v-for="category of taxonomy.list"
        v-bind:to="category.path"
        v-text="category.name" />
    </div>
    <h2 v-if="item.title" v-text="item.title" />
    <div v-if="item.frontmatter.date" v-text="item.frontmatter.date" />
    <div v-if="item.frontmatter.description" v-text="item.frontmatter.description" />
  </router-link>
</div>

<div class="pagination" v-if="$cpt.postsPagination && $cpt.postsPagination.length">
  <router-link v-if="$cpt.postsPagination.hasPrev" v-bind:to="$cpt.postsPagination.prevLink">
    Prev
  </router-link>
  <router-link
    v-for="(item, index) of $cpt.postsPagination._paginationPages"
    v-bind:to="item.permalink"
    v-bind:disable="$cpt.postsPagination._currentPage.permalink === item.permalink">
    {{ index + 1 }}
  </router-link>
  <router-link v-if="$cpt.postsPagination.hasNext" v-bind:to="$cpt.postsPagination.nextLink">
    Next
  </router-link>
</div>
```

##### `Post.vue`

```html
<template>
  <div class="breadcrumb">
    <router-link v-if="$cpt.indexPage" v-bind:to="$cpt.indexPage.path">
      < {{ $cpt.indexPage.label }}
    </router-link>
  </div>

  <h1>{{ $page.title }}</h1>

  <header v-if="$cpt.post">
    <div v-for="taxonomy of $cpt.post">
      <span>
        {{ taxonomy.indexPage.label }}:
      </span>
      <router-link
        v-for="category of taxonomy.list"
        v-bind:to="category.path"
        v-text="category.name"
      />
    </div>
    <h1 v-text="$page.title" />
  </header>

  <div class="content">
    <slot name="top" />
    <Content v-bind:custom="false" />
    <slot name="bottom" />
  </div>
</template>
```

##### `Taxonomy.vue`

```html
<template>
  <div class="breadcrumb">
    <router-link v-if="$cpt.indexPage" v-bind:to="$cpt.indexPage.path">
      < {{ $cpt.indexPage.label }}
    </router-link>
  </div>

  <h1>{{ $page.title }}</h1>

  <div v-if="$cpt.terms">
    <router-link v-for="item of $cpt.terms.list" v-bind:to="item.path">
      <div v-text="item.name" />
      <div v-text="item.posts.length" />
    </router-link>
  </div>
</template>
```

##### `Term.vue`

```html
<template>
  <div class="breadcrumb">
    <router-link v-if="$cpt.indexPage" v-bind:to="$cpt.indexPage.path">
      < {{ $cpt.indexPage.label }}
    </router-link>
    <router-link v-if="$cpt.terms.indexPage" v-bind:to="$cpt.terms.indexPage.path">
      < {{ $cpt.terms.indexPage.label }}
    </router-link>
  </div>

  <h1>{{ $page.title }}</h1>

  <ul v-if="$cpt.termPosts">
    <li v-for="item of $cpt.termPosts">
      <div v-if="item.taxonomys" v-for="taxonomy of item.taxonomys">
        <span>{{ taxonomy.indexPage.label }}:</span>
        <router-link v-for="category of taxonomy.list" v-bind:to="category.path" v-text="category.name" />
      </div>
      <router-link v-bind:to="item.path" v-text="item.title" />
      <router-link v-bind:to="item.path">
        <div v-if="item.frontmatter.date" v-text="item.frontmatter.date" />
        <div v-if="item.frontmatter.description" v-text="item.frontmatter.description" />
      </router-link>
    </li>
  </ul>
</template>
```

<br>

## Documentation

* [Options](#options)
* [Get data](#get-data)
* [Internationalization (i18n)](#internationalizationi18n)


### Options

```javascript
// .vuepress/config.js or .vuepress/theme/index.js

const registerPostTypes = {
  // (string) (required) Post type ID. (If `slug` and `label` is not set, this is used for URL and Title)
  news: {
    // (string) (required) directory path for posts
    postsDir: '_posts-news',

    // (string) (optional) It is used for URL. (If `label` is not set, this is used for Post type name)
    slug: 'my-news',

    // (string) (optional) Post type name except for URL.
    label: 'News',

    // (string) (optional)
    baseUrl: '/',

    posts: {
      // (string) (optional) layout of article list
      layout: 'Posts',

      // (string) (optional) title of article list
      // - Title variables
      // - %cpt = post type name
      title: '%cpt',

      // (function) (optional)
      postsSorter: ((prev, next) => {
        const prevTime = new Date(prev.frontmatter.date).getTime()
        const nextTime = new Date(next.frontmatter.date).getTime()
        return prevTime - nextTime < 0 ? -1 : 1
      }),

      // (object|boolean) (optional) pagination of article list
      // pagination: false, (Disable pagination)
      pagination: {
        // (number) (optional)
        perPagePosts: 10,
        // (string) (optional)
        paginationUrl: '/page/',
        // (string) (optional)
        // - Title variables
        // - %cpt = post type name
        // - %paginationIndex = page index number
        title: '%cpt - Page %paginationIndex'
      }
    },

    post: {
      // (string) (optional) layout of article
      layout: 'Post',
      // (string) (optional) before title of article
      // - Title variables
      // - %cpt = post type name
      titleBefore: '',
      // (string) (optional) after title of article
      // - Title variables
      // - %cpt = post type name
      titleAfter: ' | %cpt',
      // (string) (optional)
      // https://vuepress.vuejs.org/guide/permalinks.html
      permalink: '/:year/:month/:day/:slug'
    },

    // (object|boolean) (optional) - Default is {}
    taxonomys: {
      // (string) (required) Taxonomy ID. (If `slug` and `label` is not set, this is used for URL and Title)
      category: {
        // (string) (optional) It is used for URL. (If `label` is not set, this is used for Taxonomy name)
        slug: 'my-category',
        // (string) (optional) Taxonomy name
        label: 'Category',
        // (object|boolean) (optional)
        // terms: false, (Disable terms page)
        terms: {
          // (string) (optional) Terms page layout
          layout: 'Taxonomy',
          // (string) (optional) Terms page title
          // - Title variables
          // - %cpt = post type name
          // - %taxonomy = taxonomy name
          title: `%taxonomy | %cpt`
        },
        term: {
          // (string) (optional) Term page layout
          layout: 'Term',
          // (string) (optional) Term page title
          // - Title variables
          // - %cpt = post type name
          // - %taxonomy = taxonomy name
          // - %term = term name
          title: `%term - %taxonomy | %cpt`,
          // (function) (optional)
          postsSorter: ((prev, next) => {
            const prevTime = new Date(prev.frontmatter.date).getTime()
            const nextTime = new Date(next.frontmatter.date).getTime()
            return prevTime - nextTime < 0 ? -1 : 1
          }),
          // (object|boolean) (optional) pagination of Term page
          // pagination: false, (Disable pagination)
          pagination: {
            // (number) (optional)
            perPagePosts: 10,
            // (string) (optional)
            paginationUrl: '/page/',
            // (string) (optional)
            // - Title variables
            // - %cpt = post type name
            // - %taxonomy = taxonomy name
            // - %term = term name
            // - %paginationIndex = page index number
            title: '%term - %taxonomy - Page %paginationIndex | %cpt'
          }
        }
      },
      ...
    }
  }
  ...
}

module.exports = {
  plugins: [
    [
      'vuepress-plugin-cpt', registerPostTypes
    ],
  ]
}
```

### Get data

#### `this.$cpts` - All pages
```js
this.$cpts: Object
  news:
    indexPage: // Root page info data
    pagination: // Posts pagination data
    posts: // Posts data
    taxonomys: // Taxonomys data
  blog:
    indexPage:
    pagination:
    posts:
    taxonomys:
```

#### `this.$cpt` - Page under the custom post type
```
Posts page            -  /news/
Posts Pagination page -  /news/page/2/
Post page             -  /news/hello-world/
Taxonomy Page         -  /news/tag/
Term Page             -  /news/tag/VuePress/
Term Pagination Page  -  /news/tag/VuePress/page/2/
```

```js
this.$cpt: Object|Boolean
  indexPage: // Root page info data
  post:// Post data (only Post page)
  posts: // Posts data
  postsPagination: // Posts pagination data
  taxonomys: // Taxonomys data
  terms: // All terms data (only Taxonomy, Term and Term Pagination page)
  term: // Term data (only Term and Term Pagination page)
  termPosts: // Term posts data (only Term and Term Pagination page)
  termPostsPagination: // Term posts pagination data (only Term and Term Pagination page)
```


### Internationalization(i18n)

#### 1. Set Site Level i18n Config

> https://vuepress.vuejs.org/guide/i18n.html   
> Then, specify the locales option in .vuepress/config.js:

```javascript
// .vuepress/config.js
module.exports = {
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    },
    '/jp/': {
      lang: 'ja-JP',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    }
  }
}
```

#### 2. Set Plugin i18n Config

```javascript
// .vuepress/config.js or .vuepress/theme/index.js
const registerPostTypes = {
  locales: {
    '/': {
      news: {
        label: 'News',
        postsDir: '_posts-news',
        posts: {
          layout: 'Posts',
          title: `%cpt`,
          pagination: {
            title: `%cpt - Page %paginationIndex`
          }
        },
        post: {
          layout: 'Post'
        },
        taxonomys: {
          category: {
            label: 'Category',
            terms: {
              layout: 'Taxonomy',
              title: `%taxonomy - %cpt`
            },
            term: {
              layout: 'Term',
              title: `%term - %taxonomy - %cpt`,
              pagination: {
                title: `%termの投稿 - Page %paginationIndex`
              }
            }
          }
        }
      }
    },
    '/jp/': {
      news: {
        label: 'ニュース',
        postsDir: '/jp/_posts-news',
        posts: {
          layout: 'Posts',
          title: `%cpt`,
          pagination: {
            title: `%cpt - %paginationIndexページ目`
          }
        },
        post: {
          layout: 'Post'
        },
        taxonomys: {
          category: {
            label: 'カテゴリー',
            terms: {
              layout: 'Taxonomy',
              title: `%taxonomy一覧 - %cpt`
            },
            term: {
              layout: 'Term',
              title: `%taxonomy - %termの投稿 - %cpt`,
              pagination: {
                title: `%taxonomy - %termの投稿 - %paginationIndexページ目`
              }
            }
          }
        }
      }
    }
  }
}

module.exports = {
  plugins: [
    [ 'vuepress-plugin-cpt', registerPostTypes ],
    ...
  ]
}
```

<br>

## Tips

1. [Set URL as root page](#1-set-url-as-root-page)
1. [Resource prefetch settings for many pages](#2-resource-prefetch-settings-for-many-pages)
1. [Build performance for many pages](#3-build-performance-for-many-pages)

### 1. Set URL as root page

```js
const registerPostTypes = {
  news: {
    baseUrl: '/',
    ...
  }
}
```
`> https://examples.com/news/`

```js
const registerPostTypes = {
  news: {
    baseUrl: '../',
    ...
  }
}
```
`> https://examples.com/`

### 2. Resource prefetch settings for many pages

https://vuepress.vuejs.org/config/#shouldprefetch

https://ssr.vuejs.org/api/#shouldprefetch

https://ssr.vuejs.org/api/#shouldpreload

```js
module.exports = {
  ...
  shouldPrefetch: (file, type) => {
    if (type !== 'script') {
      return true
    }
  }
}
```

### 3. Build performance for many pages

https://github.com/vuejs/vuepress/issues/19

> I see where you're coming from, but performance isn't a core focus of VuePress. The design is largely limited by webpack (having 1000 pages means 1000 Vue components being compiled via webpack and minified) and looks like it runs out of memory at some point with 1000 pages.   
Tested that we can handle ~300 pages in around 40s, and there are probably quite a few low hanging fruits to improve perf as the current implementation essentially didn't take build perf into consideration at all.

<br>

---

<p align="center"><a href="LICENSE.md">MIT License</a>&nbsp;|&nbsp;© 2019 <a href="https://tmiame.com">tmiame</a></p>
