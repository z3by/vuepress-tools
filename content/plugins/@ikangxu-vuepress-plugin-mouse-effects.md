---
author:
  avatar: https://avatars.githubusercontent.com/u/17905150?v=4
  email: ikangxu@qq.com
  name: IKangXu
  url: null
  username: kangxu
bugs: https://github.com/IKangXu/vuepress-plugin-mouse-effects/issues
category: plugin
date: '2019-11-28T01:54:42.074Z'
deprecated: false
description: mouse-effects plugin for vuepress-theme-reco or other vuepress theme
downloads: null
homepage: https://github.com/IKangXu?tab=repositories
keywords:
- vuepress-theme-reco
- vuepress
- mouse-effects
license: MIT License
maintainers: null
name: '@ikangxu/vuepress-plugin-mouse-effects'
npm: https://www.npmjs.com/package/%40ikangxu%2Fvuepress-plugin-mouse-effects
publisher:
  avatar: null
  email: ikangxu@qq.com
  name: null
  url: null
  username: kangxu
repository: https://github.com/IKangXu/vuepress-plugin-mouse-effects
score: 0.05160367087694985
stars: 0
unstable: true
version: 0.0.3
watchers: 0

---

## 鼠标移动特效

此插件为Vuepress插件，为了更快捷的搭建一个博客进行演示，此处推荐使用主题[vuepress-theme-reco](https://github.com/vuepress-reco/vuepress-theme-reco)

以下是对该主题的介绍（摘抄自官网）

### Introduce

1. 这是一个vuepress主题，旨在添加博客所需的分类、TAB墙、分页、评论等功能；
2. 主题追求极简，根据 vuepress 的默认主题修改而成，官方的主题配置仍然适用；
3. 效果：[午后南杂](https://www.recoluan.com) 
4. 文档：[vuepress-theme-reco-doc](https://vuepress-theme-reco.recoluan.com)

主题效果演示

![Home](https://github.com/vuepress-reco/vuepress-theme-reco/raw/develop/images/home-blog.png)

以下是次插件的效果演示

> particle

![插件效果演示](./assets/img/mouse.gif)

> click-word

![插件效果演示](./assets/img/click-word.gif)

## 插件调用方式

暂时只支持本地调用  
将此插件下载到本地  
使用npm link进行项目关联

然后再`vuepress-theme-reco`主题的`index.js`中进行如下配置即可使用

```js
[require('@ikangxu/vuepress-plugin-mouse-effects'), {
  type: 'click-word', // 暂时只内置了一个特效   内置的特效有 particle|click-word
  words: ["富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善"], // click-word效果需要用到的文字提示
  style: {
    cursor: 'Altr_Vnd', // 支持自定义cursor，没有则为默认样式
    borderRadius: '50%', // 形状 particle效果需要用到
    zIndex: 2,
    colors: ["#FF0000", "#FF7D00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF"], // 颜色
    fontSize: 14, // click-word效果需要用到的文字显示大小
    r: {
      min: 5, // 半径最小值
      max: 15 // 半径最大值
    },
    dx: {
      min: -10, // 横向偏移量最小值
      max: 10 // 横向偏移量最大值
    },
    dy: {
      min: -10, // 纵向偏移量最小值
      max: 10  // 纵向偏移量最大值
    }
  }
}]
```

```shell
npm i @ikangxu/vuepress-plugin-mouse-effects -D
```

```js
['@ikangxu/vuepress-plugin-mouse-effects', {
  type: 'click-word', // 暂时只内置了一个特效   内置的特效有 particle|click-word
  words: ["富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善"], // click-word效果需要用到的文字提示
  style: {
    cursor: 'Altr_Vnd', // 支持自定义cursor，没有则为默认样式
    borderRadius: '50%', // 形状 particle效果需要用到
    zIndex: 2,
    colors: ["#FF0000", "#FF7D00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF"], // 颜色
    fontSize: 14, // click-word效果需要用到的文字显示大小
    r: {
      min: 5, // 半径最小值
      max: 15 // 半径最大值
    },
    dx: {
      min: -10, // 横向偏移量最小值
      max: 10 // 横向偏移量最大值
    },
    dy: {
      min: -10, // 纵向偏移量最小值
      max: 10  // 纵向偏移量最大值
    }
  }
}]
```

该插件是全局的，无需新增多余代码