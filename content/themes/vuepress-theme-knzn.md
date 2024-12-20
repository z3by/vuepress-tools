---
author:
  avatar: https://private-avatars.githubusercontent.com/u/26917599?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU0NDAsIm5iZiI6MTczNDY1NDI0MCwicGF0aCI6Ii91LzI2OTE3NTk5In0.KXaJm_K9-g2Omn6IIcxt-AzFvEIQZNdAPDCpEf9YAnY&v=4
  email: null
  name: "\u524D\u7AEF\u7A0B\u5E8F\u733F"
  url: null
  username: zhb333
bugs: https://github.com/zhb333/vuepress-theme-knzn/issues
category: themes
date: '2022-05-22T16:35:39.421Z'
deprecated: false
description: blog theme for vuepress2
downloads: null
homepage: https://github.com/zhb333/vuepress-theme-knzn#readme
keywords:
- vuepress-theme
- vuepress
- blog-theme
- blog
- theme
license: MIT License
maintainers: null
name: vuepress-theme-knzn
npm: https://www.npmjs.com/package/vuepress-theme-knzn
publisher:
  avatar: null
  email: zhanghuanbiao@outlook.com
  name: null
  url: null
  username: zhb333
repository: https://github.com/zhb333/vuepress-theme-knzn
score: 0.5235357094313732
stars: 13
unstable: false
version: 1.0.6
watchers: 13

---

# vuepress-theme-knzn

