---
author:
  avatar: https://avatars.githubusercontent.com/u/21698973?v=4
  email: null
  name: null
  url: null
  username: John60676
bugs: https://github.com/John60676/vuepress-plugin-google-adsense2/issues
category: plugin
date: '2021-03-29T09:37:43.147Z'
deprecated: false
description: VuePress 2 plugin - google-adsense
downloads: null
homepage: https://github.com/John60676/vuepress-plugin-google-adsense2#readme
keywords:
- vuepress-plugin
- vuepress
- vuepress 2
- vuepress-next
- plugin
- google
- adsense
license: MIT License
maintainers: null
name: vuepress-plugin-google-adsense2
npm: https://www.npmjs.com/package/vuepress-plugin-google-adsense2
publisher:
  avatar: null
  email: john60676@qq.com
  name: null
  url: null
  username: john60676
repository: https://github.com/John60676/vuepress-plugin-google-adsense2
score: 0.5252306082630034
stars: 3
unstable: false
version: 1.0.2
watchers: 3

---

# vuepress-plugin-google-adsense2

English | [简体中文](README-zh_CN.md)

> Note: This plugin is provided for **VuePress 2**

[Google adsense](https://www.google.com/adsense) plugin for VuePress 2, automatically add [Google Ad](<(https://support.google.com/adsense/answer/9261306)>) to your VuePress site.

[![npm](https://img.shields.io/npm/v/vuepress-plugin-google-adsense2.svg)](https://www.npmjs.com/package/vuepress-plugin-google-adsense2) [![GitHub license](https://img.shields.io/github/license/John60676/vuepress-plugin-google-adsense2.svg)](https://github.com/John60676/vuepress-plugin-google-adsense2/blob/master/LICENSE)

## Install

```sh
yarn add -D vuepress-plugin-google-adsense2
# OR
npm install -D vuepress-plugin-google-adsense2
```

## Usage

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-google-adsense2',
      {
        id: 'ca-pub-xxxxxxx',
      },
    ],
  ],
};
```

More plugins usage, see also: [VuePress Plugins](https://vuepress2.netlify.app/reference/plugin-api.html#plugins)

## Options

### id

- Type: `string`

- Details:

  In the code block provided to you by AdSense, find the word `data-ad-client`. The `id` should start with `'ca-pub-'`. You can follow the instructions [here](https://support.google.com/adsense/answer/7584263?hl=en) to find your AdSense code.

  Or you can use **Publisher ID** and add the string `'ca-'` in front.You can follow the instructions [here](https://support.google.com/adsense/answer/105516?hl=en) to find your **Publisher ID**.
