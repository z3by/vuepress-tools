---
author:
  avatar: https://avatars.githubusercontent.com/u/22275933?v=4
  email: 1075433743@qq.com
  name: maginapp
  url: null
  username: maginapp
bugs: https://github.com/maginapp/vuepress-plugin-copy-code/issues
category: plugin
date: '2021-06-21T09:47:13.406Z'
deprecated: false
description: vuepress-plugin-copy-code
downloads: null
homepage: https://github.com/maginapp/vuepress-plugin-copy-code#readme
keywords:
- vuepress
- copy
- copyCode
license: false
maintainers: null
name: '@maginapp/vuepress-plugin-copy-code'
npm: https://www.npmjs.com/package/%40maginapp%2Fvuepress-plugin-copy-code
publisher:
  avatar: null
  email: 1075433743@qq.com
  name: null
  url: null
  username: maginapp
repository: https://github.com/maginapp/vuepress-plugin-copy-code
score: 0.5096113791923842
stars: 0
unstable: false
version: 1.0.0
watchers: 0

---

# vuepress-plugin-copy-code

A Vuepress plugin for copy code

## Installation

```shell
yarn add -D @maginapp/vuepress-plugin-copy-code
# or
npm install -D @maginapp/vuepress-plugin-copy-code
```

## Usage

### config

`.vuepress/config.js`

```js
module.exports = {
    // ...
  plugins: [
    ["@maginapp/vuepress-plugin-code-copy", {
      selector: String,
      color: String,
      backgroundTransition: Boolean,
      backgroundColor: String,
      successText: String,
      duration: Number,
      iconVisible: Boolean,
      showInMobile: Boolean,
      align: Object,
    }]
  ]
}
```

## Options

### selector

*  Type: `String | Array`
*  Default: `['div[class*="language-"] pre', 'div[class*="aside-code"] aside']`

The css selector of the area where the copy function is to be added

待复制区域选择器

### color

*  Type: `String`
*  Default: `#0094ff`

Copy icon color

复制图标/文案颜色

### backgroundTransition

*  Type: `Boolean`
*  Default: `true`

Whether to show dynamic effects

是否展示背景动效

### backgroundColor

*  Type: `String`
*  Default: `#196794`

Dynamic background color, [hex code](https://htmlcolorcodes.com/)

背景动效颜色

### successText

*  Type: `String`
*  Default: `Copy successfully!`

The copy displayed when the copy is successful

复制成功文案

### duration

*  Type: `number`
*  Default: `1000`

Success status display time

复制成功提示时间

### iconVisible

*  Type: `Boolean`
*  Default: `false`

Copy icon is visible when hovered/clicked or always visible

图标始终展示或hovered/clicked时展示

### showInMobile

*  Type: `Boolean`
*  Default: `true`

Whether to display on the mobile

移动端是否展示复制功能

### align

*  Type: `Object`
*  Default: `{ bottom: '7px', right: '7px' }`
*  Supported options: `top` `bottom` `right` `left` `dir`

  * `dir`: `row` `column` `column-reverse` `column-reverse`

This copy icon position

配置复制按钮位置

## Records

* v1.0.0 init

## License

[MIT](https://github.com/maginapp/vuepress-plugin-copy-code)
