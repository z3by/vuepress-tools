---
author:
  avatar: https://avatars.githubusercontent.com/u/16745751?v=4
  email: null
  name: pengzhanbo
  url: null
  username: pengzhanbo
bugs: https://github.com/pengzhanbo/vuepress-plugin-caniuse/issues
category: plugins
date: '2022-04-03T21:06:10.909Z'
deprecated: false
description: vuepress2.x plugin, support can-I-use container for markdown
downloads: null
homepage: https://github.com/pengzhanbo/vuepress-plugin-caniuse
keywords:
- vuepress-next
- vuepress
- vuepress-plugin
- vuepress-plugin-caniuse
- can I use
license: false
maintainers: null
name: '@pengzhanbo/vuepress-plugin-caniuse'
npm: https://www.npmjs.com/package/%40pengzhanbo%2Fvuepress-plugin-caniuse
publisher:
  avatar: null
  email: volodymyr@foxmail.com
  name: null
  url: null
  username: pengzhanbo
repository: https://github.com/pengzhanbo/vuepress-plugin-caniuse
score: 0.5163411251492763
stars: 0
unstable: false
version: 1.0.2
watchers: 0

---

# vuepress-plugin-caniuse

支持在 vuepress2.x 文档中嵌入 [can-I-use](https://caniuse.com/) 的 feature support chart

## Install

``` sh
yarn add @pengzhanbo/vuepress-plugin-caniuse
```

## Usage

在你的vuepress 配置文件中添加插件。
并进行插件配置

### options

type: 渲染方式

- embed: 交互式嵌入。
- image: 仅插入一张图片

``` js
// vuepress config.js
export default {
    // ...
    plugin: [
        // ...
        ['@pengzhanbo/vuepress-plugin-caniuse', { type: 'embed' }] // embed | image
    ]
    // ...
}
```

markdown 书写格式：
``` md
::: caniuse [feature]
:::
```

feature的标准写法值，参考：[https://caniuse.bitsofco.de/](https://caniuse.bitsofco.de/)

In your markdown file:
``` md
::: caniuse css-matches-pseudo
:::
```

效果：

![css-dir-pseudo](https://caniuse.bitsofco.de/image/css-dir-pseudo.webp)
