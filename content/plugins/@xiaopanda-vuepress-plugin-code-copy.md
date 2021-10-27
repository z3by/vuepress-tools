---
author:
  avatar: https://avatars.githubusercontent.com/u/31773900?v=4
  email: null
  name: Pan
  url: null
  username: panxingcheng
bugs: https://github.com/panxingcheng/vuepress-plugin-code-copy/issues
category: plugin
date: '2020-09-21T06:55:52.692Z'
deprecated: false
description: A vuepress plugin that copies code blocks with one click.
downloads: null
homepage: https://github.com/panxingcheng/vuepress-plugin-code-copy#readme
keywords:
- vuepress
- vuepress plugin
- code copy
- copy
- clipboard
license: MIT License
maintainers: null
name: '@xiaopanda/vuepress-plugin-code-copy'
npm: https://www.npmjs.com/package/%40xiaopanda%2Fvuepress-plugin-code-copy
publisher:
  avatar: null
  email: 583353816@qq.com
  name: null
  url: null
  username: panxingcheng
repository: https://github.com/panxingcheng/vuepress-plugin-code-copy
score: 0.4382171485966348
stars: 2
unstable: false
version: 1.0.3
watchers: 2

---

# @xiaopanda/vuepress-plugin-code-copy

[![NPM version](https://badgen.net/npm/v/@xiaopanda/vuepress-plugin-code-copy)](https://npmjs.com/package/@xiaopanda/vuepress-plugin-code-copy) 
[![NPM downloads](https://badgen.net/npm/dm/@xiaopanda/vuepress-plugin-code-copy)](https://npmjs.com/package/@xiaopanda/vuepress-plugin-code-copy) 
[![NPM LICENSE](https://badgen.net/npm/license/@xiaopanda/vuepress-plugin-code-copy)](https://github.com/panxingcheng/vuepress-plugin-code-copy/blob/master/LICENSE)

[English](./README.md) | [中文](./README.zh-CN.md)

> A VuePress plugin that copies code blocks with one click.

## Install

```bash
yarn add -D @xiaopanda/vuepress-plugin-code-copy
# OR 
npm install -D @xiaopanda/vuepress-plugin-code-copy
```

## Usage
The plugin needs to be added to the `plugins` under `.vuepress/config.js` in the VuePress project:

```js
module.exports = {
  plugins: ['@xiaopanda/vuepress-plugin-code-copy'] 
}
```

## Options
This plugin takes a number of options, which can be configured in the `options` object under `plugin`:

```js
module.exports = {
  plugins: [
    ['@xiaopanda/vuepress-plugin-code-copy', {
        buttonStaticIcon: Boolean,
        buttonIconTitle: String,
        buttonAlign: String,
        buttonColor: String
       }
    ]
  ]
}
```

### buttonStaticIcon

* Type: `Boolean`
* Default: `false`

The copy button is only visible when hovers the mouse over the code block, or always visible.

### buttonIconTitle

* Type: `String`
* Default: `Copy`

The title content will appear when the mouse hovers over the copy button.

### buttonAlign

* Type: `String`
* Default: `top`
* Supported options: `top` or `bottom`

The copy button is aligned at the top-right or bottom-right corner of the code block.

### buttonColor

* Type: `String`
* Default: `#ffffff`

The color of the copy button, you can set any [Hex color codes](https://htmlcolorcodes.com/).

## LICENSE

[MIT](./LICENSE)