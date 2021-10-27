---
author:
  avatar: https://avatars.githubusercontent.com/u/44045911?v=4
  email: hi@xuann.wang
  name: Kid
  url: https://xuann.wang
  username: kidonng
bugs: https://github.com/kidonng/vuepress-plugin-contributors/issues
category: plugin
date: '2021-02-27T14:21:08.522Z'
deprecated: false
description: VuePress plugin for showing GitHub contributors
downloads: null
homepage: https://github.com/kidonng/vuepress-plugin-contributors#readme
keywords: null
license: MIT License
maintainers: null
name: '@kidonng/vuepress-plugin-contributors'
npm: https://www.npmjs.com/package/%40kidonng%2Fvuepress-plugin-contributors
publisher:
  avatar: null
  email: kidonng@gmail.com
  name: null
  url: null
  username: kidonng
repository: https://github.com/kidonng/vuepress-plugin-contributors
score: 0.36801455405252803
stars: 5
unstable: true
version: 0.3.0
watchers: 5

---

# [VuePress](https://vuepress.vuejs.org/) Contributors Plugin

This plugin provides a component for showing GitHub contributors. It uses [GitHub File Contributors API](https://github.com/kidonng/api#github-file-contributors) under the hood.

![Screenshot](screenshot.png)

## Usage

1. Install `@kidonng/vuepress-plugin-contributors`
2. Add the plugin to `.vuepress/config.js`

```js
module.exports = {
  plugins: [
    ['@kidonng/vuepress-plugin-contributors', {
      // Repository (default to `themeConfig.docsRepo || themeConfig.repo`)
      docsRepo: 'vuejs/vuepress',
      // Branch (defaults to `master`)
      docsBranch: 'master',
      // Document directory (defaults to `themeConfig.docsDir`)
      docsDir: 'docs',
      // Contributors label (defaults to `Contributors`)
      label: 'Authors',
      // API endpoint (defaults to https://api.xuann.wang/api/github-file-contributors)
      api: 'https://example.com'
    }]
  ],
  // i18n
  themeConfig: {
    locales: {
      '/': { contributorsLabel: 'Authors' },
      '/zh/': { contributorsLabel: '贡献者' }
    }
  }
}
```

3. Add `<Contributors />` component to your page
4. Profit 🎉

## Customizing

You can customize the component via `.contributors` class.
