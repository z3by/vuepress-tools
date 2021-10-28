---
author:
  avatar: https://avatars.githubusercontent.com/u/22881872?v=4
  email: null
  name: "\u541B\u60DC"
  url: null
  username: xinlei3166
bugs: https://github.com/xinlei3166/vuepress-plugin-demoblock-plus/issues
category: plugin
date: '2021-10-27T09:13:12.980Z'
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
score: 0.5268227164175973
stars: 4
unstable: false
version: 1.3.0
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
    scriptImports: ["import * as ElementPlus from 'element-plus'"],
    scriptReplaces: [
      { searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
        replaceValue: 'const { defineComponent: _defineComponent } = Vue'
      },
      { searchValue: /import ({.*}) from 'element-plus'/g,
        replaceValue: (s, s1) => `const ${s1} = ElementPlus`
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


## 使用第三方组件库

这个插件主要是针对自己的组件库来使用的，第三方的组件库直接导入使用即可(例如element-plus)。

在 .vuepress/clientAppEnhance.js 文件中加入以下代码：
```js
import { defineClientAppEnhance } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default defineClientAppEnhance(({
  app,
  router,
  siteData,
}) => {
  app.use(ElementPlus)
})
```

使用的时候，不用导入element组件，直接使用即可：
```vue
<template>
  <div class="card-wrap">
    <div class="card">{{ title }}</div>
    <el-button type="primary" @click="onClick">点击</el-button>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'

const title = ref('vuepress-plugin-demoblock-plus')

const instance = getCurrentInstance()

const onClick = () => {
  instance.appContext.config.globalProperties.$message.success('消息')
}
</script>
```


