---
author:
  avatar: https://private-avatars.githubusercontent.com/u/22659150?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUwODAsIm5iZiI6MTczNDY1Mzg4MCwicGF0aCI6Ii91LzIyNjU5MTUwIn0.lDb0VuSBH9_1slQSGFu62ScOaOl5agfsH96DMRWJLD0&v=4
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

```bash
npm install vuepress-plugin-iconify -D
```

```bash
yarn add vuepress-plugin-iconify -D
```

```bash
pnpm add vuepress-plugin-iconify -D
```

## Usage

> See [Official Docs](https://v2.vuepress.vuejs.org/guide/plugin.html#plugin) about how to use a plugin in VuePress.

```js
import { defineUserConfig } from 'vuepress'
import { iconifyPlugin } from 'vuepress-plugin-iconify'

export default defineUserConfig({
  plugins: [iconifyPlugin()],
})
```

Then, you can use the `VpIcon` component in your docs:

```html
<vp-icon
  icon="vscode-icons:file-type-vue"
  width="50px"
/>

<vp-icon
  icon="vscode-icons:file-type-vue"
  width="50px"
  vFlip
/>

<vp-icon
  icon="vscode-icons:file-type-flutter"
  width="50px"
  hFlip
/>

<vp-icon
  icon="fa:github"
  width="50px"
  color="#9944a8"
/>

<vp-icon
  icon="fa:apple"
  width="50px"
  :rotate="90"
/>

<vp-icon
  :icon="{ body: '<path fill=\'green\' d=\'M1393 1215q-39 125-123 250q-129 196-257 196q-49 0-140-32q-86-32-151-32q-61 0-142 33q-81 34-132 34q-152 0-301-259Q0 1144 0 902q0-228 113-374q113-144 284-144q72 0 177 30q104 30 138 30q45 0 143-34q102-34 173-34q119 0 213 65q52 36 104 100q-79 67-114 118q-65 94-65 207q0 124 69 223t158 126zM1017 42q0 61-29 136q-30 75-93 138q-54 54-108 72q-37 11-104 17q3-149 78-257Q835 41 1011 0q1 3 2.5 11t2.5 11q0 4 .5 10t.5 10z\'></path>', width: 1664, height: 1664 }"
  width="50px"
/>
```

## Prior Art

- [iconify](https://iconify.design)

## License

[MIT](./LICENSE) &copy; [@ntnyq](https://github.com/ntnyq)
