---
author:
  avatar: https://avatars.githubusercontent.com/u/8433587?v=4
  email: null
  name: Peter Thaleikis
  url: https://www.releasecandidate.dev
  username: spekulatius
bugs: https://github.com/spekulatius/vuepress-plugin-adsense/issues
category: plugin
date: '2021-01-10T10:35:51.099Z'
deprecated: false
description: Google AdSense Plugin for VuePress
downloads: null
homepage: https://github.com/spekulatius/vuepress-plugin-adsense
keywords:
- vue
- vuepress
- plugin
- vuepress-plugin
- adsense
- monetization
license: MIT License
maintainers: null
name: vuepress-plugin-adsense
npm: https://www.npmjs.com/package/vuepress-plugin-adsense
publisher:
  avatar: null
  email: peter.thaleikis@gmail.com
  name: null
  url: null
  username: spekulatius
repository: https://github.com/spekulatius/vuepress-plugin-adsense
score: 0.3831737783831466
stars: 0
unstable: true
version: 0.0.3
watchers: 0

---

# Google AdSense Plugin for VuePress

Sometimes you might want ad some ads to monetize your VuePress-based documentation site or blog.


## Install

To install the VuePress plugin run one of the following commands:

```sh
npm install vuepress-plugin-adsense

# or

yarn add vuepress-plugin-adsense
```


## Configuration

Add the vuepress plugin in your site or theme config file. The configuration is done as part of the plugin-configuration. Your configuration file is usually located under `.vuepress/config.js`. Extend it with this line:

```js
module.exports = {
  plugins: [
    'google-adsense': { adClient: 'ca-pub-9502576386405849' }

    // other plugins
    // ...
  ]
}
```

You will get the required parameters from Google AdSense.

For more details on how to work with VuePress plugins check the [official docs](https://vuepress.vuejs.org/plugin/using-a-plugin.html).


## License

This package is release under the MIT license by [Peter Thaleikis](https://releasecandidate.dev/).
