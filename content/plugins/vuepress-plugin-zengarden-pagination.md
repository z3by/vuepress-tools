---
author:
  avatar: https://avatars.githubusercontent.com/u/4708070?v=4
  email: thomas@venturini.codes
  name: Thomas Venturini
  url: null
  username: tjventurini
bugs: https://github.com/tjventurini/vuepress-plugin-zengarden-pagination/issues
category: plugin
date: '2020-05-06T17:59:28.624Z'
deprecated: false
description: "Pagination for your VuePress blog \U0001F680"
downloads: null
homepage: https://github.com/tjventurini/vuepress-plugin-zengarden-pagination#readme
keywords:
- vuepress
- vuepress
- plugin
- zengarden
- blog
license: MIT License
maintainers: null
name: vuepress-plugin-zengarden-pagination
npm: https://www.npmjs.com/package/vuepress-plugin-zengarden-pagination
publisher:
  avatar: null
  email: thomas@venturini.codes
  name: null
  url: null
  username: tjventurini
repository: https://github.com/tjventurini/vuepress-plugin-zengarden-pagination
score: 0.34702190867649263
stars: 0
unstable: false
version: 1.0.0
watchers: 0

---

# VuePress Plugin Zengarden Pagination

Provides pagination for your VuePress blog 🚀

## Installation

```bash
npm i --save-dev vuepress-plugin-zengarden-pagination
# or 
yarn add -D vuepress-plugin-zengarden-pagination
```

## Usage

Add the following to your `config.js` or `index.js` file.

```javascript
['zengarden-pagination']
```

You should now have `this.$pagination` available.

## Configuration

If you don't have your posts in the default `posts` directory, or want to change anything else from the default setup, then you can do so.

```javascript
['zengarden-pagination', {
    title: 'Articles Page #',
    path: '/articles/',
    dist: '/articles/', // TODO: make use of this!
    frontmatter: {
        layout: 'Directory'
    }
}]
```
