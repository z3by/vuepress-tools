---
author:
  avatar: https://avatars.githubusercontent.com/u/31888710?v=4
  email: null
  name: "\u524D\u7AEF\u6709\u9053"
  url: null
  username: qqlcx5
bugs: https://github.com/qqlcx5/vuepress-plugin-musicplayer/issues
category: plugin
date: '2021-07-11T07:27:24.240Z'
deprecated: false
description: plugin for vuepress music player
downloads: null
homepage: https://github.com/qqlcx5
keywords:
- "\u97F3\u4E50"
- music
- vuepress
- "\u97F3\u4E50\u64AD\u653E\u5668"
- musicplayer
license: MIT License
maintainers: null
name: vuepress-plugin-musicplayer
npm: https://www.npmjs.com/package/vuepress-plugin-musicplayer
publisher:
  avatar: null
  email: 893917884@qq.com
  name: null
  url: null
  username: qqlcx5
repository: https://github.com/qqlcx5/vuepress-plugin-musicplayer
score: 0.5094149580572718
stars: 0
unstable: false
version: 1.2.3
watchers: 0

---

# vuepress-plugin-musicplayer

## Introduce

musicplayer plugin for vuepress theme.

是一款基于网易云API和`zw-player`播放器，对一部分样式和功能作调整，如果后续API失效没有及时调整可以自己传入API地址。

## How to use

1. install `npm i vuepress-plugin-musicplayer -S`

2. add in `config.js`

```js
module.exports = {
  
  plugins: [
    ['vuepress-plugin-musicplayer', {
      showAllRank: true, // 默认 false
      baseUrl: 'https://netease-cloud-music-api-qqlcx5.vercel.app/', // 默认
    }],
  ]
}
```
-  `showAllRank` 展示所有排名歌单，默认 `false`
-  `baseUrl` 网易云API

## Tip

- This plugin supports `vuepress 1.x`

## contact

**微信**

![wechat](https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@v1.0.0/image/wechat.jpeg)

**前端有道公众号**

![wechat](https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@v1.0.0/image/public.jpg)
