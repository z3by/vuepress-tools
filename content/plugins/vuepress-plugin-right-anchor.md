---
author:
  avatar: https://avatars.githubusercontent.com/u/49433924?v=4
  email: null
  name: xuek
  url: null
  username: xuekai-china
bugs: https://github.com/xuekai-china/vuepress-plugin-right-anchor/issues
category: plugin
date: '2021-07-03T02:26:08.224Z'
deprecated: false
description: Right-anchor plugin for vuepress
downloads: null
homepage: https://github.com/xuekai-china/vuepress-plugin-right-anchor#readme
keywords:
- vuepres
- right
- anchor
license: MIT License
maintainers: null
name: vuepress-plugin-right-anchor
npm: https://www.npmjs.com/package/vuepress-plugin-right-anchor
publisher:
  avatar: null
  email: ee_shadow@163.com
  name: null
  url: null
  username: xuek
repository: https://github.com/xuekai-china/vuepress-plugin-right-anchor
score: 0.5034422473219211
stars: 12
unstable: true
version: 0.5.2
watchers: 12

---

<h1 align="center">vuepress-plugin-right-anchor</h1>
<div align="center">

![Version](https://img.shields.io/github/package-json/v/xuekai-china/vuepress-plugin-right-anchor?style=flat-square)
![NPM](https://img.shields.io/npm/l/vuepress-plugin-right-anchor?style=flat-square)

</div>

English ｜[中文](./zh-README.md)

> Add **anchor navigation bar** to the right of the document page written in vuepress


## Features
  - Simplify the structure of the left sidebar without losing the function of Title navigation within the page.
  - Click anchor label page over scrolling.
  - When the page scrolls, the corresponding anchor label follows the highlight.
  - Disable global ui component.


## Sample
  [soonspacejs document](http://www.xwbuilders.com:9018/soonspacejs/Docs/1.x/api/basics/sbm.html)


## Install
```bash
yarn add vuepress-plugin-right-anchor -D
# or
npm i vuepress-plugin-right-anchor -D
```


## Use
Add in `.vuepress/config.js`
```js
module.exports = {
  // ...
  plugins: [
    // ...
    ['vuepress-plugin-right-anchor']
  ]
}
```


## Style
Add in `.vuepress/styles/palette.styl`

```stylus
$rightAnchorBgColor = #fff;
$rightAnchorTextColor = $textColor;
$rightAnchorFontSize = 14px;
// btn
$rightAnchorBtnTextColor = $rightAnchorTextColor;
$rightAnchorBtnBgColor = $rightAnchorBgColor;
// menu
$rightAnchorMenuTextColor = $rightAnchorTextColor;
```


## Global Config
Add in `.vuepress/config.js`
```js
module.exports = {
  // ...
  plugins: [
    // ...
    [
      'vuepress-plugin-right-anchor',
      {
        showDepth: 1,
        ignore: [
          '/',
          '/api/'
          // more...
        ],
        expand: {
          trigger: 'hover',
          clickModeDefaultOpen: true
        },
        customClass: 'your-customClass',
        disableGlobalUI: false,
      }
    ]
  ]
}
```

## Param description

### showDepth

  !!! `showLevel` is abandoned in `0.3.x`.

  Which level of title will be used in the right anchor display.
  The pointing meaning of the value is the same as [themeconfig.sidebardepth](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F).

  - Type: null | number
  - Default: null

### ignore

  Don't show right-anchor's pages.

  - Type: array
  - Default: []

### expand

  About expand configuration of menu.

  - Type: object
    - trigger: string  => The trigger mode of the open menu. `'hover' | 'click'`
    - clickModeDefaultOpen: boolean => Click mode is default open?
  - Default:
      ```js
      {
        trigger: 'hover',
        clickModeDefaultOpen: true
      }
      ```

### customClass

  Your customClass for right-anchor.

  - Type: null | string
  - Default: null

### disableGlobalUI

  Disable globalUIComponent in every page.

  - Type: boolean
  - Default: false

  If you want disable globalUIComponent in specific page, try `frontmatter`

  ```YAML
  ---
  rightAnchor:
    disableGlobalUI: true
  ---
  ```

## Page Config

  Set `front-matter` by `vuepress` recommended method in `.md`.

  ```YAML
  ---
  rightAnchor: 
    showDepth: 1
    expand:
      trigger: hover
      clickModeDefaultOpen: true
    customClass: your-customClass
    disableGlobalUI: false
  ---
  ```

