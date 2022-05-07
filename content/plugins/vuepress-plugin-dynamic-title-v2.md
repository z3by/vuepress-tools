---
author:
  avatar: https://avatars.githubusercontent.com/u/28993145?v=4
  email: null
  name: Nyakku Shigure
  url: null
  username: licc12
bugs: https://github.com/licc12/vuepress-plugin-dynamic-title-v2/issues
category: plugins
date: '2022-05-05T07:18:08.968Z'
deprecated: false
description: Add a dynamic title in your vuepress!
downloads: null
homepage: https://github.com/licc12/vuepress-plugin-dynamic-title-v2#readme
keywords:
- vuepress
- plugin
- title
license: MIT License
maintainers: null
name: vuepress-plugin-dynamic-title-v2
npm: https://www.npmjs.com/package/vuepress-plugin-dynamic-title-v2
publisher:
  avatar: null
  email: 2808057133@qq.com
  name: null
  url: null
  username: tianyake
repository: https://github.com/licc12/vuepress-plugin-dynamic-title-v2
score: 0.5513278521678859
stars: 1
unstable: false
version: 1.0.1
watchers: 1

---

# vuepress-plugin-dynamic-title-v2 <GitHubLink repo="moefyit/vuepress-plugin-dynamic-title-v2"/>

:eyes: Add a dynamic title in your vuepress!

<p align="center">
   <a href="https://www.npmjs.com/package/vuepress-plugin-dynamic-title-v2" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-dynamic-title-v2.svg"></a>
   <a href="https://github.com/moefyit/vuepress-plugin-dynamic-title-v2/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/moefyit/vuepress-plugin-dynamic-title-v2"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-dynamic-title-v2" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dt/vuepress-plugin-dynamic-title-v2.svg"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-dynamic-title-v2" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dm/vuepress-plugin-dynamic-title-v2.svg"></a>
   <a href="https://github.com/moefyit/vuepress-plugin-dynamic-title-v2/blob/main/LICENSE" target="_blank"><img alt="GitHub license" src="https://img.shields.io/github/license/moefyit/vuepress-plugin-dynamic-title-v2"></a>
</p>

-  Document: [moefy-vuepress](https://moefyit.github.io/moefy-vuepress/)
-  Live demo: [notev](https://nyakku.moe/)

## Dependencies vuepress version

vuepress version v2.0.0+

## Install

```bash
yarn add vuepress-plugin-dynamic-title-v2 -D
# or use npm
npm i vuepress-plugin-dynamic-title-v2 -D
```

## Usage

```javascript
module.exports = {
   plugins: ['dynamic-title-v2'],
}
```

## Options

```js
module.exports = {
   plugins: [
      [
         'dynamic-title-v2',
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

-  [hexo-theme-sagiri](https://github.com/DIYgod/diygod.me/blob/master/themes/sagiri/src/title.js)

-  [vuepress-plugin-dynamic-title](https://github.com/moefyit/vuepress-plugin-dynamic-title)
