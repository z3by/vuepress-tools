---
author:
  avatar: https://avatars.githubusercontent.com/u/43390827?v=4
  email: null
  name: null
  url: null
  username: QYueWang
bugs: https://github.com/QYueWang/vuepress-plugin-flexsearch-pro/issues
category: plugin
date: '2021-02-01T14:54:40.939Z'
deprecated: false
description: En/De/Cn/Ja/Ko languages full text search
downloads: null
homepage: https://github.com/QYueWang/vuepress-plugin-flexsearch-pro
keywords:
- vuepress-plugin-flexsearch-pro
- vuepress-search
- search
- vuepress-plugin
- vuepress
license: MIT License
maintainers: null
name: vuepress-plugin-flexsearch-pro
npm: https://www.npmjs.com/package/vuepress-plugin-flexsearch-pro
publisher:
  avatar: null
  email: 2907776040@qq.com
  name: null
  url: null
  username: qiuyw
repository: https://github.com/QYueWang/vuepress-plugin-flexsearch-pro
score: 0.46806487715095
stars: 3
unstable: false
version: 1.0.3
watchers: 3

---

# vuepress-plugin-flexsearch-pro

本项目在[vuepress-plugin-flexsearch](https://github.com/z3by/vuepress-plugin-flexsearch.git)的基础上进行修改。可以替换vuepress自带的搜索控件，支持中文、英文、德文、韩文、日文的全文搜索。

## 安装

```bash
yarn add -D vuepress-plugin-flexsearch-pro
// or npm install vuepress-plugin-flexsearch-pro -D
```

## 使用

使用默认方式:

```js
// .vuepress/config.js

module.exports = {
    plugins: [
      ['flexsearch-pro'],
      // other plugins
    ]
}
```

或者自定义搜索参数:

```js
// .vuepress/config.js

module.exports = {
    plugins: [
      ['flexsearch-pro', {
        /*
          自定义搜索参数
        */
        searchPaths: ['path1', 'path2'],    // 搜索路径数组，为空表示搜索全部路径
        searchHotkeys: ['s'],    // 激活搜索控件的热键, 默认是 "s" ，也可以添加更多热键
        searchResultLength: 60,    // 搜索结果展示的字符长度, 默认是60个字节
      }],
      // other plugins
    ]
}
```
## 修改说明

**config.js**

 1、不再支持search_options自定义，不能定义flexsearch的Options参数，如需修改请到SearchBox.vue里修改参数适配。

 2、去掉了maxSuggestions，一般全局搜索都展示所有的结果，不会限定搜索出来的结果。

**index.js**

将flexsearch的options定义放到了SearchBox.vue中。

**SearchBox.vue**

1、适配中英文搜索，依据搜索的关键词（query）判断是中文还是英文进行匹配FlexSearch实例。

2、修改呈现样式，增加滚动条。

## 呈现效果
![](./example/微信截图_20210201132754.png)

## 感谢

Thanks to [nextapps-de/flexsearch](https://github.com/nextapps-de/flexsearch) and [vuepress-plugin-flexsearch](https://github.com/z3by/vuepress-plugin-flexsearch.git)
