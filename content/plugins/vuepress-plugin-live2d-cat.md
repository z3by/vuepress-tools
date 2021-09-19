---
author:
  avatar: https://avatars.githubusercontent.com/u/19198355?v=4
  email: null
  name: null
  url: null
  username: artiely
bugs: https://github.com/artiely/vuepress-plugin-live2d-cat/issues
category: plugin
date: '2020-04-07T03:52:29.070Z'
deprecated: false
description: 1. install `npm i vuepress-plugin-live2d-cat -S`
downloads: null
homepage: https://github.com/artiely/vuepress-plugin-live2d-cat#readme
keywords: null
license: false
maintainers: null
name: vuepress-plugin-live2d-cat
npm: https://www.npmjs.com/package/vuepress-plugin-live2d-cat
publisher:
  avatar: null
  email: 1119696785@qq.com
  name: null
  url: null
  username: artiely
repository: https://github.com/artiely/vuepress-plugin-live2d-cat
score: 0.37663848283167584
stars: 0
unstable: true
version: 0.1.6
watchers: 0

---

# vuepress-plugin-live2d-cat

## How to use

1. install `npm i vuepress-plugin-live2d-cat -S`

2. add in `config.js`

```js
module.exports = {
  plugins: [
    "vuepress-plugin-live2d-cat",
  ]
}
```
## component
`<Cat theme=""/>`
theme is `dark`or`light`
```vue
<Cat :theme="theme" style="position:fixed;left:0;bottom:50px" />
```
## Tip

- This plugin supports `vuepress 1.x`
- This plugin displays a white and black cat based on the theme
- This plugin is adapted from vuepress-plugin-cat
## Demo

- https://artiely.gitee.io
- https://artiely.github.io