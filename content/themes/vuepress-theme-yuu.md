---
author:
  avatar: https://avatars.githubusercontent.com/u/13043871?v=4
  email: sanc.pw@gmail.com
  name: Sanctuary
  url: null
  username: danktuary
bugs: https://github.com/Danktuary/vuepress-theme-yuu/issues
category: themes
date: '2021-06-05T16:52:51.694Z'
deprecated: false
description: A VuePress theme that supports a dark theme, multiple color themes, and
  other useful features.
downloads: null
homepage: https://vuepress-theme-yuu.netlify.app/
keywords:
- vuepress
- theme
- yuu
- vuepress-theme
- dark
- colors
- vue
- customize
- options
license: MIT License
maintainers: null
name: vuepress-theme-yuu
npm: https://www.npmjs.com/package/vuepress-theme-yuu
publisher:
  avatar: null
  email: sanc.pw@gmail.com
  name: null
  url: null
  username: danktuary
repository: https://github.com/Danktuary/vuepress-theme-yuu
score: 0.5113074017975723
stars: 73
unstable: false
version: 3.1.1
watchers: 73

---

<div align="center">
	<img src="https://i.imgur.com/j9bfYBy.png" title="Yuu" alt="Yuu" />
</div>

# Yuu

A [VuePress](https://vuepress.vuejs.org/) theme that supports a dark theme, multiple color themes, and [other useful features](https://vuepress-theme-yuu.netlify.app/theme-configuration.html). Extended upon the [default VuePress theme](https://vuepress.vuejs.org/theme/default-theme-config.html) with some adjustments.

## Installation

You can add Yuu to your current VuePress project by running:

```bash
yarn add vuepress-theme-yuu
# or npm install vuepress-theme-yuu
```

And then setting it in your `docs/.vuepress/config.js` file:

```js
module.exports = {
	theme: 'yuu',
}
```
## Features and configuration

![Yuu user settings dropdown menu](https://i.imgur.com/VCDGN8n.png)

You can check out how to configure all of Yuu's features and a live demo on the [docs site](https://vuepress-theme-yuu.netlify.app/).

## Upgrading

### Upgrade to v3

Yuu v3 brings bug fixes and CSS updates, as well as a few small features and breaking changes. You should also consider upgrading to `vuepress@^1.8.0`.

Features:
- Added a `logo` option to the Yuu theme config
- Added a `labels` option to the Yuu theme config

Breaking changes:
- The `forceTheme` frontmatter option has been renamed to `pageTheme`
