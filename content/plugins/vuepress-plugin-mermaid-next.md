---
author:
  avatar: https://avatars.githubusercontent.com/u/30686223?v=4
  email: howe.personal@gmail.com
  name: LiHowe
  url: null
  username: ziho
bugs: https://github.com/LiHowe/vuepress-plugin-mermaid/issues
category: plugins
date: '2022-05-13T09:52:16.682Z'
deprecated: false
description: A Mermaid plugin for vuepress-next
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
score: 0.4591437118112309
stars: 0
unstable: true
version: 0.1.9
watchers: 0

---

# vuepress-plugin-mermaid-next

> This plugin is only for `vuepress-next`

## Usage

### Install

```shell
# use npm
npm install mermaid vuepress-plugin-mermaid-next

# use yarn
yarn add mermaid vuepress-plugin-mermaid-next
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
// or 
import MermaidPlugin from 'vuepress-plugin-mermaid-next'
export default {
  plugins: [
    MermaidPlugin({
      // *optional, plugin option
    })
  ]
}
```

### Custormize

You can config mermaid by using plugin settings.

The settings you configured will be use in `mermaid.initialize()`

Fully configuration fields can be find in [Mermaid - Configuration](https://mermaid-js.github.io/mermaid/#/./Setup?id=mermaidapi-configuration-defaults)

