---
author:
  avatar: https://avatars.githubusercontent.com/u/2627625?v=4
  email: null
  name: Sloaix
  url: null
  username: Sloaix
bugs: https://github.com/Sloaix/vuepress-plugin-locale-redirect/issues
category: plugin
date: '2021-07-10T19:46:06.972Z'
deprecated: false
description: VuePress plugin - locale redirect
downloads: null
homepage: https://github.com/Sloaix/vuepress-plugin-locale-redirect
keywords:
- vuepress-plugin
- vuepress
- plugin
- locale
- language
- redirect
license: false
maintainers: null
name: vuepress-plugin-locale-redirect
npm: https://www.npmjs.com/package/vuepress-plugin-locale-redirect
publisher:
  avatar: null
  email: faith.epiphone@gmail.com
  name: null
  url: null
  username: sloaix
repository: https://github.com/Sloaix/vuepress-plugin-locale-redirect
score: 0.5093726486986465
stars: 1
unstable: false
version: 1.0.1
watchers: 1

---

# English description
If your vuepress already supports multiple languages, this plugin can automatically redirect web pages to the browser's preferred language.

Whenever a user enters the homepage, this plugin will detect the preferred language of the current browser, and then redirect the homepage of the preferred language.

**Only supports Vuepress2 above !!!**

## Usage

```bash
npm install --save-dev vuepress-plugin-locale-redirect
```

```javascript
module.exports = {
  plugins: [
    'vuepress-plugin-locale-redirect',
  ]
}
```

## [Sample Website](https://folto.calmlyfish.com)

The sample website currently only supports simplified Chinese, traditional Chinese, English, and Japanese

# 中文说明

如果你的 vuepress 已经支持多种语言，这个插件可以自动将网页重定向到浏览器的首选语言。

每当用户进入主页的时候，本插件会检测当前浏览器的首选语言，然后重定向首选语言的首页。

**只支持 Vuepress2 以上版本！！！**

## 使用方法

```bash
npm install --save-dev vuepress-plugin-locale-redirect
```

```javascript
module.exports = {
  plugins: [
    'vuepress-plugin-locale-redirect',
  ]
}
```

## [示例网站](https://folto.calmlyfish.com)

示例网站目前仅支持简体中文、繁体中文、英文、日语
