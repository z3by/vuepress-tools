---
author:
  avatar: https://avatars.githubusercontent.com/u/7794717?v=4
  email: github@heimbu.ch
  name: Alexander Heimbuch
  url: null
  username: alexander-heimbuch
bugs: https://github.com/alexander-heimbuch/vuepress-theme-casper/issues
category: theme
date: '2020-04-12T11:02:00.609Z'
deprecated: false
description: Ghosts Casper Theme for VuePress
downloads: null
homepage: https://github.com/alexander-heimbuch/vuepress-theme-casper#readme
keywords: null
license: false
maintainers: null
name: vuepress-theme-casper
npm: https://www.npmjs.com/package/vuepress-theme-casper
publisher:
  avatar: null
  email: npm@heimbu.ch
  name: null
  url: null
  username: alexander-heimbuch
repository: https://github.com/alexander-heimbuch/vuepress-theme-casper
score: 0.29950350363665923
stars: 99
unstable: false
version: 3.0.1
watchers: 99

---

# Casper Theme

Ghosts default theme [Casper](https://github.com/TryGhost/Casper) for Vuepress.

## Create with Stackbit

[![Create with Stackbit](https://assets.stackbit.com/badge/create-with-stackbit.svg)](https://app.stackbit.com/create?theme=https://github.com/alexander-heimbuch/vuepress-theme-casper)

## Installation

Install the npm package:

```bash
$ npm i vuepress-theme-casper --save
```

Adapt your vuepress config `config.js`:

```js
module.exports = {
  title: "Theme Title",
  description: "Theme description",
  base: "/",
  theme: "casper",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  },
  themeConfig: {
    cover: "/images/cover.jpg",
    logo: "/images/logo.png",
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Posts",
        link: "/posts"
      },
      {
        text: "Category",
        link: "/category/some-category"
      },
      {
        text: "Page",
        link: "/a-page.html"
      }
    ],

    footer: [
      {
        text: "Latest Posts",
        link: "/posts"
      },
      {
        text: "Facebook",
        link: "https://facebook.com/"
      },
      {
        text: "Twitter",
        link: "https://twitter.com"
      },
      {
        text: "Github",
        link: "https://github.com/"
      }
    ],
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      xing: "https://xing.de",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    },
    defaultAuthor: {
      link: "https://alexander.heimbu.ch",
      name: "Default Author",
      gravatar: "2bfa103a13c88b5ffd26da6f982f11df"
    },
    search: false
  }
};
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
  - dexter
readingTime: 10 Minutes
author:
  link: /category/dexter
  name: Dexter
  gravatar: 2bfa103a13c88b5ffd26da6f982f11df
---
```

The post intro uses the `<!-- more -->` tag.

## Caveats
