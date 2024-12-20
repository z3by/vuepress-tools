---
author:
  avatar: https://private-avatars.githubusercontent.com/u/32100575?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU1NjAsIm5iZiI6MTczNDY1NDM2MCwicGF0aCI6Ii91LzMyMTAwNTc1In0.ZnWtnluGet-yjEyJHbcgzfdiJjSNhFTue3yj3MgHZzw&v=4
  email: shuaxinjs@qq.com
  name: SHUAXINDIARY
  url: https://blog.shuaxindiary.cn/
  username: SHUAXINDIARY
bugs: https://github.com/SHUAXINDIARY/vuepress-theme-stella/issues
category: themes
date: '2022-03-25T08:12:31.318Z'
deprecated: false
description: null
downloads: null
homepage: https://stella.shuaxinjs.cn/
keywords:
- vue
- vuepress
- theme
- stella
- vuepress-theme-stella
license: MIT License
maintainers: null
name: vuepress-theme-stella
npm: https://www.npmjs.com/package/vuepress-theme-stella
publisher:
  avatar: null
  email: 986384495@qq.com
  name: null
  url: null
  username: shuaxin
repository: https://github.com/SHUAXINDIARY/vuepress-theme-stella
score: 0.597553674245862
stars: 11
unstable: false
version: 1.0.10
watchers: 11

---

# Introduction
- Hi there ! Stella is a Gatsby Theme, design by [jctaoo](https://github.com/jctaoo), But now if you are vuepress2.x users, now you can use **Stella** too!
- English | [Chinese](./README_CN.md)
# Overview
![](./stella_cover.png)

# Usage

## install

```shell
mkdir stella-demo

yarn init -y # or npm init -y

yarn add vuepress

yarn add vuepress-theme-stella
```

## write blog
All blog files should be in the **post** directory

## add About Page
Create a directory called **about** , Then add a file called README.md

## category

```md
---
title: MD样式测试
category:
    - 技术
tag:
    - MarkDown
---
```

## themeConfig
```ts
interface ICommon {
  label: string;
  link: string;
}

type Ifooter = ICommon;
type Icons = ICommon;
type Icates = ICommon;

interface ThemeConfig extends VupressSiteConfig {
  shiki?: HighlighterOptions;
  footer?: string | Ifooter;
  cates?: Icates[];
  icons?: Icons[];
}
```

## [more config click here](https://stella.shuaxinjs.cn/about/)


<!-- # Feature -->

# TODO
- [x] config other link
- [x] follow system mode （dark/light）
- [x] markdown style of stella
- [x] passage filter by category 、tag
- [ ] config default page ON-OFF
- [x] comment system
- [x] mobile adaptation
- [ ] pagination
- [ ] post banner img
- [ ] site search
- [ ] friend link
- [ ] clipboard-plugin
- [ ] comment-plugin
- [X] code snippets

# License
[![License: MIT](https://img.shields.io/badge/License-0BSD-yellow.svg)](https://opensource.org/licenses/0BSD)


[LICENSE](https://github.com/SHUAXINDIARY/vuepress-theme-stella/blob/main/LICENSE) file
