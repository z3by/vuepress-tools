---
author:
  avatar: https://avatars.githubusercontent.com/u/16188742?v=4
  email: ynublow@gmail.com
  name: LinFeng1997
  url: null
  username: blow
bugs: https://github.com/vuejs/vuepress/issues
category: plugin
date: '2019-01-22T15:02:47.463Z'
deprecated: false
description: export-site plugin for vuepress
downloads: null
homepage: https://github.com/LinFeng1997/vuepress-plugin-export-site#readme
keywords:
- documentation
- vue
- vuepress
- generator
license: MIT License
maintainers: null
name: vuepress-plugin-export-site
npm: https://www.npmjs.com/package/vuepress-plugin-export-site
publisher:
  avatar: null
  email: ynublow@gmail.com
  name: null
  url: null
  username: blow
repository: https://github.com/LinFeng1997/vuepress-plugin-export-site
score: 0.2952549924441355
stars: 4
unstable: true
version: 1.0.0-rc.2
watchers: 4

---

# vuepress-plugin-export-site

> export-site plugin for vuepress

## Install
```
npm i vuepress-plugin-export-site
```

## Usage
```
module.exports = {
  plugins: [
  ['vuepress-plugin-export-site', {
     extension: 'pdf'
  }]
  ]
}
```

## Options

1. extension

generator file type.such as pdf.

2. pageReorganization

page reorganization function:
```javascript
{
  extension: 'pdf',
  pageReorganization: pages => pages.slice(0,5)
}
```
