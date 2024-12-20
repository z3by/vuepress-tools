---
author:
  avatar: https://private-avatars.githubusercontent.com/u/6310131?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU2ODAsIm5iZiI6MTczNDY1NDQ4MCwicGF0aCI6Ii91LzYzMTAxMzEifQ.6QOMsexOWA-QDXC8ur1t_HQxbZ0ZATnbv-Ea4IBEJ3E&v=4
  email: null
  name: springleo
  url: null
  username: lq782655835
bugs: https://github.com/lq782655835/vuepress-plugin-element-ui/issues
category: plugins
date: '2020-04-20T12:22:11.050Z'
deprecated: false
description: vuepress plugin to extend elementui base on markdown-it-container
downloads: null
homepage: https://github.com/lq782655835/vuepress-plugin-element-ui#readme
keywords:
- vuepress
- element-ui
- elementui
- vuepress plugin
- plugin
license: false
maintainers: null
name: vuepress-plugin-element-ui
npm: https://www.npmjs.com/package/vuepress-plugin-element-ui
publisher:
  avatar: null
  email: 18521566707@163.com
  name: null
  url: null
  username: springleo
repository: https://github.com/lq782655835/vuepress-plugin-element-ui
score: 0.3717782074719612
stars: 20
unstable: false
version: 1.1.0
watchers: 20

---

# [vuepress-plugin-element-ui](https://superbiger.github.io/vuepress-plugin-tabs/)

<a href="https://www.npmjs.com/package/vuepress-plugin-element-ui"><img src="https://img.shields.io/npm/v/vuepress-plugin-element-ui.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/vuepress-plugin-element-ui"><img src="https://img.shields.io/npm/l/vuepress-plugin-element-ui.svg" alt="License"></a>
<img src="https://img.shields.io/badge/thanks-element-brightgreen.svg"/>

Vuepress plugin - extend [Element UI](https://github.com/ElemeFE/element) base on markdown-it-container

## Docs
> https://lq782655835.github.io/vuepress-plugin-element-ui/

## Install
Important: This plugin requires VuePress >= 1.0.0, for now you can try it via yarn add vuepress@next -D

```shell
yarn add vuepress-plugin-element-ui -D
```

```javascript
// .vuepress/config.js
module.exports = {
  plugins: [
    'element-ui'
  ]
}
```

## Usage

~~~ md
:::: el-tabs

::: el-tab-pane label=title
__markdown content__
:::


::: el-tab-pane label=javascript
``` javascript
() => {
  console.log('Javascript code example')
}
```
:::

::::
~~~