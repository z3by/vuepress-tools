---
author:
  avatar: https://private-avatars.githubusercontent.com/u/6262853?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUzMjAsIm5iZiI6MTczNDY1NDEyMCwicGF0aCI6Ii91LzYyNjI4NTMifQ.VbG58HUIWDKhV5_ZwGkIT9qFSxy0PRBwhGyIJl6fL6g&v=4
  email: marsak@live.cn
  name: Dr.Cycle
  url: null
  username: dr.cycle
bugs: https://github.com/leCapsimRy/vuepress-theme-cycle/issues
category: themes
date: '2019-09-11T08:29:28.889Z'
deprecated: false
description: Vuepress theme - Cycle
downloads: null
homepage: https://github.com/leCapsimRy/vuepress-theme-cycle#readme
keywords:
- vuepress
- theme
- vuepres-theme
license: MIT License
maintainers: null
name: vuepress-theme-cycle
npm: https://www.npmjs.com/package/vuepress-theme-cycle
publisher:
  avatar: null
  email: marsak@live.cn
  name: null
  url: null
  username: dr.cycle
repository: https://github.com/leCapsimRy/vuepress-theme-cycle
score: 0.444346122738807
stars: 11
unstable: true
version: 0.7.11
watchers: 11

---

# vuepress-theme-cycle

[![npm](https://img.shields.io/npm/v/vuepress-theme-cycle.svg)](https://www.npmjs.com/package/vuepress-theme-cycle)
[![LICENSE](https://img.shields.io/npm/l/vuepress-theme-cycle.svg)](https://github.com/leCapsimRy/vuepress-theme-cycle/blob/master/LICENSE)

🚲 一款基于VuePress的博客主题

> 我的[个人博客](https://github.com/leCapsimRy/blog)也在使用该主题，因为目前的需求都是基于该博客的需求而定的，而且目前的版本也没有完美的承载这些需求，我会逐渐将这些功能更新到主题当中的。当然，对于这款主题如果有其他需求的朋友可以在issues当中发言，如果可行我会尽快加入最新的版本当中。

## 主题完成度

- [x] 首页
- [x] 三杯（博客列表）
- [x] 两盏（图片展览馆）
- [x] 淡酒（个人故事分享，类似树洞功能）
- [x] 文章页
- [ ] ~~分类列表页~~
- [x] 搜索
- [x] 评论
- [x] 文章浏览统计
- [ ] ~~订阅~~
- [x] 移动端支持

## 版本更新

### v0.7.11（2019/9/11）

1.增加“淡酒”栏目

2.调整除首页外其他页面logo问题


### v0.7.10（2019/6/11）

vuepress更新为^1.0.1版本


### v0.7.9（2019/5/20）

1.样式整合为一个文件

2.404页面的背景图格式改为`jpg`，现在除PWA配置中的图标以及站点logo外，均使用`jpg`格式的图片（其他格式图片可以通过图片格式转换器进行格式转换）

### v0.7.6（2019/5/17）

增加主页图片lazyload，压缩字体包大小

### v0.7.5（2019/4/26）

解决iphone端页面滚动问题

### v0.7.0（2019/4/25）

1.整体样式更新，现在变得更加简洁了

2.做了移动端适配，现在通过移动端访问也不用担心页面走形

3.修改了文章搜索功能，现在的搜索结果是所有文章的标题列表

### v0.6.9（2019/4/16）

> 文章浏览统计功能可用（基于[Valine](https://valine.js.org/quickstart.html)）

### v0.6.8（2019/4/15）

> 增加了文章的评论功能，需要在主题配置`themeConfig`当中增加`id`和`key`的配置项（评论功能使用的是[Valine](https://valine.js.org/quickstart.html)，使用前请先按照提示在[LeanCloud](https://leancloud.cn/)注册，将相应的`APP ID`和`APP Key`值分别填入`themeConfig`中的`id`和`key`）

### v0.6.6（2019/4/10）

1.增加了新的页面-画廊`gallery/`

> 现在可以将每篇文章对应的图片放大查看了，还增加了图片下载的功能；

2.增加了新页面-故事与酒`story/`

> 空白留存页

3.调整了文章页yaml的格式

> 删除了name和images项

4.调整了图片获取方式

> `public/images/posts/`文件下，以`文章名.jpg`的方式命名后，主题会自动取得文章和图片的对应关系，另外目前文章图片只支持`jpg`格式，且文章名里如果想要添加其他符号，建议使用`-`，例如：`文章名-1-1.md`，对应图片名称则是`文章名-1-1.jpg`

## 安装

```shell
$ npm install vuepress-theme-cycle --save-dev
```

## 配置

在配置文件`.vuepress/config.js`当中，增加`theme`配置项，并将配置项的值设置为`cycle`：

```js
module.exports = {
  theme: 'cycle',
}
```

## themeConfig（v0.7.0）

在配置文件`.vuepress/config.js`当中，增加`themeConfig`配置项，并按照如下进行配置：

```js
themeConfig: { 
      avatar:'images/avatar.jpg',                 //头像路径
      about:'',                                   //个人介绍
      mail:'',                                    //邮箱
      wechat:'',                                  //微信号
      subscription:'',                            //订阅文案
      id:'',                                      //[LeanCloud](https://leancloud.cn/)的APP ID                       v0.6.8新增
      key:'',                                     //[LeanCloud](https://leancloud.cn/)的APP Key                      v0.6.8新增
      menus:[                                     //导航菜单（v0.7.0只支持首页、博客和画廊）
        {name:'首页',value:'home',url:'/'},
        {name:'博客',value:'blog',url:'/posts/'}
        {name:'画廊',value:'gallery',url:'/gallery/'}
        {name:'故事与酒',value:'story',url:'/story/'}
      ],
      links:[                                     //其他社交链接
        {name:'github',url:''},
        {name:'weibo',url:''},
        {name:'instagram',url:'/'}
      ],
      categories:[                                //文章分类（v0.7.0暂未支持分类筛选）
        {name:'古韵',url:'/posts/'},
        {name:'当下',url:'/posts/'},
        {name:'斗酒话评',url:'/posts/'},
        {name:'酒巷小调',url:'/posts/'}
      ],
      footer: '©2018-2019 XXX博客',
      copyright: '备案号'
    }
```

## 目录格式（v0.7.7）

如下文件目录为根文件夹`docs`的具体格式，除两个`posts/`文件夹下的内容名称可以随意修改外，其他都名称不可修改：

```
├── .vuepress
|   ├── public/
|   |   ├── images/
|   |   |   ├── posts/                   
|   |   |   |   ├── post1-1.jpg
|   |   |   |   ├── post2-2.jpg
|   |   |   |   ├── ...
|   |   |   ├── 404.jpg   //v0.7.9版本，图片格式改为jpg
|   |   |   ├── avatar.jpg
|   |   |   ├── cgqz.jpg
|   ├── config.js
├── README.md
├── posts/
|   ├── README.md
|   ├── post1-1.md
|   ├── post2-2.md
|   ├── ...
├── gallery/
|   ├── README.md
├── story/
|   ├── README.md
```

## 文章配置项（v0.7.0）

```yaml
---
title: 标题
createTime: 发文时间
introduce: 文章介绍
tags:                    #文章分类
- name: 分类1
- name: 分类2
- name: ...
prev: 上一篇文章          #填写格式为‘./文章名.html’（可填，或直接移除该分支）
next: 下一篇文章          #填写格式为‘./文章名.html’（可填，或直接移除该分支）
---

具体文章内容...
```

## 协议

[MIT License](https://opensource.org/licenses/MIT) © [leCapsimRy](https://github.com/lecapsimry)
