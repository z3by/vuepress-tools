---
author:
  avatar: https://avatars.githubusercontent.com/u/43326199?v=4
  email: null
  name: Vincent Hy
  url: null
  username: Wiensss
bugs: https://github.com/Veminem/vuepress-theme-oneN/issues
category: themes
date: '2019-10-18T19:22:58.594Z'
deprecated: false
description: A vuepress theme for oneN
downloads: null
homepage: https://github.com/Veminem/vuepress-theme-oneN#readme
keywords:
- vue
- vuepress
- vuepress-theme
license: MIT License
maintainers: null
name: vuepress-theme-onen
npm: https://www.npmjs.com/package/vuepress-theme-onen
publisher:
  avatar: null
  email: Veminem@outlook.com
  name: null
  url: null
  username: vincent-hy
repository: https://github.com/Veminem/vuepress-theme-oneN
score: 0.38045563263064575
stars: 52
unstable: false
version: 1.1.3-beta
watchers: 52

---

<div align="center">
  <img
    alt="logo" width="250px" height="250px"
    src="https://github.com/Veminem/vuepress-theme-oneN/blob/master/images/logo.png"
  >
  <h1>vuepress-theme-onen</h1>
  <p>🎈<em>A VuePress Theme for oneN</em></p>
  <p align="center">
    <a href="https://www.npmjs.com/package/vuepress-theme-onen">
      <img src="https://img.shields.io/npm/v/vuepress-theme-onen?color=red" alt="npm version">
    </a>
    <a href="https://www.npmjs.com/package/vuepress-theme-onen">
      <img src="https://img.shields.io/npm/dt/vuepress-theme-one" alt="npm download">
    </a>
    <a href="https://github.com/Veminem/vuepress-theme-oneN/blob/master/LICENSE">
      <img src="https://img.shields.io/npm/l/vuepress-theme-onen" alt="MIT license">
    </a>
  </p>
</div>

## 简介

- 一个偏文档风格的博客，灵感来自于 oneNote 笔记本
- 博客主题追求简约文档风，抛去主流博客的元素，标签、归档等
- 这看起来更像是对默认主题的一次改版，但也增加了主题的元素

## 预览

