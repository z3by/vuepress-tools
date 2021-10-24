---
author:
  avatar: https://avatars.githubusercontent.com/u/49332985?v=4
  email: srcrszhu@gmail.com
  name: srcrs
  url: null
  username: srcrs
bugs: https://github.com/srcrs/vuepress-plugin-goatcounter/issues
category: plugin
date: '2021-10-13T18:31:18.609Z'
deprecated: false
description: goatcounter plugin for vuepress
downloads: null
homepage: https://github.com/srcrs/vuepress-plugin-goatcounter
keywords:
- documentation
- generator
- vue
- vuepress
license: MIT License
maintainers: null
name: '@akanoa/vuepress-plugin-goatcounter'
npm: https://www.npmjs.com/package/%40akanoa%2Fvuepress-plugin-goatcounter
publisher:
  avatar: null
  email: dev@guern.eu
  name: null
  url: null
  username: akanoa
repository: https://github.com/srcrs/vuepress-plugin-goatcounter
score: 0.17871061766282342
stars: 1
unstable: false
version: 1.0.6
watchers: 1

---

# [vuepress-plugin-goatcounter](https://github.com/srcrs/vuepress-plugin-goatcounter)

> goatcounter plugin for vuepress

## Install

```bash
npm install -D vuepress-plugin-goatcounter
```

## Usage

```javascript
module.exports = {
  plugins: ['vuepress-plugin-goatcounter', {
    'user': '[my-code]'
  }]
}
```

You will access your account at https://[my-code].goatcounter.com.

## Options

### user

- Type: `string`
- Default: `undefined`

Provide the goatcounter user to enable integration.
