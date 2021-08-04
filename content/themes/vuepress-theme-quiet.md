---
author:
  avatar: https://avatars.githubusercontent.com/u/1589433?v=4
  email: null
  name: FrankFan
  url: null
  username: FrankFan
bugs: https://github.com/FrankFan/vuepress-theme-quiet/issues
category: theme
date: '2021-08-02T11:19:34.190Z'
deprecated: false
description: a vuepress blog theme, makes you feel quiet
downloads: null
homepage: https://github.com/FrankFan/vuepress-theme-quiet
keywords:
- vuepress
- blog
- theme
- quiet
license: false
maintainers: null
name: vuepress-theme-quiet
npm: https://www.npmjs.com/package/vuepress-theme-quiet
publisher:
  avatar: null
  email: fanyong@gmail.com
  name: null
  url: null
  username: fanyong
repository: https://github.com/FrankFan/vuepress-theme-quiet
score: 0.5080582859355769
stars: 0
unstable: true
version: 0.1.4
watchers: 0

---

# vuepress-theme-quiet

[![NPM](https://nodei.co/npm/vuepress-theme-quiet.png)](https://npmjs.org/package/vuepress-theme-quiet)

a vuepress blog theme, makes you feel quiet.

## preview

[https://vuepress-theme-quiet.surge.sh/]

## Install

```bash
$ npm install -D vuepress-theme-quiet
OR yarn add vuepress-theme-quiet
```

## Usage

```js
{
  // use theme
  theme: 'vuepress-theme-quiet',

  // config theme
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tag', link: '/tag' },
      { text: 'Archive', link: '/archives' },
      { text: 'About', link: '/about' },
      {
        text: '🔥 Github',
        link: 'https://github.com/FrankFan/vuepress-theme-quiet',
      },
    ],
    copyright: `© vuepress-theme-quiet ${new Date().getFullYear()} ❤️🧡💚💛💜💙`,
    additionalPages: [
      {
        path: '/about/',
        filePath: path.resolve(__dirname, '../about/README.md'),
        frontmatter: {
          layout: 'Post',
        },
      },
    ],
  },
}
```
