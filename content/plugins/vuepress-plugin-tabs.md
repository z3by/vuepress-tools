---
author:
  avatar: https://avatars.githubusercontent.com/u/15627750?v=4
  email: p.skordilakis@gmail.com
  name: Panagiotis Skordilakis
  url: null
  username: pskordilakis
bugs: https://github.com/pskordilakis/vuepress-plugin-tabs/issues
category: plugin
date: '2020-01-26T09:11:42.898Z'
deprecated: false
description: Vuepress plugin tabs - markdown custom container to display content in
  tabs
downloads: null
homepage: https://github.com/pskordilakis/vuepress-plugin-tabs
keywords:
- vuepress
- tabs
license: MIT License
maintainers: null
name: vuepress-plugin-tabs
npm: https://www.npmjs.com/package/vuepress-plugin-tabs
publisher:
  avatar: null
  email: p.skordilakis@gmail.com
  name: null
  url: null
  username: pskordilakis
repository: https://github.com/pskordilakis/vuepress-plugin-tabs
score: 0.3210789636214223
stars: 53
unstable: true
version: 0.3.0
watchers: 53

---

# Vuepress Plugin Tabs

Tabs Container for Vuepress

Expose [vue-tabs-component](https://github.com/spatie/vue-tabs-component) as custom markdown container

Used with version >= 1.x.x of Vuepress. For version 0.x use [vuepress-tabs](https://github.com/pskordilakis/vuepress-tabs)

## Installation

``` bash
yarn add vuepress-plugin-tabs vue-tabs-component
```

or

``` bash
npm install vuepress-plugin-tabs vue-tabs-component
```

Enable plugin in .vuepress/config.js

``` js
module.exports = {
  plugins: [ 'tabs' ]
}
```

import theme in .vuepress/styles/index.styl

``` stylus
@require '~vuepress-plugin-tabs/dist/themes/default.styl'
```

## Usage

~~~ md
:::: tabs

::: tab title
__markdown content__
:::


::: tab javascript
``` javascript
() => {
  console.log('Javascript code example')
}
```
:::

::::

~~~

### Tabs attributes

Everything after tabs will be passed to tabs component as attributes.

~~~ md
:::: tabs cache-lifetime="10" :options="{ useUrlFragment: false }"

::: tab "Tab Title" id="first-tab"
__markdown content__
:::


::: tab javascript id="second-tab"
``` javascript
() => {
  console.log('JavaScript code example')
}
```
:::

::::

~~~


### Tab attributes

Everything after tab will be passed to tab component as attributes.
Any value that does not have a name will be passed as the name attribute. Multiword names must be enclosed in quotes.
Only one such value is valid.

~~~ md
:::: tabs

::: tab "Tab Title" id="first-tab"
__markdown content__
:::


::: tab javascript id="second-tab"
``` javascript
() => {
  console.log('JavaScript code example')
}
```
:::

::::

~~~
