---
author:
  avatar: https://avatars.githubusercontent.com/u/16624942?v=4
  email: ansidev@gmail.com
  name: Le Minh Tri
  url: null
  username: ansidev
bugs: https://github.com/SafeStudio/vuepress-plugin-enhanced-search/issues
category: plugin
date: '2019-02-04T14:38:23.553Z'
deprecated: false
description: Enhanced search plugin for VuePress
downloads: null
homepage: https://github.com/SafeStudio/vuepress-plugin-enhanced-search
keywords:
- documentation
- vue
- vuepress
- generator
license: MIT License
maintainers: null
name: '@safestudio/vuepress-plugin-enhanced-search'
npm: https://www.npmjs.com/package/%40safestudio%2Fvuepress-plugin-enhanced-search
publisher:
  avatar: null
  email: ansidev@gmail.com
  name: null
  url: null
  username: ansidev
repository: https://github.com/SafeStudio/vuepress-plugin-enhanced-search
score: 0.14236737479143333
stars: 0
unstable: true
version: 0.0.1
watchers: 0

---

# vuepress-plugin-enhanced-search

> enhanced header-based search plugin for VuePress

## Install

```bash
yarn add -D @safestudio/vuepress-plugin-enhanced-search
# OR npm install -D @safestudio/vuepress-plugin-enhanced-search
```

> ## Tip
> Note that this plugin has been included in **default theme**, the search box you see now is powered by the plugin.

## Usage

1. Enable this plugin:

```js
// .vuepress/config.js or themePath/index.js
module.exports = {
  plugins: [
    ['enhanced-search', {
      searchMaxSuggestions: 10
    }]
  ]
}
```

2. This plugin will automatically inject a webpack alias `@EnhancedSearchBox` pointing to the search component so that you can use it directly in your layout component:

```vue
<template>
  <div class="foo-layout">
    <header>
      <EnhancedSearchBox/>
    </header>
    <main>
      ...
    </main>
  </div>
</template>

<script>
import EnhancedSearchBox from '@EnhancedSearchBox'

export default {
  components: { EnhancedSearchBox }
}
</script>
```

## Options

### searchMaxSuggestions

- Type: `number`
- Default: 5

Set the maximum number of results for search.

### test

- Type: `RegExp` | `Array<RegExp>`
- Default: `null`

Set up searchable paths with regular expressions. If no test expression is provided it will search on all paths. Considering you have this structure:

```bash
docs/
├── .vuepress/
│    └── ...
│
├── master/
│    └── ...
│
├── 1.0/
│    └── ...
│
└── 2.0/
     └── ...
```

You can set up searchable paths with `test` as:

- RegExp: `'/1\.0/'`
- Array of RegExp: `['/1\.0/', '/2\.0/']`


Otherwise,  the default search will return duplicates, once you can have similar content between folders `/master/`, `/1.0/` and `/2.0/`.

## Tips

### Tweak the default colors.

Since the Search component leverages the built-in palette, you can tweak the default colors via `styles/palette.styl`:

```stylus
// colors of the enhanced search box you see now:
$accentColor = #3eaf7c
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
$arrowBgColor = #ccc
```
