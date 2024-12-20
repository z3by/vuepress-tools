---
author:
  avatar: https://private-avatars.githubusercontent.com/u/8417241?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU0NDAsIm5iZiI6MTczNDY1NDI0MCwicGF0aCI6Ii91Lzg0MTcyNDEifQ.XNq-vzivlVjfE08-soSFAMkj609DO_yJE9qCZEXI2d8&v=4
  email: null
  name: renzhsh
  url: null
  username: renzhsh
bugs: https://github.com/renzhsh/vuepress-mindmap/issues
category: plugins
date: '2021-06-14T08:51:40.292Z'
deprecated: false
description: a plugin to render mindmap for vuepress
downloads: null
homepage: https://github.com/renzhsh/vuepress-mindmap#readme
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
score: 0.46116559067393725
stars: 5
unstable: true
version: 0.2.5
watchers: 5

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