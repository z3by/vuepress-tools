---
author:
  avatar: https://private-avatars.githubusercontent.com/u/4708070?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUxNDAsIm5iZiI6MTczNDY1Mzk0MCwicGF0aCI6Ii91LzQ3MDgwNzAifQ.woXwN_4Oj5F-FE4L_MjzZuskUFSYdwUhpZS_yiEYNLA&v=4
  email: thomas@venturini.codes
  name: Thomas Venturini
  url: null
  username: tjventurini
bugs: https://github.com/tjventurini/vuepress-plugin-zengarden-tags/issues
category: plugins
date: '2020-05-16T21:22:15.333Z'
deprecated: false
description: "Provides tags for your VuePress blog \U0001F3F7"
downloads: null
homepage: https://github.com/tjventurini/vuepress-plugin-zengarden-tags#readme
keywords:
- vuepress
- vuepress-plugin
- tags
- zengarden
license: MIT License
maintainers: null
name: vuepress-plugin-zengarden-tags
npm: https://www.npmjs.com/package/vuepress-plugin-zengarden-tags
publisher:
  avatar: null
  email: thomas@venturini.codes
  name: null
  url: null
  username: tjventurini
repository: https://github.com/tjventurini/vuepress-plugin-zengarden-tags
score: 0.4545228514528819
stars: 2
unstable: false
version: 1.0.0
watchers: 2

---

# VuePress Plugin Zengarden Tags

Provides tags for your VuePress blog 🏷

## Installation

```bash
npm i --save-dev vuepress-plugin-zengarden-tags
# or
yarn add -D vuepress-plugin-zengarden-tags
```

## Usage

Add the following to your `config.js` or `index.js` file.

```javascript
['zengarden-tags']
```

You should now have `this.$tags` available.

## Configuration

```javascript
['zengarden-tags', {
    key: 'tags',        // the frontmatter key to look for
    path: '/tags/',     // the path to publish the generated pages under
    title: 'Tags',      // the title of the generated page
    tag: 'Layout',      // layout for single tag page
    tags: 'Layout'      // layout for the tags overview page
}]
```



