---
author:
  avatar: https://avatars.githubusercontent.com/u/16508807?v=4
  email: null
  name: Yosuke Ota
  url: null
  username: ota-meshi
bugs: https://github.com/ota-meshi/vuepress2-plugin-full-text-search/issues
category: plugins
date: '2022-05-16T07:46:31.436Z'
deprecated: false
description: VuePress v2 plugin that adds full-text search box.
downloads: null
homepage: https://github.com/ota-meshi/vuepress2-plugin-full-text-search#readme
keywords:
- vuepress
- vuepress-plugin
- full-text-search
- vuepress-next
license: MIT License
maintainers: null
name: vuepress2-plugin-full-text-search
npm: https://www.npmjs.com/package/vuepress2-plugin-full-text-search
publisher:
  avatar: null
  email: otameshiyo23@gmail.com
  name: null
  url: null
  username: ota-meshi
repository: https://github.com/ota-meshi/vuepress2-plugin-full-text-search
score: 0.5971838623235373
stars: 28
unstable: true
version: 0.2.0
watchers: 28

---

# vuepress-plugin-full-text-search2

[VuePress v2] plugin that adds full-text search box.

![screenshot](./screenshot.png)

[vuepress v2]: https://v2.vuepress.vuejs.org/

:warning: WARNING: this project is considered to be in BETA until [VuePress v2] is available for general use and the API is stable!

## Usage

```shell
npm i -D vuepress-plugin-full-text-search2
```

e.g. `.vuepress/config.js`

```js
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2";
module.exports = {
  plugins: [fullTextSearchPlugin],
};
```

## Options

### locales

- Type: `Record<string, { placeholder: string }>`

- Details:

  The text of the search box in different locales.

  If this option is not specified, it will fallback to default text.

- Example:

```ts
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2";
export default {
  plugins: [
    fullTextSearchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
}
```

- Also see:
  - [VuePress v2 - Guide > I18n]([../../guide/i18n.md](https://v2.vuepress.vuejs.org/guide/i18n.html))
