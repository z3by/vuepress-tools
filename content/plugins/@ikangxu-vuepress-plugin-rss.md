---
author:
  avatar: https://private-avatars.githubusercontent.com/u/17905150?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUxNDAsIm5iZiI6MTczNDY1Mzk0MCwicGF0aCI6Ii91LzE3OTA1MTUwIn0.PeiiPFEUqBw9iFNNrz0WTn9CeqL8Pl6AgJBK1losrwU&v=4
  email: ikangxu@outlook.com
  name: IKangXu
  url: null
  username: IKangXu
bugs: https://github.com/IKangXu/vuepress-plugin-rss/issues
category: plugins
date: '2020-06-03T03:24:03.335Z'
deprecated: false
description: rss plugin for vuepress-theme-ic
downloads: null
homepage: https://github.com/IKangXu?tab=repositories
keywords:
- vuepress-theme-ic
- rss
license: MIT License
maintainers: null
name: '@ikangxu/vuepress-plugin-rss'
npm: https://www.npmjs.com/package/%40ikangxu%2Fvuepress-plugin-rss
publisher:
  avatar: null
  email: ikangxu@qq.com
  name: null
  url: null
  username: kangxu
repository: https://github.com/IKangXu/vuepress-plugin-rss
score: 0.4072754386800855
stars: 0
unstable: true
version: 0.0.4
watchers: 0

---

```js
[require('@ikangxu/vuepress-plugin-rss'), {
  base_url: '/', // required
  site_url: 'http://ikangxu.cn', // required
  copyright: 'IKangXu 2020', // optional
  // filter some post
  filter: (frontmatter) => { return [true|false] },
  // How much articles
  count: 20
}]
```