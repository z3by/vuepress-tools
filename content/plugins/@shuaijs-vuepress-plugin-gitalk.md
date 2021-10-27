---
author:
  avatar: https://avatars.githubusercontent.com/u/58034399?v=4
  email: null
  name: Stan Ye
  url: null
  username: shuaijs
bugs: https://github.com/stanyejs/vuepress-plugin-gitalk/issues
category: plugin
date: '2019-11-23T09:27:04.829Z'
deprecated: false
description: stanye's vuepress-plugin-gitalk
downloads: null
homepage: https://github.com/stanyejs/vuepress-plugin-gitalk#readme
keywords:
- stanye
- vue
- vuepress
- gitalk
license: MIT License
maintainers: null
name: '@shuaijs/vuepress-plugin-gitalk'
npm: https://www.npmjs.com/package/%40shuaijs%2Fvuepress-plugin-gitalk
publisher:
  avatar: null
  email: xiaocooshy@gmail.com
  name: null
  url: null
  username: stanye
repository: https://github.com/stanyejs/vuepress-plugin-gitalk
score: 0.35892655244593225
stars: 0
unstable: false
version: 1.0.2
watchers: 0

---

# @shuaijs/vuepress-plugin-gitalk

## 介绍

vuepress-plugin-gitalk

## 安装

```bash
yarn add @shuaijs/vuepress-plugin-gitalk
# or
npm install @shuaijs/vuepress-plugin-gitalk --save
```

------------

## 使用

在配置文件中引入 `vuepress-plugin-gitalk`

```javascript
module.exports = {
  plugins: [
    [
      '@shuaijs/gitalk', {
          // GitHub Application Client ID.
          clientID: '',
          // GitHub Application Client Secret.
          clientSecret: '',
          // GitHub repository. 存储评论的 repo
          repo: '',
          // GitHub repository 所有者，可以是个人或者组织。
          owner: '',
          // GitHub repository 的所有者和合作者 (对这个 repository 有写权限的用户)。(不配置默认是owner配置)
          admin: [''],
          // commentsContainer加载selector， default: '.page'
          selector: ''
      }
    ],
  ],
}
```
