---
author:
  avatar: https://avatars.githubusercontent.com/u/5326684?v=4
  email: i@sylingd.com
  name: ShuangYa
  url: null
  username: sylingd
bugs: https://github.com/sylingd/vuepress-copy-via-link/issues
category: plugin
date: '2019-05-18T06:57:50.623Z'
deprecated: false
description: Copy text in vuepress via links
downloads: null
homepage: https://github.com/sylingd/vuepress-copy-via-link
keywords:
- documentation
- vue
- vuepress
- generator
license: MIT License
maintainers: null
name: vuepress-plugin-copy-via-link
npm: https://www.npmjs.com/package/vuepress-plugin-copy-via-link
publisher:
  avatar: null
  email: 896640547@qq.com
  name: null
  url: null
  username: shuangya
repository: https://github.com/sylingd/vuepress-copy-via-link
score: 0.4361136698555675
stars: 1
unstable: false
version: 1.0.0
watchers: 1

---

# vuepress-plugin-copy-via-link

[![vuepress](https://img.shields.io/badge/vuepress-%3E%3D%201.0-brightgreen.svg)](https://v1.vuepress.vuejs.org/)
[![npm](https://img.shields.io/npm/v/vuepress-plugin-copy-via-link.svg)](https://www.npmjs.com/package/vuepress-plugin-copy-via-link)
![npm](https://img.shields.io/npm/dt/vuepress-plugin-copy-via-link.svg)

Copy text in vuepress via links

## Install

```bash
yarn add -D vuepress-plugin-copy-via-link
# OR
npm install -D vuepress-plugin-copy-via-link
```

## Usage

```javascript
module.exports = {
  plugins: [
    ['vuepress-plugin-copy-via-link', {
      start: '#copy:',
      message: '',
      manual_copy: ''
    }]
  ]
}
```

In markdown (`#copy:` is same as you configured above):

```markdown
[Copy text](#copy:THE_TEXT_YOU_WANT_TO_COPY)
```

## Options

### start

- Type: `string`
- Default: `#copy:`

If a link contain the start string, the text after start string will be copy.

### message

- Type: `string`
- Default: `<empty string>`

Show message when copy success. If empty string provided, nothing will be display.

### manual_copy

- Type: `string`
- Default: `<empty string>`

Show message when copy failed to let users copy text by-hand. If empty string provided, nothing will be display.
