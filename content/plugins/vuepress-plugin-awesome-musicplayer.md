---
author:
  avatar: https://avatars.githubusercontent.com/u/23710354?v=4
  email: null
  name: daodaolee
  url: null
  username: daodaolee
bugs: https://github.com/daodaolee/vuepress-plugin-awesome-musicplayer/issues
category: plugins
date: '2021-12-29T12:13:07.571Z'
deprecated: false
description: a music player by vuepress
downloads: null
homepage: https://github.com/daodaolee/vuepress-plugin-awesome-musicplayer#readme
keywords:
- vuepress
- music
- player
license: MIT License
maintainers: null
name: vuepress-plugin-awesome-musicplayer
npm: https://www.npmjs.com/package/vuepress-plugin-awesome-musicplayer
publisher:
  avatar: null
  email: im@daodaolee.cn
  name: null
  url: null
  username: daodaolee
repository: https://github.com/daodaolee/vuepress-plugin-awesome-musicplayer
score: 0.5017873441080927
stars: 12
unstable: false
version: 1.2.0
watchers: 12

---

# vuepress-plugin-awesome-musicplayer
一款基于vuepress插件的音乐播放器，打破以往博客音乐播放方式，让用户有更佳的沉浸式体验，[点击预览](https://daodaolee.cn/music/first_old_new_love.html)。
## 说明
该插件参考了[vue-netease-music](https://github.com/sl1673495/vue-netease-music)，把Mac端的网易云播放器界面的部分功能做成了vuepress插件，让用户在vuepress里也有同样的音乐体验，接口来自 [保罗API](https://api.paugram.com/help/netease)。
## 安装
```bash
npm install vuepress-plugin-awesome-musicplayer -D
```
## 使用
### 配置
在 `.vuepress/config.js` 下增加插件配置
```js
  plugins: {
    'vuepress-plugin-awesome-musicplayer': {}
  }

  //or

  plugins: ['vuepress-plugin-awesome-musicplayer']
```
### 获取歌曲id
目前通过获取网易云的歌曲id来进行播放，id获取方式如下：

1. 打开网易云客户端，播放一首音乐
2. 点击分享按钮，选择复制链接
3. 链接格式如：`https://music.163.com/song?id=xxx&userid=`，`xxx` 就是该歌曲的id
4. 由于接口原因，可能有的音乐无法读取，多次刷新可能造成请求失败

### 获取音源
为了更好的用户体验，增加了音频解析可视化面板，由于三方接口配合 `MediaElementAudioSourceNode` 会导致 `CORS` 和 `CORB` 播放报错，所以需要手动添加音源文件链接，建议使用类似图床链接引入即可。
### 引入
在想要插入播放器的Markdown页面，加入以下代码即可：
``` html
<MusicPlayer musicId="xxx" musicSrc="xxx.mp3" style="margin:0 auto">
```
### 主题
如果想改变主题，添加 `theme` 参数即可，默认是 `apple` 主题：
```html
<MusicPlayer theme="apple">
```
默认提供了：`apple`、`aurora`、`borealis`、`candy`、`cool`、`dusk`、`outrun`、`summer`、`tiedye` 和 `rainbow` 10种渐变色。


也可以自定义颜色，传入一个渐变色类型参数即可，格式如下：
```html
<MusicPlayer :theme="[{pos: 0, color: '#000'},{pos: 0.4, color: '#aaa'}, {pos: 1, color: '#fff'}]">
```
其中 `pos` 代表初始颜色位置的百分比（从0到1），`color` 代表颜色。
## 效果图
亮系和暗系是适配 [vuepress-reco](https://vuepress-theme-reco.recoluan.com/views/1.x/) 的主题切换做的适配。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20211226160304.png)
![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20211226160305.png)
![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20211226160306.png)
![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20211226160307.png)


