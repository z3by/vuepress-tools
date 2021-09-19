---
author:
  avatar: https://avatars.githubusercontent.com/u/56751617?v=4
  email: wyw.s@foxmail.com
  name: wywei
  url: null
  username: wywei
bugs: https://github.com/wyw-s/vuepress-plugin-copy-images/issues
category: plugin
date: '2021-05-22T12:27:08.490Z'
deprecated: false
description: A vuepress plugin for auto copy imags
downloads: null
homepage: https://github.com/wyw-s/vuepress-plugin-copy-images
keywords:
- vuepress
- copy
- images
- copy-images
license: false
maintainers: null
name: vuepress-plugin-copy-images
npm: https://www.npmjs.com/package/vuepress-plugin-copy-images
publisher:
  avatar: null
  email: wyw.s@foxmail.com
  name: null
  url: null
  username: wywei
repository: https://github.com/wyw-s/vuepress-plugin-copy-images
score: 0.5026188027402998
stars: 1
unstable: false
version: 1.1.0
watchers: 1

---

# vuepress-plugin-copy-images

## 介绍（Introduction）

这是一个插件，主要用于使用vuepress搭建的博客，在书写文档时，你可以正常使用typora软件书写md文件并粘贴复制图片，你不必手动去把你的图片放置在public文件夹中，这个操作插件会帮你完成。

## 安装（Install）

```bash
npm i vuepress-plugin-copy-images -D
```

## 使用（Usage）

```js
module.exports = {
  plugins: [
    "vuepress-plugin-copy-images",
  ],
}
```

## 规则(rule)
- md文件需要在views文件夹下,插件默认会递归views下的`assets`文件夹下的图片。
- 存放md文件的图片文件夹名称默认为`assets`

## 参数(options)
- pageDirName: 你的md文件目录，默认：views
- imagesDir：你的md图片文件夹，默认 assets
- clearImg: 清空上一次copy的img文件目录，重新生成。默认 false
## 示例(example)
```js
module.exports = {
  plugins: [
    [
      "vuepress-plugin-copy-images",
      {
        pageDirName: 'views',
        imagesDir: 'assets',
        clearImg: false,
      }
    ],
  ],
}
```

## 文件结构
```shell
├── docs
│   ├── .vuepress
│   │   ├── config.js
│   │   └── public
│   │       ├── logo.jpeg
│   │       └── views
│   │           └── issues
│   │               └── assets
│   │                   └── 1594656712548.png
│   ├── guide
│   │   └── README.md
│   ├── README.md
│   └── views
│       └── issues
│           ├── assets
│           │   └── 1594656712548.png
│           ├── issues.md
│           └── README.md
├── package-lock.json
└── package.json
```
