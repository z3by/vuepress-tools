---
author:
  avatar: https://private-avatars.githubusercontent.com/u/49757965?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU2ODAsIm5iZiI6MTczNDY1NDQ4MCwicGF0aCI6Ii91LzQ5NzU3OTY1In0.K7JpAyrX1VIqOyx11F8ItKXTD2j2Luh1QhMVRx-Cz60&v=4
  email: null
  name: Feng L.H.
  url: null
  username: zpfz
bugs: https://github.com/zpfz/vuepress-plugin-graysite/issues
category: plugins
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
score: 0.4315014657135102
stars: 11
unstable: true
version: 0.1.0
watchers: 11

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