---
author:
  avatar: https://avatars.githubusercontent.com/u/23313167?v=4
  email: qw13131wang@gmail.com
  name: tolking
  url: null
  username: tolking
bugs: https://github.com/tolking/vuepress-plugin-img-lazy/issues
category: plugin
date: '2020-07-09T12:03:53.952Z'
deprecated: false
description: a vuepress plugin to better supporting image lazy loading
downloads: null
homepage: https://github.com/tolking/vuepress-plugin-img-lazy
keywords:
- vuepress
- vuepress-plugin
- lazy-loading
- img
- lazy
- data-src
license: MIT License
maintainers: null
name: vuepress-plugin-img-lazy
npm: https://www.npmjs.com/package/vuepress-plugin-img-lazy
publisher:
  avatar: null
  email: qw13131wang@gmail.com
  name: null
  url: null
  username: tolking
repository: https://github.com/tolking/vuepress-plugin-img-lazy
score: 0.4649293645884728
stars: 18
unstable: false
version: 1.0.4
watchers: 18

---

# vuepress-plugin-img-lazy

> a vuepress plugin to better supporting image lazy loading

**The plugin will preferentially use native image [lazy-loading](https://caniuse.com/#feat=loading-lazy-attr), if the browser does not support it, it will be implemented through [IntersectionObserver](https://caniuse.com/#feat=intersectionobserver)**

base on [markdown-it-img-lazy](https://github.com/tolking/markdown-it-img-lazy) and [markdown-it-imsize](https://github.com/tatsy/markdown-it-imsize)

[Live Demo and Documentation](https://tolking.github.io/vuepress-plugin-img-lazy/preview.html)

---

## Installation

``` sh
yarn add vuepress-plugin-img-lazy
# or
npm i vuepress-plugin-img-lazy
```

## Usage

``` js
module.exports = {
  plugins: [
    'img-lazy'
  ]
}
```

``` md
![img](/img.jpg)
# or
![img](/img.jpg =500x300) <!-- better -->
```

## Use in theme

- registered as global components

``` js
// enhanceAppFile.js
import ImgLazy from 'vuepress-plugin-img-lazy/ImgLazy'

export default ({ Vue }) => {
  Vue.component(ImgLazy.name, ImgLazy)
}
```

- or registered as components

``` js
import ImgLazy from 'vuepress-plugin-img-lazy/ImgLazy'

export default {
  components: { ImgLazy }
}
```

- use

``` vue
<template>
  <img-lazy src="/img.jpg" />
</template>
```

**If you registered as global components, you can use it directly in the `markdown` file**

``` md
<img-lazy src="/img.jpg" />
```

## Options

### useNative
- Type: `Boolean`
- Default: `true`
- Required: `false`

Use the native image lazy-loading for the web

### selector
- Type: `string`
- Default: `lazy`
- Required: `false`

Default class name for image

### rootMargin
- Type: `String`
- Default: `200px`
- Required: `false`

rootMargin for IntersectionObserver

### prefix
- Type: `string` `Function`
- Default: `src => src && src.charAt(0) === '/' && !src.startsWith(ctx.base) ? ctx.base + src.slice(1) : src`
- Required: `false`

Config prefix for src in images

## Other

1. [Base URL](https://vuepress.vuejs.org/guide/assets.html#rBase%20URL) already included by default, But it does not include the `<img/>` label in the markdown file <Badge text="^1.0.2"/>

If you need to use both `Base URL` and `<img/>` labels, refer to

``` md
<img :data-src="$withBase('/img.png')" loading="lazy" class="lazy">
```

2. In order to better supporting image lazy loading, it is better to specify the size of the image (in some themes, you need to set `display` as `inline block` or `block` separately), so as to ensure that the image can occupy the position it should occupy
