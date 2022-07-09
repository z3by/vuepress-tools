---
author:
  avatar: https://avatars.githubusercontent.com/u/48052588?v=4
  email: null
  name: wangziweng7890
  url: null
  username: wangziweng7890
bugs: https://github.com/wangziweng7890/vuepress-plugin-code-block-edit/issues
category: plugins
date: '2022-05-26T06:49:02.324Z'
deprecated: false
description: Vuepress plugin for demo-block & code-edit
downloads: null
homepage: https://github.com/wangziweng7890/vuepress-plugin-code-block-edit#readme
keywords:
- vuepress-plugin
- vuepress
- demo
- block
- edit
license: MIT License
maintainers: null
name: vuepress-plugin-code-block-edit
npm: https://www.npmjs.com/package/vuepress-plugin-code-block-edit
publisher:
  avatar: null
  email: 865302637@qq.com
  name: null
  url: null
  username: wangziweng7890
repository: https://github.com/wangziweng7890/vuepress-plugin-code-block-edit
score: 0.4641576991496725
stars: 0
unstable: true
version: 0.1.2
watchers: 0

---

# Vuepress v1 插件

## 简介

1. 使用自定义 ::: demo 语法，写一遍示例即可自动生成组件示例与代码示例；
2. 支持示例中的 import 语法；
3. 支持code在线编辑,包括编辑含import的代码，但不支持再额外引入import

## 安装

```shell
npm i vuepress-plugin-code-block-edit -D
```

## 使用

在 `.vuepress/config.js`  添加此插件:

```js
module.exports = {
  plugins: ['code-block-edit']
}
```

## 开发

**在进行完以上操作后，您即可使用本插件所有功能进行文档开发**

在`.md` 文件中使用以下语法

~~~markdown
::: demo

```vue
<template>
  <div>
    <p>{{message}}</p>
    <input v-model="message" placeholder="输入"></input>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: ''
      }
    }
  };
</script>
```

~~~

## 进阶

如果您没有自己的vuepress项目，本插件也支持一键生vuepress配置，安装相关npm包

在您的项目根目录下使用

```
npx vuepress-plugin-code-block-edit init
```

## 致谢

1. 本插件代码参考 https://github.com/waycowei/vuepress-plugin-demo-container-v2 
   author：@waycowei
2. code-block 与 code-edit 出自于明源云大客服前端团队 @luchx @suxq

向以上人员致谢



# 许可

MIT License