---
author:
  avatar: https://avatars.githubusercontent.com/u/54167020?v=4
  email: zsw0407@outlook.com
  name: zsw
  url: null
  username: smallsunnyfox
bugs: https://github.com/vuepress-reco/vuepress-plugin-bgm-player/issues
category: plugin
date: '2021-09-09T11:14:00.254Z'
deprecated: false
description: bgm player plugin for vuepress themes
downloads: null
homepage: https://vuepress-theme-reco.recoluan.com/views/plugins/bgmPlayer.html
keywords:
- vuepress-theme-reco
- bgm player
- vuepress
- music player
license: MIT License
maintainers: null
name: '@vuepress-reco/vuepress-plugin-bgm-player'
npm: https://www.npmjs.com/package/%40vuepress-reco%2Fvuepress-plugin-bgm-player
publisher:
  avatar: null
  email: zsw0407@outlook.com
  name: null
  url: null
  username: smallsunnyfox
repository: https://github.com/vuepress-reco/vuepress-plugin-bgm-player
score: 0.3517779162457918
stars: 15
unstable: false
version: 1.1.4
watchers: 15

---

# @vuepress-reco/vuepress-plugin-bgm-player

![demo.png](./images/demo.png)

## Details

> Bgm player plugin for vuepress-theme-reco or other vuepress theme.  
> Vuepress 音乐播放器插件

|使用位置|值|
|-|-|
|plugin name|@vuepress-reco/vuepress-plugin-bgm-player|
|component name|BgMusic（自动出现在页面中，无需添加额外代码）|

## Options

> 以下为插件注入时的参数。

### Attributes

|参数|说明|类型|默认值|可选值|
|-|-|-|-|-|
|audios|播放列表|Array|无|-|
|position|播放器位置|Object|{ left: '10px', bottom: '10px', 'z-index': '999999'}|-|
|autoplay|是否自动播放|Boolean|false|true/false|
|autoShrink|是否自动缩小|Boolean|false|true/false|
|shrinkMode|指定PC端缩小为哪种模式|String|'float'|'mini'/'float'|
|floatPosition|指定浮窗模式浮动在哪一侧|String|'left'|'left'/'right'|
|floatStyle|浮窗的样式|Object|{ bottom: '200px', 'z-index': '999999' }|-|


### audios示例

- audios为播放列表的对象数组
- 无默认值必须配置
- 示例
  ```
  audios: [
    // 本地文件示例
    {
      name: '장가갈 수 있을까',
      artist: '咖啡少年',
      url: '/bgm/1.mp3',
      cover: '/bgm/1.jpg'
    },
    // 网络文件示例
    {
      name: '강남역 4번 출구',
      artist: 'Plastic / Fallin` Dild',
      url: 'https://assets.smallsunnyfox.com/music/2.mp3',
      cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
    },
    {
      name: '用胳膊当枕头',
      artist: '최낙타',
      url: 'https://assets.smallsunnyfox.com/music/3.mp3',
      cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
    }
  ]  
  ```
### shrinkMode说明

- PC端可以通过shrinkMode来指定正常模式缩小时缩小为哪种模式
- 移动端默认缩小为浮窗模式

## About

- **兼容性**：vuepress-plugin-bgm-player是使用HTML5的Audio开发，故兼容性与Audio的兼容性相关
- 对于 `vuepress-theme-reco` 的 `dark` 模式的适配  
  ![dark.png](./images/dark.png)
- **开发计划**
  - 移动端适配问题修复
