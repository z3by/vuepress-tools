---
author:
  avatar: https://private-avatars.githubusercontent.com/u/48777072?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUxNDAsIm5iZiI6MTczNDY1Mzk0MCwicGF0aCI6Ii91LzQ4Nzc3MDcyIn0.9WiC2n-4y6RdqoqjSCzxBe2haWAwwPoVofWNByxKpeI&v=4
  email: zpj80231@163.com
  name: zpj80231
  url: null
  username: zpj80231
bugs: https://github.com/zpj80231/vuepress-plugin-boxx/issues
category: plugins
date: '2020-04-12T01:24:46.995Z'
deprecated: false
description: Simplification of VuePress Custom Containers!
downloads: null
homepage: https://zpj80231.github.io/znote
keywords:
- vuepress-theme-reco
- boxx
- vuepress
license: MIT License
maintainers: null
name: vuepress-plugin-boxx
npm: https://www.npmjs.com/package/vuepress-plugin-boxx
publisher:
  avatar: null
  email: zpj80231@163.com
  name: null
  url: null
  username: zpj80231
repository: https://github.com/zpj80231/vuepress-plugin-boxx
score: 0.3164279763568628
stars: 6
unstable: true
version: 0.0.7
watchers: 6

---

# Boxx

## 序言

- 由于在引入默认的VuePress Custom Containers太过笨重了，故闲来无事对其做一层封装简化使用
- 推荐在线观看使用说明 --> [传送门](https://zpj80231.gitee.io/znote/views/frontend/vuepress-plugin-boxx.html)，这样展示效果更加友好
- 显示效果参考我的VuePress博客里的任一篇文章开头 --> [znote](https://zpj80231.gitee.io/znote/)

## 安装

- 在文件`package.json`中的`devDependencies`下加入`"vuepress-plugin-boxx": "1.0.0"`：

```json
"devDependencies": {
    "vuepress-plugin-boxx": "1.0.0"
}
```

- 在 vuepress 的`config.js`中配置`plugins`：

```json
"plugins": [
    ["vuepress-plugin-boxx"]
],
```

- 在`package.json`目录下执行命令：`npm install`
- 正常启动项目，接着如下使用即可     

## 使用

- 引入：只需在你想要插入的地方加入 `<Boxx/>` 即可（如上）
- 内容：默认随机展示名人名句，支持自定义
- 样式：有三种样式，默认为 tip 样式，支持自定义
- 注意：除`<Boxx/>`这个标签是必须外，**标签属性均为可选**，所有标签属性会在下文中详细介绍

##  默认样式

- tip

只需一行：` <Boxx type='tip' title='自定义' content='自定义' /> ` 

- warning

只需一行：` <Boxx type='warning' title='自定义' content='自定义' /> `

- danger

只需一行：` <Boxx type='danger' title='自定义' content='自定义' />`

## 自定义标题和内容

- 如果默认的名人名句不满足需求的话，自定义只需指定两个属性`title`和`content`的值

| Name    | Type   | Description                           |
| ------- | ------ | ------------------------------------- |
| title   | String | 要展示的`title`的内容，支持html标签   |
| content | String | 要展示的`content`的内容，支持html标签 |

- 当然你也可以只输入`title`或`content`，如下：

短短的 title：` <Boxx type='warning' title='自定义' /> `

更短短的 content：` <Boxx type='danger' content='自定义' />`

## 自定义样式

- 指定三个属性值实现

| Name         | Type   | Description                            |
| :----------- | ------ | -------------------------------------- |
| blockStyle   | Object | 整体块元素的样式                       |
| titleStyle   | Object | 只针对`title`的样式                    |
| contentStyle | Object | 只针对`content`的样式                  |
| changeTime   | Number | 以毫秒值为单位的动态变化时间，顶部为例 |

需要注意的是：属性值传输的对象只能通过`v-bind:`绑定来实现

在Markdown中这样书写即可：

```js
<marquee>
<Boxx :blockStyle="blockStyle"  />
<Boxx type="warning" :blockStyle="titleStyle" :titleStyle="titleStyle" changeTime="1000" title="我是一个大大的且变化的 title"/>
<Boxx type="danger" :blockStyle="contentStyle" :contentStyle="contentStyle" content="我是一个小小的<br><marquee>content</marquee>"/>
</marquee>

<script>
	export default {
		data() {
			return {
				blockStyle: {'background':'#eee','color':'red'},
                titleStyle: {'margin-right': '10%','font-size':'16px'},
                contentStyle: {'margin-right': '20%','font-size':'10px',
                               "margin-top": "1rem","margin-bottom": "0.4rem"},
			}
		}
	}
</script>
```

