---
author:
  avatar: https://avatars.githubusercontent.com/u/8417241?v=4
  email: null
  name: renzhsh
  url: null
  username: renzhsh
bugs: https://github.com/renzhsh/vuepress-mindmap/issues
category: plugin
date: '2021-06-14T08:51:40.292Z'
deprecated: false
description: a plugin to render mindmap for vuepress
downloads: null
homepage: "https://thinking.renzhansheng.cn/devops/markdown/#\u601D\u7EF4\u5BFC\u56FE"
keywords:
- vue
- vuepress
- vuepress-plugin
- markmap
- mindmap
- markdown
license: MIT License
maintainers: null
name: vuepress-plugin-mindmap
npm: https://www.npmjs.com/package/vuepress-plugin-mindmap
publisher:
  avatar: null
  email: renzhsh@126.com
  name: null
  url: null
  username: renzhsh
repository: https://github.com/renzhsh/vuepress-mindmap
score: 0.516038208666313
stars: 0
unstable: true
version: 0.2.5
watchers: 0

---

# vuepress-plugin-mindmap

+ 一个[VuePress](https://vuepress.vuejs.org/zh/plugin/)插件
+ 将MarkDown渲染成思维导图
+ 使用组件[Markmap](https://markmap.js.org/)



## install
```
npm install vuepress-plugin-mindmap
```

## Demo

```md
<mindmap>
# mindmap
## Links
- <https://thinking.renzhansheng.cn/>
- [GitHub](https://github.com/renzhsh/vuepress-mindmap
## Related
- [Document](https://thinking.renzhansheng.cn/devops/markdown/#思维导图)
## Features
- links
- **inline** ~~text~~ *styles*
- multiline
  text
- `inline code`
</mindmap>
```

+ 一个页面只能有一个`<mindmap>`;
+ `<mindmap></mindmap>`内部不能有空格，容易造成编译失败;
+ 在`Front Matter`部分指定宽度和高度,默认`100%`和`400px`：

```yaml
mindmapWidth: '100%'
mindmapHeight: '400px'
```

## Markmap
```
// 全局安装
cnpm install markmap-cli -g

// render Html
markmap note.md
```