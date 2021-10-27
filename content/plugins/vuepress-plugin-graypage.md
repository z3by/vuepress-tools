---
author:
  avatar: https://avatars.githubusercontent.com/u/25240064?v=4
  email: 2434387555@qq.com
  name: JoeyBling
  url: https://zhousiwei.gitee.io
  username: zhousiwei
bugs: https://github.com/JoeyBling/vuepress-plugin-graypage/issues
category: plugin
date: '2020-09-29T09:32:46.422Z'
deprecated: false
description: "VuePress\u54C0\u60BC\u65E5\u7F51\u7AD9\u53D8\u7070. | Mourning website\
  \ turns gray plugin for VuePress."
downloads: null
homepage: https://github.com/JoeyBling/vuepress-plugin-graypage
keywords:
- vue
- vuepress
- vuepress-plugin
- gray
- graypage
- mourn
- "\u7070\u8272"
- "\u54C0\u60BC\u65E5"
- yilia-plus
license: MIT License
maintainers: null
name: vuepress-plugin-graypage
npm: https://www.npmjs.com/package/vuepress-plugin-graypage
publisher:
  avatar: null
  email: 2434387555@qq.com
  name: null
  url: null
  username: zhousiwei
repository: https://github.com/JoeyBling/vuepress-plugin-graypage
score: 0.4587662923454321
stars: 2
unstable: true
version: 0.1.2
watchers: 2

---

# vuepress-plugin-graypage

[![](https://nodei.co/npm/vuepress-plugin-graypage.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/vuepress-plugin-graypage)

[![npm package](https://img.shields.io/npm/v/vuepress-plugin-graypage.svg?label=vuepress-plugin-graypage)](https://www.npmjs.com/package/vuepress-plugin-graypage)
[![downloads-total](https://img.shields.io/npm/dt/vuepress-plugin-graypage.svg)](https://www.npmjs.com/package/vuepress-plugin-graypage)
[![downloads-month](https://img.shields.io/npm/dm/vuepress-plugin-graypage.svg)](https://www.npmjs.com/package/vuepress-plugin-graypage)
![star](https://img.shields.io/github/stars/JoeyBling/vuepress-plugin-graypage "star")
![fork](https://img.shields.io/github/forks/JoeyBling/vuepress-plugin-graypage "fork")
![GitHub Last Commit](https://img.shields.io/github/last-commit/JoeyBling/vuepress-plugin-graypage.svg?label=commits "GitHub Last Commit")
![issues](https://img.shields.io/github/issues/JoeyBling/vuepress-plugin-graypage "issues")
[![Author](https://img.shields.io/badge/Author-JoeyBling-red.svg "Author")](https://zhousiwei.gitee.io "Author")
[![VuePress Version](https://img.shields.io/badge/VuePress-%3E%3D%201.0.0-blue.svg)](https://v1.vuepress.vuejs.org/zh/)
[![vuepress-theme-yilia-plus](https://img.shields.io/badge/Theme-Yilia_Plus-red.svg "vuepress-theme-yilia-plus")](https://github.com/JoeyBling/vuepress-theme-yilia-plus)
[![博客搭建交流群](https://img.shields.io/badge/QQ群-422625065-red.svg "博客搭建交流群")](https://jq.qq.com/?_wv=1027&k=58Ypj9z "博客搭建交流群")

------------------

> **欢迎使用和Star支持，如使用过程中碰到问题，可以提出 [Issues](https://github.com/JoeyBling/vuepress-plugin-graypage/issues)，我会尽力完善**

## 介绍
&#160;&#160;&#160;&#160;**VuePress哀悼日网站变灰. | Mourning website turns gray plugin for VuePress.**

> 此插件根据开源插件**[vuepress-plugin-graysite](https://github.com/zpfz/vuepress-plugin-graysite)**更改调整，加入了一些自定义参数配置.

- 功能还很少，欢迎各位给我提意见和建议~

## 线上预览

> **预览 ➡️ [https://zhousiwei.gitee.io/ibooks](https://zhousiwei.gitee.io/ibooks)**

## 推荐一款VuePress主题
> **一款简洁优雅的VuePress主题 ➡️ [https://github.com/JoeyBling/vuepress-theme-yilia-plus](https://github.com/JoeyBling/vuepress-theme-yilia-plus)**

## 效果截图

![截图](./examples/images/web_mini.png)

## 安装

```bash
yarn add vuepress-plugin-graypage
# or
npm install vuepress-plugin-graypage --save
```

------------

## 开始使用

### 引入该插件

在配置文件中引入 `vuepress-plugin-graypage`

> 查看 [官方文档](https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html)。

```javascript
module.exports = {
  plugins: [
    'vuepress-plugin-graypage',
  ],
}
```

### 插件配置

```javascript
module.exports = {
  plugins: [
    [
      'vuepress-plugin-graypage', {
        // 是否开启控制台日志打印(default: false)
        log: true,
        // 月+日(哀悼日生效日期)
        mournDay: ['4-4'],
        // 年+月+日(哀悼日生效日期)
        date: ['2020-8-27'],
        // 特殊的日期(例如：清明节等...建议使用默认即可)
        special: ['qinMing']
      }
    ]
  ]
}
```

## 捐赠
&#160;&#160;&#160;&#160;**如果感觉对您有帮助，请作者喝杯咖啡吧，请注明您的名字或者昵称，方便作者感谢o(*￣︶￣*)o**

| 微信 | 支付宝 |
| :---: | :---: |
| ![](./examples/images/weixin.png) | ![](./examples/images/alipay.jpeg) |

## LICENSE

[![LICENSE](https://img.shields.io/github/license/JoeyBling/vuepress-plugin-graypage "LICENSE")](./LICENSE "LICENSE")