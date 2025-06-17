---
author:
  avatar: https://avatars.githubusercontent.com/u/35592403?v=4
  email: 1962421071@qq.com
  name: zhhlwd
  url: null
  username: zhhlwd
bugs: https://github.com/zhhlwd/vuepress-theme-indigo-material/issues
category: themes
date: '2019-07-05T01:03:22.759Z'
deprecated: false
description: Material Design theme for vuepress
downloads: null
homepage: https://github.com/zhhlwd/vuepress-theme-indigo-material#readme
keywords:
- vue
- vuepress
- theme
- material design
license: MIT License
maintainers: null
name: vuepress-theme-indigo-material
npm: https://www.npmjs.com/package/vuepress-theme-indigo-material
publisher:
  avatar: null
  email: 1962421071@qq.com
  name: null
  url: null
  username: zhhlwd
repository: https://github.com/zhhlwd/vuepress-theme-indigo-material
score: 0.393332180430814
stars: 281
unstable: false
version: 1.0.22
watchers: 281

---

<h1 align="center">vuepress-theme-indigo-material</h1>
<p align="center">
  <a href= "https://github.com/zhhlwd/vuepress-theme-indigo-material/blob/master/LICENSE">
   <img src="https://img.shields.io/npm/l/vuepress-theme-indigo-material.svg">
  </a>  
  <a href= "https://www.npmjs.com/package/vuepress-theme-indigo-material">
   <img src="https://img.shields.io/npm/v/vuepress-theme-indigo-material.svg">
  </a>
  <a href= "https://www.npmjs.com/package/vuepress-theme-indigo-material">
   <img src="https://img.shields.io/npm/dt/vuepress-theme-indigo-material.svg">
  </a> 
  <a href= "https://github.com/zhhlwd/vuepress-theme-indigo-material/commits/master">
   <img src="https://img.shields.io/github/last-commit/zhhlwd/vuepress-theme-indigo-material.svg">
  </a> 
</p>

## 最近更新

- 优化：升级 vuepress 到 1.0.2
- 优化：优化首页搜索数据的加载，解决资源二次重复加载
- 修复：文章样式没有选中
- 修复归档页文章摘要显示，fix #11
- 目录显示实际标题文字而不是 id
- 更新 vuepress , node-sass 和 vssue 到最新版本，并锁死版本号
- 完善了文章的样式
- 优化了摘要
- 彻底改善 SEO，文本内容全部直出到 HTML

### 对于老版本升级

- 已经发布到 npm,只需要把 package.json 中的主题版本号改为 **1.0.22**,然后删除 node_modules 文件夹,重新运行 npm i 或者最好用 cnpm i 即可

## 介绍

