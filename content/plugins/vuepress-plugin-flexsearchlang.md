---
author:
  avatar: https://private-avatars.githubusercontent.com/u/30567891?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUzMjAsIm5iZiI6MTczNDY1NDEyMCwicGF0aCI6Ii91LzMwNTY3ODkxIn0.X5tXnjz86FTRzBJcp9H9_26frwYhd1VwDU9m6YY6qwI&v=4
  email: zoaby.am@gmail.com
  name: z3by
  url: null
  username: Vanekru
bugs: https://github.com/Vanekru/vuepress-plugin-flexsearch/issues
category: plugins
date: '2020-04-23T10:49:29.414Z'
deprecated: false
description: Next-Generation full text search library for Vuepress
downloads: null
homepage: https://github.com/z3by/vuepress-plugin-flexsearch#readme
keywords:
- documentation
- vue
- vuepress
- generator
- search
- vuepress-plugin
license: MIT License
maintainers: null
name: vuepress-plugin-flexsearchlang
npm: https://www.npmjs.com/package/vuepress-plugin-flexsearchlang
publisher:
  avatar: null
  email: iroslov@gmail.com
  name: null
  url: null
  username: vanekru
repository: https://github.com/Vanekru/vuepress-plugin-flexsearch
score: 0.1505592694344921
stars: 0
unstable: true
version: 0.0.7
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
