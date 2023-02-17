---
author:
  avatar: https://avatars.githubusercontent.com/u/27122409?v=4
  email: 864299347@qq.com
  name: shanyuhai123
  url: null
  username: shanyuhai123
bugs: https://github.com/shanyuhai123/vuepress-plugin-auto-sidebar/issues
category: plugins
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
score: 0.6478904736739253
stars: 129
unstable: false
version: 2.3.2
watchers: 129

---

# Vuepress Plugin Auto Sidebar

[![Vuepress Plugin Auto Sidebar](https://github.com/shanyuhai123/vuepress-plugin-auto-sidebar/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/shanyuhai123/vuepress-plugin-auto-sidebar/actions/workflows/deploy-docs.yml) ![npm](https://img.shields.io/npm/dt/vuepress-plugin-auto-sidebar) ![npm](https://img.shields.io/npm/v/vuepress-plugin-auto-sidebar)

## 介绍（Introduction）

这是为 vuepress 自动生成侧边栏的插件。  
This is a plugin that automatically generates a sidebar for vuepress.

## 安装（Install）

### 1. VuePress v1

``` bash
npm i vuepress-plugin-auto-sidebar -D
```

### 2. VuePress v2

```bash
# vuepress v2 alpha(vuepress v2 仍处于测试阶段)
npm i vuepress-plugin-auto-sidebar@alpha -D
```

## 使用（Usage）

:book: **更详细的文档见 [vuepress-plugin-auto-sidebar](https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar)。**  
:book: **For more detailed documentation, you can visit [vuepress-plugin-auto-sidebar](https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar).**

**VuePress v1：**

```js
// 在 .vuepress/config.js 中配置插件
// edit .vuepress/config.js file
module.exports = {
  plugins: [
    ["vuepress-plugin-auto-sidebar", {}]
  ]
}
```

**VuePress v2：**

[VuePress v2](https://v2.vuepress.vuejs.org/zh/) 不再支持插件修改 sidebar，所以你需要自行引入生成的 `sidebar.js` 文件。  
[VuePress v2](https://v2.vuepress.vuejs.org/) no longer supports plugins to modify sidebar, so you need to import the generated `sidebar.js` file yourself.

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

## 其他（Others）

### 1. Simple Navbar

我们扩展了 `vuepress cli` 来帮助你快速生成简单的导航栏，[如何使用它](https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/features/plugin-options.html#nav-%E5%AF%BC%E8%88%AA%E6%A0%8F)。  
We have extended `vuepress cli` to help you quickly generate a simple navigation bar, [how to use it](https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/features/plugin-options.html#nav).

```bash
# vuepress v2 不支持
# vuepress v2 not support
vuepress nav docs
```
