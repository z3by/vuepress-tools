---
author:
  avatar: https://avatars.githubusercontent.com/u/19198355?v=4
  email: null
  name: artiely
  url: null
  username: artiely
bugs: https://github.com/artiely/vuepress-plugin-copy-code/issues
category: plugin
date: '2020-03-30T07:23:36.449Z'
deprecated: false
description: A vuepress plugin for clipboard-copy
downloads: null
homepage: https://github.com/artiely/vuepress-plugin-copy-code#readme
keywords:
- vuepress
- plugin
- clipboard-copy
- vuepress-copy-code
- vuepress-code-copy
- copy
- copy-code
license: MIT License
maintainers: null
name: vuepress-plugin-copy-code
npm: https://www.npmjs.com/package/vuepress-plugin-copy-code
publisher:
  avatar: null
  email: 1119696785@qq.com
  name: null
  url: null
  username: artiely
repository: https://github.com/artiely/vuepress-plugin-copy-code
score: 0.053733180011507134
stars: 2
unstable: true
version: 0.0.1
watchers: 2

---

# vuepress-plugin-copy-code

> A vuepress plugin for clipboard-copy

## Install

``` bash
# install dependencies
npm i vuepress-plugin-copy-code -D

# or use yarn
yarn add vuepress-plugin-copy-code -D
```

## Usage

Write vuepress config

``` javascript
module.exports = {
  plugins: ['copy-code']
}
```

## Options

This plugin supports the following configurations.

``` javascript
module.exports = {
  plugins: ['copy-code', {
    copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
    copyMessage: 'Copy successfully and then paste it for use.', // default is 'Copy successfully and then paste it for use.'
    duration: 300, // prompt message display time.
    showInMobile: false // whether to display on the mobile side, default: false.
  }]
}
```
## demo
[https://artiely.gitee.io](https://artiely.gitee.io)

