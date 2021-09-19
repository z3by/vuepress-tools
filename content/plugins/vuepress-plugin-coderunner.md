---
author:
  avatar: https://avatars.githubusercontent.com/u/19297757?v=4
  email: 1098626505@qq.com
  name: zhangchaojie
  url: null
  username: dream2023
bugs: https://github.com/dream2023/vuepress-plugin-run/issues
category: plugin
date: '2020-04-15T14:10:14.589Z'
deprecated: false
description: "vuepress \u5728\u7EBF\u8FD0\u884C Vue \u5355\u6587\u4EF6"
downloads: null
homepage: https://github.com/dream2023/vuepress-plugin-run#readme
keywords:
- vuepress
- vuepress-sfc
- vuepress-demo
- vuepress-run
- vue run
- vue editor
- vuepress-plugin
- vuepress-run-sfc
license: false
maintainers: null
name: vuepress-plugin-coderunner
npm: https://www.npmjs.com/package/vuepress-plugin-coderunner
publisher:
  avatar: null
  email: xupengfei2010@gmail.com
  name: null
  url: null
  username: philxu
repository: https://github.com/dream2023/vuepress-plugin-run
score: 0.07646986127977523
stars: 26
unstable: false
version: 1.0.1
watchers: 26

---

# vuepress-plugin-run | vuepress 在线运行 Vue 单文件

`vuepress-plugin-run` 通过对 [vue-run-sfc](https://github.com/dream2023/vue-run-sfc) 的封装, 实现了 vuepress 在线运行 Vue 单文件的能力, 简直是写 DEMO 福音, 再也不用担心 `JSFiddle` 或 `Codepen` 无法访问了.

```html
::: run
```html
<template>
  <h2 class="title">{{name}} DEMO利器!</h2>
</template>
<script>
  export default {
    data () {
      return {
        name: 'vuepress-plugin-run'
      }
    }
  }
</script>
<style>
  .title {
    color: #3eaf7c;
  }
</style>
` ` `  <=== 删除这里的空格
:::
```

## 🍋 DEMO & DOC
[https://vuepress-plugin-run.netlify.com/](https://vuepress-plugin-run.netlify.com/)

## 🍎 安装

```bash
yarn add vuepress-plugin-run # npm install vuepress-plugin-run
```


## 🍐 使用

配置 [config.js](https://vuepress.vuejs.org/zh/plugin/using-a-plugin.html) 文件

```js
module.exports = {
    plugins: ['run'],
}
```

## 🍊 全局配置

全局配置可以通过修改 `config.js` 实现 `element-ui` demo 演示

```js
module.exports = {
    plugins: {
      run: {
        jsLabs: ['https://unpkg.com/element-ui/lib/index.js'],
        cssLabs: ['https://unpkg.com/element-ui/lib/theme-chalk/index.css'],
      }
    },
}
```

```html
::: run
```html
<template>
  <el-tabs type="border-card">
    <el-tab-pane label="用户管理">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
` ` ` <== 记得删除空格
:::
```

## 🍋 局部配置

```html
::: run {title: '局部配置', 'height': '200px', row: true}
```html
<template>
  <div>通过局部配置实现<b>高度自定义</b>和<b>左右布局</b></div>
</template>
<style>
b {
  color: #3eaf7c;
}
</style>
` ` ` <== 记得删除空格
:::
```

## 🍇 配置属性列表

具体属性请参考: [vue-run-sfc](https://github.com/dream2023/vue-run-sfc#props-%E5%B1%9E%E6%80%A7%E8%AF%B4%E6%98%8E)

```js
{
  /**
   * js 库
   * @example: ['https://unpkg.com/element-ui/lib/index.js']
   */
  jsLabs: Array,

  /**
   * css 库
   * @example: ['https://unpkg.com/element-ui/lib/theme-chalk/index.css']
   */
  cssLabs: Array,

  /**
   * js 字符串
   * @example: 'alert(1)'
   */
  js: [Array, String],

  /**
   * css 字符串
   * @example: 'body { color: red }'
   */
  css: [Array, String],

  /**
   * 代码编辑器和效果预览排列方式
   * 当为 false 时, 上下排列
   * 当为 true 时, 左右排列
   */
  row: {
    type: Boolean,
    default: undefined
  },

  /**
   * 当 `row` 为 true 时, 编辑区和展示区上下位置
   * 当为 false 时, 编辑器在下, 展示区在上
   * 当为 true 时, 编辑器在上, 展示区在下
   */
  reverse: Boolean,

  /**
   * 高度
   * @example: '400px'
   */
  height: String,

  /**
   * 初始加载是否打开编辑区
   * 当为 false 时, 默认是关闭编辑区
   * 当为 true 时, 默认是打开编辑区
   */
  open: Boolean,
  /**
   * 是否隐藏头部
   */
  isHideHeader: Boolean
}
```

## 相关链接

- [vuepress-plugin-demo-code](https://github.com/BuptStEve/vuepress-plugin-demo-code)
- [vuepress-plugin-demo-block](https://github.com/xiguaxigua/vuepress-plugin-demo-block)
- [codepen](codepen.io)
