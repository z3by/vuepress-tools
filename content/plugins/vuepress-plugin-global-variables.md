---
author:
  avatar: https://avatars.githubusercontent.com/u/26066123?v=4
  email: null
  name: "Artur M\u0119dryga\u0142"
  url: null
  username: demtario
bugs: https://github.com/demtario/vuepress-plugin-global-variables/issues
category: plugin
date: '2020-11-06T11:22:54.228Z'
deprecated: false
description: <h1 align="center">vuepress-plugin-global-variables</h1> <div align="center">
downloads: null
homepage: https://github.com/demtario/vuepress-plugin-global-variables
keywords:
- global
- global-variables
- vue
- vuepress
license: false
maintainers: null
name: vuepress-plugin-global-variables
npm: https://www.npmjs.com/package/vuepress-plugin-global-variables
publisher:
  avatar: null
  email: medrygal.artur@gmail.com
  name: null
  url: null
  username: demtario
repository: https://github.com/demtario/vuepress-plugin-global-variables
score: 0.4138405527802315
stars: 1
unstable: true
version: 0.2.0
watchers: 1

---

<h1 align="center">vuepress-plugin-global-variables</h1>
<div align="center">

Plugin that add a global variables for VuePress.

![Version](https://img.shields.io/github/package-json/v/demtario/vuepress-plugin-global-variables?style=flat-square)
![NPM](https://img.shields.io/npm/l/vuepress-plugin-global-variables?style=flat-square)

</div>

## Install

```sh
yarn add -D vuepress-plugin-global-variables
# OR npm install -D vuepress-plugin-global-variables
```

## Use

Register plugin, all `variables` keys will be registred as a global variables in your vuepress app

```js
module.exports = {
  plugins: [['vuepress-plugin-global-variables', { variables: { example: 'foo' } }]],
}
```

Now, you can simply use `$var[key]` or `this.$page.global[key]` to get your variable in any template or component.

Example:

```vue
{{ $var.example }}

// or

{{ $page.global.example }}
```

will render:

```md
foo
```
