---
author:
  avatar: https://private-avatars.githubusercontent.com/u/52976082?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU3NDAsIm5iZiI6MTczNDY1NDU0MCwicGF0aCI6Ii91LzUyOTc2MDgyIn0.TRjgH0WeT2bmZPTN-EozV5Mq6jQySgAgdAQeP7hqI08&v=4
  email: null
  name: PunkLee
  url: null
  username: punklee333
bugs: https://github.com/PunkLee2py/vuepress-theme-materialize/issues
category: themes
date: '2020-12-11T22:04:44.675Z'
deprecated: false
description: Materialize theme for VuePress
downloads: null
homepage: https://github.com/PunkLee2py/vuepress-theme-materialize#readme
keywords:
- vue
- vuepress
- materialize
- theme
license: MIT License
maintainers: null
name: vuepress-theme-materialize
npm: https://www.npmjs.com/package/vuepress-theme-materialize
publisher:
  avatar: null
  email: li19940829510@163.com
  name: null
  url: null
  username: punklee
repository: https://github.com/PunkLee2py/vuepress-theme-materialize
score: 0.4509716681995824
stars: 0
unstable: false
version: 1.1.7
watchers: 0

---

# vuepress-theme-materialize

Materialize theme for VuePress

中文介绍 --> [访问](./README.zh.md)

## Introduce

