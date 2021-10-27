---
author:
  avatar: https://avatars.githubusercontent.com/u/5326684?v=4
  email: i@sylingd.com
  name: ShuangYa
  url: null
  username: sylingd
bugs: https://github.com/sylingd/vuepress-baidu-google-analytics/issues
category: plugin
date: '2020-04-18T13:25:20.646Z'
deprecated: false
description: Google-analytics and Baidu-tongji plugin for vuepress
downloads: null
homepage: https://github.com/sylingd/vuepress-baidu-google-analytics
keywords:
- documentation
- vue
- vuepress
- generator
license: MIT License
maintainers: null
name: vuepress-plugin-baidu-google-analytics
npm: https://www.npmjs.com/package/vuepress-plugin-baidu-google-analytics
publisher:
  avatar: null
  email: i@sylingd.com
  name: null
  url: null
  username: shuangya
repository: https://github.com/sylingd/vuepress-baidu-google-analytics
score: 0.45060957921644273
stars: 2
unstable: false
version: 1.0.2
watchers: 2

---

# vuepress-plugin-baidu-google-analytics

[![vuepress](https://img.shields.io/badge/vuepress-%3E%3D%201.0-brightgreen.svg)](https://v1.vuepress.vuejs.org/)
[![npm](https://img.shields.io/npm/v/vuepress-plugin-baidu-google-analytics.svg)](https://www.npmjs.com/package/vuepress-plugin-baidu-google-analytics)
![npm](https://img.shields.io/npm/dt/vuepress-plugin-baidu-google-analytics.svg)

Google analytics and Baidu tongji plugin for vuepress

## Install

```bash
yarn add -D vuepress-plugin-baidu-google-analytics
# OR
npm install -D vuepress-plugin-baidu-google-analytics
```

## Usage

```javascript
module.exports = {
  plugins: [
    ['vuepress-plugin-baidu-google-analytics', {
      hm: 'abcdefghijklmnopqrstuvwxyz123456',
      ga: 'abcdefghijklmnopqrstuvwxyz123456',
      ignore_hash: false
    }]
  ]
}
```

## Options

### hm

- Type: `string`
- Default: `undefined`

Provide the Baidu Tongji ID to enable Baidu Tongji.

### ga

- Type: `string`
- Default: `undefined`

Provide the Google Analytics ID to enable Google Analytics.

### ignore_hash

- Type: `boolean`
- Default: `false`

If enable, same page with different hash (after `#`) will not be count multiple times.