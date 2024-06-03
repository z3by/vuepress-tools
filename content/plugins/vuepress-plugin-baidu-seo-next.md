---
author:
  avatar: https://avatars.githubusercontent.com/u/5085501?v=4
  email: null
  name: rqh656418510
  url: null
  username: rqh656418510
bugs: https://github.com/rqh656418510/vuepress-plugin-baidu-seo-next/issues
category: plugins
date: '2022-06-20T02:34:22.013Z'
deprecated: false
description: Baidu SEO plugin for vuepress v2.x
downloads: null
homepage: https://github.com/rqh656418510/vuepress-plugin-baidu-seo-next
keywords:
- vuepress-plugin-baidu-seo-next
- vuepress2
- plugin
- baidu
- tongji
- seo
license: MIT License
maintainers: null
name: vuepress-plugin-baidu-seo-next
npm: https://www.npmjs.com/package/vuepress-plugin-baidu-seo-next
publisher:
  avatar: null
  email: 656418510@qq.com
  name: null
  url: null
  username: rqh656418510
repository: https://github.com/rqh656418510/vuepress-plugin-baidu-seo-next
score: 0.5140879352826927
stars: 0
unstable: false
version: 2.0.0-beta.48.6
watchers: 0

---

# vuepress-plugin-baidu-seo-next

> 适用于 VuePress 2 的百度 SEO 插件。

## VuePress v2.x

### 安装插件

> 以 SEO 插件版本号 `2.0.0-rc.13.x` 举例，其中的 `2.0.0-rc.13` 代表该 SEO 插件所兼容的 VuePress 2 版本，而 `x` 则代表 SEO 插件自身的修订版本号。若 VuePress 2 与 SEO 插件的版本不兼容，很可能会导致编译出错或者 SEO 插件无法生效。

- 查看插件的所有版本

``` sh
# 查看版本信息
$ npm view vuepress-plugin-baidu-seo-next versions
```

- 安装插件到本地博客

``` sh
# 安装最新版本
$ npm install -D vuepress-plugin-baidu-seo-next

# # 安装指定版本（推荐）
$ npm install -D vuepress-plugin-baidu-seo-next@2.0.0-rc.13.1
```

### 配置插件

``` js
import { baiduSeoPlugin } from 'vuepress-plugin-baidu-seo-next'

module.exports = {
  plugins: [
    baiduSeoPlugin({
      hm: 'xxxxxxxx',
      ignoreLocal: true
    })
  ]
}
```

### 配置参数

| 参数        | 类型    | 必填 | 默认值  | 描述                                                  |
| ----------- | ------- | ---- | ------- | ----------------------------------------------------- |
| hm          | String  | 是   |         | 已申请的百度统计 Key                                  |
| ignoreLocal | Boolean | 否   | `false` | 忽略本地的访问记录，例如 `127.0.0.1` 或者 `localhost` |
