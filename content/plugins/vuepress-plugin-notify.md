---
author:
  avatar: https://avatars.githubusercontent.com/u/31888710?v=4
  email: null
  name: "\u524D\u7AEF\u6709\u9053"
  url: null
  username: qqlcx5
bugs: https://github.com/qqlcx5/vuepress-plugin-notify/issues
category: plugin
date: '2021-05-23T12:33:59.365Z'
deprecated: false
description: Notify plugin for vuepress theme.
downloads: null
homepage: https://github.com/qqlcx5
keywords:
- vuepress
- notify
- "\u901A\u77E5\u5F39\u51FA\u6846"
- vuepress-plugin-notify
license: false
maintainers: null
name: vuepress-plugin-notify
npm: https://www.npmjs.com/package/vuepress-plugin-notify
publisher:
  avatar: null
  email: 893917884@qq.com
  name: null
  url: null
  username: qqlcx5
repository: https://github.com/qqlcx5/vuepress-plugin-notify
score: 0.4710570739061944
stars: 0
unstable: false
version: 1.0.8
watchers: 0

---

# vuepress-plugin-notify

## Introduce

Notify plugin for vuepress theme.

基于vuepress-theme-reco主题的插件基础上做了一些调整。

## Usage

```js
plugins: [
  ['vuepress-plugin-notify'), {
      title: '扫一扫',
      body: [
        {
          type: 'title',
          content: '关注订阅号获取更多福利',
          style: 'text-aligin: center;color: #2878ff;',
        },
        {
          type: 'image',
          src: 'https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@v1.0.0/image/public.jpg',
        },
      ],
      footer: [
        {
          type: 'title',
          content: '免费答疑解惑交流群',
          style: 'text-aligin: center;color: #2878ff;',
        },
        {
          type: 'image',
          src: 'https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@v1.0.0/image/wechat.jpeg',
        },
      ]
    }]
]
```

**弹窗可以三部分**

 - 标题
 - 内容
 - 底部

其中标题是普通文本，内容和底部操作内容均为数组，支持 4 种 dom，需要通过 `schema` 配置来控制显示效果，可以根据需要自由组合：

**标题**

```json
{
  "type": "title",
  "content": "这里显示 h5 标题"
}
```

**文本**

```json
{
  "type": "text",
  "content": "这里显示普通文本"
}
```

**图片**

```json
{
  "type": "image",
  "src": "/rvcode_qq.png"
}
```

**按钮**

```json
{
  "type": "button",
  "text": "打赏",
  "link": "/donate"
}
```

**给 dom 添加样式**

```json
{
  "type": "title",
  "content": "这里显示 h5 标题",
  "style": "text-aligin: center;"
}
```

## contact

**微信**

![wechat](https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@v1.0.0/image/wechat.jpeg)

**前端有道公众号**

![wechat](https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@v1.0.0/image/public.jpg)
