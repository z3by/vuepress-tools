---
author:
  avatar: https://avatars.githubusercontent.com/u/10718226?v=4
  email: null
  name: Tickly
  url: null
  username: Tickly
bugs: https://github.com/Tickly/vuepress-plugin-code-example/issues
category: plugins
date: '2021-12-18T05:56:21.718Z'
deprecated: false
description: "\u4F60\u603B\u4E0D\u60F3\u4F60\u7684\u793A\u4F8B\u6587\u6863\u8981\u8FD9\
  \u4E48\u5199\u5427\uFF1F"
downloads: null
homepage: https://github.com/Tickly/vuepress-plugin-code-example#readme
keywords:
- vuepress
- plugin
- code
- example
license: false
maintainers: null
name: vuepress-plugin-code-example
npm: https://www.npmjs.com/package/vuepress-plugin-code-example
publisher:
  avatar: null
  email: 807081817@qq.com
  name: null
  url: null
  username: taoguo
repository: https://github.com/Tickly/vuepress-plugin-code-example
score: 0.5086086286714492
stars: 0
unstable: false
version: 1.1.0
watchers: 0

---

# vuepress-plugin-code-example

你总不想你的示例文档要这么写吧？

```md
## 基本用法

<table-basic-usage />
<<< @/docs/.vuepress/components/table/basic-usage.vue
```

那你就可以用这个插件了。

# Install

`yarn add vuepress-plugin-code-example`

# Vuepress Config

`.vuepress/config.js`

```js
module.exports = {
  plugins: ["code-example"],
};
```

# Usage

首先参考官网的[使用组件](https://vuepress.vuejs.org/zh/guide/using-vue.html#%E4%BD%BF%E7%94%A8%E7%BB%84%E4%BB%B6)章节，编写你的组件示例代码。

比如你的示例代码文件路径为 `.vuepress/components/demo.vue`

然后在你的`.md`文件里，按照如下格式编写。

```md
::: code-example demo.vue
:::
```

`code-example`会被插件解析到，后面填写组件的相对路径即可。

# Feature

- 复制代码
- 查看代码（支持按 ESC 切换，毕竟当代码太长的时候，往回翻也是很麻烦的。）

# Preview

![默认效果](/preview/1.png)

## 在线效果

可参考我的一个组件库文档[erpack](https://tickly.github.io/erpack-docs/components/Button.html)

# FAQ

注意，目前插件代码里面包含了`ant-design-vue`的代码，所以要在你的项目中先安装该依赖。  
我会尽快移除该限制。

# Todo

- 优化样式
- 提供主题参数
- 方便二次开发
