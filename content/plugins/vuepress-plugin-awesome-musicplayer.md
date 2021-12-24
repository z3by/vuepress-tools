---
author:
  avatar: https://avatars.githubusercontent.com/u/23710354?v=4
  email: null
  name: daodaolee
  url: null
  username: daodaolee
bugs: https://github.com/daodaolee/vuepress-plugin-awesome-musicplayer/issues
category: plugins
date: '2021-12-23T11:13:25.758Z'
deprecated: false
description: a music player by vuepress
downloads: null
homepage: https://github.com/daodaolee/vuepress-plugin-awesome-musicplayer#readme
keywords:
- vuepress
- music
- player
license: false
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
score: 0.4926125973833081
stars: 3
unstable: false
version: 1.0.3
watchers: 3

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

### 引入
在想要插入播放器的Markdown页面，加入以下代码即可：
```
<MusicPlayer musicId="xxx" style="margin:0 auto">
```
## 效果图
亮系和暗系是适配 [vuepress-reco](https://vuepress-theme-reco.recoluan.com/views/1.x/) 的主题切换做的适配。
![白色](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20211223183444.png)
![黑色](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20211223183445.png)
