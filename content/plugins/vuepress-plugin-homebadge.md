---
author:
  avatar: https://avatars.githubusercontent.com/u/49757965?v=4
  email: null
  name: Feng L.H.
  url: null
  username: zpfz
bugs: https://github.com/zpfz/vuepress-plugin-homebadge/issues
category: plugin
date: '2020-03-28T09:40:15.416Z'
deprecated: false
description: A homepage badge plugin for AntDocs theme.
downloads: null
homepage: https://github.com/zpfz/vuepress-plugin-homebadge
keywords:
- homepage
- generator
- vue
- vuepress
- badge
- homebadge
license: MIT License
maintainers: null
name: vuepress-plugin-homebadge
npm: https://www.npmjs.com/package/vuepress-plugin-homebadge
publisher:
  avatar: null
  email: zpfz@seeyoz.cn
  name: null
  url: null
  username: seeyoz
repository: https://github.com/zpfz/vuepress-plugin-homebadge
score: 0.3239245969741852
stars: 0
unstable: true
version: 0.1.0
watchers: 0

---

<h1 align="center">vuepress-plugin-homebadge</h1>
<div align="center">

A homepage badge plugin for AntDocs theme.

![Version](https://img.shields.io/github/package-json/v/zpfz/vuepress-plugin-homebadge?style=flat-square)
![NPM](https://img.shields.io/npm/l/vuepress-plugin-homebadge?style=flat-square)

</div>

## 安装

```sh
yarn add -D vuepress-plugin-homebadge
# OR npm install -D vuepress-plugin-homebadge
```

## 使用

```js
module.exports = {
  plugins: ['homebadge']
}
```
## 配置选项
```js
module.exports = {
  plugins: [
    ['homebadge',{
      selector: '.hero',
      repoLink: 'https://github.com/zpfz/vuepress-theme-antdocs',
      badgeLink: 'https://img.shields.io/github/stars/zpfz/vuepress-theme-antdocs?style=social',
      badgeGroup: [
        'https://img.shields.io/badge/build-passing-brightgreen?style=flat-square',
        'https://img.shields.io/npm/dt/vuepress-theme-antdocs?style=flat-square&color=red',
        'https://img.shields.io/github/license/zpfz/vuepress-theme-antdocs?style=flat-square&color=blue',
        'https://img.shields.io/npm/v/vuepress-theme-antdocs?style=flat-square'
      ]
    }]
  ]
}
```

## 选项

### selector
- 类型：`string`
- 默认值：`.hero`   
指定要注入徽标的父节点，该操作会在父节点内的最后一个元素追加徽标链接。

### repoLink
- 类型：`string`
- 默认值：`undefined`  
指定一个 Github 库链接，当用户点击 Star 徽标时，会跳转至该链接。

### badgeLink
- 类型：`string`
- 默认值：`undefined`  
指定 Star 徽标链接，链接可从 [shields.io](https://shields.io/category/social) 获取。

### badgeGroup
- 类型：`array`
- 默认值：`undefined`  
指定 Star 徽标链接，链接可从 [shields.io](https://shields.io/) 获取。