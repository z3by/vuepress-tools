---
author:
  avatar: https://avatars.githubusercontent.com/u/16360246?v=4
  email: akccakccwww@gmail.com
  name: Rex Tsou
  url: null
  username: akccakcctw
bugs: https://github.com/akccakcctw/vuepress-plugin-last-updated-by/issues
category: plugin
date: '2021-05-31T17:39:36.299Z'
deprecated: false
description: last-updated plugin for vuepress
downloads: null
homepage: https://github.com/akccakcctw/vuepress-plugin-last-updated-by#readme
keywords:
- vue
- vuepress
license: false
maintainers: null
name: '@akccakcctw/vuepress-plugin-last-updated-by'
npm: https://www.npmjs.com/package/%40akccakcctw%2Fvuepress-plugin-last-updated-by
publisher:
  avatar: null
  email: akccakccwww@gmail.com
  name: null
  url: null
  username: akccakcctw
repository: https://github.com/akccakcctw/vuepress-plugin-last-updated-by
score: 0.4463195343666452
stars: 0
unstable: true
version: 0.1.0
watchers: 0

---

# @akccakcctw/vuepress-plugin-last-updated-by

> vuepress plugin to display last author of files

[![Npm build badge](https://img.shields.io/npm/v/@akccakcctw/vuepress-plugin-last-updated-by.svg?style=flat-square)](https://www.npmjs.com/package/@akccakcctw/vuepress-plugin-last-updated-by)

## Install 

```sh
$ npm install -D @akccakcctw/vuepress-plugin-last-updated-by
```

## Usage

Add `@akccakcctw/vuepress-plugin-last-updated-by` to `plugins` in your vuepress **config.js**.

```javascript
// config.js

module.exports = {
  plugins: [
    '@akccakcctw/vuepress-plugin-last-updated-by', // add this line
  ],
}
```

It will add `lastUpdatedBy` to your `$page`, can be access like

```javascript
console.log($page.lastUpdatedBy); // "akccakcctw"
```
