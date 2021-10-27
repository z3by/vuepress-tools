---
author:
  avatar: https://avatars.githubusercontent.com/u/13283837?v=4
  email: null
  name: Bestony
  url: null
  username: bestony
bugs: https://github.com/bestony/vuepress-plugin-cleanmylink/issues
category: plugin
date: '2019-12-08T05:48:51.709Z'
deprecated: false
description: A plugin to export all 404 link
downloads: null
homepage: https://github.com/bestony/vuepress-plugin-cleanmylink#readme
keywords:
- vuepress
- vuepress-plugin
- cleanmylink
license: GNU General Public License v3.0
maintainers: null
name: vuepress-plugin-cleanmylink
npm: https://www.npmjs.com/package/vuepress-plugin-cleanmylink
publisher:
  avatar: null
  email: xiqingongzi@gmail.com
  name: null
  url: null
  username: bestony
repository: https://github.com/bestony/vuepress-plugin-cleanmylink
score: 0.562927295218239
stars: 1
unstable: false
version: 1.0.1
watchers: 1

---

# Vuepress-Plugin-cleanmylink
![](https://github.com/bestony/vuepress-plugin-cleanmylink/workflows/Node%20CI/badge.svg) ![](https://github.com/bestony/vuepress-plugin-cleanmylink/workflows/Node.js%20Package/badge.svg)

一个用于检查 Vuepress 下所有的 Hyperlink ，返回所有的非 200 的链接

## 用法

1. 使用 `npm install --save vuepress-plugin-cleanmylink` 安装插件
2. 在 `.vuepress/config.js` 的 plugins 配置项目中加入插件配置，具体如下

```javascript
module.exports = {
  plugins: [
    ['vuepress-plugin-cleanmylink',{
    	allowState: [200,201,301,302,405],
    	fileName: 'link-with-error.txt',
    }]
  ]
}
```

- `allowState` 为允许通过的状态码，一般建议设置为 200,201,301,302。
- `fileName` 为导出链接时的对应文件。根据你自己的需求自定义。如果不需要导出，则设置此项目为 null

## LINCESE

[GPLV3](LICENSE)