💨 [Live Demo](https://vincenthy.site)

![Live](https://github.com/Veminem/vuepress-theme-oneN/blob/1.x/images/6.png)

## 主题安装

oneN 主题基于 VuePress，首先你应该新建一个 VuePress 项目文件。详细请阅读 [VuePress 官方文档 - 现有项目](https://vuepress.vuejs.org/zh/guide/getting-started.html#%E7%8E%B0%E6%9C%89%E9%A1%B9%E7%9B%AE)。

在现有的 VuePress 项目文件新建如下目录结构：

![目录结构](https://github.com/Veminem/vuepress-theme-oneN/blob/1.x/images/1.png)

接着安装 oneN 主题：

```sh
yarn add -D vuepress-theme-onen
# or npm install -D vuepress-theme-onen
```

## 主题配置

首先在配置文件 `config.js` 中添加如下字段：

```js
// .vuepress/config.js
module.exports = {
  theme: 'onen'  // or 'vuepress-theme-onen'
}
```

### 首页

主题提供了一个首页 (Homepage) 的布局。想要使用它，需要在根级 `README.md` 的 [YAML front matter](https://vuepress.vuejs.org/zh/guide/markdown.html#front-matter) 指定 `home: true`。

以下是一个如何使用的例子：

```yaml
# /README.md
---
home: true
message: Welcome to my Blog
actionText: Start →
actionLink: /about
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以 SPA 为导航的博客布局。
- title: VuePress 驱动
  details: VuePress 为每个页面预渲染生成静态的 HTML。
- title: oneN 主题
  details: 自搭使用 Vue 开发的主题 oneN。
---
```

> 注意，`actionLink` 字段读取的页面基于 VuePress 默认的页面路由方案。详细请阅读 [VuePress 官方文档 - 目录结构](https://vuepress.vuejs.org/zh/guide/directory-structure.html#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)。
>
> | 文件的相对路径   | 页面路由地址 |
> | ---------------- | ------------ |
> | /README.md       | /            |
> | /about/README.md | /about/      |
> | /config.md       | /config.html |

配置完的首页效果如下：

![首页](https://github.com/Veminem/vuepress-theme-oneN/blob/1.x/images/2.png)

### 侧边栏

侧边栏是 oneN 主题的核心组件，因为使用三级导航，配置内容稍许复杂，需要配置一二级的路径。通过 `themeConfig.menu` 字段进行配置：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    menu: [
      {
        text: '',
        link: '',
        children: [
          { text: '', link: '' },
          { text: '', link: '' },
          ...
        ]
      },
      ...
    ]
  }
}
```

可以看到 `themeConfig.menu` 数组中每个对象成员作为一级导航，应包含 `text`、`link`、`children` 字段，其中 `children` 字段又嵌套着二级导航。

![侧边栏](https://github.com/Veminem/vuepress-theme-oneN/blob/1.x/images/5.png)

如上图所示树形结构文件的侧边栏，配置内容应如下：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    menu: [
      {
        text: 'postA',
        link: '/post/postA',
        children: [
          { text: 'postA1', link: '/postA-1' },
          { text: 'postA2', link: '/postA-2' },
        ]
      },
      {
        text: 'postB',
        link: '/post/postB',
        children: [
          { text: 'postB1', link: '/postB-1' },
        ]
      },
    ]
  }
}
```

### 导航栏

导航栏包含头像、搜索框和选项链接。可以通过 `themeConfig` 的相关字段进行配置：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    avatar: '/avatar.jpg',  // 头像
    logo: '/logo.png',      // Logo
  }
}
```

> 注意，你应该在项目 `.vuepress/public` 目录下存放静态公共文件资源，以使 `/avatar.jpg`、`/logo.png` 这样的路径能够被正确读取。
>
> 详细请阅读 [VuePress 官方文档 - 静态资源](https://vuepress.vuejs.org/zh/guide/assets.html#%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90)。

选项链接通过 `themeConfig.navbar` 字段配置，每个选项应该包括 `type`、`title`、`href` 三个属性，分别表示图标、标题、链接路径。

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    navbar: [
      {
        type: 'home',
        title: 'Home',
        href: '/'
      },
      {
        type: 'user',
        title: 'About',
        href: '/about'
      },
      {
        type: 'github',
        title: 'GitHub',
        href: 'https://github.com/Veminem'
      }
    ],
  }
}
```

配置完的导航栏效果如下：

![导航栏](https://github.com/Veminem/vuepress-theme-oneN/blob/1.x/images/3.png)

### 音乐控件

在 [[1.1.1]](https://github.com/Veminem/vuepress-theme-oneN/releases/tag/1.1.1) 版本中，我为博客添加了背景音乐功能。如果你想为博客添加背景音乐，只需要在配置文件 `config.js` 中添加 `music` 字段即可：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    music: // 链接
  }
}
```

音乐链接可以作为静态资源存放在 `.vuepress/public` 目录下，若如此做，对应的属性值应该为 `‘/musicFile.mp3’`。

**（推荐）** 你也可以通过引用音乐超链接，直接加载。这样做可以缓解博客资源加载压力，毕竟如果是将博客部署到 GitHub Pages 中的话，国内无法保证稳定访问。

背景音乐的状态通过头像控制，当鼠标移入头像组件时，背景音乐将暂停，移出则继续播放。若单击头像组件，背景音乐将暂停，反之继续播放。

### 页脚

页脚支持自定义名称和图标，只需要在配置文件 `config.js` 中添加如下字段：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    name: 'yourName',
    footer: {
      spin: true,      // 是否旋转: 默认 false
      type: 'Chrome',  // 图标样式: 默认 `Chrome`
      theme: 'filled'  // 图标主题: filled (实心, 默认), outline (描线)
    }
  }
}
```

其中图标主题有两个属性可选：`filled`、`outline`，分别是实心和描线。

配置完的页脚效果如下：

![页脚](https://github.com/Veminem/vuepress-theme-oneN/blob/1.x/images/4.png)

### 自定义图标

oneN 使用 [ant-design-vue](https://vue.ant.design/components/icon-cn/) 图标库，因此你可以自定义图标样式，如上面提到的导航栏 `navbar` 和页脚 `footer` ，只需将其对应 `title` 属性值换成图标库中其他图标的 `title` 即可。

### 自定义颜色

 如果要对主题[默认预设]( https://github.com/Veminem/vuepress-theme-oneN/blob/master/styles/palette.styl )的样式应用简单的颜色替换，或者定义一些颜色变量供以后使用，你可以创建一个 `.vuepress/styles/palette.styl` 文件。

 你可以调整一些颜色变量：

```stylus
// 默认值
// 文本
$textColor = #2c3e50      // 主要
$varColor = #d63200       // 变量
$accentColor = #42b983    // 活动
$warningColor = #ffe564   // 提示
$dangerColor = #ff0000    // 警告

// 背景
$bgColor = #ffffff        // 主要
$viceBgColor = #f3f5f7    // 辅助
$codeBgColor = #282c34    // 代码块

// 渐变色
$gradientColor = linear-gradient(to bottom right, $accentColor, #2c3e50c7)
```

> 注意，你应该**只在**这个文件中写入颜色变量。因为 `palette.styl` 将在根的 stylus 配置文件的末尾引入，作为配置，它将被多个文件使用，所以一旦你在这里写了样式，你的样式就会被多次复制。

## MarkDown 扩展

 VuePress 提供了对 [YAML front matter](https://jekyllrb.com/docs/frontmatter/) 开箱即用的支持，你可以在每个 `.md` 文件添加相应的字段。

更多关于在 VuePress 使用 MarkDown 写作的内容请阅读 [VuePress 官方文档 - MarkDown 扩展](https://vuepress.vuejs.org/zh/guide/markdown.html#markdown-%E6%8B%93%E5%B1%95)。

### 元信息

你应该为每个 `.md` 文件添加如下字段，以致 oneN 主题在侧边栏的三级导航中正确渲染出序号和标题。

```yaml
---
index: 序号
title: 标题
---
```

### 一级标题

如果需要在内容页面中显示文档标题，你可以通过在文档中嵌入字段 `{{ $frontmatter.title }}`。

一般的做法是在文档开头作为一级标题显示：

```markdown
# {{ $frontmatter.title }}
```

### 参考选项

如果你所创建的内容想要标记引用出处或转载来源，你可以在每个 `.md` 文件添加如下字段：

```yaml
---
references:
- author:
  title:
  link:
- author:
  title:
  link:
- ...
---
```

对应几个引用出处就添加几个子字段。其中 `link` 可以省略，若省略标题将不会被渲染为超链接。
