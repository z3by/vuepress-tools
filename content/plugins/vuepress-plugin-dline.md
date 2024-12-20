---
author:
  avatar: https://private-avatars.githubusercontent.com/u/23148342?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUzODAsIm5iZiI6MTczNDY1NDE4MCwicGF0aCI6Ii91LzIzMTQ4MzQyIn0.hmGGT0HaYe7Mx4iy-lK1FLobCJ_XES2NnLwFavlUAWU&v=4
  email: stwangcq@163.com
  name: wst
  url: null
  username: wangshiting
bugs: https://github.com/laobg/vuepress-plugin-dline/issues
category: plugins
date: '2021-03-01T08:46:53.097Z'
deprecated: false
description: vuepress-theme-plugin
downloads: null
homepage: https://github.com/laobg/vuepress-plugin-dline#readme
keywords:
- vuepress
- theme
- background
license: Apache License 2.0
maintainers: null
name: vuepress-plugin-dline
npm: https://www.npmjs.com/package/vuepress-plugin-dline
publisher:
  avatar: null
  email: stwangcq@163.com
  name: null
  url: null
  username: wangshiting
repository: https://github.com/laobg/vuepress-plugin-dline
score: 0.4517373454781761
stars: 1
unstable: false
version: 1.0.2
watchers: 1

---

# vuepress-plugin-dline
## 预览
[我的博客](https://www.wstee.com)
## 安装
``npm i vuepress-plugin-dline -D``
## 使用
```js
// docs/.vuepres/config.js
module.exports = {
  plugins: [
    [
      'dline',
      {
        zIndex: -1, // 背景层级
        opacity: .9, // 背景透明度
        color: '#666', // 线条颜色 16进制
        count: 166 // 线条密度
      }
    ]
  ]
}

```
