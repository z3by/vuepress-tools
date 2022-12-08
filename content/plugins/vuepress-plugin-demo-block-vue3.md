---
author:
  avatar: https://avatars.githubusercontent.com/u/93666053?v=4
  email: null
  name: seepine
  url: null
  username: seepine
bugs: https://github.com/seepine/vuepress-plugin-demo-block-vue3/issues
category: plugins
date: '2022-02-05T08:55:08.488Z'
deprecated: false
description: Vuepress2 plugin for demo block support vue3.
downloads: null
homepage: https://github.com/seepine/vuepress-plugin-demo-block-vue3
keywords:
- documentation
- plugin
- vue
- vue3
- vuepress
- vuepress2
- demo
- block
license: false
maintainers: null
name: vuepress-plugin-demo-block-vue3
npm: https://www.npmjs.com/package/vuepress-plugin-demo-block-vue3
publisher:
  avatar: null
  email: seepine@163.com
  name: null
  url: null
  username: seepine
repository: https://github.com/seepine/vuepress-plugin-demo-block-vue3
score: 0.5144783856175253
stars: 5
unstable: false
version: 1.0.3
watchers: 5

---

# vuepress-plugin-demo-block-vue3
## 介绍
基于Vuepress2的插件，它可以帮助你在编写组件库文档的时候增加示例代码和预览。

查看文档和示例：[https://demo-block.seepine.com](https://demo-block.seepine.com)或克隆项目运行

## 安装

### 安装 VuePress

请参考 Vuepress2 官方文档，[点此查看](https://v2.vuepress.vuejs.org/zh/guide/getting-started.html)

### 安装插件

使用 `yarn` 安装 `vuepress-plugin-demo-block-vue3` 插件

```bash
yarn add vuepress-plugin-demo-block-vue3 -D
```

或者使用 `npm` 安装它：

```bash
npm i vuepress-plugin-demo-block-vue3 --save-dev
```

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

### 配置插件

打开 .vuepress/config.js 文件，然后在合适的位置引用插件：

- **配置扫描路径** `componentsDir`

```js
import { defineUserConfig } from 'vuepress'
import blockDemo from "vuepress-plugin-demo-block-vue3"

export default defineUserConfig({
  ...
  plugins: [
    blockDemo({
      // 设置路径
      path: __dirname,
    })
  ],
  ...
})
```
::: warning 注意
componentsDir 必传，为动态注册组件的基础路径，目录结构可参考 element-plus
:::

## 引入组件
可在`.vuepress/client.js`引入组件，需要注意的是，第三方库可能还需要依赖，例如`ant-design-vue`还需要`less`和`less-loader`，请自行安装

```js
import { defineClientConfig } from '@vuepress/client'

// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";

// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

// import ArcoVue from '@arco-design/web-vue';
// import ArcoVueIcon from '@arco-design/web-vue/es/icon';
// import '@arco-design/web-vue/dist/arco.css';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
      // app.use(Antd)
      // app.use(ElementPlus)
      // app.use(ArcoVue);
      // app.use(ArcoVueIcon);
  },
  setup() {},
  rootComponents: [],
})
```
