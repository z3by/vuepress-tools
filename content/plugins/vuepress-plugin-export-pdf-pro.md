---
author:
  avatar: https://avatars.githubusercontent.com/u/24851764?v=4
  email: null
  name: null
  url: null
  username: jiangliuhong
bugs: https://github.com/jiangliuhong/vuepress-plugin-export-pdf/issues
category: plugin
date: '2021-10-01T15:56:25.091Z'
deprecated: false
description: export pdf
downloads: null
homepage: https://github.com/jiangliuhong/vuepress-plugin-export-pdf#readme
keywords: null
license: false
maintainers: null
name: vuepress-plugin-export-pdf-pro
npm: https://www.npmjs.com/package/vuepress-plugin-export-pdf-pro
publisher:
  avatar: null
  email: ja_rome@163.com
  name: null
  url: null
  username: jarome
repository: https://github.com/jiangliuhong/vuepress-plugin-export-pdf
score: 0.5140699450495604
stars: 2
unstable: false
version: 1.0.2
watchers: 2

---


# vuepress-plugin-export-pdf-pro

## 说明

按文件序号导出合成PDF文件

修改自 [vuepress-plugin-export](https://github.com/ulivz/vuepress-plugin-export)
修改自 [vuepress-plugin-export-pdf](https://github.com/eamiear/vuepress-plugin-export-pdf.git)

## 更新内容

### 1.0.0

- 根据菜单配置(themeConfig.nav)排序
- 导出时，隐藏顶栏菜单（防止菜单遮挡内容）

### 1.0.2

- 解决centos下报错问题：`Running as root without --no-sandbox is not supported.`

## 使用

安装依赖包

```
npm -i vuepress-plugin-export-pdf-pro
```

在`.vuepress/config.js`文件中增加内容：

```
plugins: [
    [
      'vuepress-plugin-export-pdf-pro'
    ]
  ]
```

执行命令：`vuepress export docs`

## 后续计划

- [ ] 导出时增加书签  
