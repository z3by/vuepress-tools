---
author:
  avatar: https://avatars.githubusercontent.com/u/8433587?v=4
  email: null
  name: Peter Thaleikis
  url: null
  username: spekulatius
bugs: https://github.com/spekulatius/vuepress-plugin-web-monetization/issues
category: plugin
date: '2020-06-12T10:28:45.920Z'
deprecated: false
description: Monetize your VuePress site using web-monetization
downloads: null
homepage: https://peterthaleikis.com
keywords:
- vuepress
- vuepress-plugin
- plugin
- monetization
- web-monetization
license: MIT License
maintainers: null
name: vuepress-plugin-web-monetization
npm: https://www.npmjs.com/package/vuepress-plugin-web-monetization
publisher:
  avatar: null
  email: peter.thaleikis@gmail.com
  name: null
  url: null
  username: spekulatius
repository: https://github.com/spekulatius/vuepress-plugin-web-monetization
score: 0.37857913799579956
stars: 10
unstable: true
version: 0.0.2
watchers: 10

---

# VuePress Plugin Web-Monetization

Adds a web-monetization meta tag to your [VuePress](https://github.com/vuejs/vuepress) website. This allows you to monetize your content using the [web-monetization standard](https://webmonetization.org/).


## Installation

```bash
npm install vuepress-plugin-web-monetization

# or

yarn add vuepress-plugin-web-monetization
```


## Usage

You will need to register the plugin with your VuePress website:

```js
plugins: {
    'web-monetization': {
        'address': '$ilp.uphold.com/DrRw6MnEEqBB'
    }
}
```

This includes the address as an optional parameter (here: `$ilp.uphold.com/DrRw6MnEEqBB`). You can also define the address as part of the frontmatter:

```
---
monetization: "$ilp.uphold.com/DrRw6MnEEqBB"
---
```


## Privacy-friendly tracking for VuePress?

If you value privacy, you might like this [VuePress plugin for Umami](https://github.com/spekulatius/vuepress-plugin-umami).


## License

This package is released under the MIT license by [Peter Thaleikis](https://peterthaleikis.com).
