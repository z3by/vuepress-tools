---
author:
  avatar: https://avatars.githubusercontent.com/u/54167020?v=4
  email: recoluan@outlook.com
  name: reco_luan
  url: null
  username: reco_luan
bugs: https://github.com/vuepress-reco/vuepress-plugin-rss/issues
category: plugin
date: '2020-07-10T05:33:54.763Z'
deprecated: false
description: RSS plugin only for vuepress-theme-reco.
downloads: null
homepage: https://vuepress-theme-reco.recoluan.com
keywords:
- vuepress-theme-reco
- rss
- vuepress
license: MIT License
maintainers: null
name: '@vuepress-reco/vuepress-plugin-rss'
npm: https://www.npmjs.com/package/%40vuepress-reco%2Fvuepress-plugin-rss
publisher:
  avatar: null
  email: recoluan@outlook.com
  name: null
  url: null
  username: reco_luan
repository: https://github.com/vuepress-reco/vuepress-plugin-rss
score: 0.3789207762717264
stars: 0
unstable: false
version: 1.0.2
watchers: 0

---

# @vuepress-reco/vuepress-plugin-rss

## Introduce

RSS plugin only for vuepress-theme-reco.

### Name

- **As plugin**: `@vuepress-reco/vuepress-plugin-rss`

## Usage

### site_url

- required: `true`
- description: 网站地址
- example: `https://vuepress-theme-reco.recoluan.com`

### copyright

- required: `false`
- description: 版权
- default: `'${$themeConfig.author} ${$themeConfig.startYear}'`
- example: `reco_luan 2019`

### filter

- required: `false`
- description: 博客的过滤器
- default: `(frontmatter) => true`
- example: `(frontmatter) => { return [true|false] }`

### count

- required: `false`
- description: 显示最近多少篇博客
- default: `20`
- example: `20`