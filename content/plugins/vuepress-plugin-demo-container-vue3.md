---
author:
  avatar: https://avatars.githubusercontent.com/u/13920863?v=4
  email: null
  name: cjSound
  url: null
  username: cjSound
bugs: https://github.com/cjSound/vuepress-plugin-demo-container-vue3/issues
category: plugins
date: '2022-01-20T13:42:45.392Z'
deprecated: false
description: Vuepress2 plugin for demo block.
downloads: null
homepage: https://github.com/cjSound/vuepress-plugin-demo-container-vue3#readme
keywords:
- documentation
- plugin
- vue
- vuepress
- vuepress2
- demo
- block
license: false
maintainers: null
name: vuepress-plugin-demo-container-vue3
npm: https://www.npmjs.com/package/vuepress-plugin-demo-container-vue3
publisher:
  avatar: null
  email: 876304802@qq.com
  name: null
  url: null
  username: dlsound
repository: https://github.com/cjSound/vuepress-plugin-demo-container-vue3
score: 0.5895092582475896
stars: 13
unstable: false
version: 1.0.0
watchers: 13

---

# vuepress-plugin-demo-container-vue3

# 介绍

一个基于 Vuepress2 的插件，它可以帮助你在编写文档的时候增加 Vue 示例，它的诞生初衷是为了降低编写组件文档时增加一些相关示例的难度。

使用 Vuepress 编写组件示例有以下问题：

1. 组件示例和示例代码本质上一样，却需要写两遍；
2. Vuepress 无法渲染 组件的示例代码；
   Demo Container vue3 参考了 Element Plus UI 的文档渲染，实现了和它一样的，可在 Markdown 中直接编写示例的语法。

- Element UI **alert**组件的**文档编写示例**，[点此查看](https://github.com/element-plus/element-plus/blob/dev/docs/en-US/component/alert.md)
- Element UI **alert**组件的**文档示例预览**，[点此查看](https://element-plus.gitee.io/zh-CN/component/alert.html)
- 觉得有参考价值的话麻烦点个 **Star** 哟~~~

# 它是如何工作的？

Demo Container 使用 Vuepress 的 [chainMarkdown、extendMarkdown API](https://vuepress.vuejs.org/zh/plugin/option-api.html#extendmarkdown) 拓展了其内部的 markdown 对象，并做了以下操作：

- 动态注册组件，通过扫描文件夹，批量注册文件夹下所有组件，**例如 扫描 examples**
  - examples
    - test
      - test1.vue
- 基于 markdown-it-container 构建了一个识别以下代码块的插件 `示例也可以参考` [Element Plus](https://github.com/element-plus/element-plus/blob/dev/docs/en-US/component/alert.md) ，代码块中的内容为**动态注册组件**相关文件路径，**示例如下**

```
:::demo xxx 支持md
test/test1
:::
```

- md 内容将被转换为对应的组件引用，并通过动态读对应组件实际文本内容，转换为示例输出

# 详细文档

- 请前往[文档中心](https://www.cjsound.cn/vuepress2-plugin/)了解更多
