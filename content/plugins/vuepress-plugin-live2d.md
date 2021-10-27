---
author:
  avatar: https://avatars.githubusercontent.com/u/19325842?v=4
  email: null
  name: yanjun0501
  url: null
  username: yanjun0501
bugs: https://github.com/yanjun0501/vuepress-plugin-live2d/issues
category: plugin
date: '2019-10-12T03:55:26.140Z'
deprecated: false
description: A vuepress plugin for live2d~
downloads: null
homepage: https://github.com/yanjun0501/vuepres-plugin-live2d
keywords:
- vuepress
- live2d
license: false
maintainers: null
name: vuepress-plugin-live2d
npm: https://www.npmjs.com/package/vuepress-plugin-live2d
publisher:
  avatar: null
  email: i@yanjun-forever.cn
  name: null
  url: null
  username: yanjun0501
repository: https://github.com/yanjun0501/vuepress-plugin-live2d
score: 0.345975561823053
stars: 17
unstable: true
version: 0.0.7
watchers: 17

---

<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanjun
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: yanjun
 * @LastEditTime: 2019-08-19 10:27:05
 -->
<p align="center">
<img src="https://avatars2.githubusercontent.com/u/19325842?s=460&v=4" alt="vuepress-plugin-live2d" width="100">
</p>
<h1 align="center">vuepress-plugin-live2d</h1>

> 🍰 vuepress-plugin-live2d

## 介绍

vuepress的live2d插件，支持8种模型

## Usage

[使用文档](http://yanjun-forever.cn/technology/fe/VuePress%E6%8F%92%E4%BB%B6%20%E2%80%94%E2%80%94%20%E8%AE%A9%E4%BD%A0%E7%9A%84%E5%8D%9A%E5%AE%A2%E4%B9%9F%E6%8B%A5%E6%9C%89Live2D~.html)
- ### 使用方式
  ```shell
    npm i vuepress-plugin-live2d -S

  ```
  #### 然后在'/docs/.vuepress/config.js'里引入
  ```javascript
    plugins: [
      [
        "vuepress-plugin-live2d",
        {
          "modelName": "",
          "mobileShow": false
        }
      ]
    ]
  ```
  #### 属性
  属性名称 | 类型 | 说明 | 默认值
  --- |--- |--- | ---
  modelName | *String*或者*Array* |模型名称，可选值8个类型（z16，Epsilon2.1，izumi，koharu，shizuku，miku, hijiki, tororo)，也可传入一个数组```['hijiki','tororo',...]```(传入数组时刷新页面或者访问不同页面随机展示 )  | ''
  mobileShow | *Boolean* |是否在移动端展示，默认不展示 | false
  position | *String* |模型展示在左下角or右下角 | 'right'
  
## 参与

如果有任何想法或需求，可以在 [issue](https://github.com/yanjun0501/vuepress-plugin-live2d/issues) 中写下，同时欢迎各种 pull requests

## 参考

**vuepress-plugin-cat** © [QiShaoXuan](https://github.com/QiShaoXuan)<br>
**live2DModel** © [QiShaoXuan](https://github.com/QiShaoXuan)<br>

## Author

**vuepress-plugin-live2d** © [聆歌](https://github.com/yanjun0501)<br>

> Blog [@聆歌](https://yanjun-forever.cn) · GitHub [@聆歌](https://github.com/yanjun0501)
