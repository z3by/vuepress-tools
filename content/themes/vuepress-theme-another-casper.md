---
author:
  avatar: https://private-avatars.githubusercontent.com/u/16911353?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU1MDAsIm5iZiI6MTczNDY1NDMwMCwicGF0aCI6Ii91LzE2OTExMzUzIn0.93L4Ixxhtkzsd3iOyA0S1Hw66mFc_siK-yxh0Tvb4Uk&v=4
  email: null
  name: Shcant
  url: null
  username: shcant
bugs: https://github.com/shcant/vuepress-theme-casper/issues
category: themes
date: '2019-06-12T14:23:31.678Z'
deprecated: false
description: Another Ghosts Casper Theme for VuePress
downloads: null
homepage: https://github.com/shcant/vuepress-theme-casper#readme
keywords: null
license: false
maintainers: null
name: vuepress-theme-another-casper
npm: https://www.npmjs.com/package/vuepress-theme-another-casper
publisher:
  avatar: null
  email: shuhao.yin@Outlook.com
  name: null
  url: null
  username: shcant
repository: https://github.com/shcant/vuepress-theme-casper
score: 0.1494100262025594
stars: 1
unstable: true
version: 0.1.0
watchers: 1

---

# Casper Theme

Ghosts default theme [Casper](https://github.com/TryGhost/Casper) for Vuepress.

## Installation

Install the npm package:

```bash
$ npm i vuepress-theme-casper --save
# or
$ yarn add vuepress-theme-casper
```

Adapt your vuepress config `config.js`:

```js
module.exports = {
  title: 'Theme Title',
  description: 'Theme description',
  base: '/',
  theme: 'casper',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  },
  themeConfig: {
    cover: 'cover.jpg',
    logo: '/logo.png',
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'Posts',
      link: '/posts'
    }, {
      text: 'Category',
      link: '/category/some-category'
    }, {
      text: 'Page',
      link: '/a-page.html'
    }],

    footer: [{
      text: 'Latest Posts',
      link: '/posts'
    }, {
      text: 'Facebook',
      link: 'https://facebook.com/'
    }, {
      text: 'Twitter',
      link: 'https://twitter.com'
    }, {
      text: 'Github',
      link: 'https://github.com/'
    }],
    social: {
      github: 'https://github.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      xing: 'https://xing.de',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  }
}
```

## Page/Post Parameters

The following parameters are available:

```
---
title: And when we woke up, we had these bodies.
image: https://picsum.photos/1920/1080/?random&date=2018-04-15
publish: 2018-04-15
type: post|page
tags:
  - toe-tappingly tragic
  - thanks to the Internet
categories:
  - futurama
readingTime: 10 Minutes
---
```

The post intro uses the `<!-- more -->` tag.

## Caveats

* For simplicity this theme doesn't support multiple authors
