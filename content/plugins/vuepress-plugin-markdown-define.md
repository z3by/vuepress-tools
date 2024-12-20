---
author:
  avatar: https://private-avatars.githubusercontent.com/u/11868477?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUyMDAsIm5iZiI6MTczNDY1NDAwMCwicGF0aCI6Ii91LzExODY4NDc3In0.WIhKi8dpPscnKsgjnidMocCUGyWT3aiUqER6yCZjl9Y&v=4
  email: allenforuse@gmail.com
  name: allen
  url: null
  username: justforuse
bugs: https://github.com/justforuse/vuepress-plugin-markdown-define/issues
category: plugins
date: '2022-06-06T09:38:14.358Z'
deprecated: false
description: define variables in markdown file for vuepress
downloads: null
homepage: https://github.com/justforuse/vuepress-plugin-markdown-define#readme
keywords:
- vuepress
- plugin
- vue
license: MIT License
maintainers: null
name: vuepress-plugin-markdown-define
npm: https://www.npmjs.com/package/vuepress-plugin-markdown-define
publisher:
  avatar: null
  email: allenforuse@gmail.com
  name: null
  url: null
  username: justforuse
repository: https://github.com/justforuse/vuepress-plugin-markdown-define
score: 0.5124280859404462
stars: 1
unstable: false
version: 1.0.3
watchers: 1

---

# Vuepress-plugin-markdown-define

## Install

```
npm install vuepress-plugin-markdown-define
```

## Usage

in `config.js`

```js
const CONSTS = {
  __VERSION__: require('../../package.json').version
}

module.exports = {
  // ...
  plugins: [
    [
      'markdown-define',
      CONSTS
    ]
  ]
}

```

Your `.md` file source code:

```md
Current version is __VERSION__
```

will rendered as:

```md
Current version is 1.0.0
```