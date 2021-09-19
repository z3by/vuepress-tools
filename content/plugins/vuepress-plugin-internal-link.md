---
author:
  avatar: https://avatars.githubusercontent.com/u/42290260?v=4
  email: scrisqiu@hotmail.com
  name: Roderick Qiu
  url: http://github.com/RoderickQiu
  username: r-q
bugs: https://github.com/RoderickQiu/vuepress-plugin-internal-link/issues
category: plugin
date: '2020-07-29T06:37:16.822Z'
deprecated: false
description: Parse [[internal link]] into normal markdown links to let them be supported
  in vuepress, which is useful for Wiki writers and researchers.
downloads: null
homepage: https://github.com/RoderickQiu/vuepress-plugin-internal-link#readme
keywords:
- documentation
- vue
- vuepress
- vuepress-plugin
- internal
- link
- note
- wiki
- roam
- glossary
- generator
- scris
- RoderickQiu
license: MIT License
maintainers: null
name: vuepress-plugin-internal-link
npm: https://www.npmjs.com/package/vuepress-plugin-internal-link
publisher:
  avatar: null
  email: scrisqiu@hotmail.com
  name: null
  url: null
  username: r-q
repository: https://github.com/RoderickQiu/vuepress-plugin-internal-link
score: 0.32560035078231575
stars: 3
unstable: true
version: 0.2.0
watchers: 3

---

# vuepress-plugin-internal-link

When setting up wikis or taking notes, `[[internal links]]` are useful. However, vuepress itself doens't have a convient way of having internal links. And that's what this plugin is for.

## Install and Use

### 1. Installation

Simply use yarn to fetch this package for you. NPM is also OK.

```shell
yarn add vuepress-plugin-internal-link
```

### 2. Configuration

It's extremely easy to use this plugin.

Find your `.vuepress/config.js`, and just write down:

```js
plugins: {
    'internal-link': {}
}
```

Then the whole world is your oyster.

#### Use with custom parsing pattern

The default pattern can only parse English and Chinese, so in some cases you may need to use another pattern.

Find your `.vuepress/config.js`, and write down:

```js
plugins: {
    'internal-link': {
        linkPattern: /YOUR_PATTERN/
    }
}
```

The pattern should be a valid regex.

### 3. Usage

To use internal link, you need to write stuff like `[[link]]` and `[[another link]]`, which will resulted in an internal link to `./link.md` or `./link.html` after building.

This internal link feature can be used to export articles from platforms like [Obsidian](https://obsidian.md).

Also, for VSCode users, don't hesitate to try [Markdown Notes](https://marketplace.visualstudio.com/items?itemName=kortina.vscode-markdown-notes).

## Acknowledgements

- Based on [ig3/markdown-it-wikilinks](https://github.com/ig3/markdown-it-wikilinks) by [jsepia](https://github.com/jsepia) and [ig3](https://github.com/ig3).
