---
author:
  avatar: https://avatars.githubusercontent.com/u/33414148?v=4
  email: null
  name: dongyuanxin
  url: null
  username: SivanLaai
bugs: https://github.com/SivanLaai/vuepress-plugin-comment-plus/issues
category: plugin
date: '2021-08-02T13:25:29.973Z'
deprecated: false
description: Comment plugin in vuepress, such as Gitalk, Valine...
downloads: null
homepage: https://github.com/SivanLaai/vuepress-plugin-comment-plus#readme
keywords:
- vuepress
- comment
- plugin
- vue
- gitalk
- valine
- waline
license: false
maintainers: null
name: vuepress-plugin-comment-plus
npm: https://www.npmjs.com/package/vuepress-plugin-comment-plus
publisher:
  avatar: null
  email: lyhhap@163.com
  name: null
  url: null
  username: sivanlaai
repository: https://github.com/SivanLaai/vuepress-plugin-comment-plus
score: 0.4154797467198565
stars: 1
unstable: false
version: 1.0.1
watchers: 1

---

# Vuepress-comment-plugin-plus

[![](https://img.shields.io/npm/dm/vuepress-plugin-comment-plus.svg?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-comment-plus)
[![](https://img.shields.io/badge/vuepress-≥v0.9.0-3eaf7c.svg?style=popout-square)](https://vuepress.vuejs.org/)
![](https://img.shields.io/badge/license-MIT-blue.svg?style=popout-square)
![version](https://img.shields.io/github/release/SivanLaai/vuepress-plugin-comment-plus.svg?style=flat-square)
![visitors](https://visitor-badge.laobi.icu/badge?page_id=SivanLaai/vuepress-plugin-comment-plus)


> Support popluar comment plugins in Vuepress, sucn as Waline, Gitalk, Valine, Disqus.

- [Features](#features)
- [Usage](#usage)
  - [Install](#install)
  - [⚠️Route object properties](#⚠️Route-object-properties)
  - [Use with Gitalk](#use-in-gitalk)
  - [Use with Valine](#use-in-valine)
  - [Use with Waline](#use-in-waline)
  - [Hide comment](#how-to-hide-page-comment)
- [Options detail](#options-detail)
- [Todo](#todo)

## Features

- Support Waline
- Support Gitalk, Valine
- Dynamic Import
- Response router change and refresh automatic
- User can use passage's `$frontmatter`

## Usage

### Install

With `npm`:

```bash
npm install --save vuepress-plugin-comment-plus
```

With `yarn`:

```bash
yarn add vuepress-plugin-comment-plus -D
```

With `cnpm`:

```bash
cnpm i --save vuepress-plugin-comment-plus
```


### ⚠️Route object properties

**Don't use `window` object directly to get route information**.

Plugin has registered correct route information in `frontmatter.to` object and `frontmatter.from` object. Their properties are the same as [vue-router's route object](https://router.vuejs.org/api/#route-object-properties).

### Use in Waline

The `options` is exactly the same as `Waline` configuration.

```javascript
module.exports = {
  plugins: [
    [
      'vuepress-plugin-comment-plus',
      {
	     choosen: 'waline', 
         // options选项中的所有参数，会传给Waline的配置
         options: {
           el: '#valine-vuepress-comment',
           serverURL: 'https://waline-api-green.vercel.app',
	       path: '<%- frontmatter.commentid || frontmatter.permalink %>'
         }
      }
    ]
  ]
}
```


### Use in Gitalk

The `options` is exactly the same as `Gitalk` configuration.

```javascript
module.exports = {
  plugins: [
    [
      'vuepress-plugin-comment-plus',
      {
        choosen: 'gitalk', 
        options: {
          clientID: 'GitHub Application Client ID',
          clientSecret: 'GitHub Application Client Secret',
          repo: 'GitHub repo',
          owner: 'GitHub repo owner',
          admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
          distractionFreeMode: false 
        }
      }
    ]
  ]
}
```

If you want to access variables, such as `$frontmatter` and `window`, please use **EJS** syntax.

```javascript
module.exports = {
  plugins: [
    [
      'vuepress-plugin-comment-plus',
      {
        choosen: 'gitalk', 
        options: {
          id: '<%- frontmatter.commentid || frontmatter.permalink %>',
          title: '「Comment」<%- frontmatter.title %>',
          body: '<%- frontmatter.title %>：<%-window.location.origin %><%- frontmatter.to.path || window.location.pathname %>',
          clientID: 'GitHub Application Client ID',
          clientSecret: 'GitHub Application Client Secret',
          repo: 'GitHub repo',
          owner: 'GitHub repo owner',
          admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
          distractionFreeMode: false,
        }
      }
    ]
  ]
}
```

**Note**: Never use callback function in plugin configuration, that will be filtered by vuepress. So I have to support EJS syntax.

### Use in Valine

The `options` is exactly the same as `Valine` configuration.

```javascript
module.exports = {
  plugins: [
    [
      'vuepress-plugin-comment-plus',
      {
        choosen: 'valine', 
        options: {
          el: '#valine-vuepress-comment',
          appId: 'Your own appId',
          appKey: 'Your own appKey'
        }
      }
    ]
  ]
}
```

If you want to access variables, such as `$frontmatter` and `window`, please use **EJS** syntax.

```javascript
module.exports = {
  plugins: [
    [
      'vuepress-plugin-comment-plus',
      {
        choosen: 'valine', 
        options: {
          el: '#valine-vuepress-comment',
          appId: 'Your own appId',
          appKey: 'Your own appKey',
          path: '<%- frontmatter.commentid || frontmatter.permalink %>'
        }
      }
    ]
  ]
}
```


### How to hide page comment

If you want to hide comment plugin in specified page, set `$frontmatter.comment` or `$frontmatter.comments` to `false`.

For example:

```yml
---
comment: false 
# comments: false 
---
```

Comment won't appear in the page of this passage. 

## Options Detail

- **choosen** `string`

  **Required**.

- **options** `object`

  **Required**. The options of choosen comment plugin.

- **container** `string`

  **Optional, default as `'main.page'`**. The dom selector that contains choosen comment plugin.

## Todo

- Support Disqus
- 中文说明
