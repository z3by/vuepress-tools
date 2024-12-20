---
author:
  avatar: https://private-avatars.githubusercontent.com/u/4708070?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUxNDAsIm5iZiI6MTczNDY1Mzk0MCwicGF0aCI6Ii91LzQ3MDgwNzAifQ.woXwN_4Oj5F-FE4L_MjzZuskUFSYdwUhpZS_yiEYNLA&v=4
  email: thomas@venturini.codes
  name: Thomas Venturini
  url: null
  username: tjventurini
bugs: https://github.com/tjventurini/vuepress-plugin-zengarden-home/issues
category: plugins
date: '2020-05-05T16:53:21.304Z'
deprecated: false
description: Creates a homepage for your VuePress site.
downloads: null
homepage: https://github.com/tjventurini/vuepress-plugin-zengarden-home#readme
keywords:
- vuepress
- vuepress
- plugin
- zengarden
license: MIT License
maintainers: null
name: vuepress-plugin-zengarden-home
npm: https://www.npmjs.com/package/vuepress-plugin-zengarden-home
publisher:
  avatar: null
  email: thomas@venturini.codes
  name: null
  url: null
  username: tjventurini
repository: https://github.com/tjventurini/vuepress-plugin-zengarden-home
score: 0.45001697249635164
stars: 1
unstable: false
version: 1.0.0
watchers: 1

---

# VuePress Plugin Zengarden Home

Creates homepage for your VuePress site.

## Installation

```bash
npm install -D vuepress-plugin-zengarden-home
# or
yarn add -D vuepress-plugin-zengarden-home
```

## Usage

Add the following to your `config.js` or `index.js` file.

```javascript
['zengarden-home', {
    title: 'Home',
    frontmatter: {
        layout: 'Home'
    }
}],
```