---
author:
  avatar: https://avatars.githubusercontent.com/u/28615338?v=4
  email: null
  name: libra
  url: null
  username: Libra11-zz
bugs: https://github.com/Libra11/vuepress-theme-libra/issues
category: themes
date: '2021-01-07T03:47:18.975Z'
deprecated: false
description: a vuepress blog template
downloads: null
homepage: https://github.com/Libra11/vuepress-theme-libra#readme
keywords:
- vuepress
license: false
maintainers: null
name: vuepress-theme-libra
npm: https://www.npmjs.com/package/vuepress-theme-libra
publisher:
  avatar: null
  email: libra085925@gmail.com
  name: null
  url: null
  username: libra121
repository: https://github.com/Libra11/vuepress-theme-libra
score: 0.17447196792202518
stars: 27
unstable: false
version: 1.0.6
watchers: 27

---

# 介绍

主题使用`Vuepress`进行搭建

## 更新日志

- 2020.11.01 ～更改评论样式和默认语言,添加返回顶部功能
- 2020.10.31 ～更改文章目录实现逻辑和样式，修改文章标题显示样式,增加头像转动的小彩蛋,添加 github 评论功能
- 2020.10.21 ～修复目录内容过多导致的标题显示不全问题
- 2020.11.13 ～ 1.0.0 版正式发布到 npm
- 2020.12.22 ～ 修复标签分类的分页 bug 以及移动端个人信息不能自定义 bug
- 2020.12.22 ～ 添加 back to top 功能，添加文章目录功能，添加自定义 logo 功能,更改 QQ 为微信显示二维码的形式
- 2021.1.7 ～ 修复分类过多布局不会自适应的 bug

# 快速上手

首先需要保证你已经全局安装了`vuepress`

```
yarn add -D vuepress # npm install -D vuepress
```

> 在运行项目之前，请确保 blogs 文件夹里面至少有一篇文章，关于如何写文章，请参考[写作](#写作)

## 脚手架方式

```
# 全局安装 vuepress-theme-libra-cli
yarn global add vuepress-theme-libra-cli

# 使用vuepress-theme-libra-cli创建项目
vuepress-theme-libra-cli create <项目名称>

# 创建完成之后

cd <项目名称>
yarn dev
```

配置文件在 docs/.vuepress/config.js

[写作](#写作)

## 普通方式

### 初始化项目

在任何地方创建一个文件夹，这里命名为`my-blog`,命令行进入这个文件夹

```
# 第一步
yarn init -y
# 或者
npm init -y

# 第二步
# 安装vuepress-theme-libra
yarn add vuepress-theme-libra --dev
# 或者
npm install --save-dev vuepress-theme-libra
# 如果使用npm安装，遇到Not Found，那么请将npm源切回 npm.org然后再进行安装
```

安装完成之后，我们定义一下项目的基本目录结构

```
├── docs
│   ├── .vuepress
|       |___config.js  //项目的配置文件
│   └── blogs   // 存放所有博客readme文件,也可以创建文件夹
|       |___a.md
|       |___b.md
├── package.json
|__ node_modules
```

接着在`package.json`中加入下面的命令代码

```
...
"scripts": {
  "dev": "vuepress dev docs"
},
...
```

然后将下面的配置文件复制到`config.js`中,并根据自己的需求更改

```javascript
module.exports = {
  title: "Libra",
  theme: "libra",
  // 部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。
  // base 将会作为前缀自动地插入到所有以 / 开始的其他选项的链接中，所以你只需要指定一次。
  // 比如说你想部署到服务器上跟路径，那么你只需要将base设置为 / 即可。
  base: "/libra-static-blog/",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  // 文章目录和 back to top
  plugins: ["vuepress-plugin-table-of-contents", "@vuepress/back-to-top"],
  // theme:
  themeConfig: {
    // Logo和时间线里的字母（文字）
    logo: "L",
    // 主页
    home: {
      title: "Libra",
      subTitle: "在生活里，我们永远是初学者",
    },
    // 页脚
    footer: {
      // 版权信息
      copyright: "Copyright © 2019-2020 Libra | 版权所有",
    },
    // 个人信息卡片
    infoCard: {
      // 头像
      headerPic: "https://libra321.oss-cn-huhehaote.aliyuncs.com/avatar.jpg",
      // 姓名
      name: "Libra",
      // 邮箱
      mail: "libra085925@gmail.com",
    },
    // 联系人页面
    contact: {
      title: "Hello There !!!!",
      subTitle1: "Thank you for visiting my blog",
      subTitle2: "Hope we can make progress together",
      // QQ二维码地址
      qq:
        "https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/weixin-qrcode.png",
      // 微信二维码地址
      wechat:
        "https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/weixin-qrcode.png",
      // 邮箱
      mail: "libra085925@gmail.com",
      // github地址
      github: "https://github.com/Libra11",
      // 头像图片地址
      headerPic: "https://libra321.oss-cn-huhehaote.aliyuncs.com/avatar.jpg",
    },
    comment: {
      // 是否显示评论列表
      showComment: false,
      // The owner's name of repository to store the issues and comments.
      owner: "Libra11",
      // The name of repository to store the issues and comments.
      repo: "vuepress-theme-libra",
      // The clientId & clientSecret introduced in OAuth2 spec.
      clientId: "",
      clientSecret: "",
    },
  },
};
```

### 写作

在`docs/blogs`里面添加博客文章，文章为`markdown`格式,文章以以下内容开头

```
---
title: Blogging Like a Hacker
category: vue
desc: wo bu zhi dao ni shi shei ke wo zhi dao ni wei le shei
tag:
  - vue
  - javascript
picture: https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/flutter_clean_4.png
date: "2019-10-14"
Update: "2019-10-18"
---
```

- `title`: 文章标题
- `category`: 文章分类
- `desc`: 文章描述
- `tag`: 文章标签
- `picture`: 文章缩略图`thumbnail`
- `date`: 发表日期
- `Update`: 更新日期（可选，没有则默认为发表日期）

添加好文章之后，控制台运行`yarn dev`或者`npm run dev`即可打开预览。

### 部署

控制台运行`vuepress build docs`即可在`.vuepress`文件夹下生成`dist`文件夹，包含了所有`html`、`css`、`js`以及静态文件，然后部署即可。

# 支持

> 给作者买一杯咖啡

![image](https://libra321.oss-cn-huhehaote.aliyuncs.com/github/Group%202.png)
