---
author:
  avatar: https://avatars.githubusercontent.com/u/43475371?v=4
  email: stickmyc@163.com
  name: "\u5B50\u8083"
  url: null
  username: Yubisaki
bugs: https://github.com/Yubisaki/vuepress-plugin-blog/issues
category: plugin
date: '2019-02-27T09:41:30.210Z'
deprecated: false
description: blog support plugin for vuepress theme yubisaki
downloads: null
homepage: https://github.com/Yubisaki/vuepress-plugin-blog#readme
keywords:
- vuepress
- vuepress-plugin
license: false
maintainers: null
name: '@chavesweb/vuepress-plugin-blog'
npm: https://www.npmjs.com/package/%40chavesweb%2Fvuepress-plugin-blog
publisher:
  avatar: null
  email: mail@chavesgu.com
  name: null
  url: null
  username: chavesgu
repository: https://github.com/Yubisaki/vuepress-plugin-blog
score: 0.06178106451136287
stars: 0
unstable: false
version: 1.0.4
watchers: 0

---

# @yubisaki/vuepress-plugin-blog

## Install

```bash
npm i @yubisaki/vuepress-plugin-blog
```

## Usage

```js
module.exports = {
  plugins: ['@yubisaki/blog']
}
```

## Options

**pageEnhancers**

- Type: `Array`

- default: []

This option is the extend enhancers for [extendPageData](https://vuepress.vuejs.org/plugin/#extendpagedata)

**tagUrl**

- Type: `string`

- default: `/tag/`

This option is the path which page show the tags or the posts of a specific tag

**categoryUrl**

- Type: `string`

- default: `/category/`

This option is the path which page show the categories or the posts of a specific category

## example

```js
module.exports = {
  plugins: ['@yubisaki/blog', {
    pageEnhancers,
    tagUrl,
    categoryUrl
  }]
}
```

## What can you get?

**extendMarkdown**

- [markdown-it-task-list](https://github.com/revin/markdown-it-task-lists)

- [markdown-it-imsize](https://github.com/tatsy/markdown-it-imsize)

**Vue.computed.$tags/Vue.computed.$categories**

- `length`: The length of all the tags

- `map`: Object of tags

- `list`: Array of tags data
```js
[{ name, path, pages }]
```
  - `name`: The tag name, such as `React`, `Redux`
  - `path`: The path which page show the posts of a specific tag, for example `xxx.blog/tag/react` will show the posts(the pages field) which tag is `react`
  - `pages`: The posts which the tag field contains

**Vue.computed.$tag/Vue.computed.$category**

This value is a item of `Vue.computed.$tags.list` which the name field equals to `this.$route.meta.tagName`

## The Layout maybe your theme should support

- `Tags`: This layout is used to show the tags page, such as `xxx.blog/tag/`

- `Tag`: This layout is used to show the posts which tag equals to tag url, for example `xxx.blog/tag/react` will show the posts which tag is `react`

- `Categories`: As same as the Tags layout

- `Category`: As same as the Tag layout