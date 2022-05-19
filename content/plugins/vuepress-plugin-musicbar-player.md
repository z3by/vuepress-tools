---
author:
  avatar: https://avatars.githubusercontent.com/u/87564791?v=4
  email: 2863389578@qq.com
  name: Simonzhangs
  url: null
  username: simonzhangs
bugs: https://github.com/simonzhangs/vuepress-plugin-music-player/issues
category: plugins
date: '2022-04-04T15:25:16.168Z'
deprecated: false
description: A music-player plugin for vuepress
downloads: null
homepage: https://github.com/simonzhangs/vuepress-plugin-music-player#readme
keywords:
- vue
- vuepress
- plugin
- music
- music-bar
- "\u63D2\u4EF6"
- "vuepress\u63D2\u4EF6"
- "\u97F3\u4E50"
- bgm
- player
license: MIT License
maintainers: null
name: vuepress-plugin-musicbar-player
npm: https://www.npmjs.com/package/vuepress-plugin-musicbar-player
publisher:
  avatar: null
  email: 2863389578@qq.com
  name: null
  url: null
  username: simonzhangs
repository: https://github.com/simonzhangs/vuepress-plugin-music-player
score: 0.5243459170624334
stars: 0
unstable: false
version: 1.0.4
watchers: 0

---

# vuepress-plugin-music-bar

![](img/music-bar-0.png)

[README](./README.md) | [CHANGELOG](./CHANGELOG.md)

> 一个 vuepress 的音乐组件
>
> A music-bar plugin for vuepress

### Live Demos

- https://b-tree.studio

## Description

好康的音乐组件

Beautiful music components

如果您觉得不太好康的话欢迎 fork, 大佬们点个星星救我狗命鸭

welcome everyone's star and fork

### Features

- 好康，轻量 Beautiful and lightweight
- 除本地，网络音频之外还支持从平台歌单获取链接（目前仅支持网易云音乐） In addition to local and network audio, it also supports obtaining links from the platform playlist (currently only NetEase cloud music is supported)
- 自动加载并缓存 Load and cache automatically
- 加载超时自动跳过 Load timeout automatically skips
- 移动端适配 Mobile terminal adaptation
- 多种格式支持 Multiple format support
- 自动检测开发环境，输出 log, 方便调试 Automatically detect development environment and output log for easy debugging

### 默认收起到左边 Default stow to left

![](https://raw.githubusercontent.com/moecopilot/B-Tree.studio/master/docs/.vuepress/plugin/vuepress-plugin-music-bar/img/music-bar-1.png)

### 鼠标移入展开 Move in mouse to expand

![](https://raw.githubusercontent.com/moecopilot/B-Tree.studio/master/docs/.vuepress/plugin/vuepress-plugin-music-bar/img/music-bar-2.png)

### 阴影进度条（可拖动） Shadow progress bar(can drag)

![](https://raw.githubusercontent.com/moecopilot/B-Tree.studio/master/docs/.vuepress/plugin/vuepress-plugin-music-bar/img/music-bar-3.png)

### 调试模式（仅在开发环境下输出 log, 可关闭） Debug mode (only output log in development environment, can be closed)

![](https://raw.githubusercontent.com/moecopilot/B-Tree.studio/master/docs/.vuepress/plugin/vuepress-plugin-music-bar/img/music-bar-4.png)

![](https://raw.githubusercontent.com/moecopilot/B-Tree.studio/master/docs/.vuepress/plugin/vuepress-plugin-music-bar/img/music-bar-5.png)

## Quick Start

- Install with npm:

  `npm install vuepress-plugin-music-bar`

- Install with Yarn:

  `yarn add vuepress-plugin-music-bar`

## Add to .vuepress/config.js

```js
module.exports = {
  plugins: [
    //...
    [
      "music-bar",
      {
        playList: [],
        platform: [
          {
            name: "music.163.com",
            playListIDs: ["4909779787"]
          }
        ]
      }
    ]
    //...
  ]
};
```

### All settings and explanations

```js
//.vuepress/config.js
module.exports = {
  plugins: [
    [
      "music-bar",
      {
        //手动添加歌曲,支持 URLs 或 base64 data URIs ,默认为空
        //Add songs manually, support URLs or base64 data URIs, empty by default
        playList: ["example.mp3"],

        platform: [
          //目前仅支持网易云 TODO:多平台支持,默认为空数组
          //Currently only supports Netease Cloud Music,
          //the default is an empty array TODO: Multi-platform support,
          {
            name: "music.163.com",
            songIDs:[]//支持多个歌曲 ID  //Support multiple song IDs
            playListIDs: ["4909779787"] //支持多个歌单 ID  //Support multiple playlist IDs
          }
        ],

        timeOut: 2000, //加载超时,单位毫秒,默认2000  //Load timeout in milliseconds, default 2000

        firstClickPlay: true //首次点击自动播放,对移动端友好  //The first click autoplay, mobile friendly

        //debugMode: <Boolean> Development mode, if in the dev environment,
        //                     output log to console, enabled by default

        //background: <String> //主容器样式  //Main container style
        //                       default: "linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)"

        //frameColor: <String> default: $accentColor
      }
    ]
  ]
};
```

enjoy:)

SVG from https://feathericons.com/

API from https://api.imjad.cn/cloudmusic.md
