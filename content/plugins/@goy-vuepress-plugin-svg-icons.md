---
author:
  avatar: https://avatars.githubusercontent.com/u/22659150?v=4
  email: ntnyq13@gmail.com
  name: ntnyq
  url: null
  username: ntnyq
bugs: https://github.com/ntnyq/vuepress-plugin-svg-icons/issues
category: plugin
date: '2021-02-01T01:12:50.351Z'
deprecated: false
description: SVG sprite icon plugin for VuePress
downloads: null
homepage: https://vp-icon.goyfe.com
keywords:
- vuepress-plugin
- vuepress
- svg-sprite-icon
- svg-sprite
- iconfont
license: MIT License
maintainers: null
name: '@goy/vuepress-plugin-svg-icons'
npm: https://www.npmjs.com/package/%40goy%2Fvuepress-plugin-svg-icons
publisher:
  avatar: null
  email: ntnyq13@gmail.com
  name: null
  url: null
  username: ntnyq
repository: https://github.com/ntnyq/vuepress-plugin-svg-icons
score: 0.601105796477251
stars: 15
unstable: false
version: 4.2.3
watchers: 15

---

# vuepress-plugin-svg-icons

[![CIRCLECI](https://img.shields.io/circleci/project/ntnyq/vuepress-plugin-svg-icons/master.svg?logo=circleci)](https://circleci.com/gh/ntnyq/vuepress-plugin-svg-icons)
[![NPM VERSION](https://img.shields.io/npm/v/@goy/vuepress-plugin-svg-icons.svg)](https://www.npmjs.com/package/@goy/vuepress-plugin-svg-icons)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/@goy/vuepress-plugin-svg-icons.svg)](https://www.npmjs.com/package/@goy/vuepress-plugin-svg-icons)
[![LICENSE](https://img.shields.io/github/license/ntnyq/vuepress-plugin-svg-icons.svg)](https://github.com/ntnyq/vuepress-plugin-svg-icons/blob/master/LICENSE)

:heart: Svg sprite plugin for [VuePress](https://vuepress.vuejs.org)

:book: [Live Demo and Docs](https://vp-icon.goyfe.com)

## Install

``` bash
$ npm install @goy/vuepress-plugin-svg-icons -D
# OR
$ yarn add @goy/vuepress-plugin-svg-icons -D
```

## Usage

Add config to your `.vuepress/config.js`:

``` js
module.exports = {
  plugins: [
    '@goy/svg-icons'
  ]
}
```

Create a folder named `icons` in your document `sourceDir` and put all your svg files in it.

All icons will be loaded automaticly. 

The plugin provides a global component named __`vp-icon`__. 

Just enjoy it!

``` markdown
<vp-icon name="github" />

<vp-icon color="#3eaf7c" name="vue" />

<vp-icon color="#3eaf7c" name="vue" size="4em"/>
```

[Custom options detail](https://vp-icon.goyfe.com/guide)