一个基于 Vuepress2 的博客主题， 点击 [demo](https://www.knzn.net/) or [gh-pages](https://zhb333.github.io/vuepress-theme-knzn/) 查看演示效果

## 一、安装

你可以直接 `fork` 或 `clone` 源码进行修改, 也可以通过 `npm` 安装使用

- **步骤 1**: 创建并进入一个新目录

```sh
mkdir vuepress-starter
cd vuepress-starter
```

- **步骤 2**: 初始化项目

```sh
git init
yarn init # or npm init
```

- **步骤 3**: 将默认的临时目录和缓存目录添加到 .gitignore 文件中

```sh
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

- **步骤 4**: 将 VuePress、 vuepress-theme-knzn 安装为本地依赖

```sh
yarn add -D vuepress@next vuepress-theme-knzn
# or npm install -D vuepress@next vuepress-theme-knzn
```

- **步骤 5**: 在 package.json 中添加一些 scripts

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

- **步骤 6**: 创建博客网址首页

  你也可以直接把源码中的 `docs` 目录直接复制到你本地

```sh
mkdir docs
touch docs/index.md
```

- **步骤 7**: 配置主题

```sh
mkdir docs/.vuepress
touch docs/.vuepress/config.ts
```

`docs/.vuepress/config.ts`

```ts
import { defineUserConfig } from 'vuepress'
import KnznTheme from 'vuepress-theme-knzn'

export default defineUserConfig({
  // 站点配置
  lang: 'zh-CN',
  title: 'knzn.net',
  description: '大前端知识分享网站',
  theme: KnznTheme({}),
})
```

- **步骤 8**: 在本地启动服务器来开发你的文档网站

```sh
yarn docs:dev # or npm run docs:dev
```

## 二、主题配置

### 网站相关

- **logo?: string**

  网站 logo 图片

- **darkLogo?: string**

  暗黑模式 logo 图片

- **backgroundImage?: string**

  背景图片

- **darkBackgroundImage?: string**

  暗黑模式 背景图片

- **postImage?: string**

  文章简介图片, 也可以通过 `Frontmatter` 设置特定文章的简介图片

- **darkPostImage?: string**

  暗黑模式 文章简介图片

- **particlesOptions?: ISourceOptions**

  背景 `canvas` 动画配置, 详情请查看 [tsparticles](https://github.com/matteobruni/tsparticles), 点击 [tsparticles examples](https://codesandbox.io/examples/package/tsparticles) 查看一些可用的 `ISourceOptions`

### 博主信息相关

- **blogger?: string**

  博主名称

- **slogan?: string**

  个人简介

- **avatar?: string**

  头像

- **darkAvatar?: string**

  暗黑模式 头像

- **medias?: MediaItem[]**

  其它媒体

  例如:

  ```ts
  medias: [
      { link: 'mailto:1140457303@qq.com', icon: 'email' },
      {
        link: 'http://wpa.qq.com/msgrd?v=3&uin=1140457303&site=qq&menu=yes',
        icon: 'QQ',
      },
      { link: 'https://www.jianshu.com/u/f22487800f07', icon: 'jianshu' },
      { link: 'https://gitee.com/zhanghuanbiao', icon: 'gitee' },
      { link: 'https://github.com/zhb333', icon: 'github' },
    ],
  ```

  这里支持的 `icon` 类型有：

  ```ts
  // 支持的多媒体类型
  export type MediaType =
    | 'pinterest'
    | 'youtube'
    | 'zhihu'
    | 'linkedin'
    | 'facebook'
    | 'instagram'
    | 'QQ'
    | 'twitter'
    | 'gitlab'
    | 'github'
    | 'email'
    | 'gitee'
    | 'jianshu'
  ```

### 数据显示相关

- **perPage?: number**

  列表页显示的文章个数, 默认值： `10`

- **maxCategories?: number**

  主页显示分类的个数, 默认值： `6`

- **maxTags?: number**

  主页显示的标签个数, 默认值： `10`

### 页脚信息相关

- **beian?: string**

  备案号, 默认值： `Apache-2.0`

- **beianUrl?: string**

  备案查询地址, 默认值： `https://beian.miit.gov.cn/#/Integrated/index`

- **siteStartDate?: string**

  网址起始年份, 默认值： `1990`

### 评论相关

- **comment?: Comment**

  评论配置。评论系统借助了 [Giscus](https://giscus.app/zh-CN), 点击进入，填写相关选项，会生成相应的配置, 然后按照下面的要求配置主题

  ```ts
  export type Comment = {
    repo: `${string}/${string}` // 仓库 必须，string，格式：user_name/repo_name
    repoId: string // 仓库 ID 必须，string，在 Giscus 官网上生成
    category: string // discussion 分类名 必须，string
    categoryId: string // discussion 分类 ID 必须，string，在 Giscus 官网上生成
    lang?: string // 语言 可选，string，default="auto"（跟随网站语言，如果 Giscus 不支持你的网站的语言，则会
  }
  ```

  实际案例:

  ```ts
  comment: {
      repo: 'zhb333/vuepress-theme-knzn',
      repoId: 'R_kgDOHSwV_A',
      category: 'General',
      categoryId: 'DIC_kwDOHSwV_M4CPHIA',
    },
  ```

### 其它配置

- **dirname?: string**
  文章存放路径, 默认值：`docs`

- **navbar?: MenuItem[]**
  导航, 默认情况下，你并不需要配置，会自动读取 `dirname` 下的所有 `**/*.md` 文件，生成导航及侧边栏

### 导航与侧边栏

**默认情况下，你并不需要配置，会自动读取 `dirname` 下的所有 `**/\*.md` 文件，生成导航及侧边栏\*\*

## 三、 Frontmatter

- **author?: string**

  文章作者, 如果不提供，会使用 `git` 提交时的 `user.name`

- **date?: string**

  写作日期, 如果不提供，会使用 `git` 提交时的 `updatedtime`

- **tags?: string[]**

  标签列表

- **categories?: string[]**

  分类列表

- **postImage?: string**

  文章简介图片, `Frontmatter` 优先级比配置项 `darkPostImage` 和 `postImage` 更高

完整的 `Frontmatter` 例子

```md
---
title: 文章标题
author: 前端程序猿
tags:
  - javascript
  - vue
categories:
  - vuepress开发博客主题
postImage: /images/post.webp
---
```

## 四、规范

### 必要的 `index.md`

- `<dirname>/index.md`

  **必须**, 作为网站的首页, 可以直接提供一个空文件， 这个页面的内容并不会被渲染，如果不提供这个文件，打包后的代码将无法正常访问

- `<dirname>/**/index.md`
  **必须**, 作为此当前文件夹的简介页

### 文章编写规范

```md
---
title: 标题
author: 作者
tags:
  - 标签一
  - 标签二
categories:
  - 分类一
postImage: 简介图片地址
---

文章摘录, 写在 `<!-- more -->`上面, 上下有空行

<!-- more -->
```

### 目录规范

可以直接参照[源码](https://github.com/zhb333/vuepress-theme-knzn)的 `/docs` 目录，并查看 [预览](https://www.knzn.net/)

## 五、完整配置演示

```ts
import { defineUserConfig } from 'vuepress'
import KnznTheme from '../../src/node'
// import { particlesOptions } from './particlesOptions'

export default defineUserConfig({
  // 站点配置
  lang: 'zh-CN',
  title: 'knzn.net',
  description: '大前端知识分享网站',
  // debug: true,
  theme: KnznTheme({
    // logo
    logo: '/images/logo-light.svg',
    darkLogo: '/images/logo-dark.svg',
    // 背景图片
    backgroundImage: '/images/bg.svg',
    darkBackgroundImage: '/images/bg-dark.jpg',
    // 文章简介图片
    // postImage: 'https://v2.vuepress.vuejs.org/images/hero.png',
    darkPostImage: '/images/post-dark.svg',
    // 背景canvas 动画配置
    // particlesOptions,

    /**
     * 博主信息相关
     */
    // 博主名称
    blogger: '前端程序猿',
    // 铭言
    slogan: '种一棵树最好的时间是十年前，其次是现在！',
    // 头像
    avatar: '/images/avatar.jpg',
    darkAvatar: '/images/images/avatar-dark.jpg',
    // 其它媒体
    medias: [
      { link: 'mailto:1140457303@qq.com', icon: 'email' },
      {
        link: 'http://wpa.qq.com/msgrd?v=3&uin=1140457303&site=qq&menu=yes',
        icon: 'QQ',
      },
      { link: 'https://www.jianshu.com/u/f22487800f07', icon: 'jianshu' },
      { link: 'https://gitee.com/zhanghuanbiao', icon: 'gitee' },
      { link: 'https://github.com/zhb333', icon: 'github' },
    ],

    /**
     * 数据显示相关
     */
    // 列表页显示的文章个数
    perPage: 10,
    // 主页显示分类的个数
    maxCategories: 6,
    // 主页显示的标签个数
    maxTags: 10,

    // 导航
    // navbar: [],

    /**
     *  页脚相关配置
     */
    // 备案号
    beian: '粤ICP备20016112号-2',
    // 备案查询地址
    beianUrl: '',
    // 网址起始时间
    siteStartDate: '2018',
    comment: {
      repo: 'zhb333/vuepress-theme-knzn',
      repoId: 'R_kgDOHSwV_A',
      category: 'General',
      categoryId: 'DIC_kwDOHSwV_M4CPHIA',
    },
  }),
})
```

一个配件炫酷的 [particlesOptions](https://particles.js.org/) 配置

```ts
export const particlesOptions = {
  fpsLimit: 120,
  particles: {
    move: {
      enable: true,
      random: false,
      speed: 2,
      straight: false,
    },
    number: { value: 100, density: { enable: true, value_area: 1000 } },
    color: { value: ['#aa73ff', '#f8c210', '#83d238', '#33b1f8'] },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#fff' },
      polygon: { nb_sides: 5 },
      image: { src: 'img/github.svg', width: 100, height: 100 },
    },
    opacity: {
      value: 0.6,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 2,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: false },
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
}
```
