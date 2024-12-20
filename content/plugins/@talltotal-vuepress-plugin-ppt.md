---
author:
  avatar: https://private-avatars.githubusercontent.com/u/17965996?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUwODAsIm5iZiI6MTczNDY1Mzg4MCwicGF0aCI6Ii91LzE3OTY1OTk2In0.nUFbOBX4EQGACsWcRn74FN3_hASsm9ufLzPDOu9_Ysc&v=4
  email: null
  name: talltotal
  url: null
  username: talltotal
bugs: https://github.com/talltotal/vuepress-plugin-ppt/issues
category: plugins
date: '2020-01-07T05:41:18.056Z'
deprecated: false
description: ppt plugin for vuepress
downloads: null
homepage: https://talltotal.github.io/vuepress-plugin-ppt/
keywords:
- ppt
- vue
- vuepress
- vuepress-plugin
license: MIT License
maintainers: null
name: '@talltotal/vuepress-plugin-ppt'
npm: https://www.npmjs.com/package/%40talltotal%2Fvuepress-plugin-ppt
publisher:
  avatar: null
  email: talltotal@163.com
  name: null
  url: null
  username: talltotal
repository: https://github.com/talltotal/vuepress-plugin-ppt
score: 0.4282313324848662
stars: 3
unstable: true
version: 0.0.5
watchers: 3

---

# [@talltotal/vuepress-plugin-ppt](https://talltotal.github.io/vuepress-plugin-ppt/)

## install
```bash
yarn add -D @talltotal/vuepress-plugin-ppt
# OR npm install -D @talltotal/vuepress-plugin-ppt
```

## Usage
### 在 `config.js` 中引入
```js
module.exports = {
    plugins: ['@talltotal/vuepress-plugin-ppt'] 
}
```


### 在 md 文档中使用
1. 在 `frontmatter` 增加 ppt 组件的配置，以及一些隐藏其他页面元素的设置
    - `showPage` Boolean 是否显示分页下标
    - `listStyle` Object 页面自定义样式，以页码为key
2. 正文部分用 `::: ppt` + `:::` 包裹，中间以 `----` 为分页标识

> 另外，最好在组件外加个容器或自定义布局
> 
> Additionally, you can add a container or custom layout outside the component

```md
---
navbar: false
# ppt options
ppt:
    title: '@talltotal/vuepress-plugin-ppt'
    # whether to display pagination
    showPage: true
    # custom style apply on each page
    baseStyle: 'text-shadow: 0 0 2px rgba(0,0,0,0.2);'
    # custom page-style with page number as 'key'
    listStyle:
        1: 'background-image: url(/imgs/bg.jpg)'
---

::: ppt
# page one
xxxx

----

# page two
xxxx

----

# page three
xxxx
:::
```

### 操作
- 键盘
    - ⬆️⬅️：上一张
    - ⬇️➡️：下一张
- 手势
    - 向左划：上一张
    - 向右划：下一张
