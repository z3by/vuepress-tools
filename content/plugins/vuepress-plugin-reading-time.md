---
author:
  avatar: https://avatars.githubusercontent.com/u/5770711?v=4
  email: null
  name: Darren Jennings
  url: null
  username: darrenjennings
bugs: https://github.com/darrenjennings/vuepress-plugin-reading-time/issues
category: plugin
date: '2019-01-05T21:32:34.008Z'
deprecated: false
description: Vuepress plugin to add reading-time functionality to page data
downloads: null
homepage: https://github.com/darrenjennings/vuepress-plugin-reading-time#readme
keywords:
- vue
- vuepress
- reading-time
license: false
maintainers: null
name: vuepress-plugin-reading-time
npm: https://www.npmjs.com/package/vuepress-plugin-reading-time
publisher:
  avatar: null
  email: dmjenn02@gmail.com
  name: null
  url: null
  username: darrenjennings
repository: https://github.com/darrenjennings/vuepress-plugin-reading-time
score: 0.4240448899940161
stars: 34
unstable: true
version: 0.1.1
watchers: 34

---

# vuepress-plugin-reading-time 

> reading time plugin to display how long a post takes to read

[![Npm build badge](https://img.shields.io/npm/v/vuepress-plugin-reading-time.svg?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-reading-time)

```bash
yarn add -D vuepress-plugin-reading-time
# OR npm install -D vuepress-plugin-reading-time
```

## Usage

```javascript
module.exports = {
  plugins: ['vuepress-plugin-reading-time']
}
```

Puts `reading-time` data into `$page` data so you can access like

```js
console.log($page.readingTime)
```

Example output
```js
{
  text: '1 min read',
  minutes: 0.08,
  time: 4800,
  words: 16
}
```

### Overide

You can override by specifying a readingTime object in frontmatter

```
---
title: My great post!
date: "2018-08-13T17:36:55.338Z"
readingTime: { text: "Not so long!", minutes: 3 }
---

Some content here...
```


## Options

### excludes

- Type: `Array<string>`
- Default: ``

Exclude pages by their path via a regular expression. This tests for both `path`
and `regularPath`.

Example:

```javascript
plugins: [
  ['vuepress-plugin-reading-time', {
    excludes: ['/about', '/tag/.*']
  }]
]
```
