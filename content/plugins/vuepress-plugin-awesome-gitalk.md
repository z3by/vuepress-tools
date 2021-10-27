---
author:
  avatar: https://avatars.githubusercontent.com/u/20939839?v=4
  email: null
  name: Rain120
  url: https://github.com/Rain120
  username: Rain120
bugs: https://github.com/Rain120/vuepress-plugin-awesome-gitalk/issues
category: plugin
date: '2020-02-25T13:25:24.130Z'
deprecated: false
description: Vuepress plugin with Gitalk
downloads: null
homepage: https://github.com/Rain120/vuepress-plugin-awesome-gitalk
keywords:
- gitalk
- plugin
- vuepress
- awesome-gitalk
- vuepress-plugin
- vuepress-plugin-awesome-gitalk
license: MIT License
maintainers: null
name: vuepress-plugin-awesome-gitalk
npm: https://www.npmjs.com/package/vuepress-plugin-awesome-gitalk
publisher:
  avatar: null
  email: 1085131904@qq.com
  name: null
  url: null
  username: rain120
repository: https://github.com/Rain120/vuepress-plugin-awesome-gitalk
score: 0.23345677984616067
stars: 0
unstable: true
version: 0.0.4
watchers: 0

---

<h3 align="center">
  <a href="https://github.com/Rain120/vuepress-plugin-awesome-gitalk">Vuepress Plugin Awesome Gitalk</a>
  <img src='./shotscreen/talk.png' alt='talk' width='100%' height='30%' />
</h3>

<div align="center">

[![GitHub watchers](https://img.shields.io/github/watchers/rain120/vuepress-plugin-awesome-gitalk?style=social)](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/watchers)
[![STAR](https://img.shields.io/github/stars/rain120/vuepress-plugin-awesome-gitalk?style=social)](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/stargazers) [![FORK](https://img.shields.io/github/forks/rain120/vuepress-plugin-awesome-gitalk?style=social)](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/network/members)

[![npm download](https://img.shields.io/npm/dt/vuepress-plugin-awesome-gitalk?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-awesome-gitalk) [![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hy/vuepress-plugin-awesome-gitalk?style=flat-square)](https://www.jsdelivr.com/package/npm/vuepress-plugin-awesome-gitalk) [![jsdelivr](https://data.jsdelivr.com/v1/package/npm/vuepress-plugin-awesome-gitalk/badge)](https://www.jsdelivr.com/package/npm/vuepress-plugin-awesome-gitalk)
[![ISSUES](https://img.shields.io/github/issues/rain120/vuepress-plugin-awesome-gitalk?style=flat-square)](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/issues) [![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/rain120/vuepress-plugin-awesome-gitalk?style=flat-square)](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/pulls) [![COMMIT](https://img.shields.io/github/last-commit/rain120/vuepress-plugin-awesome-gitalk?style=flat-square)](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/commits/master) ![LANGUAGES](https://img.shields.io/github/languages/top/rain120/vuepress-plugin-awesome-gitalk?style=flat-square)
[![npm](https://img.shields.io/npm/v/vuepress-plugin-awesome-gitalk?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-awesome-gitalk)
<!-- [![VERSION](https://img.shields.io/github/package-json/v/rain120/vuepress-plugin-awesome-gitalk?style=flat-square)](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/blob/master/package.json) -->

</div>

## 😚 Welcome

Welcome to the vuepress plugin with gitalk.

#### 🎮 TL;DR

⌨️ How to use it, 👇

#### 🔨 Usage

##### Node

```md
npm install vuepress-plugin-awesome-gitalk --save

// or

yarn add vuepress-plugin-awesome-gitalk
```

`Setting with your account`

![gitalk-setting-1.png](./shotscreen/gitalk-setting-1.png)

![gitalk-setting-2.png](./shotscreen/gitalk-setting-2.png)

`.vuepress/config.js`

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-awesome-gitalk', {
        log: true,
        pluginName: config.name,
        enable: true,
        // 挂载节点
        root: "gitalk-container",
        //最大重试次数
        maxRetryCount: 5,
        // 默认是检查时间
        defaultCheckMinutes: 500,
        // 是否开启首页评论
        home: false,
        // 关闭 Gitalk 评论页面, 需要绝对匹配 fullPath, eg: /docs/
        ignorePaths: ['/'],
        // gitalk 配置
        gitalk: {
          clientID: 'your clientID',
          clientSecret: 'your clientSecret',
          repo: 'your repo name',
          owner: 'your owner',
          admin: ['your admin'],
          language: 'zh-CN',
        }
      }
    ],
  ]
}
```

##### Ignore Paths

```js
module.exports = {
    plugins: [
      [
        'vuepress-plugin-awesome-gitalk', {
            ignorePaths: ['ignore/']
        }
      ],
    ],
}
```

<!-- ##### CDN

```md
<script src="https://cdn.jsdelivr.net/npm/vuepress-plugin-awesome-gitalk@0.0.2/lib/vuepress-plugin-awesome-gitalk.min.js"></script>
``` -->

#### 🤝 Contributing ![PR](https://img.shields.io/badge/PRs-Welcome-orange?style=flat-square&logo=appveyor)

We welcome all contributions. You can submit any ideas as [pull requests](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/pulls) or as a GitHub [issue](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/issues).

#### 🔗 Links

[Docs & Demo](https://rain120.github.io/vuepress-plugin-awesome-gitalk/dist/index.html)

[NPM Package](https://www.npmjs.com/package/vuepress-plugin-awesome-gitalk)

[CDN Package](https://www.jsdelivr.com/package/npm/vuepress-plugin-awesome-gitalk)

#### 👨‍🏭 Author

> Front-End development engineer, technology stack: React + Typescript + Mobx, also used Vue + Vuex for a while

- [Github](https://github.com/Rain120)
- [知乎](https://www.zhihu.com/people/yan-yang-nian-hua-120/activities)
- [掘金](https://juejin.im/user/57c616496be3ff00584f54db)

#### 📝 License

[![LICENSE](https://img.shields.io/github/license/rain120/vuepress-plugin-awesome-gitalk?style=flat-square)](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/blob/master/LICENSE)

Copyright © 2020-present [Rain120](https://github.com/Rain120).

