---
author:
  avatar: https://avatars.githubusercontent.com/u/28993145?v=4
  email: null
  name: Nyakku Shigure
  url: null
  username: licc12
bugs: https://github.com/licc12/vuepress-plugin-dynamic-title-v2/issues
category: plugins
date: '2022-05-08T06:05:23.926Z'
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
score: 0.49224134515003937
stars: 1
unstable: false
version: 1.0.2
watchers: 1

---

# vuepress-plugin-dynamic-title-v2 <GitHubLink repo="moefyit/vuepress-plugin-dynamic-title-v2"/>

:eyes: Add a dynamic title in your vuepress!

<p align="center">
   <a href="https://www.npmjs.com/package/vuepress-plugin-dynamic-title-v2" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-dynamic-title-v2.svg"></a>
    <a href="https://github.com/licc12/vuepress-plugin-dynamic-title-v2/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/licc12/vuepress-plugin-dynamic-title-v2"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-dynamic-title-v2" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dt/vuepress-plugin-dynamic-title-v2.svg"></a>
    <a href="https://www.npmjs.com/package/vuepress-plugin-dynamic-title-v2" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dm/vuepress-plugin-dynamic-title-v2.svg"></a>
   <a href="https://github.com/licc12/vuepress-plugin-dynamic-title-v2/blob/main/LICENSE"><img alt="GitHub license" src="https://camo.githubusercontent.com/20e20fd59f11d3ae8c122e7dd277e524a97ca731ff34dbff7070918e9730ae39/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f6d6f65667969742f76756570726573732d706c7567696e2d64796e616d69632d7469746c65" data-canonical-src="https://img.shields.io/github/license/licc12/vuepress-plugin-dynamic-title-v2" style="max-width: 100%;"></a>
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
