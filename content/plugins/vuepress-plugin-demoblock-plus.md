---
author:
  avatar: https://avatars.githubusercontent.com/u/22881872?v=4
  email: null
  name: "\u541B\u60DC"
  url: null
  username: xinlei3166
bugs: https://github.com/xinlei3166/vuepress-plugin-demoblock-plus/issues
category: plugin
date: '2021-08-20T15:30:52.232Z'
deprecated: false
description: vuepress plugin for demoblock
downloads: null
homepage: https://github.com/xinlei3166/vuepress-plugin-demoblock-plus#readme
keywords:
- vuepress
- vue
- plugin
license: MIT License
maintainers: null
name: vuepress-plugin-demoblock-plus
npm: https://www.npmjs.com/package/vuepress-plugin-demoblock-plus
publisher:
  avatar: null
  email: xinlei3166@126.com
  name: null
  url: null
  username: xinlei3166
repository: https://github.com/xinlei3166/vuepress-plugin-demoblock-plus
score: 0.5248450932561832
stars: 4
unstable: false
version: 1.1.1
watchers: 4

---

# vuepress-plugin-demoblock-plus

## 简介

vuepress-plugin-demoblock-plus 是一个基于 Vuepress 的插件，它可以帮助你在编写文档的时候增加 Vue 示例，它的诞生初衷是为了降低编写组件文档时增加一些相关示例的难度。

使用 Vuepress 编写组件示例有以下不足之处：
  * 1.组件示例和示例代码本质上一样，却需要写两遍。
  * 2.Vuepress 无法渲染 Markdown 中的 script 和 style 代码块。

vuepress-plugin-demoblock-plus 参考了 [Element UI](https://github.com/element-plus/element-plus) 的文档渲染，实现了和它一样的，可在 Markdown 中直接编写示例的语法。

[查看Demo](https://xinlei3166.github.io/vuepress-demo/)



## 安装

```bash
npm install -D vuepress-plugin-demoblock-plus
yarn add -D vuepress-plugin-demoblock-plus
```



## 用法

.vuepress/config.js文件中使用插件

```js
plugins: [
	['vuepress-plugin-demoblock-plus']
]
```



markdown 中的vue代码包含的style内容，会被组合成一个style统一处理，如果需要使用css预处理器，需要提前指定并且手动安装使用的css预处理器。

```js
plugins: [
  ['vuepress-plugin-demoblock-plus', {
    cssPreprocessor: 'less'
  }]
]
```



markdown 中的vue代码被编译为了 vue 函数组件，需要把 import 转换为 require，这里可附加一些其他的转换。

```js
plugins: [
  ['vuepress-plugin-demoblock-plus', {
    scriptImports: [
      { searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
        replaceValue: 'const { defineComponent: _defineComponent } = Vue'
      }
    ]
  }]
]
```



多语言支持(默认是中文)

```js
const locales = {
  '/': {
    'hide-text': 'Hide',
    'show-text': 'Expand',
    'copy-button-text': 'Copy',
    'copy-success-text': 'Copy success'
  },
   '/zh': {
    'hide-text': '隐藏代码',
    'show-text': '显示代码',
    'copy-button-text': '复制代码片段', 
    'copy-success-text': '复制成功'
  }
}

plugins: [
	['vuepress-plugin-demoblock-plus', { locales }]
]
```

