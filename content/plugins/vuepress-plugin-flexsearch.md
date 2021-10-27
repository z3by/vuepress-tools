---
author:
  avatar: https://avatars.githubusercontent.com/u/36268825?v=4
  email: zoaby.am@gmail.com
  name: Ahmad Mostafa
  url: https://github.com/z3by
  username: z3bya
bugs: https://github.com/z3by/vuepress-plugin-flexsearch/issues
category: plugin
date: '2021-09-30T05:50:38.420Z'
deprecated: false
description: Next-Generation full text search library for Vuepress
downloads: null
homepage: https://github.com/z3by/vuepress-plugin-flexsearch#readme
keywords:
- vuepress-plugin-flexsearch
- vuepress-search
- search
- vuepress-plugin
- vuepress
license: MIT License
maintainers: null
name: vuepress-plugin-flexsearch
npm: https://www.npmjs.com/package/vuepress-plugin-flexsearch
publisher:
  avatar: null
  email: zoaby.am@gmail.com
  name: null
  url: null
  username: z3bya
repository: https://github.com/z3by/vuepress-plugin-flexsearch
score: 0.5134443243200937
stars: 31
unstable: true
version: 0.3.0
watchers: 31

---

[![https://badgen.net/npm/v/vuepress-plugin-flexsearch](https://badgen.net/npm/v/vuepress-plugin-flexsearch)](https://www.npmjs.com/package/vuepress-plugin-flexsearch)
[![https://badgen.net/npm/dt/vuepress-plugin-flexsearch](https://badgen.net/npm/dt/vuepress-plugin-flexsearch)](https://www.npmjs.com/package/vuepress-plugin-flexsearch)
[![https://badgen.net/npm/license/vuepress-plugin-flexsearch](https://badgen.net/npm/license/vuepress-plugin-flexsearch)](https://github.com/z3by/vuepress-plugin-flexsearch/blob/master/LICENSE)
[![https://badgen.net/github/contributors/z3by/vuepress-plugin-flexsearch](https://badgen.net/github/contributors/z3by/vuepress-plugin-flexsearch)](https://github.com/z3by/vuepress-plugin-flexsearch/graphs/contributors)

# vuepress-plugin-flexsearch

Next-Generation full text search library for Vuepress

> A great replacement of the default Vuepress search plugin.

## Installation

```bash
yarn add -D vuepress-plugin-flexsearch
// or npm install vuepress-plugin-flexsearch -D

```

## Usage

Use the default settings:

```js
// .vuepress/config.js

module.exports = {
    plugins: [
      ['flexsearch'],
      // other plugins
    ]
}
```

Or modify the settings to match your needs:

```js
// .vuepress/config.js

module.exports = {
    plugins: [
      ['flexsearch', {
        /*
          Plugin custom options
        */
        maxSuggestions: 10,    // how many search suggestions to show on the menu, the default is 10.
        searchPaths: ['path1', 'path2'],    // an array of paths to search in, keep it null to search all docs.
        searchHotkeys: ['s'],    // Hot keys to activate the search input, the default is "s" but you can add more.
        searchResultLength: 60,    // the length of the suggestion result text by characters, the default is 60 characters.
        splitHighlightedWords: ' ',  // regex or string to split highlighted words by, keep it null to use flexsearch.split
        noExtraSpaceAfterHtmlTag: false,   // don't add extra spaces in highlighted results
        /*
          Default FlexSearch options
          To override the default options you can see available options at https://github.com/nextapps-de/flexsearch
        */
        search_options: {
          encode: "icase",
          tokenize: "forward",
          resolution: 9,
          doc: {
            id: "key",
            field: ["title", "content", "headers"],
          }
        }
      }],
      // other plugins
    ]
}
```

## Credit

Thanks to [nextapps-de/flexsearch](https://github.com/nextapps-de/flexsearch)

## Contributions

PRs are welcome :heart:
