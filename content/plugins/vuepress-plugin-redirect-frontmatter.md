---
author:
  avatar: https://avatars.githubusercontent.com/u/4360663?v=4
  email: null
  name: ttskch@gmail.com
  url: null
  username: ttskch
bugs: https://github.com/ttskch/vuepress-plugin-redirect-frontmatter/issues
category: plugin
date: '2020-05-12T05:12:19.219Z'
deprecated: false
description: VuePress plugin to handle redirection via frontmatter
downloads: null
homepage: https://github.com/ttskch/vuepress-plugin-redirect-frontmatter#readme
keywords:
- vue
- vuepress
- vuepress-plugin
- redirect
- frontmatter
license: MIT License
maintainers: null
name: vuepress-plugin-redirect-frontmatter
npm: https://www.npmjs.com/package/vuepress-plugin-redirect-frontmatter
publisher:
  avatar: null
  email: ttskch@gmail.com
  name: null
  url: null
  username: ttskch
repository: https://github.com/ttskch/vuepress-plugin-redirect-frontmatter
score: 0.3494727214529037
stars: 0
unstable: false
version: 1.0.0
watchers: 0

---

# vuepress-plugin-redirect-frontmatter

[![](https://img.shields.io/npm/v/vuepress-plugin-redirect-frontmatter?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-redirect-frontmatter)
[![](https://img.shields.io/npm/dm/vuepress-plugin-redirect-frontmatter?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-redirect-frontmatter)

🎉[VuePress](https://vuepress.vuejs.org/) plugin to handle redirection via frontmatter.

## Installation

```bash
$ yarn add --dev vuepress-plugin-redirect-frontmatter

# or
$ npm install -D vuepress-plugin-redirect-frontmatter
```

## Usage

```js
// .vuepress/config.js
module.exports = {
  plugins: ['redirect-frontmatter'],
}
```

And add `redirectFrom` variable to your page's frontmatter.

```
---
permalink: /current-permalink
redirectFrom: /old-permalink
---
```

You can also specify multiple values.

```
---
permalink: /current-permalink
redirectFrom:
  - /old-permalink1
  - /old-permalink2
  - /old-permalink3
---
```

Enjoy😃
