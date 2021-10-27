---
author:
  avatar: https://avatars.githubusercontent.com/u/4539223?v=4
  email: m2de@outlook.com
  name: Marco Mark
  url: null
  username: m2de
bugs: https://github.com/silvanite/vuepress-plugin-markdown-classes/issues
category: plugin
date: '2019-06-27T09:58:58.509Z'
deprecated: false
description: Add class names to markdown generated html in VuePress
downloads: null
homepage: https://github.com/silvanite/vuepress-plugin-markdown-classes#readme
keywords:
- vuepress
- plugin
- markdown
license: false
maintainers: null
name: '@silvanite/vuepress-plugin-markdown-classes'
npm: https://www.npmjs.com/package/%40silvanite%2Fvuepress-plugin-markdown-classes
publisher:
  avatar: null
  email: m2de@outlook.com
  name: null
  url: null
  username: m2de
repository: https://github.com/silvanite/vuepress-plugin-markdown-classes
score: 0.3486339813320676
stars: 4
unstable: false
version: 1.0.2
watchers: 4

---

# VuePress Plugin to add unique class names to markdown generated html

Additional information about this Plugin can be found at [https://www.marcomark.net/code/vuepress/markdown-classes.html](https://www.marcomark.net/code/vuepress/markdown-classes.html)

## Example

```html
<p class="md-paragraph_open">Vuepress</p>
```

## Installation

```sh
npm i @silvanite/vuepress-plugin-markdown-classes
```

Load the plugin inside your `config.js` or in your theme's `index.js`

```js
module.exports = {
    ...
    "plugins": [
        "@silvanite/markdown-classes"
    ]
}
```

## Configuration options

You can overwrite the default configuration if required

```js
module.exports = {
    ...
    "plugins": [
        ["@silvanite/markdown-classes", {
            "prefix": "md",
            "rules": [
                'blockquote_open',
                'bullet_list_open',
                'code_block',
                'hardbreak',
                'heading_open',
                'hr',
                'html_block',
                'html_inline',
                'image',
                'link_open',
                'ordered_list_open',
                'paragraph_open',
                'softbreak',
                'table_open',
            ]
        }]
    ]
}
```

## Support

If you experience any problems with this VuePress Plugin please open a new issue or get in touch on Twitter [@m2de_io](https://twitter.com/m2de_io). Or just look me up anyway, I'd love to hear from you.
