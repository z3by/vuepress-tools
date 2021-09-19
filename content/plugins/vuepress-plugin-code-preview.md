---
author:
  avatar: https://avatars.githubusercontent.com/u/17906558?v=4
  email: pengchengou@gmail.com
  name: vxhly
  url: null
  username: vxhly
bugs: https://github.com/vxhly/vuepress-plugin-code-preview/issues
category: plugin
date: '2020-08-21T06:31:43.508Z'
deprecated: false
description: A vuepress plugin for codesandbox embed code preview
downloads: null
homepage: https://github.com/vxhly/vuepress-plugin-code-preview#readme
keywords:
- vuepress
- plugin
- codesandbox
- code-preview
license: Other
maintainers: null
name: vuepress-plugin-code-preview
npm: https://www.npmjs.com/package/vuepress-plugin-code-preview
publisher:
  avatar: null
  email: pengchengou@gmail.com
  name: null
  url: null
  username: vxhly
repository: https://github.com/vxhly/vuepress-plugin-code-preview
score: 0.435013063485734
stars: 1
unstable: false
version: 1.0.0
watchers: 1

---

# vuepress-plugin-code-preview

> A vuepress plugin for codesandbox embed code preview

[![npm](https://img.shields.io/npm/v/vuepress-plugin-code-preview.svg)](https://www.npmjs.com/package/vuepress-plugin-code-preview)
[![GitHub stars](https://img.shields.io/github/stars/vxhly/vuepress-plugin-code-preview)](https://github.com/vxhly/vuepress-plugin-code-preview/stargazers)
[![GitHub license](https://img.shields.io/github/license/vxhly/vuepress-plugin-code-preview)](https://github.com/vxhly/vuepress-plugin-code-preview/blob/master/LICENSE)

## Install

``` bash
# install dependencies
npm i vuepress-plugin-code-preview -D

# or use yarn
yarn add vuepress-plugin-code-preview -D
```

## Usage

Write vuepress config

``` javascript
module.exports = {
  plugins: ['code-preview']
}
```

Write article

``` markdown
<code-preview embed-url="<url>" />
```

## Options

### embedUrl

Copy codesandbox embed url to it.

- type: *String*
- required: *true*
- default: *null*

### embedBox

Code embedding platform.

- type: *String*
- required: *fasle*
- default: *codesandbox*

## License

[MIT](https://github.com/vxhly/vuepress-plugin-code-preview/blob/master/LICENSE).