---
author:
  avatar: https://avatars.githubusercontent.com/u/25785330?v=4
  email: null
  name: Xzhi
  url: null
  username: GitHub-Xzhi
bugs: https://github.com/GitHub-Xzhi/vuepress-plugin-add-copyright/issues
category: plugin
date: '2021-05-06T17:28:24.661Z'
deprecated: false
description: "\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7248\u6743\u7684VuePress\u63D2\u4EF6\
  \u3002A VuePress plugin which add custom copyright."
downloads: null
homepage: https://github.com/GitHub-Xzhi/vuepress-plugin-add-copyright#readme
keywords:
- vuepress
- vuepress-plugin
- copyright
- copy
- markdown
- "\u7248\u6743"
- "\u6DFB\u52A0\u7248\u6743"
- "\u81EA\u5B9A\u4E49\u7248\u6743"
- "\u81EA\u5B9A\u4E49\u590D\u5236\u884C\u4E3A"
license: MIT License
maintainers: null
name: '@xzhi/vuepress-plugin-add-copyright'
npm: https://www.npmjs.com/package/%40xzhi%2Fvuepress-plugin-add-copyright
publisher:
  avatar: null
  email: cx_zhi@qq.com
  name: null
  url: null
  username: xzhi
repository: https://github.com/GitHub-Xzhi/vuepress-plugin-add-copyright
score: 0.5400160939851255
stars: 0
unstable: false
version: 1.0.2
watchers: 0

---

# vuepress-plugin-add-copyright

[![GitHub license](https://img.shields.io/github/license/GitHub-Xzhi/vuepress-plugin-add-copyright)](https://github.com/GitHub-Xzhi/vuepress-plugin-add-copyright/blob/main/LICENSE) [![npm](https://img.shields.io/npm/v/@xzhi/vuepress-plugin-add-copyright.svg)](https://www.npmjs.com/package/@xzhi/vuepress-plugin-add-copyright) [![npm](https://img.shields.io/npm/dt/@xzhi/vuepress-plugin-add-copyright.svg)](https://www.npmjs.com/package/@xzhi/vuepress-plugin-add-copyright)

## 功能

当用户复制你的 VuePress 站点内容时，该插件会自动添加你定义好的版权信息。

## 效果

![效果图](https://gitee.com/C-Xzhi/pic-store/raw/master/vuepress-plugin-add-copyright/Xzhi_20210428_20-24-54.png)

> 这只是默认的效果，版权信息完全可以根据个人的喜好来定制化。

## 安装

```bash
npm install -D @xzhi/vuepress-plugin-add-copyright
```

##  使用插件

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      '@xzhi/add-copyright',
      {
        // 作者名称
        authorName: 'Xzhi',
        // 触发版权信息或 noCopy 效果的最小的复制文本长度
        minLength: 100,
      }
    ],
  ]
}
```

##  使用 frontmatter

该插件是默认全局开启的，你可以在特定页面的 frontmatter 中进行启用或者禁用这个插件：

```yaml
---
copyright: false # 在特定页面禁用这个插件
---
```

## 配置项

- ### authorName

  - **类型:** `string`
  - **默认值:** `Xzhi`

  作者名称。

- ### disabled

  - **类型:** `boolean`
  - **默认值:** `false`

  是否禁用该插件的功能。

- ### copyrightLoca

  - **类型:** `string`
  - **默认值:** `after`

  版权信息的位置，可选项[before | after]。before：版权信息放在复制文本的前面。after：与before相反。

- ### noCopy

  - **类型:** `boolean`
  - **默认值:** `false`

  是否禁止复制。

- ### minLength

  - **类型:** `number`
  - **默认值:** `100`

  触发版权信息或 noCopy 效果的最小的复制文本长度。

- ### statement

  - **类型:** `string`
  - **默认值:** `著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。`

  版权声明内容。

- ### authorNameTag

  - **类型:** `string`
  - **默认值:** `作者：`

  作者名称标签。

- ### webLinkTag

  - **类型:** `string`
  - **默认值:** `原文：`

  网页链接标签。

- ### boundary

  - **类型:** `string`
  - **默认值:** `\n`

  复制文本与版权信息的边界线符号。

- ### allCustom

  - **类型:** `string`
  - **默认值:** `''`

  完全自定义版权信息内容（权限比较大），#{webLink}是网页链接的占位符。

  例子：
  ```js
  // .vuepress/config.js
  module.exports = {
    plugins: [
      [
        '@xzhi/add-copyright',
        {
          allCustom: '转载请注明本文出自Xzhi的博客（#{webLink}）'
        }
      ],
    ]
  }
  ```
  效果：

  ![效果图](https://gitee.com/C-Xzhi/pic-store/raw/master/vuepress-plugin-add-copyright/Xzhi_20210428_20-24-15.png)
