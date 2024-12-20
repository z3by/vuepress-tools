---
author:
  avatar: https://private-avatars.githubusercontent.com/u/5937330?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUyMDAsIm5iZiI6MTczNDY1NDAwMCwicGF0aCI6Ii91LzU5MzczMzAifQ.uRXDeiGgqDDlJ9iJqWdJPWMGeUrrxYLX_OXh4IhFjsg&v=4
  email: i@linquan.name
  name: LinQuan
  url: null
  username: mlinquan
bugs: https://github.com/mlinquan/vuepress-plugin-baidu-tongji/issues
category: plugins
date: '2018-12-02T16:25:43.096Z'
deprecated: false
description: Baidu-tongji plugin for vuepress
downloads: null
homepage: https://github.com/mlinquan/vuepress-plugin-baidu-tongji#readme
keywords:
- documentation
- vue
- vuepress
- generator
license: false
maintainers: null
name: vuepress-plugin-baidu-tongji
npm: https://www.npmjs.com/package/vuepress-plugin-baidu-tongji
publisher:
  avatar: null
  email: i@linquan.name
  name: null
  url: null
  username: mlinquan
repository: https://github.com/mlinquan/vuepress-plugin-baidu-tongji
score: 0.46664643631996194
stars: 0
unstable: false
version: 1.0.1
watchers: 0

---

# [vuepress-plugin-baidu-tongji](https://github.com/mlinquan/vuepress-plugin-baidu-tongji)

> Baitu tongji plugin for vuepress

## Install

```bash
yarn add -D vuepress-plugin-baidu-tongji
# OR npm install -D vuepress-plugin-baidu-tongji
```

## Usage

```javascript
module.exports = {
  plugins: ['vuepress-plugin-baidu-tongji', {
    hm: 'abcdefghijklmnopqrstuvwxyz123456'
  }]
}
```
or
```javascript
module.exports = {
  plugins: ['baidu-tongji', {
    hm: 'abcdefghijklmnopqrstuvwxyz123456'
  }]
}
```
or
```javascript
module.exports = {
  plugins: {
    'baidu-tongji': {
      hm: 'abcdefghijklmnopqrstuvwxyz123456'
    }
  }
}
```

## Options

### hm

- Type: `string`
- Default: `undefined`

Provide the Baidu Tongji ID to enable integration.
