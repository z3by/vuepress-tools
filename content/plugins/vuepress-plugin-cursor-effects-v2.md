---
author:
  avatar: https://avatars.githubusercontent.com/u/28993145?v=4
  email: null
  name: tianyake
  url: null
  username: licc12
bugs: https://github.com/licc12/vuepress-plugin-cursor-effects-v2/issues
category: plugins
date: '2022-05-05T03:50:50.939Z'
deprecated: false
description: Add a cute click effect to your mouse in your vuepress!
downloads: null
homepage: https://github.com/licc12/vuepress-plugin-cursor-effects-v2#readme
keywords:
- vuepress
- vuepress v2.0.0+
- plugin
- cursor
- effects
license: MIT License
maintainers: null
name: vuepress-plugin-cursor-effects-v2
npm: https://www.npmjs.com/package/vuepress-plugin-cursor-effects-v2
publisher:
  avatar: null
  email: 2808057133@qq.com
  name: null
  url: null
  username: tianyake
repository: https://github.com/licc12/vuepress-plugin-cursor-effects-v2
score: 0.48931436264547473
stars: 0
unstable: false
version: 1.0.1
watchers: 0

---

# vuepress-plugin-cursor-effects-v2 <GitHubLink repo="moefyit/vuepress-plugin-cursor-effects-v2"/>

:tada: Add a cute click effect to your mouse in your vuepress!

<p align="center">
   <a href="https://www.npmjs.com/package/vuepress-plugin-cursor-effects-v2" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-cursor-effects-v2.svg"></a>
   <a href="https://github.com/moefyit/vuepress-plugin-cursor-effects-v2/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/moefyit/vuepress-plugin-cursor-effects-v2"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-cursor-effects-v2" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dt/vuepress-plugin-cursor-effects-v2.svg"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-cursor-effects-v2" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dm/vuepress-plugin-cursor-effects-v2.svg"></a>
   <a href="https://github.com/moefyit/vuepress-plugin-cursor-effects-v2/blob/main/LICENSE" target="_blank"><img alt="GitHub license" src="https://img.shields.io/github/license/moefyit/vuepress-plugin-cursor-effects-v2"></a>
</p>

-  Document: [moefy-vuepress](https://moefyit.github.io/moefy-vuepress/)
-  Live demo: [notev](https://nyakku.moe/)

> Want to use it outside of VuePress? Try [moefy-canvas](https://github.com/moefyit/moefy-canvas)!

## Dependencies vuepress version

vuepress version >=v2.0.0

## Install

```bash
yarn add vuepress-plugin-cursor-effects-v2 -D
# or use npm
npm i vuepress-plugin-cursor-effects-v2 -D
```

## Usage

```javascript
module.exports = {
   plugins: ['cursor-effects-v2'],
}
```

## Options

```js
module.exports = {
   plugins: [
      [
         'cursor-effects-v2',
         {
            size: 2, // size of the particle, default: 2
            shape: ['star' | 'circle'], // shape of the particle, default: 'star'
            zIndex: 999999999, // z-index property of the canvas, default: 999999999
         },
      ],
   ],
}
```

## Thanks

-  [hexo-theme-sagiri](https://github.com/DIYgod/diygod.me/blob/master/themes/sagiri/src/cursor-effects.js)
-  [vuepress-plugin-cursor-effects](https://github.com/moefyit/vuepress-plugin-cursor-effects)