[vuepress-theme-indigo-material](https://github.com/zhhlwd/vuepress-theme-indigo-material) 的原主题是[hexo-theme-indigo](https://github.com/yscoder/hexo-theme-indigo), github 的 star 数高达**2042**, fork 的有**451**个, 它在静态博客网站中的应用处处可见.在这里首先感谢原作者.

然而它的定位是仅支持 IE10+ 等现代浏览器。既然不需要支持老版本浏览器, 在前端发展迅猛的今天, 已经有许多技术能够让网址更快, 所以我用[VuePress](https://github.com/vuejs/vuepress)来重写了它. 其实 indigo 的原作者已经在用 vuepress 重写了, 但是项目一直没有进展, 所以我接过了这个任务, 最后重写的效果是挺满意的.

本主题在我的有 51 篇博客笔记下, 部署在 github page,网页加载速度非常快,更快的是,网页加载完成后,此后每个页面的打开速度,都是仿佛在点击本地文件.

具体感受，国内请点击码云的 [博客网站（国内 gitee）](https://zhhlwd.gitee.io/)，国外请点击我的[博客网站（国外 github）](https://zhhlwd.github.io/)来亲身感受, 部署在 github page 下

正如 VuePress 文档所说:

> 每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。

用 Lighthouse 来测试网站的截图

[![k29TJO.md.png](https://user-gold-cdn.xitu.io/2019/2/21/1690ccfe90e24db3?w=680&h=437&f=png&s=179256)](https://imgchr.com/i/k29TJO)

### 您换主题的理由

- 更快更小,
- 改进我在一年的的使用中感受到的原主题一些交互和外观, 例如删除分享功能, 移除了打赏功能, 增加移动端文章目录导航等等
- 更加容易自定义, vuepress 的主题和插件很灵活,只要您会 Vue, 就能利用相关知识修改原主题, 和平时工作中写的页面和 APP 差不多
- 基于本地数据的全文搜索
- 拥抱 vue, 然后能享用它的生态, 例如组件库, 本主题就利用了 element ui
- 享用 vuepress 的拓展 , 例如在 Markdown 中 使用 Vue,自定义文章摘要
- 兼容 hexo 原主题写的 Markdown 文件, 不用修改即可搬迁移到本主题, 前提是您原来文件有遵守原主题的规则, 例如在文件顶部有包含 YAML front matter

```
---
title: 【读书笔记】《JavaScript权威指南》第7章数组
date: 2018-11-08 04:10:03
tags: [读书笔记, 《JavaScript权威指南》]
---
```

- 理论上很好的 SEO
- 已经发布到 npm, 只需要下载即可, 还提供一套模板文件结构, 下载依赖后立即可以使用, 还提供了相关操作的 shell 文件,双击即可,几分钟就能有自己的博客
- 内置评论功能
- ......

### 浏览器兼容性

由于博客面向的群体比较都是技术人员, 所以本主题只在最新版的谷歌浏览器和火狐浏览器测试无误

vuepress 默认有编译一些对老版本浏览器的兼容, 具体控制请看它[官网配置](https://vuepress.vuejs.org/zh/config/#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7)

## 快速上手

### 注意

请确保您的 Node.js 版本 >= 8

安装 git

最好 npm 下载改用[cnpm](http://npm.taobao.org/)

以下的操作已经假设您已经会基本的 npm, git 和 vue 常识和操作

### 使用模板分支

由于文件较琐碎, 配置又容易出错,很容易出错,为此我已经准备好了一套模板, 部署在 template 分支下,您只需要的是**下载下来**, 双击目录下的 init.sh 文件,等它完成就行了,

> 前提是您已经安装 node, git , npm 和 cnpm, 并且把它们加进系统的 path 中,
> 特别是 git 安装目录的 bin 文件夹,把它们加进系统的 path 中是保证脚本能运行的首先依赖

下载分支的命令:

```sh
git clone -b template https://github.com/zhhlwd/vuepress-theme-indigo-material.git
```

这是 template 的目录说明

**一定要注意!** 模板 docs 目录下的文件夹除了 posts 和 about 可以动,其他都不能动, 原因是 vuepress 在编译时会注册这些文件夹和文件为路由, 如果您把它们删了,即使您后面用 addRouter 再注册成功也不行,编译时没有注册的当跳转到时会让 vue 从根实例重新渲染, 这会导致应用很多状态没了 ,例如折叠的侧边栏重新打开,文章列表每打开一次就重新渲染一次,

使用本主题在内容上,您只要把新文章放在 posts 目录下, 文件顶部写好相关信息, 和自由定义 about 目录下的 index.md 文件就行了

```sh
|-- template
    |-- .babelrc                   // 主题的babel配置, 按需加载element ui所需
    |-- .gitignore                 // 让git忽略跟踪dist文件夹等等, 不要把docs文件夹加进去
    |-- deploy.sh                  // 部署到git 远程仓库的shell文件, 要部署时双击即可, 前提是配置的构建目录位置没变
    |-- init.sh                    // (只要执行一次)克隆template分支到本地后, 双击它, 一步完成所有操作, 等他完成下载, 开启测试服务器, 打开http://localhost:8080/看到效果
    |-- package-lock.json
    |-- package.json
    |-- 目录说明.md
    |-- docs                       // 存放所有开发环境的目录
        |-- index.md               // 首页,不用改
        |-- .vuepress
        |   |-- config.js          // 主题的配置
        |   |-- public             // 存放静态文件的目录, 例如img, ico ...
        |       |-- avatar.jpg
        |       |-- brand.jpg
        |       |-- favicon.ico
        |-- about                  // 展示在自我介绍页面的内容
        |   |-- index.md           // 不能删除, 可以添加内容
        |-- tags                   // 不能删除, 不能动
        |   |-- index.md           // 不能删除, 不能动
        |-- all                    // 不能删除, 不能动
        |   |-- index.md           // 不能删除, 不能动
        |-- posts                  // 存放所有文章的目录
```

> 两个 sh 文件如果要自定义,很有可能会报错"No such file or directory", 如果能运行下去则不用理睬,运行中断,可能因为 window 和 Linux 的换行不一样,可以运行命令解决:

```
> 用 vim 打开该 sh 文件，输入：
> :set ff
> 回车，显示 fileformat=dos，重新设置下文件格式：
> :set ff=unix
> 保存退出:
> :wq
> 再执行，
```

最后 init.sh 文件 **只运行一次** 即可, 以后使用的是 package.json 中提供的两个命令,

```sh
npm run dev
npm run build
```

分别是运行本地环境开启服务器预览和运行编译打包, 它和平时的 vue 项目流程一模一样

## 配置

请去看[vuepress 的文档](https://vuepress.vuejs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE)
**填写 docs/.vuepress/config.js**的相关字段.具体作用我都有相关注释, 没写的更多配置在[vuepress 文档](https://vuepress.vuejs.org/zh/config/)中查询

## 静态资源

您可以将它们放在 .vuepress/public 中, 具体请看[vuepress 文档](https://vuepress.vuejs.org/zh/guide/assets.html#%E7%9B%B8%E5%AF%B9%E8%B7%AF%E5%BE%84), 值得一提的是

> 如果您的网站会被部署到一个非根路径，您将需要在 .vuepress/config.js 中设置 base，举例来说，如果您打算将您的网站部署到 https://foo.github.io/bar/，那么 base 的值就应该被设置为 "/bar/" (应当总是以斜杠开始，并以斜杠结束)。

> 有了基础路径（Base URL），如果您希望引用一张放在 .vuepress/public 中的图片，您需要使用这样路径：/bar/image.png

## 开始写作

和原主题的新建一个 md 文件不一样, vuepress 没有内置像这些命令

```js
hexo n '新md文件名'
hexo d //push 到远程分支
```

由于没有自动生成 md 文件的命令,需要手动创建 Markdown 文件,而且要放在 **./docs/posts/** 下, 然后还需要文件顶部像原主题那样写上信息

```
---
title: 【读书笔记】《JavaScript权威指南》第7章数组
date: 2018-11-08 04:10:03
tags: [读书笔记, 《JavaScript权威指南》]
categories: [读书笔记]
---
```

**上下的---符号不能少**, **字段后面空一格**再写值 不然会报错.

### markdown 文件的元信息

**title**: 文章名只读取这里写的名字,所以**一定要写**, 我的建议是最好文章名和文件名保持一致

**date**: 主题用了 vuepress 的内置插件[@vuepress/plugin-last-updated](https://vuepress.vuejs.org/zh/plugin/official/plugin-last-updated.html#%E9%80%89%E9%A1%B9), 也可以不用写了,

然而此插件依赖的是在 git 仓库中的提交时间,这就是为什么 init.sh 中要进行 git init 的原因

在本主题中一篇文章的创建时间的确定顺序是

**md 文件顶部的信息中的 date 字段==>git 仓库的提交时间===>都没有那就是当前时间**

**注意**的是这只是一种容错机制, 这不意味着不用管时间了, 最后条件的当前时间**并没有写进对应文件**,
如果每次编译都匹配的是最后一条条件会导致这个文章**永远排序在最开头**, 因为每次编译都是取的当前时间,

所以对于以前的文章, 开头信息没有 date 的, **要么手动加上**, 格式一定要是 YYYY-MM-DD HH:mm:ss, 才能计算出正确的时间顺序,**要么把文章迁移到
./docs/posts/ 目录下后, 运行**

```
git add -A
git commit -m '初始化文章时间'
```

这样退求其次的以当前时间重置那些没写 date 的文章

而对于使用本主题之后的文章**最好不用写 date 字段**了,以免出错, 而是每次新建文章后进行一次 commit, 让主题取 git 仓库的时间, 并且这种工作流能让您的提交历史对应对应文章的时间

```
git add -A
git commit -m '新建文章xxx'
```

**tags**: 字段**必须是数组**,如果没有则要写上一个空数组 _[]_,这样此文章会被分类到 _'未分类'_,我的建议是最好写上内容, 它是文章的内容标签, 是一种分类

**categories**字段已经放弃, 因为它和**tags**字段的作用重复

**摘要\*** :vuepress 内置了文章内容摘抄功能,这也是本主题首先判断收录的,如果没有才去从文章内容中截取一段,所以您可以完全自定义文章在首页列表的摘要了,例如一段简单明了的介绍,会让人更加想点击进去,这功能开启方式是 \<\!\-\- more \-\-\> 注释，该注释之前的内容会被抓取为文章的摘要

> 如果一个 markdown 文件中有一个 \<\!\-\- more \-\-\> 注释，则该注释之前的内容会被抓取并暴露在 \$page.excerpt 属性中。如果您在开发一个博客主题，您可以用这个属性来渲染一个带摘抄的文章列表。

## 文章评论功能

评论功能用的是[Vssue](https://vssue.js.org/zh/guide/#vssue-%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84)

虽然 Vssue 支持多个平台,但是本主题只选用的是 github 的 V3 api, 这是一个为了减少构建大小的决策.

在**docs/.vuepress/config.js**的**vssue**字段

如果需要评论功能,**需要把它的 need 改为 true**, 不需要就改为 false, 不要不去填写

如果需要则需要**创建两个新的 github OAuth App**,Vssue 的[文档](https://vssue.js.org/zh/guide/github.html)有简单明了的操作过程,

填写的 url 一个是**http://localhost:8080/**, 一个是您**将要部署到的网站地址**, 它们分别用在本地测试环境和线上环境,对应的字段分别是**development**和**production**

还有一个字段是**option**，是一个对象，存放**development**和**production**共有的属性，具体可以参考 template 分支的模板配置

拿到两组**clientId**和**clientSecret**后,还要一个存放 issue 评论的 github 仓库,得到**owner**和**repo**, 也就是仓库所有者名和仓库名, 存放 issue 的仓库在本地环境和线上环境中可以相同, 除了这四个字段是必须的,其它字段可以自行去[Vssue 的文档](https://vssue.js.org/zh/options/)中查询

**一个问题是**, 在打开一篇新文章编译的页面时,Vssue 会去创建一个新 issue, 就会让您的页面从定向到 github 登录页, 您不登录就一直重定向 ,您不登录, 您的访客也会重定向,这非常影响网页体验, 所以您需要去打开文章,登录了让 Vssue 创建,这样只要一次, 您和访客在这个页面以后都不会重定向了

还有如果点击登录 github 不成功，请在点击一次

## 全站搜索

关于 搜索, 搜索的是文章内容, 也就是说假如文章标题不在内容里面您搜索标题关键词是没有匹配的, 搜索不区分大小写,但是区分空格和标点符号, 一个技巧是找到一个关键词, 例如我搜索 flex-w 就能唯一的搜到我关于 flex 的博客

## 部署

写完文章, 在本地预览无误后, 可以直接双击 deploy,sh 文件, 然后脚本运行编译打包 push 到远程仓库

> 前提是首先 deploy.sh 文件的位置不要变了, 它使用的是相对路径, 然后还要在 deploy.sh 文件中改好 push 的地址

模板中构建输出位置是 **./dist**

如果不用 deploy.sh 文件,而是手打命令,要注意的是,**一定要在 dist 目录下运行这三步**

```
git init
git add -A
git commit -m 'deploy'
```

因为根目录有一个仓库用来保存每个文章的时间, 不能删除, 当您 dist 目录没有一个仓库时,运行 push 命令就会往上一个文件夹找,**从而把根目录 push 到远程仓库**, 而我们只要的是 dist 目录下的文件

还有一个地方就是 vuepress 每次 build **都会清空覆盖 dist 文件夹,** 会把上一次的仓库也清空,所以**每次 build 后都要进行上面的三步才去 push**, 这也是我提供脚本的原因

vuepress 的构建的确麻烦不少, 但是相当于它的网页运行速度, 这是可以忍受的,我用了我的主题,就不想用回原来的 hexo 了, 迷上了网页一点就开的速度...

## 自定义

主题的文字已经暴露出去,在 config.js 中能够自定义,如果您需要完全的自定义.

您可以下载 template 分支, 然后把 master 分支下的内容**放在模板的./docs/.vuepress/theme/下,**

把 config.js 中的**theme 字段去掉**,再在项目根文件夹下（docs 文件夹的上一级）执行 cnpm i,剩下的和 vuepress [开发主题](https://vuepress.vuejs.org/zh/theme/writing-a-theme.html)差不多.

## UI 变化

- 删除了分享和打赏功能, 因为在我一年多的使用中没有一次用到
- 文章目录改为 H1,H2,H3....,H 不代表为是一个 html 的 h1 标题,而是此标题在当前文章所有标题中的等级,H1 最高,H6 最低
- 标签放在卡片中,更加直接的看到和点击
- 增加了自我介绍页,可以用来展示一些除了文章博客以外的内容,例如,求职,自我介绍,开源项目,交流群,版权声明
- 加强了我最依赖的搜索功能, 在每一个匹配中搜索词的高亮,高亮后面接着的是它的一段句子,因为常常一个词在多个文章中匹配,扰乱了判断
- vuepress 内置了文章内容摘抄功能,这也是本主题首先判断收录的,如果没有才去从文章内容中截取一段,所以您可以完全自定义文章在首页列表的摘要了,例如一段简单明了的介绍,会让人更加想点击进去
  > 如果一个 markdown 文件中有一个 \<\!\-\- more \-\-\> 注释，则该注释之前的内容会被抓取并暴露在 \$page.excerpt 属性中。如果您在开发一个博客主题，您可以用这个属性来渲染一个带摘抄的文章列表。

## 计划

- [ ] 内置一些命令, 例如 hexo 的 hexo n 和 hexo d
- [ ] 整理 css 文件,暴露出一套变量, 让用户能够自定义样式
- [ ] 看用户人群, 需不需要完善英文方面的配置
- [ ] 本来想支持 pwa, 但是有一个 bug 没解决,就放弃, 后续看能不能解决, 非常欢迎一起来完成
- [ ] 优化代码, 开发太仓促, 还没到最好, 继续优化性能

## 已知问题

- 顶部的菜单按钮在屏幕大小发生变化到了断点时会在一些情况出乎意料,本主题的媒体查询断点是宽 1190px,比 iPad pro 宽, 因为本主题定位的是博客,不应该有在浏览的时候有太大的窗口大小变化,所以也不是至关重要,后面会尝试解决
- 在首次加载时侧边栏上部分会闪, 初步判断是样式文件加载慢的问题, 毕竟打包成了一个 css,网页一大部分时间在加载它

## 提问

可以在 issue 提问, 也可以是加入 qq 群, 我们一起讨论

```
qq群: 668387596
```

最后感谢您能看到这里, 您都看到这里了, 您能给我一个 star 吗?

github 地址:https://github.com/zhhlwd/vuepress-theme-indigo-material
