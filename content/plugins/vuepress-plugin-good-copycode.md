---
author:
  avatar: https://avatars.githubusercontent.com/u/32730471?v=4
  email: null
  name: wtlong
  url: null
  username: wtlong
bugs: https://github.com/wtlong/vuepress-click-copy/issues
category: plugin
date: '2020-04-23T09:17:18.309Z'
deprecated: false
description: "\u4E00\u952E\u590D\u5236"
downloads: null
homepage: https://github.com/wtlong/vuepress-click-copy#readme
keywords:
- vuepress
- copy
- one-click-copy
license: false
maintainers: null
name: vuepress-plugin-good-copycode
npm: https://www.npmjs.com/package/vuepress-plugin-good-copycode
publisher:
  avatar: null
  email: 15700352514@163.com
  name: null
  url: null
  username: wtlong
repository: https://github.com/wtlong/vuepress-click-copy
score: 0.3714254110684695
stars: 7
unstable: false
version: 1.0.4
watchers: 7

---

# vuepress-plugin-good-copycode

> A vuepress plugin for clipboard-copy


## Install

``` bash
# install dependencies
npm i vuepress-plugin-good-copycode -D

# or use yarn
yarn add vuepress-plugin-good-copycode -D
```

## Usage

Write vuepress config

``` javascript
module.exports = {
  plugins: ['vuepress-plugin-good-copycode']
}
```

## Options

This plugin supports the following configurations.

``` javascript
module.exports = {
  plugins: ['vuepress-plugin-good-copycode', {
    copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
    copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
    duration: 300, // prompt message display time.
    showInMobile: false, // whether to display on the mobile side, default: false.
    copyTitle: "复制代码",
    copyName: "复制"
  }]
}
```
