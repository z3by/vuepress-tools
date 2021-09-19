---
author:
  avatar: https://avatars.githubusercontent.com/u/23612650?v=4
  email: null
  name: kai9029
  url: null
  username: Kai9026
bugs: https://github.com/superbiger/vuepress-plugin-tabs/issues
category: plugin
date: '2020-02-28T10:27:54.351Z'
deprecated: false
description: A fork of vuepress-plugin-tabs with red tabs
downloads: null
homepage: https://github.com/superbiger/vuepress-plugin-tabs#readme
keywords:
- vuepress-plugin
- tabs
- component
- red
license: Other
maintainers: null
name: vuepress-plugin-tabs-red
npm: https://www.npmjs.com/package/vuepress-plugin-tabs-red
publisher:
  avatar: null
  email: arklaza_uva@hotmail.com
  name: null
  url: null
  username: kai9029
repository: https://github.com/Kai9026/vuepress-plugin-tabs
score: 0.3398350350729432
stars: 0
unstable: false
version: 1.0.1
watchers: 0

---

# [vuepress-plugin-tabs-red](https://github.com/Kai9026/vuepress-plugin-tabs.git)

Vuepress plugin - markdown custom container to display content in tabs from [Element UI](https://github.com/ElemeFE/element)

## Docs
This project is a fork of: 
> https://superbiger.github.io/vuepress-plugin-tabs

## Install
> This plugin requires VuePress >= 1.0.0, for now you can try it via yarn add vuepress@next -D 

```shell
yarn add vuepress-plugin-tabs-red -D
```

```javascript
// .vuepress/config.js
module.exports = {
  plugins: [
    'vuepress-plugin-tabs-red'
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

### Q&A
* How to get mouse position with canvas ?
```javascript

var canvas = document.getElementById('screen');
var mouse = getMouse(canvas);

function addEvent(obj, type, handle) {
  try {
    obj.addEventListener(type, handle, false);
  } catch (e) {
    try {
      obj.attachEvent("on" + type, handle);
    } catch (e) {
      obj["on" + type] = handle;
    }
  }
}

function getMouse(element) {
  var mouse = { x: 0, y: 0 };

  addEvent(element, "mousemove", function(e) {
    var x, y;
    var e = e || window.event;
    const box = element.getBoundingClientRect();
    x = e.clientX - box.x;
    y = e.clientY - box.y;
    mouse.x = x;
    mouse.y = y;
  });

  return mouse;
}
```

