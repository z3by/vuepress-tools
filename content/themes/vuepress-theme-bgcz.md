---
author:
  avatar: https://private-avatars.githubusercontent.com/u/15625370?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU2MjAsIm5iZiI6MTczNDY1NDQyMCwicGF0aCI6Ii91LzE1NjI1MzcwIn0.cJwVSYrqfkULlY2KPi6VzHHYF-5PLK01iYa3dBDyclc&v=4
  email: null
  name: "\u534A\u4E2A\u6A59\u5B50"
  url: null
  username: ZjBlog
bugs: https://github.com/ZjBlog/vuepress-theme-zjblog/issues
category: themes
date: '2019-06-06T02:53:30.557Z'
deprecated: false
description: vuepress-theme
downloads: null
homepage: https://github.com/ZjBlog/vuepress-theme-zjblog#README.md
keywords:
- vuepress
- theme
- vuepress-theme
license: Apache License 2.0
maintainers: null
name: vuepress-theme-bgcz
npm: https://www.npmjs.com/package/vuepress-theme-bgcz
publisher:
  avatar: null
  email: 13552960783@163.com
  name: null
  url: null
  username: zhangjuntracy
repository: https://github.com/ZjBlog/vuepress-theme-zjblog
score: 0.43977801514574977
stars: 3
unstable: false
version: 1.0.4
watchers: 3

---

  ![](https://github.com/ZjBlog/vuepress-theme-zjblog/workflows/npm/badge.svg)
# vuepress-theme-zjblog
`vuepress` `vuepress-theme` `bgcz` `主题模板`
## [博客预览][blog]
&ensp;&ensp;&ensp;&ensp;这个vuepress主题是我在[vuepress-theme-yubisaki][origin]这个主题之上
进行修改而来的,原来的这个主题就非常好,只是我想加了一点我想要的内容和改了一点小问题,我搭建的博客[猿码集][blog]为了能自动打包,所以才上传npm的.
## 新加内容
* 增加了百度的自动推送功能及控制开关
* 增加了个人感觉好玩的footer
* 增加了一个card用来展示微信公众号
* 增加二维码，手机扫码阅读
* 修改了评论会初始化两次的问题(偶尔会出现)
* 修改404页面样式
* 如果不设置背景图地址就每次随机一张图片作为背景图
* 修改分页的问题
* 增加友情链接配置
* 修改生成二维码链接为https
* 修改分页在tags显示的问题
* 使用actions自动部署到npm
* 增加获取随机图片的配置
* 增加网站统计
* tags的问题修改
* 标题修改
* tags页面美化
* backgroundUrl 不填增加默认随机图
## 新增的配置
```js
themeConfig:{
  //footer上显示的邮箱地址
  zjemail: 'zhangjun521ly@gmail.com',
  //footer上显示的github地址
  zjgithub: '',
  //footer上显示的stackoverflow地址
  zjoverflow:'',
  //新增展示的微信二维码
  zjwx: '',
  //把title和首页的标题区分开了,这是首页logo旁边的字
  zjHome: '猿码集',
  //友情链接
  zjurl:[{url:'https://www.bangechengzi.com/',name:'半个橙子'}],
  //每日一张随机图片地址
  backgroundUrl: 'https://www.bangechengzi.com/img/',
  // 友盟统计代码
  cnzzUrl: ''，
  // 百度推送开关
  baidpush: false
}
```

## 我的博客配置
``` js
module.exports = {
  theme: 'zjblog',
  title: '猿码集-程序猿进击之路',
  description: '猿码集,每天进步一点点.',
  head: [
      ['link', { rel: 'icon', href: '/favicon.ico'}],
      ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  ga: 'UA-******-1',
  serviceWorker: true,
  // fuck IE
  evergreen: true,
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: true },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    config: md => {
      md.use(require('markdown-it-task-lists')) // 一个 checkbox 的 TODO List 插件
        .use(require('markdown-it-imsize'), { autofill: true }) // 支持自定义 md 图片大小 ![](http://test.png =200x200)
    }
  },
// 主题的一些配置
  themeConfig: {
  serviceWorker: {
    updatePopup: { 
       message: "文章有更新", 
       buttonText: "刷新" 
    }
  },
  zjemail: 'zhangjun521ly@gmail.com',
  zjgithub: 'https://github.com/zjblog',
  zjoverflow:'',
  zjwx: 'https://blog-1255892226.cos.ap-beijing.myqcloud.com/xyqs.jpg',
  zjHome: '',
  zjurl:[{url:'https://www.bangechengzi.com/',name:'半个橙子'}],
  baidpush: false,
  cnzzUrl: '',
  // 博客背景图片
  background: '',
  backgroundUrl: '',
  // 博客的 logo
  logo: '/bgcz.png',
  // 定制文章标题颜色
  accentColor: 'black',
  // 每页显示的文章数量
  per_page: 5,
  // 创建文章的时间格式, 不设则不显示 可选 [yyyy-MM-dd HH:mm:ss]
  date_format: 'yyyy-MM-dd',
  // 开启标签功能
  tags: true,
  // vssue 的配置项, 不支持 flipMoveOptions
  comment: {
    owner: 'ZjBlog',
    repo: 'bgcz',
    clientID: '*******',
    clientSecret: '*******',
    admin:['ZjBlog'],
    perPage: 5,
    distractionFreeMode: false  // Facebook-like distraction free mode
  },
  nav: [
    { text: '首 页', link: '/', root: true }, // 指定它为博客根目录
    { text: '笔 记', link: '/home/',root: true},
    { text: '标 签', link: '/tags/', tags: true }, // 指定它为标签目录
    { text: '半个橙子', link: 'https://www.bangechengzi.com/'},
    { text: 'GitHub', link: 'https://github.com/ZjBlog' }
  ]
 }
}
```
## 使用actions自动创建问题
使用这个[createIssueByLables][actions]action可以在写完文章推送到github的时候自动创建文章的相关issue,这样就不需要你自己去点击初始了.大家可以试试



----------------------------------
[blog]:https://bgcz.github.io/ "博客地址"
[origin]:https://github.com/Yubisaki/vuepress-theme-yubisaki "原主题"
[actions]:https://github.com/marketplace/actions/createissuebylables "actions"
