---
author:
  avatar: https://avatars.githubusercontent.com/u/24877853?v=4
  email: null
  name: xujian
  url: null
  username: sunnyxujian
bugs: https://github.com/sunnyxujian/vuepress-plugin-girls-frontline/issues
category: plugins
date: '2022-06-15T05:45:21.810Z'
deprecated: false
description: girls frontline plugin for VuePress
downloads: null
homepage: https://github.com/sunnyxujian/vuepress-plugin-girls-frontline
keywords:
- vuepress
- plugin
- girls
- models
- lsp
license: MIT License
maintainers: null
name: vuepress-plugin-girls-frontline
npm: https://www.npmjs.com/package/vuepress-plugin-girls-frontline
publisher:
  avatar: null
  email: 1227971544@qq.com
  name: null
  url: null
  username: microjan
repository: https://github.com/sunnyxujian/vuepress-plugin-girls-frontline
score: 0.5205330539423751
stars: 0
unstable: false
version: 1.0.1
watchers: 0

---

# vuepress-plugin-girls-frontline

这个插件会让你的VuePress网站上的右下方展示**前线少女**。

## Get start
### 安装插件
```sh
npm install vuepress-plugin-girls-frontline
# or
yarn add vuepress-plugin-girls-frontline
```
### 配置VuePress插件
> docs/.vuepress/config.js
```js
module.exports = {
  // ...
  plugins: [
    [
      'vuepress-plugin-girls-frontline',
    ],
  ]
  // ...
}
```
### Demo
[ Live Demo ](http://xujian.site/vuepress-plugin-girls-frontline/)


## options
| 配置项      | 类型      | 默认值                                     | 说明                                   |
| :---------- | :-------- | :----------------------------------------- | :------------------------------------- |
| width       | `number`  | `(150 / 1300) * document.body.clientWidth` | 模型的宽度                             |
| height      | `number`  | `(150 / 800) * document.body.clientWidth`  | 模型的高度                             |
| minixModels | `Oject`   | `{}` 例如`{模型名: 模型的json资源地址}`    | 要混入的模型对象                       |
| right       | `number`  | 0                                          | 距离右边页面的距离,单位`px`            |
| bottom      | `number`  | 0                                          | 距离下边页面的距离,单位`px`            |
| model       | `string`  | '--'                                       | 固定展示的模型，可用模型详情如下models |
| pageSwitch  | `boolean` | `false`                                    | 切换页面时是否切换模型                 |

# Models

> '95type_405', 'fn57_2203', 'kp31_3101', 'rfb_1601', 'aa12_2403', 'ads_3601', 'ak12_3302', 'an94_3303', 'carcano1891_2201', 'carcano1938_2202', 'cbjms_3503', 'contender_2302', 'dsr50_1801', 'dsr50_2101', 'g36_2407', 'g36c_1202', 'g41_2401', 'gelina', 'grizzly_2102', 'hk416_3401', 'hk416_805', 'k2_3301', 'kp31_1103', 'kp31_310', 'sat8_2601', 'sat8_3602', 'type64-ar_2901', 'type88_3504', 'ump45_3403', 'ump9_3404', 'vector_1901', 'wa2000_6', 'welrod_1401', 'lewis_3502', 'm1928a1_1501', 'm950a_2303', 'mlemk1_604', 'ntw20_2301', 'ots14_1203', 'ots14_3001', 'pkp_1201', 'px4storm_2801', 'r93_3501'

## Reference

- [ live2d_models_collect ](https://gitee.com/rao_she/live2d_models_collect)  
- [ vuepress-plugin-cat ](https://github.com/QiShaoXuan/vuepress-plugin-cat)

