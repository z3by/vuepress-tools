---
author:
  avatar: https://avatars.githubusercontent.com/u/27122409?v=4
  email: 864299347@qq.com
  name: shanyuhai123
  url: null
  username: shanyuhai123
bugs: https://github.com/shanyuhai123/vuepress-plugin-auto-sidebar/issues
category: plugin
date: '2021-07-03T17:20:34.852Z'
deprecated: false
description: A vuepress plugin for generate sidebar
downloads: null
homepage: https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/
keywords:
- vuepress
- sidebar
- bar
- auto-sidebar
license: MIT License
maintainers: null
name: vuepress-plugin-auto-sidebar
npm: https://www.npmjs.com/package/vuepress-plugin-auto-sidebar
publisher:
  avatar: null
  email: 864299347@qq.com
  name: null
  url: null
  username: shanyuhai123
repository: https://github.com/shanyuhai123/vuepress-plugin-auto-sidebar
score: 0.6388995146652539
stars: 84
unstable: false
version: 2.3.2
watchers: 84

---

# Vuepress Plugin Auto Sidebar

[![Vuepress Plugin Auto Sidebar](https://github.com/shanyuhai123/vuepress-plugin-auto-sidebar/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/shanyuhai123/vuepress-plugin-auto-sidebar/actions/workflows/deploy-docs.yml) ![npm](https://img.shields.io/npm/dt/vuepress-plugin-auto-sidebar) ![npm](https://img.shields.io/npm/v/vuepress-plugin-auto-sidebar)


🇬🇧 English | [🇨🇳 简体中文](./README-zh_CN.md)



## 介绍（Introduction）

This is a plugin that automatically generates a sidebar for vuepress.



## 安装（Install）

```bash
npm i vuepress-plugin-auto-sidebar -D

# v2 alpha(测试版, for vuepress v2)
npm i vuepress-plugin-auto-sidebar@alpha -D
```



## 使用（Usage）

```js
// edit .vuepress/config.js file
module.exports = {
  plugins: [
    ["vuepress-plugin-auto-sidebar", {}]
  ]
}
```

:book: **For more detailed documentation, you can visit [vuepress-plugin-auto-sidebar](https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar)。**

### 1. Require

> 令人遗憾的事。

In [VuePress v1](https://v1.vuepress.vuejs.org/) the above can quickly help you enable the plugin, but since [VuePress v2](https://v2.vuepress.vuejs.org/) does not yet provide the corresponding capabilities, you need to introduce the generated `sidebar.js` file yourself.

```js
const sidebarConf = require('./sidebar')

module.exports = {
  plugins: [
    ["vuepress-plugin-auto-sidebar", {}]
  ],
  themeConfig: {
    sidebar: sidebarConf
  }
}
```

### 2. Simple Navbar

We have extended `vuepress cli` to help you quickly generate a simple navigation bar, [how to use it](https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/features/plugin-options.html#nav):

```bash
# v2 not support
vuepress nav docs
```

