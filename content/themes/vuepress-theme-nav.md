---
author:
  avatar: https://avatars.githubusercontent.com/u/42461471?v=4
  email: null
  name: nav
  url: null
  username: zeroNav
bugs: https://github.com/zeroNav/vuepress-theme-nav/issues
category: theme
date: '2018-09-07T06:59:30.215Z'
deprecated: false
description: Vuepress theme - nav
downloads: null
homepage: https://github.com/zeroNav/vuepress-theme-nav
keywords:
- vuepress
- theme
license: MIT License
maintainers: null
name: vuepress-theme-nav
npm: https://www.npmjs.com/package/vuepress-theme-nav
publisher:
  avatar: null
  email: nooldey@gmail.com
  name: null
  url: null
  username: nooldey
repository: https://github.com/zeroNav/vuepress-theme-nav
score: 0.26553357488330565
stars: 0
unstable: true
version: 0.1.0
watchers: 0

---

# Vuepress Theme - Nav (Build from meteorlxy)

Nav theme for [Vuepress](https://vuepress.vuejs.org)

See demo on [my homepage](https://zeronav.github.io)

## Extra Config

As Vuepress doesn't allow themes to access Vuepress's config by now, you have to add extra config in `.vupress/config.js` of your project.

Here's the sample config of my own homepage:

```js
module.exports = {
  title: 'ZERO',
  description: 'ZERO\'s homepage',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/avator.jpg' }],
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  theme: 'ZERO',
  themeConfig: {
    personalInfo: {
      nickname: 'ZERO',
      description: 'Happy Coding<br/>Happy Life',
      email: 'meteor.lxy@foxmail.com',
      location: 'Xi\'an City, China',
      organization: 'Xi\'an Jiao Tong University',
      avator: '/assets/img/avator.jpg',
      sns: {
        facebook: {
          account: 'xx',
          link: 'https://www.facebook.com/xx'
        },
        github: {
          account: 'xx',
          link: 'https://github.com/xx'
        },
        linkedin: {
          account: 'xx',
          link: 'http://www.linkedin.com/in/xx'
        },
        twitter: {
          account: 'xx',
          link: 'https://twitter.com/xx'
        },
        weibo: {
          account: '@xx',
          link: 'https://weibo.com/u/xxxxxx'
        }
      }
    },
    // headerBackground priority: url > useGeo
    headerBackground: {
      // url: '/assets/img/bg.jpg',
      useGeo: true
    },
    lastUpdated: true,
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false  },
      { text: 'About', link: '/about/', exact: false  }, 
    ]
  },
  markdown: {
    toc: {
      includeLevel: [2, 3, 4]
    }
  },
  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.node.set('Buffer', false)

      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router)[\\/]/,
            name: 'vendor.vue',
            chunks: 'all'
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.commons',
            chunks: 'all'
          }
        }
      })
    }
  }
}
```

## TODOS

- [ ] Comments Support
- [ ] SEO
- [ ] General enhancement
