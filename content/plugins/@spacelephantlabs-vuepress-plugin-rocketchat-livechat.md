---
author:
  avatar: https://avatars.githubusercontent.com/u/45766545?v=4
  email: developers@spacelephant.org
  name: Space Elephant SAS
  url: null
  username: spacelephantbot
bugs: https://github.com/spacelephantlabs/vuepress-plugin-rocketchat-livechat/issues
category: plugin
date: '2021-04-23T20:01:11.167Z'
deprecated: false
description: Rocket.chat Livechat plugin for vuepress >= 1.0
downloads: null
homepage: https://github.com/spacelephantlabs/vuepress-plugin-rocketchat-livechat/
keywords:
- documentation
- vue
- vuepress
- generator
- rocket.chat
license: MIT License
maintainers: null
name: '@spacelephantlabs/vuepress-plugin-rocketchat-livechat'
npm: https://www.npmjs.com/package/%40spacelephantlabs%2Fvuepress-plugin-rocketchat-livechat
publisher:
  avatar: null
  email: developers@spacelephant.org
  name: null
  url: null
  username: spacelephantbot
repository: https://github.com/spacelephantlabs/vuepress-plugin-rocketchat-livechat
score: 0.5077359517915778
stars: 0
unstable: false
version: 1.0.0
watchers: 0

---

# Matomo Vuepress Plugin

Allows Matomo access tracking on vuepress >= 1.0. Does not work on
Vuepress 0.x, requires 1.x alpha branch with plugin support.

This project takes many ideas from
[vue-matomo](https://github.com/AmazingDreams/vue-matomo/), but tries
to make them SSR friendly for vuepress usage.

## Installation

```
npm install vuepress-plugin-matomo
```

or 

```
yarn add vuepress-plugin-matomo
```

## Vuepress Setup

Add the following block to the plugins array of your *config.js* file.

```js
// ...
  plugins: [
    // ... other plugins...
    [
      "vuepress-plugin-matomo":
      {
        'siteId': 1,
        'trackerUrl': "https://my.matomo.url.here/"
      }
    ],
    // ... more plugins...
  ]
// ...
```

Also [see vuepress' plugin page](https://vuepress.vuejs.org/plugin/using-a-plugin.html). This plugin uses [babel-style options](https://vuepress.vuejs.org/plugin/using-a-plugin.html#plugin-options) for configuration.

## Plugin Options

* trackerUrl (string, **Required**)
    * URL where the piwik.php/piwik.js files can be found
* siteID (number, **Required**)
    * Matomo numeric site ID of the site you want to track
* trackerJsFile (string, defaults to "piwik.js", Optional)
    * Name of the js file to call on the matomo server
* trackerPhpFile (string, defaults to "piwik.php", Optional)
    * Name of the php file to call on the matomo server
* enableLinkTracking (boolean, defaults to true, Optional)
    * Enable/disable link click tracking
    
## License

MIT License, see [LICENSE.txt](LICENSE.txt) for more info.
