---
author:
  avatar: https://avatars.githubusercontent.com/u/35414841?v=4
  email: null
  name: Zorin
  url: null
  username: Zolyn
bugs: https://github.com/Zolyn/vuepress-plugin-rightmenu/issues
category: plugin
date: '2021-06-12T07:28:06.330Z'
deprecated: false
description: '[![npm](https://img.shields.io/npm/v/@zolyn/vuepress-plugin-rightmenu?style=flat-square)](https://npmjs.com/package/@zolyn/vuepress-plugin-rightmenu)
  [![npmscope](https://img.shields.io/npm/dw/@zolyn/vuepress-plugin-rightmenu?style=flat-square)](https://n'
downloads: null
homepage: https://github.com/Zolyn/vuepress-plugin-rightmenu#readme
keywords: null
license: MIT License
maintainers: null
name: '@zolyn/vuepress-plugin-rightmenu'
npm: https://www.npmjs.com/package/%40zolyn%2Fvuepress-plugin-rightmenu
publisher:
  avatar: null
  email: pikasama@qq.com
  name: null
  url: null
  username: zolyn
repository: https://github.com/Zolyn/vuepress-plugin-rightmenu
score: 0.5932459586986076
stars: 1
unstable: false
version: 1.1.0
watchers: 1

---

# vuepress-plugin-rightmenu

[![npm](https://img.shields.io/npm/v/@zolyn/vuepress-plugin-rightmenu?style=flat-square)](https://npmjs.com/package/@zolyn/vuepress-plugin-rightmenu)
[![npmscope](https://img.shields.io/npm/dw/@zolyn/vuepress-plugin-rightmenu?style=flat-square)](https://npmjs.com/package/@zolyn/vuepress-plugin-rightmenu)
[![author](https://img.shields.io/badge/author-Zorin-26a2ff?style=flat-square&logo=github)](https://github.com/Zolyn)
[![license](https://img.shields.io/github/license/Zolyn/vuepress-plugin-rightmenu?style=flat-square)](https://github.com/Zolyn/vuepress-plugin-rightmenu)

vuepress-plugin-rightmenu 是一个适用于[Vuepress](https://v1.vuepress.vuejs.org/zh/) 的右键菜单插件，插件使用 [Vuetify](https://github.com/vuetifyjs/vuetify) 作为 UI 框架，[PureCSS](https://github.com/pure-css/pure) 作为 CSS 框架

## 图片预览

![preview](https://cdn.jsdelivr.net/gh/Zolyn/StaticFiles@2021.5.1-release.0/vuepress/images/rightmenu/preview.png)
浅色模式
![preview-dark](https://cdn.jsdelivr.net/gh/Zolyn/StaticFiles@2021.5.1-release.0/vuepress/images/rightmenu/preview-dark.png)
深色模式

## 演示站点

[Arcadia](https://blog.zorinchan.icu) (我的博客)

## 插件特点

-   界面简洁美观（基于 Material Design 的 Vuetify 库）
-   深色模式
-   样式覆盖尽可能地最小化（原主题样式覆盖最小化）
-   图片链接嗅探（图片菜单栏）
-   普通链接嗅探（链接菜单栏）
-   可自定义性强

    1. 图标栏可自定义（图标，点击回调函数）
    2. 默认菜单栏可自定义（标题，点击回调函数）
    3. 特定的菜单栏，如针对图片和链接的菜单栏可自定义（标题，点击回调函数）
    4. 常驻菜单栏可自定义（标题，点击回调函数）

-   待开发...

## 快速开始

### 安装

```bash
# npm
npm install --save-dev @zolyn/vuepress-plugin-rightmenu

# yarn
yarn add -D @zolyn/vuepress-plugin-rightmenu

# pnpm
pnpm add -D @zolyn/vuepress-plugin-rightmenu
```

### 配置

使用默认配置

对象式配置

```js
// .vuepress/config.js
module.exports = {
    plugins: {
        '@zolyn/rightmenu': {},
    },
};
```

Babel 式配置

```js
// .vuepress/config.js
module.exports = {
    plugins: [['@zolyn/rightmenu']],
};
```

## 文档

[在这呢](https://blog.zorinchan.icu/docs/vuepress-plugin-rightmenu/)

# Todo

-   [ ] Issue template
-   [ ] CONTRIBUTING.md
-   [ ] 全部菜单栏支持图标自定义
-   [ ] 嗅探函数自定义
-   [ ] 部分样式自定义

## 协议

[MIT License](https://mit-license.org/)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FZolyn%2Fvuepress-plugin-rightmenu.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FZolyn%2Fvuepress-plugin-rightmenu?ref=badge_large)
