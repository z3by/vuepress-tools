---
author:
  avatar: https://avatars.githubusercontent.com/u/21867818?v=4
  email: null
  name: jinjun
  url: null
  username: jinjun1994
bugs: https://github.com/jinjun1994/vuepress-theme-kim/issues
category: themes
date: '2019-02-10T08:00:24.110Z'
deprecated: false
description: vuepress theme
downloads: null
homepage: https://github.com/jinjun1994/vuepress-theme-kim#readme
keywords:
- vuepress
- theme
license: MIT License
maintainers: null
name: vuepress-theme-kim
npm: https://www.npmjs.com/package/vuepress-theme-kim
publisher:
  avatar: null
  email: jinjun199403@163.com
  name: null
  url: null
  username: jinjun
repository: https://github.com/jinjun1994/vuepress-theme-kim
score: 0.31464642212323246
stars: 0
unstable: false
version: 1.0.5
watchers: 0

---

# vuepress-theme-kim

![https://img.shields.io/badge/vuepress-1.x-brightgreen.svg](https://img.shields.io/badge/vuepress-1.x-brightgreen.svg)![](https://img.shields.io/badge/leancloud--storage-3.10.1-blue.svg)![valine](https://img.shields.io/badge/valine-1.3.4-orange.svg)



> 1. It's a vuepress theme aimed at adding the comments,  reading quantity statistics function , page-information  and other features required for blogging, suitable for `vuepress 1.x`;
> 2. The theme itself is  modified based on the default theme of the vuepress;
> 3. You can open [ https://jinjun1994.github.io/Frontend-Knowledge-Base/]( https://jinjun1994.github.io/Frontend-Knowledge-Base/) to see it.

## Preview

### Home Page

![home page](http://img.dubiqc.com/201902/10125949.png-sign)

### Article Page

![article page](http://img.dubiqc.com/201902/10125729.png-sign)

## Installation and use

1. Install

   ```
   npm install vuepress-theme-kim -dev--save
   
   # or
   
   yarn add vuepress-theme-kim
   ```

2. Use

   ```
   // 修改 /docs/.vuepress/config.js
   
   module.exports = {
     theme: 'kim'
   }  
   ```

## Comment(valine)

Theme with a built-in valine comments, if you want to open this function, only configure your `config.js`

```js
// change /docs/.vuepress/config.js

module.exports = {
  theme: 'kim',
  themeConfig: {
    // valine
    valineConfig: {
      appId: '...',// your appId
      appKey: '...', // your appKey
    }
  }  
}  
```

### Get APP_ID and APP_Key

Valine is a third-party comment module,[https://valine.js.org/en/index.html](https://valine.js.org/en/index.html)

[Click here](https://leancloud.cn/dashboard/login.html#/signup) to register or login in `leancloud`.

[Click here](https://leancloud.cn/dashboard/applist.html#/newapp) Create new application in `Leancloud`, and you will get `APP ID`/`APP Key`.

Create new classes in your application  : Comment  Counter



## page-information 



![page-title](http://img.dubiqc.com/201902/10130220.png-sign)

Add page information when writing articles

````yaml
---
{
author: jinjun,
title: 基础知识,
date: 2018/11/13,
}
---
````

You can learn how to add Front Matter from this page.[Front Matter](https://vuepress.vuejs.org/guide/frontmatter.html)

you can add default author like blow.If you don't add author in Front Matter,the default author will show.

````javascript
// change /docs/.vuepress/config.js
module.exports = {
  theme: 'kim',
  themeConfig: {
    author: 'jinjun'     // default author
    // valine
    valineConfig: {
      appId: '...',// your appId
      appKey: '...', // your appKey
    }
  }  
}  
````

