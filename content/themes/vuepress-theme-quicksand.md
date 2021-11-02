---
author:
  avatar: https://avatars.githubusercontent.com/u/8409100?v=4
  email: null
  name: Shawn Xu
  url: null
  username: xxyan0205
bugs: https://github.com/xxyan0205/vuepress-theme-quicksand/issues
category: theme
date: '2021-07-20T13:20:27.557Z'
deprecated: false
description: vuepress-theme
downloads: null
homepage: https://github.com/xxyan0205/vuepress-theme-quicksand#readme
keywords:
- vuepress-theme
license: MIT License
maintainers: null
name: vuepress-theme-quicksand
npm: https://www.npmjs.com/package/vuepress-theme-quicksand
publisher:
  avatar: null
  email: 630653829@qq.com
  name: null
  url: null
  username: xxyan0205
repository: https://github.com/xxyan0205/vuepress-theme-quicksand
score: 0.6067323759718048
stars: 6
unstable: false
version: 1.0.3
watchers: 6

---

## vuepress-theme-quicksand

![vuepress-theme-quicksand](https://img.shields.io/npm/v/vuepress-theme-quicksand.svg?style=flat-square) ![](https://img.shields.io/github/license/xxyan0205/vuepress-theme-quicksand?style=flat-square)

> A niubility style theme for [VuePress v2.0](https://v2.vuepress.vuejs.org/)

### Install

```base
npm i vuepress-theme-quicksand
#or
yarn add vuepress-theme-quicksand
```

### Usage

> .vuepress/config.js

```js
module.exports = {
  theme: 'vuepress-theme-quicksand',
  // or
  theme: 'quicksand',
}
```

### Inherit

> .vuepress/theme/index.js

```js
module.exports = {
  name: 'vuepress-theme-local',
  extends: 'vuepress-theme-quicksand',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
  },
}
```

### Extension

#### Code theme

##### Code block settings

* dark (default)

````md
```javascript#dark
console.log('dark theme')
```
````

* light

````md
```javascript#light
console.log('light theme')
```
````

##### Global settings

```js
module.exports = {
  themeConfig: {
    codeTheme: 'light',
  }
}
```

#### Style variables

```css
:root, html.dark {
  --container-width: 1280px;

  --font-family-quicksand: Quicksand, var(--font-family);
  --font-family-code: Source Code Pro, var(--font-family);
  
  .theme-code-dark {
    --code-text-color: #f0f0f0;
    --code-brand-color: #00CCFF;
  }

  .theme-code-light {
    --code-text-color: #3a385d;
    --code-brand-color: var(--c-brand);
  }
}
```