---
author:
  avatar: https://avatars.githubusercontent.com/u/65664118?v=4
  email: null
  name: SigureMo
  url: null
  username: moefyit
bugs: https://github.com/moefyit/vuepress-plugin-dynamic-title/issues
category: plugins
date: '2020-05-21T20:44:15.486Z'
deprecated: false
description: Add a dynamic title in your vuepress!
downloads: null
homepage: https://github.com/moefyit/vuepress-plugin-dynamic-title#readme
keywords:
- vuepress
- plugin
- title
license: MIT License
maintainers: null
name: vuepress-plugin-dynamic-title
npm: https://www.npmjs.com/package/vuepress-plugin-dynamic-title
publisher:
  avatar: null
  email: sigure_mo@163.com
  name: null
  url: null
  username: sigure_mo
repository: https://github.com/moefyit/vuepress-plugin-dynamic-title
score: 0.5029123131038203
stars: 9
unstable: false
version: 1.0.0
watchers: 9

---

# vuepress-plugin-dynamic-title <GitHubLink repo="moefyit/vuepress-plugin-dynamic-title"/>

:eyes: Add a dynamic title in your vuepress!

<p align="center">
   <a href="https://www.npmjs.com/package/vuepress-plugin-dynamic-title" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-dynamic-title.svg?style=flat-square"></a>
   <a href="https://github.com/moefyit/vuepress-plugin-dynamic-title/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/moefyit/vuepress-plugin-dynamic-title?style=flat-square"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-dynamic-title" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dt/vuepress-plugin-dynamic-title.svg?style=flat-square"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-dynamic-title" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dm/vuepress-plugin-dynamic-title.svg?style=flat-square"></a>
   <a href="https://github.com/moefyit/vuepress-plugin-dynamic-title/blob/main/LICENSE" target="_blank"><img alt="GitHub license" src="https://img.shields.io/github/license/moefyit/vuepress-plugin-dynamic-title?style=flat-square"></a>
</p>

- Document: [moefy-vuepress](https://moefyit.github.io/moefy-vuepress/)
- Live demo: [notev](https://nyakku.moe/)

## Install

```bash
yarn add vuepress-plugin-dynamic-title -D
# or use npm
npm i vuepress-plugin-dynamic-title -D
```

## Usage

```javascript
module.exports = {
   plugins: ['dynamic-title'],
}
```

## Options

```js
module.exports = {
   plugins: [
      [
         'dynamic-title',
         {
            showIcon: '/favicon.ico',
            showText: '(/≧▽≦/)咦！又好了！',
            hideIcon: '/failure.ico',
            hideText: '(●—●)喔哟，崩溃啦！',
            recoverTime: 2000,
         },
      ],
   ],
}
```

## Thanks

- [hexo-theme-sagiri](https://github.com/DIYgod/diygod.me/blob/master/themes/sagiri/src/title.js)
