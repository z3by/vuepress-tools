---
author:
  avatar: https://avatars.githubusercontent.com/u/17216317?v=4
  email: 16viko@gmail.com
  name: viko16
  url: null
  username: g-plane
bugs: https://github.com/g-plane/vuepress-theme-simple-blog/issues
category: theme
date: '2020-09-03T07:52:29.648Z'
deprecated: false
description: Forked from vuepress-theme-simple, but provides better support for @vuepress/plugin-blog.
downloads: null
homepage: https://github.com/g-plane/vuepress-theme-simple-blog#readme
keywords:
- vuepress
license: MIT License
maintainers: null
name: vuepress-theme-simple-blog
npm: https://www.npmjs.com/package/vuepress-theme-simple-blog
publisher:
  avatar: null
  email: g-plane@hotmail.com
  name: null
  url: null
  username: gplane
repository: https://github.com/g-plane/vuepress-theme-simple-blog
score: 0.47662980727293075
stars: 2
unstable: true
version: 0.5.1
watchers: 2

---

# vuepress-theme-simple-blog

🔥 Demo: [https://blog.gplane.win/](https://blog.gplane.win/)

## 📘 Introduction

This is a VuePress theme which is forked from [vuepress-theme-simple](https://github.com/viko16/vuepress-theme-simple), but this fork provides better support for [@vuepress/plugin-blog](https://github.com/ulivz/vuepress-plugin-blog).

## 💿 Installation

Using npm:

```
$ npm i -D vuepress-theme-simple-blog
```

Using Yarn:

```
$ yarn add --dev vuepress-theme-simple-blog
```

Then, edit your `.vuepress/config.js`:

```js
module.exports = {
  theme: 'simple-blog',
}
```

It's recommended to install [@vuepress/plugin-blog](https://github.com/ulivz/vuepress-plugin-blog).

## 🔧 Configuration

```js
module.exports = {
  theme: 'simple-blog',
  themeConfig: {
    author: 'your name', // This will be displayed at header and footer.
    navbar: { // This will be displayed at header.
      'link text': 'link url',
      // can be more...
    },
    copyrightText: '',  // Empty by default. This text will be displayed at footer.
    year: '2019', // Current year by default. This text will be displayed at footer.
    noticeOf404: '返回首页', // This is default value. This will be displayed at 404 page.
    disqus: 'shortname', // If it's empty, disqus will be disabled. If you want to enable, just provide your "shortname" of Disqus.
  },
}
```

## ✨ Differences with vuepress-theme-simple

- Better support for [@vuepress/plugin-blog](https://github.com/ulivz/vuepress-plugin-blog).
- Support tags.
- Support pagination for posts list.
- Improved 404 page, and it's customizable.
- Customizable footer text.
- Navigation bar supports VueRouter's `<router-link>` component.
- Out-of-the-box Disqus support.

## 📃 License

MIT License

2019-present (c) originally by [viko16](https://github.com/viko16), forked and modified by [Pig Fang](https://github.com/g-plane).
