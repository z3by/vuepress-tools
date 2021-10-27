---
author:
  avatar: https://avatars.githubusercontent.com/u/45766545?v=4
  email: developers@spacelephant.org
  name: Space Elephant SAS
  url: null
  username: spacelephantbot
bugs: https://github.com/spacelephantlabs/vuepress-plugin-matomo-spacelephant/issues
category: plugin
date: '2021-06-21T13:26:07.618Z'
deprecated: false
description: Matomo plugin for vuepress >= 1.0 for Space Elephant's projects
downloads: null
homepage: https://github.com/spacelephantlabs/vuepress-plugin-matomo-spacelephant/
keywords:
- documentation
- vue
- vuepress
- generator
- matomo
- spacelephant
- space elephant
license: MIT License
maintainers: null
name: '@spacelephantlabs/vuepress-plugin-matomo-spacelephant'
npm: https://www.npmjs.com/package/%40spacelephantlabs%2Fvuepress-plugin-matomo-spacelephant
publisher:
  avatar: null
  email: developers@spacelephant.org
  name: null
  url: null
  username: spacelephantbot
repository: https://github.com/spacelephantlabs/vuepress-plugin-matomo-spacelephant
score: 0.5129473032033603
stars: 0
unstable: false
version: 1.1.1
watchers: 0

---

# Matomo Vuepress Plugin for Space Elephant projects

Allows Matomo access tracking on vuepress >= 1.0. Does not work on
Vuepress 0.x, requires 1.x alpha branch with plugin support.

This project is a fork of https://github.com/qdot/vuepress-plugin-matomo, specialized for Space Elephant's projects.

## Installation

```
yarn add vuepress-plugin-matomo-spacelephant
```

## Vuepress Setup

Add the following block to the plugins array of your *config.js* file.

```js
// ...
  plugins: [
    // ... other plugins...
    [
      "vuepress-plugin-matomo-spacelephant":
      {
        'siteId': 1,
      }
    ],
    // ... more plugins...
  ]
// ...
```
## Plugin Options

* siteID (number, **Required**)
    * Matomo numeric site ID of the site you want to track
* trackerUrl (string, Optional)
    * URL where the matomo.php/matomo.js files can be found. Already configured for all Space Elephant's projects
* trackerJsFile (string, defaults to `js/`, Optional)
    * Name of the js file to call on the matomo server
* trackerPhpFile (string, defaults to `r.php`, Optional)
    * Name of the php file to call on the matomo server
* enableLinkTracking (boolean, defaults to `true`, Optional)
    * Enable/disable link click tracking
    
## License

MIT License, see [LICENSE.txt](LICENSE.txt) for more info.
