---
author:
  avatar: https://avatars.githubusercontent.com/u/49934348?v=4
  email: null
  name: hahaxiaowai
  url: null
  username: hahaxiaowai
bugs: https://github.com/hahaxiaowai/vuepress-plugin-season/issues
category: plugins
date: '2021-12-14T07:03:52.997Z'
deprecated: false
description: vuepress plugin season
downloads: null
homepage: https://github.com/hahaxiaowai/vuepress-plugin-season#readme
keywords:
- vuepress
license: false
maintainers: null
name: vuepress-plugin-season
npm: https://www.npmjs.com/package/vuepress-plugin-season
publisher:
  avatar: null
  email: 1062080110@qq.com
  name: null
  url: null
  username: hahaxiaowai
repository: https://github.com/hahaxiaowai/vuepress-plugin-season
score: 0.39059586739950725
stars: 0
unstable: false
version: 1.0.1
watchers: 0

---

## vuepress-plugin-season
## 概述

**重要说明：该仓库fork的vuepress-plugin-sakura，在此基础上增加了一些静态资源，稍微修改了一下逻辑**
仓库原地址：https://github.com/JabinPeng/vuepress-plugin-sakura

为什么会有这个库呢? 我在自己的博客中使用了Sakura库，但发现其一直请求着同一张图片资源，导致浏览器内存越来越大，于是我修复了这个问题，并提了PR(原作者似乎没有看到),在修复这个问题的过程中，我想为其增加新的功能，不再只是樱花，而是根据四季变化而变化，这只是一个简单的改变，考虑与原库名意义不再相同，便改名为season。

希望使用者能给原库一个star,支持原库作者。

## 升级相关
- [ ] 更换更好的图片
- [ ] 四季图片改为每月一张
- [ ] 不同的主题，例：飘落，水果，花草等

说明：我希望有小伙伴能够协助我实现上述升级，目前每一个季节只有一张图片，而且夏天和冬天的图片并不令我满意，希望有人能提供图片，扩充默认图片，谢谢！

## init
> npm install vuepress-plugin-season -S

## usage
``` js
["season", {
      num: 20,  // 数量
      show: true, //  是否显示
      zIndex: 10,   // 层级
      img: {
        replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
        // 如果要替换图片，再配置下面的图片地址
        // 你只需要替换自己想替换的季节，不想替换的不写便使用默认的图片
        // 默认图片为：春天落樱，夏天气泡，秋天枫叶，冬天飞雪。
        httpUrl:{
            spring: '...',
            summer: '...',
            autumn: '...',
            winter: '...'
        }
      }
    }],
```




