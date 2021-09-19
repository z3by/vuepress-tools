---
author:
  avatar: https://avatars.githubusercontent.com/u/7127874?v=4
  email: null
  name: lx1036@126.com
  url: null
  username: lx1036
bugs: https://github.com/lx1036/vuepress-plugin-export/issues
category: plugin
date: '2019-07-11T09:49:50.317Z'
deprecated: false
description: Export your VuePress site to a PDF file
downloads: null
homepage: https://github.com/lx1036/vuepress-plugin-export#readme
keywords: null
license: MIT License
maintainers: null
name: '@lx1036/vuepress-plugin-export'
npm: https://www.npmjs.com/package/%40lx1036%2Fvuepress-plugin-export
publisher:
  avatar: null
  email: lx1036@126.com
  name: null
  url: null
  username: lx1036
repository: https://github.com/lx1036/vuepress-plugin-export
score: 0.37514809940956806
stars: 0
unstable: true
version: 0.4.0
watchers: 0

---

# vuepress-plugin-export

[![NPM version](https://badgen.net/npm/v/vuepress-plugin-export)](https://npmjs.com/package/vuepress-plugin-export) [![NPM downloads](https://badgen.net/npm/dm/vuepress-plugin-export)](https://npmjs.com/package/vuepress-plugin-export)

> This plugin requires VuePress >= **1.0.0-alpha.44**.

## Features

- Merge all of your pages automatically.

## TODO

- Support default and confurable front cover.
- Inject Table of Contents.
- Inject Page Numbers.
- Generate different PDF files per locale.
- Transform all of links.

## Install

```bash
npm i vuepress-plugin-export
```

## Usage

Using this plugin:

```javascript
// .vuepress/config.js
module.exports = {
  plugins: ['vuepress-plugin-export']
}
```

Then run:

```bash
vuepress export [path/to/your/docs]
```

## Development

```bash
git clone https://github.com/ulivz/vuepress-plugin-export
cd vuepress-plugin-export
yarn
yarn export
```

> Note that this package is powered by [puppeteer](https://github.com/GoogleChrome/puppeteer), if you are in a mysterious wall, consider setting [environment variables](https://github.com/GoogleChrome/puppeteer/blob/v1.11.0/docs/api.md#environment-variables) before installation.

```bash
PUPPETEER_DOWNLOAD_HOST=https://npm.taobao.org/mirrors
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**vuepress-plugin-export** © [ULVIZ](https://github.com/ulivz), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by ULVIZ with help from contributors ([list](https://github.com/ulivz/vuepress-plugin-export/contributors)).

> [github.com/ulivz](https://github.com/ulivz) · GitHub [@ULVIZ](https://github.com/ulivz) · Twitter [@_ulivz](https://twitter.com/_ulivz)
