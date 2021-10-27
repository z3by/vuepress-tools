---
author:
  avatar: https://avatars.githubusercontent.com/u/23313167?v=4
  email: qw13131wang@gmail.com
  name: tolking
  url: null
  username: tolking
bugs: https://github.com/tolking/vuepress-plugin-blog-multidir/issues
category: plugin
date: '2019-06-14T07:15:07.944Z'
deprecated: false
description: A VuePress blog plugin which Support multiple folders
downloads: null
homepage: https://github.com/tolking/vuepress-plugin-blog-multidir
keywords:
- vue
- vuepress
- plugin
- blog
- blog-multidir
- pagination
license: MIT License
maintainers: null
name: vuepress-plugin-blog-multidir
npm: https://www.npmjs.com/package/vuepress-plugin-blog-multidir
publisher:
  avatar: null
  email: qw13131wang@gmail.com
  name: null
  url: null
  username: tolking
repository: https://github.com/tolking/vuepress-plugin-blog-multidir
score: 0.34982495250907153
stars: 8
unstable: false
version: 1.0.5
watchers: 8

---

# vuepress-plugin-blog-multidir

> A VuePress blog plugin which Support multiple folders

[README](README.md) | [CHANGELOG](CHANGELOG.md)

Build your blog through multiple folders
---

## Installation

``` sh
yarn add vuepress-plugin-blog-multidir
// or
npm i vuepress-plugin-blog-multidir
```

## Usage

``` js
module.exports = {
  plugins: [
    'blog-multidir'
  ]
}
```

[ Vuepress documentation](https://v1.vuepress.vuejs.org/plugin/using-a-plugin.html)


## Options

### aliasesRoot
- Type: `string`
- default: `:root`

**Can't have the same name as your folder.**

For internal use only.

### categoryIndexPageUrl
- Type: `string`
- Default: `/category/`

### tagIndexPageUrl
- Type: `string`
- Default: `/tag/`

### categoryLayout
- Type: `string`
- Default: `Tag`

### tagLayout
- Type: `string`
- Default: `Tag`

### postLayout
- Type: `string`
- Default: `Page`

### postsDir
- Type: `string`, `array`, `Object`
- Default: `posts`

Configures the `permalink` generated for you folder.

example
``` js
{
  postsDir: 'posts'
  // or
  postsDir: ['posts1', 'posts2', 'posts3']
  // or { dir: permalink }
  postsDir: {
    posts1: ':year',
    posts2: ':month',
    posts3: ':slug'
  }
}
```

### permalink
- Type: `string`, `boolean(false)`
- Default: `false`

See [Permalinks](https://v1.vuepress.vuejs.org/guide/permalinks.html#template-variables) for a list of valid variables.

### postsSorter
- Type: `function`
- Default: 
``` js
((prev, next) => {
  const prevTime = new Date(prev.frontmatter.date).getTime()
  const nextTime = new Date(next.frontmatter.date).getTime()
  return prevTime - nextTime > 0 ? -1 : 1
})
```

### paginationDir
- Type: `boolean`, `string`, `array`
- Default: `true`

example
``` js
{
  paginationDir: true // Enable all paging
  // or
  paginationDir: false // Cancel all pages
  // or
  paginationDir: 'posts' // Enable single paging for `posts` folder
  // or
  paginationDir: ['posts1', 'posts2'] // Enable multiple paging
}
```

### paginationLimit
- Type: `number`
- Default: `12`

### paginatioPath
- Type: `string`
- Default: `page/`

## computed

### $pluginConfig

Plugin config information

### $tags

Page information sorted by tags

### $categories

Page information sorted by categories

### $lists

Page information sorted by folders

### $list

If you are in the pagination page. you can get
``` js
{
  pageKeys,
  pagination,
  path,
  posts
}
```

or If you are in the post page. you can get
``` js
{
  index,
  total,
  dir,
  lastPost,
  nextPost
}
```
from `this.$list`

## attention

**You don't need to create a `index.md(or README.md)` file in a folder that needs Pagination**

```
+- blog
  +- posts
    +- test.md
    ...
  ...
  +- about
    +- index.md
```

or set `layout`

``` md
// about -> index.md

---
layout: Page
---
```

---

You need to use `display` to control where the current article is displayed

``` md
// posts -> test.md

---
display: home
---
```

A list of home pages will displayed.

``` md
// posts -> test.md

---
display: none
---
```

It will not be displayed.

However, you can still access it through the right path.

---

If you are in the pagination page. you can get the current page by `this.$route.meta.current`.

## License

[MIT](http://opensource.org/licenses/MIT)

## Keywords

vue vuepress plugin blog blog-multidir
