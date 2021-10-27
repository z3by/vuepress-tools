---
author:
  avatar: https://avatars.githubusercontent.com/u/6118824?v=4
  email: null
  name: xiaoluoboding
  url: null
  username: xiaoluoboding
bugs: https://github.com/xiaoluoboding/vuepress-plugin-hero-pattern/issues
category: plugin
date: '2020-03-27T14:28:23.583Z'
deprecated: false
description: Generate seemless repeatable SVG background patterns.
downloads: null
homepage: https://github.com/xiaoluoboding/vuepress-plugin-hero-pattern#readme
keywords:
- vuepress
- plugin
- vuepress-plugin
- svg
- pattern
- svg-pattern
license: MIT License
maintainers: null
name: vuepress-plugin-hero-pattern
npm: https://www.npmjs.com/package/vuepress-plugin-hero-pattern
publisher:
  avatar: null
  email: xiaoluoboding@gmail.com
  name: null
  url: null
  username: xiaoluoboding
repository: https://github.com/xiaoluoboding/vuepress-plugin-hero-pattern
score: 0.3175867316282221
stars: 0
unstable: true
version: 0.1.0
watchers: 0

---

# Vuepress Plugin HeroPattern

<p align="center">
  <a href="https://github.com/xiaoluoboding/vuepress-plugin-hero-pattern">
    <img src="./assets/images/logo.png">
  </a>
</p>

<p align="left">
  <a href="https://www.npmjs.com/package/vuepress-plugin-hero-pattern"><img src="https://img.shields.io/npm/v/vuepress-plugin-hero-pattern.svg?maxAge=2592000"></a>
  <a href="https://www.npmjs.com/package/vuepress-plugin-hero-pattern"><img src="https://img.shields.io/npm/dt/vuepress-plugin-hero-pattern.svg"></a>
  <a href="https://raw.githubusercontent.com/vueblocks/vuepress-plugin-hero-pattern/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
</p>

Register a global `<HeroPattern />` component for VuePress.

This component generate a seemless SVG background pattern as a background image.

> This plugin is a VuePress implementation of [Hero Patterns](http://www.heropatterns.com/), All 87 unstyled svg icons is optimized with svgo.

## See Demo on CodeSandbox

[![Edit vuepress-plugin-hero-pattern](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vuepress-plugin-hero-pattern-o1ebr?fontsize=14&hidenavigation=1&theme=dark)

## Installation

```bash
yarn add vuepress-plugin-hero-pattern -S
or
npm i vuepress-plugin-hero-pattern -S
```

## Register the plugin

```js
...
module.exports = {
  ...,
  plugins: {
    ['hero-pattern']
  },
  ...
}
...
```

## Usage

### Default

I pick `line-to-motion` as the preset pattern.

> Only background image, you must give the height of the element

```vue
<HeroPattern style="height: 160px;" />
```

### Pick a Pattern

Hero Pattern provide 87 kinds of pattern you can choose, check [pattern list](https://github.com/xiaoluoboding/vuepress-plugin-hero-pattern/tree/master/assets/icons)

```vue
<HeroPattern
  style="height: 160px;"
  pattern="glamorous"
  fill-color="#FAF5FF"
  background-color="#553C9A"
  fill-opacity=".66"
/>
```

### With the custom slot

> In the case, you can let the slot element control the pattern's height

```vue
<hero-pattern>
  <div style="padding: 64px; font-size: 2rem; font-weight: bold; color: white;">
    All Posts
  </div>
</hero-pattern>
```

## API

| Props | Description | Type | Default |
| :---: | :---------: | :--: | :-----: |
| pattern | 87 kinds of patterns that Hero Patterns supported, check [pattern list](https://github.com/xiaoluoboding/vuepress-plugin-hero-pattern/tree/master/assets/icons) | String | `line-to-motion` |
| fillColor | Controls the foreground color of the generated image. | String | `#9c92ac` |
| fillOpacity | Controls the foreground opacity of the generated image. | String | `0.4` |
| backgroundColor | Controls the background color of the generated image. | String | `#dfdbe5` |
| repeat | Controls how the background repeated of the generated image. | String | `repeat` |

## Slot

`<HeroPattern />` component provide a custom slot, you can write some element on the generated pattern.

## Related VuePress Plugin

* [vuepress-plugin-geopattern](https://github.com/xiaoluoboding/vuepress-plugin-geopattern) - GeoPattern is a geopattern adapter for VuePress.

## License

MIT @ [xiaoluoboding](https://github.com/xiaoluoboding)
