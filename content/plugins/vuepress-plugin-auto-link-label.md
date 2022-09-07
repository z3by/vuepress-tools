---
author:
  avatar: https://avatars.githubusercontent.com/u/1549175?v=4
  email: null
  name: Shinichiro MORI
  url: null
  username: smori1983
bugs: https://github.com/smori1983/vuepress-plugin-auto-link-label/issues
category: plugins
date: '2022-01-29T04:04:47.598Z'
deprecated: false
description: VuePress plugin to replace link label.
downloads: null
homepage: https://github.com/smori1983/vuepress-plugin-auto-link-label#readme
keywords:
- vuepress
- vuepress-plugin
- markdown-it
license: MIT License
maintainers: null
name: vuepress-plugin-auto-link-label
npm: https://www.npmjs.com/package/vuepress-plugin-auto-link-label
publisher:
  avatar: null
  email: shinichiro.mori.1983@gmail.com
  name: null
  url: null
  username: smori1983
repository: https://github.com/smori1983/vuepress-plugin-auto-link-label
score: 0.4942089051617393
stars: 0
unstable: true
version: 0.1.0
watchers: 0

---

# vuepress-plugin-auto-link-label

Replaces Markdown link label (specified by '`marker`' option) with page title.


## Option

- `marker`: string of replace target (default: '`!`').


## Configuration

`.vuepress/config.js`

```
module.exports = {
  plugins: [
    ['auto-link-label', {
      marker: '!!!',
    }],
  ],
};
```


## Precautions for use

- Markdown link should be the site root-relative path.


## Example

`/path1/page1.md`

```
# Page 1

...
```

`/path2/page2.md`

```
See: [!](/path1/page1.md).
```

will be (`!` is converted to `Page 1`):

```html
<p>See: <a href="/path1/page1.html">Page 1</a>.</p>
```
