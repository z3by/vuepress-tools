---
author:
  avatar: https://avatars.githubusercontent.com/u/57344426?v=4
  email: null
  name: bhabgs
  url: null
  username: aepe
bugs: https://github.com/zx-js/vuepress-theme-bhabgs/issues
category: themes
date: '2019-12-11T03:52:44.366Z'
deprecated: false
description: bhabgs theme for VuePress
downloads: null
homepage: https://github.com/zx-js/vuepress-theme-bhabgs
keywords:
- bhabgs
- vuepress
- vue
- theme
- docs
license: false
maintainers: null
name: vuepress-theme-bhabgs
npm: https://www.npmjs.com/package/vuepress-theme-bhabgs
publisher:
  avatar: null
  email: 969565143@qq.com
  name: null
  url: null
  username: bhabgs
repository: https://github.com/zx-js/vuepress-theme-bhabgs
score: 0.34706060464584854
stars: 0
unstable: true
version: 0.1.2
watchers: 0

---

<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-28 09:53:03
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-03 10:27:00
 -->

# vuepress 自定义主题说明

> vuepress-theme-bhabgs 完全按照 vuepress 官网要求进行开发，并集成了 vuepress-default-theme

## 一、使用说明

> 如需使用最新功能 请将插件更新至最新版本

## 二、安装

> `vuepress-theme-bhabgs` 组件时必须安装的

    ``` bash
    npm i -D vuepress-theme-bhabgs
    ```

### 引入

> 在 {{docs}}/.vuepress>config.js 添加如下配置
> 请注意因为该主题是以 vuepress-theme- 开头，你可以使用缩写来省略这个前缀

#### plan 1

```javascript
module.exports = {
    ...,
    theme: 'bhabgs',
    ...
}
```

#### plan 2

```javascript
module.exports = {
    ...,
    theme: 'vuepress-theme-bhabgs',
    ...
}
```

## 三、组件内部自定义组件

> 1. templateMobile
> 2. templatePc

### 使用方式

> 可以直接在 引入该主题的 vuepress 文档内进行标签使用
> `<templateMobile />` 组件 每个 content 容器 有且只有一个 name 生效

```js
<templateMobile name="Button-index">

<<< @/docs/.vuepress/components/Button/index.vue

</templateMobile>
```

| 参数 | 描述           | 类型 | 是否必填   | 可选值 | 默认值 |
| :--- | :------------- | :--- | :--------- | :----- | :----- |
| name | 展示手机端效果 | yes  | any string | ‘’     |

## 四、自定义渲染模板

> 1. explain title
> 2. explain language

### 1. markdown 模板拦截

```js
::: explain any{title}

string | [any]

:::
```

### 1. markdown code 模板拦截

````js
    /\``` explain any{title}
        string code
    ```
````
