---
author:
  avatar: https://avatars.githubusercontent.com/u/82562407?v=4
  email: Okarin1024@gmail.com
  name: Okarin1
  url: null
  username: Okarin1
bugs: https://github.com/Okarin1/vuepress-theme-reading/issues
category: themes
date: '2022-04-27T15:28:27.955Z'
deprecated: false
description: Pure Reading Theme for Vuepress
downloads: null
homepage: https://github.com/Okarin1/vuepress-theme-reading#readme
keywords: null
license: MIT License
maintainers: null
name: vuepress-theme-reading
npm: https://www.npmjs.com/package/vuepress-theme-reading
publisher:
  avatar: null
  email: okarin1024@gmail.com
  name: null
  url: null
  username: okarin1
repository: https://github.com/Okarin1/vuepress-theme-reading
score: 0.5214922608267047
stars: 15
unstable: false
version: 1.2.1
watchers: 15

---


# vuepress-theme-reading

[![npm](https://img.shields.io/npm/v/vuepress-theme-reading)](https://www.npmjs.com/package/vuepress-theme-reading)
[![NPM](https://img.shields.io/npm/l/vuepress-theme-reading)](https://github.com/okarin1/vuepress-theme-reading/blob/master/LICENSE)

## 简介

>一款干净极简的 vuepress 主题 !

![preview](https://s2.loli.net/2023/02/07/vrNPOnGLlUhSqY6.png)
Demo： [预览 Demo](https://reading.okarin.cn)

## 



## 使用主题

**注意：当前文件仅为主题的相关代码** ，如果你如果你想使用 reading 主题，可以参考该模板页面进行配置 [(模板地址)](https://github.com/okarin1/reading-project) ，或者直接克隆模板。



## 主题配置

在 `.vuepress/config.js` 之中进行基本的配置 

```js
module.exports = {
    title: 'The Title', // 将会作为标题展示
    description: 'Your own description', // 将会在标题下面展示描述
    theme: 'reading',
    themeConfig: {
      author:'Your Name',// 页脚
      authorLink: 'https://xxx.com', //点击你的名字的跳转链接
      sortMethod:'date'//排序方式（category/date）
    }
  }
```

## MarkDown

- 标题 (需要)
- 日期 (可选)
- 作者 (可选)
- 分类 (可选)

请在`.md`文件中提供一个 `title` 标题，它将显示在首页，以及文章标题中。

日期 `date`将决定文章在首页的排列顺序

作者 `author` 将显示在标题下,

分类 `category` 在首页可以将文章按分类排序。



```
---
title: 标题
date: 2022-02-22
author: Okarin
category: 测试
---

## H2

在这里进行写作

```


---


# vuepress-theme-reading

[![npm](https://img.shields.io/npm/v/vuepress-theme-reading)](https://www.npmjs.com/package/vuepress-theme-reading)
[![NPM](https://img.shields.io/npm/l/vuepress-theme-reading)](https://github.com/okarin1/vuepress-theme-reading/blob/master/LICENSE)


>A clean and minimalist theme for Vuepress !

![preview](https://s2.loli.net/2023/02/07/vrNPOnGLlUhSqY6.png)

Demo： [Preview Demo](https://reading.okarin.cn)

## Write in front

**Note: The current file is only the code related to the theme**, if you if you want to use this theme, you can refer to the template page for configuration[(emplate address)](https://github.com/okarin1/reading-project), or directly clone the template.


## Use Theme in Vuepress

If you want to create a new blog using reading. You can follow these steps after setting up the [Vuepress](https://www.vuepress.cn/) environments.

When you successfully run a vuepress docs, you should have template like this :
```
.
├── docs(you named this file)
│   ├── .vuepress 
│   │   │  
│   │   └──  config.js 
│   │   
│   └──  README.md
│
└── package.json
```

you can modify the theme on `.vuepress/config.js` 


```js
module.exports = {
  theme: 'reading',
}
```

## Theme Config

Some additional settings in `.vuepress/config.js` 

```js
module.exports = {
    title: 'The Title', // will display on the title
    description: 'Your own description', // will display under the title
    theme: 'reading',
    themeConfig: {
      author:'Your Name',// will display on the footer
      authorLink: 'https://xxx.com', //click your name to this site
      sortMethod:'date'//sort method
    }
  }
```


## About Post

All your `.md` files except `README.md` file will be displayed on the Home page. 

But to prevent errors, please **provide an empty `README.md` file.**

## MarkDown

- title (Required)
- date (Optional)
- author (Optional)
- category(Optional)

Please provide a `title` heading in the `.md` file, which will be displayed on the front page, as well as in the article title;

The date `date` will determine the order of the articles on the front page;

author `author` will be displayed under the title;

Category `category` will sort the articles by category on the front page.

```
---
title: This is Title
date: 2022-02-22
author: Okarin
category: test
---

## H2

Here is the text, if you have to read what I wrote,
congratulations on wasting a precious minute of your life.

```

