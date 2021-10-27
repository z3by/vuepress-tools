---
author:
  avatar: https://avatars.githubusercontent.com/u/17965996?v=4
  email: null
  name: talltotal
  url: null
  username: talltotal
bugs: https://github.com/talltotal/vuepress-plugin-editor/issues
category: plugin
date: '2021-06-02T03:17:21.550Z'
deprecated: false
description: editor plugin for vuepress
downloads: null
homepage: https://talltotal.github.io/vuepress-plugin-editor/
keywords:
- rich editor
- editor
- vue
- vuepress
- vuepress-plugin
license: false
maintainers: null
name: '@talltotal/vuepress-plugin-editor'
npm: https://www.npmjs.com/package/%40talltotal%2Fvuepress-plugin-editor
publisher:
  avatar: null
  email: talltotal@163.com
  name: null
  url: null
  username: talltotal
repository: https://github.com/talltotal/vuepress-plugin-editor
score: 0.5378901077854843
stars: 0
unstable: true
version: 0.0.4
watchers: 0

---

# [@talltotal/vuepress-plugin-editor](https://talltotal.github.io/vuepress-plugin-editor/)

在VuePress文档中做一些简单的富文本操作。


## install
```bash
yarn add -D @talltotal/vuepress-plugin-editor
# OR npm install -D @talltotal/vuepress-plugin-editor
```

## Usage
### 在 `config.js` 中引入
```js
module.exports = {
    plugins: ['@talltotal/vuepress-plugin-editor'] 
}
```

### 在 md 文档中使用
直接在文档中以组件元素的形式使用，接收两个参数：
- `name` 模块的名字，需全站唯一
- `type` ‘light’或‘dark’，主题色
- `hideControls` 隐藏操作区
- `minArea` 在组件内划分横向的区域数

```md
<editor name="file-name" />

<editor name="file-name1" type="dark" />
```


### 编辑区快捷键
- tab：4个空格
- command+-：字体缩小
- command++：字体放大
- command+s：保存提交
- command+b：加粗
- command+i：斜体

![demo](./test/20200724210531.jpg)
