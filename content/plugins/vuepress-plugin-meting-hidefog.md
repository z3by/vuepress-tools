---
author:
  avatar: https://avatars.githubusercontent.com/u/65664118?v=4
  email: null
  name: SigureMo
  url: null
  username: moefyit
bugs: https://github.com/moefyit/vuepress-plugin-meting/issues
category: plugin
date: '2021-06-10T14:04:52.122Z'
deprecated: false
description: backup
downloads: null
homepage: https://github.com/moefyit/vuepress-plugin-meting#readme
keywords:
- vuepress
- plugin
- meting
- aplayer
license: MIT License
maintainers: null
name: vuepress-plugin-meting-hidefog
npm: https://www.npmjs.com/package/vuepress-plugin-meting-hidefog
publisher:
  avatar: null
  email: 173012724@qq.com
  name: null
  url: null
  username: ww1724
repository: https://github.com/moefyit/vuepress-plugin-meting
score: 0.15768530855597596
stars: 24
unstable: true
version: 0.0.5
watchers: 24

---

# vuepress-plugin-meting <GitHubLink repo="moefyit/vuepress-plugin-meting"/>

:cake: A simple plugin connect APlayer, Meting and VuePress.

<p align="center">
   <a href="https://www.npmjs.com/package/vuepress-plugin-meting" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-meting.svg"></a>
   <a href="https://github.com/moefyit/vuepress-plugin-meting/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/moefyit/vuepress-plugin-meting"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-meting" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dt/vuepress-plugin-meting.svg"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-meting" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dm/vuepress-plugin-meting.svg"></a>
   <a href="https://github.com/moefyit/vuepress-plugin-meting/blob/master/LICENSE" target="_blank"><img alt="GitHub license" src="https://img.shields.io/github/license/moefyit/vuepress-plugin-meting"></a>
</p>

