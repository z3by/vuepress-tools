---
author:
  avatar: https://avatars.githubusercontent.com/u/566536?v=4
  email: null
  name: Sylvain Pollet-Villard
  url: null
  username: sylvainpolletvillard
bugs: https://github.com/sylvainpolletvillard/vuepress-plugin-global-toc/issues
category: plugin
date: '2021-03-20T12:22:50.172Z'
deprecated: false
description: Vuepress plugin to add a global Table of Contents component
downloads: null
homepage: https://github.com/sylvainpolletvillard/vuepress-plugin-global-toc#readme
keywords:
- vuepress
- toc
license: MIT License
maintainers: null
name: vuepress-plugin-global-toc
npm: https://www.npmjs.com/package/vuepress-plugin-global-toc
publisher:
  avatar: null
  email: sylvain.pollet.villard@gmail.com
  name: null
  url: null
  username: sylvainpolletvillard
repository: https://github.com/sylvainpolletvillard/vuepress-plugin-global-toc
score: 0.37473719276200734
stars: 7
unstable: false
version: 1.1.0
watchers: 7

---

# vuepress-plugin-global-toc

[![NPM version](https://badgen.net/npm/v/vuepress-plugin-global-toc)](https://npmjs.com/package/vuepress-plugin-global-toc) [![NPM downloads](https://badgen.net/npm/dm/vuepress-plugin-global-toc)](https://npmjs.com/package/vuepress-plugin-global-toc)

> This plugin requires VuePress >= **1.0.0**.

## Features

- Add a `<GlobalTableOfContents />` component that you can use in your markdown instead of `[[toc]]` to get a global Table of Contents, i.e. a table of contents that covers the entire vuepress website.
- Internally uses the same function that retrieves the items in the sidebar

## Install

```bash
npm i vuepress-plugin-global-toc
```

## Usage

Using this plugin:

```javascript
// .vuepress/config.js
module.exports = {
  plugins: ['vuepress-plugin-global-toc']
}
```

then add your table of components where you please in your markdown pages:

```mdx
# Table of contents

<GlobalTableOfContents />
```