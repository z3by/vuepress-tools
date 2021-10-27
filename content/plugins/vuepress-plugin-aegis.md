---
author:
  avatar: https://avatars.githubusercontent.com/u/6554061?v=4
  email: superaquariuslt@gmail.com
  name: aquariuslt
  url: null
  username: aquariuslt
bugs: https://github.com/aquariuslt/vuepress-plugin-aegis/issues
category: plugin
date: '2020-07-09T13:13:08.866Z'
deprecated: false
description: aegis vuepress plugin support router life cycle monitring
downloads: null
homepage: https://github.com/aquariuslt/vuepress-plugin-aegis#readme
keywords:
- vuepress
- vuepress-plguin
- aegis
- monitor
license: MIT License
maintainers: null
name: vuepress-plugin-aegis
npm: https://www.npmjs.com/package/vuepress-plugin-aegis
publisher:
  avatar: null
  email: superaquariuslt@gmail.com
  name: null
  url: null
  username: aquariuslt
repository: https://github.com/aquariuslt/vuepress-plugin-aegis
score: 0.6057208530385667
stars: 1
unstable: false
version: 1.0.2
watchers: 1

---

# VuePress Plugin : Aegis


[![NPM](https://img.shields.io/npm/v/vuepress-plugin-aegis.svg)](https://www.npmjs.com/package/vuepress-plugin-aegis) 
[![Github Workflow Status](https://github.com/aquariuslt/vuepress-plugin-aegis/workflows/ci/badge.svg)](https://github.com/aquariuslt/vuepress-plugin-aegis) 
[![codecov](https://codecov.io/gh/aquariuslt/vuepress-plugin-aegis/branch/master/graph/badge.svg)](https://codecov.io/gh/aquariuslt/vuepress-plugin-aegis) 
[![Semantic-Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


> VuePress Plugin for [Aegis WebSDK](https://aegis.ivweb.io/#/)




## Usage

Add your aegis project id in `.vuepress/config.js`.

```
  plugins: [
    [
      'vuepress-plugin-aegis',
      {
        aegisId: 'xxxx'  // your aegis project id
      }
    ]
  ]
```
