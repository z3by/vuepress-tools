---
author:
  avatar: https://avatars.githubusercontent.com/u/20726419?v=4
  email: null
  name: null
  url: null
  username: sogud
bugs: https://github.com/sogud/vuepress-theme-minimalism/issues
category: theme
date: '2020-05-22T09:40:58.823Z'
deprecated: false
description: theme for vuepress
downloads: null
homepage: https://github.com/sogud/vuepress-theme-minimalism#readme
keywords:
- vue
- vuepress
- theme
- hexo
- blog
- markdown
license: MIT License
maintainers: null
name: vuepress-theme-minimalism
npm: https://www.npmjs.com/package/vuepress-theme-minimalism
publisher:
  avatar: null
  email: lwwtotod@gmail.com
  name: null
  url: null
  username: 1net
repository: https://github.com/sogud/vuepress-theme-minimalism
score: 0.27184591971555966
stars: 19
unstable: false
version: 1.1.3
watchers: 19

---

# vuepress-theme-minimalism
[中文](https://github.com/onnezezt/vuepress-theme-minimalism/blob/master/Zh.md)

![NPM](https://img.shields.io/npm/l/vuepress-theme-minimalism) 
<a href="https://www.npmjs.com/package/vuepress-theme-minimalism"> <img src="https://img.shields.io/npm/v/vuepress-theme-minimalism" alt=""></a>
<a href="https://www.npmjs.com/package/vuepress-theme-minimalism"> <img src="https://img.shields.io/npm/dt/vuepress-theme-minimalism" alt=""></a>

## introduction

A minimalist vuepress theme, compatible with hexo YAML front matter syntax.

preview：https://1net.world

## Quick Start

#### install

```
npm i -S vuepress-theme-minimalism
or
yarn add vuepress-theme-minimalism
```

- Use theme in config.js.

```js
module.exports = {
  theme: 'vuepress-theme-minimalism',
  base: '/',
  ...
}
```

- new _posts folder, article written in _posts directory, as the topic is compiled based on the content under the _posts folder. Note: Folder names are case-sensitive.

#### Directory Structure

```
.
├── docs
│   ├── .vuepress #vuepress configuration folder
│   ├── _posts #Article Storage Folder
├── package.json
└── yarn.lock
```

#### write

Start writing a blog that is written in the correct format as follows.：

```markdown
---
title: vuepress
tags:
  - vuepress
  - markdown
---

# vuepress-theme-minimalism

##  introduction

A minimalist vuepress theme, compatible with hexo YAML front matter syntax.
```

## Theme configuration

#### Theme color configuration

New styles folder in .vuepress directory, new palette.styl Configure css variables.

The following color configurations are currently supported.

``` stylus
$accentColor = #31837c 
$textColor = #2c3e50 
$nprogressColor = #399c9c 
```

#### config.js configuration

```js
module.exports = {
  // theme: 'vuepress-theme-minimalism',
  base: '/',
  title: '记录',
  description: 'description...',
  themeConfig: {
    headerText: {
      //deader text
      index: 'ホーム',
      all: '一覧',
      tags: 'カテゴリー',
      timeline: 'タイムライン',
      seacrh: '探す'
    },
    //footer text
    footerText:
      '©2020 Power by <a href="https://vuepress.vuejs.org">VuePress</a> <a href="https://github.com/onnezezt/vuepress-theme-minimalism">Theme minimalism</a>',
    homeBackground: {
      //Home Background Color
      //Set home page background color, false title is the default color
      show: true,
      fileName: '/xxx.jpg' // Background image name, stored in the public directory
    },
    PostsListPopover: false, //Whether to display the article content prompt

    darkMode: {
      //dark mode configuration
      switch: true, 
      auto: true, //automatic start
      on: '18', //Time.
      off: '6'
    },
    vssue: {
      //评论组件
      use: false,
      option: {
        owner: 'onnezezt',
        repo: 'onnezezt.github.io',
        clientId: 'xxxx',
        clientSecret: 'xxxx' // It is only necessary to use certain platforms
      }
    }，
    disqus: {
      //use disqus reviews.
      use: false,
      option: {
        name: 'xxx' // Replace PAGE_URL with your page's canonical URL variable
      }
    }
  },
  markdown: {
    lineNumbers: true
  }
}
```
