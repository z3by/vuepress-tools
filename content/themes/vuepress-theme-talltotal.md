---
author:
  avatar: https://avatars.githubusercontent.com/u/17965996?v=4
  email: null
  name: talltotal
  url: null
  username: talltotal
bugs: https://github.com/talltotal/vuepress-theme-talltotal/issues
category: theme
date: '2020-04-20T12:18:30.276Z'
deprecated: false
description: talltotal theme for VuePress
downloads: null
homepage: https://github.com/talltotal/vuepress-theme-talltotal#readme
keywords:
- vue
- vuepress
- vuepress-theme
license: false
maintainers: null
name: vuepress-theme-talltotal
npm: https://www.npmjs.com/package/vuepress-theme-talltotal
publisher:
  avatar: null
  email: talltotal@163.com
  name: null
  url: null
  username: talltotal
repository: https://github.com/talltotal/vuepress-theme-talltotal
score: 0.42038864945149046
stars: 2
unstable: true
version: 0.0.13
watchers: 2

---

# vuepress-theme-talltotal

for [vuepress](https://vuepress.vuejs.org/zh/config/#theme)

## 0.x => 1.x
- `frontmatter.layout` => `frontmatter.innerLayout`


## install

```bash
npm install -D vuepress-theme-talltotal

yarn add --dev vuepress-theme-talltotal
```

## why
- style
- auto menu
- themeType：light or dark
    - 优先级：配置设置 > 系统设置 > 默认light

![light](https://talltotal.github.io/vuepress-theme-talltotal/imgs/light.jpg)
![dark](https://talltotal.github.io/vuepress-theme-talltotal/imgs/dark.jpg)

## config

根据配置自动生成菜单：

```js
{
    theme: 'talltotal',
    themeConfig: {
        // config for ‘themeType’
        themeType: 'light', // or dark or undefined
        // config for ‘auto menu’
        // 定义自动生成
        sidebar: 'auto',
        // 配置
        listAllSidebar: {
            // 不在左菜单中显示的文件，打开当前文件时也不会显示左菜单
            ignore: ['/dist/'],
            // 归组做一级目录，key为一级目录名；不归属任何组的页面列在组后
            group: {
                '页面': ['/src/views/'],
                '组件': ['/src/components/'],
            },
        },
    }
}
{
    theme: 'talltotal',
    themeConfig: {
        sidebar: 'auto',
        listAllSidebar: {
            // 模块内的 README.md 目录名，不设置时不会显示在菜单栏，设置时此项会列在左菜单的第一个
            showIndex: 'home',
            // 定义模块，模块内的页面左菜单一致；不归属任何模块的页面合并为一个模块
            modules: ['/work/', '/docs/'],
            // 以文件结构为组，文件夹名为一级目录名，目前最多支持2级；为 true 时，group 配置无效
            groupByDir: true,
        },
    }
}
```
