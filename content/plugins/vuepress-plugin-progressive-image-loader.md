---
author:
  avatar: https://avatars.githubusercontent.com/u/45031678?v=4
  email: null
  name: huaiyugong
  url: null
  username: JialuGong
bugs: https://github.com/JialuGong/vuepress-plugin-progressive-image-loader/issues
category: plugin
date: '2021-05-24T09:11:41.641Z'
deprecated: false
description: a image loader plugin for vuepress
downloads: null
homepage: https://github.com/JialuGong/vuepress-plugin-progressive-image-loader#readme
keywords:
- vuepress
- progressive-image
license: false
maintainers: null
name: vuepress-plugin-progressive-image-loader
npm: https://www.npmjs.com/package/vuepress-plugin-progressive-image-loader
publisher:
  avatar: null
  email: huaiyugong123@gmail.com
  name: null
  url: null
  username: huaiyugong
repository: https://github.com/JialuGong/vuepress-plugin-progressive-image-loader
score: 0.55740450683281
stars: 0
unstable: true
version: 0.0.7
watchers: 0

---

<h1 align="center" style="text-align: center;">VuePress Image Progressive Loader</h1>

![npm badge](https://nodei.co/npm/uepress-plugin-progressive-image-loader.png)

[中文](./README-zh.md)
### Description

A VuePress plugin to help loading the image in a progressive way,just like [gatsby.js](https://www.gatsbyjs.com/) and [medium](https://medium.com/).

Just like this!
![a demo](./.images/screen-shot.gif)


### How to use

If you want to have a try, you can do like follows.

```shell
$ npm install vuepress-plugin-progressive-image-loader
```

And in `.vuepress/config.js`:

```js
module.exports={
    plugin:{'vuepress-plugin-progressive-image-loader'}
}
```

### features

- Follow the laws of progressive loading.
- Generate a small base64 thumbnail for place holder, so it can save the loading time of pages.
- Add a blur for the thumnail to make the transition more fluent.


### Warning 

It's just a very naive version,having many bugs to fix!!!

### more info
[segmentfault](https://segmentfault.com/a/1190000040056541?_ea=134049527)
### TODO
- [ ] support custom image size in markdown
