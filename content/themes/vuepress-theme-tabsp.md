---
author:
  avatar: https://avatars.githubusercontent.com/u/55568111?v=4
  email: tabsp@qq.com
  name: tabsp
  url: https://tabsp.com/
  username: tabsp
bugs: https://github.com/tabsp/vuepress-theme-tabsp/issues
category: theme
date: '2019-12-27T09:54:03.467Z'
deprecated: false
description: '![NPM](https://img.shields.io/npm/l/vuepress-theme-tabsp) ![npm](https://img.shields.io/npm/v/vuepress-theme-tabsp)'
downloads: null
homepage: https://github.com/tabsp/vuepress-theme-tabsp#readme
keywords: null
license: MIT License
maintainers: null
name: vuepress-theme-tabsp
npm: https://www.npmjs.com/package/vuepress-theme-tabsp
publisher:
  avatar: null
  email: tabsp@qq.com
  name: null
  url: null
  username: tabsp
repository: https://github.com/tabsp/vuepress-theme-tabsp
score: 0.3394083087918456
stars: 0
unstable: false
version: 1.0.1
watchers: 0

---

# Vuepress theme tabsp

![NPM](https://img.shields.io/npm/l/vuepress-theme-tabsp)
![npm](https://img.shields.io/npm/v/vuepress-theme-tabsp)

Vuepress 博客主题，预览地址 [https://tabsp.com](https://tabsp.com)

## 使用教程

Vuepress 文档参考 [https://vuepress.vuejs.org/zh/guide/](https://vuepress.vuejs.org/zh/guide/)

### 创建项目

```
# 创建博客文件夹
mkdir my-blog && cd my-blog

# 安装依赖
yarn add -D vuepress # 或者：npm install -D vuepress
yarn add vuepress-theme-tabsp # 或者：npm install -S vuepress-theme-tabsp

# 创建 README.md
echo '# Hello VuePress!' > README.md
```

### 配置项目

```
# 创建项目配置文件
mkdir .vuepress && touch .vuepress/config.js
```
`.vuepress/config.js` 配置文件参考：

```
module.exports = {
  title: 'The Tabsp Blog',
  description: 'Just playing around',
  theme: 'vuepress-theme-tabsp',
  themeConfig: {
    nav: 
    [
      { text: 'Blog', link: '/' },
      { text: 'Tags', link: '/tags/' },
    ],
    // 文章目录 默认 '/posts'
    postDir: '/posts',
    permalink: '/posts/:slug',
    footer: {
      gitHub: 'https://github.com/tabsp',
      // 响应国家政策
      beian: {
        show: true,
        number: '粤ICP备xxxx号'
      },
    },
    post: {
      // 链接到文章源码
      srcDir: 'https://github.com/tabsp/tabsp.github.io/blob/src/posts/',
      // 提交 ISSUE
      newIssue: 'https://github.com/tabsp/tabsp.github.io/issues/new'
    },
  },
}
```
### 创建文章

```
# 创建文章目录
mkdir posts && touch posts/我的第一篇博客.md
```

`posts/我的第一篇博客.md` 文件内容

```
---
title: 我的第一篇博客
date: 2019-12-27 16:58
tags:
  - hello
  - vuepress
---
# 我的第一篇博客

这是我的第一篇博客
```

### 预览

`npx vuepress dev .`

## TODO

- 分页功能
- 标签功能
- TOC
- ...