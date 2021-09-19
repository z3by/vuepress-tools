---
author:
  avatar: https://avatars.githubusercontent.com/u/12029165?v=4
  email: null
  name: tangxiaomi
  url: null
  username: im
bugs: https://github.com/im/vuepress-plugin-image/issues
category: plugin
date: '2019-09-17T11:47:00.425Z'
deprecated: false
description: "vuepress markdown \u56FE\u7247\u652F\u6301\u8BBE\u7F6E\u5BBD\u9AD8"
downloads: null
homepage: https://github.com/im/vuepress-plugin-image#readme
keywords:
- vuepress
- markdown
license: false
maintainers: null
name: vuepress-plugin-image
npm: https://www.npmjs.com/package/vuepress-plugin-image
publisher:
  avatar: null
  email: tangxiaomiemail@gmail.com
  name: null
  url: null
  username: tangxiaomi
repository: https://github.com/im/vuepress-plugin-image
score: 0.29955834876782217
stars: 4
unstable: false
version: 1.0.4
watchers: 4

---

# vuepress-plugin-image



## vuepress 配置

* 安装依赖

```bash
npm i vuepress-plugin-image -D
```

```js
// config.js
module.exports = { 
    plugins: [
        ['image']
    ]
} 
```

## 设置图片大小  
[markdown-it-imsize](https://www.npmjs.com/package/markdown-it-imsize)

```
![](https://picsum.photos/300/150/?random  =200x100)
```

![](https://picsum.photos/300/150/?random  =200x100)


## 图片懒加载
[markdown-it-image-lazy-loading](https://www.npmjs.com/package/markdown-it-image-lazy-loading)
支持Chrome 75以上的 版本 [原生图像延迟加载](https://addyosmani.com/blog/lazy-loading/)

```html
<!-- <img src="example.png" alt="" title="image title" loading="lazy"> -->
```

![](https://picsum.photos/400/200/?random  =200x100)


## 图片loading 动画
[markdown-it-image-loading](https://www.npmjs.com/package/markdown-it-image-loading)

```js
// config.js
module.exports = { 
    plugins: [
        ['image'],
        {
            loading: true,
            loadingSrc: 'http://tangxiaomi.top/markdown-it-image-loading/loading.gif',
            loadingWidth: 30,
            loadingHeight: 30,
            minWidth: 100,
            minHeight: 100,
            bgColor: '#000'
        }
    ]
} 
```

## 参数

* `loading` 是否显示loading
    - 默认：true
* `loadingSrc` loading 图片 src 
* `loadingWidth` : loading 图片宽度
    - 默认：30
* `loadingHeight` : loading 图片高度
    - 默认：30
* `minWidth` : 图片最小宽度 `(图片的最小高度)`
    - 默认：100  
* `minHeight` : 图片最小高度 `(图片的最小宽度)`
    - 默认：100 
* `bgColor` : 图片背景颜色 `(图片的背景颜色)`
    - 默认：''  

### markdown 单独设置 loading 样式

```
![](/){loadingSrc=http://tangxiaomi.top/markdown-it-image-loading/loading.gif loadingWidth=50 loadingHeight=50 minWidth=200 minHeight=200  bgColor=#ccc} 
```
![](/){loadingSrc=http://tangxiaomi.top/markdown-it-image-loading/loading.gif loadingWidth=50 loadingHeight=50 minWidth=200 minHeight=200  bgColor=#ccc} 

