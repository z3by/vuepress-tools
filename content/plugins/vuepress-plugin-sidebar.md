---
author:
  avatar: https://avatars.githubusercontent.com/u/2795323?v=4
  email: gray@tacck.net
  name: Kihara, Takuya
  url: https://www.tacck.net/
  username: tacck
bugs: https://github.com/tacck/vuepress-plugin-sidebar/issues
category: plugin
date: '2020-05-27T05:30:49.601Z'
deprecated: false
description: Generate sidebar menu for VuePress
downloads: null
homepage: https://github.com/tacck/vuepress-plugin-sidebar#readme
keywords:
- vuepress
- vuepress-plugin
- sidebar
license: MIT License
maintainers: null
name: vuepress-plugin-sidebar
npm: https://www.npmjs.com/package/vuepress-plugin-sidebar
publisher:
  avatar: null
  email: gray@tacck.net
  name: null
  url: null
  username: tacck
repository: https://github.com/tacck/vuepress-plugin-sidebar
score: 0.3497674096999545
stars: 5
unstable: true
version: 0.2.1
watchers: 5

---

# vuepress-plugin-sidebar

Sidebar-menu generator plugin for VuePress.

## Instration

```
$ npm install --save-dev vuepress-plugin-sidebar
# or
$ yarn add --dev vuepress-plugin-sidebar
```

## How to use

``` .vuepress/config.js
module.exports = {
  plugins: [
    ['sidebar']
  ]
}
```

### Options

#### Add static links after generated menu

``` .vuepress/config.js
module.exports = {
  plugins: [
    [
      'sidebar', {
        postItems: [
          ['https://www.tacck.net/', 'Tacck.NET']
        ]
      }
    ]
  ]
}
```

#### Grouping menu

``` .vuepress/config.js
module.exports = {
  plugins: [
    [
      'sidebar', {
        grouping: true,
        groupOptions: {
          collapsable: true,
          sidebarDepth: 2,
        },
      }
    ]
  ]
}
```

If you want to set group title, please set frontmatter `groupTitle` on each directories' README.md.

```
---
groupTitle: Group Title 01
---
```

Please see [example](https://github.com/tacck/vuepress-plugin-sidebar/tree/master/example/).

## License

[MIT License](./LICENSE)
