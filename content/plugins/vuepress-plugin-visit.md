---
author:
  avatar: https://avatars.githubusercontent.com/u/8063914?v=4
  email: null
  name: llqgit
  url: null
  username: llqgit
bugs: https://github.com/llqgit/vuepress-plugin-visit/issues
category: plugin
date: '2019-12-24T12:12:52.693Z'
deprecated: false
description: vuepress plugin for visit count api
downloads: null
homepage: https://github.com/llqgit/vuepress-plugin-visit#readme
keywords:
- vuepress
- plugin
license: false
maintainers: null
name: vuepress-plugin-visit
npm: https://www.npmjs.com/package/vuepress-plugin-visit
publisher:
  avatar: null
  email: llqggl@gmail.com
  name: null
  url: null
  username: llq
repository: https://github.com/llqgit/vuepress-plugin-visit
score: 0.04685131935537183
stars: 1
unstable: true
version: 0.1.0
watchers: 1

---

# vuepress-plugin-visit

vuepress plugin for visit count api

## usage

```js
plugins: {
  "@vuepress/back-to-top": true, // 举例（for example）
  "vuepress-plugin-visit": {     // 当前插件（current plugin）
    host: "http://localhost:8066",
    fetchUrl: "/v1/count",
    incrUrl: "/v1/incr",
    user: "llqgit",
    tag: "blog",
  },
},
```

- host: api host (custom yourself)
- fetchUrl: GET api return a json data = Number (custom yourself)
- incrUrl: POST api count 1 to the db (custom yourself)
- user: who request the api (custom yourself)
- tag: which tag for your site (custom yourself)
