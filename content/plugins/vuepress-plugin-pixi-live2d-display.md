---
author:
  avatar: https://avatars.githubusercontent.com/u/12521383?v=4
  email: null
  name: mizuka.wu@outlook.com
  url: null
  username: mizuka-wu
bugs: https://github.com/mizuka-wu/vuepress-plugin-pixi-live2d-display/issues
category: plugin
date: '2021-07-02T07:58:46.874Z'
deprecated: false
description: use live2d in vuepress
downloads: null
homepage: https://github.com/mizuka-wu/vuepress-plugin-pixi-live2d-display#readme
keywords:
- vuepress
- live2d
license: MIT License
maintainers: null
name: vuepress-plugin-pixi-live2d-display
npm: https://www.npmjs.com/package/vuepress-plugin-pixi-live2d-display
publisher:
  avatar: null
  email: mizuka.wu@outlook.com
  name: null
  url: null
  username: mizuka
repository: https://github.com/mizuka-wu/vuepress-plugin-pixi-live2d-display
score: 0.5090936471489838
stars: 1
unstable: false
version: 1.0.1
watchers: 1

---

# vuepress pixi-live2d-display插件

感谢[vuepress-plugin-cat](https://github.com/QiShaoXuan/vuepress-plugin-cat/blob/master/cat.vue)给的灵感

因为我找了半天没有可以自定义`live2d`模型的插件，只能自己写了

**仅支持新版本的模型！**

## 预览
![预览DEMO](./demo.jpg)

## 安装
```bash
npm i vuepress-plugin-pixi-live2d-display

or

yarn add vuepress-plugin-pixi-live2d-display
```

## 使用
在你的`config.js`中增加
```
module.exports = {
  plugins: [
      ['vuepress-plugin-pixi-live2d-display', { model: "你的模型地址" }]
  ]
}
```

## 其他参数
| 属性           | 类型    | 必填  | 默认  | 说明                                                                 |
|----------------|---------|-------|-------|----------------------------------------------------------------------|
| containerStyle | Object  | false | {}    | 给整个容器的样式，默认为右下角400 x 400的方框                        |
| model          | String  | true  | null  | model3.json的地址                                                    |
| mobile         | boolean | false | false | 是否在手机上显示                                                     |
| offsetX        | number  | false | 0     | 模型位置偏移，根据模型实际尺寸来，可能很大                           |
| offsetY        | number  | false | 0     | 模型位置偏移，根据模型实际尺寸来，可能很大                           |
| delay          | number  | false | 2000  | 受限于引入依赖库的问题，需要延迟加载模型，延迟的时间，建议至少大于1s |
| scale          | number  | false | 1     | 模型缩放                                                             |

## 开发
### 实现原理
挂载了一个`Live2d.vue`放在右下角来加载`live2d`的模型文件，内部使用`pixi-live2d-display`实现

#### 文件说明
- `index.js` 主入口，加载插件，包含加载`lib`和挂载全局的`vue`文件
- `enhanceAppFile` 向`vuepress`运行时注入一个支持设定`props`的`vue`文件
- `live2d.vue` 显示组件
- `lib/index.js` 向`html`内注入所需的第三方`js`
- `lib/*.js` 第三方`js`,实际上未使用

#### 传参的魔改原理
官方文档没找到如果正确给`ui`组件传参数，所以魔改了一个，具体代码看`enhanceAppFile`和`index.js`内引用`enhanceAppFile`的方式

魔改`vue`文件的`props`的`default`属性
## 参考
- [vuepress-plugin-cat](https://github.com/QiShaoXuan/vuepress-plugin-cat/blob/master/cat.vue)
- [pixi-live2d-display](https://github.com/guansss/pixi-live2d-display/blob/master/README.zh.md)

