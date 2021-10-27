---
author:
  avatar: https://avatars.githubusercontent.com/u/64388301?v=4
  email: null
  name: wangjia_1919@163.com
  url: null
  username: nine-theme
bugs: https://github.com/nine-theme/vuepress-plugin-pagation/issues
category: plugin
date: '2020-08-13T01:38:10.133Z'
deprecated: false
description: pagation plugin for vuepress
downloads: null
homepage: https://github.com/nine-theme/vuepress-plugin-pagation#readme
keywords:
- vuepress
- pagation
license: MIT License
maintainers: null
name: '@nines/vuepress-plugin-pagation'
npm: https://www.npmjs.com/package/%40nines%2Fvuepress-plugin-pagation
publisher:
  avatar: null
  email: wangjia_1919@163.com
  name: null
  url: null
  username: wangjia_1919
repository: https://github.com/nine-theme/vuepress-plugin-pagation
score: 0.4354107696632047
stars: 0
unstable: true
version: 0.0.5
watchers: 0

---

# @nine-theme/vuepress-theme-nine

![GitHub last commit](https://img.shields.io/github/last-commit/nine-theme/vuepress-plugin-pagation) 
![npm (scoped)](https://img.shields.io/npm/v/@nine-theme/vuepress-plugin-pagation) 
![npm](https://img.shields.io/npm/dt/@nine-theme/vuepress-plugin-pagation) 
![NPM](https://img.shields.io/npm/l/@nine-theme/vuepress-plugin-pagation)

---
> Pagation plugin for vuepress

## 使用

|使用位置|值|
|-|-|
|plugin name|@nine-theme/vuepress-plugin-pagationa|
|component name|Pagation（主题开发时使用）|

```sh
npm install @nine-theme/vuepress-plugin-pagationa
```

## 参数

|name|类型|默认值|
|----|----|----|
|total|number|10|
|perPage|number|10|
|currentPage|number|1|
|getCurrentPage|function|参数 currentPage: 当前页码|

```vue
<Pagation :total="22", :perPage="20" :currentPage="1" @getCurrentPage="get"></Pagation>
```
