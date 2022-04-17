---
author:
  avatar: https://avatars.githubusercontent.com/u/85702?v=4
  email: null
  name: monsat
  url: null
  username: monsat
bugs: https://github.com/monsat/vuepress-plugin-use-pages/issues
category: plugins
date: '2021-12-24T10:49:37.187Z'
deprecated: false
description: Vue Press 2 plugin - use pages
downloads: null
homepage: https://github.com/monsat/vuepress-plugin-use-pages#readme
keywords:
- vuepress-plugin
- vuepress
license: false
maintainers: null
name: vuepress-plugin-use-pages
npm: https://www.npmjs.com/package/vuepress-plugin-use-pages
publisher:
  avatar: null
  email: tanaka.kohji@gmail.com
  name: null
  url: null
  username: mon_sat
repository: https://github.com/monsat/vuepress-plugin-use-pages
score: 0.5088678094294771
stars: 1
unstable: false
version: 1.0.4
watchers: 1

---

# VuePress Plugin usePages

You can use array of all PagesData in your doc.

> This plugin is for VuePress 2

You can create articles list links easily.


## Install

```
$ npm install -D vuepress-plugin-use-pages

# or

$ yarn add -D vuepress-plugin-use-pages
```

## Usage

Add `vuepress-plugin-use-pages` in your config file.

```ts:docs/.vuepress/config.ts
  plugins: [
    ['vuepress-plugin-use-pages'],
  ],
```

in your doc file or component.

```html:some-component.vue
<script>
import { defineComponent } from 'vue'
import { usePages } from '@temp/pages'  // pages.js is default filename

export default defineComponent({
  setup() {
    const pages = usePages()
    console.log(pages)
    return { pages }
  },
})
</script>

<template>
  <ul>
    <li
      v-for="page in pages"
      :key="page.key"
    >
      <RouterLink :to="page.path">{{ page.title }}</RouterLink>
      <span v-if="page.frontmatter.date">
        [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]
      </span>
    </li>
  </ul>
</template>
```

## Options

```ts:docs/.vuepress/config.ts
  plugins: [
    ['vuepress-plugin-use-pages', {
      startsWith: '/articles/',                   // fetch only matched paths
      filter: (page) => page.data.lang === 'ja',  // fetch only filtered pages
      sort: (a, b) => b.data.git.updatedTime - a.data.git.updatedTime
      limit: 30,                                  // maximum cached size
      file: 'articles.js',                        // temp file name
    }],
  ],
```

### startsWith

If your docs are in `docs/posts/**/*.md`, set `startsWith: '/posts/'`.

default: `/articles/`

### filter

Additional filter function.

type: `(page: Page) => boolean`

### sort

Sort function.

type: `(a: Page, b: Page) => number`

default: `data.frontmatter.date` desc

### limit

maximum cached size.

default: `false` (all files)

### file

temp file name

default: `pages.js`

## Multiple

This plugin is usable for multiple times.

```ts:docs/.vuepress/config.ts
  plugins: [
    ['vuepress-plugin-use-pages', { startsWith: '/articles/', file: 'articles.js' }],
    ['vuepress-plugin-use-pages', { startsWith: '/posts/', file: 'posts.js' }],
    ['vuepress-plugin-use-pages', { startsWith: '/pages/', file: 'pages.js' }],
  ],
```


## Reference

- [VuePress](https://v2.vuepress.vuejs.org/)

## License

MIT
