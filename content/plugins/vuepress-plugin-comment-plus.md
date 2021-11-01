---
author:
  avatar: https://avatars.githubusercontent.com/u/33414148?v=4
  email: null
  name: dongyuanxin
  url: null
  username: SivanLaai
bugs: https://github.com/SivanLaai/vuepress-plugin-comment-plus/issues
category: plugin
date: '2021-08-03T11:37:11.514Z'
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
score: 0.5336036497067985
stars: 2
unstable: false
version: 1.1.0
watchers: 2

---

# Vuepress-comment-plugin-plus
### 说明文档 - [中文 | [English](./README-en.md)]
### 
[![](https://img.shields.io/npm/dm/vuepress-plugin-comment-plus.svg?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-comment-plus)
[![](https://img.shields.io/badge/vuepress-≥v0.9.0-3eaf7c.svg?style=popout-square)](https://vuepress.vuejs.org/)
![](https://img.shields.io/badge/license-MIT-blue.svg?style=popout-square)
![version](https://img.shields.io/github/release/SivanLaai/vuepress-plugin-comment-plus.svg?style=flat-square)
![visitors](https://visitor-badge.laobi.icu/badge?page_id=SivanLaai/vuepress-plugin-comment-plus)


> Vuepress评论插件，当前支持Waline（推荐）、Gitalk、Valine

- 本项目基于[dongyuanxin/vuepress-plugin-comment](https://github.com/dongyuanxin/vuepress-plugin-comment)
- [特征](#特征)
- [使用](#使用)
  - [安装](#安装)
  - [⚠️路由对象属性](#⚠️路由对象属性)
  - [使用Gitalk](#使用Gitalk)
  - [使用Valine](#使用Valine)
  - [使用Waline](#使用Waline)
  - [隐藏评论栏](#隐藏评论栏)
- [设置详解](#设置详解)

## 特征

- 支持Waline
- 支持Gitalk, Valine
- 动态导入
- 响应路由改变并自动刷新
- 用户可以使用文章中的`$frontmatter`

## 使用

### 安装

`npm`:

```bash
npm install --save vuepress-plugin-comment-plus
```

`yarn`:

```bash
yarn add vuepress-plugin-comment-plus -D
```

`cnpm`:

```bash
cnpm i --save vuepress-plugin-comment-plus
```


### ⚠️路由对象属性

**不要使用`window`对象直接去获取路由信息**.

在`frontmatter.to`和`frontmatter.from`对象中，插件已经注册了路由信息. 所有的属性信息和[vue-router的路由对象属性](https://router.vuejs.org/api/#route-object-properties)一致.

### 使用Waline

- 安装Waline[（点击查看安装说明）](https://waline.js.org/guide/get-started.html)

- 引入Waline[（点击查看说明）](https://waline.js.org/guide/client/import.html#%E9%80%9A%E8%BF%87-npm)

- `options`设置的参数和[Waline官方配置](https://waline.js.org/reference/client.html)一致。


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
           serverURL: 'your serverURL', //  例如 "https://***.vercel.app/"
	       path: '<%- frontmatter.commentid || frontmatter.permalink %>'
         }
      }
    ]
  ]
}
```


### 使用Gitalk

- 安装[Gitalk](https://github.com/gitalk/gitalk#install)
```
npm i --save gitalk
```

- `options`设置的参数和[Gitalk官方配置](https://github.com/gitalk/gitalk#options)一致

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

如果想获取参数，如`$frontmatter`和`window`, 请使用**EJS**脚本语言

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

**注意**: vuepress会过滤调插件配置，所以不要在配置中使用回调函数。请使用EJS脚本语言。

### 使用Valine

- 安装Valine[（点击查看安装说明）](https://valine.js.org/quickstart.html)

- `options`设置的参数和[Valine官方配置](https://github.com/gitalk/gitalk#install)一致

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

如果想获取参数，如`$frontmatter`和`window`, 请使用**EJS**脚本语言

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


### 隐藏评论栏 

你如果想在指定页面隐藏评论栏，设置`$frontmatter.comment`或者`$frontmatter.comments`为`false`。


例如:

```yml
---
comment: false 
# comments: false 
---
```

这样一来，文章页面就不会出现评论栏。

## 设置详解

| 变量名        | 类型          | 备注  | 说明  |
| ------------- |:-------------:| -----:|-----: |
|  choosen      |    string     | 必须  |       |
|  options      |    object     | 必须  |   对应使用的评论插件的配置    |
|  container    |    string     | 可选，默认是`'main.page'` |   包含评论插件的dom选择器    |

