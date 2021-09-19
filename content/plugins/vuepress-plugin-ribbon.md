---
author:
  avatar: https://avatars.githubusercontent.com/u/65664118?v=4
  email: null
  name: SigureMo
  url: null
  username: moefyit
bugs: https://github.com/moefyit/vuepress-plugin-ribbon/issues
category: plugin
date: '2021-02-14T13:11:08.650Z'
deprecated: false
description: Add a beautiful ribbon to your vuepress!
downloads: null
homepage: https://github.com/moefyit/vuepress-plugin-ribbon#readme
keywords:
- vuepress
- plugin
- ribbon
license: MIT License
maintainers: null
name: vuepress-plugin-ribbon
npm: https://www.npmjs.com/package/vuepress-plugin-ribbon
publisher:
  avatar: null
  email: sigure.qaq@gmail.com
  name: null
  url: null
  username: sigure_mo
repository: https://github.com/moefyit/vuepress-plugin-ribbon
score: 0.5533560020032136
stars: 14
unstable: false
version: 1.0.4
watchers: 14

---

# vuepress-plugin-ribbon <GitHubLink repo="moefyit/vuepress-plugin-ribbon"/>

:reminder_ribbon: Add a beautiful ribbon to your vuepress!

<p align="center">
   <a href="https://www.npmjs.com/package/vuepress-plugin-ribbon" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-ribbon.svg"></a>
   <a href="https://github.com/moefyit/vuepress-plugin-ribbon/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/moefyit/vuepress-plugin-ribbon"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-ribbon" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dt/vuepress-plugin-ribbon.svg"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-ribbon" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dm/vuepress-plugin-ribbon.svg"></a>
   <a href="https://github.com/moefyit/vuepress-plugin-ribbon/blob/master/LICENSE" target="_blank"><img alt="GitHub license" src="https://img.shields.io/github/license/moefyit/vuepress-plugin-ribbon"></a>
</p>

-  Document: [moefy-vuepress](https://moefyit.github.io/moefy-vuepress/)
-  LiveDemo: [notev](https://www.sigure.xyz/)

## Install

```bash
yarn add vuepress-plugin-ribbon -D
# or use npm
npm i vuepress-plugin-ribbon -D
```

## Usage

```javascript
module.exports = {
   plugins: ['ribbon'],
}
```

## Options

```js
module.exports = {
   plugins: [
      [
         'ribbon',
         {
            size: 90, // width of the ribbon, default: 90
            opacity: 0.8, // opacity of the ribbon, default: 0.3
            zIndex: -1, // z-index property of the background, default: -1
         },
      ],
   ],
}
```

## Thanks

-  [vuepress-plugin-nest](https://github.com/vxhly/vuepress-plugin-nest)
-  [canvas-nest.js](https://github.com/hustcc/canvas-nest.js)
-  [ribbon.js](https://github.com/hustcc/ribbon.js)
