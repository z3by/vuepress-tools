---
author:
  avatar: https://avatars.githubusercontent.com/u/49757965?v=4
  email: null
  name: Feng L.H.
  url: null
  username: zpfz
bugs: https://github.com/zpfz/vuepress-plugin-graysite/issues
category: plugin
date: '2020-04-03T16:33:29.198Z'
deprecated: false
description: Plug-ins that gray your site for VuePress.
downloads: null
homepage: https://github.com/zpfz/vuepress-plugin-graysite
keywords:
- pray
- gray
- vue
- vuepress
- mourn
license: MIT License
maintainers: null
name: vuepress-plugin-graysite
npm: https://www.npmjs.com/package/vuepress-plugin-graysite
publisher:
  avatar: null
  email: zpfz@seeyoz.cn
  name: null
  url: null
  username: seeyoz
repository: https://github.com/zpfz/vuepress-plugin-graysite
score: 0.3245963305682249
stars: 9
unstable: true
version: 0.1.0
watchers: 9

---

<h1 align="center">vuepress-plugin-graysite</h1>
<div align="center">

Plug-ins that gray your site for VuePress.

![Version](https://img.shields.io/github/package-json/v/zpfz/vuepress-plugin-graysite?style=flat-square)
![NPM](https://img.shields.io/npm/l/vuepress-plugin-graysite?style=flat-square)

</div>

## Install

```sh
yarn add -D vuepress-plugin-graysite
# OR npm install -D vuepress-plugin-graysite
```

## Use

```js
module.exports = {
  plugins: ['graysite']
}
```
## Config
```js
module.exports = {
  plugins: [
    ['graysite',{
      startDate: '2020-04-03 00:00:00',
      endDate: '2020-04-04 23:59:59'
    }]
  ]
}
```

## Option(required)

### startDate
- Type: `date`
- Default: `null`   
Set start date for mourning day.

### endDate
- Type: `date`
- Default: `null`    
Set end date for mourning day.