---
author:
  avatar: https://private-avatars.githubusercontent.com/u/4708070?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUxNDAsIm5iZiI6MTczNDY1Mzk0MCwicGF0aCI6Ii91LzQ3MDgwNzAifQ.woXwN_4Oj5F-FE4L_MjzZuskUFSYdwUhpZS_yiEYNLA&v=4
  email: thomas@venturini.codes
  name: Thomas Venturini
  url: null
  username: tjventurini
bugs: https://github.com/tjventurini/vuepress-plugin-zengarden-posts/issues
category: plugins
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
score: 0.4509271113107041
stars: 1
unstable: false
version: 1.0.0
watchers: 1

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

