---
author:
  avatar: https://avatars.githubusercontent.com/u/1981996?v=4
  email: leo@getpop.org
  name: Leo
  url: null
  username: leoloso
bugs: https://github.com/leoloso/vuepress-plugin-plausible-analytics/issues
category: plugin
date: '2020-04-21T14:45:38.688Z'
deprecated: false
description: VuePress plugin to add analytics from plausible.io
downloads: null
homepage: https://github.com/leoloso/vuepress-plugin-plausible-analytics
keywords:
- vuepress
- plausible
- analytics
license: MIT License
maintainers: null
name: vuepress-plugin-plausible-analytics
npm: https://www.npmjs.com/package/vuepress-plugin-plausible-analytics
publisher:
  avatar: null
  email: leo@getpop.org
  name: null
  url: null
  username: leoloso
repository: https://github.com/leoloso/vuepress-plugin-plausible-analytics
score: 0.33294053763698933
stars: 2
unstable: true
version: 0.2.1
watchers: 2

---

# vuepress-plugin-plausible-analytics

VuePress plugin to add analytics from plausible.io

## Install

Run command:

```bash
yarn add -D vuepress-plugin-plausible-analytics
```

## Usage

Add in file `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    "plausible-analytics",
  ]
}
```

## Configuration

Pass `domain` to use your custom domain:

```js
module.exports = {
  plugins: [
    ["plausible-analytics", {
      domain: 'stats.yoursite.com'
    }]
  ]
}
```

## License

MIT
