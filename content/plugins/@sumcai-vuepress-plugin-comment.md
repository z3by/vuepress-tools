---
author:
  avatar: https://avatars.githubusercontent.com/u/76768485?v=4
  email: null
  name: sumcai
  url: null
  username: sumcai
bugs: https://github.com/sumcai/vuepress-plugin-comment/issues
category: plugins
date: '2021-12-26T01:41:31.558Z'
deprecated: false
description: Comment plugin in vuepress, such as Gitalk, Valine...
downloads: null
homepage: https://github.com/sumcai/vuepress-plugin-comment#readme
keywords:
- vuepress
- comment
- valine
- gitalk
license: false
maintainers: null
name: '@sumcai/vuepress-plugin-comment'
npm: https://www.npmjs.com/package/%40sumcai%2Fvuepress-plugin-comment
publisher:
  avatar: null
  email: sumcai@163.com
  name: null
  url: null
  username: sumcai
repository: https://github.com/sumcai/vuepress-plugin-comment
score: 0.5152681521784175
stars: 0
unstable: false
version: 1.0.2
watchers: 0

---

# @sumcai/vuepress-comment-plugin

[![](https://img.shields.io/badge/online-preview-faad14.svg?style=popout-square)](http://www.iogl.cn/)
[![](https://img.shields.io/npm/dm/@sumcai/vuepress-plugin-comment.svg?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-comment)
[![](https://img.shields.io/badge/vuepress-≥v0.9.0-3eaf7c.svg?style=popout-square)](https://vuepress.vuejs.org/)
![](https://img.shields.io/badge/license-MIT-blue.svg?style=popout-square)



> 本项目修改自 [Vuepress-comment-plugin](https://www.npmjs.com/package/vuepress-plugin-comment) 修正了无法使用valine进行文章阅读量统计的问题



### Getting Started

```bash
npm install --save @sumcai/vuepress-plugin-comment
```



### Usage

#### config plugin

```js
module.exports = {
  plugins: [
    [
      '@sumcai/vuepress-plugin-comment',
      {
        choosen: 'valine',
        options: {
          el: '#valine-vuepress-comment',
          appId: 'Your own appId',
          appKey: 'Your own appKey',
          path: '<%- frontmatter.commentid || frontmatter.permalink %>',
          visitor: true
        }
      }
    ]
  ]
}
```


#### use in page.vue

For example:

```vue
<span :id="this.$frontmatter.permalink" class="leancloud_visitors" :data-flag-title="this.$frontmatter.title">
  <em class="post-meta-item-text">阅读量 </em>
  <i class="leancloud-visitors-count"></i>
</span>
```

