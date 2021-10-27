---
author:
  avatar: https://avatars.githubusercontent.com/u/246901?v=4
  email: webmasterish@gmail.com
  name: webmasterish
  url: https://webmasterish.com
  username: webmasterish
bugs: https://github.com/webmasterish/vuepress-plugin-minimal-analytics/issues
category: plugin
date: '2019-01-22T06:17:47.566Z'
deprecated: false
description: Minimal Google Analytics plugin for VuePress
downloads: null
homepage: https://github.com/webmasterish/vuepress-plugin-minimal-analytics
keywords:
- vue
- vuepress
- plugin
- vuepress-plugin
- analytics
- google-analytics
license: MIT License
maintainers: null
name: vuepress-plugin-minimal-analytics
npm: https://www.npmjs.com/package/vuepress-plugin-minimal-analytics
publisher:
  avatar: null
  email: webmasterish@gmail.com
  name: null
  url: null
  username: webmasterish
repository: https://github.com/webmasterish/vuepress-plugin-minimal-analytics
score: 0.42035467384434466
stars: 12
unstable: true
version: 0.1.4
watchers: 12

---

# VuePress Plugin Minimal Google Analytics

> Minimal Google Analytics plugin for VuePress 1.x

[![Build Status](https://img.shields.io/travis/webmasterish/vuepress-plugin-minimal-analytics/master.svg?style=flat-square)](https://travis-ci.org/webmasterish/vuepress-plugin-minimal-analytics)
[![npm version](https://img.shields.io/npm/v/vuepress-plugin-minimal-analytics.svg?style=flat-square)](http://npm.im/vuepress-plugin-minimal-analytics)
[![Greenkeeper badge](https://badges.greenkeeper.io/webmasterish/vuepress-plugin-minimal-analytics.svg?style=flat-square)](https://greenkeeper.io/)
[![MIT License](https://img.shields.io/npm/l/express.svg?style=flat-square)](http://opensource.org/licenses/MIT)


## Why

Because sometimes all you need is just the page views
without all the bloated libraries.


## What

This plugin is based on the official VuePress plugin  [@vuepress/plugin-google-analytics](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-google-analytics) - [npm](https://www.npmjs.com/package/@vuepress/plugin-google-analytics).

The difference betweeen this plugin and the official one is that it uses a light
version of the tracking code as introduced
by 🌱 [minimalanalytics.com](https://minimalanalytics.com/) - source code in [this gist](https://gist.github.com/DavidKuennen/443121e692175d6fc145e1efb0284ec9).


## Install


```sh
$ npm install -D vuepress-plugin-minimal-analytics

# or

$ yarn add -D vuepress-plugin-minimal-analytics
```


## Usage

Add `vuepress-plugin-minimal-analytics` in your site or theme config file.

> See [official docs on using a plugin](https://vuepress.vuejs.org/plugin/using-a-plugin.html)


```js
// .vuepress/config.js
// or
// .vuepress/theme/index.js

// replace 'XX-XXXXXXXXX-X' with your tracking id
module.exports = {
  plugins: [
    ['minimal-analytics', {ga: 'XX-XXXXXXXXX-X'}]
  ]
}
```


## Options

> See Plugin Option API [official docs](https://vuepress.vuejs.org/plugin/option-api.html)

### ga

- Type: `string`
- Default: `undefined`

Provide the Google Analytics ID to enable integration.


## Reference

- VuePress official [plugin docs](https://vuepress.vuejs.org/plugin/)
- VuePress official [@vuepress/plugin-google-analytics](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-google-analytics) - [npm](https://www.npmjs.com/package/@vuepress/plugin-google-analytics)
- Minimal Analytics Snippet [Gist](https://gist.github.com/DavidKuennen/443121e692175d6fc145e1efb0284ec9)
  by [@DavidKuennen](https://github.com/DavidKuennen)
- Google Analytics official [endpoint documentation](https://developers.google.com/analytics/devguides/collection/protocol/v1/reference)


## License

MIT © [webmasterish](https://webmasterish.com)
