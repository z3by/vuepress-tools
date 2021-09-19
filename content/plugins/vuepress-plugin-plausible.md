---
author:
  avatar: https://avatars.githubusercontent.com/u/8433587?v=4
  email: null
  name: Peter Thaleikis
  url: https://www.peterthaleikis.com
  username: spekulatius
bugs: https://github.com/spekulatius/vuepress-plugin-plausible/issues
category: plugin
date: '2020-09-09T12:41:21.405Z'
deprecated: false
description: Plausible.io Analytics plugin for VuePress
downloads: null
homepage: https://github.com/spekulatius/vuepress-plugin-plausible
keywords:
- vue
- vuepress
- plugin
- vuepress-plugin
- analytics
- plausible
license: MIT License
maintainers: null
name: vuepress-plugin-plausible
npm: https://www.npmjs.com/package/vuepress-plugin-plausible
publisher:
  avatar: null
  email: peter.thaleikis@gmail.com
  name: null
  url: null
  username: spekulatius
repository: https://github.com/spekulatius/vuepress-plugin-plausible
score: 0.334460112507334
stars: 2
unstable: true
version: 0.0.2
watchers: 2

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
