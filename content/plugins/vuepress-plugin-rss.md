---
author:
  avatar: https://avatars.githubusercontent.com/u/29174209?v=4
  email: null
  name: SangND
  url: null
  username: youngtailors
bugs: https://github.com/dacsang97/vuepress-plugin-rss/issues
category: plugin
date: '2018-12-18T07:27:56.463Z'
deprecated: false
description: '> RSS Plugin for Vuepress'
downloads: null
homepage: https://github.com/dacsang97/vuepress-plugin-rss#readme
keywords: null
license: false
maintainers: null
name: vuepress-plugin-rss
npm: https://www.npmjs.com/package/vuepress-plugin-rss
publisher:
  avatar: null
  email: dacsang97@gmail.com
  name: null
  url: null
  username: sangnd
repository: https://github.com/dacsang97/vuepress-plugin-rss
score: 0.2205821279324638
stars: 15
unstable: false
version: 2.0.0
watchers: 15

---

# Vuepress Plugin RSS

<a href="https://www.npmjs.com/package/vuepress-plugin-rss"><img src="https://img.shields.io/npm/v/vuepress-plugin-rss.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/vuepress-plugin-rss"><img src="https://img.shields.io/npm/l/vuepress-plugin-rss.svg" alt="License"></a>

> RSS Plugin for Vuepress

## Install

```
> yarn add vuepress-plugin-rss -D
# or
> npm i vuepress-plugin-rss -D
```

## Config for your site

- Update your `.vuepress/config.js`

```js
module.exports = {
    ...
    plugins: [
      [
        'vuepress-plugin-rss',
        {
          base_url: '/', // required
          site_url: 'https://procollab.com', // required
          copyright: '2018 Young Tailors', // optional
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
