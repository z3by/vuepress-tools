---
author:
  avatar: https://avatars.githubusercontent.com/u/25148427?v=4
  email: darktasevski@gmail.com
  name: Darko Tasevski
  url: null
  username: puritanic
bugs: https://github.com/Puritanic/vuepress-theme-solarized/issues
category: theme
date: '2020-04-12T13:25:03.197Z'
deprecated: false
description: Solarized theme for Vuepress
downloads: null
homepage: https://github.com/Puritanic/vuepress-theme-solarized#readme
keywords:
- documentation
- generator
- vue
- vuepress
license: MIT License
maintainers: null
name: vuepress-theme-solarized
npm: https://www.npmjs.com/package/vuepress-theme-solarized
publisher:
  avatar: null
  email: darktasevski@gmail.com
  name: null
  url: null
  username: puritanic
repository: https://github.com/Puritanic/vuepress-theme-solarized
score: 0.2183125760572408
stars: 3
unstable: false
version: 1.1.1
watchers: 3

---

# vuepress-theme-solarized

[![npm](https://img.shields.io/npm/v/vuepress-theme-solarized)](https://www.npmjs.com/package/vuepress-theme-solarized) [![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE) [![Vuepress](https://img.shields.io/github/package-json/dependency-version/Puritanic/vuepress-theme-solarized/@vuepress/plugin-search?label=vuepress)](https://github.com/vuejs/vuepress) [![Build Status](https://travis-ci.org/Puritanic/vuepress-theme-solarized.svg?branch=master)](https://travis-ci.org/Puritanic/vuepress-theme-solarized)

The Solarized theme for Vuepress

## Features

-   **Customizable typography**: Import and use your favorite web-fonts. Customize font sizes and text-adjustment for body text
-   **Dark and light themes**: With a theme-switcher and native theme detection to set the theme automatically as per the user preference

## Demo

I'm too busy to create a proper demo, but you can take a look at my [Blog/Notes](https://puritanic.github.io/CompSci/) webpage if you want to see how it's looking.

## Get Started

Add the dependency to your existing Vuepress project via Yarn or NPM.

```sh
yarn add -D vuepress-theme-solarized
npm install -D vuepress-theme-solarized
```

Update `.vuepress/config.js` as follows.

```js
module.exports = {
	theme: 'vuepress-theme-solarized',
	globalUIComponents: ['ThemeManager'],
};
```

`ThemeManager` provides theme-switching functionality across the app.

Note that you can also use the shorthand name for the theme.

```js
module.exports = {
	theme: 'solarized',
	globalUIComponents: ['ThemeManager'],
};
```

## Plugins

This theme has the following plugins built in:

-   [@vuepress/plugin-active-header-links](https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-active-header-links)
-   [@vuepress/plugin-google-analytics](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-google-analytics)
-   [@vuepress/plugin-search](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-search)
