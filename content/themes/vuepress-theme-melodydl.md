---
author:
  avatar: https://avatars.githubusercontent.com/u/46002903?v=4
  email: null
  name: youdeliang
  url: null
  username: youdeliang
bugs: https://github.com/youdeliang/vuepress-theme-melodydl/issues
category: themes
date: '2020-05-30T07:18:23.501Z'
deprecated: false
description: blog by vuepress
downloads: null
homepage: https://github.com/youdeliang/vuepress-theme-melodydl
keywords:
- blog
- theme
- vuepress
license: MIT License
maintainers: null
name: vuepress-theme-melodydl
npm: https://www.npmjs.com/package/vuepress-theme-melodydl
publisher:
  avatar: null
  email: topyou0316@gmail.com
  name: null
  url: null
  username: topyou
repository: https://github.com/youdeliang/vuepress-theme-melodydl
score: 0.3323536492388997
stars: 22
unstable: false
version: 1.1.2
watchers: 22

---

# VuePress Blog Theme 

[![](https://img.shields.io/circleci/build/github/youdeliang/vuepress-theme-melodydl)](https://circleci.com/gh/youdeliang/vuepress-theme-melodydl)
[![](https://img.shields.io/npm/v/vuepress-theme-melodydl)](https://www.npmjs.com/package/vuepress-theme-melodydl)
[![](https://img.shields.io/github/license/youdeliang/vuepress-theme-melodydl)](https://github.com/youdeliang/vuepress-theme-melodydl/blob/master/LICENSE)

English | [简体中文](./README-zh.md)

## Features
- [x]  This is theme of Vuepress，support the Tag、Pagination and Comment of Blog。
- [x]  Theme is minimalist，config is simple，mobile is adaptive。
- [x] [Address](https://www.ydlcq.cn/)
- [x] Blog Show：

![](https://user-gold-cdn.xitu.io/2020/5/2/171d4a46cd1c4caf?w=599&h=287&f=gif&s=1994152)

## Getting Started

### installation
Create a new project `myBlog`：

```
mkdir myBlog
cd myBlog
```
init by yarn or npm ：

```
yarn init  or npm init -y
```
install `vuepress` 和 `vuepress-theme-melodydl`：

```
yarn add vuepress vuepress-theme-melodydl
or
npm install vuepress vuepress-theme-melodydl
```
Create `src/_posts` directory and the config file of Vuepress. The structure of your project looks like：

```
my-blog
├── src # Blog source files directory
│   ├── .vuepress # Vuepress directory
│   │   └── public # Vuepress static directory
│   │   └── config.js # Vuepress config file
│   └── about # About page directory
│   │   ├── index.md  # about page directory
│   └── _posts # Post directory
│       ├── xxx.md
│       ...
└── package.json
```

add script files into `package.json`:

```
{
  "scripts": {
    "dev": "vuepress dev src",
    "build": "vuepress build src"
  }
}
```

### Config the theme 
Config Vuepress and this theme in `src/.vuepress/config.js`：


<details>
  <summary>click to expand the config</summary>

    module.exports = {
          // Website title
          title: 'Top Blog',
          
          // Description of your website
          description: 'Personal Blog',
          
          // Favicon and others of website
          head: [
            ['link', { rel: 'icon', href: '/favicon.ico' }],
            ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
          ],
          
          // Theme to use
          theme: 'melodydl',
          
          // Theme config
          themeConfig: {
            title: 'Top Blog',

        // Personal information
        personalInfo: {
        
          // Nikename
          name: 'melodydl',
          
          // Avatar image
          avatar: '/avatar-top.jpeg',
          
          // Background image in header
          headerBackgroundImg: '/avatar-bg.jpeg',
          
          // Introduction of yourself (HTML supported)
          description: 'In me the tiger sniffs the rose,
          
          // Email
          email: 'facecode@foxmail.com',
          
          // Location
          location: 'Shanghai, China'
        },
        // Header config (Optional)
        nav: [ 
          {text: 'HOME', link: '/' },
          {text: 'ABOUT', link: '/about/'},
          {text: 'TAGS', link: '/tags/'}      
        ],
        
        //  Background image of navbar in public directory 
        header: {
          home: {
            title: 'Top Blog', 
            subtitle: 'Happy Life, slowly meeting', 
            headerImage: '/home-bg.jpeg'
          },
          
          // title and background image about tag in public directory
          tags: {
            title: 'Tags', 
            subtitle: 'It took all my luck to meet you', 
            headerImage: '/tags-bg.jpg'
          },
          
          // background image of Post's navbar
          postHeaderImg: '/post-bg.jpeg',
        },
        
        // Accounts of SNS
        sns: {
          // Jianshu account and link
          "jianshu": { 
            account: "jianshu", 
            link: "https://www.jianshu.com/u/5dddaee8f351", 
          },
          
          // Weibo account and link
          "weibo": { 
            account: "",
            link: ""
          },
          
          // Zhihu account and link
          "zhihu": { 
            account: "zhihu",
            link: "https://www.zhihu.com/people/sheng-tang-de-xing-kong"
          },
          
          // Github account and link
          "github": { 
            account: "github",
            link: "https://github.com/youdeliang"
          }
        },
        // Footer of website config
        footer: {
          // Gitbutton config
          gitbtn: {
            // github repository
            repository: "https://ghbtns.com/github-btn.html?user=youdeliang&repo=vuepress-theme-top&type=star&count=true",
            frameborder: 0,
            scrolling: 0,
            width: "80px",
            height: "20px"
          },
          
          // Add footer content
          custom: `Copyright &copy; Top Blog 2020 <br /> 
            Theme By <a href="https://www.vuepress.cn/" target="_blank">VuePress</a>
            | <a href="https://www.github.com/youdeliang/" target="_blank">youdeliang</a>`
        },
        
        // Pagination config
        pagination: {
          // number of perPage
          perPage: 5,
        },
        
        // Comments config. See the [Posts Comments] section below.
        comments: {    
          owner: 'youdeliang',
          repo: 'vuepress-theme-melodydl',
          clientId: 'dfba8ecad544784fec1f',
          clientSecret: '1358ac11bc8face24f598601991083e27372988d',
          autoCreateIssue: false,
        },
      }
    }
</details>

### About page config

```
---
layout: about 
title: About
subtitle: You can be great but you don't have to be perfect
headerImage: /about-bg.jpg # picture in public directory
---

About personal Information...
```

### Write your posts
Create first files in `src/_posts`:

```
<!-- _posts/2019-04-01-Promise.md -->
---
title: "JavaScript about Promise"
date: 2019-04-01
tags:
  - Promise
  - JavaScript
---

This is my first post.

The content above `more` is the excerpt, which will be displayed in the posts list.

<!-- more -->

The content below `more` will only be displayed when viewing this post, and will not be displayed in the posts list.

```

Run the `script` to generate your blog website:

```
# develop
npm run dev
# build
npm run build
```

## End
If you like the theme, you can Star to support me ~~ Thank you🙏🙏
