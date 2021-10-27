---
author:
  avatar: https://avatars.githubusercontent.com/u/46474644?v=4
  email: null
  name: shiguanghai
  url: null
  username: shiguanghai
bugs: https://github.com/shiguanghai/vuepress-plugin-core-video-player/issues
category: plugin
date: '2021-02-02T08:05:11.953Z'
deprecated: false
description: A Lightweight Video Player For VuePress.
downloads: null
homepage: https://github.com/shiguanghai/vuepress-plugin-core-video-player#readme
keywords:
- vuepress
- plugin
- video
license: false
maintainers: null
name: vuepress-plugin-core-video-player
npm: https://www.npmjs.com/package/vuepress-plugin-core-video-player
publisher:
  avatar: null
  email: 1932275668@qq.com
  name: null
  url: null
  username: shiguanghai
repository: https://github.com/shiguanghai/vuepress-plugin-core-video-player
score: 0.5102332050429297
stars: 2
unstable: false
version: 1.1.0
watchers: 2

---

# vuepress-plugin-core-video-player

![logo](https://img1.wxzxzj.com/logo-white-mini.png)

**A Lightweight Video Player For VuePress.**

[View Demo](https://shiguanghai.top/blogs/other/coreplayer.html)

## Install

```shell
npm install -D vuepress-plugin-core-video-player
# OR yarn add -D vuepress-plugin-core-video-player
```

## Use

1). `config.js`
```js
module.exports = {
  plugins: [
    'vuepress-plugin-core-video-player',
    {
      lang: 'zh-CN', // zh-CN/en/jp/other language json
    }
  ]
}
```

2). `*.md`, [click here](https://core-player.github.io/vue-core-video-player/zh/) for more configuration of core video player.

```js
<corevideoplayer
  src="https://media.vued.vanthink.cn/sparkle_your_name_am720p.webm" 
  cover="https://img1.wxzxzj.com/vpc-example-cover-your-name-c.png"
  logo="https://img1.wxzxzj.com/logo-white-mini.png"
  preload="metadata"
  title="vuepress-plugin-core-video-player"
  controls="auto"
  :autoplay=true
  :muted=false
  :loop=true>
</corevideoplayer>

# Or

<corevideoplayer src="https://media.vued.vanthink.cn/sparkle_your_name_am720p.webm">
</corevideoplayer>
```

ps: src is required