---
author:
  avatar: https://avatars.githubusercontent.com/u/26818843?v=4
  email: null
  name: null
  url: null
  username: yemuguliunian
bugs: https://github.com/yemuguliunian/vuepress-plugin-interactive-js/issues
category: plugin
date: '2020-07-24T06:09:07.752Z'
deprecated: false
description: interactive js plugin for vuepress
downloads: null
homepage: https://github.com/yemuguliunian/vuepress-plugin-interactive-js#readme
keywords: null
license: false
maintainers: null
name: '@yemu419/vuepress-plugin-interactive-js'
npm: https://www.npmjs.com/package/%40yemu419%2Fvuepress-plugin-interactive-js
publisher:
  avatar: null
  email: 215822834@qq.com
  name: null
  url: null
  username: yemuguliunian
repository: https://github.com/yemuguliunian/vuepress-plugin-interactive-js
score: 0.4301249322154186
stars: 0
unstable: false
version: 1.0.0
watchers: 0

---

# vuepress-plugin-interactive-js

使用此插件，您可以通过以下语法同时显示代码和 console.log 结果。

````md
::: javascript

```js
var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };

// 请写出以下输出结果
console.log(a.x);
console.log(b);
```

:::
````

[点击查看 Demo](https://yemuguliunian.github.io/vuepress-plugin-interactive-js/)

## Install

```shell
yarn add @yemu419/vuepress-plugin-interactive-js -D
```

## Usage

Write vuepress config

```js
module.exports = {
    plugins: ['@yemu419/interactive-js'],
}
```

