---
author:
  avatar: https://avatars.githubusercontent.com/u/30686223?v=4
  email: howe.personal@gmail.com
  name: LiHowe
  url: null
  username: ziho
bugs: https://github.com/LiHowe/vuepress-plugin-mermaid/issues
category: plugins
date: '2021-11-19T08:46:26.438Z'
deprecated: false
description: A Vuepress-next Plugin for Mermaid
downloads: null
homepage: https://github.com/LiHowe/vuepress-plugin-mermaid
keywords:
- vue
- vuepress
- vuepress-plugin
- vuepress-next
- mermaid
license: MIT License
maintainers: null
name: vuepress-plugin-mermaid-next
npm: https://www.npmjs.com/package/vuepress-plugin-mermaid-next
publisher:
  avatar: null
  email: howe.personal@gmail.com
  name: null
  url: null
  username: ziho
repository: https://github.com/LiHowe/vuepress-plugin-mermaid
score: 0.4904850627984645
stars: 0
unstable: true
version: 0.1.2
watchers: 0

---

# vuepress-plugin-mermaid-next

> This plugin is only for `vuepress-next`

## Usage

### Install

+ npm
+ 
```shell
npm install vuepress-plugin-mermaid-next
```

+ yarn
+ 
```shell
yarn add vuepress-plugin-mermaid-next
```

### `.vuepress/config.ts` or (`config.js`)

```typescript
export default {
  // ...
  plugins: [
    // ...other plugins
    ['mermaid-next', {}]
  ]
  // ...
}
```

### Plugin Settings

You can config mermaid by using plugin settings.

The settings you configured will be use in `mermaid.initialize()`

Fully configuration fields can be find in [Mermaid - Configuration](https://mermaid-js.github.io/mermaid/#/./Setup?id=mermaidapi-configuration-defaults)
