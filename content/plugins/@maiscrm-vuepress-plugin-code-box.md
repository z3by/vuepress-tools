---
author:
  avatar: https://avatars.githubusercontent.com/u/7091908?v=4
  email: null
  name: null
  url: null
  username: maiscrm
bugs: https://github.com/maiscrm/vuepress-code-box/issues
category: plugin
date: '2020-06-20T10:26:22.678Z'
deprecated: false
description: "\U0001F4DD Demo and code plugin for vuepress"
downloads: null
homepage: https://github.com/maiscrm/vuepress-code-box
keywords:
- vue
- code
- demo
- vuepress
- demo-code
- documentation
license: MIT License
maintainers: null
name: '@maiscrm/vuepress-plugin-code-box'
npm: https://www.npmjs.com/package/%40maiscrm%2Fvuepress-plugin-code-box
publisher:
  avatar: null
  email: lixianfeng1992@gmail.com
  name: null
  url: null
  username: allenli
repository: https://github.com/maiscrm/vuepress-code-box
score: 0.07454623919035212
stars: 0
unstable: true
version: 0.1.0
watchers: 0

---

<h1 align="center">vuepress-plugin-code-gen-box</h1>

> code-gen-box plugin for vuepress.

With this plugin, you can both display demo and code via following syntax.

```md
::: demo
<div @click="onClick">Click me!</div>

<script>
export default {
  methods: {
    onClick: () => { window.alert(1) },
  },
}
</script>
:::
```

## Features

- Only one source code
- Foldable code

## Install

- First of all, install [vuepress v1.x](https://github.com/vuejs/vuepress)

- Then install the plugin

```bash
$ npm i vuepress-plugin-code-gen-box -D
# OR
$ yarn add vuepress-plugin-code-gen-box -D
```

## Usage

Write vuepress config

```js
module.exports = {
  plugins: ["code-gen-box"],
};
```

## Options

This plugin supports the following configurations.

```js
module.exports = {
  plugins: [
    [
      "demo-code",
      {
        showText: "show code",
        hideText: "hide",
        styleStr: "text-decoration: underline;",
        demoCodeMark: "demo-code",
      },
    ],
  ],
};
```

### showText

- Type: `String`
- Default: `显示代码`

The display text of unfold code button.

### hideText

- Type: `String`
- Default: `隐藏代码`

The display text of fold code button.

## License

[MIT](http://opensource.org/licenses/MIT)