-   This is a Vuepress theme
-   Themes built with [Materialize UI](https://materializecss.com/)
-   Designed to provide the most convenient experience

## Quick start

### npm

```bash
npm install vuepress-theme-materialize -D
```

### vuepress

```js
// .vuepress/config.js
module.exports = {
    title: "Jack",
    description: "Write Less, Do More",
    theme: "materialize",
};
```

## Preview

### HomePage

![HomePage](./preview/HomePage.png)

### TagPage

![TagPage](./preview/TagPage.png)

### TimeLinePage

![TimeLinePage](./preview/TimelinePage.png)

### Demo

[My Blog Page](https://punk_lee.gitee.io/)

## FrontMatter

A full `frontmatter` case:

```yaml
---
title: Hello VuePress
tags:
    - vue
    - vuePress
categories:
    - vue
description: Vue-powered Static Site Generator
cover: /images/vuepress/cover.png
coverStyle: { object-fit: scale-down }
sticky: TOP
toc: false
comments: false
password: 20201211
---

```

### Predefined Variables

**title**

-   Type:`string`
-   Default:`The file name`
-   Description: Title of the posts

**tags**

-   Type:`array`
-   Default:`[]`
-   Description: Tag of the posts

**categories**

-   Type:`array`
-   Default:`[]`
-   Description: Category of posts

**description**

-   Type:`string`
-   Default:`get the first 78 characters of the article (except HTML tags)`
-   Description: Description of the posts

**cover**

-   Type:`string`
-   Default:`$themeConfig.img.global`
-   Description: Cover of the posts

**coverStyle**

-   Type:`string`
-   Default:`undefined`
-   Description: Cover style of the posts

**sticky**

-   Type:`string`
-   Default:`undefined`
-   Description: Sticky posts, accept string as sticky text

**toc**

-   Type:`boolean`
-   Default:`true`
-   Description: Table of content

**comments**

-   Type:`boolean`
-   Default:`true`
-   Description: Comments of the posts

**password**

-   Type:`string`
-   Default:`undefined`
-   Description: Encrypted posts

## ThemeConfig

> **tips:** The timeline, tabs and categories page default is enable

### Basic Config

The default as:

```js
// .vuepress/config.js
module.exports = {
    themeConfig: {
        avatar: "", // your avatar picture
        notice: "", // website notice in card widget
        sort: "ctime", // sort the list of posts by created or updated time
        docsDate: "", // 'docs' folder creation time
        footer: {
            start: "", // blog start date
            end: "", // blog start date, default is automatic fetch
            customText: "", // or ["text1", "text2 <a href='/'>link</a>", ...]
            themeInfo: true, // or false: disable to show theme info
        },
        pagination: {
            perPage: 6,
            range: 3,
        },
    },
};
```

**avatar||notice**

-   Type:`string`

**sort**

-   Type:`string`
-   Optional: `ctime` `mtime`

**docsDate**

-   Type:`string`
-   Format: `YYYY-MM-DD HH:mm:ss`

### Tags/Categories/Timelines Page

The default as:

```js
// .vuepress/config.js
module.exports = {
    themeConfig: {
        tags: {
            text: "",
            icon: "local_offer",
            location: 0,
            tableClass: "",
        },
        categories: {
            text: "",
            icon: "category",
            location: 0,
            tableClass: "",
        },
        timelines: {
            text: "",
            icon: "av_timer",
            location: 0,
        },
    },
};
```

**text**

-   Type:`string`
-   Description: Text displayed in the blog

**icon**

-   Type:`string`
-   Description: Icons displayed in blogs

**location**

-   Type:`number`
-   Description: Location in navbar menu

**tableClass**

-   Type:`string`
-   Optional style: `striped` `highlight` `centered`
-   Description: The table style rendered in the tags/categories page

### Navbar

Example:

```js
// .vuepress/config.js
module.exports = {
    themeConfig: {
        nav: [
            // Single link in navbar:
            {
                text: "first link",
                icon: "extension",
                link: "https://google.com",
                target: "_self",
                location: 1,
            },

            // Dropdown in navbar:
            {
                text: "AboutMe",
                items: [
                    {
                        text: "Github",
                        icon: "link",
                        link: "https://github.com/xxxxx",
                    },
                    {
                        text: "Gitee",
                        icon: "link",
                        link: "https://gitee.com/xxxxx",
                    },
                ],
            },
        ],
    },
};
```

**text**

-   Type:`string`
-   Description: Text displayed in the navbar

**icon**

-   Type:`string`
-   Description: Icons displayed in navbar

**link**

-   Type:`string`
-   Description: Navbar link

**location**

-   Type:`number`
-   Description: Location in navbar menu

**target**

-   Type:`string`
-   Optional: `_blank` `_self`

### Page Loading Effect

The default as:

```js
// .vuepress/config.js
module.exports = {
    themeConfig: {
        pageLoading: { text: "", com: 0, side: "", delay: 0 },
    },
};
```

**text**

-   Type:`string`
-   Description: Text in preloader effect

**com**

-   Type:`number`
-   Optional: `0-12`
-   Description: Index of the component

**side**

-   Type:`string`
-   Optional: `left` `right` `top` `bottom`
-   Description: Direction in which the effect ends

**delay**

-   Type:`number`
-   Description: Delay loading effect, In milliseconds

### Page Post Card

The default as:

```js
// .vuepress/config.js
module.exports = {
    themeConfig: {
        pagePost: { side: "right", com: 0 },
    },
};
```

**side**

-   Type:`string`
-   Optional:`left` `right`
-   Description: The side of the post list in the page

**com**

-   Type:`number`
-   Optional: `0-2`
-   Description: Index of the component

### Page Card Widgets

The default as:

```js
// .vuepress/config.js
module.exports = {
    themeConfig: {
        pageWidgets: {
            sticky: false, // sticky layout
            CardInfo: true,
            CardNotice: true,
            CardClock: false,
            CardSiteInfo: true,
        },
        // or all disable
        // pageWidgets: false,
    },
};
```

### Page Banner

The default as:

```js
// .vuepress/config.js
module.exports = {
    themeConfig: {
        pageBanner: {
            enable: false, // or ["/", "/tags/", "/categories/", "/timelines/"]
            effect: 0,
            title: "",
            text: "", // or ["text1", "text2", ...]
            items: "", // or ["img1", "img2", ...]
            style: {},
        },
    },
};
```

**enable**

-   Type:`boolean||array`
-   Description: `true || false` is all enable or all disable, `["/tags/", "/categories/"]` is enable in the tags and categories page

**effect**

-   Type:`number`
-   Optional: `1-10`
-   Description: Effect Letters Title, disable by default

**title**

-   Type:`string`
-   Description: If no effect value, The effect is the same as text by default

**text**

-   Type:`string||array`
-   Description: The text displayed in the banner

**items**

-   Type:`string||array`
-   Description: The image displayed in the banner

### Search Config

> Currently, only local search is supported

The default as:

```js
// .vuepress/config.js
module.exports = {
    themeConfig: {
        search: {
            placeholder: "Please enter title/tag/category",
            maxSuggestions: 10,
            hotKeys: "F2",
        },
    },
};
```

### Comment Config

> Currently only [Valine](https://valine.js.org/en/index.html) is supported

> `appId` and `appKey` is required

The default as:

```js
// .vuepress/config.js
module.exports = {
    themeConfig: {
        valine: {
            appId: "",
            appKey: "",
            avatar: "retro",
            visitor: true,
            lang: "en",
        },
    },
};
```

### 404 Page

The default as:

```js
// .vuepress/config.js
module.exports = {
    themeConfig: {
        page404: {
            message: "BAD REQUEST", // or ["msg1", "msg2"]
        },
    },
};
```

**message**

-   Type:`string||array`
-   Description: Text displayed in 404 page, If value is a array, it will be displayed randomly

### Extra Config

```js
// .vuepress/config.js
module.exports = {
    themeConfig: {
        // Color options in the sidebar
        colorList: [],

        // Global Image
        img: {
            loading: "", // "/loadingImg.gif" or "loadingImg.svg"
            loadingSvg: 10, // 0 ~ 11 // if not set loading, default to use theme svg effects
            error: "", // "/errorImg.png"
            global: "https://picsum.photos/400/200", // For posts without a cover
        },
    },
};
```

## ThemeStyle

[palette.styl](./styles/palette.styl)

## ChangeLog

[ChangeLog](https://github.com/PunkLee2py/vuepress-theme-materialize/blob/main/CHANGELOG.md)

## License

[MIT](https://github.com/PunkLee2py/vuepress-theme-materialize/blob/main/LICENSE)
