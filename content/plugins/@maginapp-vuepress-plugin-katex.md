---
author:
  avatar: https://avatars.githubusercontent.com/u/22275933?v=4
  email: 1075433743@qq.com
  name: maginapp
  url: null
  username: maginapp
bugs: https://github.com/maginapp/vuepress-plugin-katex/issues
category: plugin
date: '2021-03-23T11:36:03.654Z'
deprecated: false
description: KateX plugin for Vuepress
downloads: null
homepage: https://github.com/maginapp/vuepress-plugin-katex#readme
keywords:
- maginapp
- vuepress
- katex
- markdown
license: false
maintainers: null
name: '@maginapp/vuepress-plugin-katex'
npm: https://www.npmjs.com/package/%40maginapp%2Fvuepress-plugin-katex
publisher:
  avatar: null
  email: 1075433743@qq.com
  name: null
  url: null
  username: maginapp
repository: https://github.com/maginapp/vuepress-plugin-katex
score: 0.5001224237989124
stars: 15
unstable: false
version: 1.0.11
watchers: 15

---

# vuepress-plugin-katex
Katex plugin for VuePress

## Installation

```shell
yarn add -D @maginapp/vuepress-plugin-katex
# or npm install -D @maginapp/vuepress-plugin-katex
```

## Usage

### config

```js
module.exports = {
    // ...
    plugins: {
        '@maginapp/katex': {
          delimiters: 'dollars'
        }
    },
    // or
    plugins: {
        '@maginapp/vuepress-plugin-katex': {
          delimiters: 'dollars'
        }
    },
    // ...
}

// or

module.exports = [
    ['@maginapp/vuepress-plugin-katex', { delimiters: 'dollars' }],
    // or
    ['@maginapp/katex', { delimiters: 'dollars' }],
]

```

### options

#### delimiters

* type: `string`
* default: `dollars`

User setting delimiters, [show more](https://github.com/goessner/markdown-it-texmath#features)

### `dollars` example

You can use render latex mathematical expressions [KaTeX](https://khan.github.io/KaTeX/):

Gamma公式展示 $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ 是通过欧拉积分

* inline

$\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.$

```md
$\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$
```

* display

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

```md
$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$
```

### vue components

* `Eq.vue`: using for inline

* `Eqn.vue`: using for block

## Projects Using `@maginapp/vuepress-plugin-katex`

* [katex](https://github.com/KaTeX/KaTeX)
* [markdown-it-texmath](https://github.com/goessner/markdown-it-texmath)

## records

* v1.0.5 init version / 初始版本
* v1.0.6 add component:`Eq`,`Eqn` / 添加 Eq Eqn 初始组件
* v1.0.7 fix: `Eqn` dispaly center /  修复display + equation number 模式下Eqn组件不居中问题
* v1.0.8 fix: Vue automatically removes spaces from templates / 修复vue自动去除模板中空格问题
* v1.0.9 style: add custom.css / 添加自定义样式文件
* v1.0.10 fix: delete globalUIComponents / 修复globalUIComponents 导致的底部样式问题
* v1.0.11 fix: modify `README` usage / 修复 `README` 示例错误
