---
author:
  avatar: https://avatars.githubusercontent.com/u/23133919?v=4
  email: chl814@foxmail.com
  name: ulivz
  url: null
  username: ulivz
bugs: https://github.com/ulivz/vuepress-plugin-check-md/issues
category: plugin
date: '2019-07-30T09:00:49.396Z'
deprecated: false
description: checks dead links of markdown
downloads: null
homepage: https://github.com/ulivz/vuepress-plugin-check-md#readme
keywords: null
license: MIT License
maintainers: null
name: vuepress-plugin-check-md
npm: https://www.npmjs.com/package/vuepress-plugin-check-md
publisher:
  avatar: null
  email: 472590061@qq.com
  name: null
  url: null
  username: ulivz
repository: https://github.com/ulivz/vuepress-plugin-check-md
score: 0.26335884383529223
stars: 25
unstable: true
version: 0.0.2
watchers: 25

---

# vuepress-plugin-check-md

[![NPM version](https://badgen.net/npm/v/vuepress-plugin-check-md)](https://npmjs.com/package/vuepress-plugin-check-md) [![NPM downloads](https://badgen.net/npm/dm/vuepress-plugin-check-md)](https://npmjs.com/package/vuepress-plugin-check-md)


> `vuepress check-md` - Check dead links of markdown.

**This plugin is powered by [check-md](https://github.com/whxaxes/check-md) made with ❤️ by [@whxaxes](https://github.com/whxaxes).**

## Features

![](./assets/demo.png)

This plugin help check following types of dead links

- Empty link.
- Non-existed target markdown file.
- Non-slugified hash.
- Non-existed hash.
- Prefer `.md` to `.html` (`warn`)

## Install

```bash
yarn add -D vuepress-plugin-check-md
# OR npm install -D vuepress-plugin-check-md
```

## Usage

```javascript
module.exports = {
  plugins: ['check-md']
}
```

```bash
vuepress check-md [docsDir]
```

### Passing Options

```javascript
module.exports = {
  plugins: ['check-md', {
    pattern: '**/*.md'
  }]
}
```

## Options

### pattern

- Type: `GlobPattern`
- Default: `**/*.md`

[Glob](https://github.com/isaacs/node-glob) pattern of resolved markdowns.

### ignore

- Type: `GlobPattern`
- Default: `**/node_modules`

[Glob](https://github.com/isaacs/node-glob) pattern to specify paths from being checked.

### exitLevel

- Type: `'none' | 'info' | 'warn' | 'error'`
- Default: `'error'`


## Author

**vuepress-plugin-check-md** © [ULIVZ](https://github.com/ulivz), Released under the [MIT](./LICENSE) License.<br>

> [github.com/ulivz](https://github.com/ulivz) · GitHub [@ULIVZ](https://github.com/ulivz) · Twitter [@_ulivz](https://twitter.com/_ulivz)


