---
author:
  avatar: https://avatars.githubusercontent.com/u/30686223?v=4
  email: howe.personal@gmail.com
  name: LiHowe
  url: null
  username: ziho
bugs: https://github.com/LiHowe/vuepress-plugin-mermaid/issues
category: plugins
date: '2022-05-13T09:52:16.682Z'
deprecated: false
description: A Mermaid plugin for vuepress-next
downloads: null
homepage: https://github.com/LiHowe/vuepress-plugin-mermaid
keywords:
- vue
- vuepress
- vuepress-plugin
- vuepress-next
- mermaid
license: MIT License
maintainers: null
name: vuepress-plugin-mermaid-next
npm: https://www.npmjs.com/package/vuepress-plugin-mermaid-next
publisher:
  avatar: null
  email: howe.personal@gmail.com
  name: null
  url: null
  username: ziho
repository: https://github.com/LiHowe/vuepress-plugin-mermaid
score: 0.4472163103598433
stars: 1
unstable: true
version: 0.1.9
watchers: 1

---

# vuepress-plugin-mermaid-next

![npm](https://img.shields.io/npm/v/vuepress-plugin-mermaid-next?style=flat-square)
![npm](https://img.shields.io/npm/dm/vuepress-plugin-mermaid-next?style=flat-square)
![mv](https://img.shields.io/static/v1?label=mermaid&message=^9.2.1&color=blue&style=flat-square)

> 该插件仅适用于 [`vuepress-next`](https://vuepress.github.io)

[English Version](./README_EN.md)

![dark theme](https://s2.loli.net/2023/01/13/NTaYjKcpb1L8wZt.gif)

## 安装

```shell
# use npm
npm install mermaid vuepress-plugin-mermaid-next
```

## 使用

### 基础使用

在 `.vuepress/config.ts` or (`config.js`) 中配置

```typescript
import { MermaidPlugin, Themes } from 'vuepress-plugin-mermaid-next'

export default {
  plugins: [
    MermaidPlugin({
      theme: Themes.forest,
      darkTheme: 'forest', // 非必填, 默认值为 `dark`
    }),
  ],
}
```

本插件支持明亮模式与暗黑模式独立配置, 需要在配置中表明 `darkTheme` 即可.
如未提供 `darkTheme` 配置, 则使用 `dark` 作为默认暗黑主题.

### Mermaid 配置

你可以传入插件配置来自定义mermaid, 传入的配置将会用于 `mermaid.initialize()`

Mermaid 完整的配置字段可以查看 [Mermaid - Configuration](https://mermaid-js.github.io/mermaid/#/./Setup?id=mermaidapi-configuration-defaults)

### 主题配置

除了mermaid提供的开箱即用的主题外, 插件还补充了以下主题:

#### 明亮主题

+ `Themes.sky`: 浅蓝色调
![浅蓝色主题](https://s2.loli.net/2023/01/13/e8Y3Rqu4KowCjN6.png)
+ `Themes.ocean`: 深蓝色调

#### 暗黑主题

+ `Themes.brown`
![棕色主题](https://s2.loli.net/2023/01/13/NGYc2A4e7BytmOR.png)

#### 自定义主题

如果你想修改内置主题的部分颜色, 可以在配置中添加 `themeVariables` 来覆盖主题颜色, 具体可覆盖颜色参考[官网](https://mermaid.js.org/config/theming.html)

```ts
import { MermaidPlugin, Themes } from 'vuepress-plugin-mermaid-next'
export default {
  plugins: [
    MermaidPlugin({
      theme: Themes.sky,
      themeVariables: {
        fontSize: '14px',
        primaryColor: '#FFC3A1',
      }
    })
  ]
}
```

如果你想完全自定义一个主题, 本插件提供了 `registerTheme` 来自定义主题.

API: `registerTheme(id, themeVariables)`

```ts
import { MermaidPlugin, Themes, registerTheme } from 'vuepress-plugin-mermaid-next'

const fire = registerTheme('fire', {
  background: '#FFC3A1',
  fontSize: '14px',
  primaryColor: '#FFC3A1',
  noteBkgColor: '#F0997D',
  noteTextColor: '#333',
  lineColor: '#A75D5D',
})

export default {
  plugins: [
    MermaidPlugin({
      theme: fire,
    })
  ]
}
```

## 功能

+ [x] Dark mode supported
+ [x] mermaid config supported
+ [x] Preset themes
+ [ ] External Diagrams(MindMap)
