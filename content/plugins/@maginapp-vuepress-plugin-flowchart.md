---
author:
  avatar: https://avatars.githubusercontent.com/u/22275933?v=4
  email: 1075433743@qq.com
  name: maginapp
  url: null
  username: maginapp
bugs: https://github.com/maginapp/vuepress-plugin-flowchart/issues
category: plugin
date: '2020-05-25T16:11:08.305Z'
deprecated: false
description: flowchart plugin for vuepress
downloads: null
homepage: https://github.com/maginapp/vuepress-plugin-flowchart#readme
keywords:
- maginapp
- vuepress
- flowchart
license: false
maintainers: null
name: '@maginapp/vuepress-plugin-flowchart'
npm: https://www.npmjs.com/package/%40maginapp%2Fvuepress-plugin-flowchart
publisher:
  avatar: null
  email: 1075433743@qq.com
  name: null
  url: null
  username: maginapp
repository: https://github.com/maginapp/vuepress-plugin-flowchart
score: 0.3588543137552947
stars: 0
unstable: false
version: 1.0.2
watchers: 0

---

# vuepress-plugin-flowchart
flowchart plugin for vuepress

> New features for (ulivz/vuepress-plugin-flowchart)(https://github.com/ulivz/vuepress-plugin-flowchart)

## Installation

```shell
yarn add -D @maginapp/vuepress-plugin-flowchart
# or npm install -D @maginapp/vuepress-plugin-flowchart
```

## Usage

### config

```js
module.exports = {
    // ...
    plugins: [
        '@maginapp/vuepress-plugin-flowchart',
        {
          openMarker: '```mermaid',
          closeMarker: '```',
          scondMarker: 'flowchat',
          ignoreSecondLine: false
        }
    ]
    // ...
}
```

### options

#### openMarker

* type: `string`
* default: ````mermaid`

setting open marker

#### closeMarker

* type: `string`
* default: ` ``` `

setting close marker

#### scondMarker

* type: `string`
* default: `flowchat`

setting scondline marker when `ignoreSecondLine = false`

#### ignoreSecondLine

* type: `boolean`
* default: `false`

setting whether to use scondMarker

### difference with `ulivz/vuepress-plugin-flowchart@v1.4.3`

Just modify some code to be compatible with CSDN blog

* It's just that the outer marker is different


```md
​```mermaid
flowchat

...
sanme code with ulivz/vuepress-plugin-flowchart@v1.4.3
...

​```
```

* Added configuration feature

> It can be set to be the same as `ulivz/vuepress-plugin-flowchart@v1.4.3` by configuring parameters

```js
{
    openMarker: '@flowstart',
    closeMarker: '@flowend',
    ignoreSecondLine: true
}
```


### docs

Same Usage with [`ulivz/vuepress-plugin-flowchart@v1.4.3`](https://flowchart.vuepress.ulivz.com/)

## Quote

* [ulivz/vuepress-plugin-flowchart](https://github.com/ulivz/vuepress-plugin-flowchart)
