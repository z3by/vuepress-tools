---
author:
  avatar: https://private-avatars.githubusercontent.com/u/22881872?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUzODAsIm5iZiI6MTczNDY1NDE4MCwicGF0aCI6Ii91LzIyODgxODcyIn0.ETq2zERSOsCadm_JWBi6yZkoAc27nUGOIpPC32bMaHM&v=4
  email: null
  name: "\u541B\u60DC"
  url: null
  username: xinlei3166
bugs: https://github.com/xinlei3166/vuepress-plugin-waline/issues
category: plugins
date: '2021-10-29T20:27:19.685Z'
deprecated: false
description: vuepress plugin for waline
downloads: null
homepage: https://github.com/xinlei3166/vuepress-plugin-waline#readme
keywords:
- vuepress2
- vuepress
- vue
- comment
- waline
- plugin
license: MIT License
maintainers: null
name: vuepress-plugin-waline
npm: https://www.npmjs.com/package/vuepress-plugin-waline
publisher:
  avatar: null
  email: xinlei3166@126.com
  name: null
  url: null
  username: xinlei3166
repository: https://github.com/xinlei3166/vuepress-plugin-waline
score: 0.44062150734754585
stars: 3
unstable: true
version: 0.1.6
watchers: 3

---

# vuepress-plugin-waline

## 简介

vuepress-plugin-waline 是一个基于 Vuepress 2.x 的插件，它可以帮助你更快的接入 [Waline](https://waline.js.org) 评论系统。

[查看Demo](https://xinlei3166.github.io/about.html)

## 提示
已支持vuepress@2.0.0-beta.51版本

## 安装

```bash
npm install -D vuepress-plugin-waline
yarn add -D vuepress-plugin-waline
```



## 用法

.vuepress/config.js文件中使用插件

```js
plugins: [
  walinePlugin({
    serverURL: 'https://waline-xinlei3166.vercel.app'
  })
]
```

