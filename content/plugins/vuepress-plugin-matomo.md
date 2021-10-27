---
author:
  avatar: https://avatars.githubusercontent.com/u/34539?v=4
  email: null
  name: kyle@nonpolynomial.com
  url: null
  username: qdot
bugs: https://github.com/qdot/vuepress-plugin-matomo/issues
category: plugin
date: '2019-01-13T07:33:31.239Z'
deprecated: false
description: matomo plugin for vuepress >= 1.0
downloads: null
homepage: https://github.com/qdot/vuepress-plugin-matomo/
keywords:
- documentation
- vue
- vuepress
- generator
- matomo
license: MIT License
maintainers: null
name: vuepress-plugin-matomo
npm: https://www.npmjs.com/package/vuepress-plugin-matomo
publisher:
  avatar: null
  email: kyle@nonpolynomial.com
  name: null
  url: null
  username: qdot
repository: https://github.com/qdot/vuepress-plugin-matomo
score: 0.23211331924391754
stars: 6
unstable: false
version: 1.0.2
watchers: 6

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
