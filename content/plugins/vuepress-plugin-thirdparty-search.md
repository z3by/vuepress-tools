---
author:
  avatar: https://avatars.githubusercontent.com/u/5212214?v=4
  email: 894072666@qq.com
  name: Evan Xu
  url: null
  username: evan_xu
bugs: https://github.com/xugaoyi/vuepress-plugin-thirdparty-search/issues
category: plugin
date: '2020-05-08T03:55:48.130Z'
deprecated: false
description: "Enhanced search plugin for VuePress\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u7B2C\
  \u4E09\u65B9\u641C\u7D22\u94FE\u63A5\u7684 Vuepress \u641C\u7D22\u63D2\u4EF6"
downloads: null
homepage: https://github.com/xugaoyi/vuepress-plugin-thirdparty-search
keywords:
- documentation
- vue
- vuepress
- generator
- Enhanced
- thirdparty
- search
license: MIT License
maintainers: null
name: vuepress-plugin-thirdparty-search
npm: https://www.npmjs.com/package/vuepress-plugin-thirdparty-search
publisher:
  avatar: null
  email: 894072666@qq.com
  name: null
  url: null
  username: evan_xu
repository: https://github.com/xugaoyi/vuepress-plugin-thirdparty-search
score: 0.3666444881044228
stars: 3
unstable: false
version: 1.0.2
watchers: 3

---

# vuepress-plugin-thirdparty-search

此插件是基于官方的搜索框插件 [@vuepress/plugin-search](https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-search) 做了功能添加，添加的功能如下：

* 在搜索结果最底部添加第三方搜索链接



### 使用

安装

```sh
npm i vuepress-plugin-thirdparty-search -D
```

在`.vuepress/config.js`的`plugins`选项添加插件，并配置第三方搜索链接：

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    ['thirdparty-search', {
      thirdparty: [ // 可选，默认 []
        {
          title: '在MDN中搜索', // 在搜索结果显示的文字
          frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
          behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: '在Runoob中搜索',
          frontUrl: 'https://www.runoob.com/?s=',
        },
        {
          title: '在Vue API中搜索',
          frontUrl: 'https://cn.vuejs.org/v2/api/#',
        }
      ]
    }], 
  ]
}
```

* 此插件会覆盖原本官方的 `plugin-search` 插件，但**原插件的参数选项仍适用**。更多配置请查看：[plugin-search](https://v1.vuepress.vuejs.org/plugin/official/plugin-search.html)

* 此插件在官方默认主题也适用。

