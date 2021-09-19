---
author:
  avatar: https://avatars.githubusercontent.com/u/4708070?v=4
  email: thomas@venturini.codes
  name: Thomas Venturini
  url: null
  username: tjventurini
bugs: https://github.com/tjventurini/vuepress-plugin-zengarden-posts/issues
category: plugin
date: '2020-05-06T16:10:40.575Z'
deprecated: false
description: Provides this.$posts for vuepress.
downloads: null
homepage: https://github.com/tjventurini/vuepress-plugin-zengarden-posts#readme
keywords:
- vuepress
- vuepress
- plugin
- zengarden
license: false
maintainers: null
name: vuepress-plugin-zengarden-posts
npm: https://www.npmjs.com/package/vuepress-plugin-zengarden-posts
publisher:
  avatar: null
  email: thomas@venturini.codes
  name: null
  url: null
  username: tjventurini
repository: https://github.com/tjventurini/vuepress-plugin-zengarden-posts
score: 0.3479392008114699
stars: 0
unstable: false
version: 1.0.0
watchers: 0

---

# VuePress Plugin Zengarden Posts

Enables you to filter for the posts of your blog and expose it as `this.$posts` in Vue.

## Installation

```bash
npm i --save-dev vuepress-plugin-zengarden-posts
# or 
yarn add -D vuepress-plugins-zengarden-posts
```

## Usage

Add the following to your `config.js` or `index.js`.

```javascript
['zengarden-posts'],
```

Now you can access your posts through `this.$posts` in the frontend.

## Configuration

If you have your posts somewhere else then the default `posts` directory, then you need to add some configuration.

```javascript
['zengarden-posts', {
    path: '/articles/'
}]
```

