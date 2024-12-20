---
author:
  avatar: https://private-avatars.githubusercontent.com/u/19198355?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU1NjAsIm5iZiI6MTczNDY1NDM2MCwicGF0aCI6Ii91LzE5MTk4MzU1In0.pG_T_TAQA4RmrkIdDIgECd9ZnZsoRDB3GH5GW4_mtII&v=4
  email: null
  name: artiely
  url: null
  username: artiely
bugs: https://github.com/artiely/vuepress-plugin-valine/issues
category: plugins
date: '2020-08-21T03:47:46.714Z'
deprecated: false
description: Comment plugin in vuepress, such as Valine
downloads: null
homepage: https://github.com/artiely/vuepress-plugin-valine#readme
keywords:
- vuepress
- comment
- plugin
- vue
- gitalk
- valine
license: false
maintainers: null
name: vuepress-plugin-valine
npm: https://www.npmjs.com/package/vuepress-plugin-valine
publisher:
  avatar: null
  email: 1119696785@qq.com
  name: null
  url: null
  username: artiely
repository: https://github.com/artiely/vuepress-plugin-valine
score: 0.4212813360686659
stars: 0
unstable: true
version: 0.3.4
watchers: 0

---

# Vuepress-plugin-valine

> Support popluar comment plugins in Vuepress, such as Valine.

## Features

- Support Valine
- Dynamic Import
- Response router change and refresh automatic
- User can use passage's `$frontmatter`

## Usage

### Install

With `npm`:

```bash
npm install --save vuepress-plugin-valine
```

With `yarn`:

```bash
yarn add vuepress-plugin-valine -D
```

With `cnpm`:

```bash
cnpm i --save vuepress-plugin-valine
```

### Usage

The `options` is exactly the same as `Valine` configuration.

```javascript
module.exports = {
  plugins: [
    [
      'vuepress-plugin-valine',
      {
        appId: 'Your own appId',
        appKey: 'Your own appKey'
      }
    ]
  ]
}
```

## demo

[https://artiely.gitee.io](https://artiely.gitee.io)
