---
author:
  avatar: https://avatars.githubusercontent.com/u/55730911?v=4
  email: null
  name: ifuture
  url: null
  username: ifuture-pro
bugs: https://github.com/ifuture-pro/vuepress-plugin-rss/issues
category: plugin
date: '2019-11-11T03:54:58.882Z'
deprecated: false
description: atom rss podcast
downloads: null
homepage: https://github.com/ifuture-pro/vuepress-plugin-rss#readme
keywords:
- atom
- rss
- podcast
- itunes
license: false
maintainers: null
name: '@ifuture/vuepress-plugin-rss'
npm: https://www.npmjs.com/package/%40ifuture%2Fvuepress-plugin-rss
publisher:
  avatar: null
  email: strongrobot@163.com
  name: null
  url: null
  username: ifuture
repository: https://github.com/ifuture-pro/vuepress-plugin-rss
score: 0.18746353264159202
stars: 3
unstable: false
version: 1.0.2
watchers: 3

---

vuepress-plugin-rss
-----------

The feed for vuepress

Support Atom; RSS2; Itunes podcast. 

Install

```bash
npm install @ifuture/vuepress-plugin-rss --save-dev
```
or
```bash
yarn add @ifuture/vuepress-plugin-rss -D
```

.vuepress/config.js

```js
module.exports = {
  "plugins": [
      ['@ifuture/vuepress-plugin-rss', {
        type:['atom','rss2','podcast'],
        limit: 20,
        feedOptions : {
          title: 'site title',
          description: 'description',
          site_url: 'https://note.ifuture.pro',
          image_url: 'https://note.ifuture.pro/head.png',
          author: 'author',
          managingEditor: 'author',
          webMaster: 'author',
          copyright: 'author',
          language: 'en'
        }
      }]
    ]
}
```