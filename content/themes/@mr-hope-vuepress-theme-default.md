---
author:
  avatar: https://avatars.githubusercontent.com/u/78192711?v=4
  email: null
  name: Evan You
  url: null
  username: vuepress-theme-hope
bugs: https://github.com/vuepress-theme-hope/hope-runtime/issues
category: themes
date: '2021-10-31T06:53:16.754Z'
deprecated: false
description: Default theme for VuePress
downloads: null
homepage: https://github.com/vuepress-theme-hope/hope-runtime/blob/main/packages/vuepress-theme-default#readme
keywords:
- documentation
- generator
- vue
- vuepress
license: MIT License
maintainers: null
name: '@mr-hope/vuepress-theme-default'
npm: https://www.npmjs.com/package/%40mr-hope%2Fvuepress-theme-default
publisher:
  avatar: null
  email: zhangbowang1998@gmail.com
  name: null
  url: null
  username: mister-hope
repository: https://github.com/vuepress-theme-hope/hope-runtime
score: 0.5952333621333226
stars: 1
unstable: false
version: 1.9.0-alpha.1
watchers: 1

---

# @mr-hope/vuepress-runtime

This is a forked version from the origin [vuepress v1](https://github.com/vuejs/vuepress).

Since nobody is maintaining VuePress V1, it has a few known bugs and outdated deps. So here is this runtime for:

- Update deps to avoid outdated deps and security problems (which means droping Node V10)
- Bug fixes

## Changes

With latest deps:

- [x] markdown-it V12
- [x] postcss V8
- [ ] webpack V5
- ... and so on

Bug fixes:

- [x] Markdown render issues in old markdown-it versions
- [x] File watching
- [ ] Broken Media links containing none-ASII characters in markdown
- ... and so on

## Why should you use this intead of staying in V1

- A lot of people may still need Vue2
- The original one is having security alerts that can not be fixed
- Some project may use latest deps like Webpack5, and in that case the original V1 won't work.
- ...
