---
author:
  avatar: https://avatars.githubusercontent.com/u/35308615?v=4
  email: null
  name: null
  url: null
  username: endpass
bugs: https://github.com/endpass/vuepress-plugin-search/issues
category: plugin
date: '2020-04-20T10:52:52.146Z'
deprecated: false
description: search plugin for vuepress
downloads: null
homepage: https://github.com/endpass/vuepress-plugin-search
keywords:
- documentation
- generator
- vue
- vuepress
license: false
maintainers: null
name: '@endpass/vuepress-plugin-search'
npm: https://www.npmjs.com/package/%40endpass%2Fvuepress-plugin-search
publisher:
  avatar: null
  email: lamartire@gmail.com
  name: null
  url: null
  username: lamartire
repository: https://github.com/endpass/vuepress-plugin-search
score: 0.44290027266372856
stars: 0
unstable: false
version: 1.0.0
watchers: 0

---

# @endpass/vuepress-plugin-search

> header-based search plugin for VuePress

## Installation

Install package with `npm`:

```
npm i --save @endpass/vuepress-plugin-search
```

Or via `yarn`:

```
yarn add @endpass/vuepress-plugin-search
```

## Usage

Update `plugins` section in your theme `index.js` file or into `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    '@endpass/vuepress-plugin-search',
    {
      searchMaxSuggestions: 10,
      test: '^(?!.*includes)\\S+.md$'
    }
  ]
}
```

Import and use comonent in your layouts and components:

```vue
<template>
  <search-box />
</template>

<script>
import SearchBox from '@endpass/vuepress-plugin-search/SearchBox'

export default {
  components: {
    SearchBox
  }
}
</script>
```

## Difference between original plugin

`test` accepts `string` or `string[]` and filters all results, not directories.

For example, if you want to leave `.md` files from `foo` directory, you should pass
`'^foo\/\\S+'` to `test` option.
