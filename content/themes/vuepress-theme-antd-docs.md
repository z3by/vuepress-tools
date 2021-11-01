---
author:
  avatar: https://avatars.githubusercontent.com/u/18214609?v=4
  email: https://github.com/konnga
  name: konnga
  url: null
  username: konnga
bugs: https://github.com/konnga/vuepress-theme-antd-docs/issues
category: theme
date: '2020-10-12T08:48:37.994Z'
deprecated: false
description: vuepress ant design docs
downloads: null
homepage: https://github.com/konnga/vuepress-theme-antd-docs#readme
keywords:
- theme
- vuepress
- vuepress-theme
- antd
- ant-design
- antd-docs
license: MIT License
maintainers: null
name: vuepress-theme-antd-docs
npm: https://www.npmjs.com/package/vuepress-theme-antd-docs
publisher:
  avatar: null
  email: wjc402402@163.com
  name: null
  url: null
  username: konnga
repository: https://github.com/konnga/vuepress-theme-antd-docs
score: 0.2515071348210727
stars: 1
unstable: true
version: 0.0.11
watchers: 1

---

本项目是使用 vuepress 开发的文档平台，ant design 文档风格，用于在线展示组件的使用方式及相关文档。

demo: http://114.67.95.144/docs/

## Usage

## 安装依赖
```shell
yarn vuepress-theme-antd-docs

# or

npm install vuepress-theme-antd-docs
```

## Todo

- [] API Table 组件
- [] 侧边栏分类
- [] 代码显示
- [] 索引菜单层级

## 配置说明

### 使用主题

在你的`.vuepress/config.js`文件中配置：

```js
module.exports = {
  theme: 'antd-docs'
}
```

### 主屏

在主屏的readme中设置 `YAML front matter`

```md
<!-- 是否显示主屏内容 -->
home: true
<!-- 主屏标题 -->
heroText: Wisdom UI
<!-- 主屏图标 -->
heroImage: /images/wc.png
tagline: 企业级产品设计体系，创造高效愉悦的工作体验 ## 标题描述文字
<!-- 主屏按钮 -->
actionText: 开始使用
<!-- 按钮链接 -->
actionLink: /introduce/
features: ## 内容项
- title: 设计思想
  details: 这是 Wisdom UI 评价设计好坏的内在标准。基于「每个人都追求快乐工作」这一假定，我们在「确定性」和「自然」的基础上，新增「意义感」和「生长性」两个价值观，指引每个设计者做更好地判断和决策。
  code: design
- title: 设计思想
  details: 这是 Wisdom UI 评价设计好坏的内在标准。基于「每个人都追求快乐工作」这一假定，我们在「确定性」和「自然」的基础上，新增「意义感」和「生长性」两个价值观，指引每个设计者做更好地判断和决策。
  code: design
  <!-- ## 底部配置 -->
footer: MIT Licensed | Copyright © 2020-present WisdomCity Technology
footerColumn: 3
footerWrap:
- headline: 相关资源
  items:
  - title: 谷歌
    link: www.google.com
    details: 谷歌
  - title: github
    link: www.github.com
    details: github
```

### 主题配置

主题配置与官网默认配置相同，请查看[vuepress 默认主题配置](https://vuepress.vuejs.org/zh/theme/default-theme-config.html)

这里提供一个参考配置`.vuepress/config.js`：

```js
themeConfig: {
        logo: '/images/wc.png',
        navbar: true,
        // 顶部导航
        nav: [
            { text: '设计', link: '/design/' },
            { text: '文档', link: '/introduce/' },
        ],
        // 配置侧边栏菜单
        sidebar: {
            '/design/': [
                {
                    title: 'Wisdom UI', // 必要的
                    path: '/design/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1 // 可选的, 默认值是 1
                }
            ],
            '/introduce/': [
                {
                    title: 'Wisdom UI of Vue',
                    path: '/introduce/',
                    collapsable: false,
                    sidebarDepth: 1
                },
                {
                    title: '快速上手',
                    path: '/introduce/getting-started/',
                    collapsable: false,
                    sidebarDepth: 1
                }
            ],
        }
    }
```

### 在文档中自动生成右侧索引目录

```md
---
title: Wisdom UI of Vue
---
# Wisdom UI of Vue

`wisdom ui` 是基于 Wisdom 设计体系的 Vue UI 组件库，主要用于研发企业级中后台产品。

::: slot toc
[[toc]]
:::
```

### 在文档中设置 footer

在文档 `YAML front matter` 中配置footer相关即可

```md
---
footer: MIT Licensed | Copyright © 2020-present WisdomCity Technology
footerColumn: 3
footerWrap:
- headline: 相关资源
  items:
  - title: 谷歌
    link: www.google.com
    details: 谷歌
  - title: github
    link: github.com
    details: github
---
```

> 灵感来自 vuepress-theme-antdocs，个人改进和实现。
