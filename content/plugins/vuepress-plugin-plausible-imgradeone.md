---
author:
  avatar: https://avatars.githubusercontent.com/u/30969327?v=4
  email: null
  name: imgradeone
  url: https://www.imgradeone.com
  username: imgradeone
bugs: https://github.com/imgradeone/vuepress-plugin-plausible/issues
category: plugin
date: '2021-09-25T06:07:09.438Z'
deprecated: false
description: Modified Plausible Analytics plugin for VuePress
downloads: null
homepage: https://github.com/imgradeone/vuepress-plugin-plausible
keywords:
- vue
- vuepress
- plugin
- vuepress-plugin
- analytics
- plausible
license: MIT License
maintainers: null
name: vuepress-plugin-plausible-imgradeone
npm: https://www.npmjs.com/package/vuepress-plugin-plausible-imgradeone
publisher:
  avatar: null
  email: imgradeone@outlook.com
  name: null
  url: null
  username: imgradeone
repository: https://github.com/imgradeone/vuepress-plugin-plausible
score: 0.46393098957879536
stars: 0
unstable: true
version: 0.0.3
watchers: 0

---

# Plausible Analytics Plugin for VuePress

This plugin helps to integrate [Plausible Analytics](https://plausible.io/) in your [VuePress](https://vuepress.vuejs.org/) documentation website. Plausible is a alternative to Google Analytics with a focus on privacy.

There is also a list [privacy-focused tracking solutions](https://github.com/spekulatius/awesome-privacy-friendly-web-analytics).


## Install

To install the VuePress plugin, run one of the following commands:

```sh
npm install vuepress-plugin-plausible

# or

yarn add vuepress-plugin-plausible
```


## Configuration

Add the VuePress plugin in your site or theme config file. The configuration is done as part of the plugin configuration. Your configuration file is usually located under `.vuepress/config.js`. Extend it with this line:

```js
module.exports = {
  plugins: [
    'plausible': { domain: 'your-domain.com' },

    // other plugins
    // ...
  ]
}
```

For more details on how to work with VuePress plugins, check out the [official docs](https://vuepress.vuejs.org/plugin/using-a-plugin.html).


## License

This package is released under the MIT license by [Peter Thaleikis](https://peterthaleikis.com).
