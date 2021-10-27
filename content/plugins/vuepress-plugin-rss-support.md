---
author:
  avatar: https://avatars.githubusercontent.com/u/1062448?v=4
  email: null
  name: wubaiqing
  url: null
  username: wubaiqing
bugs: https://github.com/wubaiqing/vuepress-plugin-rss/issues
category: plugin
date: '2019-01-02T06:49:50.936Z'
deprecated: false
description: "### \u5B89\u88C5"
downloads: null
homepage: https://github.com/wubaiqing/vuepress-plugin-rss#readme
keywords: null
license: MIT License
maintainers: null
name: vuepress-plugin-rss-support
npm: https://www.npmjs.com/package/vuepress-plugin-rss-support
publisher:
  avatar: null
  email: wubaiqing@vip.qq.com
  name: null
  url: null
  username: wubaiqing
repository: https://github.com/wubaiqing/vuepress-plugin-rss
score: 0.3240021423204753
stars: 0
unstable: false
version: 1.1.1
watchers: 0

---

# VuePress RSS 支持插件

### 使用案例
[https://github.com/wubaiqing/zaobao/blob/master/docs/.vuepress/config.js](https://github.com/wubaiqing/zaobao/blob/master/docs/.vuepress/config.js)


### 安装

```shell
$ yarn add vuepress-plugin-rss-support -D
```

### 配置

更新 `.vuepress/config.js` 文件

```js
module.exports = {
    ...
    plugins: [
      [
        'vuepress-plugin-rss-support',
        {
          // 网站地址
          site_url: 'https://wubaiqing.github.io/zaobao',
          // 版权信息
          copyright: '2019 每日时报',
          // 目录过滤
          filter: (page) => { return /^\/201.+/.test(page.path) },
          // 显示条数
          count: 60,
        }
      ]
    ]
}
```
