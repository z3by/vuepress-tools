---
author:
  avatar: https://avatars.githubusercontent.com/u/15522311?v=4
  email: lyh543@outlook.com
  name: lyh543
  url: https://github.com/lyh543
  username: lyh543
bugs: https://github.com/lyh543/vuepress-theme-blog-material/issues
category: theme
date: '2021-09-12T05:10:39.670Z'
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
score: 0.5184386738098782
stars: 0
unstable: true
version: 0.0.4
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

如需使用本主题，请 clone template 分支，然后修改为自己的博客。

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

本人比较喜欢按文件夹对博客进行分类，URL 呈现博文的路径。如果喜欢使用日期作为 URL，可以进行配置。

### 使用 Git 做版本管理

由于 [@vuepress/plugin-last-updated](https://vuepress.vuejs.org/plugin/official/plugin-last-updated.html) 插件将博文在 Git 的提交时间作为最后修改时间，不管你是否将博客源代码上传到 GitHub 等 Git 平台，都推荐使用 Git 来管理博客。

### 图片和文件

Markdown 中的图片和文件可以通过相对路径（形如 `./pic.jpg`）或绝对路径（形如 `/img/pic.jpg`）的形式插入。VuePress 对二者的处理方式不同：

* 对于绝对路径（以及外链），VuePress 会直接将链接复制到生成的 HTML 中。VuePress 只会将出现在 `/blog/.vuepress/public` 的文件复制到生成的根目录（如 `/img.pic` 的图片应当放在 `/blog/.vuepress/public/img.pic` 中）。
* 对于相对路径的图片，VuePress 会将相对链接引用的图片交给 webpack 处理。在编译阶段，webpack 会寻找到图片，然后将其复制到生成文件夹，同时修改链接为新的 URL。好处在于只要相对路径正确，图片可以放在自己喜欢的任意一个文件夹，如果相对路径错误还会有显式报错；坏处在于文件路径会被修改。

VuePress 建议对图片使用相对路径，对文件使用绝对路径。但我个人推荐都使用绝对路径，因为 webpack 只会识别 `<img>`、`![]()` 而忽略其它格式（如普通链接）的图片链接；如果同时使用相对路径和绝对路径引用一个图片也会导致出错。

-------------

每篇博客的头图会从[19 张 Material 风格照片](https://github.com/lyh543/vuepress-theme-blog-material/tree/template/blog/.vuepress/public/theme/random)中随机选择一张。你也可以在 frontmatter 中添加 `image` 字段（仅支持[绝对路径](https://github.com/lyh543/vuepress-theme-blog-material/blob/template/blog/_posts/markdown/markdown-demo.md)和[链接](https://github.com/lyh543/vuepress-theme-blog-material/blob/template/blog/_posts/markdown/markdown-demo-2.md)）替换。

```markdown
---
title: Markdown 效果演示
date: 2021-7-7 21:23:36
tags:
- markdown 
image: https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg
---
```

------------------

如果你恰巧也是使用 VS Code 编写 Markdown，你可以使用 [Markdown Image](https://marketplace.visualstudio.com/items?itemName=hancel.markdown-image) 插件来向 Markdown 插入图片，该插件会自动将剪贴板中的图片复制到对应文件夹，然后修改链接使得该主题能够直接加载。

相关配置为：

```json
{
  "markdown-image.base.uploadMethod": "Local",
  "markdown-image.local.path": "/blog/.vuepress/public/images/",
  "markdown-image.local.referencePath": "/images/"
}
```

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

## 如何开发？

本主题的文件和测试博客的文件分别在 master 和 template 分支中。开发博客主题时，推荐将主题文件和博文分别 clone 到两个文件夹，然后使用 `npm link` 进行链接：

```shell
git clone https://github.com/lyh543/vuepress-theme-blog-material.git vuepress-theme-blog-material
cp -r vuepress-theme-blog-material vuepress-theme-blog-material-template
cd vuepress-theme-blog-material
npm i
sudo npm link

cd ../vuepress-theme-blog-material-template
git checkout template
npm i
npm link vuepress-theme-blog-material
npm run serve
```

## 已知问题

* `npm run serve` 时不会生成 `sitemap.xml` 和 `rss.xml`，但是 `npm run build` 会生成。
