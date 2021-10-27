---
author:
  avatar: https://avatars.githubusercontent.com/u/45495377?v=4
  email: bart.renders@infosupport.com
  name: BartR96
  url: null
  username: bart-renders
bugs: https://github.com/BartR96/vuepress-plugin-flexsearch/issues
category: plugin
date: '2020-04-17T09:58:39.886Z'
deprecated: false
description: Next-Generation full text search library for Vuepress
downloads: null
homepage: https://github.com/BartR96/vuepress-plugin-flexsearch
keywords:
- documentation
- vue
- vuepress
- generator
- search
- vuepress-plugin
license: MIT License
maintainers: null
name: vuepress-plugin-flexsearch-guidance-tooling
npm: https://www.npmjs.com/package/vuepress-plugin-flexsearch-guidance-tooling
publisher:
  avatar: null
  email: bart.renders@infosupport.com
  name: null
  url: null
  username: bart-renders
repository: https://github.com/BartR96/vuepress-plugin-flexsearch
score: 0.3342070601843625
stars: 0
unstable: false
version: 1.0.1
watchers: 0

---

[![https://badgen.net/npm/v/vuepress-plugin-flexsearch](https://badgen.net/npm/v/vuepress-plugin-flexsearch)](https://www.npmjs.com/package/vuepress-plugin-flexsearch)
[![https://badgen.net/npm/dt/vuepress-plugin-flexsearch](https://badgen.net/npm/dt/vuepress-plugin-flexsearch)](https://www.npmjs.com/package/vuepress-plugin-flexsearch)
[![https://badgen.net/npm/license/vuepress-plugin-flexsearch](https://badgen.net/npm/license/vuepress-plugin-flexsearch)](https://github.com/z3by/vuepress-plugin-flexsearch/blob/master/LICENSE)
[![https://badgen.net/github/contributors/z3by/vuepress-plugin-flexsearch](https://badgen.net/github/contributors/z3by/vuepress-plugin-flexsearch)](https://github.com/z3by/vuepress-plugin-flexsearch/graphs/contributors)


# vuepress-plugin-flexsearch

Next-Generation full text search library for Vuepress

> A good replacement of the default Vuepress search plugin.

## Installation

```bash
yarn add -D vuepress-plugin-flexsearch
// or npm install vuepress-plugin-flexsearch -D

```

## Usage

```js
// .vuepress/config.js

module.exports = {
    themeConfig: {
      flexSearchOptions: {
        // to override the default options you can see available options on https://github.com/nextapps-de/flexsearch
      }
    },
    plugins: [
      ['flexsearch'],
      // other plugins
    ]
}
```

## Credit

Thanks to [nextapps-de/flexsearch](https://github.com/nextapps-de/flexsearch)

## Contributions

PRs are welcome :heart:
