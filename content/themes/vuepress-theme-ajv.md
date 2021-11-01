---
author:
  avatar: https://avatars.githubusercontent.com/u/9140811?v=4
  email: write@andreasvirkus.me
  name: Andreas Virkus
  url: https://andreasvirkus.me
  username: igby
bugs: https://github.com/andreasvirkus/vuepress-theme-ajv/issues
category: theme
date: '2018-04-21T11:37:00.986Z'
deprecated: false
description: Vuepress custom blog theme
downloads: null
homepage: https://github.com/andreasvirkus/vuepress-theme-ajv#readme
keywords:
- vuepress
- blog
- static
- ajv
- theme
license: false
maintainers: null
name: vuepress-theme-ajv
npm: https://www.npmjs.com/package/vuepress-theme-ajv
publisher:
  avatar: null
  email: write@andreasvirkus.me
  name: null
  url: null
  username: igby
repository: https://github.com/andreasvirkus/vuepress-theme-ajv
score: 0.3377638690424005
stars: 5
unstable: false
version: 1.0.2
watchers: 5

---

# vuepress-theme-ajv

A blog friendly custom theme for Vuepress.

## Usage

See [Vuepress](https://vuepress.vuejs.org/guide/getting-started.html) official docs for the Getting Started guide.
After setting up Vuepress, list this theme in your `.vuepress/config.js` file under the `theme` parameter

```json
theme: ajv
```

Set the necessary `themeConfig` options in your `.vuepress/config.js`. Much of the same config params apply
as they do for Vuepress [default theme](https://vuepress.vuejs.org/default-theme-config/). Things excluded by this theme are:
- locales
- homepage
- sidebar (our navbar acts as a sidebar)

You're all set to run `vuepress dev docs`!

## TODO
- Refactor Stylus to native CSS with PostCSS nesting
- Swap vars with CSS custom properties
- Add responsive menu
- Set focus styles only for keyboard events (see [example](https://codepen.io/ajv/pen/dMRwyQ))