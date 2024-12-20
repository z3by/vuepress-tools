---
author:
  avatar: https://private-avatars.githubusercontent.com/u/22654945?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU4MDAsIm5iZiI6MTczNDY1NDYwMCwicGF0aCI6Ii91LzIyNjU0OTQ1In0.12cqJFglNx2NFevN8OO8Vp8BVF58dyekpWIxp5vPnpM&v=4
  email: null
  name: Yasinchan
  url: null
  username: YasinChan
bugs: https://github.com/YasinChan/vuepress-theme-inherit/issues
category: themes
date: '2022-05-14T12:02:41.348Z'
deprecated: false
description: vuepress blog theme
downloads: null
homepage: https://github.com/YasinChan/vuepress-theme-inherit#readme
keywords: null
license: false
maintainers: null
name: vuepress-theme-inherit
npm: https://www.npmjs.com/package/vuepress-theme-inherit
publisher:
  avatar: null
  email: yasinchan2016@gmail.com
  name: null
  url: null
  username: yasinchan
repository: https://github.com/YasinChan/vuepress-theme-inherit
score: 0.3442564846122903
stars: 5
unstable: false
version: 1.0.6
watchers: 5

---

# vuepress-theme-inherit

> The `vuepress` blog theme inherited from `@vuepress/theme-default`, supports archiving and tagging functions, and can automatically sort blogs by time.

## NPM
<https://www.npmjs.com/package/vuepress-theme-inherit>

## DEMO
<https://yasinchan.com>  
[Source code](https://github.com/YasinChan/vuepress-blog)

## Install
> Note: The following operations can be found in the official document. Please familiarize yourself with the [documentation](https://vuepress.vuejs.org/) first.  

***After install and configure the basic [vuepress](https://vuepress.vuejs.org/guide/getting-started.html#global-installation) framework***, do the following operations:
1. Install
    ```
    yarn add vuepress-theme-inherit
    ```
2. Create a `/post` `/tags` `/archives` directory under the `/doc` directory to load the blog homepage list, tags and archive functions.
    ```
    .
    ├── docs
    │   ├── tags
    │   │   └── README.md
    │   ├── archives
    │   │   └── README.md
    │   ├── post
    │   │   └── README.md
    |   |
    ```
3. Add the following configration in the `config.js` to import the theme and generate the navigation bar.
    ```
    theme: 'vuepress-theme-inherit',
    themeConfig: {
      nav: [
        ...
        {text: 'blog', link: '/post/'},
        {text: 'tags', link: '/tags/'},
        {text: 'archives', link: '/archives/'},
        ...
      ]
    },
    ```
4. Add the following keywords in the blog markdown file [Front Matter](https://vuepress.vuejs.org/guide/frontmatter.html)  to let the script sort 
    ```
    ---
    created: 2020-1-1
    updated: 2020-2-1
    tags: 
      - Configration
      - Technology
      - Life
    ---
    ```
    Options
    1. `created` and `updated` is used to record the creation and editing time of the blog, as well as used to sort the blog homepage (sort rule : update -> created -> no configration).
    2. `created` also used to sort the archives.
    3. `tags` is used to filter the tags.
    4. Blog homepage will create the blog list, base on the markdown files you created under the `/post` directory automatically.
    5. These above functions will be automatically configured without additional operations.
    6. The `README.md` under the three folders of `/archives` `/tags` `/post` can be accessed through [Front Matter](https://vuepress.vuejs.org/guide/frontmatter.html) to set the relevant page information include title, keywords and descriptions

## TODO
- [ ] Pagination
- [ ] Better SEO
