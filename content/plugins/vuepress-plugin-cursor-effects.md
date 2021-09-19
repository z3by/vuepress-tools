---
author:
  avatar: https://avatars.githubusercontent.com/u/65664118?v=4
  email: null
  name: SigureMo
  url: null
  username: moefyit
bugs: https://github.com/moefyit/vuepress-plugin-cursor-effects/issues
category: plugin
date: '2021-02-14T18:42:50.948Z'
deprecated: false
description: Add a cute click effect to your mouse in your vuepress!
downloads: null
homepage: https://github.com/moefyit/vuepress-plugin-cursor-effects#readme
keywords:
- vuepress
- plugin
- cursor
- effects
license: MIT License
maintainers: null
name: vuepress-plugin-cursor-effects
npm: https://www.npmjs.com/package/vuepress-plugin-cursor-effects
publisher:
  avatar: null
  email: sigure.qaq@gmail.com
  name: null
  url: null
  username: sigure_mo
repository: https://github.com/moefyit/vuepress-plugin-cursor-effects
score: 0.555084574620558
stars: 15
unstable: false
version: 1.0.2
watchers: 15

---

# vuepress-plugin-cursor-effects <GitHubLink repo="moefyit/vuepress-plugin-cursor-effects"/>

:tada: Add a cute click effect to your mouse in your vuepress!

<p align="center">
   <a href="https://www.npmjs.com/package/vuepress-plugin-cursor-effects" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-cursor-effects.svg"></a>
   <a href="https://github.com/moefyit/vuepress-plugin-cursor-effects/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/moefyit/vuepress-plugin-cursor-effects"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-cursor-effects" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dt/vuepress-plugin-cursor-effects.svg"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-cursor-effects" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dm/vuepress-plugin-cursor-effects.svg"></a>
   <a href="https://github.com/moefyit/vuepress-plugin-cursor-effects/blob/master/LICENSE" target="_blank"><img alt="GitHub license" src="https://img.shields.io/github/license/moefyit/vuepress-plugin-cursor-effects"></a>
</p>

-  Document: [moefy-vuepress](https://moefyit.github.io/moefy-vuepress/)
-  LiveDemo: [notev](https://www.sigure.xyz/)

## Install

```bash
yarn add vuepress-plugin-cursor-effects -D
# or use npm
npm i vuepress-plugin-cursor-effects -D
```

## Usage

```javascript
module.exports = {
   plugins: ['cursor-effects'],
}
```

## Options

```js
module.exports = {
   plugins: [
      [
         'cursor-effects',
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
