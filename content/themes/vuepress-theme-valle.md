---
author:
  avatar: https://private-avatars.githubusercontent.com/u/4364402?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU0NDAsIm5iZiI6MTczNDY1NDI0MCwicGF0aCI6Ii91LzQzNjQ0MDIifQ.LEv3hR2LEJBG31JbuCJItCFmDZuThr-6I47-TIfqz8M&v=4
  email: null
  name: Joonas Yliaho
  url: null
  username: yliaho
bugs: https://github.com/yliaho/vuepress-theme-valle/issues
category: themes
date: '2018-05-14T09:38:49.683Z'
deprecated: false
description: Simple blog theme for VuePress
downloads: null
homepage: https://github.com/yliaho/vuepress-theme-valle#readme
keywords:
- static-site
- blog
- vue
- vuepress
license: MIT License
maintainers: null
name: vuepress-theme-valle
npm: https://www.npmjs.com/package/vuepress-theme-valle
publisher:
  avatar: null
  email: joonas.yliaho@gmail.com
  name: null
  url: null
  username: yliah
repository: https://github.com/yliaho/vuepress-theme-valle
score: 0.4326121079516428
stars: 26
unstable: true
version: 0.1.5
watchers: 26

---

# vuepress-theme-valle

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
