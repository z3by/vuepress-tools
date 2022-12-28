---
author:
  avatar: https://avatars.githubusercontent.com/u/22659150?v=4
  email: ntnyq13@gmail.com
  name: ntnyq
  url: null
  username: ntnyq
bugs: https://github.com/ntnyq/vuepress-plugin-iconify/issues
category: plugins
date: '2022-05-22T13:52:34.234Z'
deprecated: false
description: Using icons more easier in VuePress
downloads: null
homepage: https://vuepress-plugin-iconify.ntnyq.com
keywords:
- vuepress
- vuepress-plugin
- iconify
- icon
- svg
license: MIT License
maintainers: null
name: vuepress-plugin-iconify
npm: https://www.npmjs.com/package/vuepress-plugin-iconify
publisher:
  avatar: null
  email: ntnyq13@gmail.com
  name: null
  url: null
  username: ntnyq
repository: https://github.com/ntnyq/vuepress-plugin-iconify
score: 0.5076148874192048
stars: 0
unstable: true
version: 0.0.2
watchers: 0

---

# vuepress-plugin-iconify

[![CI](https://github.com/ntnyq/vuepress-plugin-iconify/workflows/CI/badge.svg)](https://github.com/ntnyq/vuepress-plugin-iconify/actions)
[![NPM VERSION](https://img.shields.io/npm/v/vuepress-plugin-iconify.svg)](https://www.npmjs.com/package/vuepress-plugin-iconify)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/vuepress-plugin-iconify.svg)](https://www.npmjs.com/package/vuepress-plugin-iconify)
[![LICENSE](https://img.shields.io/github/license/ntnyq/vuepress-plugin-iconify.svg)](https://github.com/ntnyq/vuepress-plugin-iconify/blob/main/LICENSE)

**vuepress-plugin-iconify** is a plugin for [VuePress](https://v2.vuepress.vuejs.org) that adds icons to your documentation.

:book: [Live Demo and Docs](https://vuepress-plugin-iconify.ntnyq.com)

## Install

```shell
$ npm install vuepress-plugin-iconify -D
# or
$ yarn add vuepress-plugin-iconify -D
# or
$ pnpm add vuepress-plugin-iconify -D
```

## Usage

> See [Official Docs](https://v2.vuepress.vuejs.org/guide/plugin.html#plugin) about how to use a plugin in VuePress.

```js
import { defineUserConfig } from '@vuepress/cli'
import { iconifyPlugin } from 'vuepress-plugin-iconify'

export default defineUserConfig({
  plugins: [iconifyPlugin()],
})
```

Then, you can use the `VpIcon` component in your docs:

```markdown
<vp-icon icon="vscode-icons:file-type-vue" width="50px" />

<vp-icon icon="vscode-icons:file-type-vue" width="50px" vertical-flip />

<vp-icon icon="vscode-icons:file-type-flutter" width="50px" horizontal-flip />

<vp-icon icon="fa:github" width="50" color="#24292f" />

<vp-icon icon="fa:apple" width="50" color="#24292f" rotate="90deg" />
```

## Prior Art

- [iconify](https://iconify.design)

## License

[MIT](./LICENSE) &copy; [@ntnyq](https://github.com/ntnyq)
