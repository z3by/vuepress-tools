---
author:
  avatar: https://avatars.githubusercontent.com/u/6118824?v=4
  email: null
  name: xiaoluoboding
  url: null
  username: xiaoluoboding
bugs: https://github.com/xiaoluoboding/vuepress-plugin-geopattern/issues
category: plugin
date: '2020-03-28T08:12:35.205Z'
deprecated: false
description: Generate beautiful random geometric pattern background images.
downloads: null
homepage: https://github.com/xiaoluoboding/vuepress-plugin-geopattern#readme
keywords:
- vuepress
- plugin
- pattern
license: MIT License
maintainers: null
name: vuepress-plugin-geopattern
npm: https://www.npmjs.com/package/vuepress-plugin-geopattern
publisher:
  avatar: null
  email: xiaoluoboding@gmail.com
  name: null
  url: null
  username: xiaoluoboding
repository: https://github.com/xiaoluoboding/vuepress-plugin-geopattern
score: 0.3570912211285867
stars: 0
unstable: true
version: 0.1.2
watchers: 0

---

# VuePress Plugin GeoPattern

<p align="left">
  <a href="https://www.npmjs.com/package/vuepress-plugin-geopattern"><img src="https://img.shields.io/npm/v/vuepress-plugin-geopattern.svg?maxAge=2592000"></a>
  <a href="https://www.npmjs.com/package/vuepress-plugin-geopattern"><img src="https://img.shields.io/npm/dt/vuepress-plugin-geopattern.svg"></a>
  <a href="https://raw.githubusercontent.com/vueblocks/vuepress-plugin-geopattern/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
</p>

Register a global `<GeoPattern />` component for VuePress.

This component generate a beautiful random geometric pattern & random color background images from a string you given.

> This plugin is a adapter of [geopattern](https://github.com/btmills/geopattern) for VuePress

## See Demo on CodeSandbox

[![Edit vuepress-plugin-geopattern](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vuepress-plugin-geopattern-twidv?fontsize=14&hidenavigation=1&theme=dark)

## Installation

```bash
yarn add vuepress-plugin-geopattern -S
or
npm i vuepress-plugin-geopattern -S
```

## Register the plugin

```js
...
module.exports = {
  ...,
  plugins: {
    ['geopattern']
  },
  ...
}
...
```

## Usage

### Default

> Only background image, you must give the height of the element

```vue
<GeoPattern style="height: 160px;" />
```

### Custom pattern

If you don't provide a seed, the pattern's seed is random.

In VuePress you can use [global computed properties](https://vuepress.vuejs.org/guide/global-computed.html) such as use `this.$page.title` as a seed, generate a geopattern by the page title.

Each page title is different, so you got difference geopattern.

```vue
<GeoPattern
  style="height: 160px;"
  seed="$page.title"
  :colorHexs="['F', '4', 'A']"
/>
```

### With the custom slot

> In the case, you can let the slot element control the pattern's height

```vue
<geo-pattern>
  <div style="padding: 64px; font-size: 2rem; color: white;">
    All Posts
  </div>
</geo-pattern>
```

## API

> colorHexs is a new props for this component, I believe that three hexadecimal color value[0-F] can generate beautiful colors in random way.

| Props | Description | Type | Default |
| :---: | :---------: | :--: | :-----: |
| seed | Will be used as the seed for generation | String | `vuepress-plugin-geopattern` |
| colorHexs | Given array elements is hexadecimal color value [0-F] | Array | `['3', '9', 'C' ]` |
| baseColor | Controls the relative background color of the generated image. | String | `933c3c` |

## Slot

`<GeoPattern />` component provide a custom slot, you can write some element on the generated pattern.

## Related VuePress Plugin

* [vuepress-plugin-hero-pattern](https://github.com/xiaoluoboding/vuepress-plugin-hero-pattern) - Hero Patterns is a set of repeatable, seemless SVG background patterns

## License

MIT @ [xiaoluoboding](https://github.com/xiaoluoboding)
