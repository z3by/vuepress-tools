---
author:
  avatar: https://avatars.githubusercontent.com/u/2796198?v=4
  email: m@ake.kr
  name: mAKEkr
  url: null
  username: makekr
bugs: https://github.com/mAKEkr/vuepress-theme-typewriter/issues
category: theme
date: '2020-09-30T19:47:42.834Z'
deprecated: false
description: A VuePress Blog Theme
downloads: null
homepage: https://github.com/mAKEkr/vuepress-theme-typewriter#readme
keywords: null
license: false
maintainers: null
name: vuepress-theme-typewriter
npm: https://www.npmjs.com/package/vuepress-theme-typewriter
publisher:
  avatar: null
  email: m@ake.kr
  name: null
  url: null
  username: makekr
repository: https://github.com/mAKEkr/vuepress-theme-typewriter
score: 0.40611422253491863
stars: 12
unstable: false
version: 1.0.1
watchers: 12

---

# Typewriter
Typewriter is Blog Theme based on VuePress.

support responsive design, comment service(utteranc.es)

[Demo](https://ake.kr/)

## Installation

``` bash
npm install vuepress-theme-typewriter --save # npm
yarn add vuepress-theme-typewriter # yarn
```

## Configuration

open your VuePress Project, go to `.vuepress/config.js` and add these lines read comments.
``` javascript
module.exports =
  themeConfig: {
    nav: [ // setting global header nav items
      {
        text: 'Blog', // display context on menu
        link: '/' // link
      }, // if want more, add like this
    ],
    copyright: 'Copyright 2019 Typewriter all rights reserved.', // write copyright on layour footer.
    github: 'mAKEkr', // if want add github icon, write username or repository id(example, mAKEkr or mAKEkr/vuepress-theme-typewriter)
    feed: true, // if your project publishing rss feed, this value set to true. add links on footer.
    comment: { // support utteranc.es comment service based on github issue. if this value(comment) dosen't exists, theme is considered unavailable for comment service.
      // support repo, issue-term and theme setting.
      'repo': 'mAKEkr/blog', 
      'issue-term': 'url'
    }
  }
}

```

## Changelog
[go to Release Page](https://github.com/mAKEkr/vuepress-theme-typewriter/releases)