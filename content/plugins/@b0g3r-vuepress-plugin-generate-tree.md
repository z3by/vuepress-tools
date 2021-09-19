---
author:
  avatar: https://avatars.githubusercontent.com/u/53175244?v=4
  email: kotvberloge@gmail.com
  name: Dima Boger
  url: null
  username: b0g3r
bugs: https://github.com/tlbootcamp/vuepress-plugin-generate-tree/issues
category: plugin
date: '2020-06-07T09:35:56.811Z'
deprecated: false
description: Vuepress Plugin for generating tree object with each page in locale prefix
downloads: null
homepage: https://github.com/tlbootcamp/vuepress-plugin-generate-tree
keywords:
- tree
- plugin
- sidebar
- vuepress
license: MIT License
maintainers: null
name: '@b0g3r/vuepress-plugin-generate-tree'
npm: https://www.npmjs.com/package/%40b0g3r%2Fvuepress-plugin-generate-tree
publisher:
  avatar: null
  email: kotvberloge@gmail.com
  name: null
  url: null
  username: b0g3r
repository: https://github.com/tlbootcamp/vuepress-plugin-generate-tree
score: 0.25649308792862135
stars: 0
unstable: true
version: 0.2.7
watchers: 0

---

<h1 align="center">vuepress-plugin-generate-tree</h1>
<div align="center">

Vuepress Plugin for generating tree object with each page in locale prefix


![Version](https://img.shields.io/npm/v/@b0g3r/vuepress-plugin-generate-tree?style=flat-square)
![License](https://img.shields.io/npm/l/@b0g3r/vuepress-plugin-generate-tree?style=flat-square)

</div>

## Sorry, plugin for what?
In our [Teamlead Roadmap](https://github.com/tlbootcamp/tlroadmap) we wanted to generate a tree with pages structure and meta-data.

It is very useful for automatically build sidebar, and vuepress community has [plugin](https://github.com/shanyuhai123/vuepress-plugin-auto-sidebar) for it. But we need not only sidebar, but also meta-data, exporting to file, special ordering, so we decided to create a new specific plugin 🙄 (yes, [NIH syndrome](https://en.wikipedia.org/wiki/Not_invented_here))

Main idea of Teamlead Roadmap is maintaining big mindmap with teamleader's competencies and roles based on VuePress site generator. Web-interface is a good place for beginning, but people want use other mindmap tools and generating other artifacts is a necessity for us. Plugin solves this problem and generate tree of pages with metadata from frontmatter and $page object.

## Install

```sh
yarn add -D @b0g3r/vuepress-plugin-generate-tree
# OR npm install -D @b0g3r/vuepress-plugin-generate-tree
```

## Usage
TODO:
```js
module.exports = {
  plugins: [
  ]
}
```

## Options
TODO: