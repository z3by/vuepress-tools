---
author:
  avatar: https://avatars.githubusercontent.com/u/15191056?v=4
  email: null
  name: jardenliu
  url: null
  username: jardenliu
bugs: https://github.com/jardenliu/vuepress-plugin-code-doc/issues
category: plugin
date: '2020-07-23T03:32:18.037Z'
deprecated: false
description: Writing Documents Like Element-ui
downloads: null
homepage: https://github.com/jardenliu/vuepress-plugin-code-doc#readme
keywords:
- vuepress
- code
- demo
- doc
- element
- ui
- components
license: false
maintainers: null
name: vuepress-plugin-code-doc
npm: https://www.npmjs.com/package/vuepress-plugin-code-doc
publisher:
  avatar: null
  email: jarden@qq.com
  name: null
  url: null
  username: jardenliu
repository: https://github.com/jardenliu/vuepress-plugin-code-doc
score: 0.35316272383517844
stars: 1
unstable: true
version: 0.0.1
watchers: 1

---

# vuepress-plugin-code-doc
> 🤩🤩🤩Writing Vuepress Documents Like Element-UI

[📚中文文档](./README_CN.md) 丨 [📚English Docs](./README.md)

## Installation
Install plugin for your Vuepress project.
```bash
    $ yarn add vuepress-plugin-code-doc
    #or
    $ npm i vuepress-plugin-code-doc
```

## Usage
In `.vuepress/config.js`, require the plugin and set it to the config. as follow:
```js

const CodeDocPlugin = require('vuepress-plugin-code-doc')
const CodeDocOpt = {}

module.exports = {
    title: 'Vuepress Plugin Code Doc',
    plugins: [[CodeDocPlugin, CodeDocOpt]]
}

```

## Options

| Name               | Description        | type   | Accepted Values | Default |
| ------------------ | ------------------ | ------ | --------------- | ------- |
| schema             | code block mark    | string | ---             | :       |
| scrollViewSelector | scrollViewSelector | string | ---             | html    |
