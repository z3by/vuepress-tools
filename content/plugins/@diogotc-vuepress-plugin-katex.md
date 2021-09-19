---
author:
  avatar: https://avatars.githubusercontent.com/u/7467891?v=4
  email: me@diogotc.com
  name: Diogo Correia
  url: null
  username: diogotc
bugs: https://github.com/diogotcorreia/vuepress-plugin-katex/issues
category: plugin
date: '2021-04-10T19:05:06.857Z'
deprecated: false
description: KateX plugin for Vuepress (Fork by Diogo Correia)
downloads: null
homepage: https://github.com/diogotcorreia/vuepress-plugin-katex#readme
keywords:
- vuepress
- katex
- markdown
license: false
maintainers: null
name: '@diogotc/vuepress-plugin-katex'
npm: https://www.npmjs.com/package/%40diogotc%2Fvuepress-plugin-katex
publisher:
  avatar: null
  email: me@diogotc.com
  name: null
  url: null
  username: diogotc
repository: https://github.com/diogotcorreia/vuepress-plugin-katex
score: 0.5037821125455739
stars: 0
unstable: false
version: 2.0.0
watchers: 0

---

# vuepress-plugin-katex

Katex plugin for VuePress (fork by Diogo Correia)

## Installation

```shell
yarn add -D @diogotc/vuepress-plugin-katex
# or npm install -D @diogotc/vuepress-plugin-katex
```

## Usage

### config

```js
module.exports = {
  // ...
  plugins: {
    "@diogotc/katex": {
      delimiters: "dollars",
    },
  },
  // or
  plugins: {
    "@diogotc/vuepress-plugin-katex": {
      delimiters: "dollars",
    },
  },
  // ...
};

// or

module.exports = [
  ["@diogotc/vuepress-plugin-katex", { delimiters: "dollars" }],
  // or
  ["@diogotc/katex", { delimiters: "dollars" }],
];
```

### Options

#### Delimiters

- type: `string`
- default: `dollars`

More settings at [the `markdown-it-texmath` repository](https://github.com/goessner/markdown-it-texmath#features).

### `dollars` example

You can use render latex mathematical expressions [KaTeX](https://khan.github.io/KaTeX/):

- inline

$\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.$

```md
$\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$
```

- display

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

```md
$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$
```

### Vue components

- `Eq.vue`: used for inline KaTeX

- `Eqn.vue`: used for block KaTeX

## Projects used in `@diogotc/vuepress-plugin-katex`

- [katex](https://github.com/KaTeX/KaTeX)
- [markdown-it-texmath](https://github.com/goessner/markdown-it-texmath)

## Changelog

v2.0.0: Forked from @maginapp/vuepress-plugin-katex and upgraded dependencies.
