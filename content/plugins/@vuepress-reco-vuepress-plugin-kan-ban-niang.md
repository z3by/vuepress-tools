---
author:
  avatar: https://avatars.githubusercontent.com/u/54167020?v=4
  email: zsw0407@outlook.com
  name: zsw
  url: null
  username: smallsunnyfox
bugs: https://github.com/vuepress-reco/vuepress-plugin-kan-ban-niang/issues
category: plugin
date: '2019-11-29T09:05:52.514Z'
deprecated: false
description: Kan-ban-niang plugin for vuepress-theme-reco or other vuepress theme
downloads: null
homepage: https://vuepress-theme-reco.recoluan.com
keywords:
- vuepress-theme-reco
- live2D
- vuepress
license: MIT License
maintainers: null
name: '@vuepress-reco/vuepress-plugin-kan-ban-niang'
npm: https://www.npmjs.com/package/%40vuepress-reco%2Fvuepress-plugin-kan-ban-niang
publisher:
  avatar: null
  email: zsw0407@outlook.com
  name: null
  url: null
  username: smallsunnyfox
repository: https://github.com/vuepress-reco/vuepress-plugin-kan-ban-niang
score: 0.3022256932557765
stars: 19
unstable: false
version: 1.0.5
watchers: 19

---

# @vuepress-reco/vuepress-plugin-kan-ban-niang

![demo.png](./images/demo.png)

## Details

> kan-ban-niang plugin for vuepress-theme-reco or other vuepress theme.  
> Vuepress 看板娘插件

|使用位置|值|
|-|-|
|plugin name|@vuepress-reco/vuepress-plugin-kan-ban-niang|
|component name|KanBanNiang（自动出现在页面中，无需添加额外代码）|

## Buttons

|按钮|作用|默认提示语|
|-|-|-|
|home|回到博客主页|心里的花，我想要带你回家。|
|message|显示主人寄语|'欢迎来到 ' + 您的站点名称（$site.title）|
|theme|更换模型主题|好吧，希望你能喜欢我的其他小伙伴。|
|close|关闭看板娘|你知道我喜欢吃什么吗？痴痴地望着你。|
|info|跳转插件github|想知道关于我的更多信息吗？|

## Options

> 以下为插件注入时的参数。

### Attributes

|参数|说明|类型|默认值|可选值|
|-|-|-|-|-|
|theme|默认模型主题|Array|['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']|见最后|
|clean|是否开启clean模式(隐藏所有按钮)|Boolean|false|true/false|
|messages|按钮提示语|Object|{ welcome: '欢迎来到 ' + 您的站点名称（$site.title）, home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你知道我喜欢吃什么吗？痴痴地望着你。' }|-|
|messageStyle|自定义消息框样式|Object|{ right: '68px', bottom: '190px' }|-|
|modelStyle|自定义模型样式|Object|{ right: '90px', bottom: '-20px', opacity: '0.9' }|-|
|btnStyle|自定义按钮样式|Object|{ right: '90px', bottom: '40px' }|-|
|width|模型宽度|Number|150|-|
|height|模型高度|Number|220|-|

### theme说明

- theme仅包含一个值是默认为此主题并隐藏更换主题按钮
- theme为多个值时初始化默认为第一个主题，点击更换主题按钮随机更换数组内的其他主题
- 请注意主题名的大小写

### theme可选值

![themes.png](./images/themes.png)

## About

- 参考插件: [@Qi](https://github.com/QiShaoXuan) https://github.com/QiShaoXuan/vuepress-plugin-cat  
- 模型库： [@Qi](https://github.com/QiShaoXuan) https://github.com/QiShaoXuan/live2DModel
- 模型加载失败时会自动隐藏
- 加载静态资源速度不稳定
- 想使用本插件之外的其他模型可以将插件下载到本地引入更换模型url
