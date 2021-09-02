---
author:
  avatar: https://avatars.githubusercontent.com/u/17906558?v=4
  email: pengchengou@gmail.com
  name: vxhly
  url: null
  username: vxhly
bugs: https://github.com/vxhly/vuepress-plugin-one-click-copy/issues
category: plugin
date: '2021-07-02T03:17:44.775Z'
deprecated: false
description: A vuepress plugin for clipboard-copy
downloads: null
homepage: https://github.com/vxhly/vuepress-plugin-one-click-copy#readme
keywords:
- vuepress
- plugin
- clipboard-copy
- vuepress-one-click-copy
- copy
- one-click-copy
license: MIT License
maintainers: null
name: vuepress-plugin-one-click-copy
npm: https://www.npmjs.com/package/vuepress-plugin-one-click-copy
publisher:
  avatar: null
  email: pengchengou@gmail.com
  name: null
  url: null
  username: vxhly
repository: https://github.com/vxhly/vuepress-plugin-one-click-copy
score: 0.5545858429308124
stars: 7
unstable: false
version: 1.0.5
watchers: 7

---

# vuepress-plugin-one-click-copy

> A vuepress plugin for clipboard-copy

[![npm](https://img.shields.io/npm/v/vuepress-plugin-one-click-copy.svg)](https://www.npmjs.com/package/vuepress-plugin-one-click-copy)
[![GitHub stars](https://img.shields.io/github/stars/vxhly/vuepress-plugin-one-click-copy)](https://github.com/vxhly/vuepress-plugin-one-click-copy/stargazers)
[![GitHub license](https://img.shields.io/github/license/vxhly/vuepress-plugin-one-click-copy)](https://github.com/vxhly/vuepress-plugin-one-click-copy/blob/master/LICENSE)

## Install

``` bash
# install dependencies
npm i vuepress-plugin-one-click-copy -D

# or use yarn
yarn add vuepress-plugin-one-click-copy -D
```

## Usage

Write vuepress config

``` javascript
module.exports = {
  plugins: ['one-click-copy']
}
```

## Options

This plugin supports the following configurations.

``` javascript
module.exports = {
  plugins: ['one-click-copy', {
    copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
    copyMessage: 'Copy successfully and then paste it for use.', // default is 'Copy successfully and then paste it for use.'
    duration: 300, // prompt message display time
  }]
}
```

## License

[MIT](https://github.com/vxhly/vuepress-plugin-one-click-copy/blob/master/LICENSE).