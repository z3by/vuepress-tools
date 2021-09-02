---
author:
  avatar: https://avatars.githubusercontent.com/u/15522311?v=4
  email: lyh543@outlook.com
  name: lyh543
  url: https://github.com/lyh543
  username: lyh543
bugs: https://github.com/lyh543/vuepress-theme-blog-material/issues
category: theme
date: '2021-08-31T09:24:57.117Z'
deprecated: false
description: Material VuePress Blog Theme Powered By Vuetify
downloads: null
homepage: https://github.com/lyh543/vuepress-theme-blog-material/
keywords:
- vue
- vuepress
- vuetify
- material design
license: MIT License
maintainers: null
name: vuepress-theme-blog-material
npm: https://www.npmjs.com/package/vuepress-theme-blog-material
publisher:
  avatar: null
  email: lyh543@outlook.com
  name: null
  url: null
  username: lyh543
repository: https://github.com/lyh543/vuepress-theme-blog-material
score: 0.33585529551823556
stars: 0
unstable: true
version: 0.0.2
watchers: 0

---

# vuepress-theme-blog-material

[![](https://img.shields.io/npm/l/vuepress-theme-blog-material.svg)](https://github.com/lyh543/vuepress-theme-blog-material/blob/master/LICENSE) [![](https://img.shields.io/npm/v/vuepress-theme-blog-material.svg)](https://www.npmjs.com/package/vuepress-theme-blog-material) [![](https://img.shields.io/npm/dt/vuepress-theme-blog-material.svg)](https://www.npmjs.com/package/vuepress-theme-blog-material) [![](https://img.shields.io/github/last-commit/lyh543/vuepress-theme-blog-material.svg)](https://github.com/lyh543/vuepress-theme-blog-material/commits/master)

Material VuePress Blog Theme Powered By Vuetify.

## 在线 Demo

* [国内 Demo](https://vuepress-theme-blog-material.lyh543.cn/) [![Deploy VuePress Example](https://github.com/lyh543/vuepress-theme-blog-material/actions/workflows/deploy-template.yml/badge.svg)](https://github.com/lyh543/vuepress-theme-blog-material/actions/workflows/deploy-template.yml)  
* [国外 Demo](https://vuepress-theme-blog-material.netlify.app/) [![Netlify Status](https://api.netlify.com/api/v1/badges/1c1bdacd-89b2-4b60-a19d-58929dab5f16/deploy-status)](https://app.netlify.com/sites/vuepress-theme-blog-material/deploys)

## 如何使用？

[master](https://github.com/lyh543/vuepress-theme-blog-material/tree/master) 分支提供了主题的源代码，而 [template](https://github.com/lyh543/vuepress-theme-blog-material/tree/template) 分支提供了使用本主题搭建的示例博客。

如需使用本主题，请 clone template 分支，然后进行修改。

### 下载

```shell
git clone https://github.com/lyh543/vuepress-theme-blog-material.git
# 如果网络不畅，可以使用 git clone https://hub.fastgit.org/lyh543/vuepress-theme-blog-material.git
git checkout template

rm -rf .git # 或者手动删除 .git 文件夹
git init
npm i
```

### 在本地测试运行

```shell
npm run serve
```

### 构建（以发布到网站上）

```shell
npm run build
```

## 博客编写

### 博文路径

个人比较喜欢按文件夹对博客进行分类，URL 呈现博文的路径。如果喜欢使用日期作为 URL，可以进行配置。

### 使用 Git 做版本管理

由于 [@vuepress/plugin-last-updated](https://vuepress.vuejs.org/plugin/official/plugin-last-updated.html) 插件将博文在 Git 的提交时间作为最后修改时间，不管你是否将博客源代码上传到 GitHub 等 Git 平台，都推荐使用 Git 来管理博客。

### 图片和文件

图片推荐使用相对路径，这样会交给 webpack 打包，打包后的图片的路径会发生变化，但相对路径会被正确地指向图片。

图片也可以使用绝对路径，webpack 不会修改图片路径。因为这个原因，其他文件也最好使用绝对路径。使用绝对路径时，请将图片和其他文件复制到 `/blog/.vuepress/public` 文件夹。该文件夹下的文件会被复制到博客根目录下。

### 代码块染色

使用 Prism 进行代码块染色。支持的语言列表请见 [Prism](https://prismjs.com/#languages-list)。

### LaTeX 公式

支持 LaTeX 公式。

行内公式：`$a+b$`

行间公式：

```latex
$$\left\{\begin{aligned}
I_0 &= 1 - e^{-1} \\
I_n &= 1-nI_{n-1} \quad (n=1,2,...)
\end{aligned} \right.$$
```

## 已知问题

* `npm run serve` 时不会生成 `sitemap.xml` 和 `rss.xml`，但是 `npm run build` 会生成。
