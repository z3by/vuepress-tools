---
author:
  avatar: https://private-avatars.githubusercontent.com/u/5064777?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU0NDAsIm5iZiI6MTczNDY1NDI0MCwicGF0aCI6Ii91LzUwNjQ3NzcifQ.CvlJz52mwgNvPWaKpjwcj5OYpSeAH8ZgzpVJce2rDQI&v=4
  email: 16viko@gmail.com
  name: viko16
  url: null
  username: viko16
bugs: https://github.com/viko16/vuepress-theme-simple/issues
category: themes
date: '2020-12-15T06:46:01.384Z'
deprecated: false
description: "\u270F\uFE0F Very Simple Blog Theme for VuePress"
downloads: null
homepage: https://github.com/viko16/vuepress-theme-simple#readme
keywords:
- vuepress
- vuepress-theme
- blog-theme
license: MIT License
maintainers: null
name: vuepress-theme-simple
npm: https://www.npmjs.com/package/vuepress-theme-simple
publisher:
  avatar: null
  email: 16viko@gmail.com
  name: null
  url: null
  username: viko16
repository: https://github.com/viko16/vuepress-theme-simple
score: 0.46742707946654793
stars: 93
unstable: false
version: 1.2.2
watchers: 93

---

# vuepress-theme-simple

[![npm](https://img.shields.io/npm/v/vuepress-theme-simple.svg)](https://www.npmjs.com/package/vuepress-theme-simple)
[![LICENSE](https://img.shields.io/npm/l/vuepress-theme-simple.svg)](https://github.com/viko16/vuepress-theme-simple/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/viko16/vuepress-theme-simple.svg?theme=shields.io)](https://david-dm.org/viko16/vuepress-theme-simple)

> ✏️ Very Simple Blog Theme for VuePress.

![preview](https://user-images.githubusercontent.com/5064777/52162728-51198680-2713-11e9-9546-e737600be782.png)

Demo: [My Personal Blog](https://ukn.me/) ([Source](https://github.com/viko16/vuepress-blog))

## Features
- 💡 Simple Configuration.
- 🖼️ `/README.md` content will be **IGNORE** by this theme, and replace with posts list as screenshot.
- 📅 The list of posts is sorted by the following two fields:
  - `lastUpdated` based Git Commit **(Default)** - [Detail](https://vuepress.vuejs.org/theme/default-theme-config.html#last-updated)
  - `date` field in FrontMatter **(Higher Priority)** - [Detail](https://vuepress.vuejs.org/guide/frontmatter.html)

## Installation

> Note: Work For VuePress 1.x

```shell
$ npm install vuepress-theme-simple --save-dev
# or
$ yarn add vuepress-theme-simple --dev
```

## Usage

Modify your `.vuepress/config.js` and provide the `theme` option.

```js
module.exports = {
  theme: 'simple',
}
```

And that's some additional configs: (Optional) 
```js
module.exports = {
  theme: 'simple',
  themeConfig: {
    author: 'YOUR NAME', // will display on the page footer
    navbar: { // will display below the title
      YOUR_SITE_NAME: 'YOUR_SITE_URL',
    }
  }
}
```

## Development

```sh
npm run dev
```

## License

[MIT License](https://opensource.org/licenses/MIT) © [viko16](https://github.com/viko16)
