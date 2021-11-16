---
author:
  avatar: https://avatars.githubusercontent.com/u/48038769?v=4
  email: null
  name: Runtus
  url: null
  username: Runtus
bugs: https://github.com/Runtus/vuepress-theme-runtu/issues
category: themes
date: '2021-11-15T05:39:38.611Z'
deprecated: false
description: null
downloads: null
homepage: https://github.com/Runtus/vuepress-theme-runtu#readme
keywords: null
license: false
maintainers: null
name: vuepress-theme-runtu
npm: https://www.npmjs.com/package/vuepress-theme-runtu
publisher:
  avatar: null
  email: 893119806@qq.com
  name: null
  url: null
  username: runtu_go
repository: https://github.com/Runtus/vuepress-theme-runtu
score: 0.5093770137387983
stars: 0
unstable: false
version: 1.0.6
watchers: 0

---

# Hi，there is Runtu 



## 博客还在开发中~
- 目前已移植大部分页面，能满足正常的博客需求，更多细节功能以及可自定义真正移植中~
- 项目已经上传至npm: [vuepress-theme-runtu](https://www.npmjs.com/package/vuepress-theme-runtu). 欢迎下载体验👏


## 关于配置
- 详细的配置我会在后期写一个简单的说明文档，目前我将我自己的配置放置如下，仅供参考。

```js
// .vuepress/config.js
module.exports = {
    title: 'Runtus',
    description: 'hello world',
    theme: 'runtu',
    themeConfig: {
        avatar: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/vuepress/avatar.png', // -> 左上角图表设置
        indexBackground: "https://lao-lan-go.oss-cn-beijing.aliyuncs.com/vuepress/pixiv34.JPG", // 首页背景图片
        footer: {
            date: '2021',
            ICP: '蜀ICP备2021023118号-1',
            author: 'Runtus'
        },
        // 路由设置，后面会优化这一块的配置，现在的配置有些繁琐
        topBarConfig: [
            {
                name: '主页',
                route: '/blogs/'
            },
            {
                name: '归档',
                route: '/archive/',
                image: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/vuepress/pixiv34.JPG'
            },
            {
                name: '关于',
                route: '/'
            },
            {
                name: '友链',
                route: '/friend/',
                image: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/vuepress/pixiv33.JPG',
                // friend页面下的友链设置
                friends: [
                    {
                        name: 'Lehr',
                        avatar: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/runtu_blog/Lehr.jpg',
                        href: 'https://blog.imlehr.com/'
                    },
                    {
                        name: '沙滩玉米',
                        avatar: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/runtu_blog/shuisong.png',
                        href: 'https://www.bencorn.com/'
                    },
                ]
            }
        ]
    }
}

```

## 文章放置
* 除此之外，您应该还再创建一个```docs/blogs```文件夹，并再您的博客放置在该文件夹下。关于vuepress的详细配置，请查看[官方文档](https://vuepress.vuejs.org/zh/)

## Frontmatter
* 每篇markdown目前支持4个属性：**标题，时间，标签（用于分类）以及简介**。
```markdown
blogs/xxxx.md

---

title: xxxx
date: xxxx
tag: xxxx
description: xxxx

---

```