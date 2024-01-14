---
author:
  avatar: https://avatars.githubusercontent.com/u/39176876?v=4
  email: 940150483@qq.com
  name: ltf
  url: null
  username: litengfu
bugs: https://github.com/litengfu/vuepress-theme-daily-record/issues
category: themes
date: '2020-04-12T06:33:14.490Z'
deprecated: false
description: Material Design theme for vuepress
downloads: null
homepage: https://github.com/litengfu/vuepress-theme-daily-record#readme
keywords:
- vue
- vuepress
- theme
- material design
license: MIT License
maintainers: null
name: vuepress-theme-daily-record
npm: https://www.npmjs.com/package/vuepress-theme-daily-record
publisher:
  avatar: null
  email: 940150483@qq.com
  name: null
  url: null
  username: litengfu
repository: https://github.com/litengfu/vuepress-theme-daily-record
score: 0.2712397448537003
stars: 0
unstable: false
version: 1.0.7
watchers: 0

---



## 介绍

[vuepress-theme-daily-record](https://github.com/litengfu/vuepress-theme-daily-record) 的原主题是[vuepress-theme-indigo-material](https://github.com/zhhlwd/vuepress-theme-indigo-material), 它在静态博客网站中的应用处处可见.在这里首先感谢原作者.

然而我想开发适合自己的个人博客, 所以我基于原作者的源代码重写了它. 


正如 VuePress 文档所说:

> 每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。

```
---
title: 【读书笔记】《JavaScript权威指南》第7章数组
date: 2018-11-08 04:10:03
tags: [读书笔记, 《JavaScript权威指南》]
---
```

- 理论上很好的 SEO
- 已经发布到 npm, 只需要下载即可, 还提供一套模板文件结构, 下载依赖后立即可以使用, 还提供了相关操作的 shell 文件,双击即可,几分钟就能有自己的博客
- ......

### 浏览器兼容性

本主题只在最新版的谷歌浏览器和火狐浏览器测试无误

vuepress 默认有编译一些对老版本浏览器的兼容, 具体控制请看它[官网配置](https://vuepress.vuejs.org/zh/config/#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7)


```sh
|-- template
    |-- .babelrc                   // 主题的babel配置, 按需加载element ui所需
    |-- .gitignore                 // 让git忽略跟踪dist文件夹等等, 不要把docs文件夹加进去
    |-- deploy.sh                  // 部署到git 远程仓库的shell文件, 要部署时双击即可, 前提是配置的构建目录位置没变
    |-- init.sh                    // (只要执行一次)克隆template分支到本地后, 双击它, 一步完成所有操作, 等他完成下载, 开启测试服务器, 打开http://localhost:8080/看到效果
    |-- package-lock.json
    |-- package.json
    |-- 目录说明.md
    |-- docs                       // 存放所有开发环境的目录
        |-- index.md               // 首页,不用改
        |-- .vuepress
        |   |-- config.js          // 主题的配置
        |   |-- public             // 存放静态文件的目录, 例如img, ico ...
        |       |-- avatar.jpg
        |       |-- brand.jpg
        |       |-- favicon.ico
        |-- about                  // 展示在自我介绍页面的内容
        |   |-- index.md           // 不能删除, 可以添加内容
        |-- tags                   // 不能删除, 不能动
        |   |-- index.md           // 不能删除, 不能动
        |-- all                    // 不能删除, 不能动
        |   |-- index.md           // 不能删除, 不能动
        |-- posts                  // 存放所有文章的目录
```

