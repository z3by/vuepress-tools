---
author:
  avatar: https://avatars.githubusercontent.com/u/1783210?v=4
  email: vaniyokk@gmail.com
  name: Ivan Kuzmin
  url: null
  username: vaniyokk
bugs: https://github.com/vaniyokk/vuepress-plugin-alias/issues
category: plugin
date: '2018-12-15T19:51:48.921Z'
deprecated: false
description: Vuepress plugin that generates alias pages for proper redirect handling
downloads: null
homepage: https://github.com/vaniyokk/vuepress-plugin-alias#readme
keywords:
- documentation
- vuepress
- plugin
- redirect
- alias
license: false
maintainers: null
name: vuepress-plugin-alias
npm: https://www.npmjs.com/package/vuepress-plugin-alias
publisher:
  avatar: null
  email: vaniyokk@gmail.com
  name: null
  url: null
  username: vaniyokk
repository: https://github.com/vaniyokk/vuepress-plugin-alias
score: 0.3188900727791767
stars: 7
unstable: true
version: 1.0.0-beta
watchers: 7

---

# vuepress-plugin-alias
Vuepress plugin that generates alias pages for proper redirect handling

## Install

* Yarn

  ```sh
  yarn add vuepress-plugin-alias
  ```
* NPM

  ```sh
  npm install vuepress-plugin-alias
  ```

## Usage

### Vuepress v1.x

```js
// .vuepress/config.js
module.exports = {
  plugins: [ 'alias' ]
}
```

and in your front-matter add alias to redirect from

```md
---
alias: old-link.html
---
```
or a list of aliases
```md
---
aliases: 
 - old-link1.html
 - old-link2.html
---
```
