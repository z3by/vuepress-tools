---
author:
  avatar: https://avatars.githubusercontent.com/u/29407286?v=4
  email: amy@askcreative.space
  name: Amy
  url: null
  username: askcreative
bugs: https://github.com/askcreative/saber-theme-vuepress/issues
category: themes
date: '2019-04-14T14:06:58.986Z'
deprecated: false
description: Vuepress default theme for saber.js.
downloads: null
homepage: https://github.com/askcreative/saber-theme-vuepress#readme
keywords:
- saber
- saber-theme
- vuepress
- theme
- egoist
- minimal
- clean
- simple
- askcreative
license: MIT License
maintainers: null
name: saber-theme-vuepress
npm: https://www.npmjs.com/package/saber-theme-vuepress
publisher:
  avatar: null
  email: amy@askcreative.space
  name: null
  url: null
  username: askcreative
repository: https://github.com/askcreative/saber-theme-vuepress
score: 0.4490540953815937
stars: 5
unstable: false
version: 1.0.6
watchers: 5

---

# saber-theme-vuepress

[![npm](https://badgen.net/npm/v/saber-theme-vuepress)](https://npm.im/saber-theme-vuepress) 

> A Saber Port of the Default Vuepress Theme.

## Install

```bash
yarn add saber-theme-vuepress
```

In your `saber-config.yml`:

```yml
theme: vuepress
```

This theme works best with following plugins:

- `saber-plugin-query-posts`: Inject `posts` to homepage's `page` prop, generate tag pages

```bash
yarn add saber-plugin-query-posts markdown-it-div
```

```yml
plugins:
  - resolve: saber-plugin-query-posts
```
and markdown-it-div
```yml
markdown:
  plugins:
    - resolve: markdown-it-div
```

## Layouts

- `home`: Setup just like the Vuepress home page. All fields are populated from saber-config.yml.
- `post`: For individual blog posts.
- `blog`: A page to show all your posts.
- `page`: For normal pages with a sidebar.
- `default`: For any other pages without a sidebar.

## Site Config

Configure site title, description etc in your `saber-config.yml`:

```yml
siteConfig:
  title: My Site
  description: About this website.
  author: My Name
  email: my@email.com
```

## Theme Config

### Navbar

Configure `nav` to show a set of links in header and optional repository link:

```yml
themeConfig:
  nav:
    - text: Home
      link: /
    - text: About
      link: /about.html
repo:
    - site: github
      name: your name
```

### Home Page

Configure a home page at ./pages/index.md:

```yml
---
layout: home
heroImage: logo.jpg
heroTitle: Hello
heroDescription: Welcome to saber-theme-vuepress
actionText: Get Started →
actionLink: /about.html
features: 
  - title: Title One
    details: Details for title one.
  - title: Saber-Powered
    details: With Saber, static rendering with Vue.js is easier now than ever. 
  - title: Title Three
    details: Details for title three.
footer: Footer info goes here.
---
```

## License

MIT.