---
author:
  avatar: https://avatars.githubusercontent.com/u/10876646?v=4
  email: null
  name: null
  url: null
  username: h69
bugs: null
category: theme
date: '2020-12-25T09:26:11.977Z'
deprecated: false
description: VuePress theme.
downloads: null
homepage: https://github.com/h69/vuepress-theme-x#readme
keywords:
- vuepress
- theme
- vuepress-theme
- x
- blog
license: MIT License
maintainers: null
name: vuepress-theme-x
npm: https://www.npmjs.com/package/vuepress-theme-x
publisher:
  avatar: null
  email: adamearth@qq.com
  name: null
  url: null
  username: adamearth
repository: https://github.com/h69/vuepress-theme-x
score: 0.4804599998414804
stars: 0
unstable: false
version: 1.3.0
watchers: 0

---

# vuepress-theme-x

VuePress theme.

[Preview](https://h69.github.io)

[![npm package](https://nodei.co/npm/vuepress-theme-x.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/vuepress-theme-x)

## Installing

```
npm install vuepress-theme-x
```

## Usage

```JavaScript
// config.js
module.exports = {
  theme: 'x'
}
```

## Examples

```
.
└── docs
    ├── .vuepress
    |   └── config.js
    ├── Tag 1
    |   └── Document 1
    |       └── README.md
    ├── Tag 2
    |   └── Document 2
    |       └── README.md
    ├── Tag 3
    |   └── Document 3
    |       └── README.md
    └── README.md
```

```JavaScript
// config.js
module.exports = {
  title: 'x',
  theme: 'x',
  themeConfig: {
    editLinkText: 'Edit',
    editLinks: true,
    repo: 'username/repo',
    search: true,
    searchMaxSuggestions: -1,
    nav: [
      {
        text: 'github',
        link: 'https://github.com',
      },
    ],
    sidebar: {
      '/': [
        {
          title: 'Tag 1',
          children: [
            '/Tag 1/Document 1/',
          ],
        },
        {
          title: 'Tag 2',
          children: [
            '/Tag 2/Document 2/',
          ],
        },
        {
          title: 'Tag 3',
          children: [
            '/Tag 3/Document 3/',
          ],
        },
      ],
    },
  },
}
```

![](./vuepress-theme-x.png)
