---
author:
  avatar: https://avatars.githubusercontent.com/u/106938?v=4
  email: chris@wwaves.co
  name: Chris Waring
  url: https://wwaves.co/
  username: cwaring
bugs: https://github.com/cwaring/vuepress-plugin-chunkload-redirect/issues
category: plugin
date: '2021-04-16T10:56:14.860Z'
deprecated: false
description: Catch chunkload errors from a stale deploy and route to destination
downloads: null
homepage: https://github.com/cwaring/vuepress-plugin-chunkload-redirect#readme
keywords:
- vuepress
- vuepress-plugin
license: MIT License
maintainers: null
name: vuepress-plugin-chunkload-redirect
npm: https://www.npmjs.com/package/vuepress-plugin-chunkload-redirect
publisher:
  avatar: null
  email: chris@wwaves.co
  name: null
  url: null
  username: cwaring
repository: https://github.com/cwaring/vuepress-plugin-chunkload-redirect
score: 0.5148861944821794
stars: 1
unstable: false
version: 1.0.3
watchers: 1

---

# vuepress-plugin-chunkload-redirect


Clientside apps remain in the browser memory after initial load which is great for performance but if a new build is deployed the JS page chunks _could_ change, resulting in errors when routing to a desired destination.

This plugin fixes that by transparently redirecting to the latest version of the application when a chunk is invalid so you get the best of serverside and clientside routing.

Compatible with Vuepress 1.x

## Usage

```
npm i -D vuepress-plugin-chunkload-redirect
```

### Setup

Add to `config.js` or `theme/index.js`

```
module.exports = {
  plugins: [
    'vuepress-plugin-chunkload-redirect',
  ]
}
```