-  Document: [moefy-vuepress](https://moefyit.github.io/moefy-vuepress/)
-  LiveDemo: [notev](https://nyakku.moe/)

<Meting server="netease"
        type="playlist"
        mid="6838211960"
        :lrc-type="3"/>

## Install

```bash
yarn add vuepress-plugin-meting -D
# or use npm
npm i vuepress-plugin-meting -D
```

## Usage

```javascript
module.exports = {
   plugins: [
      'meting',
      {
         metingApi,
         meting,
         aplayer,
         mobile,
      },
   ],
}
```

使用该插件后将自动注册 `<Meting/>` 组件与 `<APlayer/>` 组件，你可以在任意位置使用它们

-  `<Meting/>` 组件支持 `meting` Options 和 `aplayer` Options，其中 `aplayer` 的 `audio` 选项将自动通过 metingApi 获取，如果想要额外添加 `audio` 的话，可以通过 `additionalAudios` 选项实现
-  `<APlayer/>` 组件支持 `aplayer` Options，当然，你需要自行提供 `audio` 音乐源

`config.js` 中的 `meting` 选项、`aplayer` 选项和 `mobile` 选项是全局 UI 组件的配置项，当 `meting` 选项被配置后，将自动注册一个全局 UI 组件 `<Meting/>`（吸底模式），这三个配置项不影响其他组件的配置项

## Options

Options 分为 `metingApi`、`meting`、`aplayer`、`mobile` 四部分

### metingApi

即 `Meting` 的 `api`，默认为 @metowolf 提供的 `api`，你也可以通过自建修改该选项

### meting

`Meting` 相关选项

-  server

   -  类型：`string`
   -  默认值： `undefined`
   -  描述：MetingApi 中的 `server` 参数，即音乐平台
   -  可选值： `"netease" | "tencent" | "kuwo" | "kugou" | "baidu"`

-  type

   -  类型：`string`
   -  默认值： `undefined`
   -  描述：MetingApi 中的 `type` 参数，即资源类型（播放列表、单曲、专辑等）
   -  可选值： `"song" | "album" | "artist" | "playlist"`

-  mid

   -  类型：`string`
   -  默认值： `undefined`
   -  描述：MetingApi 中的 `id` 参数，即资源 ID

-  auto
   -  类型：`string`
   -  默认值：`""`
   -  描述：资源 `url`，填写后可通过资源 `url` 自动解析资源平台、类型、ID，上述三个选项将被覆盖（本参数仅支持 `netease`、`tencent`、`xiami` 三平台）

该 Option 可分别填写 `server`、`type`、`mid`

```javascript
meting: {
  server: "netease",
  type: "playlist",
  mid: "6838211960",
}
```

也可以只填写 `auto`

```javascript
meting: {
   auto: 'https://music.163.com/#/playlist?id=6838211960'
}
```

### aplayer

> 详情见 ~~[vue-aplayer 文档（当前无法访问）](https://aplayer.moefe.org/docs/options/)~~ [vue-aplayer 文档 GitHub 页面](https://github.com/MoePlayer/vue-aplayer/blob/dev/docs/options/README.md)

-  fixed

   -  类型：`boolean`
   -  默认值： `false`
   -  描述：是否开启吸底模式

-  mini

   -  类型：`boolean`
   -  默认值： `false`
   -  描述：是否开启迷你模式

-  autoplay

   -  类型：`boolean`
   -  默认值： `false`
   -  描述：是否开启自动播放

-  theme

   -  类型： `string`
   -  默认值： `#b7daff`
   -  描述：设置播放器默认主题颜色

-  loop

   -  类型：`APlayer.LoopMode`
   -  默认值： `all`
   -  描述：设置播放器的初始循环模式
   -  可选值：`'all' | 'one' | 'none'`

-  order

   -  类型：`APlayer.OrderMode`
   -  默认值： `list`
   -  描述：设置播放器的初始顺序模式
   -  可选值： `'list' | 'random'`

-  preload

   -  类型：`APlayer.Preload`
   -  默认值： `auto`
   -  描述：设置音频的预加载模式
   -  可选值：`'none' | 'metadata' | 'auto'`

-  volume

   -  类型：`number`
   -  默认值： `0.7`
   -  描述：设置播放器的音量

-  additionalAudios

   -  类型：`Array<APlayer.Audio>`
   -  默认值：`[]`
   -  描述：除 Meting 解析的 audio 外额外添加的 audio
      > 详情见 [vue-aplayer 文档的 audio 选项](https://github.com/MoePlayer/vue-aplayer/blob/dev/docs/options/README.md#audio-)，另外，作为 `<APlayer />` 组件使用的时候仍应该使用 audio 选项。

-  customAudioType（见 [vue-aplayer 文档](https://github.com/MoePlayer/vue-aplayer/blob/dev/docs/options/README.md#customaudiotype-)）

-  mutex

   -  类型：`boolean`
   -  默认值： `true`
   -  描述：是否开启互斥模式

-  lrcType

   -  类型：`APlayer.LrcType?`
   -  默认值： `0`
   -  描述：设置 lrc 歌词解析模式
   -  可选值： `3 | 1 | 0`（`0`：禁用 lrc 歌词，`1`：lrc 格式的字符串，`3`：lrc 文件 url）

-  listFolded

   -  类型：`boolean`
   -  默认值： `false`
   -  描述：是否折叠播放列表

-  listMaxHeight

   -  类型：`number`
   -  默认值： `250`
   -  描述：设置播放列表最大高度，单位为像素

-  storageName
   -  类型：`string`
   -  默认值： `vuepress-plugin-meting`
   -  描述：设置存储播放器设置的 `localStorage` key

### mobile

用于控制全局吸底播放器在移动设备上的一些特殊选项

-  cover

   -  类型：`boolean`
   -  默认值： `true`
   -  描述：是否显示封面图，如果隐藏的话可以防止播放器遮挡移动设备上的文字内容

-  lrc
   -  类型：`boolean`
   -  默认值： `true`
   -  描述：是否显示歌词

## Examples

```javascript
// .vuepress/config.js
module.exports = {
   plugins: [
      'meting',
      {
         // 这个 API 是不可用的，只是作为示例而已
         metingApi: 'https://meting.example.com/api/',
         meting: {
            server: 'netease',
            type: 'playlist',
            mid: '6838211960',
         }, // 不配置该项的话不会出现全局播放器
         aplayer: {
            lrcType: 3,
         },
      },
   ],
}
```

```markdown
<!-- about.md -->

<Meting server="netease"
        type="playlist"
        mid="6838211960"
        :lrc-type="3"/>

<!-- 这样就可以在 about.html 页面单独引入一个播放器咯～ -->
```

## Thanks

-  [APlayer](https://github.com/MoePlayer/APlayer)
-  [VueAPlayer](https://github.com/MoePlayer/vue-aplayer)
-  [Meting](https://github.com/metowolf/Meting)
-  [MetingJS](https://github.com/metowolf/MetingJS)
