---
author:
  avatar: https://private-avatars.githubusercontent.com/u/20850932?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU1MDAsIm5iZiI6MTczNDY1NDMwMCwicGF0aCI6Ii91LzIwODUwOTMyIn0.-lzvq4oIrTOtlP5l2YNs-tdfwLZAlV9UMTKYbtUj6KY&v=4
  email: null
  name: zhangximufeng
  url: null
  username: zhangximufeng
bugs: https://github.com/zhangximufeng/vuepress-theme-mufeng/issues
category: themes
date: '2018-09-11T14:50:10.318Z'
deprecated: false
description: vuepress-theme
downloads: null
homepage: https://github.com/zhangximufeng/vuepress-theme-mufeng/blob/master/README.md
keywords:
- vuepress
- theme
- vuepress-theme
license: MIT License
maintainers: null
name: vuepress-theme-mufeng
npm: https://www.npmjs.com/package/vuepress-theme-mufeng
publisher:
  avatar: null
  email: zhangximufeng@gmail.com
  name: null
  url: null
  username: zhangximufeng
repository: https://github.com/zhangximufeng/vuepress-theme-mufeng
score: 0.4516380423287344
stars: 14
unstable: false
version: 2.4.5
watchers: 14

---

[![vuepress-theme-mufeng](https://github-readme-stats.vercel.app/api?username=zhangximufeng)](https://zhangximufeng.github.io)
## vuepress-theme-mufeng
[demo](https://zhangximufeng.github.io)
## Installation

```bash
yarn add vuepress-theme-mufeng -S
```
or with npm
```bash
npm install vuepress-theme-mufeng --save-dev
```

## Article

**Render an overview of the article**
To generate a preview of the post on the cards, use excerpt by adding `<!-- more -->` after the first paragraph or first few introductory lines in your post.

```
## What is Vue.js -
In this post I will talk about Vue.js
<!-- more -->
Vue.js is awesome
```

As in the above form, adding the `<!-- more -->` tag to the `md` file, will render the content before this tag into the articles list as their preview.


## Articles meta-data
Use [mufengblog shell](https://github.com/zhangximufeng/mufengblog-shell) to generate a new post with automatic date-time stamp, title and metadata etc. this helps the cards to sort according to date automatically, also filter the posts by tags etc.

install shell with
```bash
yarn global add mufengblog-shell
```
and then from your project's root dir, run
```bash
mufengblog post -p <post-name> --page README.md
```
like if your post is named javascript, just run
```bash
mufengblog post -p javascript --page README.md
```

this will create a folder called javascript and a `README.md` file in it with required data automatically. You can then make changes to this file like changing the title and metadata, tags etc.

```yaml
title: Article title
# date is used for article sorting
date: 2017-08-15 10:27:26
tag: # Article tag, can be a String or an Array
  - js
  - react
# Meta tags that can be used to crawl by search engines
meta:
  - name: description
    content: Some description about your post
  - name: keywords # keywords Tags, will be queried when searching within pages
    content: theme vuepress
```
To let the theme filter by tags, add the following information alongside your previous themeConfig in `config.js` inside `.vuepress` folder

## tags

```js
module.exports = {
  themeConfig: {
    tags: true,
    nav: [
      { text: 'TAGS', link: '/tags/', tags: true }
    ]
  }
}
```

the above configuration let's theme know that `TAGS` field in the navbar is specifically for browsing tags from posts. When you visit the above path, it looks like following:


## Comment System

Use `gitalk` for comment system, click [gitalk](https://github.com/gitalk/gitalk) for more details.

But, don't support flipMoveOptions and render instane method

## Configuration

For your reference, I have put the configuration of my blog (`.vuepress/config.js`) here:

```js
module.exports = {
  // Enable custom themes
  theme: 'mufeng',
  title: 'mufeng',
  description: 'vuepress theme mufeng',
  head: [
      ['link', { rel: 'icon', href: `/favicon.ico` }]
  ],
  port: 3000,
  // Google Analytics ID
  ga: 'xxxxx',
  // PWA support
  serviceWorker: true,
  // fuck IE
  evergreen: true,
  markdown: {
    // markdown-it-anchor options
    anchor: { permalink: true },
    // markdown-it-toc options
    toc: { includeLevel: [1, 2] },
    config: md => {
      md.use(require('markdown-it-task-lists')) // a checkbox TODO List plugin
        .use(require('markdown-it-imsize'), { autofill: true }) // Support for custom md image size ![test](image.png =100x200)
    }
  },
  // Yubisaki theme specific configuration
  themeConfig: {
    // Blog background image
    background: '/background/path',
    tags: true,
    // github card
    github: 'github username',
    // favicon image (logo)
    logo: '/logo/path',
    // Custom article title color
    accentColor: '#ac3e40',
    // Number of articles displayed per page
    per_page: 5,
    // The time format for creating an article. If not set, it will not be displayed. Optional [yyyy-MM-dd HH:mm:ss]
    date_format: 'yyyy-MM-dd',
    // options for comment (gitalk), don't support flipMoveOptions and render instane method
    comment: {
      clientID: 'GitHub Application Client ID',
      clientSecret: 'GitHub Application Client Secret',
      repo: 'GitHub repo',
      owner: 'GitHub repo owner',
      admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
      perPage: 5,
      distractionFreeMode: false  // Facebook-like distraction free mode
    },
    // customize the links on the navigation bar
    nav: [
        { text: 'HOME', link: '/', root: true }, // Specify this as the root directory of the blog post
        { text: 'TAGS', link: '/tags/', tags: true }, // Specify the tags directory
        { text: 'GITHUB', link: 'https://github.com/zhangximufeng' },
        { text: 'about me', link: '/about/' },
    ]
  }
}
```


## customize the layout

Besides the basic `yaml` config generated by `mufengblog-shell`, you can add the following information to customize the layout as you want:

to customize the layout, add the following to the header of the `markdown` file

```yaml
heroText: Mufeng # title
activity: true # Use a custom activity layout that will collapse the card bar on the right
hidden: true # Set whether to display in the article list
tagline: Vuepress blog theme # description
heroImage: /static/logo.png # logo
# Refer to the configuration of the official default theme for service static files
actionText: Learn about →
actionLink: /mufeng/usage.html
# If you want to have more than one action button (in this case actionText and actionLink will be ignored):
# actions :
#    - text : Action1
#      link : /mufeng/action1.html
#    - text : Action2
#      link : /mufeng/action2.html
features:
  - title: what is this
    details: A vuepress-based blog theme based on the default theme provided by vuepress
  - title: What are the characteristics?
    details: Provide article list, article pagination, article details, github card, custom event page layout, etc.
  - title: TODO
    details: Tag cloud, TAG ARCHIVE, some scripts, some out of the box layout
footer: by stickmy
```

## Development, deployment

**In the docs directory (or the root of your project), be sure to put a markdown file called README.md for generating the root path, which can be an empty file**

You can use the following scripts to run the vuepress commands or you can run them directly, whichever you prefer

`package.json`:

```js
{
  "scripts": {
    "docs:dev": "vuepress dev {dirName}",
    "docs:build": "vuepress build {dirName}"
  }
}
```
If you haven't installed vuepress gloablly, these scripts will be helpful to find the vuepress binaries from `node_modules/.bin` directory and execute them on shell. to execute above scripts, run:
```bash
npm run docs:dev
```

or
```bash
npm run docs:build
```
Accordingly.

