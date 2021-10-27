---
author:
  avatar: https://avatars.githubusercontent.com/u/2812163?v=4
  email: null
  name: SangND
  url: null
  username: tomieric
bugs: https://github.com/tomieric/vuepress-plugin-rss/issues
category: plugin
date: '2018-12-19T13:52:52.101Z'
deprecated: false
description: '> RSS Plugin for Vuepress'
downloads: null
homepage: https://github.com/tomieric/vuepress-plugin-rss#readme
keywords: null
license: false
maintainers: null
name: '@tomieric/vuepress-plugin-rss'
npm: https://www.npmjs.com/package/%40tomieric%2Fvuepress-plugin-rss
publisher:
  avatar: null
  email: tomieric@gmail.com
  name: null
  url: null
  username: tomieric
repository: https://github.com/tomieric/vuepress-plugin-rss
score: 0.3223762117916592
stars: 0
unstable: false
version: 1.0.8
watchers: 0

---

# Vuepress Plugin RSS

> RSS Plugin for Vuepress

## Install

```
> yarn add @tomieric/vuepress-plugin-rss@next -D
# or
> npm i @tomieric/vuepress-plugin-rss@next -D
```

Has been merged into [vuepress-plugin-rss](https://github.com/youngtailors/vuepress-plugin-rss)

## Config for your site

* Update your `.vuepress/config.js`
``` js
module.exports = {
    ...
    plugins: [
      ['@tomieric/vuepress-plugin-rss',
        {
          // base_url: '/', // required
          site_url: 'https://coralo.io', // required
          copyright: '2018 Coralo', // optional
          // filter some post
          filter: (frontmatter) => { return [true|false] },
          // How much articles
          count: 20
        }
      ]
    ]
}
```

## Contributors

- Core Plugin - [dacsang97](https://github.com/dacsang97)
- Support Vuepress 1.0 - [tomieric](https://github.com/tomieric)

---

License MIT