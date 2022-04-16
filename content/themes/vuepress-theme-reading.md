---
author:
  avatar: https://avatars.githubusercontent.com/u/82562407?v=4
  email: Okarin1024@gmail.com
  name: Okarin1
  url: null
  username: Okarin1
bugs: https://github.com/Okarin1/vuepress-theme-reading/issues
category: themes
date: '2022-04-15T15:46:24.297Z'
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
score: 0.5163856820602916
stars: 0
unstable: false
version: 1.1.0
watchers: 0

---


# vuepress-theme-reading

[![npm](https://img.shields.io/npm/v/vuepress-theme-reading)](https://www.npmjs.com/package/vuepress-theme-reading)
[![NPM](https://img.shields.io/npm/l/vuepress-theme-reading)](https://github.com/okarin1/vuepress-theme-reading/blob/master/LICENSE)


>A clean and minimalist theme for Vuepress !

![preview](https://s2.loli.net/2022/04/15/853HCKESbQc4euV.png)

## Write in front

This is a purely for reading theme, does not support code highlighting, in addition the font is preset `cursive`, you can try to [preview Demo](https://reading.okarin.cn) [(Source)](https://github.com/okarin1/reading-project) first before deciding whether to use this theme.


## Installation

```shell
 $ npm install vuepress-theme-reading --save
 or
 $ yarn add vuepress-theme-reading --dev
```


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

Please provide a `title` at `.md` files that will be displayed on the front page, as well as in the article header,
the `data` will determine the order in which articles are laid out on the front page,and the `author` will be displayed under the title.



```
---
title: This is Title
date: 2022-02-22
author: Okarin
---

## H2

Here is the text, if you have to read what I wrote,
congratulations on wasting a precious minute of your life.

```

