---
author:
  avatar: https://avatars.githubusercontent.com/u/5085501?v=4
  email: null
  name: rqh656418510
  url: null
  username: rqh656418510
bugs: https://github.com/rqh656418510/vuepress-plugin-baidu-seo/issues
category: plugins
date: '2022-05-17T10:08:41.834Z'
deprecated: false
description: Baidu SEO plugin for vuepress v1.x
downloads: null
homepage: https://github.com/rqh656418510/vuepress-plugin-baidu-seo
keywords:
- vuepress
- plugin
- baidu
- tongji
- seo
license: MIT License
maintainers: null
name: vuepress-plugin-baidu-seo
npm: https://www.npmjs.com/package/vuepress-plugin-baidu-seo
publisher:
  avatar: null
  email: 656418510@qq.com
  name: null
  url: null
  username: rqh656418510
repository: https://github.com/rqh656418510/vuepress-plugin-baidu-seo
score: 0.4816728748322572
stars: 0
unstable: true
version: 0.0.1
watchers: 0

---

# vuepress-plugin-baidu-seo

> Baidu SEO plugin for vuepress v1.x

## Install

``` bash
$ yarn add -D vuepress-plugin-baidu-seo

# or

$ npm install -D vuepress-plugin-baidu-seo
```

## Usage

``` js
module.exports = {
  plugins: [
    ['vuepress-plugin-baidu-seo', {
      ignoreLocal: true,
      hm: 'xxxxxxx'
    }]
  ]
}
```

## Options

### Baidu Tongji

#### hm

- Type: `String`
- Default: `undefined`
- Description: the code of baidu tongji

#### ignoreLocal

- Type: `Boolean`
- Default: `false`
- Description: ignore `127.0.0.1` and `localhost` access for baidu tongji