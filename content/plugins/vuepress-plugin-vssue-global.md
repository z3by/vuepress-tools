---
author:
  avatar: https://avatars.githubusercontent.com/u/66351566?v=4
  email: null
  name: MonoLogueChi
  url: null
  username: u2sb
bugs: https://github.com/u2sb/vuepress-plugin-vssue-global/issues
category: plugins
date: '2022-06-17T02:11:18.634Z'
deprecated: false
description: A comments player plugin for vuepress
downloads: null
homepage: https://github.com/u2sb/vuepress-plugin-vssue-global
keywords:
- Vuepress
- Vuepress-plugin
- Vssue
- Comments
license: Apache License 2.0
maintainers: null
name: vuepress-plugin-vssue-global
npm: https://www.npmjs.com/package/vuepress-plugin-vssue-global
publisher:
  avatar: null
  email: xxwhite@foxmail.com
  name: null
  url: null
  username: monologuechi
repository: https://github.com/u2sb/vuepress-plugin-vssue-global
score: 0.4894413867869486
stars: 2
unstable: true
version: 0.0.3
watchers: 2

---

> 当前版本仅适配 vuepress 1.x

## 演示

- [U2SB](https://www.u2sb.com)
- [xxwhite](https://blog.xxwhite.com)

## 安装

```
yarn add vuepress-plugin-vssue-global
```

## 配置

配置完全继承 [@vssue/vuepress-plugin-vssue](https://vssue.js.org/zh/guide/vuepress.html)，增加配置项如下：

- title: vssue title，支持 ejs 模板
- needComments: 默认是否需要评论区，当配置为 false 时，需文章 frontmatter 添加`comments: true`才会开启评论区。

```js
module.exports = {
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        clientId: "",
        clientSecret: "",
        owner: "",
        repo: "",
      },
    ],
  ],
};
```

## 开启和关闭评论

每篇文章单独控制评论区，需配置 frontmatter

关闭评论区：

```yml
comments: false
```

开启评论区：

```yml
comments: true
```

## 感谢

本插件开发参考了其他同类插件，在此表示感谢

- [@vssue/vuepress-plugin-vssue](https://vssue.js.org/zh/guide/vuepress.html)
- [vuepress-plugin-comment](https://github.com/dongyuanxin/vuepress-plugin-comment)
