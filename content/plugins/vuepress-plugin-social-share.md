---
author:
  avatar: https://avatars.githubusercontent.com/u/22659150?v=4
  email: ntnyq13@gmail.com
  name: ntnyq
  url: null
  username: ntnyq
bugs: https://github.com/ntnyq/vuepress-plugin-social-share/issues
category: plugins
date: '2022-05-22T12:28:34.062Z'
deprecated: false
description: Social sharing plugin for VuePress
downloads: null
homepage: https://sns.goyfe.com
keywords:
- vuepress
- vuepress-plugin
- share
- social
- social-share
- sns
- facebook
- plugin
- twitter
- weibo
license: MIT License
maintainers: null
name: vuepress-plugin-social-share
npm: https://www.npmjs.com/package/vuepress-plugin-social-share
publisher:
  avatar: null
  email: ntnyq13@gmail.com
  name: null
  url: null
  username: ntnyq
repository: https://github.com/ntnyq/vuepress-plugin-social-share
score: 0.6420260707166252
stars: 30
unstable: false
version: 1.2.1
watchers: 30

---

# vuepress-plugin-social-share

[![CI](https://github.com/ntnyq/vuepress-plugin-social-share/workflows/CI/badge.svg)](https://github.com/ntnyq/vuepress-plugin-social-share/actions)
[![NPM VERSION](https://img.shields.io/npm/v/vuepress-plugin-social-share/next.svg)](https://www.npmjs.com/package/vuepress-plugin-social-share/v/next)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/vuepress-plugin-social-share.svg)](https://www.npmjs.com/package/vuepress-plugin-social-share)
[![LICENSE](https://img.shields.io/github/license/ntnyq/vuepress-plugin-social-share.svg)](https://github.com/ntnyq/vuepress-plugin-social-share/blob/main/LICENSE)

:mega: Social sharing plugin for [VuePress](https://v2.vuepress.vuejs.org)

:book: [Online demo and Docs](https://social-share.ntnyq.com)

## ⚠️ Note

Still using VuePress v1?

Please Checkout branch [main](https://github.com/ntnyq/vuepress-plugin-social-share/tree/main) for detail

## Install

```bash
$ npm install vuepress-plugin-social-share@next -D
# OR
$ yarn add vuepress-plugin-social-share@next -D
```

## Usage

```js
import { defineUserConfig } from 'vuepress'
import { socialSharePlugin } from 'vuepress-plugin-social-share'

export default defineUserConfig({
  plugins: [socialSharePlugin()],
})
```

:mag: [Custom options detail](https://social-share.ntnyq.com/guide/#options)

## Prior Art

Deeply thank to [vue-social-sharing](https://github.com/nicolasbeauvais/vue-social-sharing) for the component api source code.

## License

[MIT](./LICENSE) License © 2019-PRESENT [ntnyq](https://github.com/ntnyq)
