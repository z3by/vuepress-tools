---
author:
  avatar: https://avatars.githubusercontent.com/u/4111136?v=4
  email: null
  name: Azamat Sarsenbayev
  url: null
  username: azasar
bugs: https://github.com/azasar/vuepress-plugin-separate-pages/issues
category: plugin
date: '2020-10-05T08:12:36.684Z'
deprecated: false
description: Shows content of current header by hashtag from location
downloads: null
homepage: https://github.com/azasar/vuepress-plugin-separate-pages#readme
keywords:
- vuepress
- plugin
- separate pages
license: MIT License
maintainers: null
name: vuepress-plugin-separate-pages
npm: https://www.npmjs.com/package/vuepress-plugin-separate-pages
publisher:
  avatar: null
  email: sarsenbayev.a.s@gmail.com
  name: null
  url: null
  username: azasar
repository: https://github.com/azasar/vuepress-plugin-separate-pages
score: 0.3825743704786808
stars: 1
unstable: true
version: 0.1.4
watchers: 1

---

# VuePress Plugin Separate pages

> Separate pages plugin for [VuePress](https://vuepress.vuejs.org/) 1.x

## What

This is a VuePress plugin which shows content of current header by hashtag from location


## Rules
There is exactly one basic rule to follow:  
* Header tags like h1, h2, h3, h4 (#, ##, ###, ####) should not be inside html elements, for example `<div class="notranslate"><h2>Some header</h2></div>` will not work

## Install
```sh
$ npm install vuepress-plugin-separate-pages

# or

$ yarn add vuepress-plugin-separate-pages
```

## Usage
Add `separate-pages` in your site config file.
> See [official docs on using a plugin](https://vuepress.vuejs.org/plugin/using-a-plugin.html)

```js
// .vuepress/config.js

module.exports = {
  plugins: [
    [ 'separate-pages' ]
  ]
}
```

## Options
> See Plugin Option API [official docs](https://vuepress.vuejs.org/plugin/option-api.html)

`alwaysVisibleBlocks` - list of blocks described by css rules. These blocks will always be visible. 

```js
// .vuepress/config.js

module.exports = {
  plugins: [
    [ 'separate-pages', { alwaysVisibleBlocks: ['#disqus_thread'] } ]
  ]
}
```

## Reference
- VuePress official [plugin docs](https://vuepress.vuejs.org/plugin/)

## License
MIT ©