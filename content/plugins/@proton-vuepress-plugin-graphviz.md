---
author:
  avatar: https://private-avatars.githubusercontent.com/u/8642?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTYwNDAsIm5iZiI6MTczNDY1NDg0MCwicGF0aCI6Ii91Lzg2NDIifQ.CY4CrpahVR-zSt34rTAbUnfWysq8HakxvxVv7954C6A&v=4
  email: awwaiid@thelackthereof.org
  name: Brock Wilcox
  url: null
  username: awwaiid
bugs: https://github.com/awwaiid/vuepress-plugin-graphviz/issues
category: plugins
date: '2022-04-14T22:49:46.143Z'
deprecated: false
description: A Vuepress plugin providing easy Graphviz diagramming
downloads: null
homepage: https://github.com/awwaiid/vuepress-plugin-graphviz#readme
keywords:
- documentation
- vue
- vuepress
- graphviz
- diagrams
- plugin
license: false
maintainers: null
name: '@proton/vuepress-plugin-graphviz'
npm: https://www.npmjs.com/package/%40proton%2Fvuepress-plugin-graphviz
publisher:
  avatar: null
  email: syedjafri97@gmail.com
  name: null
  url: null
  username: jafri
repository: https://github.com/awwaiid/vuepress-plugin-graphviz
score: 0.06026038908107664
stars: 0
unstable: false
version: 2.2.1
watchers: 0

---

# VuePress Plugin for graphviz (Viz.js)

> Use graphviz Diagrams in VuePress

This [VuePress](https://vuepress.vuejs.org) plugin provides a global component wrapping Graphviz (via [Viz.js fork by aduh95](https://github.com/aduh95/viz.js). The plugin is designed to work with VuePress v1.x.

Main documentation site is at https://awwaiid.github.com/vuepress-plugin-graphviz.

## Installation

You can install it with

``` shell
yarn add -D vuepress-plugin-graphviz
```

or

``` shell
npm install --save-dev vuepress-plugin-graphviz
```

Then you just need to register the plugin in your `.vuepress/config.js`:

``` js
module.exports = {
    // ...
    plugins: [
        'vuepress-plugin-graphviz'
    ]
    // ...
}
```

## Usage

The recommended usage is to place your graphviz diagrams inside
a fenced code block with the language 'graphviz':

    ```graphviz
    digraph {
      A -> B -> C
    }
    ```

## Credits

This work is based directly off of [vuepress-plugin-mermaidjs](https://github.com/eFrane/vuepress-plugin-mermaidjs).
