---
author:
  avatar: https://avatars.githubusercontent.com/u/34507012?v=4
  email: sanbaofeng@baijiahulian.com
  name: sanbaofeng
  url: null
  username: x-bao
bugs: https://github.com/x-bao/vuepress-theme-bb/issues
category: theme
date: '2019-07-05T14:52:09.406Z'
deprecated: false
description: A vuepress theme extends from @vuepress/theme-default
downloads: null
homepage: https://github.com/x-bao/vuepress-theme-bb#readme
keywords:
- vuepress
- vuepress-theme
license: MIT License
maintainers: null
name: vuepress-theme-bb
npm: https://www.npmjs.com/package/vuepress-theme-bb
publisher:
  avatar: null
  email: sanbaofeng@foxmail.com
  name: null
  url: null
  username: baof
repository: https://github.com/x-bao/vuepress-theme-bb
score: 0.20083334811533726
stars: 0
unstable: false
version: 1.0.1
watchers: 0

---

# vuepress-theme-bb

> This plugin requires VuePress >= **1.0.0**

A vuepress blog theme extends from [@vuepress/theme-default](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/theme-default/README.md)

[Blog Tool](https://www.npmjs.com/package/vuepress-plugin-new) | [中文说明](./README-zh.md)  |  [Demo](https://blog.sanbaofengs.com)

## Features

- Tiny
- 404 Page
- Remove something doesn't matter for me

## Install

```bash
npm i vuepress-theme-bb
```

## Usage

### Using this theme:

```js
// .vuepress/config.js
module.exports = {
    theme: 'vuepress-theme-bb'
}
```

### Config

Everything stays the same as [default](https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html)

**Expect**:
- Sidebar: No such thing.
- Nav: No such thing.
- Home page: It has been written. *README.md* is required. All you need is
    ```md
    <!-- @file README.md -->
    ---
    home: true
    about: path-to-your-about-page
    ---
    ```

## Development

```bash
git clone https://github.com/x-bao/vuepress-theme-bb
cd vuepress-theme-bb
yarn
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :P


## Author

**vuepress-theme-bb** © [San Baofeng](https://github.com/x-bao), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by San Baofeng

> [San Baofeng's](https://arts.sanbaofengs.com) · GitHub [@San Baofeng](https://github.com/x-bao) · Twitter [@Baofeng15](https://twitter.com/Baofeng15)
