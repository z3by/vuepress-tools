---
author:
  avatar: https://avatars.githubusercontent.com/u/24715727?v=4
  email: ocavue#gmail.com
  name: ocavue
  url: null
  username: ocavue
bugs: https://github.com/ocavue/vuepress-theme-blogue/issues
category: theme
date: '2020-12-27T14:17:51.010Z'
deprecated: false
description: '> A [VuePress](https://vuepress.vuejs.org/) theme made for blog'
downloads: null
homepage: https://github.com/ocavue/vuepress-theme-blogue#readme
keywords: null
license: MIT License
maintainers: null
name: vuepress-theme-blogue
npm: https://www.npmjs.com/package/vuepress-theme-blogue
publisher:
  avatar: null
  email: ocavue@gmail.com
  name: null
  url: null
  username: ocavue
repository: https://github.com/ocavue/vuepress-theme-blogue
score: 0.5173465852919474
stars: 11
unstable: true
version: 0.8.1
watchers: 11

---

# vuepress-theme-blogue

> A [VuePress](https://vuepress.vuejs.org/) theme made for blog

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Version](https://img.shields.io/npm/v/vuepress-theme-blogue.svg)](https://www.npmjs.com/package/vuepress-theme-blogue)
[![License](https://img.shields.io/npm/l/vuepress-theme-blogue.svg)](https://www.npmjs.com/package/vuepress-theme-blogue)

*This project is under active development. Any feedback or contributions would be appreciated*

## Live demo

https://ocavue.com/

## Basic Usage

First of all, your need to have a VuePress project. Your can follow [VuePress's official guide](https://vuepress.vuejs.org/guide/getting-started.html#inside-an-existing-project) to create one. Then you can use one of the following commands to install this theme.

```bash
yarn add vuepress-theme-blogue
// or
npm install vuepress-theme-blogue
```

## Project Configuration

Edit `.vuepress/config.js` to configure this theme. Below is the default configuration.

```js
...
module.exports = {
    ...
    title: "Project Blogue",
    themeConfig: {
        avatarImage: "https://ws2.sinaimg.cn/large/006tKfTcgy1ftrhghh2cgj3074074dfp.jpg",
        blogPluginConfig: {
            comment: {
                // Which service you'd like to use
                service: 'disqus',
                // The owner's name of repository to store the issues and comments.
                shortname: 'ocavue.com',
            },
        }
    }
}
```

- **`title`**: Your blog's title, will be displayed in the toolbar/navbar
- **`avatarImage`**: URL string for avatar, will be displayed in the drawer/sidebar.
- **`blogPluginConfig`**: Any extra configuration for [vuepress-plugin-blog](https://github.com/vuepress/vuepress-plugin-blog)

## Blog Post Configuration

For every markdown file in your VuePress project, you need a [front matter](https://vuepress.vuejs.org/guide/markdown.html#front-matter) on top of the file. The example below uses YAML front matter but [other languages](https://vuepress.vuejs.org/guide/markdown.html#alternative-front-matter-formats) are supported too.

```
---
title: My first blog
date: 2018-07-01
image: https://ws1.sinaimg.cn/large/006tNc79ly1fsxfr3d6eij31kw11x4qq.jpg
tags: ["blog", "markdown"]
hide: false
---
```

- **`title`** (required, string): Your post's title. vuepress-theme-blogue will NOT find H1 title inside your markdown file.
- **`date`** (required, date): Your post's date. Your need to use **YYYY-MM-DD** format. vuepress-theme-blogue use post's date to sort, so this field is required.
- **`image`** (optional, string): Your post's cover image URL.
- **`tags`** (optional, list): Your post's tags.
- **`hide`** (optional, boolean): Hide this post in the homepage.

Your will need **README.md** and **about.md** in your docs directory. These two posts will not be displayed on the home page.

## Comment

`vuepress-theme-blogue` use `@vuepress/plugin-blog` to provide comment. Check [its document](https://vuepress-plugin-blog.ulivz.com/guide/getting-started.html#comment) for more details.

## Complete Example

See https://github.com/ocavue/vuepress-theme-blogue/tree/master/example

## TODO

- [x] Update vuepress to 1.0
- [x] Tags
- [x] Comments
- [x] Configurable
- [ ] Customizable sidebar

## Contribution

- [Git Commit Message Style](http://udacity.github.io/git-styleguide/)
