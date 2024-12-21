---
author:
  avatar: https://avatars.githubusercontent.com/u/23313167?v=4
  email: qw13131wang@gmail.com
  name: tolking
  url: null
  username: tolking
bugs: https://github.com/tolking/vuepress-theme-default-prefers-color-scheme/issues
category: themes
date: '2020-11-29T03:08:06.527Z'
deprecated: false
description: add prefers-color-scheme for vuepress default theme
downloads: null
homepage: https://github.com/tolking/vuepress-theme-default-prefers-color-scheme
keywords:
- vuepress
- vuepress-theme
- documentation
- prefers-color-scheme
- light-theme
- dark-theme
license: MIT License
maintainers: null
name: vuepress-theme-default-prefers-color-scheme
npm: https://www.npmjs.com/package/vuepress-theme-default-prefers-color-scheme
publisher:
  avatar: null
  email: qw13131wang@gmail.com
  name: null
  url: null
  username: tolking
repository: https://github.com/tolking/vuepress-theme-default-prefers-color-scheme
score: 0.4882575925782605
stars: 50
unstable: false
version: 2.0.0
watchers: 50

---

:warning: This library is no longer maintained.

It is recommended to use [VitePress](https://github.com/vuejs/vitepress) to build your document, as it supports dark mode by default.

[![License](https://img.shields.io/github/license/tolking/vuepress-theme-default-prefers-color-scheme.svg?style=flat-square&logo=opensourceinitiative)](https://github.com/tolking/vuepress-theme-default-prefers-color-scheme/blob/master/LICENSE)
[![Latest tag via npm](https://img.shields.io/npm/v/vuepress-theme-default-prefers-color-scheme.svg?style=flat-square&logo=npm)](https://npmjs.com/package/vuepress-theme-default-prefers-color-scheme)
[![Latest tag via GitHub](https://img.shields.io/github/v/tag/tolking/vuepress-theme-default-prefers-color-scheme.svg?sort=semver&style=flat-square&logo=github)](https://github.com/tolking/vuepress-theme-default-prefers-color-scheme/tags)

# vuepress-theme-default-prefers-color-scheme

This plugin adds support for *prefers-color-scheme* to the [Vuepress](https://vuepress.vuejs.org) 1.x default theme.

[Live Demo and Documentation](https://tolking.github.io/vuepress-theme-default-prefers-color-scheme)

## Installation

``` sh
yarn add vuepress-theme-default-prefers-color-scheme
# or
npm i vuepress-theme-default-prefers-color-scheme
```

## Usage

``` js
// .vuepress -> config.js
module.exports = {
  theme: 'default-prefers-color-scheme'
}
```

## Options

### overrideTheme (optional)

Force users into a specific theme, ignoring [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

Allowed values:

- `'light' | 'dark'`: Always use the given theme
- `{ light: [beginHours: number, endHours: number], dark: [beginHours: number, endHours: number] }`: Control the time of the day when each theme is used

For example:

``` js
module.exports = {
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    overrideTheme: 'dark',
    // or
    overrideTheme: { light: [6, 18], dark: [18, 6] },
  }
}
```

### prefersTheme (optional)

Use the given theme when the browser does not support prefers-color-scheme but supports CSS Variables

Allowed values:

- `'light' | 'dark'`

For example:

``` js
module.exports = {
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    prefersTheme: 'dark',
  }
}
```

[Theme Config](https://vuepress.vuejs.org/theme/default-theme-config.html)

## Styling

Apply simple color overrides to the styling of the [default preset](https://github.com/tolking/vuepress-theme-default-prefers-color-scheme/blob/master/styles/palette.styl)
in your `.vuepress/styles/palette.styl` file.

Alternatively, set CSS Variables in your `.vuepress/styles/index.styl` file.

**`$accentColor` and `$accentDarkColor` are best changed together**

## Changelog

This project uses semantic versioning and tracks changes in [CHANGELOG](CHANGELOG.md).

## License

[MIT](http://opensource.org/licenses/MIT)
