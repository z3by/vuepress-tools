---
author:
  avatar: https://private-avatars.githubusercontent.com/u/8063914?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU2MjAsIm5iZiI6MTczNDY1NDQyMCwicGF0aCI6Ii91LzgwNjM5MTQifQ.2RHsIgQUtaqn9umU8cdt-01UacZHXbdTcPDdnWDRhV8&v=4
  email: null
  name: llqgit
  url: null
  username: llqgit
bugs: https://github.com/llqgit/vuepress-plugin-visit/issues
category: plugins
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
score: 0.14943263247215519
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
