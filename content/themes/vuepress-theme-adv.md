---
author:
  avatar: https://avatars.githubusercontent.com/u/997100?v=4
  email: null
  name: Vitor Carvalho
  url: null
  username: ovitor
bugs: https://github.com/vcml10/vuepress-theme-adv/issues
category: themes
date: '2019-01-12T20:20:36.444Z'
deprecated: false
description: Simple theme for VuePress
downloads: null
homepage: https://github.com/vcml10/vuepress-theme-adv#readme
keywords:
- static-site
- blog
- vue
- vuepress
license: MIT License
maintainers: null
name: vuepress-theme-adv
npm: https://www.npmjs.com/package/vuepress-theme-adv
publisher:
  avatar: null
  email: vitorcarvalhoml@gmail.com
  name: null
  url: null
  username: vcml10
repository: https://github.com/vcml10/vuepress-theme-adv
score: 0.2993886397764798
stars: 0
unstable: true
version: 0.0.1
watchers: 0

---

# vuepress-theme-adv

> Simple [VuePress](https://github.com/vuejs/vuepress) theme with blogging support.

| Screenshot                                              |
| ------------------------------------------------------- |
| ![Screenshot of Valle VuePress theme](./screenshot.png) |

## **Under development, not ready for use!**

This is a work in progress project to see the possible blogging capabilities of VuePress. A lot of stuff is still under development and is not ready to be used in production.

## Installing

* `yarn install vuepress-theme-valle` or `npm install vuepress-theme-valle --save`
* Inside your existing VuePress project, create (if not present) `config.js` inside `.vuepress` folder.
* Add `theme: 'valle'` to the config object.
* That's it! VuePress now uses Valle as its theme.

## Theme Config

Theme specific options in VuePress config.

```javascript
module.exports = {
  // The theme uses `title` and `description`
  title: 'My Blog',
  description: 'My vuesome blog',

  themeConfig: {
    // Author specific metadata. Used for homepage bio.
    author: {
      name: 'John Doe',
      social: {
        facebook: 'url',
        twitter: 'url',
        linkedin: 'url',
        instagram: 'url'
      }
    },
    // defaults to '/posts/' if postDir isn't provided.
    postDir: '/posts/'
  }
}
```

Project based in [vuepress theme from yliaho](https://github.com/yliaho/vuepress-theme-valle).
