---
author:
  avatar: https://avatars.githubusercontent.com/u/48777072?v=4
  email: zpj80231@163.com
  name: zpj80231
  url: null
  username: zpj80231
bugs: https://github.com/zpj80231/vuepress-plugin-boxx/issues
category: plugin
date: '2020-04-12T01:24:46.995Z'
deprecated: false
description: Simplification of VuePress Custom Containers!
downloads: null
homepage: https://zpj80231.github.io/znote
keywords:
- vuepress-theme-reco
- boxx
- vuepress
license: MIT License
maintainers: null
name: vuepress-plugin-boxx
npm: https://www.npmjs.com/package/vuepress-plugin-boxx
publisher:
  avatar: null
  email: zpj80231@163.com
  name: null
  url: null
  username: zpj80231
repository: https://github.com/zpj80231/vuepress-plugin-boxx
score: 0.22321413487361563
stars: 5
unstable: true
version: 0.0.7
watchers: 5

---


# Boxx

## 序言

- 由于在引入默认的VuePress Custom Containers太过笨重了，故闲来无事对其做一层封装简化使用
- 推荐在线观看使用说明 --> [传送门](https://zpj80231.gitee.io/znote/views/frontend/vuepress-plugin-boxx.html)，这样展示效果更加友好
- 或者参考我的VuePress博客 --> [znote](https://zpj80231.gitee.io/znote/)

## 使用

- 引入：只需在你想要插入的地方加入 `<Boxx/>` 即可（如上）
- 内容：默认随机展示名人名句，支持自定义
- 样式：有三种样式，默认为 tip 样式，支持自定义

## 自定义标题和内容

- 如果默认的名人名句不满足需求的话，自定义只需指定两个属性`title`和`content`的值

| Name    | Type   | Description             |
| ------- | ------ | ----------------------- |
| title   | String | 要展示的`title`的内容   |
| content | String | 要展示的`content`的内容 |

## 自定义样式

- 指定三个属性值实现

| Name         | Type   | Description           |
| :----------- | ------ | --------------------- |
| blockStyle   | Object | 整体块元素的样式      |
| titleStyle   | Object | 只针对`title`的样式   |
| contentStyle | Object | 只针对`content`的样式 |
| changeTime | Number | 以毫秒值为单位的动态变化时间，顶部为例 |

需要注意的是：属性值传输的对象只能通过`v-bind:`绑定来实现

