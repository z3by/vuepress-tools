---
author:
  avatar: https://avatars.githubusercontent.com/u/10540493?v=4
  email: null
  name: tortorse
  url: null
  username: tortorse
bugs: https://github.com/tortorse/vuepress-plugin-tabs/issues
category: plugins
date: '2020-08-07T03:26:03.259Z'
deprecated: false
description: Vuepress plugin - Tabs Container for Vuepress without SASS
downloads: null
homepage: https://github.com/tortorse/vuepress-plugin-tabs#readme
keywords:
- vuepress-plugin
- tabs
- component
license: Other
maintainers: null
name: vuepress-plugin-element-tabs-less
npm: https://www.npmjs.com/package/vuepress-plugin-element-tabs-less
publisher:
  avatar: null
  email: tortorse@gmail.com
  name: null
  url: null
  username: tortorse
repository: https://github.com/tortorse/vuepress-plugin-tabs
score: 0.4585976027293285
stars: 1
unstable: true
version: 0.2.11
watchers: 1

---

# [vuepress-plugin-element-tabs-less](https://github.com/tortorse/vuepress-plugin-tabs)

<a href="https://www.npmjs.com/package/vuepress-plugin-element-tabs-less"><img src="https://img.shields.io/npm/v/vuepress-plugin-element-tabs-less.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/vuepress-plugin-element-tabs-less"><img src="https://img.shields.io/npm/l/vuepress-plugin-element-tabs-less.svg" alt="License"></a>
<img src="https://img.shields.io/badge/thanks-element-brightgreen.svg"/>
<img src="https://img.shields.io/badge/thanks-vuepress--plugin--tabs-brightgreen"/>

This is another version of [vuepress-plugin-tabs](https://github.com/tortorse/vuepress-plugin-tabs) that replace the css preprocessor  to LESS.This plugin just for `Vue 2.x` and `VuePress 1.x`

If you don't want install python (node-sass need it), you can install this plugin.

Vuepress plugin - markdown custom container to display content in tabs from [Element UI](https://github.com/ElemeFE/element)

## Docs
> https://tortorse.github.io/vuepress-plugin-tabs-less/

## Install
> This plugin requires VuePress >= 1.0.0, for now you can try it via yarn add vuepress@next -D 

```shell
yarn add vuepress-plugin-element-tabs-less -D
```

```javascript
// .vuepress/config.js
module.exports = {
  plugins: [
    'vuepress-plugin-element-tabs-less'
  ]
}
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

## Documents
> Accepted Value Like That
~~~md
:::: tabs type:board-card
::: tab title lazy
__markdown content__
:::
::::
~~~

### Tabs Attributes
|Attribute|Description|Type|Accepted Values|Default|
|:--|:--|:--|:--|:--|
|type|type of Tab|String|card/border-card|border-card|
|tab-position|position of tabs|String|top/right/bottom/left|top|
|stretch|whether width of tab automatically fits its container|Boolean|-|false|


### Tab Attributes
|Attribute|Description|Type|Accepted Values|Default|
|:--|:--|:--|:--|:--|
|label|title of the tab|String|-|-|
|lazy|whether Tab is lazily rendered|Boolean|-|false|

### License

[MIT](./LICENSE)