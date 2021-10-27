---
author:
  avatar: https://avatars.githubusercontent.com/u/2064609?v=4
  email: null
  name: Ludovic Dehon
  url: null
  username: tchiotludo
bugs: https://github.com/tchiotludo/vuepress-plugin-child-toc/issues
category: plugin
date: '2020-11-09T20:52:07.230Z'
deprecated: false
description: Vuepress plugin to add a global Table of Contents component
downloads: null
homepage: https://github.com/tchiotludo/vuepress-plugin-child-toc#readme
keywords:
- vuepress
- toc
license: MIT License
maintainers: null
name: vuepress-plugin-child-toc
npm: https://www.npmjs.com/package/vuepress-plugin-child-toc
publisher:
  avatar: null
  email: tchiot.ludo@gmail.com
  name: null
  url: null
  username: tchiotludo
repository: https://github.com/tchiotludo/vuepress-plugin-child-toc
score: 0.39579941844699845
stars: 3
unstable: true
version: 0.1.2
watchers: 3

---

# vuepress-plugin-child-toc
> Display child page table of content on your vuepress documentation

[![license](https://img.shields.io/github/license/tchiotludo/vuepress-plugin-child-toc.svg?maxAge=2592000&style=flat-square)](https://github.com/tchiotludo/vuepress-plugin-child-toc/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/vuepress-plugin-child-toc.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-child-toc)
![npm downloads](https://img.shields.io/npm/dy/vuepress-plugin-child-toc)
[![Dependency Status](https://david-dm.org/tchiotludo/vuepress-plugin-child-toc.svg?style=flat-square)](https://david-dm.org/tchiotludo/vuepress-plugin-child-toc)
[![devDependency Status](https://david-dm.org/tchiotludo/vuepress-plugin-child-toc/dev-status.svg?style=flat-square)](https://david-dm.org/tchiotludo/vuepress-plugin-child-toc#info=devDependencies)

## Requirements
* This plugin requires VuePress >= **1.0.0**.

## Features

Add a `<ChildTableOfContents />` component that you can use in your markdown in order to get a Table of Contents for all the child page (meaning url starting with the current page url).

## Install

```bash
npm i vuepress-plugin-child-toc
```

## Usage

Using this plugin:

```javascript
// .vuepress/config.js
module.exports = {
  plugins: ['vuepress-plugin-child-toc']
}
```

then add your table of components where you want in your markdown pages:

```mdx
# All child page table of contents
<ChildTableOfContents />

# All child page table of contents with max 2 max distance level
<ChildTableOfContents :max="2"/>

# Add internal, anchor link in the table of contents
<ChildTableOfContents :header="true"/>

# Display Child TOC for this specific page
<ChildTableOfContents pageUrl="/blogs/"/>
```

## Inspiration
Largely inspired from plugin [vuepress-plugin-global-toc](https://github.com/sylvainpolletvillard/vuepress-plugin-global-toc)

## License

