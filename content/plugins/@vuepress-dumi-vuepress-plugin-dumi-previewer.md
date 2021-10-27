---
author:
  avatar: https://avatars.githubusercontent.com/u/16408157?v=4
  email: orekish@163.com
  name: OrekiSH
  url: null
  username: orekish
bugs: https://github.com/OrekiSH/vuepress-dumi/issues
category: plugin
date: '2021-08-09T12:52:15.350Z'
deprecated: false
description: A dumi style code previewer plugin for VuePress.
downloads: null
homepage: https://github.com/OrekiSH/vuepress-dumi
keywords:
- vue
- vuepress
- plugin
- documentation
- dumi
- code
- previewer
license: MIT License
maintainers: null
name: '@vuepress-dumi/vuepress-plugin-dumi-previewer'
npm: https://www.npmjs.com/package/%40vuepress-dumi%2Fvuepress-plugin-dumi-previewer
publisher:
  avatar: null
  email: orekish@163.com
  name: null
  url: null
  username: orekish
repository: https://github.com/OrekiSH/vuepress-dumi
score: 0.4984763857544408
stars: 7
unstable: true
version: 0.3.11
watchers: 7

---

<h1 align="center">vuepress-theme-dumi</h1>

📖 A dumi style theme for VuePress.

English | <a href="https://github.com/OrekiSH/vuepress-dumi/blob/main/README-zh_CN.md">简体中文</a>

## Install

* First of all, install [vuepress v1.x](https://github.com/vuejs/vuepress)

* Then install the theme

```bash
$ npm i -D @vuepress-dumi/vuepress-theme-dumi
# OR
$ yarn add -D @vuepress-dumi/vuepress-theme-dumi
```

## Usage
Write vuepress config

```js
// .vuepress/config.js
module.exports = {
  theme: '@vuepress-dumi/dumi',
}
```

## Preview

![pc mode](https://s3.ax1x.com/2021/02/12/yDNldg.png)
![mobile mode](https://s3.ax1x.com/2021/02/12/yDUi60.png)
![code previewer](https://s3.ax1x.com/2021/02/12/yDNgQx.png)

💡attention: if you want to import element-ui like me, you need install async-validator@1.11.5

``` bash
$ npm i -D async-validator@1.11.5
# OR
$ yarn add -D async-validator@1.11.5
```

## Code Previewer Usage

💡attention: whitespace is in need before `demo`

```md
::: demo
<div @click="handleClick">click me</div>

<script>
export default {
  methods: {
    handleClick() {
      console.warn('clicked')
    }
  }
}
</script>
:::
```

If you need code scope, you can use `demo[scope]`.

💡attention: `<template></template>` is in need, and you can not use `import` statment in scope mode. And if you use `demo[scope]` and `demo` in one markdown file, browser may print some error.

```md
::: demo[scope]
<template>
  <div>{{ foo }}</div>
</template>

<script>
export default {
  data() {
    return { foo: 'foo' }
  }
}
</script>
:::
```

```md
::: demo[scope]
<template>
  <div>{{ foo }}</div>
</template>

<script>
export default {
  data() {
    return { foo: 'bar' }
  }
}
</script>
:::
```