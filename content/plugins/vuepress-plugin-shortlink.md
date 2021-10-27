---
author:
  avatar: https://avatars.githubusercontent.com/u/8779333?v=4
  email: null
  name: a little
  url: null
  username: AutreC
bugs: null
category: plugin
date: '2020-11-15T16:21:39.380Z'
deprecated: false
description: short link for vuepress
downloads: null
homepage: https://github.com/ioutio/vuepress-plugin-shortlink#readme
keywords:
- vuepress
- short
- link
- shortlink
- permalink
license: false
maintainers: null
name: vuepress-plugin-shortlink
npm: https://www.npmjs.com/package/vuepress-plugin-shortlink
publisher:
  avatar: null
  email: mo@autre.cn
  name: null
  url: null
  username: ioutio
repository: https://github.com/ioutio/vuepress-plugin-shortlink
score: 0.42329113714402183
stars: 0
unstable: false
version: 1.1.0
watchers: 0

---

# [vuepress-plugin-shortlink](https://iout.io/open/vuepress-plugin-shortlink)

A vuepress plugin for generate static post link based on post file name.

## 安装

```
npm install vuepress-plugin-shortlink --save
```

从config.js配置中删除 permalink，该插件是基于默认永久链接/:regular


## 例子

### version 1.0
```
source: /books/a-book.md
permalink: /books/261f97f7.html

source: /hello-word.md
permalink: /b1d4025b.html

source: /books/computer/a-book.md
permalink: /books/computer/261f97f7.html
```

## 设定参数

该插件基于vuepress-plugin-clean-urls，可以自定义后缀和404，设定方法同vuepress-plugin-clean-urls

```
plugins: [
    [
      'vuepress-plugin-shortlink',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html'
      },
    ],
  ],
```
### version 1.1 

增加配置containDirs
可设定只当文件夹全路径，其余只保留文件路径

```
plugins: [
    [
      'vuepress-plugin-shortlink',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
        containDirs: ['/books']
      },
    ],
  ],
```
地址展示
```
source: /books/a-book.md
permalink: /books/261f97f7/

source: /hello-word.md
permalink: /b1d4025b/

source: /say/hello-word.md
permalink: /b1d4025b/

source: /books/computer/a-book.md
permalink: 261f97f7/
```

## ThanksFor

[vuepress-plugin-clean-urls](https://github.com/vuepress/vuepress-plugin-clean-urls) [sheetjs](https://github.com/SheetJS/js-crc32)
